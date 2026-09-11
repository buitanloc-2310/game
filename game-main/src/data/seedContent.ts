import type { QuestionSet } from '../types';

export const seedQuestionSets: QuestionSet[] = [
  {
    id:'official-en-a1-greetings', title:'English A1 — Greetings', language:'en', level:'A1', topic:'Greetings',
    description:'Bộ câu hỏi nhập môn về chào hỏi, giới thiệu và giao tiếp cơ bản.', isOfficial:true, visibility:'public', updatedAt:'2026-09-11',
    questions:[
      {id:'en1',type:'multiple_choice',prompt:'Which phrase is used to greet someone in the morning?',options:['Good morning','Good night','Goodbye','See you yesterday'],answers:['Good morning'],explanation:'“Good morning” is used in the morning.',difficulty:1,tags:['greeting']},
      {id:'en2',type:'multiple_choice',prompt:'Choose the best reply: “How are you?”',options:['I am fine, thank you.','My name blue.','At seven o’clock.','Because yes.'],answers:['I am fine, thank you.'],difficulty:1},
      {id:'en3',type:'fill_blank',prompt:'Complete: “Nice to ___ you.”',options:['meet','meeting','met','meets'],answers:['meet'],difficulty:1},
      {id:'en4',type:'true_false',prompt:'“See you later” can be used when saying goodbye.',options:['True','False'],answers:['True'],difficulty:1},
      {id:'en5',type:'multiple_choice',prompt:'What does “What is your name?” ask for?',options:['A person’s name','A person’s age','A person’s address','A person’s hobby'],answers:['A person’s name'],difficulty:1},
      {id:'en6',type:'typed',prompt:'Type the English word for “xin chào”.',answers:['hello','hi'],difficulty:1},
      {id:'en7',type:'multiple_choice',prompt:'Choose the polite phrase.',options:['Thank you','Go away now','Give me','No talk'],answers:['Thank you'],difficulty:1},
      {id:'en8',type:'sentence_builder',prompt:'Arrange the words into a correct sentence.',options:['My','name','is','Lan','.'],answers:['My name is Lan .','My name is Lan.'],difficulty:1},
      {id:'en9',type:'multiple_choice',prompt:'Choose the correct response to “Goodbye!”',options:['See you!','Good morning!','I am fifteen.','It is a pen.'],answers:['See you!'],difficulty:1},
      {id:'en10',type:'multiple_choice',prompt:'“Pleased to meet you” means…',options:['Rất vui được gặp bạn','Chúc ngủ ngon','Xin lỗi bạn','Bạn bao nhiêu tuổi?'],answers:['Rất vui được gặp bạn'],difficulty:1}
    ]
  },
  {
    id:'official-en-a2-school', title:'English A2 — School Life', language:'en', level:'A2', topic:'School',
    description:'Từ vựng và cấu trúc cơ bản về trường học, thời khóa biểu và hoạt động học tập.', isOfficial:true, visibility:'public', updatedAt:'2026-09-11',
    questions:[
      {id:'ens1',type:'multiple_choice',prompt:'Where do students usually borrow books?',options:['Library','Canteen','Playground','Laboratory'],answers:['Library']},
      {id:'ens2',type:'multiple_choice',prompt:'Choose the correct sentence.',options:['She studies English every day.','She study English every day.','She studying English every day.','She studies English yesterday.'],answers:['She studies English every day.']},
      {id:'ens3',type:'fill_blank',prompt:'We have Math ___ Monday.',options:['on','in','at','for'],answers:['on']},
      {id:'ens4',type:'typed',prompt:'Type the English word for “bài tập về nhà”.',answers:['homework']},
      {id:'ens5',type:'true_false',prompt:'A laboratory is a place where students can do science experiments.',options:['True','False'],answers:['True']},
      {id:'ens6',type:'multiple_choice',prompt:'Which subject studies the past?',options:['History','Biology','Physics','Art'],answers:['History']},
      {id:'ens7',type:'sentence_builder',prompt:'Build the sentence.',options:['I','usually','go','to','school','by','bus','.'],answers:['I usually go to school by bus .','I usually go to school by bus.']},
      {id:'ens8',type:'multiple_choice',prompt:'“Recess” is…',options:['a short break between classes','a final exam','a school subject','a homework book'],answers:['a short break between classes']},
      {id:'ens9',type:'multiple_choice',prompt:'Which one is a school supply?',options:['Notebook','Sofa','Frying pan','Pillow'],answers:['Notebook']},
      {id:'ens10',type:'fill_blank',prompt:'My teacher ___ very helpful.',options:['is','are','am','be'],answers:['is']}
    ]
  },
  {
    id:'official-zh-hsk1-greetings', title:'中文 HSK 1 — 问候 Greetings', language:'zh', level:'HSK 1', topic:'Greetings',
    description:'Làm quen với chào hỏi, đại từ và những câu giao tiếp đầu tiên trong tiếng Trung.', isOfficial:true, visibility:'public', updatedAt:'2026-09-11',
    questions:[
      {id:'zh1',type:'multiple_choice',prompt:'“你好” nghĩa là gì?',options:['Xin chào','Cảm ơn','Tạm biệt','Xin lỗi'],answers:['Xin chào'],difficulty:1},
      {id:'zh2',type:'multiple_choice',prompt:'Pinyin đúng của “你” là…',options:['nǐ','wǒ','tā','hǎo'],answers:['nǐ'],difficulty:1},
      {id:'zh3',type:'multiple_choice',prompt:'“谢谢” nghĩa là…',options:['Cảm ơn','Không có gì','Hẹn gặp lại','Bạn khỏe không?'],answers:['Cảm ơn'],difficulty:1},
      {id:'zh4',type:'matching',prompt:'Ghép từ với nghĩa.',answers:['你=Bạn','我=Tôi','他=Anh ấy'],pairs:[{left:'你',right:'Bạn'},{left:'我',right:'Tôi'},{left:'他',right:'Anh ấy'}],difficulty:1},
      {id:'zh5',type:'multiple_choice',prompt:'“再见” dùng khi…',options:['Tạm biệt','Chào buổi sáng','Hỏi tên','Cảm ơn'],answers:['Tạm biệt'],difficulty:1},
      {id:'zh6',type:'typed',prompt:'Gõ pinyin có dấu hoặc số thanh cho “好”.',answers:['hǎo','hao3'],difficulty:1},
      {id:'zh7',type:'sentence_builder',prompt:'Sắp xếp thành câu “Tôi rất khỏe”.',options:['我','很','好','。'],answers:['我 很 好 。','我很好。','我 很好。'],difficulty:1},
      {id:'zh8',type:'multiple_choice',prompt:'“你好吗？” gần nghĩa nhất với…',options:['Bạn khỏe không?','Bạn tên gì?','Bạn đi đâu?','Bạn bao nhiêu tuổi?'],answers:['Bạn khỏe không?'],difficulty:1},
      {id:'zh9',type:'true_false',prompt:'“我” có nghĩa là “tôi”.',options:['True','False'],answers:['True'],difficulty:1},
      {id:'zh10',type:'multiple_choice',prompt:'Chọn chữ Hán có nghĩa “tốt/khỏe”.',options:['好','你','我','再'],answers:['好'],difficulty:1}
    ]
  },
  {
    id:'official-zh-hsk1-numbers', title:'中文 HSK 1 — 数字 Numbers', language:'zh', level:'HSK 1', topic:'Numbers',
    description:'Số đếm cơ bản 0–10 và nhận diện chữ Hán số.', isOfficial:true, visibility:'public', updatedAt:'2026-09-11',
    questions:[
      {id:'zhn1',type:'multiple_choice',prompt:'“一” là số mấy?',options:['1','2','3','4'],answers:['1']},
      {id:'zhn2',type:'multiple_choice',prompt:'“三” là số mấy?',options:['2','3','5','8'],answers:['3']},
      {id:'zhn3',type:'typed',prompt:'Gõ pinyin của “八”.',answers:['bā','ba1']},
      {id:'zhn4',type:'matching',prompt:'Ghép chữ số với chữ Hán.',answers:['2=二','5=五','10=十'],pairs:[{left:'2',right:'二'},{left:'5',right:'五'},{left:'10',right:'十'}]},
      {id:'zhn5',type:'multiple_choice',prompt:'Chữ nào là số 7?',options:['七','九','六','四'],answers:['七']},
      {id:'zhn6',type:'true_false',prompt:'“十” có nghĩa là số 10.',options:['True','False'],answers:['True']},
      {id:'zhn7',type:'multiple_choice',prompt:'“九” là…',options:['9','6','4','0'],answers:['9']},
      {id:'zhn8',type:'multiple_choice',prompt:'Pinyin “wǔ” là số…',options:['5','4','8','2'],answers:['5']}
    ]
  },
  {
    id:'official-ja-starter', title:'日本語 Starter — Hiragana', language:'ja', level:'Starter', topic:'Hiragana',
    description:'Nhận diện một số Hiragana cơ bản.', isOfficial:true, visibility:'public', updatedAt:'2026-09-11',
    questions:[
      {id:'ja1',type:'multiple_choice',prompt:'Hiragana nào đọc là “a”?',options:['あ','い','う','え'],answers:['あ']},
      {id:'ja2',type:'multiple_choice',prompt:'“い” đọc là…',options:['i','u','e','o'],answers:['i']},
      {id:'ja3',type:'matching',prompt:'Ghép Hiragana với romaji.',answers:['あ=a','う=u','お=o'],pairs:[{left:'あ',right:'a'},{left:'う',right:'u'},{left:'お',right:'o'}]},
      {id:'ja4',type:'multiple_choice',prompt:'Hiragana nào đọc là “ka”?',options:['か','き','く','け'],answers:['か']},
      {id:'ja5',type:'true_false',prompt:'“こ” đọc là “ko”.',options:['True','False'],answers:['True']},
      {id:'ja6',type:'typed',prompt:'Gõ romaji của “き”.',answers:['ki']}
    ]
  },
  {
    id:'official-ko-starter', title:'한국어 Starter — Hangul', language:'ko', level:'Starter', topic:'Hangul',
    description:'Nhận diện một số ký tự và từ Hangul cơ bản.', isOfficial:true, visibility:'public', updatedAt:'2026-09-11',
    questions:[
      {id:'ko1',type:'multiple_choice',prompt:'“안녕하세요” thường có nghĩa là…',options:['Xin chào','Cảm ơn','Tạm biệt','Xin lỗi'],answers:['Xin chào']},
      {id:'ko2',type:'multiple_choice',prompt:'Ký tự “ㅏ” gần âm nào?',options:['a','o','u','i'],answers:['a']},
      {id:'ko3',type:'multiple_choice',prompt:'“네” thường có nghĩa là…',options:['Vâng / Yes','Không / No','Xin chào','Tôi'],answers:['Vâng / Yes']},
      {id:'ko4',type:'matching',prompt:'Ghép từ với nghĩa.',answers:['네=Vâng','아니요=Không'],pairs:[{left:'네',right:'Vâng'},{left:'아니요',right:'Không'}]},
      {id:'ko5',type:'true_false',prompt:'Hangul là hệ chữ viết của tiếng Hàn.',options:['True','False'],answers:['True']},
      {id:'ko6',type:'typed',prompt:'Gõ romanization đơn giản của “나”.',answers:['na']}
    ]
  }
];
