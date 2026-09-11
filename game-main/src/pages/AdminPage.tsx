import React from 'react';
import {
  Activity, AlertTriangle, Archive, BadgeCheck, BarChart3, Bell, BookOpenCheck, Boxes,
  Braces, CheckCircle2, ChevronRight, CircleGauge, ClipboardList, Cloud, Code2, Copy,
  Database, Download, Eye, FileJson, FileText, Flag, Gamepad2, Gauge, Globe2, Image,
  KeyRound, Languages, LayoutDashboard, Link2, ListChecks, Megaphone, Menu, MonitorCog,
  Palette, PlayCircle, RefreshCw, Save, Search, Settings, ShieldCheck, SlidersHorizontal,
  Sparkles, ToggleLeft, Trash2, UploadCloud, Users, WandSparkles, Wrench, XCircle
} from 'lucide-react';
import { api } from '../lib/api';
import { languages as builtInLanguages } from '../data/languages';
import { seedQuestionSets } from '../data/seedContent';
import { gameModes as builtInModes } from '../data/gameModes';
import type { Account } from '../types';

type Tab =
  | 'overview' | 'site' | 'navigation' | 'homepage' | 'pages' | 'footer' | 'branding' | 'seo'
  | 'languages' | 'modes' | 'game-lab' | 'content' | 'matrix' | 'collections' | 'challenges'
  | 'accounts' | 'passes' | 'sessions' | 'results' | 'media' | 'moderation' | 'announcements'
  | 'features' | 'audit' | 'backup' | 'system';

type MenuGroup = { title: string; items: [Tab, string, React.ReactNode][] };

const menuGroups: MenuGroup[] = [
  { title: 'Trung tâm', items: [
    ['overview', 'Command Center', <LayoutDashboard/>],
    ['site', 'Website Studio', <Globe2/>],
    ['homepage', 'Homepage Builder', <WandSparkles/>],
    ['navigation', 'Menu & điều hướng', <Menu/>],
    ['pages', 'Trang nội dung', <FileText/>],
    ['footer', 'Footer & cổng SFN', <Link2/>],
    ['branding', 'Branding & Theme', <Palette/>],
    ['seo', 'SEO & Metadata', <Search/>],
  ]},
  { title: 'Học tập & Game', items: [
    ['languages', 'Language Core', <Languages/>],
    ['modes', 'Game Mode Manager', <Gamepad2/>],
    ['game-lab', 'Game Lab', <Code2/>],
    ['content', 'Content Control', <Database/>],
    ['matrix', 'Content Matrix', <Boxes/>],
    ['collections', 'Collections', <SlidersHorizontal/>],
    ['challenges', 'Challenges & Daily', <Sparkles/>],
  ]},
  { title: 'Vận hành', items: [
    ['accounts', 'Creator Accounts', <Users/>],
    ['passes', 'Access Passes', <KeyRound/>],
    ['sessions', 'Live Sessions', <Activity/>],
    ['results', 'Results & Analytics', <BarChart3/>],
    ['media', 'Media / R2', <Image/>],
    ['moderation', 'Moderation', <ShieldCheck/>],
  ]},
  { title: 'Hệ thống', items: [
    ['announcements', 'Announcements', <Megaphone/>],
    ['features', 'Feature Flags', <Flag/>],
    ['audit', 'Audit Log', <ClipboardList/>],
    ['backup', 'Backup & Export', <Download/>],
    ['system', 'System Control', <Settings/>],
  ]},
];

const langItems = builtInLanguages.map((l, i) => ({
  code: l.code, name: l.name, nativeName: l.nativeName, icon: l.icon, status: l.status,
  direction: l.direction, tts: l.tts, scripts: l.scripts, specialties: l.specialties, sortOrder: i + 1
}));

const defaults: Record<string, any> = {
  site: {
    brandName: 'Sky First Games', shortName: 'SFG', tagline: 'PLAY • LEARN • LEVEL UP',
    contactEmail: 'hotro.sfn@gmail.com', mainSiteUrl: 'https://skyfirst.io.vn',
    mainSiteLabel: 'Website chính — Sky First Network', domain: 'game.skyfirst.io.vn',
    productDescription: 'Nền tảng trò chơi học tập đa ngôn ngữ thuộc hệ sinh thái Sky First Network.'
  },
  navigation: {
    items: [
      { label: 'Khám phá', url: '/explore', visible: true },
      { label: 'Nhập mã', url: '/join', visible: true },
      { label: 'Chơi nhanh', url: '/quick-play', visible: true },
    ], creatorLabel: 'Creator Studio', showMainSite: true, sticky: true
  },
  homepage: {
    heroTitle: 'Play. Learn. Level Up.',
    heroSubtitle: 'Nền tảng trò chơi học tập đa ngôn ngữ của Sky First — từ lớp học tới đời sống và nơi làm việc.',
    announcement: '15 ngôn ngữ • 40+ Game Modes • bài tập thực tế',
    sections: ['hero','daily-challenge','featured','language-worlds','real-life','classroom','creator'],
    featuredLimit: 8, showQuickJoin: true, showDailyChallenge: true
  },
  pages: {
    about: { title: 'Giới thiệu', intro: 'Sky First Games là nền tảng trò chơi học tập đa ngôn ngữ thuộc hệ sinh thái Sky First Network.', body: 'Game-first, scenario-first, không phải Academic Hub phiên bản game.', visible: true },
    privacy: { title: 'Quyền riêng tư', intro: 'Người chơi/TNV có thể tham gia bằng mã hoặc Access Pass mà không cần tài khoản.', body: 'Hệ thống ưu tiên tối thiểu dữ liệu và không yêu cầu email/số điện thoại của người chơi.', visible: true }
  },
  footer: {
    about: 'Sky First Games là nền tảng trò chơi học tập đa ngôn ngữ thuộc hệ sinh thái Sky First Network.',
    contactEmail: 'hotro.sfn@gmail.com',
    portals: [
      { name: 'Cổng Thành viên', domain: 'member.skyfirst.io.vn' },
      { name: 'Cổng Tình nguyện viên', domain: 'tnv.skyfirst.io.vn' },
      { name: 'Cổng Thông tin', domain: 'ctt.skyfirst.io.vn' },
      { name: 'Cổng Học thuật', domain: 'academic.skyfirst.io.vn' },
      { name: 'Website chính', domain: 'skyfirst.io.vn' }
    ],
    copyright: '© 2026 Sky First Games — Bản quyền thuộc Mạng lưới Giáo dục & Phát triển Cộng đồng Sky First.',
    ecosystemLine: 'Một sản phẩm thuộc hệ sinh thái Sky First Network.'
  },
  branding: {
    logoUrl: '/brand/sky-first-logo.png', primary: '#0ea5e9', navy: '#07182f', accent: '#22d3ee',
    radius: '24px', motion: true, reduceMotionSupport: true, glass: true, gameGlow: true
  },
  seo: {
    title: 'Sky First Games', description: 'Nền tảng trò chơi học tập đa ngôn ngữ thuộc hệ sinh thái Sky First Network.',
    indexable: true, ogImage: '', robots: 'index,follow', canonical: 'https://game.skyfirst.io.vn',
    siteName: 'Sky First Games', locale: 'vi_VN'
  },
  languages: { items: langItems, uiLanguages: ['vi','en'], defaultUiLanguage: 'vi', autoDetectUi: true },
  collections: { items: [
    { id: 'quick', title: 'Quick Games <5 min', enabled: true },
    { id: 'classroom', title: 'Classroom Party', enabled: true },
    { id: 'listening', title: 'Listening Lab', enabled: true },
    { id: 'workplace', title: 'Workplace & Real Life', enabled: true },
    { id: 'chinese', title: 'Chinese Special', enabled: true }
  ]},
  challenges: {
    dailyEnabled: true, rotation: 'daily', autoPickOfficial: true, stages: 3,
    featuredChallengeTitle: 'Daily Language Quest', quickPlayMinutes: [3,5,10]
  },
  moderation: {
    safeNickname: true, publicContentReview: true, allowFreeChat: false, allowDm: false,
    reporting: true, blockedWords: [], autoHideThreshold: 5, creatorContentNeedsReview: true
  },
  announcements: {
    enabled: false, text: '', severity: 'info', linkLabel: '', linkUrl: '', startsAt: '', endsAt: ''
  },
  features: {
    dailyChallenge: true, quickPlay: true, accessPass: true, assignments: true, oneScreen: true,
    ttsFallback: true, aiDraft: false, creatorImport: true, mediaLibrary: true, liveRealtime: true,
    publicExplore: true, seasonalModes: true
  },
  system: {
    maintenance: false, maintenanceMessage: 'Sky First Games đang được nâng cấp. Vui lòng quay lại sau.',
    selfCreatorRegistration: true, guestPlay: true,
    limits: { maxPlayersPerRoom: 200, maxUploadMb: 30, maxQuestionsPerSet: 500, maxAccessPassDays: 365 },
    security: { sessionDays: 14, rateLimitHint: 120, enforceSafeNickname: true },
    diagnostics: { healthEndpoint: '/api/health', debugEnvEndpoint: '/api/debug/env' }
  }
};

export function AdminPage({ account }: { account: Account }) {
  const [tab, setTab] = React.useState<Tab>('overview');
  const [settings, setSettings] = React.useState<Record<string, any>>(defaults);
  const [modes, setModes] = React.useState<any[]>([]);
  const [accounts, setAccounts] = React.useState<any[]>([]);
  const [overview, setOverview] = React.useState<any>(null);
  const [notice, setNotice] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [sidebarSearch, setSidebarSearch] = React.useState('');

  const refresh = React.useCallback(async () => {
    setLoading(true);
    const [s, m, a, o] = await Promise.allSettled([
      api.adminSettings(), api.adminModes(), api.adminAccounts(), api.adminOverview()
    ]);
    if (s.status === 'fulfilled') setSettings({ ...defaults, ...s.value.settings });
    if (m.status === 'fulfilled') setModes(m.value.modes);
    if (a.status === 'fulfilled') setAccounts(a.value.accounts);
    if (o.status === 'fulfilled') setOverview(o.value);
    setLoading(false);
  }, []);

  React.useEffect(() => { refresh(); }, [refresh]);

  const save = async (key: string, value: any) => {
    try {
      await api.saveAdminSetting(key, value);
      setSettings(s => ({ ...s, [key]: value }));
      setNotice(`Đã lưu ${key}.`);
    } catch (e: any) { setNotice(e.message); }
  };

  const currentLabel = menuGroups.flatMap(g => g.items).find(x => x[0] === tab)?.[1] || tab;
  const filteredGroups = menuGroups.map(g => ({
    ...g,
    items: g.items.filter(([, label]) => label.toLowerCase().includes(sidebarSearch.toLowerCase()))
  })).filter(g => g.items.length);

  return <main className="workspace admin-workspace admin-v3">
    <aside className="side-nav admin-side admin-side-v3">
      <div className="workspace-title admin-brand-block">
        <img src="/brand/sky-first-logo.png" alt="Sky First"/>
        <div><strong>Admin Console</strong><small>Ultra Control • {account.displayName}</small></div>
      </div>
      <div className="admin-search"><Search/><input value={sidebarSearch} onChange={e=>setSidebarSearch(e.target.value)} placeholder="Tìm chức năng admin…"/></div>
      <div className="admin-nav-scroll">
        {filteredGroups.map(group => <div className="admin-nav-group" key={group.title}>
          <span>{group.title}</span>
          {group.items.map(([id,label,icon]) => <button key={id} className={tab===id?'active':''} onClick={()=>setTab(id)}>{icon}<b>{label}</b><ChevronRight/></button>)}
        </div>)}
      </div>
      <div className="admin-side-footer"><ShieldCheck/><span>Admin protected</span></div>
    </aside>

    <section className="workspace-main admin-main-v3">
      <div className="admin-topline">
        <div><span className="eyebrow">{currentLabel}</span><small>{loading?'Đang đồng bộ…':'Đồng bộ D1 / R2 / Settings'}</small></div>
        <button className="ghost-button" onClick={refresh}><RefreshCw/>Làm mới</button>
      </div>
      {notice && <div className="toast-inline" onClick={()=>setNotice('')}>{notice}</div>}

      {tab==='overview' && <Overview settings={settings} modes={modes} accounts={accounts} overview={overview}/>} 
      {tab==='site' && <SiteStudio value={settings.site||defaults.site} onSave={v=>save('site',v)}/>} 
      {tab==='homepage' && <HomepageStudio value={settings.homepage||defaults.homepage} onSave={v=>save('homepage',v)}/>} 
      {tab==='navigation' && <NavigationStudio value={settings.navigation||defaults.navigation} onSave={v=>save('navigation',v)}/>} 
      {tab==='pages' && <JsonEditor title="Trang nội dung" subtitle="Quản lý nội dung trang tĩnh và trạng thái hiển thị." value={settings.pages||defaults.pages} onSave={v=>save('pages',v)}/>} 
      {tab==='footer' && <FooterStudio value={settings.footer||defaults.footer} onSave={v=>save('footer',v)}/>} 
      {tab==='branding' && <BrandingStudio value={settings.branding||defaults.branding} onSave={v=>save('branding',v)}/>} 
      {tab==='seo' && <SeoStudio value={settings.seo||defaults.seo} onSave={v=>save('seo',v)}/>} 
      {tab==='languages' && <LanguageManager value={settings.languages||defaults.languages} onSave={v=>save('languages',v)}/>} 
      {tab==='modes' && <ModesManager modes={modes.length?modes:builtInModes} live={!!modes.length} onRefresh={refresh} onNotice={setNotice}/>} 
      {tab==='game-lab' && <GameLab modes={modes.length?modes:builtInModes}/>} 
      {tab==='content' && <ContentPanel onNotice={setNotice}/>} 
      {tab==='matrix' && <MatrixPanel/>} 
      {tab==='collections' && <JsonEditor title="Collections" subtitle="Nhóm game/nội dung hiển thị trên Explore và Homepage." value={settings.collections||defaults.collections} onSave={v=>save('collections',v)}/>} 
      {tab==='challenges' && <JsonEditor title="Challenges & Daily" subtitle="Điều khiển Daily Challenge, Quick Play và các chuỗi thử thách." value={settings.challenges||defaults.challenges} onSave={v=>save('challenges',v)}/>} 
      {tab==='accounts' && <AccountsManager accounts={accounts} onRefresh={refresh} onNotice={setNotice}/>} 
      {tab==='passes' && <AccessPassPanel onNotice={setNotice}/>} 
      {tab==='sessions' && <SessionsPanel onNotice={setNotice}/>} 
      {tab==='results' && <ResultsPanel/>} 
      {tab==='media' && <MediaPanel onNotice={setNotice}/>} 
      {tab==='moderation' && <ModerationStudio value={settings.moderation||defaults.moderation} onSave={v=>save('moderation',v)}/>} 
      {tab==='announcements' && <AnnouncementStudio value={settings.announcements||defaults.announcements} onSave={v=>save('announcements',v)}/>} 
      {tab==='features' && <FeatureStudio value={settings.features||defaults.features} onSave={v=>save('features',v)}/>} 
      {tab==='audit' && <AuditPanel/>} 
      {tab==='backup' && <BackupPanel onNotice={setNotice}/>} 
      {tab==='system' && <SystemStudio value={settings.system||defaults.system} onSave={v=>save('system',v)}/>} 
    </section>
  </main>;
}

function SectionHead({eyebrow,title,desc,action}:{eyebrow:string;title:string;desc:string;action?:React.ReactNode}){
  return <div className="workspace-head"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{desc}</p></div>{action}</div>;
}

function Overview({settings,modes,accounts,overview}:{settings:any;modes:any[];accounts:any[];overview:any}){
  const stats = overview?.stats || {};
  const healthCards = [
    ['D1 Database', overview?.health?.database !== false, `${stats.questionSets??'—'} sets • ${stats.questions??'—'} questions`],
    ['R2 Media', overview?.health?.r2 !== false, `${stats.mediaObjects??'—'} objects`],
    ['Game Engine', true, `${modes.length||builtInModes.length} modes registered`],
    ['Creator Access', true, `${accounts.length} accounts`],
  ];
  return <>
    <SectionHead eyebrow="SYSTEM CONTROL CENTER" title="Sky First Games — Command Center" desc="Một bảng điều khiển cho toàn website, game engine, nội dung, ngôn ngữ, Creator, live room, media và hệ thống." action={<div className="admin-badge"><ShieldCheck/>Full Control</div>}/>
    <div className="admin-hero-grid">
      <div className="admin-command-card primary"><div><span>PLATFORM STATUS</span><h2>{settings.system?.maintenance?'Maintenance':'Operational'}</h2><p>{settings.system?.maintenance?'Public site đang ở chế độ bảo trì.':'Website đang mở cho người chơi và Creator.'}</p></div><CircleGauge/></div>
      <div className="admin-command-card"><div><span>LIVE SESSIONS</span><h2>{stats.liveSessions??0}</h2><p>{stats.totalSessions??0} phiên đã được tạo</p></div><Activity/></div>
      <div className="admin-command-card"><div><span>RESULTS</span><h2>{stats.results??0}</h2><p>{stats.players??0} lượt người chơi</p></div><BarChart3/></div>
    </div>
    <div className="stat-grid admin-stat-grid">
      <div><span>Game Modes</span><strong>{modes.length||builtInModes.length}</strong><small>Manifest registry</small></div>
      <div><span>Question Sets</span><strong>{stats.questionSets??seedQuestionSets.length}</strong><small>Official + Creator</small></div>
      <div><span>Questions</span><strong>{stats.questions??seedQuestionSets.reduce((a,s)=>a+s.questions.length,0)}</strong><small>Question Engine</small></div>
      <div><span>Languages</span><strong>{settings.languages?.items?.length||15}</strong><small>Language Core</small></div>
      <div><span>Creators</span><strong>{accounts.filter((a:any)=>!a.is_admin).length}</strong><small>Active accounts</small></div>
      <div><span>Admins</span><strong>{accounts.filter((a:any)=>a.is_admin).length}</strong><small>Privileged</small></div>
    </div>
    <div className="admin-health-grid">
      {healthCards.map(([name,ok,detail]:any)=><div className="admin-health-card" key={name}>{ok?<CheckCircle2/>:<XCircle/>}<div><b>{name}</b><span>{detail}</span></div><em className={ok?'ok':'bad'}>{ok?'Ready':'Check'}</em></div>)}
    </div>
    <div className="admin-map">
      <div><MonitorCog/><h3>Website CMS</h3><p>Homepage, navigation, pages, footer, theme, SEO, announcements và feature flags.</p></div>
      <div><Gamepad2/><h3>Game Platform</h3><p>Mode registry, game lab, compatibility, status, featured, version và mechanics.</p></div>
      <div><BookOpenCheck/><h3>Content Engine</h3><p>Official/Creator content, quality workflow, scenario, listening và version.</p></div>
      <div><Globe2/><h3>Language Core</h3><p>15 ngôn ngữ, RTL, TTS, script, adapter và special exercises.</p></div>
      <div><ShieldCheck/><h3>Access & Security</h3><p>Creator, Admin permission, Access Pass, moderation và privacy.</p></div>
      <div><Cloud/><h3>Operations</h3><p>D1, R2, sessions, results, audit, export và maintenance.</p></div>
    </div>
  </>;
}

function SiteStudio({value,onSave}:{value:any;onSave:(v:any)=>void}){
  const [draft,setDraft]=React.useState(value); React.useEffect(()=>setDraft(value),[value]);
  const set=(k:string,v:any)=>setDraft((d:any)=>({...d,[k]:v}));
  return <><SectionHead eyebrow="WEBSITE STUDIO" title="Cấu hình website" desc="Chỉnh thông tin sản phẩm và liên kết hệ sinh thái mà không sửa source." action={<button className="primary-button" onClick={()=>onSave(draft)}><Save/>Lưu</button>}/>
    <div className="admin-form-grid"><Field label="Tên sản phẩm"><input value={draft.brandName||''} onChange={e=>set('brandName',e.target.value)}/></Field><Field label="Tên ngắn"><input value={draft.shortName||''} onChange={e=>set('shortName',e.target.value)}/></Field><Field label="Slogan"><input value={draft.tagline||''} onChange={e=>set('tagline',e.target.value)}/></Field><Field label="Domain"><input value={draft.domain||''} onChange={e=>set('domain',e.target.value)}/></Field><Field label="Email hỗ trợ"><input value={draft.contactEmail||''} onChange={e=>set('contactEmail',e.target.value)}/></Field><Field label="Website chính"><input value={draft.mainSiteUrl||''} onChange={e=>set('mainSiteUrl',e.target.value)}/></Field><Field label="Nhãn website chính"><input value={draft.mainSiteLabel||''} onChange={e=>set('mainSiteLabel',e.target.value)}/></Field><Field label="Mô tả sản phẩm" wide><textarea value={draft.productDescription||''} onChange={e=>set('productDescription',e.target.value)}/></Field></div>
    <PowerJson value={draft} onChange={setDraft}/>
  </>;
}

function HomepageStudio({value,onSave}:{value:any;onSave:(v:any)=>void}){
  const [draft,setDraft]=React.useState(value); React.useEffect(()=>setDraft(value),[value]);
  const update=(k:string,v:any)=>setDraft((d:any)=>({...d,[k]:v}));
  const sections=draft.sections||[];
  return <><SectionHead eyebrow="HOMEPAGE BUILDER" title="Trang chủ" desc="Điều khiển hero, announcement, section order và các module nổi bật." action={<button className="primary-button" onClick={()=>onSave(draft)}><Save/>Xuất bản cấu hình</button>}/>
    <div className="admin-form-grid"><Field label="Hero title" wide><input value={draft.heroTitle||''} onChange={e=>update('heroTitle',e.target.value)}/></Field><Field label="Hero subtitle" wide><textarea value={draft.heroSubtitle||''} onChange={e=>update('heroSubtitle',e.target.value)}/></Field><Field label="Announcement" wide><input value={draft.announcement||''} onChange={e=>update('announcement',e.target.value)}/></Field><Field label="Số game nổi bật"><input type="number" value={draft.featuredLimit||8} onChange={e=>update('featuredLimit',Number(e.target.value))}/></Field><Toggle label="Quick Join" checked={!!draft.showQuickJoin} onChange={v=>update('showQuickJoin',v)}/><Toggle label="Daily Challenge" checked={!!draft.showDailyChallenge} onChange={v=>update('showDailyChallenge',v)}/></div>
    <div className="panel admin-section-order"><h3>Thứ tự section</h3><p>Kéo thả sẽ có ở bản UI sau; hiện có thể di chuyển bằng nút.</p>{sections.map((s:string,i:number)=><div key={`${s}-${i}`}><b>{i+1}. {s}</b><span><button disabled={!i} onClick={()=>{const n=[...sections];[n[i-1],n[i]]=[n[i],n[i-1]];update('sections',n)}}>↑</button><button disabled={i===sections.length-1} onClick={()=>{const n=[...sections];[n[i+1],n[i]]=[n[i],n[i+1]];update('sections',n)}}>↓</button></span></div>)}</div>
    <PowerJson value={draft} onChange={setDraft}/>
  </>;
}

function NavigationStudio({value,onSave}:{value:any;onSave:(v:any)=>void}){
  const [draft,setDraft]=React.useState(value); React.useEffect(()=>setDraft(value),[value]); const items=draft.items||[];
  return <><SectionHead eyebrow="NAVIGATION" title="Menu & điều hướng" desc="Thêm, sửa, ẩn/hiện và sắp xếp liên kết điều hướng." action={<button className="primary-button" onClick={()=>onSave(draft)}><Save/>Lưu menu</button>}/>
    <div className="panel admin-list-editor">{items.map((it:any,i:number)=><div className="admin-list-row" key={i}><input value={it.label||''} onChange={e=>{const n=[...items];n[i]={...it,label:e.target.value};setDraft({...draft,items:n})}}/><input value={it.url||''} onChange={e=>{const n=[...items];n[i]={...it,url:e.target.value};setDraft({...draft,items:n})}}/><label><input type="checkbox" checked={it.visible!==false} onChange={e=>{const n=[...items];n[i]={...it,visible:e.target.checked};setDraft({...draft,items:n})}}/> Hiện</label><button className="danger-button" onClick={()=>setDraft({...draft,items:items.filter((_:any,j:number)=>j!==i)})}><Trash2/></button></div>)}<button className="secondary-button" onClick={()=>setDraft({...draft,items:[...items,{label:'Mục mới',url:'/',visible:true}]})}>+ Thêm mục</button></div>
    <div className="admin-form-grid"><Field label="Nhãn Creator"><input value={draft.creatorLabel||''} onChange={e=>setDraft({...draft,creatorLabel:e.target.value})}/></Field><Toggle label="Hiện website chính" checked={!!draft.showMainSite} onChange={v=>setDraft({...draft,showMainSite:v})}/><Toggle label="Sticky navigation" checked={!!draft.sticky} onChange={v=>setDraft({...draft,sticky:v})}/></div>
  </>;
}

function FooterStudio({value,onSave}:{value:any;onSave:(v:any)=>void}){
  const [draft,setDraft]=React.useState(value); React.useEffect(()=>setDraft(value),[value]); const portals=draft.portals||[];
  return <><SectionHead eyebrow="FOOTER CONTROL" title="Footer & hệ sinh thái Sky First" desc="Quản lý mô tả, email, các cổng Sky First và bản quyền." action={<button className="primary-button" onClick={()=>onSave(draft)}><Save/>Lưu footer</button>}/>
    <div className="admin-form-grid"><Field label="Mô tả" wide><textarea value={draft.about||''} onChange={e=>setDraft({...draft,about:e.target.value})}/></Field><Field label="Email hỗ trợ"><input value={draft.contactEmail||''} onChange={e=>setDraft({...draft,contactEmail:e.target.value})}/></Field><Field label="Bản quyền" wide><input value={draft.copyright||''} onChange={e=>setDraft({...draft,copyright:e.target.value})}/></Field><Field label="Dòng hệ sinh thái" wide><input value={draft.ecosystemLine||''} onChange={e=>setDraft({...draft,ecosystemLine:e.target.value})}/></Field></div>
    <div className="panel admin-list-editor"><h3>Các cổng Sky First</h3>{portals.map((p:any,i:number)=><div className="admin-list-row" key={i}><input value={p.name||''} onChange={e=>{const n=[...portals];n[i]={...p,name:e.target.value};setDraft({...draft,portals:n})}}/><input value={p.domain||''} onChange={e=>{const n=[...portals];n[i]={...p,domain:e.target.value};setDraft({...draft,portals:n})}}/><button className="danger-button" onClick={()=>setDraft({...draft,portals:portals.filter((_:any,j:number)=>j!==i)})}><Trash2/></button></div>)}<button className="secondary-button" onClick={()=>setDraft({...draft,portals:[...portals,{name:'Cổng mới',domain:''}]})}>+ Thêm cổng</button></div>
  </>;
}

function BrandingStudio({value,onSave}:{value:any;onSave:(v:any)=>void}){
  const [draft,setDraft]=React.useState(value); React.useEffect(()=>setDraft(value),[value]); const set=(k:string,v:any)=>setDraft((d:any)=>({...d,[k]:v}));
  return <><SectionHead eyebrow="BRANDING & THEME" title="Nhận diện giao diện" desc="Giữ logo Sky First chữ S, đồng thời điều khiển palette, radius và motion." action={<button className="primary-button" onClick={()=>onSave(draft)}><Save/>Lưu theme</button>}/>
    <div className="branding-preview" style={{'--preview-primary':draft.primary,'--preview-navy':draft.navy,'--preview-radius':draft.radius} as React.CSSProperties}><img src={draft.logoUrl||'/brand/sky-first-logo.png'}/><div><b>Sky First Games</b><span>PLAY • LEARN • LEVEL UP</span></div></div>
    <div className="admin-form-grid"><Field label="Logo URL" wide><input value={draft.logoUrl||''} onChange={e=>set('logoUrl',e.target.value)}/></Field><Field label="Primary"><input type="color" value={draft.primary||'#0ea5e9'} onChange={e=>set('primary',e.target.value)}/></Field><Field label="Navy"><input type="color" value={draft.navy||'#07182f'} onChange={e=>set('navy',e.target.value)}/></Field><Field label="Accent"><input type="color" value={draft.accent||'#22d3ee'} onChange={e=>set('accent',e.target.value)}/></Field><Field label="Border radius"><input value={draft.radius||'24px'} onChange={e=>set('radius',e.target.value)}/></Field><Toggle label="Motion" checked={!!draft.motion} onChange={v=>set('motion',v)}/><Toggle label="Glass UI" checked={!!draft.glass} onChange={v=>set('glass',v)}/><Toggle label="Game glow" checked={!!draft.gameGlow} onChange={v=>set('gameGlow',v)}/></div>
  </>;
}

function SeoStudio({value,onSave}:{value:any;onSave:(v:any)=>void}){
  const [draft,setDraft]=React.useState(value); React.useEffect(()=>setDraft(value),[value]); const set=(k:string,v:any)=>setDraft((d:any)=>({...d,[k]:v}));
  return <><SectionHead eyebrow="SEO CONTROL" title="SEO & Metadata" desc="Điều khiển title, description, canonical, robots và social preview." action={<button className="primary-button" onClick={()=>onSave(draft)}><Save/>Lưu SEO</button>}/>
    <div className="admin-form-grid"><Field label="SEO title" wide><input value={draft.title||''} onChange={e=>set('title',e.target.value)}/></Field><Field label="Description" wide><textarea value={draft.description||''} onChange={e=>set('description',e.target.value)}/></Field><Field label="Canonical"><input value={draft.canonical||''} onChange={e=>set('canonical',e.target.value)}/></Field><Field label="Robots"><input value={draft.robots||''} onChange={e=>set('robots',e.target.value)}/></Field><Field label="Open Graph image"><input value={draft.ogImage||''} onChange={e=>set('ogImage',e.target.value)}/></Field><Field label="Locale"><input value={draft.locale||''} onChange={e=>set('locale',e.target.value)}/></Field><Toggle label="Cho phép index" checked={!!draft.indexable} onChange={v=>set('indexable',v)}/></div>
    <div className="seo-preview"><small>Google preview</small><h3>{draft.title}</h3><span>{draft.canonical}</span><p>{draft.description}</p></div>
  </>;
}

function JsonEditor({title,subtitle,value,onSave}:{title:string;subtitle:string;value:any;onSave:(v:any)=>void}){
  const [text,setText]=React.useState(JSON.stringify(value,null,2)),[err,setErr]=React.useState(''); React.useEffect(()=>setText(JSON.stringify(value,null,2)),[value]);
  return <><SectionHead eyebrow="POWER CONFIG" title={title} desc={subtitle} action={<button className="primary-button" onClick={()=>{try{onSave(JSON.parse(text));setErr('')}catch(e:any){setErr(e.message)}}}><Save/>Lưu thay đổi</button>}/><div className="panel code-editor"><div className="code-editor-head"><Braces/>Cấu hình JSON <span>Advanced editor</span></div><textarea spellCheck={false} value={text} onChange={e=>setText(e.target.value)}/>{err&&<div className="error-box">JSON không hợp lệ: {err}</div>}</div></>;
}

function PowerJson({value,onChange}:{value:any;onChange:(v:any)=>void}){
  const [open,setOpen]=React.useState(false),[text,setText]=React.useState(JSON.stringify(value,null,2)),[err,setErr]=React.useState(''); React.useEffect(()=>setText(JSON.stringify(value,null,2)),[value]);
  if(!open)return <button className="ghost-button admin-json-toggle" onClick={()=>setOpen(true)}><Braces/>Mở Advanced JSON</button>;
  return <div className="panel code-editor compact"><div className="code-editor-head"><Braces/>Advanced JSON <button onClick={()=>setOpen(false)}>Đóng</button></div><textarea spellCheck={false} value={text} onChange={e=>setText(e.target.value)}/><div className="button-row"><button className="secondary-button" onClick={()=>{try{const parsed=JSON.parse(text);onChange(parsed);setErr('')}catch(e:any){setErr(e.message)}}}>Áp dụng JSON vào form</button></div>{err&&<div className="error-box">{err}</div>}</div>;
}

function LanguageManager({value,onSave}:{value:any;onSave:(v:any)=>void}){
  const [draft,setDraft]=React.useState(value); React.useEffect(()=>setDraft(value),[value]); const items=draft.items||[];
  return <><SectionHead eyebrow="LANGUAGE CORE" title={`${items.length} ngôn ngữ & Language Adapter`} desc="Bật/tắt, TTS, hướng chữ, script và tính năng riêng cho từng ngôn ngữ." action={<button className="primary-button" onClick={()=>onSave(draft)}><Save/>Lưu Language Core</button>}/><div className="table-cards language-admin">{items.map((l:any,i:number)=><div className="content-card language-card-admin" key={l.code}><div><span className="eyebrow">{l.code.toUpperCase()} • {l.direction}</span><h3>{l.icon} {l.nativeName}</h3><p>{l.name} • TTS {l.tts||'—'}</p><small>{(l.specialties||[]).join(' • ')}</small></div><div className="card-actions"><select value={l.status} onChange={e=>{const next=[...items];next[i]={...l,status:e.target.value};setDraft({...draft,items:next})}}><option value="active">active</option><option value="beta">beta</option><option value="coming_soon">coming_soon</option><option value="disabled">disabled</option></select><select value={l.direction||'ltr'} onChange={e=>{const next=[...items];next[i]={...l,direction:e.target.value};setDraft({...draft,items:next})}}><option value="ltr">LTR</option><option value="rtl">RTL</option></select></div></div>)}</div><PowerJson value={draft} onChange={setDraft}/></>;
}

function ModesManager({modes,live,onRefresh,onNotice}:{modes:any[];live:boolean;onRefresh:()=>void;onNotice:(s:string)=>void}){
  const [query,setQuery]=React.useState(''); const filtered=modes.filter((m:any)=>`${m.name} ${m.family} ${m.mechanic}`.toLowerCase().includes(query.toLowerCase()));
  return <><SectionHead eyebrow="GAME MANIFEST REGISTRY" title="Game Mode Manager" desc={live?'Đang điều khiển manifest từ D1.':'Preview built-in manifest; migrate D1 để điều khiển trạng thái thật.'}/><div className="admin-toolbar"><div className="admin-search wide"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Tìm mode, family, mechanic…"/></div><span>{filtered.length}/{modes.length} modes</span></div><div className="table-cards">{filtered.map((m:any)=><div className="content-card game-mode-admin" key={m.id}><div><span className="eyebrow">{m.family} • v{m.version||'2.0'} • {m.mechanic}</span><h3>{m.icon} {m.name}</h3><p>{m.description}</p><small>{m.status} • {m.min_players??m.minPlayers}–{m.max_players??m.maxPlayers} players</small></div><div className="card-actions">{live&&<><button onClick={async()=>{await api.updateMode(m.id,{featured:!m.featured});onNotice('Đã cập nhật Featured.');onRefresh()}}>{m.featured?'★ Featured':'☆ Feature'}</button><button onClick={async()=>{await api.updateMode(m.id,{status:m.status==='active'?'disabled':'active'});onNotice('Đã cập nhật Game Mode.');onRefresh()}}><ToggleLeft/>{m.status==='active'?'Tắt':'Bật'}</button></>}</div></div>)}</div></>;
}

function GameLab({modes}:{modes:any[]}){
  const families=Array.from(new Set(modes.map((m:any)=>m.family))).sort();
  return <><SectionHead eyebrow="GAME LAB" title="Phòng thí nghiệm Game Engine" desc="Quan sát coverage của engine theo family, mechanic và trạng thái trước khi public."/><div className="admin-lab-grid">{families.map(f=>{const ms=modes.filter((m:any)=>m.family===f);return <div className="panel lab-card" key={f}><span className="eyebrow">FAMILY</span><h3>{f}</h3><strong>{ms.length}</strong><p>{Array.from(new Set(ms.map((m:any)=>m.mechanic))).slice(0,5).join(' • ')}</p><div className="mini-progress"><i style={{width:`${Math.min(100,ms.filter((m:any)=>m.status==='active').length/Math.max(1,ms.length)*100)}%`}}/></div><small>{ms.filter((m:any)=>m.status==='active').length} active</small></div>})}</div><div className="panel"><h3>Manifest principles</h3><p>Game Mode phải khai báo compatibility, session mode, player range, media support, language requirements, status, version và mechanic. Creator chỉ phối nội dung với mode, không lập trình engine.</p></div></>;
}

function ContentPanel({onNotice}:{onNotice:(s:string)=>void}){
  const [items,setItems]=React.useState<any[]>([]),[query,setQuery]=React.useState(''),[status,setStatus]=React.useState('all');
  const load=()=>api.adminQuestionSets().then(r=>setItems(r.sets)).catch(()=>setItems([])); React.useEffect(load,[]);
  const filtered=items.filter(s=>(status==='all'||s.status===status)&&`${s.title} ${s.language} ${s.topic}`.toLowerCase().includes(query.toLowerCase()));
  return <><SectionHead eyebrow="CONTENT CONTROL" title="Nội dung toàn hệ thống" desc="Quản lý Official/Creator content, trạng thái duyệt, visibility và chất lượng."/><div className="admin-toolbar"><div className="admin-search wide"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Tìm title, language, topic…"/></div><select value={status} onChange={e=>setStatus(e.target.value)}><option value="all">Tất cả trạng thái</option><option value="draft">draft</option><option value="review">review</option><option value="verified">verified</option><option value="published">published</option><option value="archived">archived</option></select><span>{filtered.length} sets</span></div><div className="table-cards">{filtered.map(s=><div className="content-card" key={s.id}><div><span className="eyebrow">{s.language?.toUpperCase()} • {s.status} • {s.visibility}</span><h3>{s.is_official?'✅ ':''}{s.title}</h3><p>{s.topic||'—'} • {s.question_count} câu • v{s.version}</p><small>{s.creator_name||'System'} • {s.updated_at}</small></div><div className="card-actions"><select value={s.status} onChange={async e=>{await api.updateAdminQuestionSet(s.id,{status:e.target.value});onNotice('Đã đổi trạng thái nội dung.');load()}}><option>draft</option><option>review</option><option>verified</option><option>published</option><option>archived</option></select><button onClick={async()=>{await api.updateAdminQuestionSet(s.id,{isOfficial:!s.is_official});onNotice('Đã cập nhật Official flag.');load()}}>{s.is_official?'Gỡ Official':'Sky First Official'}</button></div></div>)}{!filtered.length&&<div className="empty-state">Không có nội dung phù hợp.</div>}</div></>;
}

function MatrixPanel(){
  const rows=builtInLanguages.map(l=>{const ss=seedQuestionSets.filter(s=>s.language===l.code);return {l,packs:ss.length,questions:ss.reduce((a,s)=>a+s.questions.length,0),contexts:new Set(ss.map(s=>s.context)).size}});
  return <><SectionHead eyebrow="CONTENT MATRIX" title="Độ phủ nội dung" desc="Language × context × level × skill để phát hiện khu vực còn mỏng."/><div className="matrix-table"><div className="matrix-row head"><b>Ngôn ngữ</b><b>Packs</b><b>Câu hỏi</b><b>Contexts</b><b>Coverage</b></div>{rows.map(r=><div className="matrix-row" key={r.l.code}><span>{r.l.icon} {r.l.nativeName}</span><b>{r.packs}</b><b>{r.questions}</b><b>{r.contexts}</b><span className="coverage"><i style={{width:`${Math.min(100,r.questions/24*100)}%`}}/></span></div>)}</div></>;
}

function AccountsManager({accounts,onRefresh,onNotice}:{accounts:any[];onRefresh:()=>void;onNotice:(s:string)=>void}){
  const [query,setQuery]=React.useState(''); const filtered=accounts.filter(a=>`${a.display_name} ${a.email}`.toLowerCase().includes(query.toLowerCase()));
  return <><SectionHead eyebrow="ACCESS CONTROL" title="Creator Accounts" desc="Một hệ tài khoản; quyền Admin được cấp riêng. Có thể khóa/mở tài khoản ngay từ đây."/><div className="admin-toolbar"><div className="admin-search wide"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Tìm tên hoặc email…"/></div><span>{filtered.length} accounts</span></div><div className="table-cards">{filtered.map(a=><div className="content-card" key={a.id}><div><span className="eyebrow">{a.is_admin?'ADMIN':'CREATOR'} • {a.status}</span><h3>{a.display_name}</h3><p>{a.email}</p><small>Tạo {a.created_at}</small></div><div className="card-actions"><button onClick={async()=>{await api.updateAccount(a.id,{isAdmin:!a.is_admin});onNotice('Đã cập nhật quyền.');onRefresh()}}>{a.is_admin?'Gỡ Admin':'Cấp Admin'}</button><button className={a.status==='active'?'danger-button':''} onClick={async()=>{await api.updateAccount(a.id,{status:a.status==='active'?'suspended':'active'});onNotice('Đã cập nhật trạng thái.');onRefresh()}}>{a.status==='active'?'Tạm khóa':'Mở khóa'}</button></div></div>)}</div></>;
}

function AccessPassPanel({onNotice}:{onNotice:(s:string)=>void}){
  const [items,setItems]=React.useState<any[]>([]); const load=()=>api.adminPasses().then(r=>setItems(r.passes)).catch(()=>setItems([])); React.useEffect(load,[]);
  return <><SectionHead eyebrow="HOST ACCESS" title="Access Passes" desc="Theo dõi quyền host tạm thời, ngày hết hạn và revoke toàn hệ thống."/><div className="table-cards">{items.map(p=><div className="content-card" key={p.id}><div><span className="eyebrow">{p.revoked_at?'REVOKED':p.expires_at&&p.expires_at<new Date().toISOString()?'EXPIRED':'ACTIVE'}</span><h3>{p.label}</h3><p>{p.game_title} • {p.creator_name||'Creator'}</p><small>Expires: {p.expires_at||'Không giới hạn'}</small></div><div className="card-actions">{!p.revoked_at&&<button className="danger-button" onClick={async()=>{await api.adminRevokePass(p.id);onNotice('Đã thu hồi Access Pass.');load()}}>Thu hồi</button>}</div></div>)}{!items.length&&<div className="empty-state">Chưa có Access Pass.</div>}</div></>;
}

function SessionsPanel({onNotice}:{onNotice:(s:string)=>void}){
  const [items,setItems]=React.useState<any[]>([]); const load=()=>api.adminSessions().then(r=>setItems(r.sessions)).catch(()=>{}); React.useEffect(load,[]);
  return <><SectionHead eyebrow="LIVE OPERATIONS" title="Live Sessions" desc="Theo dõi room, trạng thái và ngắt phiên khi cần."/><div className="table-cards">{items.map(s=><div className="content-card" key={s.id}><div><span className="eyebrow">{s.state}</span><h3>{s.game_title||s.game_id}</h3><p>Room {s.room_code} • {s.player_count||0} players</p><small>{s.created_at}</small></div><div className="card-actions">{!['finished','terminated'].includes(s.state)&&<button className="danger-button" onClick={async()=>{await api.terminateSession(s.id);onNotice('Đã terminate session.');load()}}><XCircle/>Terminate</button>}</div></div>)}{!items.length&&<div className="empty-state">Chưa có session trong D1.</div>}</div></>;
}

function ResultsPanel(){
  const [items,setItems]=React.useState<any[]>([]),[summary,setSummary]=React.useState<any>({}); React.useEffect(()=>{api.adminResults().then(r=>{setItems(r.results);setSummary(r.summary)}).catch(()=>{})},[]);
  return <><SectionHead eyebrow="ANALYTICS" title="Results & Learning Signals" desc="Theo dõi kết quả, accuracy, response time và tín hiệu chất lượng nội dung."/><div className="stat-grid admin-stat-grid"><div><span>Results</span><strong>{summary.count||0}</strong></div><div><span>Avg accuracy</span><strong>{Math.round(summary.avgAccuracy||0)}%</strong></div><div><span>Avg score</span><strong>{Math.round(summary.avgScore||0)}</strong></div><div><span>Avg response</span><strong>{Math.round(summary.avgResponseMs||0)}ms</strong></div></div><div className="matrix-table result-table"><div className="matrix-row head"><b>Người chơi</b><b>Game</b><b>Score</b><b>Accuracy</b><b>Time</b></div>{items.slice(0,100).map(r=><div className="matrix-row" key={r.id}><span>{r.nickname}</span><span>{r.game_title||r.session_id}</span><b>{r.score}</b><b>{Math.round(r.accuracy||0)}%</b><span>{r.avg_response_ms||0}ms</span></div>)}</div></>;
}

function MediaPanel({onNotice}:{onNotice:(s:string)=>void}){
  const [file,setFile]=React.useState<File|null>(null),[url,setUrl]=React.useState(''),[objects,setObjects]=React.useState<any[]>([]); const load=()=>api.adminMediaList().then(r=>setObjects(r.objects)).catch(()=>setObjects([])); React.useEffect(load,[]);
  return <><SectionHead eyebrow="R2 MEDIA LIBRARY" title="Audio, hình ảnh & game assets" desc="R2 bucket game — quản lý media dùng bởi Creator, Question Engine và Game Engine."/><div className="panel media-upload"><UploadCloud/><input type="file" onChange={e=>setFile(e.target.files?.[0]||null)}/><button className="primary-button" disabled={!file} onClick={async()=>{if(!file)return;try{const r=await api.uploadMedia(file);setUrl(r.url);onNotice('Đã upload lên R2.');load()}catch(e:any){onNotice(e.message)}}}>Upload</button>{url&&<code>{url}</code>}</div><div className="table-cards media-grid-admin">{objects.map(o=><div className="content-card" key={o.key}><div><span className="eyebrow">R2 OBJECT</span><h3>{o.key.split('/').pop()}</h3><p>{formatBytes(o.size)} • {o.uploaded}</p><small>{o.key}</small></div><div className="card-actions"><a className="secondary-button" href={`/media/${encodeURIComponent(o.key).replace(/%2F/g,'/')}`} target="_blank" rel="noreferrer"><Eye/>Xem</a><button className="danger-button" onClick={async()=>{await api.deleteAdminMedia(o.key);onNotice('Đã xóa media.');load()}}><Trash2/></button></div></div>)}{!objects.length&&<div className="empty-state">R2 chưa có object hoặc binding chưa sẵn sàng.</div>}</div></>;
}

function ModerationStudio({value,onSave}:{value:any;onSave:(v:any)=>void}){
  const [draft,setDraft]=React.useState(value); React.useEffect(()=>setDraft(value),[value]); const set=(k:string,v:any)=>setDraft((d:any)=>({...d,[k]:v}));
  return <><SectionHead eyebrow="TRUST & SAFETY" title="Moderation" desc="Kiểm soát nickname, content review, report và những tính năng giao tiếp." action={<button className="primary-button" onClick={()=>onSave(draft)}><Save/>Lưu moderation</button>}/><div className="admin-toggle-grid"><Toggle label="Safe nickname" checked={!!draft.safeNickname} onChange={v=>set('safeNickname',v)}/><Toggle label="Review nội dung public" checked={!!draft.publicContentReview} onChange={v=>set('publicContentReview',v)}/><Toggle label="Cho phép free chat" checked={!!draft.allowFreeChat} onChange={v=>set('allowFreeChat',v)}/><Toggle label="Cho phép DM" checked={!!draft.allowDm} onChange={v=>set('allowDm',v)}/><Toggle label="Reporting" checked={!!draft.reporting} onChange={v=>set('reporting',v)}/><Toggle label="Creator content cần review" checked={!!draft.creatorContentNeedsReview} onChange={v=>set('creatorContentNeedsReview',v)}/></div><Field label="Blocked words (mỗi dòng một từ)" wide><textarea value={(draft.blockedWords||[]).join('\n')} onChange={e=>set('blockedWords',e.target.value.split('\n').map(x=>x.trim()).filter(Boolean))}/></Field></>;
}

function AnnouncementStudio({value,onSave}:{value:any;onSave:(v:any)=>void}){
  const [draft,setDraft]=React.useState(value); React.useEffect(()=>setDraft(value),[value]); const set=(k:string,v:any)=>setDraft((d:any)=>({...d,[k]:v}));
  return <><SectionHead eyebrow="ANNOUNCEMENTS" title="Thông báo toàn hệ thống" desc="Tạo banner có thời hạn mà không cần deploy lại website." action={<button className="primary-button" onClick={()=>onSave(draft)}><Save/>Lưu thông báo</button>}/><div className="admin-form-grid"><Toggle label="Bật thông báo" checked={!!draft.enabled} onChange={v=>set('enabled',v)}/><Field label="Mức độ"><select value={draft.severity||'info'} onChange={e=>set('severity',e.target.value)}><option>info</option><option>success</option><option>warning</option><option>critical</option></select></Field><Field label="Nội dung" wide><textarea value={draft.text||''} onChange={e=>set('text',e.target.value)}/></Field><Field label="Nhãn link"><input value={draft.linkLabel||''} onChange={e=>set('linkLabel',e.target.value)}/></Field><Field label="Link"><input value={draft.linkUrl||''} onChange={e=>set('linkUrl',e.target.value)}/></Field><Field label="Bắt đầu"><input type="datetime-local" value={draft.startsAt||''} onChange={e=>set('startsAt',e.target.value)}/></Field><Field label="Kết thúc"><input type="datetime-local" value={draft.endsAt||''} onChange={e=>set('endsAt',e.target.value)}/></Field></div></>;
}

function FeatureStudio({value,onSave}:{value:any;onSave:(v:any)=>void}){
  const [draft,setDraft]=React.useState(value); React.useEffect(()=>setDraft(value),[value]);
  return <><SectionHead eyebrow="FEATURE FLAGS" title="Bật/tắt tính năng tức thời" desc="Tắt nhanh module lỗi hoặc mở tính năng mới mà không sửa giao diện." action={<button className="primary-button" onClick={()=>onSave(draft)}><Save/>Lưu flags</button>}/><div className="admin-toggle-grid">{Object.entries(draft).map(([k,v])=><Toggle key={k} label={humanize(k)} checked={!!v} onChange={next=>setDraft((d:any)=>({...d,[k]:next}))}/>)}</div></>;
}

function AuditPanel(){
  const [items,setItems]=React.useState<any[]>([]); React.useEffect(()=>{api.adminAudit().then(r=>setItems(r.logs)).catch(()=>{})},[]);
  return <><SectionHead eyebrow="AUDIT" title="Audit Log" desc="Lịch sử thay đổi quan trọng trong Admin Console."/><div className="audit-list">{items.map(l=><div className="audit-item" key={l.id}><ClipboardList/><div><b>{l.action}</b><span>{l.display_name||l.email||'System'} • {l.target_type}{l.target_id?` / ${l.target_id}`:''}</span><small>{l.created_at}</small></div></div>)}{!items.length&&<div className="empty-state">Chưa có audit event.</div>}</div></>;
}

function BackupPanel({onNotice}:{onNotice:(s:string)=>void}){
  const [busy,setBusy]=React.useState(false);
  const exportAll=async()=>{setBusy(true);try{const data=await api.adminExport();const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`sky-first-games-backup-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(url);onNotice('Đã xuất snapshot quản trị.')}catch(e:any){onNotice(e.message)}finally{setBusy(false)}};
  return <><SectionHead eyebrow="BACKUP & EXPORT" title="Sao lưu dữ liệu quản trị" desc="Xuất settings, metadata game/content/account và cấu hình quan trọng thành snapshot JSON."/><div className="admin-map"><div><FileJson/><h3>Full admin snapshot</h3><p>Settings, game mode metadata, content metadata, accounts và collections. Không xuất password hash/session token.</p><button className="primary-button" disabled={busy} onClick={exportAll}><Download/>{busy?'Đang xuất…':'Xuất JSON'}</button></div><div><Archive/><h3>Deployment safety</h3><p>Giữ migrations trong Git và dùng D1 backup/export của Cloudflare trước thay đổi lớn.</p></div><div><AlertTriangle/><h3>Không thay thế backup D1</h3><p>Snapshot này dành cho cấu hình/quản trị, không phải bản dump SQL đầy đủ.</p></div></div></>;
}

function SystemStudio({value,onSave}:{value:any;onSave:(v:any)=>void}){
  const [draft,setDraft]=React.useState(value); React.useEffect(()=>setDraft(value),[value]); const set=(k:string,v:any)=>setDraft((d:any)=>({...d,[k]:v}));
  return <><SectionHead eyebrow="SYSTEM CONTROL" title="Điều khiển hệ thống" desc="Maintenance, guest play, Creator onboarding, giới hạn và chính sách vận hành." action={<button className="primary-button" onClick={()=>onSave(draft)}><Save/>Lưu hệ thống</button>}/><div className="admin-danger-zone"><AlertTriangle/><div><b>Maintenance Mode</b><p>Khi bật, public experience có thể hiển thị thông báo bảo trì theo config.</p></div><button className={draft.maintenance?'danger-button':'secondary-button'} onClick={()=>set('maintenance',!draft.maintenance)}>{draft.maintenance?'Tắt Maintenance':'Bật Maintenance'}</button></div><div className="admin-form-grid"><Toggle label="Creator tự khởi tạo" checked={!!draft.selfCreatorRegistration} onChange={v=>set('selfCreatorRegistration',v)}/><Toggle label="Guest play" checked={!!draft.guestPlay} onChange={v=>set('guestPlay',v)}/><Field label="Thông báo bảo trì" wide><textarea value={draft.maintenanceMessage||''} onChange={e=>set('maintenanceMessage',e.target.value)}/></Field></div><PowerJson value={draft} onChange={setDraft}/></>;
}

function Field({label,children,wide=false}:{label:string;children:React.ReactNode;wide?:boolean}){return <label className={`admin-field ${wide?'wide':''}`}><span>{label}</span>{children}</label>}
function Toggle({label,checked,onChange}:{label:string;checked:boolean;onChange:(v:boolean)=>void}){return <label className="admin-toggle"><div><b>{label}</b><small>{checked?'Đang bật':'Đang tắt'}</small></div><input type="checkbox" checked={checked} onChange={e=>onChange(e.target.checked)}/><i/></label>}
function formatBytes(n:number){if(!Number.isFinite(n))return '—';if(n<1024)return `${n} B`;if(n<1024*1024)return `${(n/1024).toFixed(1)} KB`;return `${(n/1024/1024).toFixed(1)} MB`}
function humanize(s:string){return s.replace(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase())}
