import React from 'react';
import { Camera, ClipboardCheck, ImagePlus, KeyRound, Megaphone, PlayCircle, QrCode, ShieldCheck, UploadCloud, Users2 } from 'lucide-react';
import { api } from '../lib/api';
import { navigate } from '../lib/router';
import type { SiteConfig } from '../types';

export function VolunteerPage({config}:{config?:SiteConfig}){
  const [token,setToken]=React.useState('');
  const [pin,setPin]=React.useState('');
  const [pass,setPass]=React.useState<any>(null);
  const [msg,setMsg]=React.useState('');
  const [report,setReport]=React.useState('');
  const [file,setFile]=React.useState<File|null>(null);
  const [preview,setPreview]=React.useState('');
  const [gallery,setGallery]=React.useState<any[]>([]);

  React.useEffect(()=>{api.publicVolunteerGallery().then(r=>setGallery(r.items||[])).catch(()=>{})},[]);
  const openPass=async()=>{setMsg('');try{const r=await api.hostPass(token.trim(),pin.trim());setPass(r);setMsg('Access Pass verified. You can now open the assigned host controls.')}catch(e:any){setMsg(e.message)}};
  const upload=async()=>{if(!file||!token)return;try{const r=await api.volunteerUpload(token,pin,file);setPreview(r.url);setMsg('Photo uploaded and waiting for Admin review.')}catch(e:any){setMsg(e.message)}};
  const sendReport=async()=>{if(!report.trim())return;try{await api.volunteerReport({token,pin,report});setReport('');setMsg('Volunteer session report submitted.')}catch(e:any){setMsg(e.message)}};

  if(config?.volunteerSettings?.enabled===false)return <main className="page-shell narrow"><div className="page-hero compact"><h1>Volunteer Hub is temporarily unavailable</h1><p>Please try again later or contact hotro.sfn@gmail.com.</p></div></main>;

  return <main className="page-shell volunteer-shell">
    <div className="page-hero volunteer-hero"><span className="eyebrow">VOLUNTEERS</span><h1>Volunteer Hub</h1><p>No separate account is required. Use an Access Pass or Host PIN from a Creator to open assigned content, host sessions, submit reports and upload activity photos.</p><div className="hero-proof"><span><ShieldCheck/><b>Access Pass</b> scoped temporary access</span><span><Users2/><b>Host</b> classes & activities</span><span><Camera/><b>Media</b> pending Admin review</span></div></div>

    <section className="tnv-grid">
      <div className="panel tnv-access"><span className="eyebrow">ACCESS PASS</span><h2>Open Your Assigned Volunteer Workspace</h2><label><span><KeyRound/>Access Pass token</span><input value={token} onChange={e=>setToken(e.target.value)} placeholder="Paste the token or access code provided to you"/></label><label><span>PIN</span><input inputMode="numeric" value={pin} onChange={e=>setPin(e.target.value)} placeholder="PIN, if required"/></label><button className="primary-button full" onClick={openPass} disabled={!token.trim()}>Verify Access Pass</button>{msg&&<div className="toast-inline static">{msg}</div>}</div>
      <div className="tnv-feature-grid"><article><PlayCircle/><h3>Assigned Games</h3><p>Open Creator-assigned games, start a session, and generate a join code or QR for learners.</p></article><article><QrCode/><h3>Host Sessions</h3><p>Control the session, start or pause play, move between rounds and end the activity.</p></article><article><ClipboardCheck/><h3>Session Reports</h3><p>Record attendance, class notes and follow-up items after a session.</p></article><article><Megaphone/><h3>Volunteer Announcements</h3><p>Receive operating guidance and notices published by Admins or Creators.</p></article></div>
    </section>

    {pass&&<section className="panel tnv-pass-result"><div><span className="eyebrow">VERIFIED</span><h2>{pass.game?.title||'Assigned Game'}</h2><p>{pass.set?.title}</p></div><button className="primary-button" onClick={()=>navigate(`/host/${encodeURIComponent(token)}?pin=${encodeURIComponent(pin)}`)}>Open Host Control</button></section>}

    <section className="tnv-media-section"><div className="section-heading"><div><span className="eyebrow">VOLUNTEER ACTIVITY</span><h2>Activity Photos & Reports</h2><p>Uploaded photos are not published immediately. Admin approval is required before they appear in the showcase.</p></div></div><div className="tnv-media-grid"><div className="panel media-upload-card"><ImagePlus/><h3>Upload Activity Photo</h3><input type="file" accept="image/*" onChange={e=>{const f=e.target.files?.[0]||null;setFile(f);if(f)setPreview(URL.createObjectURL(f))}}/>{preview&&<img src={preview} alt="Activity preview"/>}<button className="secondary-button full" disabled={!file||!token} onClick={upload}><UploadCloud/>Submit Photo for Review</button></div><div className="panel report-card"><ClipboardCheck/><h3>Quick Session Report</h3><textarea rows={9} value={report} onChange={e=>setReport(e.target.value)} placeholder="Example: number of learners, content played, issues encountered, and suggestions for the next session…"/><button className="primary-button full" disabled={!token||!report.trim()} onClick={sendReport}>Submit Report</button></div></div></section>

    {gallery.length>0&&<section className="tnv-gallery"><div className="section-heading"><div><span className="eyebrow">ACTIVITY SHOWCASE</span><h2>Approved Volunteer Photos</h2><p>Only photos approved by an Admin are shown here.</p></div></div><div className="tnv-gallery-grid">{gallery.map(x=><img key={x.id} src={x.media_url} alt="Volunteer activity"/>)}</div></section>}
  </main>
}
