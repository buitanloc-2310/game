import React from 'react';
import { ArrowRight, AudioLines, Gamepad2, Globe2, Headphones, Layers3, Play, QrCode, Sparkles, Users2, WandSparkles } from 'lucide-react';
import { navigate } from '../lib/router';
import { gameModes } from '../data/gameModes';
import { languages } from '../data/languages';
import { seedQuestionSets } from '../data/seedContent';
import type { SiteConfig } from '../types';

export function HomePage({config}:{config:SiteConfig}){
 const featured=gameModes.filter(x=>x.featured).slice(0,8);
 const play=(mode:string,set:string)=>navigate(`/play?mode=${encodeURIComponent(mode)}&set=${encodeURIComponent(set)}`);
 return <main>
  <section className="hero-v2">
   <div className="hero-orb orb-a"/><div className="hero-orb orb-b"/>
   <div className="hero-copy"><span className="announcement"><Sparkles/> {config.announcement||'15 ngôn ngữ • 40+ game modes • bài tập thực tế'}</span><div className="brand-lockup"><img src={config.logoUrl||'/brand/sky-first-logo.png'} alt="Sky First"/><div><b>SKY FIRST GAMES</b><small>PLAY • LEARN • LEVEL UP</small></div></div><h1>{config.heroTitle}</h1><p>{config.heroSubtitle}</p><div className="hero-actions"><button className="primary-button big" onClick={()=>navigate('/quick-play')}><Play/>Chơi ngay</button><button className="secondary-button big" onClick={()=>navigate('/join')}><QrCode/>Nhập mã</button></div><div className="hero-proof"><span><Gamepad2/><b>{gameModes.length}+</b> Game Modes</span><span><Globe2/><b>{languages.length}</b> Ngôn ngữ</span><span><Layers3/><b>{seedQuestionSets.length}</b> Official Packs</span></div></div>
   <div className="hero-console"><div className="console-top"><span>LIVE PREVIEW</span><i/><i/><i/></div><div className="console-card"><div className="console-icon">🚀</div><span>Rocket Race</span><h3>Workplace English</h3><p>Deadline • Meeting • Email • Customer service</p><div className="console-progress"><i/></div><div className="console-choice"><b>A</b>Please confirm before proceeding.</div><div className="console-choice"><b>B</b>Whatever.</div><button onClick={()=>play('rocket-race','official-en-professional')}>PLAY DEMO <ArrowRight/></button></div></div>
  </section>

  <section className="home-section"><div className="section-heading"><div><span className="eyebrow">PLAY TODAY</span><h2>Không chỉ quiz. Chọn một trải nghiệm.</h2><p>Mỗi mode có mechanic riêng: race, tower, memory, scenario, classroom, listening…</p></div><button className="text-button" onClick={()=>navigate('/explore')}>Xem tất cả <ArrowRight/></button></div><div className="game-showcase">{featured.map(m=><button key={m.id} className="showcase-card" style={{'--card-accent':m.color} as React.CSSProperties} onClick={()=>play(m.id,seedQuestionSets.find(s=>m.supportedQuestionTypes.some(t=>s.questions.some(q=>q.type===t)))?.id||seedQuestionSets[0].id)}><span>{m.icon}</span><div><small>{m.family.toUpperCase()}</small><h3>{m.name}</h3><p>{m.description}</p></div><ArrowRight/></button>)}</div></section>

  <section className="worlds-section"><div className="section-heading"><div><span className="eyebrow">15 LANGUAGE WORLDS</span><h2>Học nhiều ngôn ngữ, không phải đổi mỗi lá cờ.</h2><p>Language Adapter xử lý script, TTS và dạng bài đặc thù theo từng ngôn ngữ.</p></div></div><div className="language-ribbon">{languages.map(l=><button key={l.code} style={{'--lang':l.accent} as React.CSSProperties} onClick={()=>navigate(`/explore?lang=${l.code}`)}><span>{l.icon}</span><b>{l.nativeName}</b><small>{l.specialties?.slice(0,2).join(' • ')}</small></button>)}</div></section>

  <section className="scenario-section"><div className="scenario-copy"><span className="eyebrow">REAL-LIFE LEARNING</span><h2>Từ lớp học tới đời sống và nơi làm việc.</h2><p>Không dừng ở A/B/C/D. Người học xử lý email, cuộc họp, deadline, khách hàng, sân bay, lớp học, hoạt động TNV và các tình huống thực tế.</p><div className="scenario-grid"><div><Headphones/><b>Listening thật</b><span>Audio file + TTS fallback</span></div><div><Users2/><b>Classroom</b><span>Live, one-screen, host-paced</span></div><div><WandSparkles/><b>Creator Studio</b><span>Tạo nội dung, game, Access Pass</span></div><div><AudioLines/><b>Advanced Tasks</b><span>Dictation, cloze, role-play, scenario</span></div></div></div><div className="scenario-card"><span className="badge">SCHOOL WORKPLACE</span><h3>TNV tổ chức lớp tại trường</h3><ol><li>Nghe thông báo đổi phòng</li><li>Xác nhận thời gian & địa điểm</li><li>Sắp xếp quy trình triển khai</li><li>Viết thông báo cho học viên</li><li>Xử lý học viên đến trễ</li><li>Báo cáo sau buổi học</li></ol><button className="primary-button" onClick={()=>play('school-day','official-vi-extra-35')}>Thử tình huống <ArrowRight/></button></div></section>

  <section className="creator-cta"><div><span className="eyebrow">CREATE • HOST • SHARE</span><h2>Một bộ câu hỏi, hàng chục cách chơi.</h2><p>Creator đăng nhập, tự khởi tạo tài khoản, tạo nội dung, chọn Game Mode và cấp Access Pass cho TNV host mà không cần tài khoản TNV.</p></div><button className="primary-button big" onClick={()=>navigate('/login')}>Mở Creator Studio <ArrowRight/></button></section>
 </main>
}
