PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS accounts (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE COLLATE NOCASE,
  display_name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  password_salt TEXT NOT NULL,
  is_admin INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'active' CHECK(status IN ('active','suspended')),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  token_hash TEXT NOT NULL UNIQUE,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_sessions_account ON sessions(account_id);
CREATE INDEX IF NOT EXISTS idx_sessions_token ON sessions(token_hash);

CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value_json TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  updated_by TEXT REFERENCES accounts(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS languages (
  code TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  native_name TEXT NOT NULL,
  icon TEXT NOT NULL DEFAULT '🌐',
  status TEXT NOT NULL DEFAULT 'active',
  direction TEXT NOT NULL DEFAULT 'ltr',
  adapter_config_json TEXT NOT NULL DEFAULT '{}',
  sort_order INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS game_modes (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  family TEXT NOT NULL,
  icon TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  supported_question_types_json TEXT NOT NULL DEFAULT '[]',
  session_modes_json TEXT NOT NULL DEFAULT '[]',
  min_players INTEGER NOT NULL DEFAULT 1,
  max_players INTEGER NOT NULL DEFAULT 100,
  duration_minutes_json TEXT NOT NULL DEFAULT '[3,15]',
  languages_json TEXT NOT NULL DEFAULT '"universal"',
  status TEXT NOT NULL DEFAULT 'active',
  featured INTEGER NOT NULL DEFAULT 0,
  color TEXT NOT NULL DEFAULT '#0ea5e9',
  mechanic TEXT NOT NULL DEFAULT 'quiz',
  version TEXT NOT NULL DEFAULT '1.0',
  manifest_json TEXT NOT NULL DEFAULT '{}',
  sort_order INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS question_sets (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  language TEXT NOT NULL,
  level TEXT NOT NULL DEFAULT '',
  topic TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  is_official INTEGER NOT NULL DEFAULT 0,
  visibility TEXT NOT NULL DEFAULT 'private' CHECK(visibility IN ('public','link','password','private')),
  access_password_hash TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','review','verified','published','archived')),
  version INTEGER NOT NULL DEFAULT 1,
  created_by TEXT REFERENCES accounts(id) ON DELETE SET NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_sets_lang_status ON question_sets(language,status);
CREATE INDEX IF NOT EXISTS idx_sets_owner ON question_sets(created_by);

CREATE TABLE IF NOT EXISTS questions (
  id TEXT PRIMARY KEY,
  set_id TEXT NOT NULL REFERENCES question_sets(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  prompt TEXT NOT NULL,
  options_json TEXT NOT NULL DEFAULT '[]',
  answers_json TEXT NOT NULL DEFAULT '[]',
  pairs_json TEXT NOT NULL DEFAULT '[]',
  explanation TEXT NOT NULL DEFAULT '',
  hint TEXT NOT NULL DEFAULT '',
  media_url TEXT NOT NULL DEFAULT '',
  difficulty INTEGER NOT NULL DEFAULT 1,
  tags_json TEXT NOT NULL DEFAULT '[]',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_questions_set ON questions(set_id,sort_order);

CREATE TABLE IF NOT EXISTS games (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  mode_id TEXT NOT NULL REFERENCES game_modes(id),
  set_id TEXT NOT NULL REFERENCES question_sets(id),
  set_version INTEGER NOT NULL DEFAULT 1,
  visibility TEXT NOT NULL DEFAULT 'link',
  join_code TEXT NOT NULL UNIQUE,
  player_password_hash TEXT,
  config_json TEXT NOT NULL DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'active',
  created_by TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_games_creator ON games(created_by);
CREATE INDEX IF NOT EXISTS idx_games_code ON games(join_code);

CREATE TABLE IF NOT EXISTS access_passes (
  id TEXT PRIMARY KEY,
  game_id TEXT NOT NULL REFERENCES games(id) ON DELETE CASCADE,
  token TEXT NOT NULL UNIQUE,
  label TEXT NOT NULL,
  permissions_json TEXT NOT NULL DEFAULT '["host"]',
  expires_at TEXT,
  created_at TEXT NOT NULL,
  revoked_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_access_game ON access_passes(game_id);

CREATE TABLE IF NOT EXISTS game_sessions (
  id TEXT PRIMARY KEY,
  game_id TEXT NOT NULL REFERENCES games(id) ON DELETE CASCADE,
  mode_id TEXT NOT NULL,
  question_snapshot_json TEXT NOT NULL,
  config_snapshot_json TEXT NOT NULL,
  state TEXT NOT NULL DEFAULT 'lobby' CHECK(state IN ('lobby','running','finished','terminated')),
  room_code TEXT NOT NULL,
  started_at TEXT,
  ended_at TEXT,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_game_sessions_game ON game_sessions(game_id);

CREATE TABLE IF NOT EXISTS players (
  id TEXT PRIMARY KEY,
  session_id TEXT NOT NULL REFERENCES game_sessions(id) ON DELETE CASCADE,
  nickname TEXT NOT NULL,
  safe_key TEXT,
  joined_at TEXT NOT NULL,
  left_at TEXT
);

CREATE TABLE IF NOT EXISTS results (
  id TEXT PRIMARY KEY,
  session_id TEXT NOT NULL REFERENCES game_sessions(id) ON DELETE CASCADE,
  player_id TEXT REFERENCES players(id) ON DELETE SET NULL,
  nickname TEXT NOT NULL,
  score INTEGER NOT NULL DEFAULT 0,
  correct_count INTEGER NOT NULL DEFAULT 0,
  incorrect_count INTEGER NOT NULL DEFAULT 0,
  accuracy REAL NOT NULL DEFAULT 0,
  avg_response_ms INTEGER NOT NULL DEFAULT 0,
  breakdown_json TEXT NOT NULL DEFAULT '[]',
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS collections (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL DEFAULT '',
  item_ids_json TEXT NOT NULL DEFAULT '[]',
  status TEXT NOT NULL DEFAULT 'active',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS audit_logs (
  id TEXT PRIMARY KEY,
  account_id TEXT REFERENCES accounts(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id TEXT,
  detail_json TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL
);

INSERT OR IGNORE INTO languages(code,name,native_name,icon,status,direction,sort_order,updated_at) VALUES
('en','English','English','🇬🇧','active','ltr',1,'2026-09-11T00:00:00.000Z'),
('zh','Chinese','中文','🇨🇳','active','ltr',2,'2026-09-11T00:00:00.000Z'),
('ja','Japanese','日本語','🇯🇵','beta','ltr',3,'2026-09-11T00:00:00.000Z'),
('ko','Korean','한국어','🇰🇷','beta','ltr',4,'2026-09-11T00:00:00.000Z'),
('fr','French','Français','🇫🇷','coming_soon','ltr',5,'2026-09-11T00:00:00.000Z'),
('de','German','Deutsch','🇩🇪','coming_soon','ltr',6,'2026-09-11T00:00:00.000Z'),
('es','Spanish','Español','🇪🇸','coming_soon','ltr',7,'2026-09-11T00:00:00.000Z');

INSERT OR IGNORE INTO settings(key,value_json,updated_at) VALUES
('site','{"brandName":"Sky First Games","shortName":"SFG","tagline":"Play. Learn. Level Up.","contactEmail":"games@skyfirst.io.vn","mainSiteUrl":"https://skyfirst.io.vn","mainSiteLabel":"Website chính — Sky First Network"}','2026-09-11T00:00:00.000Z'),
('navigation','{"items":[{"label":"Khám phá","url":"/explore"},{"label":"Nhập mã","url":"/join"},{"label":"Chơi nhanh","url":"/quick-play"}],"creatorLabel":"Creator"}','2026-09-11T00:00:00.000Z'),
('homepage','{"heroTitle":"Chơi để học. Học để đi xa hơn.","heroSubtitle":"Hệ sinh thái trò chơi học tập đa ngôn ngữ của Sky First — vào là chơi, tạo một lần và triển khai theo hàng chục cách.","announcement":"Sky First Games • 40 Game Modes • English, 中文, 日本語, 한국어","sections":["featured","languages","creator"]}','2026-09-11T00:00:00.000Z'),
('pages','{"about":{"title":"Giới thiệu","intro":"Sky First Games là một sản phẩm độc lập trong hệ sinh thái Sky First Network.","body":"Thiết kế đa ngôn ngữ, game-first, không phải một cổng học liệu."},"privacy":{"title":"Quyền riêng tư","intro":"Người chơi có thể tham gia mà không cần tài khoản.","body":"Sky First Games áp dụng nguyên tắc tối thiểu dữ liệu."}}','2026-09-11T00:00:00.000Z'),
('footer','{"about":"Sky First Games là sản phẩm trò chơi học tập thuộc hệ sinh thái Sky First Network.","columns":["Games","Hệ thống","Ngôn ngữ"],"showMainSite":true}','2026-09-11T00:00:00.000Z'),
('branding','{"logoUrl":"/brand/sky-first-network-web.png","primary":"#0ea5e9","navy":"#07182f","radius":"22px"}','2026-09-11T00:00:00.000Z'),
('seo','{"title":"Sky First Games","description":"Hệ sinh thái trò chơi học tập đa ngôn ngữ của Sky First.","indexable":true}','2026-09-11T00:00:00.000Z'),
('languages','{"items":[{"code":"en","status":"active"},{"code":"zh","status":"active"},{"code":"ja","status":"beta"},{"code":"ko","status":"beta"},{"code":"fr","status":"coming_soon"}]}','2026-09-11T00:00:00.000Z'),
('system','{"maintenance":false,"registration":false,"guestPlay":true,"featureFlags":{"dailyChallenge":true,"quickPlay":true,"accessPass":true,"aiDraft":false}}','2026-09-11T00:00:00.000Z');
