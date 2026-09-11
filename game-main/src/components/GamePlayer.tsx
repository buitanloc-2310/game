import React from 'react';
import { ArrowLeft, CheckCircle2, XCircle, Trophy, RotateCcw, Lightbulb, Volume2 } from 'lucide-react';
import type { GameMode, Question, QuestionSet } from '../types';
import { navigate } from '../lib/router';

function normalize(s:string){ return s.trim().toLocaleLowerCase().replace(/[.,!?。]/g,'').replace(/\s+/g,' '); }
function isCorrect(q:Question,value:string){ return q.answers.some(a=>normalize(a)===normalize(value)); }

export function GamePlayer({ set, mode }: { set: QuestionSet; mode: GameMode }) {
  const [index,setIndex]=React.useState(0);
  const [score,setScore]=React.useState(0);
  const [streak,setStreak]=React.useState(0);
  const [answer,setAnswer]=React.useState('');
  const [selected,setSelected]=React.useState<string[]>([]);
  const [locked,setLocked]=React.useState(false);
  const [wasCorrect,setWasCorrect]=React.useState(false);
  const [finished,setFinished]=React.useState(false);
  const [order,setOrder]=React.useState<string[]>([]);
  const [matched,setMatched]=React.useState<Record<string,string>>({});
  const timed=['time-bomb','lightning-round','quick-fire','last-second'].includes(mode.id);
  const [timeLeft,setTimeLeft]=React.useState(timed?12:0);
  const compatible=set.questions.filter(q=>mode.supportedQuestionTypes.includes(q.type));
  const questions=compatible.length?compatible:set.questions;
  const q=questions[index];

  React.useEffect(()=>{ if(q?.options && ['ordering','sentence_builder'].includes(q.type)) setOrder([...q.options].sort(()=>Math.random()-.5)); else setOrder([]); setMatched({}); setTimeLeft(timed?12:0); },[index,q?.id,timed]);
  React.useEffect(()=>{if(!timed||locked||finished)return;const t=setInterval(()=>setTimeLeft(v=>{if(v<=1){clearInterval(t);setWasCorrect(false);setLocked(true);setStreak(0);return 0}return v-1}),1000);return()=>clearInterval(t)},[index,timed,locked,finished]);

  if(!q || finished){
    const accuracy=questions.length ? Math.round((score/(questions.length*100))*100) : 0;
    return <main className="play-stage finish-stage">
      <div className="finish-card">
        <div className="finish-trophy"><Trophy/></div>
        <div className="eyebrow">HOÀN THÀNH</div>
        <h1>{mode.icon} {mode.name}</h1>
        <p>{set.title}</p>
        <div className="result-grid"><div><strong>{score}</strong><span>Điểm</span></div><div><strong>{accuracy}%</strong><span>Hiệu suất</span></div><div><strong>{questions.length}</strong><span>Câu</span></div></div>
        <div className="button-row"><button className="primary-button" onClick={()=>{setIndex(0);setScore(0);setStreak(0);setFinished(false);setLocked(false);setAnswer('');setSelected([])}}><RotateCcw size={18}/>Chơi lại</button><button className="secondary-button" onClick={()=>navigate('/explore')}>Khám phá game khác</button></div>
      </div>
    </main>;
  }

  const submit=(value?:string)=>{
    if(locked) return;
    let response=value ?? answer;
    let ok=false;
    if(['ordering','sentence_builder'].includes(q.type)) response=order.join(' ');
    if(q.type==='matching'){
      const pairStrings=(q.pairs||[]).map(p=>`${p.left}=${matched[p.left]||''}`);
      ok=(q.pairs||[]).every(p=>normalize(matched[p.left]||'')===normalize(p.right));
      response=pairStrings.join('|');
    } else if(q.type==='multiple_select') ok=q.answers.length===selected.length && q.answers.every(a=>selected.some(s=>normalize(s)===normalize(a)));
    else ok=isCorrect(q,response);
    setWasCorrect(ok);setLocked(true);
    const nextStreak=ok?streak+1:0;setStreak(nextStreak);
    if(ok){ const bonus=Math.min(nextStreak*8,60); setScore(s=>s+100+bonus); }
  };
  const next=()=>{ if(index>=questions.length-1){setFinished(true);return;} setIndex(i=>i+1);setAnswer('');setSelected([]);setLocked(false);setWasCorrect(false); };

  const renderQuestion=()=>{
    if(q.type==='matching' && q.pairs){ return <div className="matching-grid">{q.pairs.map(p=><div className="match-row" key={p.left}><strong>{p.left}</strong><select value={matched[p.left]||''} onChange={e=>setMatched(m=>({...m,[p.left]:e.target.value}))} disabled={locked}><option value="">Chọn…</option>{[...q.pairs!].sort(()=>Math.random()-.5).map(x=><option key={x.right} value={x.right}>{x.right}</option>)}</select></div>)}</div>; }
    if(['ordering','sentence_builder'].includes(q.type) && q.options){ return <div className="order-box"><p className="muted">Bấm vào các thẻ để đổi vị trí.</p><div className="token-row">{order.map((t,i)=><button disabled={locked} key={`${t}-${i}`} className="token" onClick={()=>{if(i===0)return;const c=[...order];[c[i-1],c[i]]=[c[i],c[i-1]];setOrder(c)}}>{t}</button>)}</div></div>; }
    if(q.options?.length){ return <div className="answer-grid">{q.options.map((opt,i)=>{const sel=selected.includes(opt)||answer===opt;let cls='answer-button'+(sel?' selected':'');if(locked){if(isCorrect(q,opt))cls+=' correct'; else if(sel)cls+=' wrong';}return <button key={opt} disabled={locked} className={cls} onClick={()=>{if(q.type==='multiple_select')setSelected(s=>s.includes(opt)?s.filter(x=>x!==opt):[...s,opt]);else{setAnswer(opt);submit(opt)}}}><span>{String.fromCharCode(65+i)}</span>{opt}</button>})}</div>; }
    return <div className="typed-wrap"><input autoFocus disabled={locked} value={answer} onChange={e=>setAnswer(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&answer)submit()}} placeholder="Nhập câu trả lời…"/><button className="primary-button" disabled={!answer||locked} onClick={()=>submit()}>Trả lời</button></div>;
  };

  return <main className={`play-stage mechanic-${mode.mechanic}`} style={{'--game-accent':mode.color} as React.CSSProperties}>
    <div className="play-shell">
      <div className="play-topline"><button className="icon-button" onClick={()=>navigate('/explore')}><ArrowLeft/></button><div className="play-title"><span>{mode.icon}</span><div><strong>{mode.name}</strong><small>{set.title}</small></div></div><div className="score-pill"><span>{streak>1?`🔥 ${streak}x`:'Điểm'}</span><strong>{score}</strong></div></div>
      <div className="progress"><span style={{width:`${((index+1)/questions.length)*100}%`}}/></div>
      <ModeHud mode={mode} score={score} index={index} total={questions.length} streak={streak} timeLeft={timeLeft}/>
      <section className="question-panel">
        <div className="question-counter">CÂU {index+1} / {questions.length}</div>
        {q.mediaUrl && <div className="question-media">{q.mediaUrl.match(/\.(mp3|wav|ogg)$/i)?<audio controls src={q.mediaUrl}/>:<img src={q.mediaUrl} alt="Question media"/>}</div>}
        <h1>{q.prompt}</h1>
        {q.hint && <div className="hint"><Lightbulb size={16}/>{q.hint}</div>}
        {renderQuestion()}
        {!locked && (q.type==='matching'||q.type==='multiple_select'||['ordering','sentence_builder'].includes(q.type)) && <button className="primary-button submit-wide" onClick={()=>submit()}>Chốt đáp án</button>}
        {locked && <div className={wasCorrect?'feedback correct':'feedback wrong'}>{wasCorrect?<CheckCircle2/>:<XCircle/>}<div><strong>{wasCorrect?'Chính xác!':'Chưa đúng rồi'}</strong>{!wasCorrect&&<p>Đáp án: {q.answers.join(' / ')}</p>}{q.explanation&&<p>{q.explanation}</p>}</div><button onClick={next}>{index===questions.length-1?'Xem kết quả':'Câu tiếp →'}</button></div>}
      </section>
      <div className="game-decor"><span/><span/><span/><span/></div>
    </div>
  </main>;
}


function ModeHud({mode,score,index,total,streak,timeLeft}:{mode:GameMode;score:number;index:number;total:number;streak:number;timeLeft:number}){
 const progress=Math.min(100,Math.round(((index+1)/Math.max(total,1))*100));
 if(['rocket-race','word-sprint','turbo-track','monster-run'].includes(mode.id)) return <div className="mode-hud race-hud"><span>🏁</span><div><i style={{width:`${progress}%`}}/><b style={{left:`calc(${progress}% - 14px)`}}>{mode.icon}</b></div><span>🏆</span></div>;
 if(['time-bomb','lightning-round','quick-fire','last-second'].includes(mode.id)) return <div className="mode-hud timer-hud"><span>{mode.id==='time-bomb'?'💣':'⚡'}</span><strong>{timeLeft}s</strong><div><i style={{width:`${Math.max(0,timeLeft/12*100)}%`}}/></div><em>{streak>1?`${streak}x streak`:'Giữ nhịp!'}</em></div>;
 if(mode.id==='millionaire') return <div className="mode-hud millionaire-hud"><span>💰</span>{[100,200,300,500,1000].map((x,i)=><b className={score>=x?'won':''} key={x}>{x}</b>)}</div>;
 if(['treasure-hunt','maze-escape','galaxy-quest','lucky-tiles','classroom-bingo'].includes(mode.id)) return <div className="mode-hud board-hud">{Array.from({length:8}).map((_,i)=><span className={i<Math.ceil(progress/12.5)?'open':''} key={i}>{mode.id==='galaxy-quest'?'🪐':mode.id==='treasure-hunt'?(i===7?'💎':'🗺️'):'▦'}</span>)}</div>;
 if(mode.id==='balloon-pop') return <div className="mode-hud balloon-hud">{['🎈','🎈','🎈','🎈','🎈'].map((x,i)=><span className={i<Math.min(5,Math.ceil(score/120))?'popped':''} key={i}>{x}</span>)}<b>{Math.floor(score/100)} pops</b></div>;
 if(mode.id==='fishing-words') return <div className="mode-hud fishing-hud"><span>🌊</span><strong>🎣</strong><b>{'🐟'.repeat(Math.min(6,Math.floor(score/100)))||'…'}</b></div>;
 if(['team-battle','mystery-box','king-of-words','knockout','final-showdown'].includes(mode.id)) return <div className="mode-hud battle-hud"><div><span>TEAM SKY</span><i style={{width:`${Math.min(100,40+progress*.5)}%`}}/></div><b>{mode.icon}</b><div><span>RIVAL</span><i style={{width:`${Math.max(10,85-progress*.45)}%`}}/></div></div>;
 if(['sentence-builder','missing-word','spell-it','word-match','synonym-hunt','opposite-hunt','grammar-fixer','dialogue-dash'].includes(mode.id)) return <div className="mode-hud language-hud"><span>{mode.icon}</span><strong>{mode.name}</strong><em>Language skill • {progress}%</em></div>;
 if(['listen-pick','listen-type','sound-match','stress-master','pronounce-quest','reading-hunt','context-clues','translation-relay'].includes(mode.id)) return <div className="mode-hud listening-hud"><span>🎧</span><div><i/><i/><i/><i/><i/></div><b>{mode.name}</b></div>;
 return <div className="mode-hud generic-hud"><span>{mode.icon}</span><strong>{mode.name}</strong><em>{progress}%</em></div>;
}
