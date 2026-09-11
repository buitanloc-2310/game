import React from 'react';
import { ChevronDown, LogIn, Menu, ShieldCheck, UserCircle2, Wrench, X } from 'lucide-react';
import { navigate } from '../lib/router';
import type { Account, SiteConfig } from '../types';

const defaultOverviewItems=[
  ['Sign in','/login'],['Creator Studio','/info/creator-studio'],['About Sky First Games','/info/about'],['How to Play','/info/how-to-play'],['User Guide','/info/guide'],['Organization & Rules','/info/organization-rules'],['Participation Rules','/info/participation-rules'],['Terms of Use','/info/terms'],['Privacy Policy','/info/privacy'],['Copyright','/info/copyright'],['Community Guidelines','/info/community'],['Safety & Security','/info/safety'],['Support','/info/support'],['Requests & Feedback','/info/request-feedback'],['Report an Issue','/info/report-issue'],['FAQ','/info/faq'],['Contact & Collaboration','/info/contact'],['System Status','/info/status'],['Changelog','/info/changelog'],['Main Sky First Network Website','https://skyfirst.io.vn']
] as const;

export function NavBar({account,onLogout,config}:{account:Account|null;onLogout:()=>void;config:SiteConfig}){
  const [open,setOpen]=React.useState(false); const [overview,setOverview]=React.useState(false);
  const main=config.navigationItems?.length?config.navigationItems:[{label:'Home',url:'/'},{label:'Explore',url:'/explore'},{label:'Join',url:'/join'},{label:'Volunteers',url:'/volunteer'},{label:'Overview',url:'/overview'}];
  const overviewItems=(config.overviewItems?.length?config.overviewItems.filter(x=>x.enabled!==false).map(x=>[x.label,x.url] as const):defaultOverviewItems);
  const go=(p:string)=>{setOpen(false);setOverview(false);navigate(p)};
  return <header className="topbar"><div className="topbar-inner"><button className="brand-button brand-with-logo" onClick={()=>go('/')} aria-label="Home"><img src={config.logoUrl||'/brand/sky-first-logo.png'} alt="Sky First"/><span className="brand-text"><strong>SKY FIRST</strong><em>GAMES</em></span></button>
  <nav className={open?'nav-links open':'nav-links'}>
    <button onClick={()=>go(main[0]?.url||'/')}>{main[0]?.label||'Home'}</button>
    <button onClick={()=>go(main[1]?.url||'/explore')}>{main[1]?.label||'Explore'}</button>
    <button onClick={()=>go(main[2]?.url||'/join')}>{main[2]?.label||'Join'}</button>
    <button onClick={()=>go(main[3]?.url||'/volunteer')}>{main[3]?.label||'Volunteers'}</button>
    <div className={overview?'nav-dropdown open':'nav-dropdown'}><button className="nav-dropdown-trigger" onClick={()=>setOverview(v=>!v)}>{main[4]?.label||'Overview'} <ChevronDown/></button><div className="mega-dropdown">{overviewItems.map(([label,url])=>url.startsWith('http')?<a key={url} href={url} target="_blank" rel="noreferrer">{label}</a>:<button key={url} onClick={()=>go(url)}>{label}</button>)}</div></div>
    {account&&<div className="mobile-account-links"><button onClick={()=>go('/creator')}><Wrench/>Creator Studio</button>{account.isAdmin&&<button onClick={()=>go('/admin')}><ShieldCheck/>Admin Console</button>}</div>}
  </nav>
  <div className="nav-actions">{account?<div className="account-menu"><button className="account-pill" onClick={()=>go('/creator')}><UserCircle2/>{account.displayName}</button>{account.isAdmin&&<button className="admin-mini" onClick={()=>go('/admin')}><ShieldCheck/>Admin</button>}<button className="ghost-button small" onClick={onLogout}>Sign out</button></div>:<button className="ghost-button" onClick={()=>go('/login')}><LogIn/>Sign in</button>}<button className="menu-button" onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button></div>
  </div></header>
}
