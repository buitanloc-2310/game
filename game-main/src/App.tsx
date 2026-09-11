import React from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { QuickPlayPage } from './pages/QuickPlayPage';
import { JoinPage } from './pages/JoinPage';
import { LoginPage } from './pages/LoginPage';
import { CreatorPage } from './pages/CreatorPage';
import { AdminPage } from './pages/AdminPage';
import { RoomPage } from './pages/RoomPage';
import { HostPage } from './pages/HostPage';
import { GamePlayer } from './components/GamePlayer';
import { getRoute } from './lib/router';
import { api, authToken } from './lib/api';
import { gameModes } from './data/gameModes';
import { seedQuestionSets } from './data/seedContent';
import type { Account, SiteConfig } from './types';

const fallbackConfig: SiteConfig = {
  brandName:'Sky First Games', shortName:'SFG', tagline:'Play. Learn. Level Up.',
  heroTitle:'Chơi để học. Học để đi xa hơn.',
  heroSubtitle:'Hệ sinh thái trò chơi học tập đa ngôn ngữ của Sky First — vào là chơi, tạo một lần và triển khai theo hàng chục cách.',
  mainSiteUrl:'https://skyfirst.io.vn', mainSiteLabel:'Website chính — Sky First Network',
  announcement:'Sky First Games • 40 Game Modes • English, 中文, 日本語, 한국어', maintenance:false,
  primaryCta:'Chơi ngay', footerAbout:'Sky First Games là sản phẩm trò chơi học tập thuộc hệ sinh thái Sky First Network.',
  seoTitle:'Sky First Games', seoDescription:'Hệ sinh thái trò chơi học tập đa ngôn ngữ của Sky First.', contactEmail:'games@skyfirst.io.vn'
};

function StaticPage({kind,config}:{kind:'about'|'privacy';config:SiteConfig}){
  const pg=config.customPages?.[kind]; const fallback=kind==='about'?{title:'Giới thiệu',intro:'Sky First Games là một sản phẩm độc lập trong hệ sinh thái Sky First Network.',body:'Thiết kế đa ngôn ngữ, game-first, không phải một cổng học liệu.'}:{title:'Quyền riêng tư',intro:'Người chơi có thể tham gia bằng mã/link mà không cần tài khoản.',body:'Sky First Games áp dụng nguyên tắc tối thiểu dữ liệu.'}; const data=pg||fallback;
  return <main className="page-shell narrow"><div className="page-hero compact"><span className="eyebrow">SKY FIRST GAMES</span><h1>{data.title}</h1><p>{data.intro}</p></div><div className="panel prose-card"><p>{data.body}</p></div></main>
}

export default function App(){
  const [route,setRoute]=React.useState(getRoute());
  const [account,setAccount]=React.useState<Account|null>(null);
  const [config,setConfig]=React.useState<SiteConfig>(fallbackConfig);
  React.useEffect(()=>{const fn=()=>setRoute(getRoute());addEventListener('popstate',fn);return()=>removeEventListener('popstate',fn)},[]);
  React.useEffect(()=>{api.publicConfig().then(r=>setConfig({...fallbackConfig,...r.config})).catch(()=>{});if(authToken.get())api.me().then(r=>setAccount(r.account)).catch(()=>authToken.clear())},[]);
  React.useEffect(()=>{document.title=config.seoTitle||'Sky First Games'; document.documentElement.style.setProperty('--blue',config.primaryColor||'#0ea5e9'); document.documentElement.style.setProperty('--navy',config.navyColor||'#07182f'); let meta=document.querySelector('meta[name=description]') as HTMLMetaElement|null; if(!meta){meta=document.createElement('meta');meta.name='description';document.head.appendChild(meta)} meta.content=config.seoDescription||''},[config]);
  const logout=async()=>{try{await api.logout()}catch{}authToken.clear();setAccount(null);window.history.pushState({},'', '/');setRoute(getRoute())};

  let page:React.ReactNode;
  const p=route.path;
  if(p==='/explore') page=<ExplorePage/>;
  else if(p==='/quick-play') page=<QuickPlayPage/>;
  else if(p==='/join'||p.startsWith('/join/')) page=<JoinPage/>;
  else if(p==='/room') page=<RoomPage/>;
  else if(p.startsWith('/host/')) page=<HostPage token={decodeURIComponent(p.slice('/host/'.length))}/>;
  else if(p==='/login') page=<LoginPage onAuth={setAccount}/>;
  else if(p==='/creator') page=account?<CreatorPage account={account}/>:<LoginPage onAuth={setAccount}/>;
  else if(p==='/admin') page=account?.isAdmin?<AdminPage account={account}/>:<LoginPage onAuth={setAccount}/>;
  else if(p==='/about') page=<StaticPage kind="about" config={config}/>;
  else if(p==='/privacy') page=<StaticPage kind="privacy" config={config}/>;
  else if(p==='/play'){
    const mode=gameModes.find(m=>m.id===route.query.get('mode'))||gameModes[0];
    const set=seedQuestionSets.find(s=>s.id===route.query.get('set'))||seedQuestionSets[0];
    page=<GamePlayer set={set} mode={mode}/>;
  } else page=<HomePage config={config}/>;

  const immersive=p==='/play'||p==='/room'||p.startsWith('/host/')||p==='/login'||p==='/creator'||p==='/admin';
  if(config.maintenance && !['/login','/admin','/creator'].includes(p)){ page=<main className="auth-page"><div className="auth-card"><div className="auth-brand"><span>🛠️</span><div><strong>Sky First Games</strong><small>Maintenance</small></div></div><h1>Hệ thống đang bảo trì</h1><p>Sky First Games đang tạm đóng để cập nhật. Creator/Admin vẫn có thể đăng nhập để quản trị.</p><button className="secondary-button full" onClick={()=>{history.pushState({},'', '/login');dispatchEvent(new PopStateEvent('popstate'))}}>Creator / Admin</button></div></main>; }
  return <div className="app-shell">{!immersive&&<NavBar account={account} onLogout={logout} config={config}/>} {page} {!immersive&&<Footer config={config}/>}</div>;
}
