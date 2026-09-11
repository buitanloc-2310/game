import React from 'react';
import { ArrowLeft, Clock3, FileText, Mail, Send, ShieldCheck } from 'lucide-react';
import { infoPages } from '../data/infoPages';
import { navigate } from '../lib/router';
import type { SiteConfig } from '../types';
import { api } from '../lib/api';

export function InfoPage({slug,config}:{slug:string;config?:SiteConfig}){
  const base=infoPages[slug];
  const override=(config?.customPages as any)?.[slug]||{};
  const data=base?{...base,title:override.title||base.title,intro:override.intro||base.intro,sections:Array.isArray(override.sections)&&override.sections.length?override.sections:base.sections}:undefined;
  const [requestType,setRequestType]=React.useState('General feedback');
  const [name,setName]=React.useState('');
  const [email,setEmail]=React.useState('');
  const [message,setMessage]=React.useState('');
  const [sent,setSent]=React.useState('');
  if(!data) return <main className="page-shell narrow"><div className="page-hero compact"><h1>Page not found</h1><button className="secondary-button" onClick={()=>navigate('/')}><ArrowLeft/>Home</button></div></main>;
  const send=async()=>{
    try{
      const r=await api.submitSupport({type:slug==='report-issue'?'Issue report':requestType,name,email,message,source:slug});
      setSent(`Request received ${r.ticketCode}.`); setMessage('');
    }catch(e:any){setSent(e.message||'Unable to send request.');}
  };
  const isForm=['request-feedback','report-issue','support','contact'].includes(slug);
  return <main className="page-shell info-page-shell">
    <div className="info-hero">
      <button className="text-button" onClick={()=>navigate('/')}><ArrowLeft/>Home</button>
      <span className="eyebrow">SKY FIRST GAMES • INFORMATION</span>
      <h1>{data.title}</h1><p>{data.intro}</p>
      <div className="info-meta"><span><FileText/>Detailed guide</span><span><Clock3/>Updated 2026</span><span><ShieldCheck/>Sky First Games</span></div>
    </div>
    <div className="info-layout">
      <aside className="info-toc"><strong>On this page</strong>{data.sections.map((s,i)=><a key={i} href={`#sec-${i}`}>{i+1}. {s.heading}</a>)}</aside>
      <article className="info-article">{data.sections.map((s,i)=><section id={`sec-${i}`} key={i}><h2>{s.heading}</h2>{s.paragraphs.map((p,j)=><p key={j}>{p}</p>)}</section>)}
      {isForm&&<section className="support-form-card"><span className="eyebrow">SEND A REQUEST</span><h2>{slug==='report-issue'?'Report an issue to Sky First Games':'Send a request or feedback'}</h2><p>Your request is sent to Support Center in Admin Console for follow-up.</p><div className="form-grid"><label><span>Request type</span><select value={requestType} onChange={e=>setRequestType(e.target.value)}><option>General feedback</option><option>Feature request</option><option>Language request</option><option>Content request</option><option>Technical support</option><option>Privacy</option><option>Collaboration</option></select></label><label><span>Name</span><input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/></label><label><span>Reply email</span><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="email@example.com"/></label><label className="full-span"><span>Message</span><textarea rows={7} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Describe your request, situation or issue in detail…"/></label></div><button className="primary-button" onClick={send} disabled={!message.trim()}><Send/>Send Request</button>{sent&&<div className="success-box">{sent}</div>}<a className="support-mail" href="mailto:hotro.sfn@gmail.com"><Mail/>hotro.sfn@gmail.com</a></section>}
      </article>
    </div>
  </main>;
}
