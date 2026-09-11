import type { LanguageDefinition } from '../types';

export const languages: LanguageDefinition[] = [
  {code:'en',name:'English',nativeName:'English',icon:'🇬🇧',status:'active',direction:'ltr',accent:'#3b82f6',tts:'en-US',scripts:['Latin'],frameworks:['CEFR','Secondary/High School'],specialties:['Phonics','Stress','Collocation','Workplace English']},
  {code:'zh',name:'Chinese',nativeName:'中文',icon:'🇨🇳',status:'active',direction:'ltr',accent:'#ef4444',tts:'zh-CN',scripts:['Hanzi','Pinyin'],frameworks:['HSK'],specialties:['Hanzi','Pinyin','Tone','Simplified/Traditional']},
  {code:'ja',name:'Japanese',nativeName:'日本語',icon:'🇯🇵',status:'active',direction:'ltr',accent:'#f97316',tts:'ja-JP',scripts:['Hiragana','Katakana','Kanji'],frameworks:['JLPT'],specialties:['Kana','Kanji','Reading']},
  {code:'ko',name:'Korean',nativeName:'한국어',icon:'🇰🇷',status:'active',direction:'ltr',accent:'#8b5cf6',tts:'ko-KR',scripts:['Hangul'],frameworks:['TOPIK'],specialties:['Hangul','Syllable Builder','Honorifics']},
  {code:'fr',name:'French',nativeName:'Français',icon:'🇫🇷',status:'active',direction:'ltr',accent:'#2563eb',tts:'fr-FR',scripts:['Latin'],frameworks:['CEFR','DELF'],specialties:['Gender','Conjugation','Listening']},
  {code:'de',name:'German',nativeName:'Deutsch',icon:'🇩🇪',status:'active',direction:'ltr',accent:'#eab308',tts:'de-DE',scripts:['Latin'],frameworks:['CEFR','Goethe'],specialties:['Cases','Word order','Compound words']},
  {code:'es',name:'Spanish',nativeName:'Español',icon:'🇪🇸',status:'active',direction:'ltr',accent:'#f59e0b',tts:'es-ES',scripts:['Latin'],frameworks:['CEFR','DELE'],specialties:['Conjugation','Gender','Conversation']},
  {code:'it',name:'Italian',nativeName:'Italiano',icon:'🇮🇹',status:'active',direction:'ltr',accent:'#16a34a',tts:'it-IT',scripts:['Latin'],frameworks:['CEFR','CILS'],specialties:['Conjugation','Everyday speech']},
  {code:'pt',name:'Portuguese',nativeName:'Português',icon:'🇵🇹',status:'active',direction:'ltr',accent:'#059669',tts:'pt-PT',scripts:['Latin'],frameworks:['CEFR','CAPLE'],specialties:['Conversation','Pronunciation']},
  {code:'ru',name:'Russian',nativeName:'Русский',icon:'🇷🇺',status:'active',direction:'ltr',accent:'#0ea5e9',tts:'ru-RU',scripts:['Cyrillic'],frameworks:['CEFR','TORFL'],specialties:['Cyrillic','Cases','Aspect']},
  {code:'th',name:'Thai',nativeName:'ไทย',icon:'🇹🇭',status:'active',direction:'ltr',accent:'#ec4899',tts:'th-TH',scripts:['Thai'],frameworks:['Practical'],specialties:['Tones','Script','Daily conversation']},
  {code:'vi',name:'Vietnamese',nativeName:'Tiếng Việt',icon:'🇻🇳',status:'active',direction:'ltr',accent:'#14b8a6',tts:'vi-VN',scripts:['Latin'],frameworks:['Secondary/High School','Practical'],specialties:['Spelling','Grammar','Conversation']},
  {code:'ar',name:'Arabic',nativeName:'العربية',icon:'🇸🇦',status:'active',direction:'rtl',accent:'#22c55e',tts:'ar-SA',scripts:['Arabic'],frameworks:['CEFR-aligned'],specialties:['RTL','Script','Roots']},
  {code:'id',name:'Indonesian',nativeName:'Bahasa Indonesia',icon:'🇮🇩',status:'active',direction:'ltr',accent:'#dc2626',tts:'id-ID',scripts:['Latin'],frameworks:['Practical'],specialties:['Affixes','Conversation']},
  {code:'tr',name:'Turkish',nativeName:'Türkçe',icon:'🇹🇷',status:'active',direction:'ltr',accent:'#be123c',tts:'tr-TR',scripts:['Latin'],frameworks:['CEFR'],specialties:['Agglutination','Vowel harmony','Conversation']}
];

export const languageByCode=(code:string)=>languages.find(l=>l.code===code);
