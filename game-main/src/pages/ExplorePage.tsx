import React from 'react';
import { Filter, Search } from 'lucide-react';
import { gameModes } from '../data/gameModes';
import { seedQuestionSets } from '../data/seedContent';
import { languages } from '../data/languages';
import { GameCard } from '../components/GameCard';
import { navigate } from '../lib/router';

export function ExplorePage(){
 const params=new URLSearchParams(location.search); const initial=params.get('lang')||'all';
 const [lang,setLang]=React.useState(initial); const [family,setFamily]=React.useState('all'); const [q,setQ]=React.useState('');
 const modes=gameModes.filter(m=>(family==='all'||m.family===family)&&(!q||`${m.name} ${m.description}`.toLowerCase().includes(q.toLowerCase())));
 const selectedSet=seedQuestionSets.find(s=>lang==='all'||s.language===lang)||seedQuestionSets[0];
 return <main className="page-shell"><div className="page-hero compact"><span className="eyebrow">GAME CATALOGUE</span><h1>Khám phá 40 Game Modes</h1><p>Chọn ngôn ngữ, kiểu chơi và bắt đầu ngay với nội dung chính thức của Sky First Games.</p></div>
 <div className="filterbar"><div className="searchbox"><Search size={18}/><input placeholder="Tìm game…" value={q} onChange={e=>setQ(e.target.value)}/></div><select value={lang} onChange={e=>setLang(e.target.value)}><option value="all">Tất cả ngôn ngữ</option>{languages.filter(l=>l.status!=='disabled').map(l=><option value={l.code} key={l.code}>{l.icon} {l.nativeName}</option>)}</select><select value={family} onChange={e=>setFamily(e.target.value)}><option value="all">Tất cả nhóm</option><option value="speed">Speed</option><option value="language">Language</option><option value="listening">Listening</option><option value="arcade">Arcade</option><option value="classroom">Classroom</option></select></div>
 <div className="catalog-note"><Filter size={16}/><span>Đang dùng bộ mẫu: <b>{selectedSet.title}</b>. Creator có thể tạo bộ riêng và hệ thống sẽ tự lọc game tương thích.</span></div>
 <div className="game-grid catalog">{modes.map(m=><GameCard key={m.id} mode={m} onPlay={()=>navigate(`/play?mode=${m.id}&set=${selectedSet.id}`)}/>)}</div></main>
}
