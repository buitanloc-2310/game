import React from 'react';
import { ChevronDown, LogIn, Menu, ShieldCheck, UserCircle2, Wrench, X } from 'lucide-react';
import { navigate } from '../lib/router';
import type { Account, SiteConfig } from '../types';

const defaultOverviewItems=[
  ['Đăng nhập','/login'],['Creator Studio','/info/creator-studio'],['Giới thiệu Sky First Games','/info/about'],['Cách chơi','/info/how-to-play'],['Hướng dẫn sử dụng','/info/guide'],['Tổ chức & Điều lệ','/info/organization-rules'],['Quy định tham gia','/info/participation-rules'],['Điều khoản sử dụng','/info/terms'],['Chính sách quyền riêng tư','/info/privacy'],['Bản quyền','/info/copyright'],['Quy tắc cộng đồng','/info/community'],['An toàn & bảo mật','/info/safety'],['Hỗ trợ','/info/support'],['Gửi yêu cầu & Phản hồi','/info/request-feedback'],['Báo lỗi & Sự cố','/info/report-issue'],['Câu hỏi thường gặp','/info/faq'],['Liên hệ & Hợp tác','/info/contact'],['Trạng thái hệ thống','/info/status'],['Lịch sử cập nhật','/info/changelog'],['Website chính Sky First Network','https://skyfirst.io.vn']
] as const;

export function NavBar({account,onLogout,config}:{account:Account|null;onLogout:()=>void;config:SiteConfig}){
  const [open,setOpen]=React.useState(false); const [overview,setOverview]=React.useState(false);
  const main=config.navigationItems?.length?config.navigationItems:[{label:'Trang chủ',url:'/'},{label:'Khám phá',url:'/explore'},{label:'Tham gia',url:'/join'},{label:'Tình nguyện viên',url:'/volunteer'},{label:'Tổng quan',url:'/overview'}];
  const overviewItems=(config.overviewItems?.length?config.overviewItems.filter(x=>x.enabled!==false).map(x=>[x.label,x.url] as const):defaultOverviewItems);
  const go=(p:string)=>{setOpen(false);setOverview(false);navigate(p)};
  return <header className="topbar"><div className="topbar-inner"><button className="brand-button brand-with-logo" onClick={()=>go('/')} aria-label="Trang chủ"><img src={config.logoUrl||'/brand/sky-first-logo.png'} alt="Sky First"/><span className="brand-text"><strong>SKY FIRST</strong><em>GAMES</em></span></button>
  <nav className={open?'nav-links open':'nav-links'}>
    <button onClick={()=>go(main[0]?.url||'/')}>{main[0]?.label||'Trang chủ'}</button>
    <button onClick={()=>go(main[1]?.url||'/explore')}>{main[1]?.label||'Khám phá'}</button>
    <button onClick={()=>go(main[2]?.url||'/join')}>{main[2]?.label||'Tham gia'}</button>
    <button onClick={()=>go(main[3]?.url||'/volunteer')}>{main[3]?.label||'Tình nguyện viên'}</button>
    <div className={overview?'nav-dropdown open':'nav-dropdown'}><button className="nav-dropdown-trigger" onClick={()=>setOverview(v=>!v)}>{main[4]?.label||'Tổng quan'} <ChevronDown/></button><div className="mega-dropdown">{overviewItems.map(([label,url])=>url.startsWith('http')?<a key={url} href={url} target="_blank" rel="noreferrer">{label}</a>:<button key={url} onClick={()=>go(url)}>{label}</button>)}</div></div>
    {account&&<div className="mobile-account-links"><button onClick={()=>go('/creator')}><Wrench/>Creator Studio</button>{account.isAdmin&&<button onClick={()=>go('/admin')}><ShieldCheck/>Admin Console</button>}</div>}
  </nav>
  <div className="nav-actions">{account?<div className="account-menu"><button className="account-pill" onClick={()=>go('/creator')}><UserCircle2/>{account.displayName}</button>{account.isAdmin&&<button className="admin-mini" onClick={()=>go('/admin')}><ShieldCheck/>Admin</button>}<button className="ghost-button small" onClick={onLogout}>Đăng xuất</button></div>:<button className="ghost-button" onClick={()=>go('/login')}><LogIn/>Đăng nhập</button>}<button className="menu-button" onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button></div>
  </div></header>
}
