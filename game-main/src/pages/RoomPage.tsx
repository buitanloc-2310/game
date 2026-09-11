import React from 'react';
import { Loader2 } from 'lucide-react';
import { api } from '../lib/api';
import { gameModes } from '../data/gameModes';
import { GamePlayer } from '../components/GamePlayer';

function wsUrl(path:string){return `${location.protocol==='https:'?'wss':'ws'}://${location.host}${path}`}

export function RoomPage(){
 const params=new URLSearchParams(location.search);const code=params.get('code')||'';const nickname=params.get('name')||'Player';
 const [data,setData]=React.useState<any>(null);const [err,setErr]=React.useState('');
 React.useEffect(()=>{if(!code){setErr('Game code is missing.');return;}api.publicGame(code).then(setData).catch(e=>setErr(e.message))},[code]);
 React.useEffect(()=>{if(!data?.activeSession?.id)return;const ws=new WebSocket(wsUrl(`/api/live/${data.activeSession.id}?role=player`));ws.addEventListener('open',()=>ws.send(JSON.stringify({type:'join',nickname})));return()=>ws.close()},[data?.activeSession?.id,nickname]);
 if(err)return <main className="auth-page"><div className="auth-card"><h1>Unable to join game</h1><p>{err}</p></div></main>;
 if(!data)return <main className="auth-page"><div className="auth-card"><Loader2 className="spin"/><h1>Loading game…</h1></div></main>;
 const mode=gameModes.find(m=>m.id===data.game.mode_id)||gameModes[0];
 return <GamePlayer set={data.set} mode={mode}/>;
}
