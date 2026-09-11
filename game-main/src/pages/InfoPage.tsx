import React from 'react';
import { ArrowLeft, Clock3, FileText, Mail, Send, ShieldCheck } from 'lucide-react';
import { infoPages } from '../data/infoPages';
import { navigate } from '../lib/router';
import { api } from '../lib/api';

export function InfoPage({slug}:{slug:string}){
  const data=infoPages[slug];
  const [requestType,setRequestType]=React.useState('Góp ý chung');
  const [name,setName]=React.useState('');
  const [email,setEmail]=React.useState('');
  const [message,setMessage]=React.useState('');
  const [sent,setSent]=React.useState('');
  if(!data) return <main className="page-shell narrow"><div className="page-hero compact"><h1>Không tìm thấy trang</h1><button className="secondary-button" onClick={()=>navigate('/')}><ArrowLeft/>Trang chủ</button></div></main>;
  const send=async()=>{
    try{
      const r=await api.submitSupport({type:slug==='report-issue'?'Báo lỗi':requestType,name,email,message,source:slug});
      setSent(`Đã tiếp nhận yêu cầu ${r.ticketCode}.`); setMessage('');
    }catch(e:any){setSent(e.message||'Không thể gửi yêu cầu.');}
  };
  const isForm=['request-feedback','report-issue','support','contact'].includes(slug);
  return <main className="page-shell info-page-shell">
    <div className="info-hero">
      <button className="text-button" onClick={()=>navigate('/')}><ArrowLeft/>Trang chủ</button>
      <span className="eyebrow">SKY FIRST GAMES • THÔNG TIN</span>
      <h1>{data.title}</h1><p>{data.intro}</p>
      <div className="info-meta"><span><FileText/>Tài liệu chi tiết</span><span><Clock3/>Cập nhật 2026</span><span><ShieldCheck/>Sky First Games</span></div>
    </div>
    <div className="info-layout">
      <aside className="info-toc"><strong>Trong trang này</strong>{data.sections.map((s,i)=><a key={i} href={`#sec-${i}`}>{i+1}. {s.heading}</a>)}</aside>
      <article className="info-article">{data.sections.map((s,i)=><section id={`sec-${i}`} key={i}><h2>{s.heading}</h2>{s.paragraphs.map((p,j)=><p key={j}>{p}</p>)}</section>)}
      {isForm&&<section className="support-form-card"><span className="eyebrow">GỬI YÊU CẦU</span><h2>{slug==='report-issue'?'Báo lỗi cho Sky First Games':'Gửi yêu cầu hoặc phản hồi'}</h2><p>Thông tin được gửi tới khu Support Center trong Admin Console để đội vận hành theo dõi.</p><div className="form-grid"><label><span>Loại yêu cầu</span><select value={requestType} onChange={e=>setRequestType(e.target.value)}><option>Góp ý chung</option><option>Đề xuất tính năng</option><option>Đề xuất ngôn ngữ</option><option>Đề xuất bộ câu hỏi</option><option>Hỗ trợ kỹ thuật</option><option>Quyền riêng tư</option><option>Hợp tác</option></select></label><label><span>Họ tên</span><input value={name} onChange={e=>setName(e.target.value)} placeholder="Tên của bạn"/></label><label><span>Email nhận phản hồi</span><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="email@example.com"/></label><label className="full-span"><span>Nội dung</span><textarea rows={7} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Mô tả chi tiết yêu cầu, tình huống hoặc lỗi bạn gặp…"/></label></div><button className="primary-button" onClick={send} disabled={!message.trim()}><Send/>Gửi yêu cầu</button>{sent&&<div className="success-box">{sent}</div>}<a className="support-mail" href="mailto:hotro.sfn@gmail.com"><Mail/>hotro.sfn@gmail.com</a></section>}
      </article>
    </div>
  </main>;
}
