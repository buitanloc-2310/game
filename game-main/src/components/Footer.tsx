import React from 'react';
import { ExternalLink, Globe2, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { navigate } from '../lib/router';
import { languages } from '../data/languages';
import type { SiteConfig } from '../types';

const defaultPortals=[
 ['Cổng Thành viên','member.skyfirst.io.vn','https://member.skyfirst.io.vn'],
 ['Cổng Tình nguyện viên','tnv.skyfirst.io.vn','https://tnv.skyfirst.io.vn'],
 ['Cổng Thông tin','ctt.skyfirst.io.vn','https://ctt.skyfirst.io.vn'],
 ['Cổng Học thuật','academic.skyfirst.io.vn','https://academic.skyfirst.io.vn'],
 ['Website chính','skyfirst.io.vn','https://skyfirst.io.vn']
];
export function Footer({config}:{config:SiteConfig}){const go=(p:string)=>(e:React.MouseEvent)=>{e.preventDefault();navigate(p)};const portalRows=config.footerPortals?.length?config.footerPortals.map(p=>[p.name,p.domain,p.url||`https://${p.domain}`]):defaultPortals;const langs=config.languageItems?.length?config.languageItems.filter((l:any)=>l.status!=='disabled'):languages;return <footer className="footer-v2"><div className="footer-top"><div className="footer-brand-v2"><div className="footer-brandline"><img src={config.logoUrl||'/brand/sky-first-logo.png'} alt="Sky First"/><div><strong>Sky First Games</strong><span>PLAY • LEARN • LEVEL UP</span></div></div><p>{config.footerAbout}</p><a href={config.mainSiteUrl} target="_blank" rel="noreferrer"><Globe2/>{config.mainSiteLabel}<ExternalLink/></a></div><div><h4>Sky First Games</h4><a href="/explore" onClick={go('/explore')}>Khám phá game</a><a href="/join" onClick={go('/join')}>Nhập mã tham gia</a><a href="/quick-play" onClick={go('/quick-play')}>Chơi nhanh</a><a href="/login" onClick={go('/login')}>Creator Studio</a></div><div><h4>Hệ thống</h4><a href="/about" onClick={go('/about')}><Sparkles/>Giới thiệu</a><a href="/privacy" onClick={go('/privacy')}><ShieldCheck/>Quyền riêng tư</a><a href={`mailto:${config.contactEmail}`}><Mail/>{config.contactEmail}</a></div><div className="footer-languages"><h4>Ngôn ngữ</h4><div>{langs.map((l:any)=><span key={l.code}>{l.icon} {l.nativeName}</span>)}</div></div></div><div className="portal-strip"><div className="portal-title"><span>CÁC CỔNG SKY FIRST</span><b>Kết nối hệ sinh thái</b></div>{portalRows.map(([name,domain,url])=><a key={domain} href={url} target="_blank" rel="noreferrer"><span>{name}</span><b>{domain}</b><ExternalLink/></a>)}</div><div className="footer-bottom-v2"><span>{config.footerCopyright||<>© 2026 <b>Sky First Games</b> — Bản quyền thuộc Mạng lưới Giáo dục & Phát triển Cộng đồng Sky First.</>}</span><span>{config.footerEcosystemLine||<>Một sản phẩm thuộc hệ sinh thái <b>Sky First Network</b>.</>}</span></div></footer>}
