INSERT OR IGNORE INTO question_sets(id,title,language,level,topic,description,is_official,visibility,status,version,created_by,created_at,updated_at) VALUES
('official-en-a1-greetings','English A1 — Greetings','en','A1','Greetings','Bộ câu hỏi nhập môn về chào hỏi và giao tiếp cơ bản.',1,'public','published',1,NULL,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z'),
('official-zh-hsk1-greetings','中文 HSK 1 — 问候 Greetings','zh','HSK 1','Greetings','Chào hỏi, đại từ và giao tiếp đầu tiên trong tiếng Trung.',1,'public','published',1,NULL,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z'),
('official-ja-starter','日本語 Starter — Hiragana','ja','Starter','Hiragana','Nhận diện một số Hiragana cơ bản.',1,'public','published',1,NULL,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z'),
('official-ko-starter','한국어 Starter — Hangul','ko','Starter','Hangul','Nhận diện một số ký tự và từ Hangul cơ bản.',1,'public','published',1,NULL,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z');

INSERT OR IGNORE INTO questions(id,set_id,type,prompt,options_json,answers_json,pairs_json,explanation,hint,media_url,difficulty,tags_json,sort_order,created_at,updated_at) VALUES
('en1','official-en-a1-greetings','multiple_choice','Which phrase is used to greet someone in the morning?','["Good morning","Good night","Goodbye","See you yesterday"]','["Good morning"]','[]','“Good morning” is used in the morning.','','',1,'["greeting"]',1,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z'),
('en2','official-en-a1-greetings','multiple_choice','Choose the best reply: “How are you?”','["I am fine, thank you.","My name blue.","At seven o’clock.","Because yes."]','["I am fine, thank you."]','[]','','','',1,'[]',2,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z'),
('en3','official-en-a1-greetings','fill_blank','Complete: “Nice to ___ you.”','["meet","meeting","met","meets"]','["meet"]','[]','','','',1,'[]',3,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z'),
('en4','official-en-a1-greetings','true_false','“See you later” can be used when saying goodbye.','["True","False"]','["True"]','[]','','','',1,'[]',4,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z'),
('en5','official-en-a1-greetings','typed','Type the English word for “xin chào”.','[]','["hello","hi"]','[]','','','',1,'[]',5,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z'),
('zh1','official-zh-hsk1-greetings','multiple_choice','“你好” nghĩa là gì?','["Xin chào","Cảm ơn","Tạm biệt","Xin lỗi"]','["Xin chào"]','[]','','','',1,'[]',1,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z'),
('zh2','official-zh-hsk1-greetings','multiple_choice','Pinyin đúng của “你” là…','["nǐ","wǒ","tā","hǎo"]','["nǐ"]','[]','','','',1,'[]',2,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z'),
('zh3','official-zh-hsk1-greetings','multiple_choice','“谢谢” nghĩa là…','["Cảm ơn","Không có gì","Hẹn gặp lại","Bạn khỏe không?"]','["Cảm ơn"]','[]','','','',1,'[]',3,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z'),
('zh4','official-zh-hsk1-greetings','typed','Gõ pinyin có dấu hoặc số thanh cho “好”.','[]','["hǎo","hao3"]','[]','','','',1,'[]',4,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z'),
('ja1','official-ja-starter','multiple_choice','Hiragana nào đọc là “a”?','["あ","い","う","え"]','["あ"]','[]','','','',1,'[]',1,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z'),
('ja2','official-ja-starter','multiple_choice','“い” đọc là…','["i","u","e","o"]','["i"]','[]','','','',1,'[]',2,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z'),
('ko1','official-ko-starter','multiple_choice','“안녕하세요” thường có nghĩa là…','["Xin chào","Cảm ơn","Tạm biệt","Xin lỗi"]','["Xin chào"]','[]','','','',1,'[]',1,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z'),
('ko2','official-ko-starter','multiple_choice','Ký tự “ㅏ” gần âm nào?','["a","o","u","i"]','["a"]','[]','','','',1,'[]',2,'2026-09-11T00:00:00.000Z','2026-09-11T00:00:00.000Z');
