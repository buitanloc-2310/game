import React from 'react';
import {
  Archive, BarChart3, Bell, BookOpenCheck, Boxes, BriefcaseBusiness, CheckCircle2, ChevronRight,
  CircleHelp, ClipboardList, Clock3, Copy, Download, FileAudio, FileSpreadsheet, FolderKanban,
  Gamepad2, Gauge, History, Image, Import, KeyRound, LayoutDashboard, LibraryBig, ListChecks,
  MonitorPlay, MoreHorizontal, PackageCheck, PanelTop, Plus, RefreshCcw, Save, Search, Send,
  Settings2, ShieldCheck, Sparkles, Tags, Trash2, Upload, UsersRound, WandSparkles, X
} from 'lucide-react';
import { api } from '../lib/api';
import { gameModes } from '../data/gameModes';
import { languages } from '../data/languages';
import { seedQuestionSets } from '../data/seedContent';
import type { Account, Question, QuestionSet, QuestionType } from '../types';

type Tab =
  | 'overview' | 'content' | 'official' | 'builder' | 'challenges' | 'assignments' | 'sessions'
  | 'passes' | 'volunteer' | 'media' | 'reports' | 'collections' | 'importexport' | 'versions'
  | 'settings' | 'help';

type LocalChallenge = { id:string; title:string; setIds:string[]; modeIds:string[]; updatedAt:string };
type LocalAssignment = { id:string; title:string; setId:string; dueAt:string; attempts:number; mastery:number; updatedAt:string };
type LocalCollection = { id:string; name:string; itemIds:string[]; updatedAt:string };
type CreatorPrefs = { defaultLanguage:string; defaultVisibility:'private'|'link'|'password'|'public'; defaultQuestionCount:number; autosave:boolean; safeMode:boolean; mastery:number };

const qTypes:QuestionType[]=[
  'multiple_choice','multiple_select','true_false','typed','fill_blank','matching','ordering','sentence_builder',
  'image_choice','audio_choice','listening_input','dictation','cloze','error_correction','transformation',
  'synonym_antonym','word_formation','translation','dialogue','scenario_decision','reading_group','roleplay'
];

const emptyQuestion=():Question=>({
  id:`q_${crypto.randomUUID()}`,type:'multiple_choice',prompt:'',options:['','','',''],answers:[''],difficulty:1,tags:[]
});
const emptySet=(language='en'):QuestionSet=>({
  id:'',title:'Bộ câu hỏi mới',language,level:'Starter',topic:'',context:'Daily Life',skill:'Mixed',description:'',
  isOfficial:false,visibility:'private',updatedAt:new Date().toISOString(),questions:Array.from({length:20},()=>emptyQuestion())
});

const loadLocal = <T,>(key:string,fallback:T):T => { try { return JSON.parse(localStorage.getItem(key)||'') as T } catch { return fallback } };
const saveLocal = (key:string,value:unknown) => localStorage.setItem(key,JSON.stringify(value));
const formatDate=(v?:string)=>v?new Intl.DateTimeFormat('vi-VN',{dateStyle:'medium',timeStyle:'short'}).format(new Date(v)):'—';

export function CreatorPage({account}:{account:Account}){
  const [tab,setTab]=React.useState<Tab>('overview');
  const [sets,setSets]=React.useState<QuestionSet[]>([]);
  const [games,setGames]=React.useState<any[]>([]);
  const [passes,setPasses]=React.useState<any[]>([]);
  const [editing,setEditing]=React.useState<QuestionSet|null>(null);
  const [message,setMessage]=React.useState('');
  const [query,setQuery]=React.useState('');
  const [languageFilter,setLanguageFilter]=React.useState('all');
  const [mediaItems,setMediaItems]=React.useState<{url:string;key:string;name:string;type:string;createdAt:string}[]>(()=>loadLocal('sfg_creator_media',[]));
  const [challenges,setChallenges]=React.useState<LocalChallenge[]>(()=>loadLocal('sfg_creator_challenges',[]));
  const [assignments,setAssignments]=React.useState<LocalAssignment[]>(()=>loadLocal('sfg_creator_assignments',[]));
  const [collections,setCollections]=React.useState<LocalCollection[]>(()=>loadLocal('sfg_creator_collections',[]));
  const [prefs,setPrefs]=React.useState<CreatorPrefs>(()=>loadLocal('sfg_creator_prefs',{defaultLanguage:'en',defaultVisibility:'private',defaultQuestionCount:30,autosave:true,safeMode:false,mastery:80}));
  const [builderSetId,setBuilderSetId]=React.useState('');
  const [builderModeId,setBuilderModeId]=React.useState('');
  const [builderTitle,setBuilderTitle]=React.useState('');
  const [builderVisibility,setBuilderVisibility]=React.useState<'public'|'link'|'password'|'private'>('link');
  const [builderConfig,setBuilderConfig]=React.useState({shuffle:true,showAnswers:true,leaderboard:true,review:true,remediation:true,questionCount:30,timeLimit:0});

  const refresh=()=>{
    api.creatorSets().then(r=>setSets(r.sets)).catch(()=>{});
    api.listGames().then(r=>setGames(r.games)).catch(()=>{});
    api.listPasses().then(r=>setPasses(r.passes)).catch(()=>{});
  };
  React.useEffect(refresh,[]);
  React.useEffect(()=>saveLocal('sfg_creator_media',mediaItems),[mediaItems]);
  React.useEffect(()=>saveLocal('sfg_creator_challenges',challenges),[challenges]);
  React.useEffect(()=>saveLocal('sfg_creator_assignments',assignments),[assignments]);
  React.useEffect(()=>saveLocal('sfg_creator_collections',collections),[collections]);
  React.useEffect(()=>saveLocal('sfg_creator_prefs',prefs),[prefs]);

  const flash=(m:string)=>{setMessage(m);window.setTimeout(()=>setMessage(''),4200)};
  const save=async()=>{if(!editing)return;try{const r=await api.saveSet(editing);setEditing(r.set);flash('Đã lưu và tạo version mới cho bộ câu hỏi.');refresh()}catch(e:any){flash(e.message)}};
  const cloneOfficial=(s:QuestionSet)=>{
    const copy:QuestionSet={...s,id:'',isOfficial:false,visibility:prefs.defaultVisibility,title:`${s.title} — bản của tôi`,updatedAt:new Date().toISOString(),questions:s.questions.map(q=>({...q,id:`q_${crypto.randomUUID()}`}))};
    while(copy.questions.length<Math.max(20,prefs.defaultQuestionCount)) copy.questions.push(emptyQuestion());
    setEditing(copy);setTab('content');
  };
  const createPass=async(g:any)=>{try{const r=await api.createPass({gameId:g.id,label:`TNV — ${g.title}`,permissions:['host','view_results'],expiresAt:null});flash(`Host link đã tạo • PIN: ${r.pin}`);refresh()}catch(e:any){flash(e.message)}};

  const filteredSets=sets.filter(s=>{
    const text=`${s.title} ${s.description||''} ${s.topic||''} ${s.context||''} ${s.skill||''}`.toLowerCase();
    return (!query||text.includes(query.toLowerCase()))&&(languageFilter==='all'||s.language===languageFilter);
  });
  const selectedBuilderSet=sets.find(s=>s.id===builderSetId);
  const compatibleModes=React.useMemo(()=>selectedBuilderSet?gameModes.filter(m=>m.status==='active'&&m.supportedQuestionTypes.some(t=>selectedBuilderSet.questions.some(q=>q.type===t))):[],[selectedBuilderSet]);
  React.useEffect(()=>{if(selectedBuilderSet&&!builderTitle)setBuilderTitle(`Game — ${selectedBuilderSet.title}`)},[builderSetId]);

  const createBuiltGame=async()=>{
    if(!selectedBuilderSet)return flash('Hãy chọn bộ câu hỏi trước.');
    const mode=gameModes.find(m=>m.id===builderModeId)||compatibleModes[0];
    if(!mode)return flash('Chưa có Game Mode tương thích.');
    try{
      const r=await api.createGame({title:builderTitle||`${mode.name} — ${selectedBuilderSet.title}`,modeId:mode.id,setId:selectedBuilderSet.id,visibility:builderVisibility,config:builderConfig});
      flash(`Đã tạo ${mode.name}. Mã tham gia: ${r.game.join_code}`);refresh();setTab('sessions');
    }catch(e:any){flash(e.message)}
  };

  const uploadMedia=async(file:File)=>{try{const r=await api.uploadMedia(file);setMediaItems(x=>[{url:r.url,key:r.key,name:file.name,type:file.type,createdAt:new Date().toISOString()},...x]);flash('Đã upload media lên R2.')}catch(e:any){flash(e.message)}};
  const exportCreator=()=>{
    const blob=new Blob([JSON.stringify({exportedAt:new Date().toISOString(),account:{id:account.id,email:account.email,displayName:account.displayName},sets,games,passes,challenges,assignments,collections,prefs},null,2)],{type:'application/json'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`sky-first-games-creator-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href);
  };
  const importJson=async(file:File)=>{try{const data=JSON.parse(await file.text());if(Array.isArray(data.challenges))setChallenges(data.challenges);if(Array.isArray(data.assignments))setAssignments(data.assignments);if(Array.isArray(data.collections))setCollections(data.collections);if(data.prefs)setPrefs(data.prefs);flash('Đã nhập dữ liệu Creator cục bộ. Bộ câu hỏi trên D1 không bị ghi đè.')}catch{flash('File JSON không hợp lệ.')}};
  const importCsv=async(file:File)=>{
    try{
      const lines=(await file.text()).split(/\r?\n/).filter(Boolean); if(lines.length<2)throw new Error('CSV trống.');
      const rows=lines.slice(1).map(l=>l.split(',').map(v=>v.replace(/^"|"$/g,'').trim()));
      const set=emptySet(prefs.defaultLanguage); set.title=file.name.replace(/\.csv$/i,''); set.questions=rows.map((r,i)=>({id:`q_${crypto.randomUUID()}`,type:'multiple_choice',prompt:r[0]||`Câu ${i+1}`,options:[r[1]||'',r[2]||'',r[3]||'',r[4]||''].filter(Boolean),answers:[r[5]||r[1]||''],explanation:r[6]||'',difficulty:2,tags:['imported']}));
      while(set.questions.length<20)set.questions.push(emptyQuestion());setEditing(set);setTab('content');flash(`Đã nhập ${rows.length} câu từ CSV. Kiểm tra trước khi lưu.`);
    }catch(e:any){flash(e.message)}
  };

  const navGroups=[
    {label:'CREATE',items:[
      ['overview','Tổng quan',LayoutDashboard],['content','Nội dung của tôi',WandSparkles],['official','Official Content',LibraryBig],['builder','Game Builder',Gamepad2],['challenges','Challenge Builder',Sparkles],['assignments','Assignment',ClipboardList]
    ]},
    {label:'DELIVER',items:[
      ['sessions','Game & Sessions',MonitorPlay],['passes','Access Pass',KeyRound],['volunteer','TNV Sharing',UsersRound]
    ]},
    {label:'ANALYZE',items:[
      ['reports','Reports & Analytics',BarChart3],['versions','Version History',History]
    ]},
    {label:'ASSETS',items:[
      ['media','Media Studio',FileAudio],['collections','Collections',FolderKanban],['importexport','Import / Export',Import]
    ]},
    {label:'SYSTEM',items:[
      ['settings','Creator Settings',Settings2],['help','Help Center',CircleHelp]
    ]}
  ] as const;

  return <main className="workspace creator-ultra">
    <aside className="side-nav creator-side">
      <div className="workspace-title"><img src="/brand/sky-first-logo.png"/><div><strong>Creator Studio</strong><small>{account.displayName}</small></div></div>
      <div className="creator-side-scroll">{navGroups.map(group=><div className="creator-nav-group" key={group.label}><span>{group.label}</span>{group.items.map(([id,label,Icon])=><button key={id} className={tab===id?'active':''} onClick={()=>{setTab(id as Tab);setEditing(null)}}><Icon/>{label}</button>)}</div>)}</div>
    </aside>
    <section className="workspace-main creator-main">
      {message&&<div className="toast-inline creator-toast" onClick={()=>setMessage('')}>{message}<X/></div>}

      {tab==='overview'&&<Overview account={account} sets={sets} games={games} passes={passes} seedCount={seedQuestionSets.length} onNew={()=>{setEditing(emptySet(prefs.defaultLanguage));setTab('content')}} onTab={setTab} cloneOfficial={cloneOfficial}/>}

      {tab==='content'&&(editing?<SetEditor set={editing} onChange={setEditing} onSave={save} onClose={()=>setEditing(null)} onMessage={flash}/>:<ContentLibrary sets={filteredSets} query={query} setQuery={setQuery} languageFilter={languageFilter} setLanguageFilter={setLanguageFilter} onEdit={setEditing} onNew={()=>setEditing(emptySet(prefs.defaultLanguage))} onDelete={async(s)=>{if(confirm(`Xóa "${s.title}"?`)){await api.deleteSet(s.id);refresh()}}} onBuild={(s)=>{setBuilderSetId(s.id);setBuilderTitle(`Game — ${s.title}`);setTab('builder')}}/>)}

      {tab==='official'&&<OfficialLibrary onUse={cloneOfficial}/>} 

      {tab==='builder'&&<GameBuilder sets={sets} selectedSetId={builderSetId} setSelectedSetId={setBuilderSetId} modes={compatibleModes} selectedModeId={builderModeId} setSelectedModeId={setBuilderModeId} title={builderTitle} setTitle={setBuilderTitle} visibility={builderVisibility} setVisibility={setBuilderVisibility} config={builderConfig} setConfig={setBuilderConfig} onCreate={createBuiltGame}/>} 

      {tab==='challenges'&&<ChallengeBuilder challenges={challenges} setChallenges={setChallenges} sets={sets}/>} 
      {tab==='assignments'&&<AssignmentBuilder assignments={assignments} setAssignments={setAssignments} sets={sets}/>} 
      {tab==='sessions'&&<SessionsPanel games={games} onPass={createPass}/>} 
      {tab==='passes'&&<PassPanel passes={passes} onRevoke={async(id)=>{await api.revokePass(id);refresh()}}/>}
      {tab==='volunteer'&&<VolunteerShare games={games} passes={passes} onPass={createPass}/>} 
      {tab==='media'&&<MediaStudio items={mediaItems} onUpload={uploadMedia} onRemove={(key)=>setMediaItems(x=>x.filter(i=>i.key!==key))}/>} 
      {tab==='reports'&&<Reports sets={sets} games={games} passes={passes}/>} 
      {tab==='collections'&&<Collections collections={collections} setCollections={setCollections} sets={sets}/>} 
      {tab==='importexport'&&<ImportExport onExport={exportCreator} onJson={importJson} onCsv={importCsv}/>} 
      {tab==='versions'&&<Versions sets={sets}/>} 
      {tab==='settings'&&<CreatorSettings prefs={prefs} setPrefs={setPrefs}/>} 
      {tab==='help'&&<HelpCenter/>}
    </section>
  </main>
}

function Overview({account,sets,games,passes,seedCount,onNew,onTab,cloneOfficial}:{account:Account;sets:QuestionSet[];games:any[];passes:any[];seedCount:number;onNew:()=>void;onTab:(t:Tab)=>void;cloneOfficial:(s:QuestionSet)=>void}){
  const quick=[['Tạo bộ câu hỏi',WandSparkles,onNew],['Mở Game Builder',Gamepad2,()=>onTab('builder')],['Tạo Challenge',Sparkles,()=>onTab('challenges')],['Tạo Access Pass',KeyRound,()=>onTab('sessions')]] as const;
  return <>
    <div className="workspace-head creator-hero"><div><span className="eyebrow">CREATOR STUDIO</span><h1>Xin chào, {account.displayName}</h1><p>Workspace tạo nội dung, phối game, phân phối cho TNV, theo dõi kết quả và tái luyện câu sai trên cùng một hệ thống.</p></div><button className="primary-button" onClick={onNew}><Plus/>Tạo bộ câu hỏi</button></div>
    <div className="stat-grid creator-stats"><div><span>Bộ câu hỏi</span><strong>{sets.length}</strong><small>nội dung của bạn</small></div><div><span>Game đã tạo</span><strong>{games.length}</strong><small>có thể chia sẻ</small></div><div><span>Access Pass</span><strong>{passes.filter(x=>!x.revoked_at).length}</strong><small>đang hoạt động</small></div><div><span>Official Packs</span><strong>{seedCount}</strong><small>có sẵn để fork</small></div></div>
    <div className="creator-dashboard-grid">
      <div className="panel"><div className="section-heading compact"><div><h3>Quick Actions</h3><p>Đi thẳng tới tác vụ thường dùng.</p></div></div><div className="quick-action-grid">{quick.map(([label,Icon,fn])=><button key={label} onClick={fn}><Icon/><strong>{label}</strong><ChevronRight/></button>)}</div></div>
      <div className="panel"><div className="section-heading compact"><div><h3>Quality Snapshot</h3><p>Kiểm tra độ đầy trước khi phát hành.</p></div></div><div className="quality-list"><div><span>Nội dung ≥20 câu</span><strong>{sets.filter(s=>s.questions.length>=20).length}/{sets.length||0}</strong></div><div><span>Có explanation</span><strong>{sets.filter(s=>s.questions.some(q=>q.explanation)).length}</strong></div><div><span>Có media/audio</span><strong>{sets.filter(s=>s.questions.some(q=>q.mediaUrl)).length}</strong></div><div><span>Đa dạng dạng bài</span><strong>{new Set(sets.flatMap(s=>s.questions.map(q=>q.type))).size}</strong></div></div></div>
    </div>
    <div className="panel"><div className="section-heading compact"><div><h3>Official Content nổi bật</h3><p>Fork nội dung có sẵn rồi chỉnh thành phiên bản của bạn.</p></div><button className="text-button" onClick={()=>onTab('official')}>Xem toàn bộ</button></div><div className="official-grid">{seedQuestionSets.slice(0,6).map(s=><OfficialCard key={s.id} set={s} onUse={()=>cloneOfficial(s)}/>)}</div></div>
  </>
}

function ContentLibrary({sets,query,setQuery,languageFilter,setLanguageFilter,onEdit,onNew,onDelete,onBuild}:{sets:QuestionSet[];query:string;setQuery:(v:string)=>void;languageFilter:string;setLanguageFilter:(v:string)=>void;onEdit:(s:QuestionSet)=>void;onNew:()=>void;onDelete:(s:QuestionSet)=>void;onBuild:(s:QuestionSet)=>void}){
  return <><div className="workspace-head"><div><span className="eyebrow">CONTENT ENGINE</span><h1>Nội dung của tôi</h1><p>Question Bank, scenario, listening, bài nhiều bước và nội dung đa ngôn ngữ.</p></div><button className="primary-button" onClick={onNew}><Plus/>Tạo mới</button></div>
    <div className="creator-toolbar"><label><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Tìm tiêu đề, chủ đề, kỹ năng…"/></label><select value={languageFilter} onChange={e=>setLanguageFilter(e.target.value)}><option value="all">Tất cả ngôn ngữ</option>{languages.map(l=><option value={l.code} key={l.code}>{l.icon} {l.nativeName}</option>)}</select></div>
    <div className="content-grid-pro">{sets.map(s=><div className="content-card-pro" key={s.id}><div className="content-card-top"><span>{languages.find(l=>l.code===s.language)?.icon||'🌐'} {s.level}</span><span className={`status-pill ${s.status||'draft'}`}>{s.status||'draft'}</span></div><h3>{s.title}</h3><p>{s.description||'Chưa có mô tả.'}</p><div className="content-meta"><span>{s.questions.length} câu</span><span>{s.skill||'Mixed'}</span><span>{s.context||'General'}</span></div><div className="quality-meter"><i style={{width:`${Math.min(100,Math.round((s.questions.length/30)*100))}%`}}/><small>{s.questions.length<20?'Cần bổ sung để đạt chuẩn 20+ câu':'Đủ số lượng cơ bản'}</small></div><div className="card-actions"><button onClick={()=>onEdit(s)}>Sửa</button><button onClick={()=>onBuild(s)}>Game Builder</button><button className="danger icon-only" onClick={()=>onDelete(s)}><Trash2/></button></div></div>)}</div>
  </>
}

function OfficialCard({set,onUse}:{set:QuestionSet;onUse:()=>void}){const lang=languages.find(l=>l.code===set.language);return <div className="official-card-pro"><div className="official-card-lang"><span>{lang?.icon||'🌐'}</span><div><small>{lang?.nativeName||set.language}</small><b>Sky First Official</b></div></div><h3>{set.title}</h3><p>{set.description||`${set.context||'General'} • ${set.skill||'Mixed'}`}</p><div className="content-meta"><span>{set.questions.length} câu</span><span>{set.level}</span><span>{set.skill||'Mixed'}</span></div><div className="card-actions"><button className="primary-button compact" onClick={onUse}>Sao chép & chỉnh sửa</button></div></div>}
function OfficialLibrary({onUse}:{onUse:(s:QuestionSet)=>void}){const [q,setQ]=React.useState(''),[lang,setLang]=React.useState('all');const items=seedQuestionSets.filter(s=>(lang==='all'||s.language===lang)&&(!q||`${s.title} ${s.description||''}`.toLowerCase().includes(q.toLowerCase())));return <><div className="workspace-head"><div><span className="eyebrow">SKY FIRST OFFICIAL</span><h1>Official Content</h1><p>Nội dung nền để creator sao chép, chỉnh sửa và phối với Game Mode.</p></div></div><div className="creator-toolbar"><label><Search/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Tìm official pack…"/></label><select value={lang} onChange={e=>setLang(e.target.value)}><option value="all">15 ngôn ngữ</option>{languages.map(l=><option key={l.code} value={l.code}>{l.icon} {l.nativeName}</option>)}</select></div><div className="official-grid">{items.map(s=><OfficialCard key={s.id} set={s} onUse={()=>onUse(s)}/>)}</div></>}

function GameBuilder({sets,selectedSetId,setSelectedSetId,modes,selectedModeId,setSelectedModeId,title,setTitle,visibility,setVisibility,config,setConfig,onCreate}:{sets:QuestionSet[];selectedSetId:string;setSelectedSetId:(v:string)=>void;modes:any[];selectedModeId:string;setSelectedModeId:(v:string)=>void;title:string;setTitle:(v:string)=>void;visibility:any;setVisibility:(v:any)=>void;config:any;setConfig:(v:any)=>void;onCreate:()=>void}){const selected=sets.find(s=>s.id===selectedSetId);return <><div className="workspace-head"><div><span className="eyebrow">GAME FACTORY</span><h1>Game Builder</h1><p>Chọn nội dung → hệ thống lọc Game Mode tương thích → cấu hình → preview → tạo phiên.</p></div></div><div className="builder-layout"><div className="panel builder-step"><b>1</b><h3>Chọn bộ câu hỏi</h3><select value={selectedSetId} onChange={e=>{setSelectedSetId(e.target.value);setSelectedModeId('')}}><option value="">— Chọn nội dung —</option>{sets.map(s=><option key={s.id} value={s.id}>{s.title} ({s.questions.length} câu)</option>)}</select>{selected&&<div className="builder-summary"><span>{selected.questions.length} câu</span><span>{selected.skill}</span><span>{selected.context}</span></div>}</div><div className="panel builder-step"><b>2</b><h3>Game Mode tương thích</h3><div className="mode-picker">{modes.slice(0,24).map((m:any)=><button key={m.id} className={selectedModeId===m.id?'selected':''} onClick={()=>setSelectedModeId(m.id)}><span>{m.icon}</span><strong>{m.name}</strong><small>{m.family} • {m.mechanic}</small></button>)}</div>{selected&&modes.length===0&&<p>Không tìm thấy Game Mode tương thích với dạng câu hiện tại.</p>}</div><div className="panel builder-step"><b>3</b><h3>Cấu hình game</h3><label>Tên game<input value={title} onChange={e=>setTitle(e.target.value)}/></label><label>Quyền truy cập<select value={visibility} onChange={e=>setVisibility(e.target.value)}><option value="link">Link only</option><option value="public">Public</option><option value="password">Password</option><option value="private">Private</option></select></label><label>Số câu mỗi lượt<input type="number" min={20} max={60} value={config.questionCount} onChange={e=>setConfig({...config,questionCount:+e.target.value})}/></label><div className="toggle-grid">{[['shuffle','Trộn câu'],['showAnswers','Hiện đáp án'],['leaderboard','Bảng xếp hạng'],['review','Xem lại bài'],['remediation','Học lại câu sai']].map(([k,label])=><label key={k}><input type="checkbox" checked={!!config[k]} onChange={e=>setConfig({...config,[k]:e.target.checked})}/><span>{label}</span></label>)}</div><button className="primary-button full big" onClick={onCreate}><Gamepad2/>Tạo game</button></div></div></>}

function ChallengeBuilder({challenges,setChallenges,sets}:{challenges:LocalChallenge[];setChallenges:(v:LocalChallenge[])=>void;sets:QuestionSet[]}){const [title,setTitle]=React.useState('Challenge mới');const add=()=>setChallenges([{id:crypto.randomUUID(),title,setIds:sets.slice(0,3).map(s=>s.id),modeIds:gameModes.slice(0,3).map(m=>m.id),updatedAt:new Date().toISOString()},...challenges]);return <><div className="workspace-head"><div><span className="eyebrow">MULTI-STAGE</span><h1>Challenge Builder</h1><p>Ghép nhiều bộ câu hỏi và Game Mode thành hành trình nhiều round.</p></div></div><div className="panel inline-create"><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Tên challenge"/><button className="primary-button" onClick={add}><Plus/>Tạo challenge</button></div><div className="table-cards">{challenges.map(c=><div className="content-card" key={c.id}><div><span className="eyebrow">{c.setIds.length} STAGES</span><h3>{c.title}</h3><p>Updated {formatDate(c.updatedAt)}</p></div><div className="card-actions"><button onClick={()=>setChallenges(challenges.filter(x=>x.id!==c.id))}><Trash2/>Xóa</button></div></div>)}</div></>}

function AssignmentBuilder({assignments,setAssignments,sets}:{assignments:LocalAssignment[];setAssignments:(v:LocalAssignment[])=>void;sets:QuestionSet[]}){const [setId,setSetId]=React.useState('');const add=()=>{const s=sets.find(x=>x.id===setId);if(!s)return;setAssignments([{id:crypto.randomUUID(),title:`Bài luyện — ${s.title}`,setId,dueAt:new Date(Date.now()+7*86400000).toISOString(),attempts:3,mastery:80,updatedAt:new Date().toISOString()},...assignments])};return <><div className="workspace-head"><div><span className="eyebrow">PRACTICE & HOMEWORK</span><h1>Assignment</h1><p>Giao bài theo deadline, số lần làm và ngưỡng mastery.</p></div></div><div className="panel inline-create"><select value={setId} onChange={e=>setSetId(e.target.value)}><option value="">Chọn bộ câu hỏi</option>{sets.map(s=><option value={s.id} key={s.id}>{s.title}</option>)}</select><button className="primary-button" onClick={add}><Plus/>Tạo assignment</button></div><div className="table-cards">{assignments.map(a=><div className="content-card" key={a.id}><div><span className="eyebrow">MASTERY {a.mastery}%</span><h3>{a.title}</h3><p>Hạn: {formatDate(a.dueAt)} • {a.attempts} lần làm</p></div><div className="card-actions"><button onClick={()=>navigator.clipboard.writeText(`${location.origin}/assignment/${a.id}`)}><Copy/>Copy link</button><button onClick={()=>setAssignments(assignments.filter(x=>x.id!==a.id))}><Trash2/></button></div></div>)}</div></>}

function SessionsPanel({games,onPass}:{games:any[];onPass:(g:any)=>void}){return <><div className="workspace-head"><div><span className="eyebrow">DELIVERY</span><h1>Game & Sessions</h1><p>Quản lý game instance, mã tham gia, link player và host access.</p></div></div><div className="content-grid-pro">{games.map(g=><div className="content-card-pro" key={g.id}><div className="content-card-top"><span>{g.mode_id}</span><span className="status-pill published">ACTIVE</span></div><h3>{g.title}</h3><p>Mã tham gia</p><div className="join-code-big">{g.join_code}</div><div className="card-actions"><button onClick={()=>navigator.clipboard.writeText(`${location.origin}/join?code=${g.join_code}`)}><Copy/>Player link</button><button onClick={()=>onPass(g)}><Send/>Pass TNV</button></div></div>)}</div></>}
function PassPanel({passes,onRevoke}:{passes:any[];onRevoke:(id:string)=>void}){return <><div className="workspace-head"><div><span className="eyebrow">HOST ACCESS</span><h1>Access Pass</h1><p>Cấp quyền host tạm thời cho TNV mà không cần tài khoản.</p></div></div><div className="table-cards">{passes.map(p=><div className="content-card" key={p.id}><div><span className="eyebrow">{p.revoked_at?'ĐÃ THU HỒI':'ĐANG HOẠT ĐỘNG'}</span><h3>{p.label}</h3><p><code>{location.origin}/host/{p.token}</code></p></div><div className="card-actions">{!p.revoked_at&&<button onClick={()=>navigator.clipboard.writeText(`${location.origin}/host/${p.token}`)}><Copy/>Copy</button>}{!p.revoked_at&&<button className="danger-button" onClick={()=>onRevoke(p.id)}>Thu hồi</button>}</div></div>)}</div></>}
function VolunteerShare({games,passes,onPass}:{games:any[];passes:any[];onPass:(g:any)=>void}){return <><div className="workspace-head"><div><span className="eyebrow">TNV DISTRIBUTION</span><h1>TNV Sharing Center</h1><p>Chuẩn bị game, host link, player link, QR và quyền truy cập cho TNV.</p></div></div><div className="stat-grid"><div><span>Game có thể giao</span><strong>{games.length}</strong></div><div><span>Pass hoạt động</span><strong>{passes.filter(p=>!p.revoked_at).length}</strong></div><div><span>Không cần tài khoản TNV</span><strong>✓</strong></div><div><span>Host/Player link tách biệt</span><strong>✓</strong></div></div><div className="table-cards">{games.map(g=><div className="content-card" key={g.id}><div><h3>{g.title}</h3><p>Player: <code>/join?code={g.join_code}</code></p></div><div className="card-actions"><button onClick={()=>navigator.clipboard.writeText(`${location.origin}/join?code=${g.join_code}`)}><Copy/>Player</button><button onClick={()=>onPass(g)}><KeyRound/>Tạo Host Pass</button></div></div>)}</div></>}

function MediaStudio({items,onUpload,onRemove}:{items:any[];onUpload:(f:File)=>void;onRemove:(key:string)=>void}){return <><div className="workspace-head"><div><span className="eyebrow">R2 MEDIA</span><h1>Media Studio</h1><p>Upload audio, ảnh, video và tái sử dụng trong câu hỏi.</p></div><label className="primary-button upload-button"><Upload/>Upload media<input type="file" accept="audio/*,image/*,video/*" onChange={e=>e.target.files?.[0]&&onUpload(e.target.files[0])}/></label></div><div className="media-grid-pro">{items.map((m:any)=><div className="media-card" key={m.key}><div className="media-preview">{m.type?.startsWith('image')?<img src={m.url}/>:m.type?.startsWith('audio')?<audio controls src={m.url}/>:m.type?.startsWith('video')?<video controls src={m.url}/>:<FileAudio/>}</div><strong>{m.name}</strong><small>{formatDate(m.createdAt)}</small><div className="card-actions"><button onClick={()=>navigator.clipboard.writeText(location.origin+m.url)}><Copy/>URL</button><button onClick={()=>onRemove(m.key)}><Trash2/></button></div></div>)}</div></>}
function Reports({sets,games,passes}:{sets:QuestionSet[];games:any[];passes:any[]}){const questionCount=sets.reduce((n,s)=>n+s.questions.length,0);const media=sets.reduce((n,s)=>n+s.questions.filter(q=>q.mediaUrl).length,0);return <><div className="workspace-head"><div><span className="eyebrow">INSIGHTS</span><h1>Reports & Analytics</h1><p>Ảnh chụp chất lượng nội dung và mức sẵn sàng phân phối.</p></div></div><div className="stat-grid"><div><span>Tổng câu hỏi</span><strong>{questionCount}</strong></div><div><span>Câu có media</span><strong>{media}</strong></div><div><span>Game</span><strong>{games.length}</strong></div><div><span>Host Pass</span><strong>{passes.length}</strong></div></div><div className="panel"><h3>Content Health</h3><div className="quality-list"><div><span>Bộ đạt 20+ câu</span><strong>{sets.filter(s=>s.questions.length>=20).length}</strong></div><div><span>Bộ đạt 30+ câu</span><strong>{sets.filter(s=>s.questions.length>=30).length}</strong></div><div><span>Bộ có listening/media</span><strong>{sets.filter(s=>s.questions.some(q=>q.mediaUrl||q.ttsText)).length}</strong></div><div><span>Ngôn ngữ đang dùng</span><strong>{new Set(sets.map(s=>s.language)).size}</strong></div></div></div></>}
function Collections({collections,setCollections,sets}:{collections:LocalCollection[];setCollections:(v:LocalCollection[])=>void;sets:QuestionSet[]}){const [name,setName]=React.useState('Bộ sưu tập mới');const add=()=>setCollections([{id:crypto.randomUUID(),name,itemIds:sets.slice(0,4).map(s=>s.id),updatedAt:new Date().toISOString()},...collections]);return <><div className="workspace-head"><div><span className="eyebrow">ORGANIZE</span><h1>Collections</h1><p>Gom nội dung theo lớp, chương trình, ngôn ngữ hoặc dự án.</p></div></div><div className="panel inline-create"><input value={name} onChange={e=>setName(e.target.value)}/><button className="primary-button" onClick={add}><Plus/>Tạo collection</button></div><div className="content-grid-pro">{collections.map(c=><div className="content-card-pro" key={c.id}><FolderKanban/><h3>{c.name}</h3><p>{c.itemIds.length} nội dung</p><div className="card-actions"><button onClick={()=>setCollections(collections.filter(x=>x.id!==c.id))}><Trash2/>Xóa</button></div></div>)}</div></>}
function ImportExport({onExport,onJson,onCsv}:{onExport:()=>void;onJson:(f:File)=>void;onCsv:(f:File)=>void}){return <><div className="workspace-head"><div><span className="eyebrow">DATA TOOLS</span><h1>Import / Export</h1><p>Di chuyển nội dung và cấu hình Creator mà không phụ thuộc một thiết bị.</p></div></div><div className="tool-grid"><button className="panel tool-card" onClick={onExport}><Download/><h3>Export Creator JSON</h3><p>Xuất cấu hình, challenge, assignment, collection và metadata.</p></button><label className="panel tool-card"><Import/><h3>Import Creator JSON</h3><p>Khôi phục dữ liệu Creator cục bộ.</p><input type="file" accept="application/json,.json" onChange={e=>e.target.files?.[0]&&onJson(e.target.files[0])}/></label><label className="panel tool-card"><FileSpreadsheet/><h3>Import Question CSV</h3><p>Cột: prompt, optionA, optionB, optionC, optionD, answer, explanation.</p><input type="file" accept=".csv,text/csv" onChange={e=>e.target.files?.[0]&&onCsv(e.target.files[0])}/></label></div></>}
function Versions({sets}:{sets:QuestionSet[]}){return <><div className="workspace-head"><div><span className="eyebrow">VERSION CONTROL</span><h1>Version History</h1><p>Mỗi lần lưu server tăng version; session cũ tiếp tục dùng snapshot nội dung của thời điểm chơi.</p></div></div><div className="timeline-list">{[...sets].sort((a,b)=>Date.parse(b.updatedAt)-Date.parse(a.updatedAt)).map(s=><div key={s.id}><History/><div><strong>{s.title}</strong><small>{formatDate(s.updatedAt)} • {s.questions.length} câu</small></div><span className="status-pill">{s.status||'draft'}</span></div>)}</div></>}
function CreatorSettings({prefs,setPrefs}:{prefs:CreatorPrefs;setPrefs:(p:CreatorPrefs)=>void}){return <><div className="workspace-head"><div><span className="eyebrow">PREFERENCES</span><h1>Creator Settings</h1><p>Cấu hình mặc định để tạo nội dung và game nhanh hơn.</p></div></div><div className="panel form-grid"><label>Ngôn ngữ mặc định<select value={prefs.defaultLanguage} onChange={e=>setPrefs({...prefs,defaultLanguage:e.target.value})}>{languages.map(l=><option key={l.code} value={l.code}>{l.icon} {l.nativeName}</option>)}</select></label><label>Visibility mặc định<select value={prefs.defaultVisibility} onChange={e=>setPrefs({...prefs,defaultVisibility:e.target.value as any})}><option value="private">Private</option><option value="link">Link only</option><option value="password">Password</option><option value="public">Public</option></select></label><label>Số câu mục tiêu<input type="number" min={20} max={60} value={prefs.defaultQuestionCount} onChange={e=>setPrefs({...prefs,defaultQuestionCount:+e.target.value})}/></label><label>Mastery mặc định<input type="number" min={50} max={100} value={prefs.mastery} onChange={e=>setPrefs({...prefs,mastery:+e.target.value})}/></label><label className="check-line"><input type="checkbox" checked={prefs.autosave} onChange={e=>setPrefs({...prefs,autosave:e.target.checked})}/>Autosave draft trên thiết bị</label><label className="check-line"><input type="checkbox" checked={prefs.safeMode} onChange={e=>setPrefs({...prefs,safeMode:e.target.checked})}/>Safe Mode mặc định</label></div></>}
function HelpCenter(){return <><div className="workspace-head"><div><span className="eyebrow">CREATOR HELP</span><h1>Help Center</h1><p>Hướng dẫn nhanh ngay trong Studio.</p></div></div><div className="help-grid">{[['Tạo bộ câu hỏi','Nên có 20–30+ câu, đa dạng dạng bài, explanation và media khi cần.'],['Game Builder','Chọn set trước, hệ thống chỉ hiển thị game mode tương thích.'],['Access Pass','Dùng để giao quyền host cho TNV mà không cấp tài khoản Creator.'],['Listening','Upload audio thật; player có thể dùng TTS fallback nếu nguồn nghe lỗi.'],['Học lại','Bật Review + Remediation để người học xem lại, học câu sai và kiểm tra lại.'],['Import CSV','Dùng template prompt, 4 lựa chọn, đáp án và explanation để nhập nhanh.']].map(([h,p])=><div className="panel" key={h}><h3>{h}</h3><p>{p}</p></div>)}</div></>}

function SetEditor({set,onChange,onSave,onClose,onMessage}:{set:QuestionSet;onChange:(s:QuestionSet)=>void;onSave:()=>void;onClose:()=>void;onMessage:(s:string)=>void}){
  const patch=(p:Partial<QuestionSet>)=>onChange({...set,...p,updatedAt:new Date().toISOString()});
  const updateQ=(i:number,p:Partial<Question>)=>patch({questions:set.questions.map((q,n)=>n===i?{...q,...p}:q)});
  const upload=async(i:number,file:File)=>{try{const r=await api.uploadMedia(file);updateQ(i,{mediaUrl:r.url,mediaType:file.type.startsWith('audio')?'audio':file.type.startsWith('image')?'image':'video'});onMessage('Đã upload media lên R2 và gắn vào câu hỏi.')}catch(e:any){onMessage(e.message)}};
  const duplicate=(i:number)=>patch({questions:[...set.questions.slice(0,i+1),{...set.questions[i],id:`q_${crypto.randomUUID()}`},...set.questions.slice(i+1)]});
  const remove=(i:number)=>patch({questions:set.questions.filter((_,n)=>n!==i)});
  const addMany=(count:number)=>patch({questions:[...set.questions,...Array.from({length:count},()=>emptyQuestion())]});
  const typesUsed=new Set(set.questions.map(q=>q.type)).size;
  const explanationRate=Math.round((set.questions.filter(q=>q.explanation).length/Math.max(1,set.questions.length))*100);
  const mediaRate=Math.round((set.questions.filter(q=>q.mediaUrl||q.ttsText).length/Math.max(1,set.questions.length))*100);
  return <><div className="workspace-head editor-head"><div><span className="eyebrow">ADVANCED QUESTION EDITOR</span><h1>{set.title}</h1><p>{set.questions.length} câu • {typesUsed} dạng bài • Explanation {explanationRate}% • Media {mediaRate}%</p></div><div className="button-row"><button className="secondary-button" onClick={onClose}>Đóng</button><button className="primary-button" onClick={onSave}><Save/>Lưu version mới</button></div></div>
    <div className="panel form-grid"><label>Tiêu đề<input value={set.title} onChange={e=>patch({title:e.target.value})}/></label><label>Ngôn ngữ<select value={set.language} onChange={e=>patch({language:e.target.value})}>{languages.map(l=><option key={l.code} value={l.code}>{l.icon} {l.nativeName}</option>)}</select></label><label>Cấp độ<input value={set.level} onChange={e=>patch({level:e.target.value})}/></label><label>Chủ đề<input value={set.topic} onChange={e=>patch({topic:e.target.value})}/></label><label>Context<select value={set.context||'Daily Life'} onChange={e=>patch({context:e.target.value})}>{['School & Exam','Daily Life','Workplace','School Workplace','Business & Office','Travel','Public Services','Technology','Community & Volunteer','Social & Relationships','Advanced / Professional'].map(x=><option key={x}>{x}</option>)}</select></label><label>Kỹ năng<input value={set.skill||''} onChange={e=>patch({skill:e.target.value})}/></label><label className="span2">Mô tả<textarea value={set.description} onChange={e=>patch({description:e.target.value})}/></label><label>Quyền truy cập<select value={set.visibility} onChange={e=>patch({visibility:e.target.value as any})}><option value="private">Private</option><option value="link">Link only</option><option value="password">Password</option><option value="public">Public</option></select></label><label>Trạng thái<select value={set.status||'draft'} onChange={e=>patch({status:e.target.value as any})}><option value="draft">Draft</option><option value="review">Review</option><option value="verified">Verified</option><option value="published">Published</option><option value="archived">Archived</option></select></label></div>
    <div className="editor-toolbar panel"><div><strong>{set.questions.length} câu hỏi</strong><small>{set.questions.length<20?'Chưa đạt chuẩn tối thiểu 20 câu':'Đã đạt chuẩn số lượng cơ bản'}</small></div><div className="button-row"><button onClick={()=>addMany(1)}><Plus/>1 câu</button><button onClick={()=>addMany(5)}><Plus/>5 câu</button><button onClick={()=>addMany(10)}><Plus/>10 câu</button></div></div>
    <div className="question-editor-list">{set.questions.map((q,i)=><div className="question-edit-card question-card-pro" key={q.id}><div className="q-head"><strong>Câu {i+1}</strong><div className="q-actions"><select value={q.type} onChange={e=>updateQ(i,{type:e.target.value as QuestionType})}>{qTypes.map(t=><option value={t} key={t}>{t}</option>)}</select><button title="Nhân bản" onClick={()=>duplicate(i)}><Copy/></button><button title="Xóa" onClick={()=>remove(i)} disabled={set.questions.length<=1}><Trash2/></button></div></div><textarea className="prompt-area" value={q.prompt} onChange={e=>updateQ(i,{prompt:e.target.value})} placeholder="Nội dung câu hỏi / nhiệm vụ / tình huống"/>
      {['multiple_choice','multiple_select','image_choice','audio_choice'].includes(q.type)&&<div className="option-grid">{(q.options||['','','','']).map((o,n)=><input key={n} value={o} onChange={e=>{const opts=[...(q.options||['','','',''])];opts[n]=e.target.value;updateQ(i,{options:opts})}} placeholder={`Lựa chọn ${n+1}`}/>)}</div>}
      <div className="question-fields"><label>Đáp án chấp nhận<input value={(q.answers||[]).join(' | ')} onChange={e=>updateQ(i,{answers:e.target.value.split('|').map(x=>x.trim()).filter(Boolean)})} placeholder="hello | hi"/></label><label>Độ khó<select value={q.difficulty||1} onChange={e=>updateQ(i,{difficulty:+e.target.value as any})}>{[1,2,3,4,5].map(x=><option key={x}>{x}</option>)}</select></label><label className="span2">Giải thích<textarea value={q.explanation||''} onChange={e=>updateQ(i,{explanation:e.target.value})} placeholder="Giải thích vì sao đáp án đúng…"/></label><label>Hint<input value={q.hint||''} onChange={e=>updateQ(i,{hint:e.target.value})}/></label><label>Tags<input value={(q.tags||[]).join(', ')} onChange={e=>updateQ(i,{tags:e.target.value.split(',').map(x=>x.trim()).filter(Boolean)})}/></label><label className="span2">Transcript / passage<textarea value={q.transcript||q.passage||''} onChange={e=>updateQ(i,q.mediaType==='audio'?{transcript:e.target.value}:{passage:e.target.value})}/></label><label>TTS text<input value={q.ttsText||''} onChange={e=>updateQ(i,{ttsText:e.target.value,ttsLang:set.language})}/></label><label>Playback rate<input type="number" step="0.1" min="0.5" max="2" value={q.playbackRate||1} onChange={e=>updateQ(i,{playbackRate:+e.target.value})}/></label></div>
      <div className="media-row"><label className="upload-chip"><Upload/>Upload media<input type="file" accept="audio/*,image/*,video/*" onChange={e=>e.target.files?.[0]&&upload(i,e.target.files[0])}/></label>{q.mediaUrl&&<><a href={q.mediaUrl} target="_blank">Xem media</a>{q.mediaType==='audio'&&<audio controls src={q.mediaUrl}/>}</>}</div>
    </div>)}<button className="secondary-button full" onClick={()=>addMany(1)}><Plus/>Thêm câu hỏi</button></div>
  </>
}
