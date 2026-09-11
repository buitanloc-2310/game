import React from 'react';
import { ExternalLink, Gamepad2, Globe2, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { navigate } from '../lib/router';
import type { SiteConfig } from '../types';

export function Footer({ config }: { config: SiteConfig }) {
  const go=(p:string)=>(e:React.MouseEvent)=>{e.preventDefault();navigate(p)};
  return <footer className="footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <div className="footer-logo"><Gamepad2/><div><strong>{config.brandName}</strong><span>PLAY • LEARN • LEVEL UP</span></div></div>
        <p>{config.footerAbout}</p>
        <a className="main-site-link" href={config.mainSiteUrl} target="_blank" rel="noreferrer"><Globe2 size={17}/>{config.mainSiteLabel}<ExternalLink size={14}/></a>
      </div>
      <div><h4>Sky First Games</h4>{(config.footerLinks?.length?config.footerLinks:[{label:'Khám phá game',url:'/explore'},{label:'Nhập mã tham gia',url:'/join'},{label:'Chơi nhanh',url:'/quick-play'},{label:'Creator Studio',url:'/login'}]).map(x=>x.url.startsWith('/')?<a key={x.url} href={x.url} onClick={go(x.url)}>{x.label}</a>:<a key={x.url} href={x.url} target="_blank" rel="noreferrer">{x.label}</a>)}</div>
      <div><h4>Hệ thống</h4><a href="/about" onClick={go('/about')}><Sparkles size={14}/>Giới thiệu</a><a href="/privacy" onClick={go('/privacy')}><ShieldCheck size={14}/>Quyền riêng tư</a><a href={`mailto:${config.contactEmail}`}><Mail size={14}/>{config.contactEmail}</a></div>
      <div><h4>Ngôn ngữ</h4><span>🇬🇧 English</span><span>🇨🇳 中文</span><span>🇯🇵 日本語</span><span>🇰🇷 한국어</span></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Sky First Games.</span><span>Một sản phẩm thuộc hệ sinh thái Sky First Network.</span></div>
  </footer>;
}
