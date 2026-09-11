import React from 'react';
import { ExternalLink, Globe2, Mail } from 'lucide-react';
import { navigate } from '../lib/router';
import { languages } from '../data/languages';
import type { SiteConfig } from '../types';

const portals=[
 ['Cổng Thành viên','member.skyfirst.io.vn','https://member.skyfirst.io.vn'],
 ['Cổng Tình nguyện viên','tnv.skyfirst.io.vn','https://tnv.skyfirst.io.vn'],
 ['Cổng Thông tin','ctt.skyfirst.io.vn','https://ctt.skyfirst.io.vn'],
 ['Cổng Học thuật','academic.skyfirst.io.vn','https://academic.skyfirst.io.vn'],
 ['Website chính Sky First Network','skyfirst.io.vn','https://skyfirst.io.vn']
];

export function Footer({config}:{config:SiteConfig}){
  const [uiLang,setUiLang]=React.useState(()=>localStorage.getItem('sfg_ui_lang')||'vi');
  const go=(p:string)=>(e:React.MouseEvent)=>{e.preventDefault();navigate(p)};
  const choose=(code:string)=>{setUiLang(code);localStorage.setItem('sfg_ui_lang',code);const def=languages.find(l=>l.code===code);document.documentElement.dir=def?.direction||'ltr';document.documentElement.lang=code;};
  const portalRows=config.footerPortals?.length?config.footerPortals.map(p=>[p.name,p.domain,p.url||`https://${p.domain}`]):portals;
  return <footer className="footer-v2"><div className="footer-top"><div className="footer-brand-v2"><div className="footer-brandline"><img src={config.logoUrl||'/brand/sky-first-logo.png'} alt="Sky First"/><div><strong>Sky First Games</strong><span>PLAY • LEARN • LEVEL UP</span></div></div><p>{config.footerAbout||'Sky First Games là nền tảng trò chơi học tập đa ngôn ngữ thuộc hệ sinh thái Sky First Network.'}</p><a href="https://skyfirst.io.vn" target="_blank" rel="noreferrer"><Globe2/>Website chính — Sky First Network<ExternalLink/></a></div>
  <div><h4>Sky First Games</h4><a href="/explore" onClick={go('/explore')}>Khám phá game</a><a href="/join" onClick={go('/join')}>Tham gia bằng mã/QR</a><a href="/quick-play" onClick={go('/quick-play')}>Chơi nhanh</a><a href="/volunteer" onClick={go('/volunteer')}>Tình nguyện viên</a><a href="/login" onClick={go('/login')}>Creator Studio</a></div>
  <div><h4>Thông tin & Chính sách</h4><a href="/info/how-to-play" onClick={go('/info/how-to-play')}>Cách chơi</a><a href="/info/organization-rules" onClick={go('/info/organization-rules')}>Tổ chức & Điều lệ</a><a href="/info/privacy" onClick={go('/info/privacy')}>Quyền riêng tư</a><a href="/info/copyright" onClick={go('/info/copyright')}>Bản quyền</a><a href="/info/support" onClick={go('/info/support')}>Hỗ trợ</a><a href="mailto:hotro.sfn@gmail.com"><Mail/>hotro.sfn@gmail.com</a></div>
  <div className="footer-language-select"><h4>Ngôn ngữ giao diện</h4><label><span>Chọn ngôn ngữ</span><select value={uiLang} onChange={e=>choose(e.target.value)}>{languages.map(l=><option value={l.code} key={l.code}>{l.icon} {l.nativeName}</option>)}</select></label><small>Ngôn ngữ giao diện độc lập với ngôn ngữ đang học.</small></div></div>
  <div className="portal-strip"><div className="portal-title"><span>CÁC CỔNG SKY FIRST</span><b>Kết nối hệ sinh thái</b></div>{portalRows.map(([name,domain,url])=><a key={domain} href={url} target="_blank" rel="noreferrer"><span>{name}</span><b>{domain}</b><ExternalLink/></a>)}</div>
  <div className="footer-bottom-v2"><span>© 2026 Sky First Games — Bản quyền thuộc Mạng lưới Giáo dục & Phát triển Cộng đồng Sky First.</span><em>Một sản phẩm thuộc hệ sinh thái Sky First Network.</em></div></footer>
}
