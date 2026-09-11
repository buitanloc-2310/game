import React from 'react';
import { Copy, KeyRound, Loader2, Play, ShieldCheck, Users } from 'lucide-react';
import { api } from '../lib/api';
function wsUrl(path:string){return `${location.protocol==='https:'?'wss':'ws'}://${location.host}${path}`}

export function HostPage({token}:{token:string}){
 const [data,setData]=React.useState<any>(null);const [err,setErr]=React.useState('');const [session,setSession]=React.useState<any>(null);const [players,setPlayers]=React.useState<any[]>([]);
 React.useEffect(()=>{api.hostPass(token).then(setData).catch(e=>setErr(e.message))},[token]);
 React.useEffect(()=>{if(!session?.id)return;const ws=new WebSocket(wsUrl(`/api/live/${session.id}?role=host&pass=${encodeURIComponent(token)}`));ws.onmessage=e=>{try{const d=JSON.parse(e.data);if(d.players)setPlayers(d.players)}catch{}};return()=>ws.close()},[session?.id,token]);
 if(err)return <main className="auth-page"><div className="auth-card"><h1>Access Pass không hợp lệ</h1><p>{err}</p></div></main>;
 if(!data)return <main className="auth-page"><div className="auth-card"><Loader2 className="spin"/><h1>Đang mở quyền Host…</h1></div></main>;
 const joinUrl=`${location.origin}/join?code=${data.game.join_code}`;
 return <main className="host-page"><section className="host-card"><div className="host-badge"><ShieldCheck/>TNV HOST ACCESS</div><h1>{data.game.title}</h1><p>{data.set.title} • {data.set.questions.length} câu • Game Mode: {data.game.mode_id}</p><div className="host-code"><span>MÃ THAM GIA</span><strong>{data.game.join_code}</strong><button onClick={()=>navigator.clipboard.writeText(joinUrl)}><Copy/>Copy link</button></div>{session?<><div className="session-live"><span>● SESSION ACTIVE</span><strong>{session.room_code}</strong><p><Users size={14}/> {players.length} người đã kết nối realtime.</p></div><div className="player-roster">{players.map(p=><span key={p.id}>{p.nickname}</span>)}{!players.length&&<small>Đang chờ học viên vào phòng…</small>}</div></>:<button className="primary-button big full" onClick={async()=>setSession((await api.startHostSession(token)).session)}><Play/>Bắt đầu phiên</button>}<div className="host-note"><KeyRound/>Access Pass chỉ cấp quyền cho game này; không cần tài khoản Creator.</div></section></main>
}
