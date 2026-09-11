import React from 'react';
import { ArrowRight, Dices, Gamepad2, KeyRound, Languages as LanguagesIcon, Sparkles, Trophy, WandSparkles } from 'lucide-react';
import { navigate } from '../lib/router';
import { gameModes } from '../data/gameModes';
import { languages } from '../data/languages';
import { seedQuestionSets } from '../data/seedContent';
import { GameCard } from '../components/GameCard';
import type { SiteConfig } from '../types';

export function HomePage({config}:{config:SiteConfig}){
 const featured=gameModes.filter(x=>x.featured).slice(0,6);
 return <main>
  {config.announcement&&<div className="announcement">✨ {config.announcement}</div>}
  <section className="hero">
    <div className="hero-copy"><div className="hero-kicker"><Sparkles size={16}/> SKY FIRST GAMES</div><h1>{config.heroTitle}</h1><p>{config.heroSubtitle}</p>
      <div className="hero-actions"><button className="primary-button big" onClick={()=>navigate('/quick-play')}><Dices/>Chơi ngay</button><button className="secondary-button big" onClick={()=>navigate('/join')}><KeyRound/>Nhập mã</button></div>
      <div className="hero-trust"><span><Gamepad2/>40 game modes</span><span><LanguagesIcon/>Đa ngôn ngữ</span><span><Trophy/>Không cần tài khoản để chơi</span></div>
    </div>
    <div className="hero-board"><div className="floating-card fc1">🚀 <b>Rocket Race</b><small>English • A1</small></div><div className="floating-card fc2">🀄 <b>Hanzi Match</b><small>中文 • HSK 1</small></div><div className="floating-card fc3">🎈 <b>Balloon Pop</b><small>Quick Play</small></div><div className="hero-center"><span>🎮</span><strong>PLAY.<br/>LEARN.<br/>LEVEL UP.</strong></div></div>
  </section>
  {(!config.homepageSections||config.homepageSections.includes('featured'))&&<section className="section"><div className="section-head"><div><span className="eyebrow">HÔM NAY CHƠI GÌ?</span><h2>Game nổi bật</h2></div><button className="text-button" onClick={()=>navigate('/explore')}>Xem tất cả <ArrowRight size={17}/></button></div><div className="game-grid">{featured.map(m=><GameCard key={m.id} mode={m} onPlay={()=>navigate(`/play?mode=${m.id}&set=${seedQuestionSets[0].id}`)}/>)}</div></section>}
  {(!config.homepageSections||config.homepageSections.includes('languages'))&&<section className="section language-section"><div className="section-head"><div><span className="eyebrow">LANGUAGE WORLDS</span><h2>Chọn thế giới ngôn ngữ</h2></div></div><div className="language-grid">{languages.map(l=><button key={l.code} disabled={l.status==='coming_soon'||l.status==='disabled'} className="language-card" style={{'--lang':l.accent} as React.CSSProperties} onClick={()=>navigate(`/explore?lang=${l.code}`)}><span className="language-flag">{l.icon}</span><strong>{l.nativeName}</strong><small>{l.name}</small><em>{l.status==='active'?'Khám phá':l.status==='beta'?'Beta':'Sắp ra mắt'}</em></button>)}</div></section>}
  {(!config.homepageSections||config.homepageSections.includes('creator'))&&<section className="section creator-callout"><div><span className="eyebrow">CREATOR STUDIO</span><h2>Tạo một lần. Chơi theo hàng chục cách.</h2><p>Tạo bộ câu hỏi, chọn Game Mode, tạo link/mã/PIN cho TNV và theo dõi kết quả — tất cả trong một nơi.</p><button className="secondary-button light" onClick={()=>navigate('/login')}><WandSparkles/>Mở Creator Studio</button></div><div className="creator-mini"><div><b>①</b><span>Tạo bộ câu hỏi</span></div><div><b>②</b><span>Chọn game phù hợp</span></div><div><b>③</b><span>Chia sẻ cho TNV</span></div></div></section>}
 </main>
}
