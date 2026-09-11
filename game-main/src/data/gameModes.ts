import type { GameMode, QuestionType, SessionMode } from '../types';

const core:QuestionType[]=['multiple_choice','multiple_select','true_false','typed','fill_blank','translation','dialogue','scenario_decision'];
const all:SessionMode[]=['solo','live','assignment','host_paced','player_paced'];
const modes:GameMode[] = [
  ['quiz-rush','Quiz Rush','speed','⚡','Combo tốc độ, trả lời đúng liên tiếp để nhân điểm.',core,all,1,120,[3,15],'universal','active',true,'#2563eb','quiz'],
  ['lightning-round','Lightning Round','speed','🌩️','60–90 giây trả lời tối đa, sai làm tụt combo.',core,['solo','live'],1,100,[2,8],'universal','active',false,'#7c3aed','quiz'],
  ['rocket-race','Rocket Race','speed','🚀','Tên lửa tiến theo độ chính xác và tốc độ.',core,['solo','live','assignment'],1,100,[4,15],'universal','active',true,'#0ea5e9','race'],
  ['turbo-track','Turbo Track','speed','🏎️','Đua nhiều vòng, pit-stop bằng câu nâng cao.',core,['solo','live'],1,80,[5,18],'universal','active',false,'#f97316','race'],
  ['time-bomb','Time Bomb','speed','💣','Trả lời trước khi đồng hồ nổ; dùng streak để kéo dài thời gian.',core,['solo','live'],1,80,[3,12],'universal','active',false,'#ef4444','survival'],
  ['quick-fire','Quick Fire','speed','🔥','Chuỗi câu cực nhanh, ưu tiên phản xạ.',core,['solo','live'],1,100,[3,10],'universal','active',false,'#f59e0b','quiz'],
  ['last-second','Last Second','speed','⏱️','Điểm thưởng lớn khi xử lý sát giờ nhưng vẫn chính xác.',core,['solo','live'],1,80,[3,12],'universal','active',false,'#ec4899','survival'],
  ['word-sprint','Word Sprint','speed','🏃','Chạy đường dài bằng câu từ vựng và phản xạ.',core,['solo','assignment'],1,1,[4,15],'universal','active',false,'#10b981','race'],

  ['word-match','Word Match','language','🧩','Ghép từ–nghĩa, cụm từ, chữ–âm và cặp tương ứng.',['matching','multiple_choice'],['solo','live','assignment'],1,80,[4,15],'universal','active',true,'#14b8a6','match'],
  ['memory-match','Memory Match','language','🧠','Lật thẻ và ghi nhớ các cặp từ/nghĩa/âm thanh.',['matching','audio_choice','image_choice'],['solo','assignment'],1,1,[4,15],'universal','active',false,'#8b5cf6','memory'],
  ['sentence-builder','Sentence Builder','language','🧱','Sắp xếp từ/cụm thành câu đúng.',['sentence_builder','ordering'],['solo','live','assignment'],1,80,[4,18],'universal','active',true,'#06b6d4','builder'],
  ['cloze-lab','Cloze Lab','language','🧪','Hoàn thành đoạn văn nhiều chỗ trống theo ngữ cảnh.',['cloze','fill_blank'],['solo','assignment'],1,1,[6,25],'universal','active',false,'#0f766e','builder'],
  ['grammar-fixer','Grammar Fixer','language','🛠️','Tìm lỗi và sửa câu, phù hợp THCS–chuyên nghiệp.',['error_correction','transformation','multiple_choice'],['solo','live','assignment'],1,80,[5,20],'universal','active',true,'#0284c7','builder'],
  ['word-forge','Word Forge','language','⚒️','Biến đổi từ, tạo đúng dạng từ và collocation.',['word_formation','typed','fill_blank'],['solo','assignment'],1,1,[5,20],'universal','active',false,'#64748b','builder'],
  ['translation-relay','Translation Relay','language','🔁','Dịch nhanh theo ngữ cảnh, chấp nhận nhiều đáp án hợp lý.',['translation','typed'],['solo','live','assignment'],1,80,[5,20],'universal','active',false,'#6366f1','quiz'],
  ['dialogue-dash','Dialogue Dash','language','💬','Chọn hoặc hoàn thành lượt thoại phù hợp tình huống.',['dialogue','scenario_decision','multiple_choice'],['solo','live','assignment'],1,100,[5,18],'universal','active',true,'#0d9488','scenario'],

  ['listen-pick','Listen & Pick','listening','🎧','Nghe audio thật/TTS fallback rồi chọn đáp án.',['audio_choice','multiple_choice'],['solo','live','assignment'],1,80,[4,20],'universal','active',true,'#4f46e5','choice'],
  ['listen-type','Listen & Type','listening','⌨️','Nghe rồi nhập lại từ/câu, có accepted answers.',['listening_input','dictation','typed'],['solo','assignment'],1,1,[5,25],'universal','active',true,'#7c3aed','builder'],
  ['sound-match','Sound Match','listening','🔊','Ghép âm thanh với từ, nghĩa hoặc hình.',['audio_choice','matching'],['solo','assignment'],1,1,[5,20],'universal','active',false,'#9333ea','match'],
  ['dictation-dash','Dictation Dash','listening','📝','Nghe câu/đoạn ngắn rồi chép chính xác.',['dictation','listening_input'],['solo','assignment'],1,1,[6,30],'universal','active',false,'#6d28d9','builder'],
  ['listening-mission','Listening Mission','listening','🎙️','Một audio nhiều câu: main idea, detail, inference, dictation.',['audio_choice','listening_input','dictation','true_false'],['solo','assignment','host_paced'],1,60,[8,30],'universal','active',true,'#5b21b6','scenario'],
  ['stress-master','Stress Master','listening','🔉','Nhận diện trọng âm/nhịp điệu cho ngôn ngữ phù hợp.',['audio_choice','multiple_choice'],['solo','assignment'],1,1,[4,15],['en','fr','de','es','it','pt','ru','tr'],'active',false,'#a855f7','choice'],

  ['balloon-pop','Balloon Pop','arcade','🎈','Bắn bóng bằng câu đúng; miss làm mất combo.',core,['solo','live'],1,80,[4,15],'universal','active',true,'#ec4899','choice'],
  ['meteor-defense','Meteor Defense','arcade','☄️','Bảo vệ hành tinh, câu sai khiến thiên thạch tiến gần.',['multiple_choice','typed','true_false'],['solo','live'],1,80,[5,18],'universal','active',false,'#4338ca','tower'],
  ['sky-defender','Sky Defender','arcade','🛡️','Tower defense theo wave kiến thức và power-up.',['multiple_choice','typed','matching'],['solo','live'],1,80,[6,20],'universal','active',true,'#2563eb','tower'],
  ['maze-escape','Maze Escape','arcade','🌀','Chọn đường trong mê cung sau mỗi quyết định đúng.',['multiple_choice','scenario_decision','dialogue'],['solo','assignment'],1,1,[5,20],'universal','active',false,'#14b8a6','board'],
  ['treasure-hunt','Treasure Hunt','arcade','🏴‍☠️','Khám phá bản đồ, chọn rương và quản lý vật phẩm.',core,['solo','live','assignment'],1,100,[6,22],'universal','active',true,'#d97706','board'],
  ['fishing-words','Fishing Words','arcade','🎣','Câu đúng giúp câu cá; độ khó quyết định loại cá.',['multiple_choice','typed','matching'],['solo','assignment'],1,1,[5,18],'universal','active',false,'#0891b2','economy'],
  ['monster-run','Monster Run','arcade','👾','Vượt chướng ngại; sai làm quái vật áp sát.',['multiple_choice','true_false','typed'],['solo','live'],1,80,[5,18],'universal','active',false,'#65a30d','race'],
  ['galaxy-quest','Galaxy Quest','arcade','🌌','Mở hành tinh theo chuỗi nhiệm vụ và câu hỏi.',['multiple_choice','typed','scenario_decision','dialogue'],['solo','assignment'],1,1,[8,30],'universal','active',true,'#4f46e5','board'],

  ['team-battle','Team Battle','classroom','⚔️','Đấu đội trực tiếp, host điều khiển và chia lượt.',['multiple_choice','true_false','typed','matching'],['live','one_screen','host_paced'],2,150,[8,35],'universal','active',true,'#dc2626','team'],
  ['mystery-box','Mystery Box','classroom','🎁','Trả lời đúng rồi mở hộp buff/debuff ngẫu nhiên.',core,['live','one_screen','host_paced'],2,150,[8,30],'universal','active',false,'#7c3aed','team'],
  ['lucky-tiles','Lucky Tiles','classroom','🍀','Chọn ô may mắn sau câu đúng, phù hợp một màn hình.',['multiple_choice','true_false','typed'],['live','one_screen'],2,150,[8,30],'universal','active',false,'#16a34a','board'],
  ['king-of-words','King of Words','classroom','👑','Giữ ngôi qua từng vòng, điểm ưu tiên accuracy.',['multiple_choice','typed','matching','ordering'],['live','one_screen'],2,120,[10,35],'universal','active',false,'#ca8a04','survival'],
  ['millionaire','Millionaire','classroom','💰','Leo mốc câu hỏi, có quyền trợ giúp và mốc an toàn.',['multiple_choice','true_false'],['solo','live','one_screen'],1,100,[8,25],'universal','active',true,'#0f766e','quiz'],
  ['classroom-bingo','Classroom Bingo','classroom','🎯','Bingo kiến thức dùng chung màn hình/lớp đông.',['multiple_choice','matching','typed'],['live','one_screen'],4,200,[10,35],'universal','active',false,'#0ea5e9','board'],
  ['knockout','Knockout','classroom','🥊','Nhiều vòng loại, vẫn ưu tiên accuracy hơn tốc độ.',['multiple_choice','true_false','typed'],['live'],4,150,[8,35],'universal','active',false,'#be123c','survival'],
  ['final-showdown','Final Showdown','classroom','🏆','Chung kết đối kháng cho lớp/sự kiện.',['multiple_choice','true_false','typed','ordering'],['live','one_screen'],2,120,[8,35],'universal','active',false,'#f59e0b','team'],

  ['office-sim','Office Simulator','scenario','🏢','Giải quyết email, deadline, họp và tình huống nơi làm việc.',['dialogue','scenario_decision','translation','error_correction'],['solo','assignment','host_paced'],1,60,[10,35],'universal','active',true,'#334155','scenario'],
  ['school-day','School Day Simulator','scenario','🏫','Tình huống ở trường: mượn phòng, thông báo lớp, xử lý học viên.',['dialogue','scenario_decision','translation','ordering'],['solo','assignment','host_paced'],1,80,[10,35],'universal','active',true,'#0ea5e9','scenario'],
  ['travel-quest','Travel Quest','scenario','🧳','Sân bay, khách sạn, phương tiện, hỏi đường và sự cố.',['dialogue','scenario_decision','audio_choice','translation'],['solo','assignment'],1,1,[10,35],'universal','active',true,'#06b6d4','scenario'],
  ['customer-service','Customer Service Shift','scenario','🎧','Xử lý khách hàng, khiếu nại và ngôn ngữ lịch sự.',['dialogue','scenario_decision','audio_choice','error_correction'],['solo','assignment','host_paced'],1,60,[10,35],'universal','active',false,'#0284c7','scenario'],
  ['volunteer-mission','Volunteer Mission','scenario','🤝','Điều phối TNV, check-in, phân công và báo cáo hoạt động.',['dialogue','scenario_decision','ordering','translation'],['solo','assignment','host_paced'],1,80,[10,35],'universal','active',true,'#10b981','scenario'],

  ['tone-battle','Tone Battle','language','🎵','Nhận diện và phân biệt thanh điệu tiếng Trung/Thái.',['audio_choice','multiple_choice','matching'],['solo','live','assignment'],1,80,[5,20],['zh','th'],'active',true,'#ef4444','choice'],
  ['hanzi-match','Hanzi Match','language','🀄','Ghép Hanzi ↔ Pinyin ↔ nghĩa.',['matching','multiple_choice'],['solo','assignment'],1,1,[5,20],['zh'],'active',true,'#dc2626','match'],
  ['pinyin-rush','Pinyin Rush','language','🐼','Phản xạ Pinyin, tone và Hanzi.',['multiple_choice','typed','audio_choice'],['solo','live'],1,80,[4,15],['zh'],'active',false,'#f87171','quiz'],
  ['kana-rush','Kana Rush','language','あ','Hiragana/Katakana phản xạ nhanh.',['multiple_choice','matching','typed'],['solo','live','assignment'],1,80,[4,18],['ja'],'active',true,'#fb7185','quiz'],
  ['kanji-path','Kanji Path','language','漢','Kanji reading/meaning theo đường nhiệm vụ.',['multiple_choice','matching','typed'],['solo','assignment'],1,1,[6,25],['ja'],'active',false,'#f97316','board'],
  ['hangul-builder','Hangul Builder','language','한','Ghép jamo, âm tiết và nghĩa.',['matching','ordering','typed'],['solo','assignment'],1,1,[5,20],['ko'],'active',true,'#8b5cf6','builder'],
  ['arabic-script','Arabic Script Quest','language','ع','Nhận diện chữ, nối âm và RTL.',['matching','ordering','multiple_choice'],['solo','assignment'],1,1,[5,20],['ar'],'active',true,'#16a34a','builder'],
  ['cyrillic-sprint','Cyrillic Sprint','language','Я','Nhận diện Cyrillic, âm và từ.',['matching','multiple_choice','typed'],['solo','assignment'],1,1,[5,20],['ru'],'active',false,'#0284c7','quiz']
].map((x:any)=>({id:x[0],name:x[1],family:x[2],icon:x[3],description:x[4],supportedQuestionTypes:x[5],sessionModes:x[6],minPlayers:x[7],maxPlayers:x[8],durationMinutes:x[9],languages:x[10],status:x[11],featured:x[12],color:x[13],mechanic:x[14],version:'2.0',tags:[x[2],x[14]]}));

export const gameModes=modes;
