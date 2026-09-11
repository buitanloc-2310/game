import type { GameMode, QuestionType, SessionMode } from '../types';

const core:QuestionType[]=['multiple_choice','multiple_select','true_false','typed','fill_blank','translation','dialogue','scenario_decision'];
const all:SessionMode[]=['solo','live','assignment','host_paced','player_paced'];
const modes:GameMode[] = [
  ['quiz-rush','Quiz Rush','speed','⚡','A fast-paced learning mode that rewards accuracy, timing and streaks.',core,all,1,120,[3,15],'universal','active',true,'#2563eb','quiz'],
  ['lightning-round','Lightning Round','speed','🌩️','A fast-paced learning mode that rewards accuracy, timing and streaks.',core,['solo','live'],1,100,[2,8],'universal','active',false,'#7c3aed','quiz'],
  ['rocket-race','Rocket Race','speed','🚀','A fast-paced learning mode that rewards accuracy, timing and streaks.',core,['solo','live','assignment'],1,100,[4,15],'universal','active',true,'#0ea5e9','race'],
  ['turbo-track','Turbo Track','speed','🏎️','A fast-paced learning mode that rewards accuracy, timing and streaks.',core,['solo','live'],1,80,[5,18],'universal','active',false,'#f97316','race'],
  ['time-bomb','Time Bomb','speed','💣','A fast-paced learning mode that rewards accuracy, timing and streaks.',core,['solo','live'],1,80,[3,12],'universal','active',false,'#ef4444','survival'],
  ['quick-fire','Quick Fire','speed','🔥','A fast-paced learning mode that rewards accuracy, timing and streaks.',core,['solo','live'],1,100,[3,10],'universal','active',false,'#f59e0b','quiz'],
  ['last-second','Last Second','speed','⏱️','A fast-paced learning mode that rewards accuracy, timing and streaks.',core,['solo','live'],1,80,[3,12],'universal','active',false,'#ec4899','survival'],
  ['word-sprint','Word Sprint','speed','🏃','A fast-paced learning mode that rewards accuracy, timing and streaks.',core,['solo','assignment'],1,1,[4,15],'universal','active',false,'#10b981','race'],

  ['word-match','Word Match','language','🧩','A language-focused mode for vocabulary, sentence structure and practical use.',['matching','multiple_choice'],['solo','live','assignment'],1,80,[4,15],'universal','active',true,'#14b8a6','match'],
  ['memory-match','Memory Match','language','🧠','A language-focused mode for vocabulary, sentence structure and practical use.',['matching','audio_choice','image_choice'],['solo','assignment'],1,1,[4,15],'universal','active',false,'#8b5cf6','memory'],
  ['sentence-builder','Sentence Builder','language','🧱','A language-focused mode for vocabulary, sentence structure and practical use.',['sentence_builder','ordering'],['solo','live','assignment'],1,80,[4,18],'universal','active',true,'#06b6d4','builder'],
  ['cloze-lab','Cloze Lab','language','🧪','A language-focused mode for vocabulary, sentence structure and practical use.',['cloze','fill_blank'],['solo','assignment'],1,1,[6,25],'universal','active',false,'#0f766e','builder'],
  ['grammar-fixer','Grammar Fixer','language','🛠️','A language-focused mode for vocabulary, sentence structure and practical use.',['error_correction','transformation','multiple_choice'],['solo','live','assignment'],1,80,[5,20],'universal','active',true,'#0284c7','builder'],
  ['word-forge','Word Forge','language','⚒️','A language-focused mode for vocabulary, sentence structure and practical use.',['word_formation','typed','fill_blank'],['solo','assignment'],1,1,[5,20],'universal','active',false,'#64748b','builder'],
  ['translation-relay','Translation Relay','language','🔁','A language-focused mode for vocabulary, sentence structure and practical use.',['translation','typed'],['solo','live','assignment'],1,80,[5,20],'universal','active',false,'#6366f1','quiz'],
  ['dialogue-dash','Dialogue Dash','language','💬','A language-focused mode for vocabulary, sentence structure and practical use.',['dialogue','scenario_decision','multiple_choice'],['solo','live','assignment'],1,100,[5,18],'universal','active',true,'#0d9488','scenario'],

  ['listen-pick','Listen & Pick','listening','🎧','A listening-focused mode with audio playback and TTS fallback support.',['audio_choice','multiple_choice'],['solo','live','assignment'],1,80,[4,20],'universal','active',true,'#4f46e5','choice'],
  ['listen-type','Listen & Type','listening','⌨️','A listening-focused mode with audio playback and TTS fallback support.',['listening_input','dictation','typed'],['solo','assignment'],1,1,[5,25],'universal','active',true,'#7c3aed','builder'],
  ['sound-match','Sound Match','listening','🔊','A listening-focused mode with audio playback and TTS fallback support.',['audio_choice','matching'],['solo','assignment'],1,1,[5,20],'universal','active',false,'#9333ea','match'],
  ['dictation-dash','Dictation Dash','listening','📝','A listening-focused mode with audio playback and TTS fallback support.',['dictation','listening_input'],['solo','assignment'],1,1,[6,30],'universal','active',false,'#6d28d9','builder'],
  ['listening-mission','Listening Mission','listening','🎙️','A listening-focused mode with audio playback and TTS fallback support.',['audio_choice','listening_input','dictation','true_false'],['solo','assignment','host_paced'],1,60,[8,30],'universal','active',true,'#5b21b6','scenario'],
  ['stress-master','Stress Master','listening','🔉','A listening-focused mode with audio playback and TTS fallback support.',['audio_choice','multiple_choice'],['solo','assignment'],1,1,[4,15],['en','fr','de','es','it','pt','ru','tr'],'active',false,'#a855f7','choice'],

  ['balloon-pop','Balloon Pop','arcade','🎈','An arcade-style learning mode where correct answers drive the game mechanic.',core,['solo','live'],1,80,[4,15],'universal','active',true,'#ec4899','choice'],
  ['meteor-defense','Meteor Defense','arcade','☄️','An arcade-style learning mode where correct answers drive the game mechanic.',['multiple_choice','typed','true_false'],['solo','live'],1,80,[5,18],'universal','active',false,'#4338ca','tower'],
  ['sky-defender','Sky Defender','arcade','🛡️','An arcade-style learning mode where correct answers drive the game mechanic.',['multiple_choice','typed','matching'],['solo','live'],1,80,[6,20],'universal','active',true,'#2563eb','tower'],
  ['maze-escape','Maze Escape','arcade','🌀','An arcade-style learning mode where correct answers drive the game mechanic.',['multiple_choice','scenario_decision','dialogue'],['solo','assignment'],1,1,[5,20],'universal','active',false,'#14b8a6','board'],
  ['treasure-hunt','Treasure Hunt','arcade','🏴‍☠️','An arcade-style learning mode where correct answers drive the game mechanic.',core,['solo','live','assignment'],1,100,[6,22],'universal','active',true,'#d97706','board'],
  ['fishing-words','Fishing Words','arcade','🎣','An arcade-style learning mode where correct answers drive the game mechanic.',['multiple_choice','typed','matching'],['solo','assignment'],1,1,[5,18],'universal','active',false,'#0891b2','economy'],
  ['monster-run','Monster Run','arcade','👾','An arcade-style learning mode where correct answers drive the game mechanic.',['multiple_choice','true_false','typed'],['solo','live'],1,80,[5,18],'universal','active',false,'#65a30d','race'],
  ['galaxy-quest','Galaxy Quest','arcade','🌌','An arcade-style learning mode where correct answers drive the game mechanic.',['multiple_choice','typed','scenario_decision','dialogue'],['solo','assignment'],1,1,[8,30],'universal','active',true,'#4f46e5','board'],

  ['team-battle','Team Battle','classroom','⚔️','A classroom mode designed for live, team or one-screen play.',['multiple_choice','true_false','typed','matching'],['live','one_screen','host_paced'],2,150,[8,35],'universal','active',true,'#dc2626','team'],
  ['mystery-box','Mystery Box','classroom','🎁','A classroom mode designed for live, team or one-screen play.',core,['live','one_screen','host_paced'],2,150,[8,30],'universal','active',false,'#7c3aed','team'],
  ['lucky-tiles','Lucky Tiles','classroom','🍀','A classroom mode designed for live, team or one-screen play.',['multiple_choice','true_false','typed'],['live','one_screen'],2,150,[8,30],'universal','active',false,'#16a34a','board'],
  ['king-of-words','King of Words','classroom','👑','A classroom mode designed for live, team or one-screen play.',['multiple_choice','typed','matching','ordering'],['live','one_screen'],2,120,[10,35],'universal','active',false,'#ca8a04','survival'],
  ['millionaire','Millionaire','classroom','💰','A classroom mode designed for live, team or one-screen play.',['multiple_choice','true_false'],['solo','live','one_screen'],1,100,[8,25],'universal','active',true,'#0f766e','quiz'],
  ['classroom-bingo','Classroom Bingo','classroom','🎯','A classroom mode designed for live, team or one-screen play.',['multiple_choice','matching','typed'],['live','one_screen'],4,200,[10,35],'universal','active',false,'#0ea5e9','board'],
  ['knockout','Knockout','classroom','🥊','A classroom mode designed for live, team or one-screen play.',['multiple_choice','true_false','typed'],['live'],4,150,[8,35],'universal','active',false,'#be123c','survival'],
  ['final-showdown','Final Showdown','classroom','🏆','A classroom mode designed for live, team or one-screen play.',['multiple_choice','true_false','typed','ordering'],['live','one_screen'],2,120,[8,35],'universal','active',false,'#f59e0b','team'],

  ['office-sim','Office Simulator','scenario','🏢','A real-life scenario mode built around decisions, dialogue and practical communication.',['dialogue','scenario_decision','translation','error_correction'],['solo','assignment','host_paced'],1,60,[10,35],'universal','active',true,'#334155','scenario'],
  ['school-day','School Day Simulator','scenario','🏫','A real-life scenario mode built around decisions, dialogue and practical communication.',['dialogue','scenario_decision','translation','ordering'],['solo','assignment','host_paced'],1,80,[10,35],'universal','active',true,'#0ea5e9','scenario'],
  ['travel-quest','Travel Quest','scenario','🧳','A real-life scenario mode built around decisions, dialogue and practical communication.',['dialogue','scenario_decision','audio_choice','translation'],['solo','assignment'],1,1,[10,35],'universal','active',true,'#06b6d4','scenario'],
  ['customer-service','Customer Service Shift','scenario','🎧','A real-life scenario mode built around decisions, dialogue and practical communication.',['dialogue','scenario_decision','audio_choice','error_correction'],['solo','assignment','host_paced'],1,60,[10,35],'universal','active',false,'#0284c7','scenario'],
  ['volunteer-mission','Volunteer Mission','scenario','🤝','A real-life scenario mode built around decisions, dialogue and practical communication.',['dialogue','scenario_decision','ordering','translation'],['solo','assignment','host_paced'],1,80,[10,35],'universal','active',true,'#10b981','scenario'],

  ['tone-battle','Tone Battle','language','🎵','A language-focused mode for vocabulary, sentence structure and practical use.',['audio_choice','multiple_choice','matching'],['solo','live','assignment'],1,80,[5,20],['zh','th'],'active',true,'#ef4444','choice'],
  ['hanzi-match','Hanzi Match','language','🀄','A language-focused mode for vocabulary, sentence structure and practical use.',['matching','multiple_choice'],['solo','assignment'],1,1,[5,20],['zh'],'active',true,'#dc2626','match'],
  ['pinyin-rush','Pinyin Rush','language','🐼','A language-focused mode for vocabulary, sentence structure and practical use.',['multiple_choice','typed','audio_choice'],['solo','live'],1,80,[4,15],['zh'],'active',false,'#f87171','quiz'],
  ['kana-rush','Kana Rush','language','あ','A language-focused mode for vocabulary, sentence structure and practical use.',['multiple_choice','matching','typed'],['solo','live','assignment'],1,80,[4,18],['ja'],'active',true,'#fb7185','quiz'],
  ['kanji-path','Kanji Path','language','漢','A language-focused mode for vocabulary, sentence structure and practical use.',['multiple_choice','matching','typed'],['solo','assignment'],1,1,[6,25],['ja'],'active',false,'#f97316','board'],
  ['hangul-builder','Hangul Builder','language','한','A language-focused mode for vocabulary, sentence structure and practical use.',['matching','ordering','typed'],['solo','assignment'],1,1,[5,20],['ko'],'active',true,'#8b5cf6','builder'],
  ['arabic-script','Arabic Script Quest','language','ع','A language-focused mode for vocabulary, sentence structure and practical use.',['matching','ordering','multiple_choice'],['solo','assignment'],1,1,[5,20],['ar'],'active',true,'#16a34a','builder'],
  ['cyrillic-sprint','Cyrillic Sprint','language','Я','A language-focused mode for vocabulary, sentence structure and practical use.',['matching','multiple_choice','typed'],['solo','assignment'],1,1,[5,20],['ru'],'active',false,'#0284c7','quiz']
].map((x:any)=>({id:x[0],name:x[1],family:x[2],icon:x[3],description:x[4],supportedQuestionTypes:x[5],sessionModes:x[6],minPlayers:x[7],maxPlayers:x[8],durationMinutes:x[9],languages:x[10],status:x[11],featured:x[12],color:x[13],mechanic:x[14],version:'2.0',tags:[x[2],x[14]]}));

export const gameModes=modes;
