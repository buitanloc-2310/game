import React from 'react';
import { Filter, Search } from 'lucide-react';
import { gameModes as fallbackModes } from '../data/gameModes';
import { seedQuestionSets } from '../data/seedContent';
import { languages } from '../data/languages';
import { GameCard } from '../components/GameCard';
import { navigate } from '../lib/router';
import { api } from '../lib/api';
import type { GameMode, QuestionSet } from '../types';

export function ExplorePage(){
 const params=new URLSearchParams(location.search);const initial=params.get('lang')||localStorage.getItem('sfg_learning_lang')||'all';
 const [lang,setLang]=React.useState(initial),[family,setFamily]=React.useState('all'),[q,setQ]=React.useState('');
 const [modePool,setModePool]=React.useState<GameMode[]>(fallbackModes),[sets,setSets]=React.useState<QuestionSet[]>(seedQuestionSets);
 React.useEffect(()=>{api.publicGameModes().then(r=>r.modes?.length&&setModePool(r.modes)).catch(()=>{});api.publicQuestionSets().then(r=>r.sets?.length&&setSets(r.sets)).catch(()=>{})},[]);
 const modes=modePool.filter(m=>(family==='all'||m.family===family)&&(!q||`${m.name} ${m.description}`.toLowerCase().includes(q.toLowerCase()))&&(lang==='all'||m.languages==='universal'||m.languages.includes(lang)));
 const selectedSet=sets.find(s=>lang==='all'||s.language===lang)||seedQuestionSets.find(s=>lang==='all'||s.language===lang)||seedQuestionSets[0];
 const changeLang=(v:string)=>{setLang(v);if(v!=='all')localStorage.setItem('sfg_learning_lang',v)};
 return <main className="page-shell"><div className="page-hero compact"><span className="eyebrow">GAME CATALOGUE</span><h1>Explore 40+ Game Modes</h1><p>Choose a learning language and a game family. Only compatible content and active modes are shown.</p></div><div className="filterbar"><div className="searchbox"><Search/><input placeholder="Search games…" value={q} onChange={e=>setQ(e.target.value)}/></div><select value={lang} onChange={e=>changeLang(e.target.value)}><option value="all">All learning languages</option>{languages.filter(l=>l.status!=='disabled').map(l=><option value={l.code} key={l.code}>{l.icon} {l.nativeName}</option>)}</select><select value={family} onChange={e=>setFamily(e.target.value)}><option value="all">All game families</option><option value="speed">Speed</option><option value="language">Language</option><option value="listening">Listening</option><option value="arcade">Arcade</option><option value="classroom">Classroom</option><option value="strategy">Strategy</option><option value="scenario">Scenario</option></select></div><div className="catalog-note"><Filter/><span>Sample content: <b>{selectedSet.title}</b>. Creator Studio uses the Compatibility Engine to match content with suitable game modes.</span></div><div className="game-grid catalog">{modes.map(m=><GameCard key={m.id} mode={m} onPlay={()=>navigate(`/play?mode=${m.id}&set=${selectedSet.id}`)}/>)}</div></main>
}
