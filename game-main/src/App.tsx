import React from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { QuickPlayPage } from './pages/QuickPlayPage';
import { JoinPage } from './pages/JoinPage';
import { LoginPage } from './pages/LoginPage';
import { InitializePage } from './pages/InitializePage';
import { CreatorPage } from './pages/CreatorPage';
import { AdminPage } from './pages/AdminPage';
import { RoomPage } from './pages/RoomPage';
import { HostPage } from './pages/HostPage';
import { VolunteerPage } from './pages/VolunteerPage';
import { InfoPage } from './pages/InfoPage';
import { GamePlayer } from './components/GamePlayer';
import { getRoute } from './lib/router';
import { api, authToken } from './lib/api';
import { gameModes } from './data/gameModes';
import { seedQuestionSets } from './data/seedContent';
import type { Account, SiteConfig } from './types';

const fallbackConfig: SiteConfig = {brandName:'Sky First Games',shortName:'SFG',tagline:'PLAY • LEARN • LEVEL UP',heroTitle:'Play. Learn. Level Up.',heroSubtitle:'Nền tảng trò chơi học tập đa ngôn ngữ của Sky First — từ lớp học tới đời sống và nơi làm việc.',mainSiteUrl:'https://skyfirst.io.vn',mainSiteLabel:'Website chính — Sky First Network',announcement:'15 ngôn ngữ • 40+ Game Modes • bài tập thực tế',maintenance:false,primaryCta:'Chơi ngay',footerAbout:'Sky First Games là nền tảng trò chơi học tập đa ngôn ngữ thuộc hệ sinh thái Sky First Network.',seoTitle:'Sky First Games',seoDescription:'Hệ sinh thái trò chơi học tập đa ngôn ngữ của Sky First.',contactEmail:'hotro.sfn@gmail.com'};
function DynamicPlay({modeId,setId}:{modeId:string|null;setId:string|null}){const [mode,setMode]=React.useState(gameModes.find(m=>m.id===modeId)||gameModes[0]);const [set,setSet]=React.useState(seedQuestionSets.find(s=>s.id===setId)||seedQuestionSets[0]);React.useEffect(()=>{api.publicGameModes().then(r=>{const m=r.modes.find(x=>x.id===modeId);if(m)setMode(m)}).catch(()=>{});api.publicQuestionSets().then(r=>{const q=r.sets.find(x=>x.id===setId);if(q)setSet(q)}).catch(()=>{})},[modeId,setId]);return <GamePlayer set={set} mode={mode}/>}
export default function App(){const [route,setRoute]=React.useState(getRoute());const [account,setAccount]=React.useState<Account|null>(null);const [config,setConfig]=React.useState<SiteConfig>(fallbackConfig);React.useEffect(()=>{const fn=()=>setRoute(getRoute());addEventListener('popstate',fn);return()=>removeEventListener('popstate',fn)},[]);React.useEffect(()=>{api.publicConfig().then(r=>setConfig({...fallbackConfig,...r.config})).catch(()=>{});if(authToken.get())api.me().then(r=>setAccount(r.account)).catch(()=>authToken.clear())},[]);React.useEffect(()=>{document.title=config.seoTitle||'Sky First Games';document.documentElement.style.setProperty('--blue',config.primaryColor||'#0ea5e9');document.documentElement.style.setProperty('--navy',config.navyColor||'#07182f');let meta=document.querySelector('meta[name=description]') as HTMLMetaElement|null;if(!meta){meta=document.createElement('meta');meta.name='description';document.head.appendChild(meta)}meta.content=config.seoDescription||''},[config]);const logout=async()=>{try{await api.logout()}catch{}authToken.clear();setAccount(null);history.pushState({},'', '/');setRoute(getRoute())};const p=route.path;let page:React.ReactNode;if(p==='/explore')page=<ExplorePage/>;else if(p==='/quick-play')page=<QuickPlayPage/>;else if(p==='/join'||p.startsWith('/join/'))page=<JoinPage config={config}/>;else if(p==='/volunteer')page=<VolunteerPage config={config}/>;else if(p.startsWith('/info/'))page=<InfoPage slug={decodeURIComponent(p.slice('/info/'.length))}/>;else if(p==='/about')page=<InfoPage slug="about"/>;else if(p==='/privacy')page=<InfoPage slug="privacy"/>;else if(p==='/room')page=<RoomPage/>;else if(p.startsWith('/host/'))page=<HostPage token={decodeURIComponent(p.slice('/host/'.length))}/>;else if(p==='/login')page=<LoginPage onAuth={setAccount}/>;else if(p==='/initialize')page=<InitializePage onAuth={setAccount}/>;else if(p==='/creator')page=account?<CreatorPage account={account}/>:<LoginPage onAuth={setAccount}/>;else if(p==='/admin')page=account?.isAdmin?<AdminPage account={account}/>:<LoginPage onAuth={setAccount}/>;else if(p==='/play')page=<DynamicPlay modeId={route.query.get('mode')} setId={route.query.get('set')}/>;else page=<HomePage config={config}/>;const immersive=p==='/play'||p==='/room'||p.startsWith('/host/')||p==='/login'||p==='/initialize'||p==='/creator'||p==='/admin';if(config.maintenance&&!['/login','/admin','/creator'].includes(p)){page=<main className="auth-page"><div className="auth-card"><h1>Hệ thống đang bảo trì</h1><p>Sky First Games đang tạm đóng để cập nhật.</p></div></main>}return <div className="app-shell">{!immersive&&<NavBar account={account} onLogout={logout} config={config}/>} {page} {!immersive&&<Footer config={config}/>}</div>}
