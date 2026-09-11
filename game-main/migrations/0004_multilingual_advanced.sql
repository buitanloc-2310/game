ALTER TABLE question_sets ADD COLUMN context TEXT NOT NULL DEFAULT 'Daily Life';
ALTER TABLE question_sets ADD COLUMN skill TEXT NOT NULL DEFAULT 'Mixed';
ALTER TABLE questions ADD COLUMN media_type TEXT NOT NULL DEFAULT '';
ALTER TABLE questions ADD COLUMN transcript TEXT NOT NULL DEFAULT '';
ALTER TABLE questions ADD COLUMN tts_text TEXT NOT NULL DEFAULT '';
ALTER TABLE questions ADD COLUMN tts_lang TEXT NOT NULL DEFAULT '';
ALTER TABLE questions ADD COLUMN max_plays INTEGER NOT NULL DEFAULT 0;
ALTER TABLE questions ADD COLUMN playback_rate REAL NOT NULL DEFAULT 1.0;
ALTER TABLE questions ADD COLUMN passage TEXT NOT NULL DEFAULT '';
ALTER TABLE questions ADD COLUMN context TEXT NOT NULL DEFAULT '';

INSERT OR REPLACE INTO languages(code,name,native_name,icon,status,direction,adapter_config_json,sort_order,updated_at) VALUES
('en','English','English','🇬🇧','active','ltr','{"tts":"en-US","scripts":["Latin"],"frameworks":["CEFR","THCS/THPT"]}',1,'2026-09-11T00:00:00Z'),
('zh','Chinese','中文','🇨🇳','active','ltr','{"tts":"zh-CN","scripts":["Hanzi","Pinyin"],"frameworks":["HSK"]}',2,'2026-09-11T00:00:00Z'),
('ja','Japanese','日本語','🇯🇵','active','ltr','{"tts":"ja-JP","scripts":["Hiragana","Katakana","Kanji"],"frameworks":["JLPT"]}',3,'2026-09-11T00:00:00Z'),
('ko','Korean','한국어','🇰🇷','active','ltr','{"tts":"ko-KR","scripts":["Hangul"],"frameworks":["TOPIK"]}',4,'2026-09-11T00:00:00Z'),
('fr','French','Français','🇫🇷','active','ltr','{"tts":"fr-FR","frameworks":["CEFR","DELF"]}',5,'2026-09-11T00:00:00Z'),
('de','German','Deutsch','🇩🇪','active','ltr','{"tts":"de-DE","frameworks":["CEFR","Goethe"]}',6,'2026-09-11T00:00:00Z'),
('es','Spanish','Español','🇪🇸','active','ltr','{"tts":"es-ES","frameworks":["CEFR","DELE"]}',7,'2026-09-11T00:00:00Z'),
('it','Italian','Italiano','🇮🇹','active','ltr','{"tts":"it-IT","frameworks":["CEFR","CILS"]}',8,'2026-09-11T00:00:00Z'),
('pt','Portuguese','Português','🇵🇹','active','ltr','{"tts":"pt-PT","frameworks":["CEFR","CAPLE"]}',9,'2026-09-11T00:00:00Z'),
('ru','Russian','Русский','🇷🇺','active','ltr','{"tts":"ru-RU","scripts":["Cyrillic"],"frameworks":["TORFL"]}',10,'2026-09-11T00:00:00Z'),
('th','Thai','ไทย','🇹🇭','active','ltr','{"tts":"th-TH","scripts":["Thai"]}',11,'2026-09-11T00:00:00Z'),
('vi','Vietnamese','Tiếng Việt','🇻🇳','active','ltr','{"tts":"vi-VN","frameworks":["THCS/THPT","Practical"]}',12,'2026-09-11T00:00:00Z'),
('ar','Arabic','العربية','🇸🇦','active','rtl','{"tts":"ar-SA","scripts":["Arabic"]}',13,'2026-09-11T00:00:00Z'),
('id','Indonesian','Bahasa Indonesia','🇮🇩','active','ltr','{"tts":"id-ID"}',14,'2026-09-11T00:00:00Z'),
('tr','Turkish','Türkçe','🇹🇷','active','ltr','{"tts":"tr-TR","frameworks":["CEFR"]}',15,'2026-09-11T00:00:00Z');

INSERT OR REPLACE INTO settings(key,value_json,updated_at) VALUES
('site','{"brandName":"Sky First Games","shortName":"SFG","tagline":"PLAY • LEARN • LEVEL UP","contactEmail":"hotro.sfn@gmail.com","mainSiteUrl":"https://skyfirst.io.vn","mainSiteLabel":"Website chính — Sky First Network","domain":"game.skyfirst.io.vn"}','2026-09-11T00:00:00Z'),
('homepage','{"heroTitle":"Play. Learn. Level Up.","heroSubtitle":"Nền tảng trò chơi học tập đa ngôn ngữ của Sky First — từ lớp học tới đời sống và nơi làm việc.","announcement":"15 ngôn ngữ • 40+ Game Modes • bài tập thực tế","sections":["hero","featured","language-worlds","real-life","creator"]}','2026-09-11T00:00:00Z'),
('branding','{"logoUrl":"/brand/sky-first-logo.png","primary":"#0ea5e9","navy":"#07182f","radius":"24px","motion":true}','2026-09-11T00:00:00Z'),
('footer','{"about":"Sky First Games là nền tảng trò chơi học tập đa ngôn ngữ thuộc hệ sinh thái Sky First Network.","contactEmail":"hotro.sfn@gmail.com","copyright":"© 2026 Sky First Games — Bản quyền thuộc Mạng lưới Giáo dục & Phát triển Cộng đồng Sky First.","ecosystemLine":"Một sản phẩm thuộc hệ sinh thái Sky First Network."}','2026-09-11T00:00:00Z'),
('system','{"maintenance":false,"selfCreatorRegistration":true,"guestPlay":true,"featureFlags":{"dailyChallenge":true,"quickPlay":true,"accessPass":true,"assignments":true,"oneScreen":true,"ttsFallback":true,"aiDraft":false}}','2026-09-11T00:00:00Z');

INSERT OR REPLACE INTO settings(key,value_json,updated_at) VALUES
('languages','{"items":[{"code":"en","name":"English","nativeName":"English","icon":"🇬🇧","status":"active","direction":"ltr","tts":"en-US"},{"code":"zh","name":"Chinese","nativeName":"中文","icon":"🇨🇳","status":"active","direction":"ltr","tts":"zh-CN"},{"code":"ja","name":"Japanese","nativeName":"日本語","icon":"🇯🇵","status":"active","direction":"ltr","tts":"ja-JP"},{"code":"ko","name":"Korean","nativeName":"한국어","icon":"🇰🇷","status":"active","direction":"ltr","tts":"ko-KR"},{"code":"fr","name":"French","nativeName":"Français","icon":"🇫🇷","status":"active","direction":"ltr","tts":"fr-FR"},{"code":"de","name":"German","nativeName":"Deutsch","icon":"🇩🇪","status":"active","direction":"ltr","tts":"de-DE"},{"code":"es","name":"Spanish","nativeName":"Español","icon":"🇪🇸","status":"active","direction":"ltr","tts":"es-ES"},{"code":"it","name":"Italian","nativeName":"Italiano","icon":"🇮🇹","status":"active","direction":"ltr","tts":"it-IT"},{"code":"pt","name":"Portuguese","nativeName":"Português","icon":"🇵🇹","status":"active","direction":"ltr","tts":"pt-PT"},{"code":"ru","name":"Russian","nativeName":"Русский","icon":"🇷🇺","status":"active","direction":"ltr","tts":"ru-RU"},{"code":"th","name":"Thai","nativeName":"ไทย","icon":"🇹🇭","status":"active","direction":"ltr","tts":"th-TH"},{"code":"vi","name":"Vietnamese","nativeName":"Tiếng Việt","icon":"🇻🇳","status":"active","direction":"ltr","tts":"vi-VN"},{"code":"ar","name":"Arabic","nativeName":"العربية","icon":"🇸🇦","status":"active","direction":"rtl","tts":"ar-SA"},{"code":"id","name":"Indonesian","nativeName":"Bahasa Indonesia","icon":"🇮🇩","status":"active","direction":"ltr","tts":"id-ID"},{"code":"tr","name":"Turkish","nativeName":"Türkçe","icon":"🇹🇷","status":"active","direction":"ltr","tts":"tr-TR"}],"uiLanguages":["vi","en"],"defaultUiLanguage":"vi"}','2026-09-11T00:00:00Z'),
('footer','{"about":"Sky First Games là nền tảng trò chơi học tập đa ngôn ngữ thuộc hệ sinh thái Sky First Network.","contactEmail":"hotro.sfn@gmail.com","portals":[{"name":"Cổng Thành viên","domain":"member.skyfirst.io.vn","url":"https://member.skyfirst.io.vn"},{"name":"Cổng Tình nguyện viên","domain":"tnv.skyfirst.io.vn","url":"https://tnv.skyfirst.io.vn"},{"name":"Cổng Thông tin","domain":"ctt.skyfirst.io.vn","url":"https://ctt.skyfirst.io.vn"},{"name":"Cổng Học thuật","domain":"academic.skyfirst.io.vn","url":"https://academic.skyfirst.io.vn"},{"name":"Website chính","domain":"skyfirst.io.vn","url":"https://skyfirst.io.vn"}],"copyright":"© 2026 Sky First Games — Bản quyền thuộc Mạng lưới Giáo dục & Phát triển Cộng đồng Sky First.","ecosystemLine":"Một sản phẩm thuộc hệ sinh thái Sky First Network."}','2026-09-11T00:00:00Z');
