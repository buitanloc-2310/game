import React from 'react';
import {
  Activity, Archive, BarChart3, Bell, BookOpenCheck, Boxes, BriefcaseBusiness, CheckCircle2, ChevronRight,
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
  | 'passes' | 'volunteer' | 'media' | 'reports' | 'collections' | 'templates' | 'importexport'
  | 'versions' | 'activity' | 'settings' | 'help';

type CreatorItem = {
  id:string; type:string; title:string; status:string; data:any; created_at:string; updated_at:string;
};

type CreatorPrefs = {
  defaultLanguage:string;
  defaultVisibility:'private'|'link'|'password'|'public';
  defaultQuestionCount:number;
  autosave:boolean;
  safeMode:boolean;
  mastery:number;
};

const qTypes:QuestionType[]=[
  'multiple_choice','multiple_select','true_false','typed','fill_blank','matching','ordering','sentence_builder',
  'image_choice','audio_choice','listening_input','dictation','cloze','error_correction','transformation',
  'synonym_antonym','word_formation','translation','dialogue','scenario_decision','reading_group','roleplay'
];

const emptyQuestion=():Question=>({
  id:`q_${crypto.randomUUID()}`,
  type:'multiple_choice',
  prompt:'',
  options:['','','',''],
  answers:[''],
  difficulty:1,
  tags:[]
});

const emptySet=(language='en',count=30):QuestionSet=>({
  id:'',
  title:'New Question Set',
  language,
  level:'Starter',
  topic:'',
  context:'Daily Life',
  skill:'Mixed',
  description:'',
  isOfficial:false,
  visibility:'private',
  updatedAt:new Date().toISOString(),
  status:'draft',
  questions:Array.from({length:Math.max(20,count)},()=>emptyQuestion())
});

const formatDate=(v?:string)=>v?new Intl.DateTimeFormat('en',{dateStyle:'medium',timeStyle:'short'}).format(new Date(v)):'—';
const itemTitle=(type:string)=>({challenge:'Challenge',assignment:'Assignment',collection:'Collection',template:'Template',session_plan:'Scheduled Session'} as Record<string,string>)[type]||type;

export function CreatorPage({account}:{account:Account}){
  const [tab,setTab]=React.useState<Tab>('overview');
  const [sets,setSets]=React.useState<QuestionSet[]>([]);
  const [games,setGames]=React.useState<any[]>([]);
  const [passes,setPasses]=React.useState<any[]>([]);
  const [sessions,setSessions]=React.useState<any[]>([]);
  const [items,setItems]=React.useState<CreatorItem[]>([]);
  const [activity,setActivity]=React.useState<any[]>([]);
  const [mediaItems,setMediaItems]=React.useState<any[]>([]);
  const [editing,setEditing]=React.useState<QuestionSet|null>(null);
  const [message,setMessage]=React.useState('');
  const [query,setQuery]=React.useState('');
  const [languageFilter,setLanguageFilter]=React.useState('all');
  const [prefs,setPrefs]=React.useState<CreatorPrefs>({defaultLanguage:'en',defaultVisibility:'private',defaultQuestionCount:30,autosave:true,safeMode:false,mastery:80});
  const [builderSetId,setBuilderSetId]=React.useState('');
  const [builderModeId,setBuilderModeId]=React.useState('');
  const [builderTitle,setBuilderTitle]=React.useState('');
  const [builderVisibility,setBuilderVisibility]=React.useState<'public'|'link'|'password'|'private'>('link');
  const [builderConfig,setBuilderConfig]=React.useState({shuffle:true,showAnswers:true,leaderboard:true,review:true,remediation:true,questionCount:30,timeLimit:0});
  const [createMenu,setCreateMenu]=React.useState(false);
  const [genericEditor,setGenericEditor]=React.useState<{type:string;id?:string;title:string;status:string;data:any}|null>(null);

  const refresh=React.useCallback(async()=>{
    const results=await Promise.allSettled([
      api.creatorSets(), api.listGames(), api.listPasses(), api.creatorItems(), api.creatorPreferences(),
      api.creatorActivity(), api.creatorSessions(), api.creatorMedia()
    ]);
    if(results[0].status==='fulfilled')setSets(results[0].value.sets||[]);
    if(results[1].status==='fulfilled')setGames(results[1].value.games||[]);
    if(results[2].status==='fulfilled')setPasses(results[2].value.passes||[]);
    if(results[3].status==='fulfilled')setItems(results[3].value.items||[]);
    if(results[4].status==='fulfilled'){const prefResult=results[4].value;setPrefs(p=>({...p,...prefResult.preferences}));}
    if(results[5].status==='fulfilled')setActivity(results[5].value.items||[]);
    if(results[6].status==='fulfilled')setSessions(results[6].value.sessions||[]);
    if(results[7].status==='fulfilled')setMediaItems(results[7].value.items||[]);
  },[]);
  React.useEffect(()=>{refresh()},[refresh]);

  const flash=(m:string)=>{setMessage(m);window.setTimeout(()=>setMessage(''),4200)};
  const saveSet=async()=>{
    if(!editing)return;
    if(editing.questions.length<20)return flash('A learning set must contain at least 20 questions.');
    try{const r=await api.saveSet(editing);setEditing(r.set);flash('Question set saved. A new version was created.');refresh()}catch(e:any){flash(e.message)}
  };
  const cloneOfficial=(s:QuestionSet)=>{
    const copy:QuestionSet={...s,id:'',isOfficial:false,visibility:prefs.defaultVisibility,title:`${s.title} — Copy`,updatedAt:new Date().toISOString(),status:'draft',questions:s.questions.map(q=>({...q,id:`q_${crypto.randomUUID()}`}))};
    while(copy.questions.length<Math.max(20,prefs.defaultQuestionCount))copy.questions.push(emptyQuestion());
    setEditing(copy);setTab('content');
  };
  const createPass=async(g:any)=>{try{const r=await api.createPass({gameId:g.id,label:`Volunteer Host — ${g.title}`,permissions:['host','view_results'],expiresAt:null});flash(`Host access created. PIN: ${r.pin}`);refresh()}catch(e:any){flash(e.message)}};

  const filteredSets=sets.filter(s=>{
    const text=`${s.title} ${s.description||''} ${s.topic||''} ${s.context||''} ${s.skill||''}`.toLowerCase();
    return (!query||text.includes(query.toLowerCase()))&&(languageFilter==='all'||s.language===languageFilter);
  });
  const selectedBuilderSet=sets.find(s=>s.id===builderSetId);
  const compatibleModes=React.useMemo(()=>selectedBuilderSet?gameModes.filter(m=>m.status==='active'&&m.supportedQuestionTypes.some(t=>selectedBuilderSet.questions.some(q=>q.type===t))):[],[selectedBuilderSet]);
  React.useEffect(()=>{if(selectedBuilderSet&&!builderTitle)setBuilderTitle(`Game — ${selectedBuilderSet.title}`)},[builderSetId,selectedBuilderSet,builderTitle]);

  const createBuiltGame=async()=>{
    if(!selectedBuilderSet)return flash('Choose a question set first.');
    const mode=gameModes.find(m=>m.id===builderModeId)||compatibleModes[0];
    if(!mode)return flash('No compatible game mode was found.');
    try{
      const r=await api.createGame({title:builderTitle||`${mode.name} — ${selectedBuilderSet.title}`,modeId:mode.id,setId:selectedBuilderSet.id,visibility:builderVisibility,config:builderConfig});
      flash(`${mode.name} created. Join code: ${r.game.join_code}`);refresh();setTab('sessions');
    }catch(e:any){flash(e.message)}
  };

  const saveGeneric=async()=>{
    if(!genericEditor)return;
    try{
      if(genericEditor.id)await api.updateCreatorItem(genericEditor.id,{title:genericEditor.title,status:genericEditor.status,data:genericEditor.data});
      else await api.saveCreatorItem({type:genericEditor.type,title:genericEditor.title,status:genericEditor.status,data:genericEditor.data});
      flash(`${itemTitle(genericEditor.type)} saved.`);setGenericEditor(null);refresh();
    }catch(e:any){flash(e.message)}
  };
  const editGeneric=(x:CreatorItem)=>setGenericEditor({type:x.type,id:x.id,title:x.title,status:x.status,data:x.data||{}});
  const deleteGeneric=async(x:CreatorItem)=>{if(!confirm(`Delete “${x.title}”?`))return;try{await api.deleteCreatorItem(x.id);flash('Item deleted.');refresh()}catch(e:any){flash(e.message)}};
  const uploadMedia=async(file:File)=>{try{await api.uploadMedia(file);flash('Media uploaded to R2.');refresh()}catch(e:any){flash(e.message)}};
  const savePrefs=async()=>{try{await api.saveCreatorPreferences(prefs);flash('Creator settings saved.');refresh()}catch(e:any){flash(e.message)}};

  const exportCreator=()=>{
    const blob=new Blob([JSON.stringify({exportedAt:new Date().toISOString(),account:{id:account.id,email:account.email,displayName:account.displayName},sets,games,passes,items,prefs},null,2)],{type:'application/json'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`sky-first-games-creator-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href);
  };
  const importCsv=async(file:File)=>{
    try{
      const lines=(await file.text()).split(/\r?\n/).filter(Boolean);if(lines.length<2)throw new Error('The CSV file is empty.');
      const rows=lines.slice(1).map(l=>l.split(',').map(v=>v.replace(/^"|"$/g,'').trim()));
      const set=emptySet(prefs.defaultLanguage,Math.max(20,rows.length));set.title=file.name.replace(/\.csv$/i,'');set.questions=rows.map((r,i)=>({id:`q_${crypto.randomUUID()}`,type:'multiple_choice',prompt:r[0]||`Question ${i+1}`,options:[r[1]||'',r[2]||'',r[3]||'',r[4]||''].filter(Boolean),answers:[r[5]||r[1]||''],explanation:r[6]||'',difficulty:2,tags:['imported']}));
      while(set.questions.length<20)set.questions.push(emptyQuestion());setEditing(set);setTab('content');flash(`Imported ${rows.length} questions. Review them before saving.`);
    }catch(e:any){flash(e.message)}
  };

  const navGroups=[
    {label:'CREATE',items:[
      ['overview','Overview',LayoutDashboard],['content','My Content',WandSparkles],['official','Official Content',LibraryBig],['builder','Game Builder',Gamepad2],['challenges','Challenges',Sparkles],['assignments','Assignments',ClipboardList],['templates','Templates',PanelTop]
    ]},
    {label:'DELIVER',items:[
      ['sessions','Games & Sessions',MonitorPlay],['passes','Access Passes',KeyRound],['volunteer','Volunteer Sharing',UsersRound]
    ]},
    {label:'ANALYZE',items:[
      ['reports','Reports & Analytics',BarChart3],['versions','Version History',History],['activity','Activity Log',Activity]
    ]},
    {label:'ASSETS',items:[
      ['media','Media Studio',FileAudio],['collections','Collections',FolderKanban],['importexport','Import / Export',Import]
    ]},
    {label:'SYSTEM',items:[
      ['settings','Creator Settings',Settings2],['help','Help Center',CircleHelp]
    ]}
  ] as const;

  const startCreate=(type:string)=>{
    setCreateMenu(false);
    if(type==='question_set'){setEditing(emptySet(prefs.defaultLanguage,prefs.defaultQuestionCount));setTab('content');return}
    if(type==='game'){setTab('builder');return}
    if(type==='access_pass'){setTab('passes');return}
    if(type==='media'){setTab('media');return}
    const defaults:Record<string,any>={
      challenge:{setIds:[],modeIds:[],mastery:prefs.mastery,stages:3},
      assignment:{setId:'',dueAt:'',attempts:3,mastery:prefs.mastery},
      collection:{itemIds:[],description:''},
      template:{description:'',defaultModeId:'',config:{shuffle:true,review:true,remediation:true}},
      session_plan:{gameId:'',startsAt:'',endsAt:'',maxPlayers:60}
    };
    setGenericEditor({type,title:`New ${itemTitle(type)}`,status:'draft',data:defaults[type]||{}});
  };

  return <main className="creator-shell-pro">
    <aside className="creator-sidebar-pro">
      <div className="creator-brand"><img src="/brand/sky-first-logo.png" alt="Sky First"/><div><strong>Creator Studio</strong><small>{account.displayName}</small></div></div>
      <div className="creator-nav-scroll">{navGroups.map(group=><div className="creator-nav-group" key={group.label}><span>{group.label}</span>{group.items.map(([id,label,Icon])=><button key={id} className={tab===id?'active':''} onClick={()=>{setTab(id as Tab);setEditing(null)}}><Icon/><b>{label}</b></button>)}</div>)}</div>
      <div className="creator-side-note"><ShieldCheck/><div><b>English System UI</b><span>Learning content stays in the target language.</span></div></div>
    </aside>

    <section className="creator-main-pro">
      {message&&<div className="creator-toast" onClick={()=>setMessage('')}>{message}</div>}
      <header className="creator-topbar"><div><span className="eyebrow">SKY FIRST GAMES</span><h1>{tab==='overview'?'Creator Workspace':(navGroups.flatMap((g:any)=>g.items as any[]) as any[]).find((x:any)=>x[0]===tab)?.[1]}</h1></div><div className="creator-top-actions"><button className="secondary-button" onClick={refresh}><RefreshCcw/>Refresh</button><div className="create-dropdown"><button className="primary-button" onClick={()=>setCreateMenu(v=>!v)}><Plus/>Create</button>{createMenu&&<div className="create-menu">{[
        ['question_set','Question Set'],['game','Game'],['challenge','Challenge'],['assignment','Assignment'],['collection','Collection'],['template','Template'],['session_plan','Scheduled Session'],['access_pass','Access Pass'],['media','Media']
      ].map(([id,label])=><button key={id} onClick={()=>startCreate(id)}>{label}</button>)}</div>}</div></div></header>

      {tab==='overview'&&<Overview sets={sets} games={games} passes={passes} sessions={sessions} items={items} media={mediaItems} activity={activity} onCreate={startCreate}/>} 
      {tab==='content'&&<ContentStudio sets={filteredSets} editing={editing} setEditing={setEditing} save={saveSet} refresh={refresh} flash={flash} query={query} setQuery={setQuery} languageFilter={languageFilter} setLanguageFilter={setLanguageFilter} prefs={prefs}/>} 
      {tab==='official'&&<OfficialContent cloneOfficial={cloneOfficial}/>} 
      {tab==='builder'&&<GameBuilder sets={sets} selectedSet={selectedBuilderSet} builderSetId={builderSetId} setBuilderSetId={setBuilderSetId} compatibleModes={compatibleModes} builderModeId={builderModeId} setBuilderModeId={setBuilderModeId} builderTitle={builderTitle} setBuilderTitle={setBuilderTitle} visibility={builderVisibility} setVisibility={setBuilderVisibility} config={builderConfig} setConfig={setBuilderConfig} create={createBuiltGame}/>} 
      {tab==='challenges'&&<GenericList type="challenge" title="Challenges" desc="Combine several learning stages, sets and game modes into one guided experience." items={items} edit={editGeneric} remove={deleteGeneric} create={()=>startCreate('challenge')}/>} 
      {tab==='assignments'&&<GenericList type="assignment" title="Assignments" desc="Create practice tasks with deadlines, attempt limits and mastery thresholds." items={items} edit={editGeneric} remove={deleteGeneric} create={()=>startCreate('assignment')}/>} 
      {tab==='templates'&&<GenericList type="template" title="Templates" desc="Save reusable game, content and delivery presets." items={items} edit={editGeneric} remove={deleteGeneric} create={()=>startCreate('template')}/>} 
      {tab==='collections'&&<GenericList type="collection" title="Collections" desc="Organize question sets, games and challenges into reusable folders." items={items} edit={editGeneric} remove={deleteGeneric} create={()=>startCreate('collection')}/>} 
      {tab==='sessions'&&<SessionsStudio games={games} sessions={sessions} flash={flash} refresh={refresh}/>} 
      {tab==='passes'&&<PassStudio games={games} passes={passes} createPass={createPass} refresh={refresh} flash={flash}/>} 
      {tab==='volunteer'&&<VolunteerSharing games={games} passes={passes}/>} 
      {tab==='media'&&<MediaStudio items={mediaItems} upload={uploadMedia}/>} 
      {tab==='reports'&&<ReportsStudio sets={sets} games={games} sessions={sessions}/>} 
      {tab==='versions'&&<VersionStudio sets={sets}/>} 
      {tab==='activity'&&<ActivityStudio items={activity}/>} 
      {tab==='importexport'&&<ImportExport importCsv={importCsv} exportCreator={exportCreator}/>} 
      {tab==='settings'&&<SettingsStudio prefs={prefs} setPrefs={setPrefs} save={savePrefs}/>} 
      {tab==='help'&&<HelpCenter/>}

      {genericEditor&&<GenericEditor value={genericEditor} setValue={setGenericEditor} save={saveGeneric}/>} 
    </section>
  </main>;
}

function SectionHead({eyebrow,title,desc,action}:{eyebrow:string;title:string;desc:string;action?:React.ReactNode}){return <div className="creator-section-head"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{desc}</p></div>{action}</div>}
function Metric({label,value,icon}:{label:string;value:any;icon:React.ReactNode}){return <article className="creator-metric">{icon}<div><strong>{value}</strong><span>{label}</span></div></article>}
function EmptyState({title,desc,action}:{title:string;desc:string;action?:React.ReactNode}){return <div className="creator-empty"><Boxes/><h3>{title}</h3><p>{desc}</p>{action}</div>}

function Overview({sets,games,passes,sessions,items,media,activity,onCreate}:any){
  const active=sessions.filter((x:any)=>['running','lobby','active'].includes(x.state)).length;
  return <><SectionHead eyebrow="WORKSPACE OVERVIEW" title="Everything you create, deliver and analyze" desc="Create learning content once, connect it to compatible game modes, share it with volunteers and review the results."/>
  <div className="creator-metric-grid"><Metric label="Question Sets" value={sets.length} icon={<BookOpenCheck/>}/><Metric label="Games" value={games.length} icon={<Gamepad2/>}/><Metric label="Active Sessions" value={active} icon={<MonitorPlay/>}/><Metric label="Access Passes" value={passes.filter((x:any)=>!x.revoked_at).length} icon={<KeyRound/>}/><Metric label="Workspace Items" value={items.length} icon={<FolderKanban/>}/><Metric label="Media Assets" value={media.length} icon={<FileAudio/>}/></div>
  <div className="creator-quick-grid">{[
    ['Question Set','Build a 20–30+ question learning set.',()=>onCreate('question_set'),<BookOpenCheck/>],
    ['Game','Turn an existing set into a playable experience.',()=>onCreate('game'),<Gamepad2/>],
    ['Challenge','Combine several stages into a guided learning path.',()=>onCreate('challenge'),<Sparkles/>],
    ['Assignment','Set a deadline, mastery target and attempt limit.',()=>onCreate('assignment'),<ClipboardList/>],
    ['Access Pass','Give a volunteer host access without an account.',()=>onCreate('access_pass'),<KeyRound/>],
    ['Media','Upload audio, images or video to R2.',()=>onCreate('media'),<Upload/>]
  ].map(([title,desc,fn,icon]:any)=><button className="creator-quick-card" key={title} onClick={fn}>{icon}<div><b>{title}</b><span>{desc}</span></div><ChevronRight/></button>)}</div>
  <div className="creator-dashboard-columns"><div className="panel"><h3>Learning loop standard</h3><ol className="creator-checklist"><li><CheckCircle2/>20–30+ questions per play session</li><li><CheckCircle2/>Detailed result review</li><li><CheckCircle2/>Relearn incorrect answers</li><li><CheckCircle2/>Retest mastery</li><li><CheckCircle2/>Continue or exit after completion</li></ol></div><div className="panel"><h3>Recent activity</h3>{activity.slice(0,6).map((x:any)=><div className="activity-row" key={x.id}><Activity/><div><b>{x.action} • {x.entity_type}</b><small>{formatDate(x.created_at)}</small></div></div>)}{!activity.length&&<p className="muted">No activity yet.</p>}</div></div></>;
}

function ContentStudio({sets,editing,setEditing,save,refresh,flash,query,setQuery,languageFilter,setLanguageFilter,prefs}:any){
  if(editing)return <QuestionSetEditor value={editing} setValue={setEditing} save={save} cancel={()=>setEditing(null)}/>;
  return <><SectionHead eyebrow="CONTENT LIBRARY" title="My Question Sets" desc="Create, edit, duplicate, archive and delete your reusable learning content." action={<button className="primary-button" onClick={()=>setEditing(emptySet(prefs.defaultLanguage,prefs.defaultQuestionCount))}><Plus/>New Question Set</button>}/>
  <div className="creator-toolbar"><div className="searchbox"><Search/><input placeholder="Search question sets…" value={query} onChange={e=>setQuery(e.target.value)}/></div><select value={languageFilter} onChange={e=>setLanguageFilter(e.target.value)}><option value="all">All learning languages</option>{languages.map(l=><option key={l.code} value={l.code}>{l.icon} {l.nativeName}</option>)}</select></div>
  <div className="creator-card-grid">{sets.map((s:QuestionSet)=><article className="creator-content-card" key={s.id}><div className="card-topline"><span>{languages.find(l=>l.code===s.language)?.icon||'🌐'} {s.language.toUpperCase()}</span><span className="status-pill">{s.status||'draft'}</span></div><h3>{s.title}</h3><p>{s.description||'No description yet.'}</p><div className="card-meta"><span>{s.questions.length} questions</span><span>{s.level}</span><span>{s.skill||'Mixed'}</span></div><div className="card-actions"><button onClick={()=>setEditing(s)}>Edit</button><button onClick={()=>setEditing({...s,id:'',title:`${s.title} — Copy`,questions:s.questions.map(q=>({...q,id:`q_${crypto.randomUUID()}`}))})}><Copy/>Duplicate</button><button className="danger" onClick={async()=>{if(!confirm(`Delete “${s.title}”?`))return;try{await api.deleteSet(s.id);flash('Question set deleted.');refresh()}catch(e:any){flash(e.message)}}}><Trash2/></button></div></article>)}{!sets.length&&<EmptyState title="No question sets yet" desc="Create your first set with at least 20 questions, then reuse it across multiple compatible game modes." action={<button className="primary-button" onClick={()=>setEditing(emptySet(prefs.defaultLanguage,prefs.defaultQuestionCount))}><Plus/>Create Question Set</button>}/>}</div></>;
}

function QuestionSetEditor({value,setValue,save,cancel}:{value:QuestionSet;setValue:(x:QuestionSet|null)=>void;save:()=>void;cancel:()=>void}){
  const updateQuestion=(index:number,patch:Partial<Question>)=>{const q=[...value.questions];q[index]={...q[index],...patch};setValue({...value,questions:q})};
  const removeQuestion=(index:number)=>{if(value.questions.length<=20)return alert('A question set must keep at least 20 questions.');setValue({...value,questions:value.questions.filter((_,i)=>i!==index)})};
  const addQuestion=()=>setValue({...value,questions:[...value.questions,emptyQuestion()]});
  return <><SectionHead eyebrow="QUESTION SET EDITOR" title={value.title||'New Question Set'} desc="System controls stay in English. Question content should be written in the selected learning language." action={<div className="button-row"><button className="secondary-button" onClick={cancel}><X/>Close</button><button className="primary-button" onClick={save}><Save/>Save</button></div>}/>
  <div className="panel creator-editor-meta"><div className="form-grid"><label><span>Title</span><input value={value.title} onChange={e=>setValue({...value,title:e.target.value})}/></label><label><span>Learning language</span><select value={value.language} onChange={e=>setValue({...value,language:e.target.value})}>{languages.map(l=><option value={l.code} key={l.code}>{l.icon} {l.nativeName}</option>)}</select></label><label><span>Level</span><input value={value.level} onChange={e=>setValue({...value,level:e.target.value})}/></label><label><span>Skill</span><input value={value.skill||''} onChange={e=>setValue({...value,skill:e.target.value})}/></label><label><span>Context</span><input value={value.context||''} onChange={e=>setValue({...value,context:e.target.value})}/></label><label><span>Visibility</span><select value={value.visibility} onChange={e=>setValue({...value,visibility:e.target.value as any})}><option value="private">Private</option><option value="link">Link only</option><option value="password">Password protected</option><option value="public">Public</option></select></label><label className="full-span"><span>Description</span><textarea rows={3} value={value.description} onChange={e=>setValue({...value,description:e.target.value})}/></label></div><div className="quality-meter"><Gauge/><div><b>{value.questions.length} questions</b><span>{value.questions.length>=30?'Excellent coverage':value.questions.length>=20?'Minimum standard met':'Add more questions'}</span></div></div></div>
  <div className="question-editor-list">{value.questions.map((q,i)=><article className="question-editor-card" key={q.id}><div className="question-editor-head"><b>Question {i+1}</b><select value={q.type} onChange={e=>updateQuestion(i,{type:e.target.value as QuestionType})}>{qTypes.map(t=><option key={t} value={t}>{t.replaceAll('_',' ')}</option>)}</select><select value={q.difficulty||1} onChange={e=>updateQuestion(i,{difficulty:Number(e.target.value) as any})}><option value="1">Difficulty 1</option><option value="2">Difficulty 2</option><option value="3">Difficulty 3</option><option value="4">Difficulty 4</option><option value="5">Difficulty 5</option></select><button className="icon-button danger" onClick={()=>removeQuestion(i)}><Trash2/></button></div><label><span>Prompt — write this in {languages.find(l=>l.code===value.language)?.nativeName||value.language}</span><textarea rows={2} value={q.prompt} onChange={e=>updateQuestion(i,{prompt:e.target.value})}/></label>{['multiple_choice','multiple_select','true_false','image_choice','audio_choice','dialogue','scenario_decision','error_correction','synonym_antonym'].includes(q.type)&&<label><span>Options — one per line</span><textarea rows={4} value={(q.options||[]).join('\n')} onChange={e=>updateQuestion(i,{options:e.target.value.split('\n')})}/></label>}<label><span>Accepted answer(s) — one per line</span><textarea rows={2} value={(q.answers||[]).join('\n')} onChange={e=>updateQuestion(i,{answers:e.target.value.split('\n').filter(Boolean)})}/></label><div className="form-grid"><label><span>Explanation</span><textarea rows={2} value={q.explanation||''} onChange={e=>updateQuestion(i,{explanation:e.target.value})}/></label><label><span>Hint</span><textarea rows={2} value={q.hint||''} onChange={e=>updateQuestion(i,{hint:e.target.value})}/></label><label><span>Media URL</span><input value={q.mediaUrl||''} onChange={e=>updateQuestion(i,{mediaUrl:e.target.value,mediaType:e.target.value?'audio':undefined})}/></label><label><span>TTS text</span><input value={q.ttsText||''} onChange={e=>updateQuestion(i,{ttsText:e.target.value})}/></label><label><span>TTS language</span><input value={q.ttsLang||''} onChange={e=>updateQuestion(i,{ttsLang:e.target.value})}/></label><label><span>Max plays</span><input type="number" min={0} value={q.maxPlays||0} onChange={e=>updateQuestion(i,{maxPlays:Number(e.target.value)})}/></label></div></article>)}</div><button className="secondary-button full" onClick={addQuestion}><Plus/>Add Question</button></>;
}

function OfficialContent({cloneOfficial}:{cloneOfficial:(s:QuestionSet)=>void}){const [q,setQ]=React.useState('');const [lang,setLang]=React.useState('all');const list=seedQuestionSets.filter(s=>(lang==='all'||s.language===lang)&&(!q||`${s.title} ${s.description}`.toLowerCase().includes(q.toLowerCase())));return <><SectionHead eyebrow="SKY FIRST OFFICIAL" title="Official Content" desc="Verified starter content designed for each learning language. Copy a pack to customize it without changing the original."/><div className="creator-toolbar"><div className="searchbox"><Search/><input placeholder="Search official packs…" value={q} onChange={e=>setQ(e.target.value)}/></div><select value={lang} onChange={e=>setLang(e.target.value)}><option value="all">All languages</option>{languages.map(l=><option key={l.code} value={l.code}>{l.icon} {l.nativeName}</option>)}</select></div><div className="creator-card-grid">{list.map(s=><article className="creator-content-card official" key={s.id}><div className="card-topline"><span><PackageCheck/>Sky First Official</span><span>{languages.find(l=>l.code===s.language)?.nativeName}</span></div><h3>{s.title}</h3><p>{s.description}</p><div className="card-meta"><span>{s.questions.length} questions</span><span>{s.level}</span><span>{s.context}</span></div><div className="card-actions"><button className="primary-button" onClick={()=>cloneOfficial(s)}><Copy/>Use & Customize</button></div></article>)}</div></>}

function GameBuilder({sets,selectedSet,builderSetId,setBuilderSetId,compatibleModes,builderModeId,setBuilderModeId,builderTitle,setBuilderTitle,visibility,setVisibility,config,setConfig,create}:any){return <><SectionHead eyebrow="GAME BUILDER" title="Turn content into a game" desc="Choose a question set, review compatible game modes, configure the learning loop and publish."/><div className="builder-layout"><div className="panel"><h3>1. Question Set</h3><select value={builderSetId} onChange={e=>{setBuilderSetId(e.target.value);setBuilderModeId('')}}><option value="">Choose a set…</option>{sets.map((s:QuestionSet)=><option key={s.id} value={s.id}>{s.title} • {s.questions.length} questions</option>)}</select>{selectedSet&&<div className="builder-summary"><b>{selectedSet.title}</b><span>{selectedSet.language.toUpperCase()} • {selectedSet.level} • {selectedSet.questions.length} questions</span></div>}</div><div className="panel"><h3>2. Compatible Game Mode</h3><div className="mode-picker">{compatibleModes.map((m:any)=><button className={builderModeId===m.id?'active':''} key={m.id} onClick={()=>setBuilderModeId(m.id)}><span>{m.icon}</span><b>{m.name}</b><small>{m.mechanic}</small></button>)}</div>{selectedSet&&!compatibleModes.length&&<p className="muted">No compatible modes were found for the question types in this set.</p>}</div><div className="panel"><h3>3. Delivery Settings</h3><label><span>Game title</span><input value={builderTitle} onChange={e=>setBuilderTitle(e.target.value)}/></label><label><span>Visibility</span><select value={visibility} onChange={e=>setVisibility(e.target.value)}><option value="private">Private</option><option value="link">Link only</option><option value="password">Password protected</option><option value="public">Public</option></select></label><div className="toggle-grid"><Toggle label="Shuffle questions" checked={config.shuffle} set={(v:boolean)=>setConfig({...config,shuffle:v})}/><Toggle label="Show answer review" checked={config.review} set={(v:boolean)=>setConfig({...config,review:v})}/><Toggle label="Relearn incorrect answers" checked={config.remediation} set={(v:boolean)=>setConfig({...config,remediation:v})}/><Toggle label="Leaderboard" checked={config.leaderboard} set={(v:boolean)=>setConfig({...config,leaderboard:v})}/></div><label><span>Questions per session</span><input type="number" min={20} max={60} value={config.questionCount} onChange={e=>setConfig({...config,questionCount:Math.max(20,Number(e.target.value))})}/></label><button className="primary-button full big" disabled={!selectedSet} onClick={create}><Gamepad2/>Create Game</button></div></div></>}

function GenericList({type,title,desc,items,edit,remove,create}:any){const rows=items.filter((x:CreatorItem)=>x.type===type);return <><SectionHead eyebrow="CREATOR WORKSPACE" title={title} desc={desc} action={<button className="primary-button" onClick={create}><Plus/>Create {itemTitle(type)}</button>}/><div className="creator-card-grid">{rows.map((x:CreatorItem)=><article className="creator-content-card" key={x.id}><div className="card-topline"><span>{itemTitle(type)}</span><span className="status-pill">{x.status}</span></div><h3>{x.title}</h3><p>Updated {formatDate(x.updated_at)}</p><div className="card-actions"><button onClick={()=>edit(x)}>Edit</button><button className="danger" onClick={()=>remove(x)}><Trash2/>Delete</button></div></article>)}{!rows.length&&<EmptyState title={`No ${title.toLowerCase()} yet`} desc={`Create your first ${itemTitle(type).toLowerCase()} to start using this workspace module.`} action={<button className="primary-button" onClick={create}><Plus/>Create {itemTitle(type)}</button>}/>}</div></>}

function GenericEditor({value,setValue,save}:any){return <div className="creator-modal-backdrop"><section className="creator-modal"><div className="creator-modal-head"><div><span className="eyebrow">{itemTitle(value.type).toUpperCase()} EDITOR</span><h2>{value.id?'Edit':'Create'} {itemTitle(value.type)}</h2></div><button className="icon-button" onClick={()=>setValue(null)}><X/></button></div><label><span>Title</span><input value={value.title} onChange={e=>setValue({...value,title:e.target.value})}/></label><label><span>Status</span><select value={value.status} onChange={e=>setValue({...value,status:e.target.value})}><option value="draft">Draft</option><option value="active">Active</option><option value="published">Published</option><option value="archived">Archived</option></select></label><label><span>Configuration (JSON)</span><textarea rows={14} value={JSON.stringify(value.data,null,2)} onChange={e=>{try{setValue({...value,data:JSON.parse(e.target.value)})}catch{}}}/></label><div className="button-row"><button className="secondary-button" onClick={()=>setValue(null)}>Cancel</button><button className="primary-button" onClick={save}><Save/>Save</button></div></section></div>}

function SessionsStudio({games,sessions,flash,refresh}:any){return <><SectionHead eyebrow="DELIVER" title="Games & Sessions" desc="Manage playable games, join codes and session history."/><div className="creator-card-grid">{games.map((g:any)=><article className="creator-content-card" key={g.id}><div className="card-topline"><span>{g.mode_id}</span><span className="status-pill">{g.status}</span></div><h3>{g.title}</h3><p>Join code <b>{g.join_code}</b></p><div className="card-actions"><button onClick={()=>navigator.clipboard?.writeText(`${location.origin}/join?code=${g.join_code}`)}>Copy player link</button><button onClick={async()=>{try{await api.updateGame(g.id,{status:g.status==='active'?'archived':'active'});flash('Game status updated.');refresh()}catch(e:any){flash(e.message)}}}>{g.status==='active'?'Archive':'Activate'}</button><button className="danger" onClick={async()=>{if(!confirm('Archive this game?'))return;await api.deleteGame(g.id);flash('Game archived.');refresh()}}><Archive/></button></div></article>)}</div><SectionHead eyebrow="SESSION HISTORY" title="Recent Sessions" desc="Sessions created from your games."/><div className="admin-list">{sessions.map((s:any)=><article key={s.id}><div><b>{s.game_title||s.game_id}</b><span>Room {s.room_code}</span><small>{s.state} • {formatDate(s.created_at)}</small></div><span className="status-pill">{s.state}</span></article>)}{!sessions.length&&<EmptyState title="No sessions yet" desc="Create a game and share it with a volunteer host to start a session."/>}</div></>}

function PassStudio({games,passes,createPass,refresh,flash}:any){return <><SectionHead eyebrow="HOST ACCESS" title="Access Passes" desc="Give volunteers temporary host access without creating volunteer accounts."/><div className="creator-card-grid">{games.map((g:any)=><article className="creator-content-card" key={g.id}><h3>{g.title}</h3><p>Join code {g.join_code}</p><button className="primary-button" onClick={()=>createPass(g)}><KeyRound/>Create Host Pass</button></article>)}</div><div className="admin-list">{passes.map((p:any)=><article key={p.id}><div><b>{p.label||'Volunteer Host'}</b><span>Token: {p.token}</span><small>{p.revoked_at?'Revoked':'Active'} • {p.expires_at?`Expires ${p.expires_at}`:'No expiry date'}</small></div>{!p.revoked_at&&<button className="danger" onClick={async()=>{try{await api.revokePass(p.id);flash('Access Pass revoked.');refresh()}catch(e:any){flash(e.message)}}}>Revoke</button>}</article>)}{!passes.length&&<EmptyState title="No Access Passes" desc="Create a game first, then issue a host pass for a volunteer."/>}</div></>}

function VolunteerSharing({games,passes}:any){return <><SectionHead eyebrow="VOLUNTEER SHARING" title="Share games with volunteers" desc="Player links and host links stay separate. Volunteers can host through Access Pass + PIN without a Creator account."/><div className="creator-card-grid">{games.map((g:any)=><article className="creator-content-card" key={g.id}><h3>{g.title}</h3><p>Player: <code>{location.origin}/join?code={g.join_code}</code></p><p>Active host passes: {passes.filter((p:any)=>p.game_id===g.id&&!p.revoked_at).length}</p></article>)}</div></>}

function MediaStudio({items,upload}:any){const input=React.useRef<HTMLInputElement>(null);return <><SectionHead eyebrow="R2 MEDIA" title="Media Studio" desc="Upload and reuse audio, images and video. Audio questions can fall back to browser TTS when a file is unavailable." action={<><input ref={input} type="file" hidden accept="image/*,audio/*,video/*" onChange={e=>e.target.files?.[0]&&upload(e.target.files[0])}/><button className="primary-button" onClick={()=>input.current?.click()}><Upload/>Upload Media</button></>}/><div className="media-admin-grid">{items.map((x:any)=><article key={x.key}>{x.type?.startsWith('image')?<img src={x.url}/>:<div className="media-file-icon"><FileAudio/></div>}<b>{x.key.split('/').pop()}</b><small>{x.type||'asset'} • {Math.round((x.size||0)/1024)} KB</small><a href={x.url} target="_blank" rel="noreferrer">Open</a></article>)}{!items.length&&<EmptyState title="No media yet" desc="Upload audio, images or video to your Creator media library."/>}</div></>}

function ReportsStudio({sets,games,sessions}:any){const running=sessions.filter((x:any)=>x.state==='running').length;return <><SectionHead eyebrow="ANALYTICS" title="Reports & Analytics" desc="A summary of content coverage, delivery activity and session state."/><div className="creator-metric-grid"><Metric label="Question Sets" value={sets.length} icon={<BookOpenCheck/>}/><Metric label="Total Questions" value={sets.reduce((n:number,s:QuestionSet)=>n+s.questions.length,0)} icon={<ListChecks/>}/><Metric label="Games" value={games.length} icon={<Gamepad2/>}/><Metric label="Sessions" value={sessions.length} icon={<MonitorPlay/>}/><Metric label="Running" value={running} icon={<Activity/>}/></div><div className="panel"><h3>Learning quality checks</h3><p>Every playable set should contain at least 20 questions. Recommended sessions use 20–30 questions, followed by review, relearn and retest.</p></div></>}
function VersionStudio({sets}:any){return <><SectionHead eyebrow="VERSION CONTROL" title="Version History" desc="Question sets create a new database version whenever they are saved."/><div className="admin-list">{sets.map((s:any)=><article key={s.id}><div><b>{s.title}</b><span>{s.questions.length} questions</span><small>Updated {formatDate(s.updatedAt)}</small></div><span className="status-pill">{s.status||'draft'}</span></article>)}</div></>}
function ActivityStudio({items}:any){return <><SectionHead eyebrow="AUDIT TRAIL" title="Creator Activity" desc="Recent creates, edits and deletions in your workspace."/><div className="admin-list">{items.map((x:any)=><article key={x.id}><div><b>{x.action} • {x.entity_type}</b><span>{x.detail?.title||x.entity_id||''}</span><small>{formatDate(x.created_at)}</small></div></article>)}{!items.length&&<EmptyState title="No activity yet" desc="Workspace actions will appear here."/>}</div></>}
function ImportExport({importCsv,exportCreator}:any){const ref=React.useRef<HTMLInputElement>(null);return <><SectionHead eyebrow="DATA TOOLS" title="Import / Export" desc="Import question sets from CSV and export a Creator workspace snapshot."/><div className="creator-quick-grid"><button className="creator-quick-card" onClick={()=>ref.current?.click()}><FileSpreadsheet/><div><b>Import CSV</b><span>Question, option A–D, answer and explanation.</span></div><ChevronRight/></button><button className="creator-quick-card" onClick={exportCreator}><Download/><div><b>Export Workspace JSON</b><span>Download content metadata, games, passes and workspace items.</span></div><ChevronRight/></button><input ref={ref} hidden type="file" accept=".csv,text/csv" onChange={e=>e.target.files?.[0]&&importCsv(e.target.files[0])}/></div></>}
function SettingsStudio({prefs,setPrefs,save}:any){return <><SectionHead eyebrow="PREFERENCES" title="Creator Settings" desc="Set defaults for new content and delivery workflows." action={<button className="primary-button" onClick={save}><Save/>Save Settings</button>}/><div className="panel form-grid"><label><span>Default learning language</span><select value={prefs.defaultLanguage} onChange={e=>setPrefs({...prefs,defaultLanguage:e.target.value})}>{languages.map((l:any)=><option key={l.code} value={l.code}>{l.icon} {l.nativeName}</option>)}</select></label><label><span>Default visibility</span><select value={prefs.defaultVisibility} onChange={e=>setPrefs({...prefs,defaultVisibility:e.target.value})}><option value="private">Private</option><option value="link">Link only</option><option value="password">Password protected</option><option value="public">Public</option></select></label><label><span>Default question count</span><input type="number" min={20} max={60} value={prefs.defaultQuestionCount} onChange={e=>setPrefs({...prefs,defaultQuestionCount:Number(e.target.value)})}/></label><label><span>Mastery threshold (%)</span><input type="number" min={50} max={100} value={prefs.mastery} onChange={e=>setPrefs({...prefs,mastery:Number(e.target.value)})}/></label><Toggle label="Autosave preference" checked={prefs.autosave} set={(v:boolean)=>setPrefs({...prefs,autosave:v})}/><Toggle label="Safe classroom mode by default" checked={prefs.safeMode} set={(v:boolean)=>setPrefs({...prefs,safeMode:v})}/></div></>}
function HelpCenter(){return <><SectionHead eyebrow="HELP CENTER" title="Creator Studio Guide" desc="A quick reference for building reliable learning experiences."/><div className="creator-help-grid">{[
  ['Question Sets','Use one reusable set across multiple compatible games. Keep at least 20 questions; 30 is recommended.'],
  ['Target language','System UI is always English. Write the learning content in the language learners are studying.'],
  ['Listening','Upload audio to R2 and add TTS text/language as a fallback.'],
  ['Game Builder','Compatibility filtering prevents incompatible modes from being selected.'],
  ['Volunteers','Issue an Access Pass instead of sharing Creator credentials.'],
  ['Learning loop','After play: review → relearn incorrect answers → retest → continue or exit.']
].map(([a,b])=><article key={a}><CircleHelp/><h3>{a}</h3><p>{b}</p></article>)}</div></>}
function Toggle({label,checked,set}:{label:string;checked:boolean;set:(x:boolean)=>void}){return <label className="creator-toggle"><span>{label}</span><input type="checkbox" checked={checked} onChange={e=>set(e.target.checked)}/><i/></label>}
