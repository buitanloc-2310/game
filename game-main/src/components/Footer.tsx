import React from 'react';
import { ExternalLink, Globe2, Mail } from 'lucide-react';
import { navigate } from '../lib/router';
import { languages } from '../data/languages';
import type { SiteConfig } from '../types';

const portals=[
 ['Member Portal','member.skyfirst.io.vn','https://member.skyfirst.io.vn'],
 ['Volunteer Portal','tnv.skyfirst.io.vn','https://tnv.skyfirst.io.vn'],
 ['Information Portal','ctt.skyfirst.io.vn','https://ctt.skyfirst.io.vn'],
 ['Academic Portal','academic.skyfirst.io.vn','https://academic.skyfirst.io.vn'],
 ['Sky First Network Main Website','skyfirst.io.vn','https://skyfirst.io.vn']
];

export function Footer({config}:{config:SiteConfig}){
  const [learningLang,setLearningLang]=React.useState(()=>localStorage.getItem('sfg_learning_lang')||'en');
  const go=(p:string)=>(e:React.MouseEvent)=>{e.preventDefault();navigate(p)};
  const choose=(code:string)=>{setLearningLang(code);localStorage.setItem('sfg_learning_lang',code);};
  const portalRows=config.footerPortals?.length?config.footerPortals.map(p=>[p.name,p.domain,p.url||`https://${p.domain}`]):portals;
  return <footer className="footer-v2"><div className="footer-top"><div className="footer-brand-v2"><div className="footer-brandline"><img src={config.logoUrl||'/brand/sky-first-logo.png'} alt="Sky First"/><div><strong>Sky First Games</strong><span>PLAY • LEARN • LEVEL UP</span></div></div><p>{config.footerAbout||'Sky First Games is a multilingual learning-game platform within the Sky First Network ecosystem.'}</p><a href="https://skyfirst.io.vn" target="_blank" rel="noreferrer"><Globe2/>Main Website — Sky First Network<ExternalLink/></a></div>
  <div><h4>Sky First Games</h4><a href="/explore" onClick={go('/explore')}>Explore Games</a><a href="/join" onClick={go('/join')}>Join with Code / QR</a><a href="/quick-play" onClick={go('/quick-play')}>Quick Play</a><a href="/volunteer" onClick={go('/volunteer')}>Volunteers</a><a href="/login" onClick={go('/login')}>Creator Studio</a></div>
  <div><h4>Information & Policies</h4><a href="/info/how-to-play" onClick={go('/info/how-to-play')}>How to Play</a><a href="/info/organization-rules" onClick={go('/info/organization-rules')}>Organization & Rules</a><a href="/info/privacy" onClick={go('/info/privacy')}>Privacy Policy</a><a href="/info/copyright" onClick={go('/info/copyright')}>Copyright</a><a href="/info/support" onClick={go('/info/support')}>Support</a><a href="mailto:hotro.sfn@gmail.com"><Mail/>hotro.sfn@gmail.com</a></div>
  <div className="footer-language-select"><h4>Learning Language</h4><label><span>Choose a language</span><select value={learningLang} onChange={e=>choose(e.target.value)}>{languages.map(l=><option value={l.code} key={l.code}>{l.icon} {l.nativeName}</option>)}</select></label><small>The system interface stays in English. This menu only selects the language you want to learn.</small></div></div>
  <div className="portal-strip"><div className="portal-title"><span>SKY FIRST PORTALS</span><b>Connected ecosystem</b></div>{portalRows.map(([name,domain,url])=><a key={domain} href={url} target="_blank" rel="noreferrer"><span>{name}</span><b>{domain}</b><ExternalLink/></a>)}</div>
  <div className="footer-bottom-v2"><span>© 2026 Sky First Games — Copyright belongs to the Sky First Education & Community Development Network.</span><em>A product within the Sky First Network ecosystem.</em></div></footer>
}
