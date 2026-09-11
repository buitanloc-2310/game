import React from 'react';
import { Gamepad2, Menu, X, LogIn, Sparkles, Wrench, ShieldCheck } from 'lucide-react';
import { navigate } from '../lib/router';
import type { Account, SiteConfig } from '../types';

export function NavBar({ account, onLogout, config }: { account: Account | null; onLogout: () => void; config: SiteConfig }) {
  const [open, setOpen] = React.useState(false);
  const go = (path: string) => { setOpen(false); navigate(path); };
  return <header className="topbar">
    <div className="topbar-inner">
      <button className="brand-button" onClick={() => go('/')} aria-label="Trang chủ">
        <span className="brand-orb"><Gamepad2 size={23}/></span>
        <span className="brand-text"><strong>SKY FIRST</strong><em>GAMES</em></span>
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {(config.navigationItems?.length ? config.navigationItems : [{label:'Khám phá',url:'/explore'},{label:'Nhập mã',url:'/join'},{label:'Chơi nhanh',url:'/quick-play'}]).map(item => item.url.startsWith('/') ? <button key={item.url} onClick={() => go(item.url)}>{item.label}</button> : <a key={item.url} href={item.url} target="_blank" rel="noreferrer">{item.label}</a>)}
        {account && <button onClick={() => go('/creator')}><Wrench size={16}/> Creator</button>}
        {account?.isAdmin && <button onClick={() => go('/admin')}><ShieldCheck size={16}/> Admin</button>}
      </nav>
      <div className="nav-actions">
        {account ? <>
          <button className="account-pill" onClick={() => go('/creator')}>{account.displayName}</button>
          <button className="ghost-button small" onClick={onLogout}>Đăng xuất</button>
        </> : <button className="ghost-button" onClick={() => go('/login')}><LogIn size={17}/> Creator</button>}
        <button className="menu-button" onClick={() => setOpen(v=>!v)}>{open ? <X/> : <Menu/>}</button>
      </div>
    </div>
  </header>;
}
