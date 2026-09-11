import type { QuestionSet } from '../types';

export const seedQuestionSets: QuestionSet[] = [
  {
    "id": "native-en-1",
    "title": "English — Foundation",
    "language": "en",
    "level": "Starter",
    "topic": "English — Foundation",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Build everyday English through listening, sentence building and practical responses.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-en-0-01",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — Good morning.",
        "options": [
          "Good morning.",
          "Thank you very much.",
          "Could you help me, please?",
          "Where is the station?"
        ],
        "answers": [
          "Good morning."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-0-02",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — Thank you very much.",
        "options": [
          "Thank you very much.",
          "Could you help me, please?",
          "Where is the station?",
          "What time does it start?"
        ],
        "answers": [
          "Thank you very much."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-0-03",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — Could you help me, please?",
        "options": [
          "Could you help me, please?",
          "Where is the station?",
          "What time does it start?",
          "I understand."
        ],
        "answers": [
          "Could you help me, please?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-0-04",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — Where is the station?",
        "options": [
          "Where is the station?",
          "What time does it start?",
          "I understand.",
          "Please say that again."
        ],
        "answers": [
          "Where is the station?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-0-05",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — What time does it start?",
        "options": [
          "What time does it start?",
          "I understand.",
          "Please say that again.",
          "See you tomorrow."
        ],
        "answers": [
          "What time does it start?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-0-06",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — I understand.",
        "options": [
          "I understand.",
          "Please say that again.",
          "See you tomorrow.",
          "Good morning."
        ],
        "answers": [
          "I understand."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-0-07",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — Please say that again.",
        "options": [
          "Please say that again.",
          "See you tomorrow.",
          "Good morning.",
          "Thank you very much."
        ],
        "answers": [
          "Please say that again."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-0-08",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — See you tomorrow.",
        "options": [
          "See you tomorrow.",
          "Good morning.",
          "Thank you very much.",
          "Could you help me, please?"
        ],
        "answers": [
          "See you tomorrow."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-0-09",
        "type": "typed",
        "prompt": "Type the expression exactly. — Good morning.",
        "options": [],
        "answers": [
          "Good morning."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-en-0-10",
        "type": "typed",
        "prompt": "Type the expression exactly. — Thank you very much.",
        "options": [],
        "answers": [
          "Thank you very much."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-en-0-11",
        "type": "typed",
        "prompt": "Type the expression exactly. — Could you help me, please?",
        "options": [],
        "answers": [
          "Could you help me, please?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-en-0-12",
        "type": "typed",
        "prompt": "Type the expression exactly. — Where is the station?",
        "options": [],
        "answers": [
          "Where is the station?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-en-0-13",
        "type": "typed",
        "prompt": "Type the expression exactly. — What time does it start?",
        "options": [],
        "answers": [
          "What time does it start?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-en-0-14",
        "type": "audio_choice",
        "prompt": "Listen and choose what you hear.",
        "options": [
          "Could you help me, please?",
          "Where is the station?",
          "What time does it start?",
          "I understand."
        ],
        "answers": [
          "Could you help me, please?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Could you help me, please?",
        "ttsLang": "en-US",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-en-0-15",
        "type": "audio_choice",
        "prompt": "Listen and choose what you hear.",
        "options": [
          "Where is the station?",
          "What time does it start?",
          "I understand.",
          "Please say that again."
        ],
        "answers": [
          "Where is the station?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Where is the station?",
        "ttsLang": "en-US",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-en-0-16",
        "type": "audio_choice",
        "prompt": "Listen and choose what you hear.",
        "options": [
          "What time does it start?",
          "I understand.",
          "Please say that again.",
          "See you tomorrow."
        ],
        "answers": [
          "What time does it start?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "What time does it start?",
        "ttsLang": "en-US",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-en-0-17",
        "type": "audio_choice",
        "prompt": "Listen and choose what you hear.",
        "options": [
          "I understand.",
          "Please say that again.",
          "See you tomorrow.",
          "Good morning."
        ],
        "answers": [
          "I understand."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "I understand.",
        "ttsLang": "en-US",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-en-0-18",
        "type": "audio_choice",
        "prompt": "Listen and choose what you hear.",
        "options": [
          "Please say that again.",
          "See you tomorrow.",
          "Good morning.",
          "Thank you very much."
        ],
        "answers": [
          "Please say that again."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Please say that again.",
        "ttsLang": "en-US",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-en-0-19",
        "type": "fill_blank",
        "prompt": "Complete the expression. — Thank you very ___",
        "options": [
          "much",
          "morning",
          "please",
          "station"
        ],
        "answers": [
          "much"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-en-0-20",
        "type": "fill_blank",
        "prompt": "Complete the expression. — Could you help me, ___",
        "options": [
          "please",
          "morning",
          "much",
          "station"
        ],
        "answers": [
          "please"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-en-0-21",
        "type": "fill_blank",
        "prompt": "Complete the expression. — Where is the ___",
        "options": [
          "station",
          "morning",
          "much",
          "please"
        ],
        "answers": [
          "station"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-en-0-22",
        "type": "fill_blank",
        "prompt": "Complete the expression. — What time does it ___",
        "options": [
          "start",
          "morning",
          "much",
          "please"
        ],
        "answers": [
          "start"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-en-0-23",
        "type": "sentence_builder",
        "prompt": "Put the words in the correct order.",
        "options": [
          "Where",
          "is",
          "the",
          "station"
        ],
        "answers": [
          "Where is the station"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-en-0-24",
        "type": "sentence_builder",
        "prompt": "Put the words in the correct order.",
        "options": [
          "What",
          "time",
          "does",
          "it",
          "start"
        ],
        "answers": [
          "What time does it start"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-en-0-25",
        "type": "sentence_builder",
        "prompt": "Put the words in the correct order.",
        "options": [
          "I",
          "understand"
        ],
        "answers": [
          "I understand"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-en-0-26",
        "type": "sentence_builder",
        "prompt": "Put the words in the correct order.",
        "options": [
          "Please",
          "say",
          "that",
          "again"
        ],
        "answers": [
          "Please say that again"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-en-0-27",
        "type": "scenario_decision",
        "prompt": "Choose the most appropriate response.",
        "options": [
          "What time does it start?",
          "I understand.",
          "Please say that again.",
          "See you tomorrow."
        ],
        "answers": [
          "What time does it start?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-en-0-28",
        "type": "scenario_decision",
        "prompt": "Choose the most appropriate response.",
        "options": [
          "I understand.",
          "Please say that again.",
          "See you tomorrow.",
          "Good morning."
        ],
        "answers": [
          "I understand."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-en-0-29",
        "type": "scenario_decision",
        "prompt": "Choose the most appropriate response.",
        "options": [
          "Please say that again.",
          "See you tomorrow.",
          "Good morning.",
          "Thank you very much."
        ],
        "answers": [
          "Please say that again."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-en-0-30",
        "type": "scenario_decision",
        "prompt": "Choose the most appropriate response.",
        "options": [
          "See you tomorrow.",
          "Good morning.",
          "Thank you very much.",
          "Could you help me, please?"
        ],
        "answers": [
          "See you tomorrow."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-en-2",
    "title": "English — School & Everyday",
    "language": "en",
    "level": "Intermediate",
    "topic": "English — School & Everyday",
    "context": "School & Travel",
    "skill": "Mixed",
    "description": "Practice school, travel and everyday English in realistic situations.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-en-1-01",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — The class starts at eight.",
        "options": [
          "The class starts at eight.",
          "Which room are we using?",
          "I finished my homework.",
          "Could you explain this again?"
        ],
        "answers": [
          "The class starts at eight."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-1-02",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — Which room are we using?",
        "options": [
          "Which room are we using?",
          "I finished my homework.",
          "Could you explain this again?",
          "Please open your book."
        ],
        "answers": [
          "Which room are we using?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-1-03",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — I finished my homework.",
        "options": [
          "I finished my homework.",
          "Could you explain this again?",
          "Please open your book.",
          "The bus is late."
        ],
        "answers": [
          "I finished my homework."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-1-04",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — Could you explain this again?",
        "options": [
          "Could you explain this again?",
          "Please open your book.",
          "The bus is late.",
          "I would like a ticket, please."
        ],
        "answers": [
          "Could you explain this again?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-1-05",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — Please open your book.",
        "options": [
          "Please open your book.",
          "The bus is late.",
          "I would like a ticket, please.",
          "Where can I buy lunch?"
        ],
        "answers": [
          "Please open your book."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-1-06",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — The bus is late.",
        "options": [
          "The bus is late.",
          "I would like a ticket, please.",
          "Where can I buy lunch?",
          "The class starts at eight."
        ],
        "answers": [
          "The bus is late."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-1-07",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — I would like a ticket, please.",
        "options": [
          "I would like a ticket, please.",
          "Where can I buy lunch?",
          "The class starts at eight.",
          "Which room are we using?"
        ],
        "answers": [
          "I would like a ticket, please."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-1-08",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — Where can I buy lunch?",
        "options": [
          "Where can I buy lunch?",
          "The class starts at eight.",
          "Which room are we using?",
          "I finished my homework."
        ],
        "answers": [
          "Where can I buy lunch?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-1-09",
        "type": "typed",
        "prompt": "Type the expression exactly. — The class starts at eight.",
        "options": [],
        "answers": [
          "The class starts at eight."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-en-1-10",
        "type": "typed",
        "prompt": "Type the expression exactly. — Which room are we using?",
        "options": [],
        "answers": [
          "Which room are we using?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-en-1-11",
        "type": "typed",
        "prompt": "Type the expression exactly. — I finished my homework.",
        "options": [],
        "answers": [
          "I finished my homework."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-en-1-12",
        "type": "typed",
        "prompt": "Type the expression exactly. — Could you explain this again?",
        "options": [],
        "answers": [
          "Could you explain this again?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-en-1-13",
        "type": "typed",
        "prompt": "Type the expression exactly. — Please open your book.",
        "options": [],
        "answers": [
          "Please open your book."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-en-1-14",
        "type": "audio_choice",
        "prompt": "Listen and choose what you hear.",
        "options": [
          "I finished my homework.",
          "Could you explain this again?",
          "Please open your book.",
          "The bus is late."
        ],
        "answers": [
          "I finished my homework."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "I finished my homework.",
        "ttsLang": "en-US",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-en-1-15",
        "type": "audio_choice",
        "prompt": "Listen and choose what you hear.",
        "options": [
          "Could you explain this again?",
          "Please open your book.",
          "The bus is late.",
          "I would like a ticket, please."
        ],
        "answers": [
          "Could you explain this again?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Could you explain this again?",
        "ttsLang": "en-US",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-en-1-16",
        "type": "audio_choice",
        "prompt": "Listen and choose what you hear.",
        "options": [
          "Please open your book.",
          "The bus is late.",
          "I would like a ticket, please.",
          "Where can I buy lunch?"
        ],
        "answers": [
          "Please open your book."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Please open your book.",
        "ttsLang": "en-US",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-en-1-17",
        "type": "audio_choice",
        "prompt": "Listen and choose what you hear.",
        "options": [
          "The bus is late.",
          "I would like a ticket, please.",
          "Where can I buy lunch?",
          "The class starts at eight."
        ],
        "answers": [
          "The bus is late."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "The bus is late.",
        "ttsLang": "en-US",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-en-1-18",
        "type": "audio_choice",
        "prompt": "Listen and choose what you hear.",
        "options": [
          "I would like a ticket, please.",
          "Where can I buy lunch?",
          "The class starts at eight.",
          "Which room are we using?"
        ],
        "answers": [
          "I would like a ticket, please."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "I would like a ticket, please.",
        "ttsLang": "en-US",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-en-1-19",
        "type": "fill_blank",
        "prompt": "Complete the expression. — Which room are we ___",
        "options": [
          "using",
          "eight",
          "homework",
          "again"
        ],
        "answers": [
          "using"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-en-1-20",
        "type": "fill_blank",
        "prompt": "Complete the expression. — I finished my ___",
        "options": [
          "homework",
          "eight",
          "using",
          "again"
        ],
        "answers": [
          "homework"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-en-1-21",
        "type": "fill_blank",
        "prompt": "Complete the expression. — Could you explain this ___",
        "options": [
          "again",
          "eight",
          "using",
          "homework"
        ],
        "answers": [
          "again"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-en-1-22",
        "type": "fill_blank",
        "prompt": "Complete the expression. — Please open your ___",
        "options": [
          "book",
          "eight",
          "using",
          "homework"
        ],
        "answers": [
          "book"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-en-1-23",
        "type": "sentence_builder",
        "prompt": "Put the words in the correct order.",
        "options": [
          "Could",
          "you",
          "explain",
          "this",
          "again"
        ],
        "answers": [
          "Could you explain this again"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-en-1-24",
        "type": "sentence_builder",
        "prompt": "Put the words in the correct order.",
        "options": [
          "Please",
          "open",
          "your",
          "book"
        ],
        "answers": [
          "Please open your book"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-en-1-25",
        "type": "sentence_builder",
        "prompt": "Put the words in the correct order.",
        "options": [
          "The",
          "bus",
          "is",
          "late"
        ],
        "answers": [
          "The bus is late"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-en-1-26",
        "type": "sentence_builder",
        "prompt": "Put the words in the correct order.",
        "options": [
          "I",
          "would",
          "like",
          "a",
          "ticket,",
          "please"
        ],
        "answers": [
          "I would like a ticket, please"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-en-1-27",
        "type": "scenario_decision",
        "prompt": "Choose the most appropriate response.",
        "options": [
          "Please open your book.",
          "The bus is late.",
          "I would like a ticket, please.",
          "Where can I buy lunch?"
        ],
        "answers": [
          "Please open your book."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-en-1-28",
        "type": "scenario_decision",
        "prompt": "Choose the most appropriate response.",
        "options": [
          "The bus is late.",
          "I would like a ticket, please.",
          "Where can I buy lunch?",
          "The class starts at eight."
        ],
        "answers": [
          "The bus is late."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-en-1-29",
        "type": "scenario_decision",
        "prompt": "Choose the most appropriate response.",
        "options": [
          "I would like a ticket, please.",
          "Where can I buy lunch?",
          "The class starts at eight.",
          "Which room are we using?"
        ],
        "answers": [
          "I would like a ticket, please."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-en-1-30",
        "type": "scenario_decision",
        "prompt": "Choose the most appropriate response.",
        "options": [
          "Where can I buy lunch?",
          "The class starts at eight.",
          "Which room are we using?",
          "I finished my homework."
        ],
        "answers": [
          "Where can I buy lunch?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-en-3",
    "title": "English — Workplace & Professional",
    "language": "en",
    "level": "Professional",
    "topic": "English — Workplace & Professional",
    "context": "Workplace & Professional",
    "skill": "Mixed",
    "description": "Use professional English for meetings, deadlines, email and customer service.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-en-2-01",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — Could you send the report today?",
        "options": [
          "Could you send the report today?",
          "The meeting starts at three.",
          "Please confirm the deadline.",
          "I need a little more time."
        ],
        "answers": [
          "Could you send the report today?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-2-02",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — The meeting starts at three.",
        "options": [
          "The meeting starts at three.",
          "Please confirm the deadline.",
          "I need a little more time.",
          "I will follow up by email."
        ],
        "answers": [
          "The meeting starts at three."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-2-03",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — Please confirm the deadline.",
        "options": [
          "Please confirm the deadline.",
          "I need a little more time.",
          "I will follow up by email.",
          "Could we reschedule the meeting?"
        ],
        "answers": [
          "Please confirm the deadline."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-2-04",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — I need a little more time.",
        "options": [
          "I need a little more time.",
          "I will follow up by email.",
          "Could we reschedule the meeting?",
          "Thank you for your assistance."
        ],
        "answers": [
          "I need a little more time."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-2-05",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — I will follow up by email.",
        "options": [
          "I will follow up by email.",
          "Could we reschedule the meeting?",
          "Thank you for your assistance.",
          "Please let me know if anything changes."
        ],
        "answers": [
          "I will follow up by email."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-2-06",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — Could we reschedule the meeting?",
        "options": [
          "Could we reschedule the meeting?",
          "Thank you for your assistance.",
          "Please let me know if anything changes.",
          "Could you send the report today?"
        ],
        "answers": [
          "Could we reschedule the meeting?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-2-07",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — Thank you for your assistance.",
        "options": [
          "Thank you for your assistance.",
          "Please let me know if anything changes.",
          "Could you send the report today?",
          "The meeting starts at three."
        ],
        "answers": [
          "Thank you for your assistance."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-2-08",
        "type": "multiple_choice",
        "prompt": "Choose the matching expression. — Please let me know if anything changes.",
        "options": [
          "Please let me know if anything changes.",
          "Could you send the report today?",
          "The meeting starts at three.",
          "Please confirm the deadline."
        ],
        "answers": [
          "Please let me know if anything changes."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-en-2-09",
        "type": "typed",
        "prompt": "Type the expression exactly. — Could you send the report today?",
        "options": [],
        "answers": [
          "Could you send the report today?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-en-2-10",
        "type": "typed",
        "prompt": "Type the expression exactly. — The meeting starts at three.",
        "options": [],
        "answers": [
          "The meeting starts at three."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-en-2-11",
        "type": "typed",
        "prompt": "Type the expression exactly. — Please confirm the deadline.",
        "options": [],
        "answers": [
          "Please confirm the deadline."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-en-2-12",
        "type": "typed",
        "prompt": "Type the expression exactly. — I need a little more time.",
        "options": [],
        "answers": [
          "I need a little more time."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-en-2-13",
        "type": "typed",
        "prompt": "Type the expression exactly. — I will follow up by email.",
        "options": [],
        "answers": [
          "I will follow up by email."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-en-2-14",
        "type": "audio_choice",
        "prompt": "Listen and choose what you hear.",
        "options": [
          "Please confirm the deadline.",
          "I need a little more time.",
          "I will follow up by email.",
          "Could we reschedule the meeting?"
        ],
        "answers": [
          "Please confirm the deadline."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Please confirm the deadline.",
        "ttsLang": "en-US",
        "maxPlays": 3,
        "playbackRate": 1,
        "mediaUrl": "/audio/en-workplace.wav"
      },
      {
        "id": "native-en-2-15",
        "type": "audio_choice",
        "prompt": "Listen and choose what you hear.",
        "options": [
          "I need a little more time.",
          "I will follow up by email.",
          "Could we reschedule the meeting?",
          "Thank you for your assistance."
        ],
        "answers": [
          "I need a little more time."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "I need a little more time.",
        "ttsLang": "en-US",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-en-2-16",
        "type": "audio_choice",
        "prompt": "Listen and choose what you hear.",
        "options": [
          "I will follow up by email.",
          "Could we reschedule the meeting?",
          "Thank you for your assistance.",
          "Please let me know if anything changes."
        ],
        "answers": [
          "I will follow up by email."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "I will follow up by email.",
        "ttsLang": "en-US",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-en-2-17",
        "type": "audio_choice",
        "prompt": "Listen and choose what you hear.",
        "options": [
          "Could we reschedule the meeting?",
          "Thank you for your assistance.",
          "Please let me know if anything changes.",
          "Could you send the report today?"
        ],
        "answers": [
          "Could we reschedule the meeting?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Could we reschedule the meeting?",
        "ttsLang": "en-US",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-en-2-18",
        "type": "audio_choice",
        "prompt": "Listen and choose what you hear.",
        "options": [
          "Thank you for your assistance.",
          "Please let me know if anything changes.",
          "Could you send the report today?",
          "The meeting starts at three."
        ],
        "answers": [
          "Thank you for your assistance."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Thank you for your assistance.",
        "ttsLang": "en-US",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-en-2-19",
        "type": "fill_blank",
        "prompt": "Complete the expression. — The meeting starts at ___",
        "options": [
          "three",
          "today",
          "deadline",
          "time"
        ],
        "answers": [
          "three"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-en-2-20",
        "type": "fill_blank",
        "prompt": "Complete the expression. — Please confirm the ___",
        "options": [
          "deadline",
          "today",
          "three",
          "time"
        ],
        "answers": [
          "deadline"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-en-2-21",
        "type": "fill_blank",
        "prompt": "Complete the expression. — I need a little more ___",
        "options": [
          "time",
          "today",
          "three",
          "deadline"
        ],
        "answers": [
          "time"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-en-2-22",
        "type": "fill_blank",
        "prompt": "Complete the expression. — I will follow up by ___",
        "options": [
          "email",
          "today",
          "three",
          "deadline"
        ],
        "answers": [
          "email"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-en-2-23",
        "type": "sentence_builder",
        "prompt": "Put the words in the correct order.",
        "options": [
          "I",
          "need",
          "a",
          "little",
          "more",
          "time"
        ],
        "answers": [
          "I need a little more time"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-en-2-24",
        "type": "sentence_builder",
        "prompt": "Put the words in the correct order.",
        "options": [
          "I",
          "will",
          "follow",
          "up",
          "by",
          "email"
        ],
        "answers": [
          "I will follow up by email"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-en-2-25",
        "type": "sentence_builder",
        "prompt": "Put the words in the correct order.",
        "options": [
          "Could",
          "we",
          "reschedule",
          "the",
          "meeting"
        ],
        "answers": [
          "Could we reschedule the meeting"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-en-2-26",
        "type": "sentence_builder",
        "prompt": "Put the words in the correct order.",
        "options": [
          "Thank",
          "you",
          "for",
          "your",
          "assistance"
        ],
        "answers": [
          "Thank you for your assistance"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-en-2-27",
        "type": "scenario_decision",
        "prompt": "Choose the most appropriate response.",
        "options": [
          "I will follow up by email.",
          "Could we reschedule the meeting?",
          "Thank you for your assistance.",
          "Please let me know if anything changes."
        ],
        "answers": [
          "I will follow up by email."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-en-2-28",
        "type": "scenario_decision",
        "prompt": "Choose the most appropriate response.",
        "options": [
          "Could we reschedule the meeting?",
          "Thank you for your assistance.",
          "Please let me know if anything changes.",
          "Could you send the report today?"
        ],
        "answers": [
          "Could we reschedule the meeting?"
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-en-2-29",
        "type": "scenario_decision",
        "prompt": "Choose the most appropriate response.",
        "options": [
          "Thank you for your assistance.",
          "Please let me know if anything changes.",
          "Could you send the report today?",
          "The meeting starts at three."
        ],
        "answers": [
          "Thank you for your assistance."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-en-2-30",
        "type": "scenario_decision",
        "prompt": "Choose the most appropriate response.",
        "options": [
          "Please let me know if anything changes.",
          "Could you send the report today?",
          "The meeting starts at three.",
          "Please confirm the deadline."
        ],
        "answers": [
          "Please let me know if anything changes."
        ],
        "explanation": "Review the expression in context.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-vi-1",
    "title": "Tiếng Việt — Nền tảng",
    "language": "vi",
    "level": "Starter",
    "topic": "Tiếng Việt — Nền tảng",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Luyện tiếng Việt hằng ngày qua nghe, sắp xếp câu và phản hồi thực tế.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-vi-0-01",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Chào buổi sáng.",
        "options": [
          "Chào buổi sáng.",
          "Cảm ơn bạn rất nhiều.",
          "Bạn có thể giúp tôi được không?",
          "Nhà ga ở đâu?"
        ],
        "answers": [
          "Chào buổi sáng."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-0-02",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Cảm ơn bạn rất nhiều.",
        "options": [
          "Cảm ơn bạn rất nhiều.",
          "Bạn có thể giúp tôi được không?",
          "Nhà ga ở đâu?",
          "Mấy giờ bắt đầu?"
        ],
        "answers": [
          "Cảm ơn bạn rất nhiều."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-0-03",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Bạn có thể giúp tôi được không?",
        "options": [
          "Bạn có thể giúp tôi được không?",
          "Nhà ga ở đâu?",
          "Mấy giờ bắt đầu?",
          "Tôi hiểu rồi."
        ],
        "answers": [
          "Bạn có thể giúp tôi được không?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-0-04",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Nhà ga ở đâu?",
        "options": [
          "Nhà ga ở đâu?",
          "Mấy giờ bắt đầu?",
          "Tôi hiểu rồi.",
          "Bạn vui lòng nói lại được không?"
        ],
        "answers": [
          "Nhà ga ở đâu?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-0-05",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Mấy giờ bắt đầu?",
        "options": [
          "Mấy giờ bắt đầu?",
          "Tôi hiểu rồi.",
          "Bạn vui lòng nói lại được không?",
          "Hẹn gặp bạn ngày mai."
        ],
        "answers": [
          "Mấy giờ bắt đầu?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-0-06",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Tôi hiểu rồi.",
        "options": [
          "Tôi hiểu rồi.",
          "Bạn vui lòng nói lại được không?",
          "Hẹn gặp bạn ngày mai.",
          "Chào buổi sáng."
        ],
        "answers": [
          "Tôi hiểu rồi."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-0-07",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Bạn vui lòng nói lại được không?",
        "options": [
          "Bạn vui lòng nói lại được không?",
          "Hẹn gặp bạn ngày mai.",
          "Chào buổi sáng.",
          "Cảm ơn bạn rất nhiều."
        ],
        "answers": [
          "Bạn vui lòng nói lại được không?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-0-08",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Hẹn gặp bạn ngày mai.",
        "options": [
          "Hẹn gặp bạn ngày mai.",
          "Chào buổi sáng.",
          "Cảm ơn bạn rất nhiều.",
          "Bạn có thể giúp tôi được không?"
        ],
        "answers": [
          "Hẹn gặp bạn ngày mai."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-0-09",
        "type": "typed",
        "prompt": "Gõ lại chính xác câu sau. — Chào buổi sáng.",
        "options": [],
        "answers": [
          "Chào buổi sáng."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-vi-0-10",
        "type": "typed",
        "prompt": "Gõ lại chính xác câu sau. — Cảm ơn bạn rất nhiều.",
        "options": [],
        "answers": [
          "Cảm ơn bạn rất nhiều."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-vi-0-11",
        "type": "typed",
        "prompt": "Gõ lại chính xác câu sau. — Bạn có thể giúp tôi được không?",
        "options": [],
        "answers": [
          "Bạn có thể giúp tôi được không?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-vi-0-12",
        "type": "typed",
        "prompt": "Gõ lại chính xác câu sau. — Nhà ga ở đâu?",
        "options": [],
        "answers": [
          "Nhà ga ở đâu?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-vi-0-13",
        "type": "typed",
        "prompt": "Gõ lại chính xác câu sau. — Mấy giờ bắt đầu?",
        "options": [],
        "answers": [
          "Mấy giờ bắt đầu?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-vi-0-14",
        "type": "audio_choice",
        "prompt": "Nghe và chọn câu bạn nghe được.",
        "options": [
          "Bạn có thể giúp tôi được không?",
          "Nhà ga ở đâu?",
          "Mấy giờ bắt đầu?",
          "Tôi hiểu rồi."
        ],
        "answers": [
          "Bạn có thể giúp tôi được không?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Bạn có thể giúp tôi được không?",
        "ttsLang": "vi-VN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-vi-0-15",
        "type": "audio_choice",
        "prompt": "Nghe và chọn câu bạn nghe được.",
        "options": [
          "Nhà ga ở đâu?",
          "Mấy giờ bắt đầu?",
          "Tôi hiểu rồi.",
          "Bạn vui lòng nói lại được không?"
        ],
        "answers": [
          "Nhà ga ở đâu?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Nhà ga ở đâu?",
        "ttsLang": "vi-VN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-vi-0-16",
        "type": "audio_choice",
        "prompt": "Nghe và chọn câu bạn nghe được.",
        "options": [
          "Mấy giờ bắt đầu?",
          "Tôi hiểu rồi.",
          "Bạn vui lòng nói lại được không?",
          "Hẹn gặp bạn ngày mai."
        ],
        "answers": [
          "Mấy giờ bắt đầu?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Mấy giờ bắt đầu?",
        "ttsLang": "vi-VN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-vi-0-17",
        "type": "audio_choice",
        "prompt": "Nghe và chọn câu bạn nghe được.",
        "options": [
          "Tôi hiểu rồi.",
          "Bạn vui lòng nói lại được không?",
          "Hẹn gặp bạn ngày mai.",
          "Chào buổi sáng."
        ],
        "answers": [
          "Tôi hiểu rồi."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Tôi hiểu rồi.",
        "ttsLang": "vi-VN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-vi-0-18",
        "type": "audio_choice",
        "prompt": "Nghe và chọn câu bạn nghe được.",
        "options": [
          "Bạn vui lòng nói lại được không?",
          "Hẹn gặp bạn ngày mai.",
          "Chào buổi sáng.",
          "Cảm ơn bạn rất nhiều."
        ],
        "answers": [
          "Bạn vui lòng nói lại được không?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Bạn vui lòng nói lại được không?",
        "ttsLang": "vi-VN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-vi-0-19",
        "type": "fill_blank",
        "prompt": "Hoàn thành câu. — Cảm ơn bạn rất ___",
        "options": [
          "nhiều",
          "sáng",
          "không",
          "đâu"
        ],
        "answers": [
          "nhiều"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-vi-0-20",
        "type": "fill_blank",
        "prompt": "Hoàn thành câu. — Bạn có thể giúp tôi được ___",
        "options": [
          "không",
          "sáng",
          "nhiều",
          "đâu"
        ],
        "answers": [
          "không"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-vi-0-21",
        "type": "fill_blank",
        "prompt": "Hoàn thành câu. — Nhà ga ở ___",
        "options": [
          "đâu",
          "sáng",
          "nhiều",
          "không"
        ],
        "answers": [
          "đâu"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-vi-0-22",
        "type": "fill_blank",
        "prompt": "Hoàn thành câu. — Mấy giờ bắt ___",
        "options": [
          "đầu",
          "sáng",
          "nhiều",
          "không"
        ],
        "answers": [
          "đầu"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-vi-0-23",
        "type": "sentence_builder",
        "prompt": "Sắp xếp các từ theo đúng thứ tự.",
        "options": [
          "Nhà",
          "ga",
          "ở",
          "đâu"
        ],
        "answers": [
          "Nhà ga ở đâu"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-vi-0-24",
        "type": "sentence_builder",
        "prompt": "Sắp xếp các từ theo đúng thứ tự.",
        "options": [
          "Mấy",
          "giờ",
          "bắt",
          "đầu"
        ],
        "answers": [
          "Mấy giờ bắt đầu"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-vi-0-25",
        "type": "sentence_builder",
        "prompt": "Sắp xếp các từ theo đúng thứ tự.",
        "options": [
          "Tôi",
          "hiểu",
          "rồi"
        ],
        "answers": [
          "Tôi hiểu rồi"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-vi-0-26",
        "type": "sentence_builder",
        "prompt": "Sắp xếp các từ theo đúng thứ tự.",
        "options": [
          "Bạn",
          "vui",
          "lòng",
          "nói",
          "lại",
          "được",
          "không"
        ],
        "answers": [
          "Bạn vui lòng nói lại được không"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-vi-0-27",
        "type": "scenario_decision",
        "prompt": "Chọn cách phản hồi phù hợp nhất.",
        "options": [
          "Mấy giờ bắt đầu?",
          "Tôi hiểu rồi.",
          "Bạn vui lòng nói lại được không?",
          "Hẹn gặp bạn ngày mai."
        ],
        "answers": [
          "Mấy giờ bắt đầu?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-vi-0-28",
        "type": "scenario_decision",
        "prompt": "Chọn cách phản hồi phù hợp nhất.",
        "options": [
          "Tôi hiểu rồi.",
          "Bạn vui lòng nói lại được không?",
          "Hẹn gặp bạn ngày mai.",
          "Chào buổi sáng."
        ],
        "answers": [
          "Tôi hiểu rồi."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-vi-0-29",
        "type": "scenario_decision",
        "prompt": "Chọn cách phản hồi phù hợp nhất.",
        "options": [
          "Bạn vui lòng nói lại được không?",
          "Hẹn gặp bạn ngày mai.",
          "Chào buổi sáng.",
          "Cảm ơn bạn rất nhiều."
        ],
        "answers": [
          "Bạn vui lòng nói lại được không?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-vi-0-30",
        "type": "scenario_decision",
        "prompt": "Chọn cách phản hồi phù hợp nhất.",
        "options": [
          "Hẹn gặp bạn ngày mai.",
          "Chào buổi sáng.",
          "Cảm ơn bạn rất nhiều.",
          "Bạn có thể giúp tôi được không?"
        ],
        "answers": [
          "Hẹn gặp bạn ngày mai."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-vi-2",
    "title": "Tiếng Việt — Trường học & Đời sống",
    "language": "vi",
    "level": "Intermediate",
    "topic": "Tiếng Việt — Trường học & Đời sống",
    "context": "School & Travel",
    "skill": "Mixed",
    "description": "Luyện tiếng Việt trong trường học, đi lại và sinh hoạt hằng ngày.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-vi-1-01",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Lớp học bắt đầu lúc tám giờ.",
        "options": [
          "Lớp học bắt đầu lúc tám giờ.",
          "Chúng ta học ở phòng nào?",
          "Tôi đã làm xong bài tập về nhà.",
          "Bạn có thể giải thích lại được không?"
        ],
        "answers": [
          "Lớp học bắt đầu lúc tám giờ."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-1-02",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Chúng ta học ở phòng nào?",
        "options": [
          "Chúng ta học ở phòng nào?",
          "Tôi đã làm xong bài tập về nhà.",
          "Bạn có thể giải thích lại được không?",
          "Vui lòng mở sách."
        ],
        "answers": [
          "Chúng ta học ở phòng nào?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-1-03",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Tôi đã làm xong bài tập về nhà.",
        "options": [
          "Tôi đã làm xong bài tập về nhà.",
          "Bạn có thể giải thích lại được không?",
          "Vui lòng mở sách.",
          "Xe buýt đến muộn."
        ],
        "answers": [
          "Tôi đã làm xong bài tập về nhà."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-1-04",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Bạn có thể giải thích lại được không?",
        "options": [
          "Bạn có thể giải thích lại được không?",
          "Vui lòng mở sách.",
          "Xe buýt đến muộn.",
          "Cho tôi mua một vé."
        ],
        "answers": [
          "Bạn có thể giải thích lại được không?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-1-05",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Vui lòng mở sách.",
        "options": [
          "Vui lòng mở sách.",
          "Xe buýt đến muộn.",
          "Cho tôi mua một vé.",
          "Tôi có thể mua bữa trưa ở đâu?"
        ],
        "answers": [
          "Vui lòng mở sách."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-1-06",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Xe buýt đến muộn.",
        "options": [
          "Xe buýt đến muộn.",
          "Cho tôi mua một vé.",
          "Tôi có thể mua bữa trưa ở đâu?",
          "Lớp học bắt đầu lúc tám giờ."
        ],
        "answers": [
          "Xe buýt đến muộn."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-1-07",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Cho tôi mua một vé.",
        "options": [
          "Cho tôi mua một vé.",
          "Tôi có thể mua bữa trưa ở đâu?",
          "Lớp học bắt đầu lúc tám giờ.",
          "Chúng ta học ở phòng nào?"
        ],
        "answers": [
          "Cho tôi mua một vé."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-1-08",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Tôi có thể mua bữa trưa ở đâu?",
        "options": [
          "Tôi có thể mua bữa trưa ở đâu?",
          "Lớp học bắt đầu lúc tám giờ.",
          "Chúng ta học ở phòng nào?",
          "Tôi đã làm xong bài tập về nhà."
        ],
        "answers": [
          "Tôi có thể mua bữa trưa ở đâu?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-1-09",
        "type": "typed",
        "prompt": "Gõ lại chính xác câu sau. — Lớp học bắt đầu lúc tám giờ.",
        "options": [],
        "answers": [
          "Lớp học bắt đầu lúc tám giờ."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-vi-1-10",
        "type": "typed",
        "prompt": "Gõ lại chính xác câu sau. — Chúng ta học ở phòng nào?",
        "options": [],
        "answers": [
          "Chúng ta học ở phòng nào?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-vi-1-11",
        "type": "typed",
        "prompt": "Gõ lại chính xác câu sau. — Tôi đã làm xong bài tập về nhà.",
        "options": [],
        "answers": [
          "Tôi đã làm xong bài tập về nhà."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-vi-1-12",
        "type": "typed",
        "prompt": "Gõ lại chính xác câu sau. — Bạn có thể giải thích lại được không?",
        "options": [],
        "answers": [
          "Bạn có thể giải thích lại được không?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-vi-1-13",
        "type": "typed",
        "prompt": "Gõ lại chính xác câu sau. — Vui lòng mở sách.",
        "options": [],
        "answers": [
          "Vui lòng mở sách."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-vi-1-14",
        "type": "audio_choice",
        "prompt": "Nghe và chọn câu bạn nghe được.",
        "options": [
          "Tôi đã làm xong bài tập về nhà.",
          "Bạn có thể giải thích lại được không?",
          "Vui lòng mở sách.",
          "Xe buýt đến muộn."
        ],
        "answers": [
          "Tôi đã làm xong bài tập về nhà."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Tôi đã làm xong bài tập về nhà.",
        "ttsLang": "vi-VN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-vi-1-15",
        "type": "audio_choice",
        "prompt": "Nghe và chọn câu bạn nghe được.",
        "options": [
          "Bạn có thể giải thích lại được không?",
          "Vui lòng mở sách.",
          "Xe buýt đến muộn.",
          "Cho tôi mua một vé."
        ],
        "answers": [
          "Bạn có thể giải thích lại được không?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Bạn có thể giải thích lại được không?",
        "ttsLang": "vi-VN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-vi-1-16",
        "type": "audio_choice",
        "prompt": "Nghe và chọn câu bạn nghe được.",
        "options": [
          "Vui lòng mở sách.",
          "Xe buýt đến muộn.",
          "Cho tôi mua một vé.",
          "Tôi có thể mua bữa trưa ở đâu?"
        ],
        "answers": [
          "Vui lòng mở sách."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Vui lòng mở sách.",
        "ttsLang": "vi-VN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-vi-1-17",
        "type": "audio_choice",
        "prompt": "Nghe và chọn câu bạn nghe được.",
        "options": [
          "Xe buýt đến muộn.",
          "Cho tôi mua một vé.",
          "Tôi có thể mua bữa trưa ở đâu?",
          "Lớp học bắt đầu lúc tám giờ."
        ],
        "answers": [
          "Xe buýt đến muộn."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Xe buýt đến muộn.",
        "ttsLang": "vi-VN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-vi-1-18",
        "type": "audio_choice",
        "prompt": "Nghe và chọn câu bạn nghe được.",
        "options": [
          "Cho tôi mua một vé.",
          "Tôi có thể mua bữa trưa ở đâu?",
          "Lớp học bắt đầu lúc tám giờ.",
          "Chúng ta học ở phòng nào?"
        ],
        "answers": [
          "Cho tôi mua một vé."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Cho tôi mua một vé.",
        "ttsLang": "vi-VN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-vi-1-19",
        "type": "fill_blank",
        "prompt": "Hoàn thành câu. — Chúng ta học ở phòng ___",
        "options": [
          "nào",
          "giờ",
          "nhà",
          "không"
        ],
        "answers": [
          "nào"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-vi-1-20",
        "type": "fill_blank",
        "prompt": "Hoàn thành câu. — Tôi đã làm xong bài tập về ___",
        "options": [
          "nhà",
          "giờ",
          "nào",
          "không"
        ],
        "answers": [
          "nhà"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-vi-1-21",
        "type": "fill_blank",
        "prompt": "Hoàn thành câu. — Bạn có thể giải thích lại được ___",
        "options": [
          "không",
          "giờ",
          "nào",
          "nhà"
        ],
        "answers": [
          "không"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-vi-1-22",
        "type": "fill_blank",
        "prompt": "Hoàn thành câu. — Vui lòng mở ___",
        "options": [
          "sách",
          "giờ",
          "nào",
          "nhà"
        ],
        "answers": [
          "sách"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-vi-1-23",
        "type": "sentence_builder",
        "prompt": "Sắp xếp các từ theo đúng thứ tự.",
        "options": [
          "Bạn",
          "có",
          "thể",
          "giải",
          "thích",
          "lại",
          "được",
          "không"
        ],
        "answers": [
          "Bạn có thể giải thích lại được không"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-vi-1-24",
        "type": "sentence_builder",
        "prompt": "Sắp xếp các từ theo đúng thứ tự.",
        "options": [
          "Vui",
          "lòng",
          "mở",
          "sách"
        ],
        "answers": [
          "Vui lòng mở sách"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-vi-1-25",
        "type": "sentence_builder",
        "prompt": "Sắp xếp các từ theo đúng thứ tự.",
        "options": [
          "Xe",
          "buýt",
          "đến",
          "muộn"
        ],
        "answers": [
          "Xe buýt đến muộn"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-vi-1-26",
        "type": "sentence_builder",
        "prompt": "Sắp xếp các từ theo đúng thứ tự.",
        "options": [
          "Cho",
          "tôi",
          "mua",
          "một",
          "vé"
        ],
        "answers": [
          "Cho tôi mua một vé"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-vi-1-27",
        "type": "scenario_decision",
        "prompt": "Chọn cách phản hồi phù hợp nhất.",
        "options": [
          "Vui lòng mở sách.",
          "Xe buýt đến muộn.",
          "Cho tôi mua một vé.",
          "Tôi có thể mua bữa trưa ở đâu?"
        ],
        "answers": [
          "Vui lòng mở sách."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-vi-1-28",
        "type": "scenario_decision",
        "prompt": "Chọn cách phản hồi phù hợp nhất.",
        "options": [
          "Xe buýt đến muộn.",
          "Cho tôi mua một vé.",
          "Tôi có thể mua bữa trưa ở đâu?",
          "Lớp học bắt đầu lúc tám giờ."
        ],
        "answers": [
          "Xe buýt đến muộn."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-vi-1-29",
        "type": "scenario_decision",
        "prompt": "Chọn cách phản hồi phù hợp nhất.",
        "options": [
          "Cho tôi mua một vé.",
          "Tôi có thể mua bữa trưa ở đâu?",
          "Lớp học bắt đầu lúc tám giờ.",
          "Chúng ta học ở phòng nào?"
        ],
        "answers": [
          "Cho tôi mua một vé."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-vi-1-30",
        "type": "scenario_decision",
        "prompt": "Chọn cách phản hồi phù hợp nhất.",
        "options": [
          "Tôi có thể mua bữa trưa ở đâu?",
          "Lớp học bắt đầu lúc tám giờ.",
          "Chúng ta học ở phòng nào?",
          "Tôi đã làm xong bài tập về nhà."
        ],
        "answers": [
          "Tôi có thể mua bữa trưa ở đâu?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-vi-3",
    "title": "Tiếng Việt — Công việc & Chuyên nghiệp",
    "language": "vi",
    "level": "Professional",
    "topic": "Tiếng Việt — Công việc & Chuyên nghiệp",
    "context": "Workplace & Professional",
    "skill": "Mixed",
    "description": "Luyện tiếng Việt trong môi trường làm việc, họp, email và dịch vụ khách hàng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-vi-2-01",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Bạn có thể gửi báo cáo hôm nay không?",
        "options": [
          "Bạn có thể gửi báo cáo hôm nay không?",
          "Cuộc họp bắt đầu lúc ba giờ.",
          "Vui lòng xác nhận thời hạn.",
          "Tôi cần thêm một chút thời gian."
        ],
        "answers": [
          "Bạn có thể gửi báo cáo hôm nay không?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-2-02",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Cuộc họp bắt đầu lúc ba giờ.",
        "options": [
          "Cuộc họp bắt đầu lúc ba giờ.",
          "Vui lòng xác nhận thời hạn.",
          "Tôi cần thêm một chút thời gian.",
          "Tôi sẽ phản hồi qua email."
        ],
        "answers": [
          "Cuộc họp bắt đầu lúc ba giờ."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-2-03",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Vui lòng xác nhận thời hạn.",
        "options": [
          "Vui lòng xác nhận thời hạn.",
          "Tôi cần thêm một chút thời gian.",
          "Tôi sẽ phản hồi qua email.",
          "Chúng ta có thể đổi lịch họp không?"
        ],
        "answers": [
          "Vui lòng xác nhận thời hạn."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-2-04",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Tôi cần thêm một chút thời gian.",
        "options": [
          "Tôi cần thêm một chút thời gian.",
          "Tôi sẽ phản hồi qua email.",
          "Chúng ta có thể đổi lịch họp không?",
          "Cảm ơn bạn đã hỗ trợ."
        ],
        "answers": [
          "Tôi cần thêm một chút thời gian."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-2-05",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Tôi sẽ phản hồi qua email.",
        "options": [
          "Tôi sẽ phản hồi qua email.",
          "Chúng ta có thể đổi lịch họp không?",
          "Cảm ơn bạn đã hỗ trợ.",
          "Vui lòng cho tôi biết nếu có thay đổi."
        ],
        "answers": [
          "Tôi sẽ phản hồi qua email."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-2-06",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Chúng ta có thể đổi lịch họp không?",
        "options": [
          "Chúng ta có thể đổi lịch họp không?",
          "Cảm ơn bạn đã hỗ trợ.",
          "Vui lòng cho tôi biết nếu có thay đổi.",
          "Bạn có thể gửi báo cáo hôm nay không?"
        ],
        "answers": [
          "Chúng ta có thể đổi lịch họp không?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-2-07",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Cảm ơn bạn đã hỗ trợ.",
        "options": [
          "Cảm ơn bạn đã hỗ trợ.",
          "Vui lòng cho tôi biết nếu có thay đổi.",
          "Bạn có thể gửi báo cáo hôm nay không?",
          "Cuộc họp bắt đầu lúc ba giờ."
        ],
        "answers": [
          "Cảm ơn bạn đã hỗ trợ."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-2-08",
        "type": "multiple_choice",
        "prompt": "Chọn câu phù hợp. — Vui lòng cho tôi biết nếu có thay đổi.",
        "options": [
          "Vui lòng cho tôi biết nếu có thay đổi.",
          "Bạn có thể gửi báo cáo hôm nay không?",
          "Cuộc họp bắt đầu lúc ba giờ.",
          "Vui lòng xác nhận thời hạn."
        ],
        "answers": [
          "Vui lòng cho tôi biết nếu có thay đổi."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-vi-2-09",
        "type": "typed",
        "prompt": "Gõ lại chính xác câu sau. — Bạn có thể gửi báo cáo hôm nay không?",
        "options": [],
        "answers": [
          "Bạn có thể gửi báo cáo hôm nay không?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-vi-2-10",
        "type": "typed",
        "prompt": "Gõ lại chính xác câu sau. — Cuộc họp bắt đầu lúc ba giờ.",
        "options": [],
        "answers": [
          "Cuộc họp bắt đầu lúc ba giờ."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-vi-2-11",
        "type": "typed",
        "prompt": "Gõ lại chính xác câu sau. — Vui lòng xác nhận thời hạn.",
        "options": [],
        "answers": [
          "Vui lòng xác nhận thời hạn."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-vi-2-12",
        "type": "typed",
        "prompt": "Gõ lại chính xác câu sau. — Tôi cần thêm một chút thời gian.",
        "options": [],
        "answers": [
          "Tôi cần thêm một chút thời gian."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-vi-2-13",
        "type": "typed",
        "prompt": "Gõ lại chính xác câu sau. — Tôi sẽ phản hồi qua email.",
        "options": [],
        "answers": [
          "Tôi sẽ phản hồi qua email."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-vi-2-14",
        "type": "audio_choice",
        "prompt": "Nghe và chọn câu bạn nghe được.",
        "options": [
          "Vui lòng xác nhận thời hạn.",
          "Tôi cần thêm một chút thời gian.",
          "Tôi sẽ phản hồi qua email.",
          "Chúng ta có thể đổi lịch họp không?"
        ],
        "answers": [
          "Vui lòng xác nhận thời hạn."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Vui lòng xác nhận thời hạn.",
        "ttsLang": "vi-VN",
        "maxPlays": 3,
        "playbackRate": 1,
        "mediaUrl": "/audio/vi-workplace.wav"
      },
      {
        "id": "native-vi-2-15",
        "type": "audio_choice",
        "prompt": "Nghe và chọn câu bạn nghe được.",
        "options": [
          "Tôi cần thêm một chút thời gian.",
          "Tôi sẽ phản hồi qua email.",
          "Chúng ta có thể đổi lịch họp không?",
          "Cảm ơn bạn đã hỗ trợ."
        ],
        "answers": [
          "Tôi cần thêm một chút thời gian."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Tôi cần thêm một chút thời gian.",
        "ttsLang": "vi-VN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-vi-2-16",
        "type": "audio_choice",
        "prompt": "Nghe và chọn câu bạn nghe được.",
        "options": [
          "Tôi sẽ phản hồi qua email.",
          "Chúng ta có thể đổi lịch họp không?",
          "Cảm ơn bạn đã hỗ trợ.",
          "Vui lòng cho tôi biết nếu có thay đổi."
        ],
        "answers": [
          "Tôi sẽ phản hồi qua email."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Tôi sẽ phản hồi qua email.",
        "ttsLang": "vi-VN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-vi-2-17",
        "type": "audio_choice",
        "prompt": "Nghe và chọn câu bạn nghe được.",
        "options": [
          "Chúng ta có thể đổi lịch họp không?",
          "Cảm ơn bạn đã hỗ trợ.",
          "Vui lòng cho tôi biết nếu có thay đổi.",
          "Bạn có thể gửi báo cáo hôm nay không?"
        ],
        "answers": [
          "Chúng ta có thể đổi lịch họp không?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Chúng ta có thể đổi lịch họp không?",
        "ttsLang": "vi-VN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-vi-2-18",
        "type": "audio_choice",
        "prompt": "Nghe và chọn câu bạn nghe được.",
        "options": [
          "Cảm ơn bạn đã hỗ trợ.",
          "Vui lòng cho tôi biết nếu có thay đổi.",
          "Bạn có thể gửi báo cáo hôm nay không?",
          "Cuộc họp bắt đầu lúc ba giờ."
        ],
        "answers": [
          "Cảm ơn bạn đã hỗ trợ."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Cảm ơn bạn đã hỗ trợ.",
        "ttsLang": "vi-VN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-vi-2-19",
        "type": "fill_blank",
        "prompt": "Hoàn thành câu. — Cuộc họp bắt đầu lúc ba ___",
        "options": [
          "giờ",
          "không",
          "hạn",
          "gian"
        ],
        "answers": [
          "giờ"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-vi-2-20",
        "type": "fill_blank",
        "prompt": "Hoàn thành câu. — Vui lòng xác nhận thời ___",
        "options": [
          "hạn",
          "không",
          "giờ",
          "gian"
        ],
        "answers": [
          "hạn"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-vi-2-21",
        "type": "fill_blank",
        "prompt": "Hoàn thành câu. — Tôi cần thêm một chút thời ___",
        "options": [
          "gian",
          "không",
          "giờ",
          "hạn"
        ],
        "answers": [
          "gian"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-vi-2-22",
        "type": "fill_blank",
        "prompt": "Hoàn thành câu. — Tôi sẽ phản hồi qua ___",
        "options": [
          "email",
          "không",
          "giờ",
          "hạn"
        ],
        "answers": [
          "email"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-vi-2-23",
        "type": "sentence_builder",
        "prompt": "Sắp xếp các từ theo đúng thứ tự.",
        "options": [
          "Tôi",
          "cần",
          "thêm",
          "một",
          "chút",
          "thời",
          "gian"
        ],
        "answers": [
          "Tôi cần thêm một chút thời gian"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-vi-2-24",
        "type": "sentence_builder",
        "prompt": "Sắp xếp các từ theo đúng thứ tự.",
        "options": [
          "Tôi",
          "sẽ",
          "phản",
          "hồi",
          "qua",
          "email"
        ],
        "answers": [
          "Tôi sẽ phản hồi qua email"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-vi-2-25",
        "type": "sentence_builder",
        "prompt": "Sắp xếp các từ theo đúng thứ tự.",
        "options": [
          "Chúng",
          "ta",
          "có",
          "thể",
          "đổi",
          "lịch",
          "họp",
          "không"
        ],
        "answers": [
          "Chúng ta có thể đổi lịch họp không"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-vi-2-26",
        "type": "sentence_builder",
        "prompt": "Sắp xếp các từ theo đúng thứ tự.",
        "options": [
          "Cảm",
          "ơn",
          "bạn",
          "đã",
          "hỗ",
          "trợ"
        ],
        "answers": [
          "Cảm ơn bạn đã hỗ trợ"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-vi-2-27",
        "type": "scenario_decision",
        "prompt": "Chọn cách phản hồi phù hợp nhất.",
        "options": [
          "Tôi sẽ phản hồi qua email.",
          "Chúng ta có thể đổi lịch họp không?",
          "Cảm ơn bạn đã hỗ trợ.",
          "Vui lòng cho tôi biết nếu có thay đổi."
        ],
        "answers": [
          "Tôi sẽ phản hồi qua email."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-vi-2-28",
        "type": "scenario_decision",
        "prompt": "Chọn cách phản hồi phù hợp nhất.",
        "options": [
          "Chúng ta có thể đổi lịch họp không?",
          "Cảm ơn bạn đã hỗ trợ.",
          "Vui lòng cho tôi biết nếu có thay đổi.",
          "Bạn có thể gửi báo cáo hôm nay không?"
        ],
        "answers": [
          "Chúng ta có thể đổi lịch họp không?"
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-vi-2-29",
        "type": "scenario_decision",
        "prompt": "Chọn cách phản hồi phù hợp nhất.",
        "options": [
          "Cảm ơn bạn đã hỗ trợ.",
          "Vui lòng cho tôi biết nếu có thay đổi.",
          "Bạn có thể gửi báo cáo hôm nay không?",
          "Cuộc họp bắt đầu lúc ba giờ."
        ],
        "answers": [
          "Cảm ơn bạn đã hỗ trợ."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-vi-2-30",
        "type": "scenario_decision",
        "prompt": "Chọn cách phản hồi phù hợp nhất.",
        "options": [
          "Vui lòng cho tôi biết nếu có thay đổi.",
          "Bạn có thể gửi báo cáo hôm nay không?",
          "Cuộc họp bắt đầu lúc ba giờ.",
          "Vui lòng xác nhận thời hạn."
        ],
        "answers": [
          "Vui lòng cho tôi biết nếu có thay đổi."
        ],
        "explanation": "Xem lại câu trong đúng ngữ cảnh.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-zh-1",
    "title": "中文 — 基础",
    "language": "zh",
    "level": "Starter",
    "topic": "中文 — 基础",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "通过听力、句子排序和真实交流练习基础中文。",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-zh-0-01",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 早上好。",
        "options": [
          "早上好。",
          "非常感谢。",
          "你可以帮我吗？",
          "车站在哪里？"
        ],
        "answers": [
          "早上好。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-0-02",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 非常感谢。",
        "options": [
          "非常感谢。",
          "你可以帮我吗？",
          "车站在哪里？",
          "几点开始？"
        ],
        "answers": [
          "非常感谢。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-0-03",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 你可以帮我吗？",
        "options": [
          "你可以帮我吗？",
          "车站在哪里？",
          "几点开始？",
          "我明白了。"
        ],
        "answers": [
          "你可以帮我吗？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-0-04",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 车站在哪里？",
        "options": [
          "车站在哪里？",
          "几点开始？",
          "我明白了。",
          "请再说一遍。"
        ],
        "answers": [
          "车站在哪里？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-0-05",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 几点开始？",
        "options": [
          "几点开始？",
          "我明白了。",
          "请再说一遍。",
          "明天见。"
        ],
        "answers": [
          "几点开始？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-0-06",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 我明白了。",
        "options": [
          "我明白了。",
          "请再说一遍。",
          "明天见。",
          "早上好。"
        ],
        "answers": [
          "我明白了。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-0-07",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 请再说一遍。",
        "options": [
          "请再说一遍。",
          "明天见。",
          "早上好。",
          "非常感谢。"
        ],
        "answers": [
          "请再说一遍。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-0-08",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 明天见。",
        "options": [
          "明天见。",
          "早上好。",
          "非常感谢。",
          "你可以帮我吗？"
        ],
        "answers": [
          "明天见。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-0-09",
        "type": "typed",
        "prompt": "请准确输入下面的句子。 — 早上好。",
        "options": [],
        "answers": [
          "早上好。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-zh-0-10",
        "type": "typed",
        "prompt": "请准确输入下面的句子。 — 非常感谢。",
        "options": [],
        "answers": [
          "非常感谢。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-zh-0-11",
        "type": "typed",
        "prompt": "请准确输入下面的句子。 — 你可以帮我吗？",
        "options": [],
        "answers": [
          "你可以帮我吗？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-zh-0-12",
        "type": "typed",
        "prompt": "请准确输入下面的句子。 — 车站在哪里？",
        "options": [],
        "answers": [
          "车站在哪里？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-zh-0-13",
        "type": "typed",
        "prompt": "请准确输入下面的句子。 — 几点开始？",
        "options": [],
        "answers": [
          "几点开始？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-zh-0-14",
        "type": "audio_choice",
        "prompt": "请听音频并选择你听到的句子。",
        "options": [
          "你可以帮我吗？",
          "车站在哪里？",
          "几点开始？",
          "我明白了。"
        ],
        "answers": [
          "你可以帮我吗？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "你可以帮我吗？",
        "ttsLang": "zh-CN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-zh-0-15",
        "type": "audio_choice",
        "prompt": "请听音频并选择你听到的句子。",
        "options": [
          "车站在哪里？",
          "几点开始？",
          "我明白了。",
          "请再说一遍。"
        ],
        "answers": [
          "车站在哪里？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "车站在哪里？",
        "ttsLang": "zh-CN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-zh-0-16",
        "type": "audio_choice",
        "prompt": "请听音频并选择你听到的句子。",
        "options": [
          "几点开始？",
          "我明白了。",
          "请再说一遍。",
          "明天见。"
        ],
        "answers": [
          "几点开始？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "几点开始？",
        "ttsLang": "zh-CN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-zh-0-17",
        "type": "audio_choice",
        "prompt": "请听音频并选择你听到的句子。",
        "options": [
          "我明白了。",
          "请再说一遍。",
          "明天见。",
          "早上好。"
        ],
        "answers": [
          "我明白了。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "我明白了。",
        "ttsLang": "zh-CN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-zh-0-18",
        "type": "audio_choice",
        "prompt": "请听音频并选择你听到的句子。",
        "options": [
          "请再说一遍。",
          "明天见。",
          "早上好。",
          "非常感谢。"
        ],
        "answers": [
          "请再说一遍。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "请再说一遍。",
        "ttsLang": "zh-CN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-zh-0-19",
        "type": "fill_blank",
        "prompt": "请完成句子。 — ___",
        "options": [
          "非常感谢。",
          "早上好",
          "你可以帮我吗？",
          "车站在哪里？"
        ],
        "answers": [
          "非常感谢。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-zh-0-20",
        "type": "fill_blank",
        "prompt": "请完成句子。 — ___",
        "options": [
          "你可以帮我吗？",
          "早上好",
          "非常感谢",
          "车站在哪里？"
        ],
        "answers": [
          "你可以帮我吗？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-zh-0-21",
        "type": "fill_blank",
        "prompt": "请完成句子。 — ___",
        "options": [
          "车站在哪里？",
          "早上好",
          "非常感谢",
          "你可以帮我吗？"
        ],
        "answers": [
          "车站在哪里？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-zh-0-22",
        "type": "fill_blank",
        "prompt": "请完成句子。 — ___",
        "options": [
          "几点开始？",
          "早上好",
          "非常感谢",
          "你可以帮我吗？"
        ],
        "answers": [
          "几点开始？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-zh-0-23",
        "type": "sentence_builder",
        "prompt": "请把词语排列成正确的句子。",
        "options": [
          "车",
          "站",
          "在",
          "哪",
          "里",
          "？"
        ],
        "answers": [
          "车站在哪里？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-zh-0-24",
        "type": "sentence_builder",
        "prompt": "请把词语排列成正确的句子。",
        "options": [
          "几",
          "点",
          "开",
          "始",
          "？"
        ],
        "answers": [
          "几点开始？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-zh-0-25",
        "type": "sentence_builder",
        "prompt": "请把词语排列成正确的句子。",
        "options": [
          "我",
          "明",
          "白",
          "了",
          "。"
        ],
        "answers": [
          "我明白了。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-zh-0-26",
        "type": "sentence_builder",
        "prompt": "请把词语排列成正确的句子。",
        "options": [
          "请",
          "再",
          "说",
          "一",
          "遍",
          "。"
        ],
        "answers": [
          "请再说一遍。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-zh-0-27",
        "type": "scenario_decision",
        "prompt": "请选择最合适的回答。",
        "options": [
          "几点开始？",
          "我明白了。",
          "请再说一遍。",
          "明天见。"
        ],
        "answers": [
          "几点开始？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-zh-0-28",
        "type": "scenario_decision",
        "prompt": "请选择最合适的回答。",
        "options": [
          "我明白了。",
          "请再说一遍。",
          "明天见。",
          "早上好。"
        ],
        "answers": [
          "我明白了。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-zh-0-29",
        "type": "scenario_decision",
        "prompt": "请选择最合适的回答。",
        "options": [
          "请再说一遍。",
          "明天见。",
          "早上好。",
          "非常感谢。"
        ],
        "answers": [
          "请再说一遍。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-zh-0-30",
        "type": "scenario_decision",
        "prompt": "请选择最合适的回答。",
        "options": [
          "明天见。",
          "早上好。",
          "非常感谢。",
          "你可以帮我吗？"
        ],
        "answers": [
          "明天见。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-zh-2",
    "title": "中文 — 学校与日常生活",
    "language": "zh",
    "level": "Intermediate",
    "topic": "中文 — 学校与日常生活",
    "context": "School & Travel",
    "skill": "Mixed",
    "description": "在学校、出行和日常场景中练习中文。",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-zh-1-01",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 八点上课。",
        "options": [
          "八点上课。",
          "我们在哪个教室上课？",
          "我做完作业了。",
          "你可以再解释一次吗？"
        ],
        "answers": [
          "八点上课。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-1-02",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 我们在哪个教室上课？",
        "options": [
          "我们在哪个教室上课？",
          "我做完作业了。",
          "你可以再解释一次吗？",
          "请打开书。"
        ],
        "answers": [
          "我们在哪个教室上课？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-1-03",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 我做完作业了。",
        "options": [
          "我做完作业了。",
          "你可以再解释一次吗？",
          "请打开书。",
          "公交车晚点了。"
        ],
        "answers": [
          "我做完作业了。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-1-04",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 你可以再解释一次吗？",
        "options": [
          "你可以再解释一次吗？",
          "请打开书。",
          "公交车晚点了。",
          "我想买一张票。"
        ],
        "answers": [
          "你可以再解释一次吗？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-1-05",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 请打开书。",
        "options": [
          "请打开书。",
          "公交车晚点了。",
          "我想买一张票。",
          "我在哪里可以买午饭？"
        ],
        "answers": [
          "请打开书。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-1-06",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 公交车晚点了。",
        "options": [
          "公交车晚点了。",
          "我想买一张票。",
          "我在哪里可以买午饭？",
          "八点上课。"
        ],
        "answers": [
          "公交车晚点了。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-1-07",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 我想买一张票。",
        "options": [
          "我想买一张票。",
          "我在哪里可以买午饭？",
          "八点上课。",
          "我们在哪个教室上课？"
        ],
        "answers": [
          "我想买一张票。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-1-08",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 我在哪里可以买午饭？",
        "options": [
          "我在哪里可以买午饭？",
          "八点上课。",
          "我们在哪个教室上课？",
          "我做完作业了。"
        ],
        "answers": [
          "我在哪里可以买午饭？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-1-09",
        "type": "typed",
        "prompt": "请准确输入下面的句子。 — 八点上课。",
        "options": [],
        "answers": [
          "八点上课。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-zh-1-10",
        "type": "typed",
        "prompt": "请准确输入下面的句子。 — 我们在哪个教室上课？",
        "options": [],
        "answers": [
          "我们在哪个教室上课？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-zh-1-11",
        "type": "typed",
        "prompt": "请准确输入下面的句子。 — 我做完作业了。",
        "options": [],
        "answers": [
          "我做完作业了。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-zh-1-12",
        "type": "typed",
        "prompt": "请准确输入下面的句子。 — 你可以再解释一次吗？",
        "options": [],
        "answers": [
          "你可以再解释一次吗？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-zh-1-13",
        "type": "typed",
        "prompt": "请准确输入下面的句子。 — 请打开书。",
        "options": [],
        "answers": [
          "请打开书。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-zh-1-14",
        "type": "audio_choice",
        "prompt": "请听音频并选择你听到的句子。",
        "options": [
          "我做完作业了。",
          "你可以再解释一次吗？",
          "请打开书。",
          "公交车晚点了。"
        ],
        "answers": [
          "我做完作业了。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "我做完作业了。",
        "ttsLang": "zh-CN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-zh-1-15",
        "type": "audio_choice",
        "prompt": "请听音频并选择你听到的句子。",
        "options": [
          "你可以再解释一次吗？",
          "请打开书。",
          "公交车晚点了。",
          "我想买一张票。"
        ],
        "answers": [
          "你可以再解释一次吗？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "你可以再解释一次吗？",
        "ttsLang": "zh-CN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-zh-1-16",
        "type": "audio_choice",
        "prompt": "请听音频并选择你听到的句子。",
        "options": [
          "请打开书。",
          "公交车晚点了。",
          "我想买一张票。",
          "我在哪里可以买午饭？"
        ],
        "answers": [
          "请打开书。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "请打开书。",
        "ttsLang": "zh-CN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-zh-1-17",
        "type": "audio_choice",
        "prompt": "请听音频并选择你听到的句子。",
        "options": [
          "公交车晚点了。",
          "我想买一张票。",
          "我在哪里可以买午饭？",
          "八点上课。"
        ],
        "answers": [
          "公交车晚点了。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "公交车晚点了。",
        "ttsLang": "zh-CN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-zh-1-18",
        "type": "audio_choice",
        "prompt": "请听音频并选择你听到的句子。",
        "options": [
          "我想买一张票。",
          "我在哪里可以买午饭？",
          "八点上课。",
          "我们在哪个教室上课？"
        ],
        "answers": [
          "我想买一张票。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "我想买一张票。",
        "ttsLang": "zh-CN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-zh-1-19",
        "type": "fill_blank",
        "prompt": "请完成句子。 — ___",
        "options": [
          "我们在哪个教室上课？",
          "八点上课",
          "我做完作业了",
          "你可以再解释一次吗？"
        ],
        "answers": [
          "我们在哪个教室上课？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-zh-1-20",
        "type": "fill_blank",
        "prompt": "请完成句子。 — ___",
        "options": [
          "我做完作业了。",
          "八点上课",
          "我们在哪个教室上课？",
          "你可以再解释一次吗？"
        ],
        "answers": [
          "我做完作业了。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-zh-1-21",
        "type": "fill_blank",
        "prompt": "请完成句子。 — ___",
        "options": [
          "你可以再解释一次吗？",
          "八点上课",
          "我们在哪个教室上课？",
          "我做完作业了"
        ],
        "answers": [
          "你可以再解释一次吗？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-zh-1-22",
        "type": "fill_blank",
        "prompt": "请完成句子。 — ___",
        "options": [
          "请打开书。",
          "八点上课",
          "我们在哪个教室上课？",
          "我做完作业了"
        ],
        "answers": [
          "请打开书。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-zh-1-23",
        "type": "sentence_builder",
        "prompt": "请把词语排列成正确的句子。",
        "options": [
          "你",
          "可",
          "以",
          "再",
          "解",
          "释",
          "一",
          "次",
          "吗",
          "？"
        ],
        "answers": [
          "你可以再解释一次吗？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-zh-1-24",
        "type": "sentence_builder",
        "prompt": "请把词语排列成正确的句子。",
        "options": [
          "请",
          "打",
          "开",
          "书",
          "。"
        ],
        "answers": [
          "请打开书。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-zh-1-25",
        "type": "sentence_builder",
        "prompt": "请把词语排列成正确的句子。",
        "options": [
          "公",
          "交",
          "车",
          "晚",
          "点",
          "了",
          "。"
        ],
        "answers": [
          "公交车晚点了。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-zh-1-26",
        "type": "sentence_builder",
        "prompt": "请把词语排列成正确的句子。",
        "options": [
          "我",
          "想",
          "买",
          "一",
          "张",
          "票",
          "。"
        ],
        "answers": [
          "我想买一张票。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-zh-1-27",
        "type": "scenario_decision",
        "prompt": "请选择最合适的回答。",
        "options": [
          "请打开书。",
          "公交车晚点了。",
          "我想买一张票。",
          "我在哪里可以买午饭？"
        ],
        "answers": [
          "请打开书。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-zh-1-28",
        "type": "scenario_decision",
        "prompt": "请选择最合适的回答。",
        "options": [
          "公交车晚点了。",
          "我想买一张票。",
          "我在哪里可以买午饭？",
          "八点上课。"
        ],
        "answers": [
          "公交车晚点了。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-zh-1-29",
        "type": "scenario_decision",
        "prompt": "请选择最合适的回答。",
        "options": [
          "我想买一张票。",
          "我在哪里可以买午饭？",
          "八点上课。",
          "我们在哪个教室上课？"
        ],
        "answers": [
          "我想买一张票。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-zh-1-30",
        "type": "scenario_decision",
        "prompt": "请选择最合适的回答。",
        "options": [
          "我在哪里可以买午饭？",
          "八点上课。",
          "我们在哪个教室上课？",
          "我做完作业了。"
        ],
        "answers": [
          "我在哪里可以买午饭？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-zh-3",
    "title": "中文 — 职场与专业沟通",
    "language": "zh",
    "level": "Professional",
    "topic": "中文 — 职场与专业沟通",
    "context": "Workplace & Professional",
    "skill": "Mixed",
    "description": "练习会议、截止日期、邮件和客户服务中的职场中文。",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-zh-2-01",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 你今天可以发送报告吗？",
        "options": [
          "你今天可以发送报告吗？",
          "会议三点开始。",
          "请确认截止时间。",
          "我需要多一点时间。"
        ],
        "answers": [
          "你今天可以发送报告吗？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-2-02",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 会议三点开始。",
        "options": [
          "会议三点开始。",
          "请确认截止时间。",
          "我需要多一点时间。",
          "我会通过邮件跟进。"
        ],
        "answers": [
          "会议三点开始。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-2-03",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 请确认截止时间。",
        "options": [
          "请确认截止时间。",
          "我需要多一点时间。",
          "我会通过邮件跟进。",
          "我们可以改一下会议时间吗？"
        ],
        "answers": [
          "请确认截止时间。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-2-04",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 我需要多一点时间。",
        "options": [
          "我需要多一点时间。",
          "我会通过邮件跟进。",
          "我们可以改一下会议时间吗？",
          "感谢你的帮助。"
        ],
        "answers": [
          "我需要多一点时间。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-2-05",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 我会通过邮件跟进。",
        "options": [
          "我会通过邮件跟进。",
          "我们可以改一下会议时间吗？",
          "感谢你的帮助。",
          "如果有变化，请告诉我。"
        ],
        "answers": [
          "我会通过邮件跟进。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-2-06",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 我们可以改一下会议时间吗？",
        "options": [
          "我们可以改一下会议时间吗？",
          "感谢你的帮助。",
          "如果有变化，请告诉我。",
          "你今天可以发送报告吗？"
        ],
        "answers": [
          "我们可以改一下会议时间吗？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-2-07",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 感谢你的帮助。",
        "options": [
          "感谢你的帮助。",
          "如果有变化，请告诉我。",
          "你今天可以发送报告吗？",
          "会议三点开始。"
        ],
        "answers": [
          "感谢你的帮助。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-2-08",
        "type": "multiple_choice",
        "prompt": "请选择正确的表达。 — 如果有变化，请告诉我。",
        "options": [
          "如果有变化，请告诉我。",
          "你今天可以发送报告吗？",
          "会议三点开始。",
          "请确认截止时间。"
        ],
        "answers": [
          "如果有变化，请告诉我。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-zh-2-09",
        "type": "typed",
        "prompt": "请准确输入下面的句子。 — 你今天可以发送报告吗？",
        "options": [],
        "answers": [
          "你今天可以发送报告吗？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-zh-2-10",
        "type": "typed",
        "prompt": "请准确输入下面的句子。 — 会议三点开始。",
        "options": [],
        "answers": [
          "会议三点开始。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-zh-2-11",
        "type": "typed",
        "prompt": "请准确输入下面的句子。 — 请确认截止时间。",
        "options": [],
        "answers": [
          "请确认截止时间。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-zh-2-12",
        "type": "typed",
        "prompt": "请准确输入下面的句子。 — 我需要多一点时间。",
        "options": [],
        "answers": [
          "我需要多一点时间。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-zh-2-13",
        "type": "typed",
        "prompt": "请准确输入下面的句子。 — 我会通过邮件跟进。",
        "options": [],
        "answers": [
          "我会通过邮件跟进。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-zh-2-14",
        "type": "audio_choice",
        "prompt": "请听音频并选择你听到的句子。",
        "options": [
          "请确认截止时间。",
          "我需要多一点时间。",
          "我会通过邮件跟进。",
          "我们可以改一下会议时间吗？"
        ],
        "answers": [
          "请确认截止时间。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "请确认截止时间。",
        "ttsLang": "zh-CN",
        "maxPlays": 3,
        "playbackRate": 1,
        "mediaUrl": "/audio/zh-workplace.wav"
      },
      {
        "id": "native-zh-2-15",
        "type": "audio_choice",
        "prompt": "请听音频并选择你听到的句子。",
        "options": [
          "我需要多一点时间。",
          "我会通过邮件跟进。",
          "我们可以改一下会议时间吗？",
          "感谢你的帮助。"
        ],
        "answers": [
          "我需要多一点时间。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "我需要多一点时间。",
        "ttsLang": "zh-CN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-zh-2-16",
        "type": "audio_choice",
        "prompt": "请听音频并选择你听到的句子。",
        "options": [
          "我会通过邮件跟进。",
          "我们可以改一下会议时间吗？",
          "感谢你的帮助。",
          "如果有变化，请告诉我。"
        ],
        "answers": [
          "我会通过邮件跟进。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "我会通过邮件跟进。",
        "ttsLang": "zh-CN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-zh-2-17",
        "type": "audio_choice",
        "prompt": "请听音频并选择你听到的句子。",
        "options": [
          "我们可以改一下会议时间吗？",
          "感谢你的帮助。",
          "如果有变化，请告诉我。",
          "你今天可以发送报告吗？"
        ],
        "answers": [
          "我们可以改一下会议时间吗？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "我们可以改一下会议时间吗？",
        "ttsLang": "zh-CN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-zh-2-18",
        "type": "audio_choice",
        "prompt": "请听音频并选择你听到的句子。",
        "options": [
          "感谢你的帮助。",
          "如果有变化，请告诉我。",
          "你今天可以发送报告吗？",
          "会议三点开始。"
        ],
        "answers": [
          "感谢你的帮助。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "感谢你的帮助。",
        "ttsLang": "zh-CN",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-zh-2-19",
        "type": "fill_blank",
        "prompt": "请完成句子。 — ___",
        "options": [
          "会议三点开始。",
          "你今天可以发送报告吗？",
          "请确认截止时间",
          "我需要多一点时间"
        ],
        "answers": [
          "会议三点开始。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-zh-2-20",
        "type": "fill_blank",
        "prompt": "请完成句子。 — ___",
        "options": [
          "请确认截止时间。",
          "你今天可以发送报告吗？",
          "会议三点开始",
          "我需要多一点时间"
        ],
        "answers": [
          "请确认截止时间。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-zh-2-21",
        "type": "fill_blank",
        "prompt": "请完成句子。 — ___",
        "options": [
          "我需要多一点时间。",
          "你今天可以发送报告吗？",
          "会议三点开始",
          "请确认截止时间"
        ],
        "answers": [
          "我需要多一点时间。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-zh-2-22",
        "type": "fill_blank",
        "prompt": "请完成句子。 — ___",
        "options": [
          "我会通过邮件跟进。",
          "你今天可以发送报告吗？",
          "会议三点开始",
          "请确认截止时间"
        ],
        "answers": [
          "我会通过邮件跟进。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-zh-2-23",
        "type": "sentence_builder",
        "prompt": "请把词语排列成正确的句子。",
        "options": [
          "我",
          "需",
          "要",
          "多",
          "一",
          "点",
          "时",
          "间",
          "。"
        ],
        "answers": [
          "我需要多一点时间。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-zh-2-24",
        "type": "sentence_builder",
        "prompt": "请把词语排列成正确的句子。",
        "options": [
          "我",
          "会",
          "通",
          "过",
          "邮",
          "件",
          "跟",
          "进",
          "。"
        ],
        "answers": [
          "我会通过邮件跟进。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-zh-2-25",
        "type": "sentence_builder",
        "prompt": "请把词语排列成正确的句子。",
        "options": [
          "我",
          "们",
          "可",
          "以",
          "改",
          "一",
          "下",
          "会",
          "议",
          "时",
          "间",
          "吗",
          "？"
        ],
        "answers": [
          "我们可以改一下会议时间吗？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-zh-2-26",
        "type": "sentence_builder",
        "prompt": "请把词语排列成正确的句子。",
        "options": [
          "感",
          "谢",
          "你",
          "的",
          "帮",
          "助",
          "。"
        ],
        "answers": [
          "感谢你的帮助。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-zh-2-27",
        "type": "scenario_decision",
        "prompt": "请选择最合适的回答。",
        "options": [
          "我会通过邮件跟进。",
          "我们可以改一下会议时间吗？",
          "感谢你的帮助。",
          "如果有变化，请告诉我。"
        ],
        "answers": [
          "我会通过邮件跟进。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-zh-2-28",
        "type": "scenario_decision",
        "prompt": "请选择最合适的回答。",
        "options": [
          "我们可以改一下会议时间吗？",
          "感谢你的帮助。",
          "如果有变化，请告诉我。",
          "你今天可以发送报告吗？"
        ],
        "answers": [
          "我们可以改一下会议时间吗？"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-zh-2-29",
        "type": "scenario_decision",
        "prompt": "请选择最合适的回答。",
        "options": [
          "感谢你的帮助。",
          "如果有变化，请告诉我。",
          "你今天可以发送报告吗？",
          "会议三点开始。"
        ],
        "answers": [
          "感谢你的帮助。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-zh-2-30",
        "type": "scenario_decision",
        "prompt": "请选择最合适的回答。",
        "options": [
          "如果有变化，请告诉我。",
          "你今天可以发送报告吗？",
          "会议三点开始。",
          "请确认截止时间。"
        ],
        "answers": [
          "如果有变化，请告诉我。"
        ],
        "explanation": "请结合语境复习这个表达。",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-ja-1",
    "title": "日本語 — 基礎",
    "language": "ja",
    "level": "Starter",
    "topic": "日本語 — 基礎",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "聞き取り、文の並べ替え、実用的な応答で基礎日本語を練習します。",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-ja-0-01",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — おはようございます。",
        "options": [
          "おはようございます。",
          "どうもありがとうございます。",
          "手伝っていただけますか。",
          "駅はどこですか。"
        ],
        "answers": [
          "おはようございます。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-0-02",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — どうもありがとうございます。",
        "options": [
          "どうもありがとうございます。",
          "手伝っていただけますか。",
          "駅はどこですか。",
          "何時に始まりますか。"
        ],
        "answers": [
          "どうもありがとうございます。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-0-03",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — 手伝っていただけますか。",
        "options": [
          "手伝っていただけますか。",
          "駅はどこですか。",
          "何時に始まりますか。",
          "わかりました。"
        ],
        "answers": [
          "手伝っていただけますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-0-04",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — 駅はどこですか。",
        "options": [
          "駅はどこですか。",
          "何時に始まりますか。",
          "わかりました。",
          "もう一度言ってください。"
        ],
        "answers": [
          "駅はどこですか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-0-05",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — 何時に始まりますか。",
        "options": [
          "何時に始まりますか。",
          "わかりました。",
          "もう一度言ってください。",
          "また明日。"
        ],
        "answers": [
          "何時に始まりますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-0-06",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — わかりました。",
        "options": [
          "わかりました。",
          "もう一度言ってください。",
          "また明日。",
          "おはようございます。"
        ],
        "answers": [
          "わかりました。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-0-07",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — もう一度言ってください。",
        "options": [
          "もう一度言ってください。",
          "また明日。",
          "おはようございます。",
          "どうもありがとうございます。"
        ],
        "answers": [
          "もう一度言ってください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-0-08",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — また明日。",
        "options": [
          "また明日。",
          "おはようございます。",
          "どうもありがとうございます。",
          "手伝っていただけますか。"
        ],
        "answers": [
          "また明日。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-0-09",
        "type": "typed",
        "prompt": "次の文を正確に入力してください。 — おはようございます。",
        "options": [],
        "answers": [
          "おはようございます。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ja-0-10",
        "type": "typed",
        "prompt": "次の文を正確に入力してください。 — どうもありがとうございます。",
        "options": [],
        "answers": [
          "どうもありがとうございます。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ja-0-11",
        "type": "typed",
        "prompt": "次の文を正確に入力してください。 — 手伝っていただけますか。",
        "options": [],
        "answers": [
          "手伝っていただけますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ja-0-12",
        "type": "typed",
        "prompt": "次の文を正確に入力してください。 — 駅はどこですか。",
        "options": [],
        "answers": [
          "駅はどこですか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ja-0-13",
        "type": "typed",
        "prompt": "次の文を正確に入力してください。 — 何時に始まりますか。",
        "options": [],
        "answers": [
          "何時に始まりますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ja-0-14",
        "type": "audio_choice",
        "prompt": "音声を聞いて、聞こえた文を選んでください。",
        "options": [
          "手伝っていただけますか。",
          "駅はどこですか。",
          "何時に始まりますか。",
          "わかりました。"
        ],
        "answers": [
          "手伝っていただけますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "手伝っていただけますか。",
        "ttsLang": "ja-JP",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ja-0-15",
        "type": "audio_choice",
        "prompt": "音声を聞いて、聞こえた文を選んでください。",
        "options": [
          "駅はどこですか。",
          "何時に始まりますか。",
          "わかりました。",
          "もう一度言ってください。"
        ],
        "answers": [
          "駅はどこですか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "駅はどこですか。",
        "ttsLang": "ja-JP",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ja-0-16",
        "type": "audio_choice",
        "prompt": "音声を聞いて、聞こえた文を選んでください。",
        "options": [
          "何時に始まりますか。",
          "わかりました。",
          "もう一度言ってください。",
          "また明日。"
        ],
        "answers": [
          "何時に始まりますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "何時に始まりますか。",
        "ttsLang": "ja-JP",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ja-0-17",
        "type": "audio_choice",
        "prompt": "音声を聞いて、聞こえた文を選んでください。",
        "options": [
          "わかりました。",
          "もう一度言ってください。",
          "また明日。",
          "おはようございます。"
        ],
        "answers": [
          "わかりました。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "わかりました。",
        "ttsLang": "ja-JP",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ja-0-18",
        "type": "audio_choice",
        "prompt": "音声を聞いて、聞こえた文を選んでください。",
        "options": [
          "もう一度言ってください。",
          "また明日。",
          "おはようございます。",
          "どうもありがとうございます。"
        ],
        "answers": [
          "もう一度言ってください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "もう一度言ってください。",
        "ttsLang": "ja-JP",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ja-0-19",
        "type": "fill_blank",
        "prompt": "文を完成させてください。 — ___",
        "options": [
          "どうもありがとうございます。",
          "おはようございます",
          "手伝っていただけますか",
          "駅はどこですか"
        ],
        "answers": [
          "どうもありがとうございます。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ja-0-20",
        "type": "fill_blank",
        "prompt": "文を完成させてください。 — ___",
        "options": [
          "手伝っていただけますか。",
          "おはようございます",
          "どうもありがとうございます",
          "駅はどこですか"
        ],
        "answers": [
          "手伝っていただけますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ja-0-21",
        "type": "fill_blank",
        "prompt": "文を完成させてください。 — ___",
        "options": [
          "駅はどこですか。",
          "おはようございます",
          "どうもありがとうございます",
          "手伝っていただけますか"
        ],
        "answers": [
          "駅はどこですか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ja-0-22",
        "type": "fill_blank",
        "prompt": "文を完成させてください。 — ___",
        "options": [
          "何時に始まりますか。",
          "おはようございます",
          "どうもありがとうございます",
          "手伝っていただけますか"
        ],
        "answers": [
          "何時に始まりますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ja-0-23",
        "type": "sentence_builder",
        "prompt": "語句を正しい順番に並べてください。",
        "options": [
          "駅",
          "は",
          "ど",
          "こ",
          "で",
          "す",
          "か",
          "。"
        ],
        "answers": [
          "駅はどこですか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ja-0-24",
        "type": "sentence_builder",
        "prompt": "語句を正しい順番に並べてください。",
        "options": [
          "何",
          "時",
          "に",
          "始",
          "ま",
          "り",
          "ま",
          "す",
          "か",
          "。"
        ],
        "answers": [
          "何時に始まりますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ja-0-25",
        "type": "sentence_builder",
        "prompt": "語句を正しい順番に並べてください。",
        "options": [
          "わ",
          "か",
          "り",
          "ま",
          "し",
          "た",
          "。"
        ],
        "answers": [
          "わかりました。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ja-0-26",
        "type": "sentence_builder",
        "prompt": "語句を正しい順番に並べてください。",
        "options": [
          "も",
          "う",
          "一",
          "度",
          "言",
          "っ",
          "て",
          "く",
          "だ",
          "さ",
          "い",
          "。"
        ],
        "answers": [
          "もう一度言ってください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ja-0-27",
        "type": "scenario_decision",
        "prompt": "最も適切な返答を選んでください。",
        "options": [
          "何時に始まりますか。",
          "わかりました。",
          "もう一度言ってください。",
          "また明日。"
        ],
        "answers": [
          "何時に始まりますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ja-0-28",
        "type": "scenario_decision",
        "prompt": "最も適切な返答を選んでください。",
        "options": [
          "わかりました。",
          "もう一度言ってください。",
          "また明日。",
          "おはようございます。"
        ],
        "answers": [
          "わかりました。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ja-0-29",
        "type": "scenario_decision",
        "prompt": "最も適切な返答を選んでください。",
        "options": [
          "もう一度言ってください。",
          "また明日。",
          "おはようございます。",
          "どうもありがとうございます。"
        ],
        "answers": [
          "もう一度言ってください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ja-0-30",
        "type": "scenario_decision",
        "prompt": "最も適切な返答を選んでください。",
        "options": [
          "また明日。",
          "おはようございます。",
          "どうもありがとうございます。",
          "手伝っていただけますか。"
        ],
        "answers": [
          "また明日。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-ja-2",
    "title": "日本語 — 学校と日常生活",
    "language": "ja",
    "level": "Intermediate",
    "topic": "日本語 — 学校と日常生活",
    "context": "School & Travel",
    "skill": "Mixed",
    "description": "学校、移動、日常生活の場面で日本語を練習します。",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-ja-1-01",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — 授業は八時に始まります。",
        "options": [
          "授業は八時に始まります。",
          "どの教室を使いますか。",
          "宿題が終わりました。",
          "もう一度説明していただけますか。"
        ],
        "answers": [
          "授業は八時に始まります。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-1-02",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — どの教室を使いますか。",
        "options": [
          "どの教室を使いますか。",
          "宿題が終わりました。",
          "もう一度説明していただけますか。",
          "本を開いてください。"
        ],
        "answers": [
          "どの教室を使いますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-1-03",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — 宿題が終わりました。",
        "options": [
          "宿題が終わりました。",
          "もう一度説明していただけますか。",
          "本を開いてください。",
          "バスが遅れています。"
        ],
        "answers": [
          "宿題が終わりました。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-1-04",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — もう一度説明していただけますか。",
        "options": [
          "もう一度説明していただけますか。",
          "本を開いてください。",
          "バスが遅れています。",
          "切符を一枚お願いします。"
        ],
        "answers": [
          "もう一度説明していただけますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-1-05",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — 本を開いてください。",
        "options": [
          "本を開いてください。",
          "バスが遅れています。",
          "切符を一枚お願いします。",
          "昼ご飯はどこで買えますか。"
        ],
        "answers": [
          "本を開いてください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-1-06",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — バスが遅れています。",
        "options": [
          "バスが遅れています。",
          "切符を一枚お願いします。",
          "昼ご飯はどこで買えますか。",
          "授業は八時に始まります。"
        ],
        "answers": [
          "バスが遅れています。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-1-07",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — 切符を一枚お願いします。",
        "options": [
          "切符を一枚お願いします。",
          "昼ご飯はどこで買えますか。",
          "授業は八時に始まります。",
          "どの教室を使いますか。"
        ],
        "answers": [
          "切符を一枚お願いします。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-1-08",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — 昼ご飯はどこで買えますか。",
        "options": [
          "昼ご飯はどこで買えますか。",
          "授業は八時に始まります。",
          "どの教室を使いますか。",
          "宿題が終わりました。"
        ],
        "answers": [
          "昼ご飯はどこで買えますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-1-09",
        "type": "typed",
        "prompt": "次の文を正確に入力してください。 — 授業は八時に始まります。",
        "options": [],
        "answers": [
          "授業は八時に始まります。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ja-1-10",
        "type": "typed",
        "prompt": "次の文を正確に入力してください。 — どの教室を使いますか。",
        "options": [],
        "answers": [
          "どの教室を使いますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ja-1-11",
        "type": "typed",
        "prompt": "次の文を正確に入力してください。 — 宿題が終わりました。",
        "options": [],
        "answers": [
          "宿題が終わりました。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ja-1-12",
        "type": "typed",
        "prompt": "次の文を正確に入力してください。 — もう一度説明していただけますか。",
        "options": [],
        "answers": [
          "もう一度説明していただけますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ja-1-13",
        "type": "typed",
        "prompt": "次の文を正確に入力してください。 — 本を開いてください。",
        "options": [],
        "answers": [
          "本を開いてください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ja-1-14",
        "type": "audio_choice",
        "prompt": "音声を聞いて、聞こえた文を選んでください。",
        "options": [
          "宿題が終わりました。",
          "もう一度説明していただけますか。",
          "本を開いてください。",
          "バスが遅れています。"
        ],
        "answers": [
          "宿題が終わりました。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "宿題が終わりました。",
        "ttsLang": "ja-JP",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ja-1-15",
        "type": "audio_choice",
        "prompt": "音声を聞いて、聞こえた文を選んでください。",
        "options": [
          "もう一度説明していただけますか。",
          "本を開いてください。",
          "バスが遅れています。",
          "切符を一枚お願いします。"
        ],
        "answers": [
          "もう一度説明していただけますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "もう一度説明していただけますか。",
        "ttsLang": "ja-JP",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ja-1-16",
        "type": "audio_choice",
        "prompt": "音声を聞いて、聞こえた文を選んでください。",
        "options": [
          "本を開いてください。",
          "バスが遅れています。",
          "切符を一枚お願いします。",
          "昼ご飯はどこで買えますか。"
        ],
        "answers": [
          "本を開いてください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "本を開いてください。",
        "ttsLang": "ja-JP",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ja-1-17",
        "type": "audio_choice",
        "prompt": "音声を聞いて、聞こえた文を選んでください。",
        "options": [
          "バスが遅れています。",
          "切符を一枚お願いします。",
          "昼ご飯はどこで買えますか。",
          "授業は八時に始まります。"
        ],
        "answers": [
          "バスが遅れています。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "バスが遅れています。",
        "ttsLang": "ja-JP",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ja-1-18",
        "type": "audio_choice",
        "prompt": "音声を聞いて、聞こえた文を選んでください。",
        "options": [
          "切符を一枚お願いします。",
          "昼ご飯はどこで買えますか。",
          "授業は八時に始まります。",
          "どの教室を使いますか。"
        ],
        "answers": [
          "切符を一枚お願いします。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "切符を一枚お願いします。",
        "ttsLang": "ja-JP",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ja-1-19",
        "type": "fill_blank",
        "prompt": "文を完成させてください。 — ___",
        "options": [
          "どの教室を使いますか。",
          "授業は八時に始まります",
          "宿題が終わりました",
          "もう一度説明していただけますか"
        ],
        "answers": [
          "どの教室を使いますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ja-1-20",
        "type": "fill_blank",
        "prompt": "文を完成させてください。 — ___",
        "options": [
          "宿題が終わりました。",
          "授業は八時に始まります",
          "どの教室を使いますか",
          "もう一度説明していただけますか"
        ],
        "answers": [
          "宿題が終わりました。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ja-1-21",
        "type": "fill_blank",
        "prompt": "文を完成させてください。 — ___",
        "options": [
          "もう一度説明していただけますか。",
          "授業は八時に始まります",
          "どの教室を使いますか",
          "宿題が終わりました"
        ],
        "answers": [
          "もう一度説明していただけますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ja-1-22",
        "type": "fill_blank",
        "prompt": "文を完成させてください。 — ___",
        "options": [
          "本を開いてください。",
          "授業は八時に始まります",
          "どの教室を使いますか",
          "宿題が終わりました"
        ],
        "answers": [
          "本を開いてください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ja-1-23",
        "type": "sentence_builder",
        "prompt": "語句を正しい順番に並べてください。",
        "options": [
          "も",
          "う",
          "一",
          "度",
          "説",
          "明",
          "し",
          "て",
          "い",
          "た",
          "だ",
          "け",
          "ま",
          "す",
          "か",
          "。"
        ],
        "answers": [
          "もう一度説明していただけますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ja-1-24",
        "type": "sentence_builder",
        "prompt": "語句を正しい順番に並べてください。",
        "options": [
          "本",
          "を",
          "開",
          "い",
          "て",
          "く",
          "だ",
          "さ",
          "い",
          "。"
        ],
        "answers": [
          "本を開いてください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ja-1-25",
        "type": "sentence_builder",
        "prompt": "語句を正しい順番に並べてください。",
        "options": [
          "バ",
          "ス",
          "が",
          "遅",
          "れ",
          "て",
          "い",
          "ま",
          "す",
          "。"
        ],
        "answers": [
          "バスが遅れています。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ja-1-26",
        "type": "sentence_builder",
        "prompt": "語句を正しい順番に並べてください。",
        "options": [
          "切",
          "符",
          "を",
          "一",
          "枚",
          "お",
          "願",
          "い",
          "し",
          "ま",
          "す",
          "。"
        ],
        "answers": [
          "切符を一枚お願いします。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ja-1-27",
        "type": "scenario_decision",
        "prompt": "最も適切な返答を選んでください。",
        "options": [
          "本を開いてください。",
          "バスが遅れています。",
          "切符を一枚お願いします。",
          "昼ご飯はどこで買えますか。"
        ],
        "answers": [
          "本を開いてください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ja-1-28",
        "type": "scenario_decision",
        "prompt": "最も適切な返答を選んでください。",
        "options": [
          "バスが遅れています。",
          "切符を一枚お願いします。",
          "昼ご飯はどこで買えますか。",
          "授業は八時に始まります。"
        ],
        "answers": [
          "バスが遅れています。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ja-1-29",
        "type": "scenario_decision",
        "prompt": "最も適切な返答を選んでください。",
        "options": [
          "切符を一枚お願いします。",
          "昼ご飯はどこで買えますか。",
          "授業は八時に始まります。",
          "どの教室を使いますか。"
        ],
        "answers": [
          "切符を一枚お願いします。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ja-1-30",
        "type": "scenario_decision",
        "prompt": "最も適切な返答を選んでください。",
        "options": [
          "昼ご飯はどこで買えますか。",
          "授業は八時に始まります。",
          "どの教室を使いますか。",
          "宿題が終わりました。"
        ],
        "answers": [
          "昼ご飯はどこで買えますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-ja-3",
    "title": "日本語 — 仕事とビジネス",
    "language": "ja",
    "level": "Professional",
    "topic": "日本語 — 仕事とビジネス",
    "context": "Workplace & Professional",
    "skill": "Mixed",
    "description": "会議、締め切り、メール、顧客対応の日本語を練習します。",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-ja-2-01",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — 今日、報告書を送っていただけますか。",
        "options": [
          "今日、報告書を送っていただけますか。",
          "会議は三時に始まります。",
          "締め切りを確認してください。",
          "もう少し時間が必要です。"
        ],
        "answers": [
          "今日、報告書を送っていただけますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-2-02",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — 会議は三時に始まります。",
        "options": [
          "会議は三時に始まります。",
          "締め切りを確認してください。",
          "もう少し時間が必要です。",
          "メールでフォローします。"
        ],
        "answers": [
          "会議は三時に始まります。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-2-03",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — 締め切りを確認してください。",
        "options": [
          "締め切りを確認してください。",
          "もう少し時間が必要です。",
          "メールでフォローします。",
          "会議の日程を変更できますか。"
        ],
        "answers": [
          "締め切りを確認してください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-2-04",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — もう少し時間が必要です。",
        "options": [
          "もう少し時間が必要です。",
          "メールでフォローします。",
          "会議の日程を変更できますか。",
          "ご協力ありがとうございます。"
        ],
        "answers": [
          "もう少し時間が必要です。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-2-05",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — メールでフォローします。",
        "options": [
          "メールでフォローします。",
          "会議の日程を変更できますか。",
          "ご協力ありがとうございます。",
          "変更があれば教えてください。"
        ],
        "answers": [
          "メールでフォローします。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-2-06",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — 会議の日程を変更できますか。",
        "options": [
          "会議の日程を変更できますか。",
          "ご協力ありがとうございます。",
          "変更があれば教えてください。",
          "今日、報告書を送っていただけますか。"
        ],
        "answers": [
          "会議の日程を変更できますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-2-07",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — ご協力ありがとうございます。",
        "options": [
          "ご協力ありがとうございます。",
          "変更があれば教えてください。",
          "今日、報告書を送っていただけますか。",
          "会議は三時に始まります。"
        ],
        "answers": [
          "ご協力ありがとうございます。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-2-08",
        "type": "multiple_choice",
        "prompt": "正しい表現を選んでください。 — 変更があれば教えてください。",
        "options": [
          "変更があれば教えてください。",
          "今日、報告書を送っていただけますか。",
          "会議は三時に始まります。",
          "締め切りを確認してください。"
        ],
        "answers": [
          "変更があれば教えてください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ja-2-09",
        "type": "typed",
        "prompt": "次の文を正確に入力してください。 — 今日、報告書を送っていただけますか。",
        "options": [],
        "answers": [
          "今日、報告書を送っていただけますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ja-2-10",
        "type": "typed",
        "prompt": "次の文を正確に入力してください。 — 会議は三時に始まります。",
        "options": [],
        "answers": [
          "会議は三時に始まります。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ja-2-11",
        "type": "typed",
        "prompt": "次の文を正確に入力してください。 — 締め切りを確認してください。",
        "options": [],
        "answers": [
          "締め切りを確認してください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ja-2-12",
        "type": "typed",
        "prompt": "次の文を正確に入力してください。 — もう少し時間が必要です。",
        "options": [],
        "answers": [
          "もう少し時間が必要です。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ja-2-13",
        "type": "typed",
        "prompt": "次の文を正確に入力してください。 — メールでフォローします。",
        "options": [],
        "answers": [
          "メールでフォローします。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ja-2-14",
        "type": "audio_choice",
        "prompt": "音声を聞いて、聞こえた文を選んでください。",
        "options": [
          "締め切りを確認してください。",
          "もう少し時間が必要です。",
          "メールでフォローします。",
          "会議の日程を変更できますか。"
        ],
        "answers": [
          "締め切りを確認してください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "締め切りを確認してください。",
        "ttsLang": "ja-JP",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ja-2-15",
        "type": "audio_choice",
        "prompt": "音声を聞いて、聞こえた文を選んでください。",
        "options": [
          "もう少し時間が必要です。",
          "メールでフォローします。",
          "会議の日程を変更できますか。",
          "ご協力ありがとうございます。"
        ],
        "answers": [
          "もう少し時間が必要です。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "もう少し時間が必要です。",
        "ttsLang": "ja-JP",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ja-2-16",
        "type": "audio_choice",
        "prompt": "音声を聞いて、聞こえた文を選んでください。",
        "options": [
          "メールでフォローします。",
          "会議の日程を変更できますか。",
          "ご協力ありがとうございます。",
          "変更があれば教えてください。"
        ],
        "answers": [
          "メールでフォローします。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "メールでフォローします。",
        "ttsLang": "ja-JP",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ja-2-17",
        "type": "audio_choice",
        "prompt": "音声を聞いて、聞こえた文を選んでください。",
        "options": [
          "会議の日程を変更できますか。",
          "ご協力ありがとうございます。",
          "変更があれば教えてください。",
          "今日、報告書を送っていただけますか。"
        ],
        "answers": [
          "会議の日程を変更できますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "会議の日程を変更できますか。",
        "ttsLang": "ja-JP",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ja-2-18",
        "type": "audio_choice",
        "prompt": "音声を聞いて、聞こえた文を選んでください。",
        "options": [
          "ご協力ありがとうございます。",
          "変更があれば教えてください。",
          "今日、報告書を送っていただけますか。",
          "会議は三時に始まります。"
        ],
        "answers": [
          "ご協力ありがとうございます。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "ご協力ありがとうございます。",
        "ttsLang": "ja-JP",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ja-2-19",
        "type": "fill_blank",
        "prompt": "文を完成させてください。 — ___",
        "options": [
          "会議は三時に始まります。",
          "今日、報告書を送っていただけますか",
          "締め切りを確認してください",
          "もう少し時間が必要です"
        ],
        "answers": [
          "会議は三時に始まります。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ja-2-20",
        "type": "fill_blank",
        "prompt": "文を完成させてください。 — ___",
        "options": [
          "締め切りを確認してください。",
          "今日、報告書を送っていただけますか",
          "会議は三時に始まります",
          "もう少し時間が必要です"
        ],
        "answers": [
          "締め切りを確認してください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ja-2-21",
        "type": "fill_blank",
        "prompt": "文を完成させてください。 — ___",
        "options": [
          "もう少し時間が必要です。",
          "今日、報告書を送っていただけますか",
          "会議は三時に始まります",
          "締め切りを確認してください"
        ],
        "answers": [
          "もう少し時間が必要です。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ja-2-22",
        "type": "fill_blank",
        "prompt": "文を完成させてください。 — ___",
        "options": [
          "メールでフォローします。",
          "今日、報告書を送っていただけますか",
          "会議は三時に始まります",
          "締め切りを確認してください"
        ],
        "answers": [
          "メールでフォローします。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ja-2-23",
        "type": "sentence_builder",
        "prompt": "語句を正しい順番に並べてください。",
        "options": [
          "も",
          "う",
          "少",
          "し",
          "時",
          "間",
          "が",
          "必",
          "要",
          "で",
          "す",
          "。"
        ],
        "answers": [
          "もう少し時間が必要です。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ja-2-24",
        "type": "sentence_builder",
        "prompt": "語句を正しい順番に並べてください。",
        "options": [
          "メ",
          "ー",
          "ル",
          "で",
          "フ",
          "ォ",
          "ロ",
          "ー",
          "し",
          "ま",
          "す",
          "。"
        ],
        "answers": [
          "メールでフォローします。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ja-2-25",
        "type": "sentence_builder",
        "prompt": "語句を正しい順番に並べてください。",
        "options": [
          "会",
          "議",
          "の",
          "日",
          "程",
          "を",
          "変",
          "更",
          "で",
          "き",
          "ま",
          "す",
          "か",
          "。"
        ],
        "answers": [
          "会議の日程を変更できますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ja-2-26",
        "type": "sentence_builder",
        "prompt": "語句を正しい順番に並べてください。",
        "options": [
          "ご",
          "協",
          "力",
          "あ",
          "り",
          "が",
          "と",
          "う",
          "ご",
          "ざ",
          "い",
          "ま",
          "す",
          "。"
        ],
        "answers": [
          "ご協力ありがとうございます。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ja-2-27",
        "type": "scenario_decision",
        "prompt": "最も適切な返答を選んでください。",
        "options": [
          "メールでフォローします。",
          "会議の日程を変更できますか。",
          "ご協力ありがとうございます。",
          "変更があれば教えてください。"
        ],
        "answers": [
          "メールでフォローします。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ja-2-28",
        "type": "scenario_decision",
        "prompt": "最も適切な返答を選んでください。",
        "options": [
          "会議の日程を変更できますか。",
          "ご協力ありがとうございます。",
          "変更があれば教えてください。",
          "今日、報告書を送っていただけますか。"
        ],
        "answers": [
          "会議の日程を変更できますか。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ja-2-29",
        "type": "scenario_decision",
        "prompt": "最も適切な返答を選んでください。",
        "options": [
          "ご協力ありがとうございます。",
          "変更があれば教えてください。",
          "今日、報告書を送っていただけますか。",
          "会議は三時に始まります。"
        ],
        "answers": [
          "ご協力ありがとうございます。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ja-2-30",
        "type": "scenario_decision",
        "prompt": "最も適切な返答を選んでください。",
        "options": [
          "変更があれば教えてください。",
          "今日、報告書を送っていただけますか。",
          "会議は三時に始まります。",
          "締め切りを確認してください。"
        ],
        "answers": [
          "変更があれば教えてください。"
        ],
        "explanation": "文脈の中でこの表現を復習しましょう。",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-ko-1",
    "title": "한국어 — 기초",
    "language": "ko",
    "level": "Starter",
    "topic": "한국어 — 기초",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "듣기, 문장 배열, 실제 응답으로 기초 한국어를 연습합니다.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-ko-0-01",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 좋은 아침입니다.",
        "options": [
          "좋은 아침입니다.",
          "정말 감사합니다.",
          "도와주실 수 있나요?",
          "역이 어디예요?"
        ],
        "answers": [
          "좋은 아침입니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-0-02",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 정말 감사합니다.",
        "options": [
          "정말 감사합니다.",
          "도와주실 수 있나요?",
          "역이 어디예요?",
          "몇 시에 시작해요?"
        ],
        "answers": [
          "정말 감사합니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-0-03",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 도와주실 수 있나요?",
        "options": [
          "도와주실 수 있나요?",
          "역이 어디예요?",
          "몇 시에 시작해요?",
          "알겠습니다."
        ],
        "answers": [
          "도와주실 수 있나요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-0-04",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 역이 어디예요?",
        "options": [
          "역이 어디예요?",
          "몇 시에 시작해요?",
          "알겠습니다.",
          "다시 말씀해 주세요."
        ],
        "answers": [
          "역이 어디예요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-0-05",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 몇 시에 시작해요?",
        "options": [
          "몇 시에 시작해요?",
          "알겠습니다.",
          "다시 말씀해 주세요.",
          "내일 봐요."
        ],
        "answers": [
          "몇 시에 시작해요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-0-06",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 알겠습니다.",
        "options": [
          "알겠습니다.",
          "다시 말씀해 주세요.",
          "내일 봐요.",
          "좋은 아침입니다."
        ],
        "answers": [
          "알겠습니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-0-07",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 다시 말씀해 주세요.",
        "options": [
          "다시 말씀해 주세요.",
          "내일 봐요.",
          "좋은 아침입니다.",
          "정말 감사합니다."
        ],
        "answers": [
          "다시 말씀해 주세요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-0-08",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 내일 봐요.",
        "options": [
          "내일 봐요.",
          "좋은 아침입니다.",
          "정말 감사합니다.",
          "도와주실 수 있나요?"
        ],
        "answers": [
          "내일 봐요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-0-09",
        "type": "typed",
        "prompt": "다음 문장을 정확히 입력하세요. — 좋은 아침입니다.",
        "options": [],
        "answers": [
          "좋은 아침입니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ko-0-10",
        "type": "typed",
        "prompt": "다음 문장을 정확히 입력하세요. — 정말 감사합니다.",
        "options": [],
        "answers": [
          "정말 감사합니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ko-0-11",
        "type": "typed",
        "prompt": "다음 문장을 정확히 입력하세요. — 도와주실 수 있나요?",
        "options": [],
        "answers": [
          "도와주실 수 있나요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ko-0-12",
        "type": "typed",
        "prompt": "다음 문장을 정확히 입력하세요. — 역이 어디예요?",
        "options": [],
        "answers": [
          "역이 어디예요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ko-0-13",
        "type": "typed",
        "prompt": "다음 문장을 정확히 입력하세요. — 몇 시에 시작해요?",
        "options": [],
        "answers": [
          "몇 시에 시작해요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ko-0-14",
        "type": "audio_choice",
        "prompt": "음성을 듣고 들은 문장을 선택하세요.",
        "options": [
          "도와주실 수 있나요?",
          "역이 어디예요?",
          "몇 시에 시작해요?",
          "알겠습니다."
        ],
        "answers": [
          "도와주실 수 있나요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "도와주실 수 있나요?",
        "ttsLang": "ko-KR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ko-0-15",
        "type": "audio_choice",
        "prompt": "음성을 듣고 들은 문장을 선택하세요.",
        "options": [
          "역이 어디예요?",
          "몇 시에 시작해요?",
          "알겠습니다.",
          "다시 말씀해 주세요."
        ],
        "answers": [
          "역이 어디예요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "역이 어디예요?",
        "ttsLang": "ko-KR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ko-0-16",
        "type": "audio_choice",
        "prompt": "음성을 듣고 들은 문장을 선택하세요.",
        "options": [
          "몇 시에 시작해요?",
          "알겠습니다.",
          "다시 말씀해 주세요.",
          "내일 봐요."
        ],
        "answers": [
          "몇 시에 시작해요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "몇 시에 시작해요?",
        "ttsLang": "ko-KR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ko-0-17",
        "type": "audio_choice",
        "prompt": "음성을 듣고 들은 문장을 선택하세요.",
        "options": [
          "알겠습니다.",
          "다시 말씀해 주세요.",
          "내일 봐요.",
          "좋은 아침입니다."
        ],
        "answers": [
          "알겠습니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "알겠습니다.",
        "ttsLang": "ko-KR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ko-0-18",
        "type": "audio_choice",
        "prompt": "음성을 듣고 들은 문장을 선택하세요.",
        "options": [
          "다시 말씀해 주세요.",
          "내일 봐요.",
          "좋은 아침입니다.",
          "정말 감사합니다."
        ],
        "answers": [
          "다시 말씀해 주세요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "다시 말씀해 주세요.",
        "ttsLang": "ko-KR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ko-0-19",
        "type": "fill_blank",
        "prompt": "문장을 완성하세요. — 정말 ___",
        "options": [
          "감사합니다",
          "아침입니다",
          "있나요",
          "어디예요"
        ],
        "answers": [
          "감사합니다"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ko-0-20",
        "type": "fill_blank",
        "prompt": "문장을 완성하세요. — 도와주실 수 ___",
        "options": [
          "있나요",
          "아침입니다",
          "감사합니다",
          "어디예요"
        ],
        "answers": [
          "있나요"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ko-0-21",
        "type": "fill_blank",
        "prompt": "문장을 완성하세요. — 역이 ___",
        "options": [
          "어디예요",
          "아침입니다",
          "감사합니다",
          "있나요"
        ],
        "answers": [
          "어디예요"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ko-0-22",
        "type": "fill_blank",
        "prompt": "문장을 완성하세요. — 몇 시에 ___",
        "options": [
          "시작해요",
          "아침입니다",
          "감사합니다",
          "있나요"
        ],
        "answers": [
          "시작해요"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ko-0-23",
        "type": "sentence_builder",
        "prompt": "단어를 올바른 순서로 배열하세요.",
        "options": [
          "역이",
          "어디예요"
        ],
        "answers": [
          "역이 어디예요"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ko-0-24",
        "type": "sentence_builder",
        "prompt": "단어를 올바른 순서로 배열하세요.",
        "options": [
          "몇",
          "시에",
          "시작해요"
        ],
        "answers": [
          "몇 시에 시작해요"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ko-0-25",
        "type": "sentence_builder",
        "prompt": "단어를 올바른 순서로 배열하세요.",
        "options": [
          "알",
          "겠",
          "습",
          "니",
          "다",
          "."
        ],
        "answers": [
          "알겠습니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ko-0-26",
        "type": "sentence_builder",
        "prompt": "단어를 올바른 순서로 배열하세요.",
        "options": [
          "다시",
          "말씀해",
          "주세요"
        ],
        "answers": [
          "다시 말씀해 주세요"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ko-0-27",
        "type": "scenario_decision",
        "prompt": "가장 적절한 답을 선택하세요.",
        "options": [
          "몇 시에 시작해요?",
          "알겠습니다.",
          "다시 말씀해 주세요.",
          "내일 봐요."
        ],
        "answers": [
          "몇 시에 시작해요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ko-0-28",
        "type": "scenario_decision",
        "prompt": "가장 적절한 답을 선택하세요.",
        "options": [
          "알겠습니다.",
          "다시 말씀해 주세요.",
          "내일 봐요.",
          "좋은 아침입니다."
        ],
        "answers": [
          "알겠습니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ko-0-29",
        "type": "scenario_decision",
        "prompt": "가장 적절한 답을 선택하세요.",
        "options": [
          "다시 말씀해 주세요.",
          "내일 봐요.",
          "좋은 아침입니다.",
          "정말 감사합니다."
        ],
        "answers": [
          "다시 말씀해 주세요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ko-0-30",
        "type": "scenario_decision",
        "prompt": "가장 적절한 답을 선택하세요.",
        "options": [
          "내일 봐요.",
          "좋은 아침입니다.",
          "정말 감사합니다.",
          "도와주실 수 있나요?"
        ],
        "answers": [
          "내일 봐요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-ko-2",
    "title": "한국어 — 학교와 일상생활",
    "language": "ko",
    "level": "Intermediate",
    "topic": "한국어 — 학교와 일상생활",
    "context": "School & Travel",
    "skill": "Mixed",
    "description": "학교, 이동, 일상생활 상황에서 한국어를 연습합니다.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-ko-1-01",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 수업은 여덟 시에 시작합니다.",
        "options": [
          "수업은 여덟 시에 시작합니다.",
          "어느 교실을 사용하나요?",
          "숙제를 다 했습니다.",
          "다시 설명해 주실 수 있나요?"
        ],
        "answers": [
          "수업은 여덟 시에 시작합니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-1-02",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 어느 교실을 사용하나요?",
        "options": [
          "어느 교실을 사용하나요?",
          "숙제를 다 했습니다.",
          "다시 설명해 주실 수 있나요?",
          "책을 펴 주세요."
        ],
        "answers": [
          "어느 교실을 사용하나요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-1-03",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 숙제를 다 했습니다.",
        "options": [
          "숙제를 다 했습니다.",
          "다시 설명해 주실 수 있나요?",
          "책을 펴 주세요.",
          "버스가 늦었습니다."
        ],
        "answers": [
          "숙제를 다 했습니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-1-04",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 다시 설명해 주실 수 있나요?",
        "options": [
          "다시 설명해 주실 수 있나요?",
          "책을 펴 주세요.",
          "버스가 늦었습니다.",
          "표 한 장 주세요."
        ],
        "answers": [
          "다시 설명해 주실 수 있나요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-1-05",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 책을 펴 주세요.",
        "options": [
          "책을 펴 주세요.",
          "버스가 늦었습니다.",
          "표 한 장 주세요.",
          "점심은 어디에서 살 수 있나요?"
        ],
        "answers": [
          "책을 펴 주세요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-1-06",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 버스가 늦었습니다.",
        "options": [
          "버스가 늦었습니다.",
          "표 한 장 주세요.",
          "점심은 어디에서 살 수 있나요?",
          "수업은 여덟 시에 시작합니다."
        ],
        "answers": [
          "버스가 늦었습니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-1-07",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 표 한 장 주세요.",
        "options": [
          "표 한 장 주세요.",
          "점심은 어디에서 살 수 있나요?",
          "수업은 여덟 시에 시작합니다.",
          "어느 교실을 사용하나요?"
        ],
        "answers": [
          "표 한 장 주세요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-1-08",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 점심은 어디에서 살 수 있나요?",
        "options": [
          "점심은 어디에서 살 수 있나요?",
          "수업은 여덟 시에 시작합니다.",
          "어느 교실을 사용하나요?",
          "숙제를 다 했습니다."
        ],
        "answers": [
          "점심은 어디에서 살 수 있나요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-1-09",
        "type": "typed",
        "prompt": "다음 문장을 정확히 입력하세요. — 수업은 여덟 시에 시작합니다.",
        "options": [],
        "answers": [
          "수업은 여덟 시에 시작합니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ko-1-10",
        "type": "typed",
        "prompt": "다음 문장을 정확히 입력하세요. — 어느 교실을 사용하나요?",
        "options": [],
        "answers": [
          "어느 교실을 사용하나요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ko-1-11",
        "type": "typed",
        "prompt": "다음 문장을 정확히 입력하세요. — 숙제를 다 했습니다.",
        "options": [],
        "answers": [
          "숙제를 다 했습니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ko-1-12",
        "type": "typed",
        "prompt": "다음 문장을 정확히 입력하세요. — 다시 설명해 주실 수 있나요?",
        "options": [],
        "answers": [
          "다시 설명해 주실 수 있나요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ko-1-13",
        "type": "typed",
        "prompt": "다음 문장을 정확히 입력하세요. — 책을 펴 주세요.",
        "options": [],
        "answers": [
          "책을 펴 주세요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ko-1-14",
        "type": "audio_choice",
        "prompt": "음성을 듣고 들은 문장을 선택하세요.",
        "options": [
          "숙제를 다 했습니다.",
          "다시 설명해 주실 수 있나요?",
          "책을 펴 주세요.",
          "버스가 늦었습니다."
        ],
        "answers": [
          "숙제를 다 했습니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "숙제를 다 했습니다.",
        "ttsLang": "ko-KR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ko-1-15",
        "type": "audio_choice",
        "prompt": "음성을 듣고 들은 문장을 선택하세요.",
        "options": [
          "다시 설명해 주실 수 있나요?",
          "책을 펴 주세요.",
          "버스가 늦었습니다.",
          "표 한 장 주세요."
        ],
        "answers": [
          "다시 설명해 주실 수 있나요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "다시 설명해 주실 수 있나요?",
        "ttsLang": "ko-KR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ko-1-16",
        "type": "audio_choice",
        "prompt": "음성을 듣고 들은 문장을 선택하세요.",
        "options": [
          "책을 펴 주세요.",
          "버스가 늦었습니다.",
          "표 한 장 주세요.",
          "점심은 어디에서 살 수 있나요?"
        ],
        "answers": [
          "책을 펴 주세요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "책을 펴 주세요.",
        "ttsLang": "ko-KR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ko-1-17",
        "type": "audio_choice",
        "prompt": "음성을 듣고 들은 문장을 선택하세요.",
        "options": [
          "버스가 늦었습니다.",
          "표 한 장 주세요.",
          "점심은 어디에서 살 수 있나요?",
          "수업은 여덟 시에 시작합니다."
        ],
        "answers": [
          "버스가 늦었습니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "버스가 늦었습니다.",
        "ttsLang": "ko-KR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ko-1-18",
        "type": "audio_choice",
        "prompt": "음성을 듣고 들은 문장을 선택하세요.",
        "options": [
          "표 한 장 주세요.",
          "점심은 어디에서 살 수 있나요?",
          "수업은 여덟 시에 시작합니다.",
          "어느 교실을 사용하나요?"
        ],
        "answers": [
          "표 한 장 주세요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "표 한 장 주세요.",
        "ttsLang": "ko-KR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ko-1-19",
        "type": "fill_blank",
        "prompt": "문장을 완성하세요. — 어느 교실을 ___",
        "options": [
          "사용하나요",
          "시작합니다",
          "했습니다",
          "있나요"
        ],
        "answers": [
          "사용하나요"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ko-1-20",
        "type": "fill_blank",
        "prompt": "문장을 완성하세요. — 숙제를 다 ___",
        "options": [
          "했습니다",
          "시작합니다",
          "사용하나요",
          "있나요"
        ],
        "answers": [
          "했습니다"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ko-1-21",
        "type": "fill_blank",
        "prompt": "문장을 완성하세요. — 다시 설명해 주실 수 ___",
        "options": [
          "있나요",
          "시작합니다",
          "사용하나요",
          "했습니다"
        ],
        "answers": [
          "있나요"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ko-1-22",
        "type": "fill_blank",
        "prompt": "문장을 완성하세요. — 책을 펴 ___",
        "options": [
          "주세요",
          "시작합니다",
          "사용하나요",
          "했습니다"
        ],
        "answers": [
          "주세요"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ko-1-23",
        "type": "sentence_builder",
        "prompt": "단어를 올바른 순서로 배열하세요.",
        "options": [
          "다시",
          "설명해",
          "주실",
          "수",
          "있나요"
        ],
        "answers": [
          "다시 설명해 주실 수 있나요"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ko-1-24",
        "type": "sentence_builder",
        "prompt": "단어를 올바른 순서로 배열하세요.",
        "options": [
          "책을",
          "펴",
          "주세요"
        ],
        "answers": [
          "책을 펴 주세요"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ko-1-25",
        "type": "sentence_builder",
        "prompt": "단어를 올바른 순서로 배열하세요.",
        "options": [
          "버스가",
          "늦었습니다"
        ],
        "answers": [
          "버스가 늦었습니다"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ko-1-26",
        "type": "sentence_builder",
        "prompt": "단어를 올바른 순서로 배열하세요.",
        "options": [
          "표",
          "한",
          "장",
          "주세요"
        ],
        "answers": [
          "표 한 장 주세요"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ko-1-27",
        "type": "scenario_decision",
        "prompt": "가장 적절한 답을 선택하세요.",
        "options": [
          "책을 펴 주세요.",
          "버스가 늦었습니다.",
          "표 한 장 주세요.",
          "점심은 어디에서 살 수 있나요?"
        ],
        "answers": [
          "책을 펴 주세요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ko-1-28",
        "type": "scenario_decision",
        "prompt": "가장 적절한 답을 선택하세요.",
        "options": [
          "버스가 늦었습니다.",
          "표 한 장 주세요.",
          "점심은 어디에서 살 수 있나요?",
          "수업은 여덟 시에 시작합니다."
        ],
        "answers": [
          "버스가 늦었습니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ko-1-29",
        "type": "scenario_decision",
        "prompt": "가장 적절한 답을 선택하세요.",
        "options": [
          "표 한 장 주세요.",
          "점심은 어디에서 살 수 있나요?",
          "수업은 여덟 시에 시작합니다.",
          "어느 교실을 사용하나요?"
        ],
        "answers": [
          "표 한 장 주세요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ko-1-30",
        "type": "scenario_decision",
        "prompt": "가장 적절한 답을 선택하세요.",
        "options": [
          "점심은 어디에서 살 수 있나요?",
          "수업은 여덟 시에 시작합니다.",
          "어느 교실을 사용하나요?",
          "숙제를 다 했습니다."
        ],
        "answers": [
          "점심은 어디에서 살 수 있나요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-ko-3",
    "title": "한국어 — 직장과 전문 소통",
    "language": "ko",
    "level": "Professional",
    "topic": "한국어 — 직장과 전문 소통",
    "context": "Workplace & Professional",
    "skill": "Mixed",
    "description": "회의, 마감일, 이메일, 고객 응대에서 쓰는 한국어를 연습합니다.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-ko-2-01",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 오늘 보고서를 보내 주실 수 있나요?",
        "options": [
          "오늘 보고서를 보내 주실 수 있나요?",
          "회의는 세 시에 시작합니다.",
          "마감일을 확인해 주세요.",
          "시간이 조금 더 필요합니다."
        ],
        "answers": [
          "오늘 보고서를 보내 주실 수 있나요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-2-02",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 회의는 세 시에 시작합니다.",
        "options": [
          "회의는 세 시에 시작합니다.",
          "마감일을 확인해 주세요.",
          "시간이 조금 더 필요합니다.",
          "이메일로 후속 연락드리겠습니다."
        ],
        "answers": [
          "회의는 세 시에 시작합니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-2-03",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 마감일을 확인해 주세요.",
        "options": [
          "마감일을 확인해 주세요.",
          "시간이 조금 더 필요합니다.",
          "이메일로 후속 연락드리겠습니다.",
          "회의 일정을 변경할 수 있을까요?"
        ],
        "answers": [
          "마감일을 확인해 주세요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-2-04",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 시간이 조금 더 필요합니다.",
        "options": [
          "시간이 조금 더 필요합니다.",
          "이메일로 후속 연락드리겠습니다.",
          "회의 일정을 변경할 수 있을까요?",
          "도와주셔서 감사합니다."
        ],
        "answers": [
          "시간이 조금 더 필요합니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-2-05",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 이메일로 후속 연락드리겠습니다.",
        "options": [
          "이메일로 후속 연락드리겠습니다.",
          "회의 일정을 변경할 수 있을까요?",
          "도와주셔서 감사합니다.",
          "변경 사항이 있으면 알려 주세요."
        ],
        "answers": [
          "이메일로 후속 연락드리겠습니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-2-06",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 회의 일정을 변경할 수 있을까요?",
        "options": [
          "회의 일정을 변경할 수 있을까요?",
          "도와주셔서 감사합니다.",
          "변경 사항이 있으면 알려 주세요.",
          "오늘 보고서를 보내 주실 수 있나요?"
        ],
        "answers": [
          "회의 일정을 변경할 수 있을까요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-2-07",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 도와주셔서 감사합니다.",
        "options": [
          "도와주셔서 감사합니다.",
          "변경 사항이 있으면 알려 주세요.",
          "오늘 보고서를 보내 주실 수 있나요?",
          "회의는 세 시에 시작합니다."
        ],
        "answers": [
          "도와주셔서 감사합니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-2-08",
        "type": "multiple_choice",
        "prompt": "알맞은 표현을 선택하세요. — 변경 사항이 있으면 알려 주세요.",
        "options": [
          "변경 사항이 있으면 알려 주세요.",
          "오늘 보고서를 보내 주실 수 있나요?",
          "회의는 세 시에 시작합니다.",
          "마감일을 확인해 주세요."
        ],
        "answers": [
          "변경 사항이 있으면 알려 주세요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ko-2-09",
        "type": "typed",
        "prompt": "다음 문장을 정확히 입력하세요. — 오늘 보고서를 보내 주실 수 있나요?",
        "options": [],
        "answers": [
          "오늘 보고서를 보내 주실 수 있나요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ko-2-10",
        "type": "typed",
        "prompt": "다음 문장을 정확히 입력하세요. — 회의는 세 시에 시작합니다.",
        "options": [],
        "answers": [
          "회의는 세 시에 시작합니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ko-2-11",
        "type": "typed",
        "prompt": "다음 문장을 정확히 입력하세요. — 마감일을 확인해 주세요.",
        "options": [],
        "answers": [
          "마감일을 확인해 주세요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ko-2-12",
        "type": "typed",
        "prompt": "다음 문장을 정확히 입력하세요. — 시간이 조금 더 필요합니다.",
        "options": [],
        "answers": [
          "시간이 조금 더 필요합니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ko-2-13",
        "type": "typed",
        "prompt": "다음 문장을 정확히 입력하세요. — 이메일로 후속 연락드리겠습니다.",
        "options": [],
        "answers": [
          "이메일로 후속 연락드리겠습니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ko-2-14",
        "type": "audio_choice",
        "prompt": "음성을 듣고 들은 문장을 선택하세요.",
        "options": [
          "마감일을 확인해 주세요.",
          "시간이 조금 더 필요합니다.",
          "이메일로 후속 연락드리겠습니다.",
          "회의 일정을 변경할 수 있을까요?"
        ],
        "answers": [
          "마감일을 확인해 주세요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "마감일을 확인해 주세요.",
        "ttsLang": "ko-KR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ko-2-15",
        "type": "audio_choice",
        "prompt": "음성을 듣고 들은 문장을 선택하세요.",
        "options": [
          "시간이 조금 더 필요합니다.",
          "이메일로 후속 연락드리겠습니다.",
          "회의 일정을 변경할 수 있을까요?",
          "도와주셔서 감사합니다."
        ],
        "answers": [
          "시간이 조금 더 필요합니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "시간이 조금 더 필요합니다.",
        "ttsLang": "ko-KR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ko-2-16",
        "type": "audio_choice",
        "prompt": "음성을 듣고 들은 문장을 선택하세요.",
        "options": [
          "이메일로 후속 연락드리겠습니다.",
          "회의 일정을 변경할 수 있을까요?",
          "도와주셔서 감사합니다.",
          "변경 사항이 있으면 알려 주세요."
        ],
        "answers": [
          "이메일로 후속 연락드리겠습니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "이메일로 후속 연락드리겠습니다.",
        "ttsLang": "ko-KR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ko-2-17",
        "type": "audio_choice",
        "prompt": "음성을 듣고 들은 문장을 선택하세요.",
        "options": [
          "회의 일정을 변경할 수 있을까요?",
          "도와주셔서 감사합니다.",
          "변경 사항이 있으면 알려 주세요.",
          "오늘 보고서를 보내 주실 수 있나요?"
        ],
        "answers": [
          "회의 일정을 변경할 수 있을까요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "회의 일정을 변경할 수 있을까요?",
        "ttsLang": "ko-KR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ko-2-18",
        "type": "audio_choice",
        "prompt": "음성을 듣고 들은 문장을 선택하세요.",
        "options": [
          "도와주셔서 감사합니다.",
          "변경 사항이 있으면 알려 주세요.",
          "오늘 보고서를 보내 주실 수 있나요?",
          "회의는 세 시에 시작합니다."
        ],
        "answers": [
          "도와주셔서 감사합니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "도와주셔서 감사합니다.",
        "ttsLang": "ko-KR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ko-2-19",
        "type": "fill_blank",
        "prompt": "문장을 완성하세요. — 회의는 세 시에 ___",
        "options": [
          "시작합니다",
          "있나요",
          "주세요",
          "필요합니다"
        ],
        "answers": [
          "시작합니다"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ko-2-20",
        "type": "fill_blank",
        "prompt": "문장을 완성하세요. — 마감일을 확인해 ___",
        "options": [
          "주세요",
          "있나요",
          "시작합니다",
          "필요합니다"
        ],
        "answers": [
          "주세요"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ko-2-21",
        "type": "fill_blank",
        "prompt": "문장을 완성하세요. — 시간이 조금 더 ___",
        "options": [
          "필요합니다",
          "있나요",
          "시작합니다",
          "주세요"
        ],
        "answers": [
          "필요합니다"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ko-2-22",
        "type": "fill_blank",
        "prompt": "문장을 완성하세요. — 이메일로 후속 ___",
        "options": [
          "연락드리겠습니다",
          "있나요",
          "시작합니다",
          "주세요"
        ],
        "answers": [
          "연락드리겠습니다"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ko-2-23",
        "type": "sentence_builder",
        "prompt": "단어를 올바른 순서로 배열하세요.",
        "options": [
          "시간이",
          "조금",
          "더",
          "필요합니다"
        ],
        "answers": [
          "시간이 조금 더 필요합니다"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ko-2-24",
        "type": "sentence_builder",
        "prompt": "단어를 올바른 순서로 배열하세요.",
        "options": [
          "이메일로",
          "후속",
          "연락드리겠습니다"
        ],
        "answers": [
          "이메일로 후속 연락드리겠습니다"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ko-2-25",
        "type": "sentence_builder",
        "prompt": "단어를 올바른 순서로 배열하세요.",
        "options": [
          "회의",
          "일정을",
          "변경할",
          "수",
          "있을까요"
        ],
        "answers": [
          "회의 일정을 변경할 수 있을까요"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ko-2-26",
        "type": "sentence_builder",
        "prompt": "단어를 올바른 순서로 배열하세요.",
        "options": [
          "도와주셔서",
          "감사합니다"
        ],
        "answers": [
          "도와주셔서 감사합니다"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ko-2-27",
        "type": "scenario_decision",
        "prompt": "가장 적절한 답을 선택하세요.",
        "options": [
          "이메일로 후속 연락드리겠습니다.",
          "회의 일정을 변경할 수 있을까요?",
          "도와주셔서 감사합니다.",
          "변경 사항이 있으면 알려 주세요."
        ],
        "answers": [
          "이메일로 후속 연락드리겠습니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ko-2-28",
        "type": "scenario_decision",
        "prompt": "가장 적절한 답을 선택하세요.",
        "options": [
          "회의 일정을 변경할 수 있을까요?",
          "도와주셔서 감사합니다.",
          "변경 사항이 있으면 알려 주세요.",
          "오늘 보고서를 보내 주실 수 있나요?"
        ],
        "answers": [
          "회의 일정을 변경할 수 있을까요?"
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ko-2-29",
        "type": "scenario_decision",
        "prompt": "가장 적절한 답을 선택하세요.",
        "options": [
          "도와주셔서 감사합니다.",
          "변경 사항이 있으면 알려 주세요.",
          "오늘 보고서를 보내 주실 수 있나요?",
          "회의는 세 시에 시작합니다."
        ],
        "answers": [
          "도와주셔서 감사합니다."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ko-2-30",
        "type": "scenario_decision",
        "prompt": "가장 적절한 답을 선택하세요.",
        "options": [
          "변경 사항이 있으면 알려 주세요.",
          "오늘 보고서를 보내 주실 수 있나요?",
          "회의는 세 시에 시작합니다.",
          "마감일을 확인해 주세요."
        ],
        "answers": [
          "변경 사항이 있으면 알려 주세요."
        ],
        "explanation": "문맥 속에서 이 표현을 다시 확인하세요.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-fr-1",
    "title": "Français — Fondamentaux",
    "language": "fr",
    "level": "Starter",
    "topic": "Français — Fondamentaux",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Pratiquez le français de base avec l’écoute, l’ordre des phrases et des réponses utiles.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-fr-0-01",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Bonjour.",
        "options": [
          "Bonjour.",
          "Merci beaucoup.",
          "Pouvez-vous m’aider, s’il vous plaît ?",
          "Où est la gare ?"
        ],
        "answers": [
          "Bonjour."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-0-02",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Merci beaucoup.",
        "options": [
          "Merci beaucoup.",
          "Pouvez-vous m’aider, s’il vous plaît ?",
          "Où est la gare ?",
          "À quelle heure ça commence ?"
        ],
        "answers": [
          "Merci beaucoup."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-0-03",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Pouvez-vous m’aider, s’il vous plaît ?",
        "options": [
          "Pouvez-vous m’aider, s’il vous plaît ?",
          "Où est la gare ?",
          "À quelle heure ça commence ?",
          "Je comprends."
        ],
        "answers": [
          "Pouvez-vous m’aider, s’il vous plaît ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-0-04",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Où est la gare ?",
        "options": [
          "Où est la gare ?",
          "À quelle heure ça commence ?",
          "Je comprends.",
          "Pouvez-vous répéter, s’il vous plaît ?"
        ],
        "answers": [
          "Où est la gare ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-0-05",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — À quelle heure ça commence ?",
        "options": [
          "À quelle heure ça commence ?",
          "Je comprends.",
          "Pouvez-vous répéter, s’il vous plaît ?",
          "À demain."
        ],
        "answers": [
          "À quelle heure ça commence ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-0-06",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Je comprends.",
        "options": [
          "Je comprends.",
          "Pouvez-vous répéter, s’il vous plaît ?",
          "À demain.",
          "Bonjour."
        ],
        "answers": [
          "Je comprends."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-0-07",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Pouvez-vous répéter, s’il vous plaît ?",
        "options": [
          "Pouvez-vous répéter, s’il vous plaît ?",
          "À demain.",
          "Bonjour.",
          "Merci beaucoup."
        ],
        "answers": [
          "Pouvez-vous répéter, s’il vous plaît ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-0-08",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — À demain.",
        "options": [
          "À demain.",
          "Bonjour.",
          "Merci beaucoup.",
          "Pouvez-vous m’aider, s’il vous plaît ?"
        ],
        "answers": [
          "À demain."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-0-09",
        "type": "typed",
        "prompt": "Tapez exactement la phrase suivante. — Bonjour.",
        "options": [],
        "answers": [
          "Bonjour."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-fr-0-10",
        "type": "typed",
        "prompt": "Tapez exactement la phrase suivante. — Merci beaucoup.",
        "options": [],
        "answers": [
          "Merci beaucoup."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-fr-0-11",
        "type": "typed",
        "prompt": "Tapez exactement la phrase suivante. — Pouvez-vous m’aider, s’il vous plaît ?",
        "options": [],
        "answers": [
          "Pouvez-vous m’aider, s’il vous plaît ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-fr-0-12",
        "type": "typed",
        "prompt": "Tapez exactement la phrase suivante. — Où est la gare ?",
        "options": [],
        "answers": [
          "Où est la gare ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-fr-0-13",
        "type": "typed",
        "prompt": "Tapez exactement la phrase suivante. — À quelle heure ça commence ?",
        "options": [],
        "answers": [
          "À quelle heure ça commence ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-fr-0-14",
        "type": "audio_choice",
        "prompt": "Écoutez et choisissez la phrase entendue.",
        "options": [
          "Pouvez-vous m’aider, s’il vous plaît ?",
          "Où est la gare ?",
          "À quelle heure ça commence ?",
          "Je comprends."
        ],
        "answers": [
          "Pouvez-vous m’aider, s’il vous plaît ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Pouvez-vous m’aider, s’il vous plaît ?",
        "ttsLang": "fr-FR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-fr-0-15",
        "type": "audio_choice",
        "prompt": "Écoutez et choisissez la phrase entendue.",
        "options": [
          "Où est la gare ?",
          "À quelle heure ça commence ?",
          "Je comprends.",
          "Pouvez-vous répéter, s’il vous plaît ?"
        ],
        "answers": [
          "Où est la gare ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Où est la gare ?",
        "ttsLang": "fr-FR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-fr-0-16",
        "type": "audio_choice",
        "prompt": "Écoutez et choisissez la phrase entendue.",
        "options": [
          "À quelle heure ça commence ?",
          "Je comprends.",
          "Pouvez-vous répéter, s’il vous plaît ?",
          "À demain."
        ],
        "answers": [
          "À quelle heure ça commence ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "À quelle heure ça commence ?",
        "ttsLang": "fr-FR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-fr-0-17",
        "type": "audio_choice",
        "prompt": "Écoutez et choisissez la phrase entendue.",
        "options": [
          "Je comprends.",
          "Pouvez-vous répéter, s’il vous plaît ?",
          "À demain.",
          "Bonjour."
        ],
        "answers": [
          "Je comprends."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Je comprends.",
        "ttsLang": "fr-FR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-fr-0-18",
        "type": "audio_choice",
        "prompt": "Écoutez et choisissez la phrase entendue.",
        "options": [
          "Pouvez-vous répéter, s’il vous plaît ?",
          "À demain.",
          "Bonjour.",
          "Merci beaucoup."
        ],
        "answers": [
          "Pouvez-vous répéter, s’il vous plaît ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Pouvez-vous répéter, s’il vous plaît ?",
        "ttsLang": "fr-FR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-fr-0-19",
        "type": "fill_blank",
        "prompt": "Complétez la phrase. — Merci ___",
        "options": [
          "beaucoup",
          "Bonjour",
          "",
          ""
        ],
        "answers": [
          "beaucoup"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-fr-0-20",
        "type": "fill_blank",
        "prompt": "Complétez la phrase. — Pouvez-vous m’aider, s’il vous plaît ___",
        "options": [
          "",
          "Bonjour",
          "beaucoup",
          ""
        ],
        "answers": [
          ""
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-fr-0-21",
        "type": "fill_blank",
        "prompt": "Complétez la phrase. — Où est la gare ___",
        "options": [
          "",
          "Bonjour",
          "beaucoup",
          ""
        ],
        "answers": [
          ""
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-fr-0-22",
        "type": "fill_blank",
        "prompt": "Complétez la phrase. — À quelle heure ça commence ___",
        "options": [
          "",
          "Bonjour",
          "beaucoup",
          ""
        ],
        "answers": [
          ""
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-fr-0-23",
        "type": "sentence_builder",
        "prompt": "Remettez les mots dans le bon ordre.",
        "options": [
          "Où",
          "est",
          "la",
          "gare"
        ],
        "answers": [
          "Où est la gare"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-fr-0-24",
        "type": "sentence_builder",
        "prompt": "Remettez les mots dans le bon ordre.",
        "options": [
          "À",
          "quelle",
          "heure",
          "ça",
          "commence"
        ],
        "answers": [
          "À quelle heure ça commence"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-fr-0-25",
        "type": "sentence_builder",
        "prompt": "Remettez les mots dans le bon ordre.",
        "options": [
          "Je",
          "comprends"
        ],
        "answers": [
          "Je comprends"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-fr-0-26",
        "type": "sentence_builder",
        "prompt": "Remettez les mots dans le bon ordre.",
        "options": [
          "Pouvez-vous",
          "répéter,",
          "s’il",
          "vous",
          "plaît"
        ],
        "answers": [
          "Pouvez-vous répéter, s’il vous plaît"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-fr-0-27",
        "type": "scenario_decision",
        "prompt": "Choisissez la réponse la plus appropriée.",
        "options": [
          "À quelle heure ça commence ?",
          "Je comprends.",
          "Pouvez-vous répéter, s’il vous plaît ?",
          "À demain."
        ],
        "answers": [
          "À quelle heure ça commence ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-fr-0-28",
        "type": "scenario_decision",
        "prompt": "Choisissez la réponse la plus appropriée.",
        "options": [
          "Je comprends.",
          "Pouvez-vous répéter, s’il vous plaît ?",
          "À demain.",
          "Bonjour."
        ],
        "answers": [
          "Je comprends."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-fr-0-29",
        "type": "scenario_decision",
        "prompt": "Choisissez la réponse la plus appropriée.",
        "options": [
          "Pouvez-vous répéter, s’il vous plaît ?",
          "À demain.",
          "Bonjour.",
          "Merci beaucoup."
        ],
        "answers": [
          "Pouvez-vous répéter, s’il vous plaît ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-fr-0-30",
        "type": "scenario_decision",
        "prompt": "Choisissez la réponse la plus appropriée.",
        "options": [
          "À demain.",
          "Bonjour.",
          "Merci beaucoup.",
          "Pouvez-vous m’aider, s’il vous plaît ?"
        ],
        "answers": [
          "À demain."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-fr-2",
    "title": "Français — École et vie quotidienne",
    "language": "fr",
    "level": "Intermediate",
    "topic": "Français — École et vie quotidienne",
    "context": "School & Travel",
    "skill": "Mixed",
    "description": "Pratiquez le français à l’école, en déplacement et dans la vie quotidienne.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-fr-1-01",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Le cours commence à huit heures.",
        "options": [
          "Le cours commence à huit heures.",
          "Dans quelle salle sommes-nous ?",
          "J’ai terminé mes devoirs.",
          "Pouvez-vous expliquer encore une fois ?"
        ],
        "answers": [
          "Le cours commence à huit heures."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-1-02",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Dans quelle salle sommes-nous ?",
        "options": [
          "Dans quelle salle sommes-nous ?",
          "J’ai terminé mes devoirs.",
          "Pouvez-vous expliquer encore une fois ?",
          "Ouvrez votre livre, s’il vous plaît."
        ],
        "answers": [
          "Dans quelle salle sommes-nous ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-1-03",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — J’ai terminé mes devoirs.",
        "options": [
          "J’ai terminé mes devoirs.",
          "Pouvez-vous expliquer encore une fois ?",
          "Ouvrez votre livre, s’il vous plaît.",
          "Le bus est en retard."
        ],
        "answers": [
          "J’ai terminé mes devoirs."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-1-04",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Pouvez-vous expliquer encore une fois ?",
        "options": [
          "Pouvez-vous expliquer encore une fois ?",
          "Ouvrez votre livre, s’il vous plaît.",
          "Le bus est en retard.",
          "Je voudrais un billet, s’il vous plaît."
        ],
        "answers": [
          "Pouvez-vous expliquer encore une fois ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-1-05",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Ouvrez votre livre, s’il vous plaît.",
        "options": [
          "Ouvrez votre livre, s’il vous plaît.",
          "Le bus est en retard.",
          "Je voudrais un billet, s’il vous plaît.",
          "Où puis-je acheter le déjeuner ?"
        ],
        "answers": [
          "Ouvrez votre livre, s’il vous plaît."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-1-06",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Le bus est en retard.",
        "options": [
          "Le bus est en retard.",
          "Je voudrais un billet, s’il vous plaît.",
          "Où puis-je acheter le déjeuner ?",
          "Le cours commence à huit heures."
        ],
        "answers": [
          "Le bus est en retard."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-1-07",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Je voudrais un billet, s’il vous plaît.",
        "options": [
          "Je voudrais un billet, s’il vous plaît.",
          "Où puis-je acheter le déjeuner ?",
          "Le cours commence à huit heures.",
          "Dans quelle salle sommes-nous ?"
        ],
        "answers": [
          "Je voudrais un billet, s’il vous plaît."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-1-08",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Où puis-je acheter le déjeuner ?",
        "options": [
          "Où puis-je acheter le déjeuner ?",
          "Le cours commence à huit heures.",
          "Dans quelle salle sommes-nous ?",
          "J’ai terminé mes devoirs."
        ],
        "answers": [
          "Où puis-je acheter le déjeuner ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-1-09",
        "type": "typed",
        "prompt": "Tapez exactement la phrase suivante. — Le cours commence à huit heures.",
        "options": [],
        "answers": [
          "Le cours commence à huit heures."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-fr-1-10",
        "type": "typed",
        "prompt": "Tapez exactement la phrase suivante. — Dans quelle salle sommes-nous ?",
        "options": [],
        "answers": [
          "Dans quelle salle sommes-nous ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-fr-1-11",
        "type": "typed",
        "prompt": "Tapez exactement la phrase suivante. — J’ai terminé mes devoirs.",
        "options": [],
        "answers": [
          "J’ai terminé mes devoirs."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-fr-1-12",
        "type": "typed",
        "prompt": "Tapez exactement la phrase suivante. — Pouvez-vous expliquer encore une fois ?",
        "options": [],
        "answers": [
          "Pouvez-vous expliquer encore une fois ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-fr-1-13",
        "type": "typed",
        "prompt": "Tapez exactement la phrase suivante. — Ouvrez votre livre, s’il vous plaît.",
        "options": [],
        "answers": [
          "Ouvrez votre livre, s’il vous plaît."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-fr-1-14",
        "type": "audio_choice",
        "prompt": "Écoutez et choisissez la phrase entendue.",
        "options": [
          "J’ai terminé mes devoirs.",
          "Pouvez-vous expliquer encore une fois ?",
          "Ouvrez votre livre, s’il vous plaît.",
          "Le bus est en retard."
        ],
        "answers": [
          "J’ai terminé mes devoirs."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "J’ai terminé mes devoirs.",
        "ttsLang": "fr-FR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-fr-1-15",
        "type": "audio_choice",
        "prompt": "Écoutez et choisissez la phrase entendue.",
        "options": [
          "Pouvez-vous expliquer encore une fois ?",
          "Ouvrez votre livre, s’il vous plaît.",
          "Le bus est en retard.",
          "Je voudrais un billet, s’il vous plaît."
        ],
        "answers": [
          "Pouvez-vous expliquer encore une fois ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Pouvez-vous expliquer encore une fois ?",
        "ttsLang": "fr-FR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-fr-1-16",
        "type": "audio_choice",
        "prompt": "Écoutez et choisissez la phrase entendue.",
        "options": [
          "Ouvrez votre livre, s’il vous plaît.",
          "Le bus est en retard.",
          "Je voudrais un billet, s’il vous plaît.",
          "Où puis-je acheter le déjeuner ?"
        ],
        "answers": [
          "Ouvrez votre livre, s’il vous plaît."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Ouvrez votre livre, s’il vous plaît.",
        "ttsLang": "fr-FR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-fr-1-17",
        "type": "audio_choice",
        "prompt": "Écoutez et choisissez la phrase entendue.",
        "options": [
          "Le bus est en retard.",
          "Je voudrais un billet, s’il vous plaît.",
          "Où puis-je acheter le déjeuner ?",
          "Le cours commence à huit heures."
        ],
        "answers": [
          "Le bus est en retard."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Le bus est en retard.",
        "ttsLang": "fr-FR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-fr-1-18",
        "type": "audio_choice",
        "prompt": "Écoutez et choisissez la phrase entendue.",
        "options": [
          "Je voudrais un billet, s’il vous plaît.",
          "Où puis-je acheter le déjeuner ?",
          "Le cours commence à huit heures.",
          "Dans quelle salle sommes-nous ?"
        ],
        "answers": [
          "Je voudrais un billet, s’il vous plaît."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Je voudrais un billet, s’il vous plaît.",
        "ttsLang": "fr-FR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-fr-1-19",
        "type": "fill_blank",
        "prompt": "Complétez la phrase. — Dans quelle salle sommes-nous ___",
        "options": [
          "",
          "heures",
          "devoirs",
          ""
        ],
        "answers": [
          ""
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-fr-1-20",
        "type": "fill_blank",
        "prompt": "Complétez la phrase. — J’ai terminé mes ___",
        "options": [
          "devoirs",
          "heures",
          "",
          ""
        ],
        "answers": [
          "devoirs"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-fr-1-21",
        "type": "fill_blank",
        "prompt": "Complétez la phrase. — Pouvez-vous expliquer encore une fois ___",
        "options": [
          "",
          "heures",
          "",
          "devoirs"
        ],
        "answers": [
          ""
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-fr-1-22",
        "type": "fill_blank",
        "prompt": "Complétez la phrase. — Ouvrez votre livre, s’il vous ___",
        "options": [
          "plaît",
          "heures",
          "",
          "devoirs"
        ],
        "answers": [
          "plaît"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-fr-1-23",
        "type": "sentence_builder",
        "prompt": "Remettez les mots dans le bon ordre.",
        "options": [
          "Pouvez-vous",
          "expliquer",
          "encore",
          "une",
          "fois"
        ],
        "answers": [
          "Pouvez-vous expliquer encore une fois"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-fr-1-24",
        "type": "sentence_builder",
        "prompt": "Remettez les mots dans le bon ordre.",
        "options": [
          "Ouvrez",
          "votre",
          "livre,",
          "s’il",
          "vous",
          "plaît"
        ],
        "answers": [
          "Ouvrez votre livre, s’il vous plaît"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-fr-1-25",
        "type": "sentence_builder",
        "prompt": "Remettez les mots dans le bon ordre.",
        "options": [
          "Le",
          "bus",
          "est",
          "en",
          "retard"
        ],
        "answers": [
          "Le bus est en retard"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-fr-1-26",
        "type": "sentence_builder",
        "prompt": "Remettez les mots dans le bon ordre.",
        "options": [
          "Je",
          "voudrais",
          "un",
          "billet,",
          "s’il",
          "vous",
          "plaît"
        ],
        "answers": [
          "Je voudrais un billet, s’il vous plaît"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-fr-1-27",
        "type": "scenario_decision",
        "prompt": "Choisissez la réponse la plus appropriée.",
        "options": [
          "Ouvrez votre livre, s’il vous plaît.",
          "Le bus est en retard.",
          "Je voudrais un billet, s’il vous plaît.",
          "Où puis-je acheter le déjeuner ?"
        ],
        "answers": [
          "Ouvrez votre livre, s’il vous plaît."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-fr-1-28",
        "type": "scenario_decision",
        "prompt": "Choisissez la réponse la plus appropriée.",
        "options": [
          "Le bus est en retard.",
          "Je voudrais un billet, s’il vous plaît.",
          "Où puis-je acheter le déjeuner ?",
          "Le cours commence à huit heures."
        ],
        "answers": [
          "Le bus est en retard."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-fr-1-29",
        "type": "scenario_decision",
        "prompt": "Choisissez la réponse la plus appropriée.",
        "options": [
          "Je voudrais un billet, s’il vous plaît.",
          "Où puis-je acheter le déjeuner ?",
          "Le cours commence à huit heures.",
          "Dans quelle salle sommes-nous ?"
        ],
        "answers": [
          "Je voudrais un billet, s’il vous plaît."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-fr-1-30",
        "type": "scenario_decision",
        "prompt": "Choisissez la réponse la plus appropriée.",
        "options": [
          "Où puis-je acheter le déjeuner ?",
          "Le cours commence à huit heures.",
          "Dans quelle salle sommes-nous ?",
          "J’ai terminé mes devoirs."
        ],
        "answers": [
          "Où puis-je acheter le déjeuner ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-fr-3",
    "title": "Français — Travail et communication professionnelle",
    "language": "fr",
    "level": "Professional",
    "topic": "Français — Travail et communication professionnelle",
    "context": "Workplace & Professional",
    "skill": "Mixed",
    "description": "Pratiquez le français professionnel pour les réunions, délais, e-mails et clients.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-fr-2-01",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Pouvez-vous envoyer le rapport aujourd’hui ?",
        "options": [
          "Pouvez-vous envoyer le rapport aujourd’hui ?",
          "La réunion commence à trois heures.",
          "Veuillez confirmer la date limite.",
          "J’ai besoin d’un peu plus de temps."
        ],
        "answers": [
          "Pouvez-vous envoyer le rapport aujourd’hui ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-2-02",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — La réunion commence à trois heures.",
        "options": [
          "La réunion commence à trois heures.",
          "Veuillez confirmer la date limite.",
          "J’ai besoin d’un peu plus de temps.",
          "Je ferai un suivi par e-mail."
        ],
        "answers": [
          "La réunion commence à trois heures."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-2-03",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Veuillez confirmer la date limite.",
        "options": [
          "Veuillez confirmer la date limite.",
          "J’ai besoin d’un peu plus de temps.",
          "Je ferai un suivi par e-mail.",
          "Pouvons-nous reporter la réunion ?"
        ],
        "answers": [
          "Veuillez confirmer la date limite."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-2-04",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — J’ai besoin d’un peu plus de temps.",
        "options": [
          "J’ai besoin d’un peu plus de temps.",
          "Je ferai un suivi par e-mail.",
          "Pouvons-nous reporter la réunion ?",
          "Merci pour votre aide."
        ],
        "answers": [
          "J’ai besoin d’un peu plus de temps."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-2-05",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Je ferai un suivi par e-mail.",
        "options": [
          "Je ferai un suivi par e-mail.",
          "Pouvons-nous reporter la réunion ?",
          "Merci pour votre aide.",
          "Prévenez-moi s’il y a un changement."
        ],
        "answers": [
          "Je ferai un suivi par e-mail."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-2-06",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Pouvons-nous reporter la réunion ?",
        "options": [
          "Pouvons-nous reporter la réunion ?",
          "Merci pour votre aide.",
          "Prévenez-moi s’il y a un changement.",
          "Pouvez-vous envoyer le rapport aujourd’hui ?"
        ],
        "answers": [
          "Pouvons-nous reporter la réunion ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-2-07",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Merci pour votre aide.",
        "options": [
          "Merci pour votre aide.",
          "Prévenez-moi s’il y a un changement.",
          "Pouvez-vous envoyer le rapport aujourd’hui ?",
          "La réunion commence à trois heures."
        ],
        "answers": [
          "Merci pour votre aide."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-2-08",
        "type": "multiple_choice",
        "prompt": "Choisissez l’expression correcte. — Prévenez-moi s’il y a un changement.",
        "options": [
          "Prévenez-moi s’il y a un changement.",
          "Pouvez-vous envoyer le rapport aujourd’hui ?",
          "La réunion commence à trois heures.",
          "Veuillez confirmer la date limite."
        ],
        "answers": [
          "Prévenez-moi s’il y a un changement."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-fr-2-09",
        "type": "typed",
        "prompt": "Tapez exactement la phrase suivante. — Pouvez-vous envoyer le rapport aujourd’hui ?",
        "options": [],
        "answers": [
          "Pouvez-vous envoyer le rapport aujourd’hui ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-fr-2-10",
        "type": "typed",
        "prompt": "Tapez exactement la phrase suivante. — La réunion commence à trois heures.",
        "options": [],
        "answers": [
          "La réunion commence à trois heures."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-fr-2-11",
        "type": "typed",
        "prompt": "Tapez exactement la phrase suivante. — Veuillez confirmer la date limite.",
        "options": [],
        "answers": [
          "Veuillez confirmer la date limite."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-fr-2-12",
        "type": "typed",
        "prompt": "Tapez exactement la phrase suivante. — J’ai besoin d’un peu plus de temps.",
        "options": [],
        "answers": [
          "J’ai besoin d’un peu plus de temps."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-fr-2-13",
        "type": "typed",
        "prompt": "Tapez exactement la phrase suivante. — Je ferai un suivi par e-mail.",
        "options": [],
        "answers": [
          "Je ferai un suivi par e-mail."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-fr-2-14",
        "type": "audio_choice",
        "prompt": "Écoutez et choisissez la phrase entendue.",
        "options": [
          "Veuillez confirmer la date limite.",
          "J’ai besoin d’un peu plus de temps.",
          "Je ferai un suivi par e-mail.",
          "Pouvons-nous reporter la réunion ?"
        ],
        "answers": [
          "Veuillez confirmer la date limite."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Veuillez confirmer la date limite.",
        "ttsLang": "fr-FR",
        "maxPlays": 3,
        "playbackRate": 1,
        "mediaUrl": "/audio/fr-workplace.wav"
      },
      {
        "id": "native-fr-2-15",
        "type": "audio_choice",
        "prompt": "Écoutez et choisissez la phrase entendue.",
        "options": [
          "J’ai besoin d’un peu plus de temps.",
          "Je ferai un suivi par e-mail.",
          "Pouvons-nous reporter la réunion ?",
          "Merci pour votre aide."
        ],
        "answers": [
          "J’ai besoin d’un peu plus de temps."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "J’ai besoin d’un peu plus de temps.",
        "ttsLang": "fr-FR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-fr-2-16",
        "type": "audio_choice",
        "prompt": "Écoutez et choisissez la phrase entendue.",
        "options": [
          "Je ferai un suivi par e-mail.",
          "Pouvons-nous reporter la réunion ?",
          "Merci pour votre aide.",
          "Prévenez-moi s’il y a un changement."
        ],
        "answers": [
          "Je ferai un suivi par e-mail."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Je ferai un suivi par e-mail.",
        "ttsLang": "fr-FR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-fr-2-17",
        "type": "audio_choice",
        "prompt": "Écoutez et choisissez la phrase entendue.",
        "options": [
          "Pouvons-nous reporter la réunion ?",
          "Merci pour votre aide.",
          "Prévenez-moi s’il y a un changement.",
          "Pouvez-vous envoyer le rapport aujourd’hui ?"
        ],
        "answers": [
          "Pouvons-nous reporter la réunion ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Pouvons-nous reporter la réunion ?",
        "ttsLang": "fr-FR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-fr-2-18",
        "type": "audio_choice",
        "prompt": "Écoutez et choisissez la phrase entendue.",
        "options": [
          "Merci pour votre aide.",
          "Prévenez-moi s’il y a un changement.",
          "Pouvez-vous envoyer le rapport aujourd’hui ?",
          "La réunion commence à trois heures."
        ],
        "answers": [
          "Merci pour votre aide."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Merci pour votre aide.",
        "ttsLang": "fr-FR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-fr-2-19",
        "type": "fill_blank",
        "prompt": "Complétez la phrase. — La réunion commence à trois ___",
        "options": [
          "heures",
          "",
          "limite",
          "temps"
        ],
        "answers": [
          "heures"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-fr-2-20",
        "type": "fill_blank",
        "prompt": "Complétez la phrase. — Veuillez confirmer la date ___",
        "options": [
          "limite",
          "",
          "heures",
          "temps"
        ],
        "answers": [
          "limite"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-fr-2-21",
        "type": "fill_blank",
        "prompt": "Complétez la phrase. — J’ai besoin d’un peu plus de ___",
        "options": [
          "temps",
          "",
          "heures",
          "limite"
        ],
        "answers": [
          "temps"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-fr-2-22",
        "type": "fill_blank",
        "prompt": "Complétez la phrase. — Je ferai un suivi par ___",
        "options": [
          "e-mail",
          "",
          "heures",
          "limite"
        ],
        "answers": [
          "e-mail"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-fr-2-23",
        "type": "sentence_builder",
        "prompt": "Remettez les mots dans le bon ordre.",
        "options": [
          "J’ai",
          "besoin",
          "d’un",
          "peu",
          "plus",
          "de",
          "temps"
        ],
        "answers": [
          "J’ai besoin d’un peu plus de temps"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-fr-2-24",
        "type": "sentence_builder",
        "prompt": "Remettez les mots dans le bon ordre.",
        "options": [
          "Je",
          "ferai",
          "un",
          "suivi",
          "par",
          "e-mail"
        ],
        "answers": [
          "Je ferai un suivi par e-mail"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-fr-2-25",
        "type": "sentence_builder",
        "prompt": "Remettez les mots dans le bon ordre.",
        "options": [
          "Pouvons-nous",
          "reporter",
          "la",
          "réunion"
        ],
        "answers": [
          "Pouvons-nous reporter la réunion"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-fr-2-26",
        "type": "sentence_builder",
        "prompt": "Remettez les mots dans le bon ordre.",
        "options": [
          "Merci",
          "pour",
          "votre",
          "aide"
        ],
        "answers": [
          "Merci pour votre aide"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-fr-2-27",
        "type": "scenario_decision",
        "prompt": "Choisissez la réponse la plus appropriée.",
        "options": [
          "Je ferai un suivi par e-mail.",
          "Pouvons-nous reporter la réunion ?",
          "Merci pour votre aide.",
          "Prévenez-moi s’il y a un changement."
        ],
        "answers": [
          "Je ferai un suivi par e-mail."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-fr-2-28",
        "type": "scenario_decision",
        "prompt": "Choisissez la réponse la plus appropriée.",
        "options": [
          "Pouvons-nous reporter la réunion ?",
          "Merci pour votre aide.",
          "Prévenez-moi s’il y a un changement.",
          "Pouvez-vous envoyer le rapport aujourd’hui ?"
        ],
        "answers": [
          "Pouvons-nous reporter la réunion ?"
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-fr-2-29",
        "type": "scenario_decision",
        "prompt": "Choisissez la réponse la plus appropriée.",
        "options": [
          "Merci pour votre aide.",
          "Prévenez-moi s’il y a un changement.",
          "Pouvez-vous envoyer le rapport aujourd’hui ?",
          "La réunion commence à trois heures."
        ],
        "answers": [
          "Merci pour votre aide."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-fr-2-30",
        "type": "scenario_decision",
        "prompt": "Choisissez la réponse la plus appropriée.",
        "options": [
          "Prévenez-moi s’il y a un changement.",
          "Pouvez-vous envoyer le rapport aujourd’hui ?",
          "La réunion commence à trois heures.",
          "Veuillez confirmer la date limite."
        ],
        "answers": [
          "Prévenez-moi s’il y a un changement."
        ],
        "explanation": "Revoyez cette expression dans son contexte.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-de-1",
    "title": "Deutsch — Grundlagen",
    "language": "de",
    "level": "Starter",
    "topic": "Deutsch — Grundlagen",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Üben Sie grundlegendes Deutsch mit Hörübungen, Satzbau und praktischen Antworten.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-de-0-01",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Guten Morgen.",
        "options": [
          "Guten Morgen.",
          "Vielen Dank.",
          "Können Sie mir bitte helfen?",
          "Wo ist der Bahnhof?"
        ],
        "answers": [
          "Guten Morgen."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-0-02",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Vielen Dank.",
        "options": [
          "Vielen Dank.",
          "Können Sie mir bitte helfen?",
          "Wo ist der Bahnhof?",
          "Wann beginnt es?"
        ],
        "answers": [
          "Vielen Dank."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-0-03",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Können Sie mir bitte helfen?",
        "options": [
          "Können Sie mir bitte helfen?",
          "Wo ist der Bahnhof?",
          "Wann beginnt es?",
          "Ich verstehe."
        ],
        "answers": [
          "Können Sie mir bitte helfen?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-0-04",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Wo ist der Bahnhof?",
        "options": [
          "Wo ist der Bahnhof?",
          "Wann beginnt es?",
          "Ich verstehe.",
          "Bitte sagen Sie das noch einmal."
        ],
        "answers": [
          "Wo ist der Bahnhof?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-0-05",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Wann beginnt es?",
        "options": [
          "Wann beginnt es?",
          "Ich verstehe.",
          "Bitte sagen Sie das noch einmal.",
          "Bis morgen."
        ],
        "answers": [
          "Wann beginnt es?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-0-06",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Ich verstehe.",
        "options": [
          "Ich verstehe.",
          "Bitte sagen Sie das noch einmal.",
          "Bis morgen.",
          "Guten Morgen."
        ],
        "answers": [
          "Ich verstehe."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-0-07",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Bitte sagen Sie das noch einmal.",
        "options": [
          "Bitte sagen Sie das noch einmal.",
          "Bis morgen.",
          "Guten Morgen.",
          "Vielen Dank."
        ],
        "answers": [
          "Bitte sagen Sie das noch einmal."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-0-08",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Bis morgen.",
        "options": [
          "Bis morgen.",
          "Guten Morgen.",
          "Vielen Dank.",
          "Können Sie mir bitte helfen?"
        ],
        "answers": [
          "Bis morgen."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-0-09",
        "type": "typed",
        "prompt": "Geben Sie den folgenden Satz genau ein. — Guten Morgen.",
        "options": [],
        "answers": [
          "Guten Morgen."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-de-0-10",
        "type": "typed",
        "prompt": "Geben Sie den folgenden Satz genau ein. — Vielen Dank.",
        "options": [],
        "answers": [
          "Vielen Dank."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-de-0-11",
        "type": "typed",
        "prompt": "Geben Sie den folgenden Satz genau ein. — Können Sie mir bitte helfen?",
        "options": [],
        "answers": [
          "Können Sie mir bitte helfen?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-de-0-12",
        "type": "typed",
        "prompt": "Geben Sie den folgenden Satz genau ein. — Wo ist der Bahnhof?",
        "options": [],
        "answers": [
          "Wo ist der Bahnhof?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-de-0-13",
        "type": "typed",
        "prompt": "Geben Sie den folgenden Satz genau ein. — Wann beginnt es?",
        "options": [],
        "answers": [
          "Wann beginnt es?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-de-0-14",
        "type": "audio_choice",
        "prompt": "Hören Sie zu und wählen Sie den gehörten Satz.",
        "options": [
          "Können Sie mir bitte helfen?",
          "Wo ist der Bahnhof?",
          "Wann beginnt es?",
          "Ich verstehe."
        ],
        "answers": [
          "Können Sie mir bitte helfen?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Können Sie mir bitte helfen?",
        "ttsLang": "de-DE",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-de-0-15",
        "type": "audio_choice",
        "prompt": "Hören Sie zu und wählen Sie den gehörten Satz.",
        "options": [
          "Wo ist der Bahnhof?",
          "Wann beginnt es?",
          "Ich verstehe.",
          "Bitte sagen Sie das noch einmal."
        ],
        "answers": [
          "Wo ist der Bahnhof?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Wo ist der Bahnhof?",
        "ttsLang": "de-DE",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-de-0-16",
        "type": "audio_choice",
        "prompt": "Hören Sie zu und wählen Sie den gehörten Satz.",
        "options": [
          "Wann beginnt es?",
          "Ich verstehe.",
          "Bitte sagen Sie das noch einmal.",
          "Bis morgen."
        ],
        "answers": [
          "Wann beginnt es?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Wann beginnt es?",
        "ttsLang": "de-DE",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-de-0-17",
        "type": "audio_choice",
        "prompt": "Hören Sie zu und wählen Sie den gehörten Satz.",
        "options": [
          "Ich verstehe.",
          "Bitte sagen Sie das noch einmal.",
          "Bis morgen.",
          "Guten Morgen."
        ],
        "answers": [
          "Ich verstehe."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Ich verstehe.",
        "ttsLang": "de-DE",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-de-0-18",
        "type": "audio_choice",
        "prompt": "Hören Sie zu und wählen Sie den gehörten Satz.",
        "options": [
          "Bitte sagen Sie das noch einmal.",
          "Bis morgen.",
          "Guten Morgen.",
          "Vielen Dank."
        ],
        "answers": [
          "Bitte sagen Sie das noch einmal."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Bitte sagen Sie das noch einmal.",
        "ttsLang": "de-DE",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-de-0-19",
        "type": "fill_blank",
        "prompt": "Vervollständigen Sie den Satz. — Vielen ___",
        "options": [
          "Dank",
          "Morgen",
          "helfen",
          "Bahnhof"
        ],
        "answers": [
          "Dank"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-de-0-20",
        "type": "fill_blank",
        "prompt": "Vervollständigen Sie den Satz. — Können Sie mir bitte ___",
        "options": [
          "helfen",
          "Morgen",
          "Dank",
          "Bahnhof"
        ],
        "answers": [
          "helfen"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-de-0-21",
        "type": "fill_blank",
        "prompt": "Vervollständigen Sie den Satz. — Wo ist der ___",
        "options": [
          "Bahnhof",
          "Morgen",
          "Dank",
          "helfen"
        ],
        "answers": [
          "Bahnhof"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-de-0-22",
        "type": "fill_blank",
        "prompt": "Vervollständigen Sie den Satz. — Wann beginnt ___",
        "options": [
          "es",
          "Morgen",
          "Dank",
          "helfen"
        ],
        "answers": [
          "es"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-de-0-23",
        "type": "sentence_builder",
        "prompt": "Bringen Sie die Wörter in die richtige Reihenfolge.",
        "options": [
          "Wo",
          "ist",
          "der",
          "Bahnhof"
        ],
        "answers": [
          "Wo ist der Bahnhof"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-de-0-24",
        "type": "sentence_builder",
        "prompt": "Bringen Sie die Wörter in die richtige Reihenfolge.",
        "options": [
          "Wann",
          "beginnt",
          "es"
        ],
        "answers": [
          "Wann beginnt es"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-de-0-25",
        "type": "sentence_builder",
        "prompt": "Bringen Sie die Wörter in die richtige Reihenfolge.",
        "options": [
          "Ich",
          "verstehe"
        ],
        "answers": [
          "Ich verstehe"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-de-0-26",
        "type": "sentence_builder",
        "prompt": "Bringen Sie die Wörter in die richtige Reihenfolge.",
        "options": [
          "Bitte",
          "sagen",
          "Sie",
          "das",
          "noch",
          "einmal"
        ],
        "answers": [
          "Bitte sagen Sie das noch einmal"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-de-0-27",
        "type": "scenario_decision",
        "prompt": "Wählen Sie die passendste Antwort.",
        "options": [
          "Wann beginnt es?",
          "Ich verstehe.",
          "Bitte sagen Sie das noch einmal.",
          "Bis morgen."
        ],
        "answers": [
          "Wann beginnt es?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-de-0-28",
        "type": "scenario_decision",
        "prompt": "Wählen Sie die passendste Antwort.",
        "options": [
          "Ich verstehe.",
          "Bitte sagen Sie das noch einmal.",
          "Bis morgen.",
          "Guten Morgen."
        ],
        "answers": [
          "Ich verstehe."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-de-0-29",
        "type": "scenario_decision",
        "prompt": "Wählen Sie die passendste Antwort.",
        "options": [
          "Bitte sagen Sie das noch einmal.",
          "Bis morgen.",
          "Guten Morgen.",
          "Vielen Dank."
        ],
        "answers": [
          "Bitte sagen Sie das noch einmal."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-de-0-30",
        "type": "scenario_decision",
        "prompt": "Wählen Sie die passendste Antwort.",
        "options": [
          "Bis morgen.",
          "Guten Morgen.",
          "Vielen Dank.",
          "Können Sie mir bitte helfen?"
        ],
        "answers": [
          "Bis morgen."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-de-2",
    "title": "Deutsch — Schule und Alltag",
    "language": "de",
    "level": "Intermediate",
    "topic": "Deutsch — Schule und Alltag",
    "context": "School & Travel",
    "skill": "Mixed",
    "description": "Üben Sie Deutsch in Schule, unterwegs und im Alltag.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-de-1-01",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Der Unterricht beginnt um acht Uhr.",
        "options": [
          "Der Unterricht beginnt um acht Uhr.",
          "Welchen Raum benutzen wir?",
          "Ich habe meine Hausaufgaben fertig.",
          "Können Sie das noch einmal erklären?"
        ],
        "answers": [
          "Der Unterricht beginnt um acht Uhr."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-1-02",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Welchen Raum benutzen wir?",
        "options": [
          "Welchen Raum benutzen wir?",
          "Ich habe meine Hausaufgaben fertig.",
          "Können Sie das noch einmal erklären?",
          "Bitte öffnen Sie Ihr Buch."
        ],
        "answers": [
          "Welchen Raum benutzen wir?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-1-03",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Ich habe meine Hausaufgaben fertig.",
        "options": [
          "Ich habe meine Hausaufgaben fertig.",
          "Können Sie das noch einmal erklären?",
          "Bitte öffnen Sie Ihr Buch.",
          "Der Bus hat Verspätung."
        ],
        "answers": [
          "Ich habe meine Hausaufgaben fertig."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-1-04",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Können Sie das noch einmal erklären?",
        "options": [
          "Können Sie das noch einmal erklären?",
          "Bitte öffnen Sie Ihr Buch.",
          "Der Bus hat Verspätung.",
          "Ich hätte gern eine Fahrkarte."
        ],
        "answers": [
          "Können Sie das noch einmal erklären?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-1-05",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Bitte öffnen Sie Ihr Buch.",
        "options": [
          "Bitte öffnen Sie Ihr Buch.",
          "Der Bus hat Verspätung.",
          "Ich hätte gern eine Fahrkarte.",
          "Wo kann ich Mittagessen kaufen?"
        ],
        "answers": [
          "Bitte öffnen Sie Ihr Buch."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-1-06",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Der Bus hat Verspätung.",
        "options": [
          "Der Bus hat Verspätung.",
          "Ich hätte gern eine Fahrkarte.",
          "Wo kann ich Mittagessen kaufen?",
          "Der Unterricht beginnt um acht Uhr."
        ],
        "answers": [
          "Der Bus hat Verspätung."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-1-07",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Ich hätte gern eine Fahrkarte.",
        "options": [
          "Ich hätte gern eine Fahrkarte.",
          "Wo kann ich Mittagessen kaufen?",
          "Der Unterricht beginnt um acht Uhr.",
          "Welchen Raum benutzen wir?"
        ],
        "answers": [
          "Ich hätte gern eine Fahrkarte."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-1-08",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Wo kann ich Mittagessen kaufen?",
        "options": [
          "Wo kann ich Mittagessen kaufen?",
          "Der Unterricht beginnt um acht Uhr.",
          "Welchen Raum benutzen wir?",
          "Ich habe meine Hausaufgaben fertig."
        ],
        "answers": [
          "Wo kann ich Mittagessen kaufen?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-1-09",
        "type": "typed",
        "prompt": "Geben Sie den folgenden Satz genau ein. — Der Unterricht beginnt um acht Uhr.",
        "options": [],
        "answers": [
          "Der Unterricht beginnt um acht Uhr."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-de-1-10",
        "type": "typed",
        "prompt": "Geben Sie den folgenden Satz genau ein. — Welchen Raum benutzen wir?",
        "options": [],
        "answers": [
          "Welchen Raum benutzen wir?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-de-1-11",
        "type": "typed",
        "prompt": "Geben Sie den folgenden Satz genau ein. — Ich habe meine Hausaufgaben fertig.",
        "options": [],
        "answers": [
          "Ich habe meine Hausaufgaben fertig."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-de-1-12",
        "type": "typed",
        "prompt": "Geben Sie den folgenden Satz genau ein. — Können Sie das noch einmal erklären?",
        "options": [],
        "answers": [
          "Können Sie das noch einmal erklären?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-de-1-13",
        "type": "typed",
        "prompt": "Geben Sie den folgenden Satz genau ein. — Bitte öffnen Sie Ihr Buch.",
        "options": [],
        "answers": [
          "Bitte öffnen Sie Ihr Buch."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-de-1-14",
        "type": "audio_choice",
        "prompt": "Hören Sie zu und wählen Sie den gehörten Satz.",
        "options": [
          "Ich habe meine Hausaufgaben fertig.",
          "Können Sie das noch einmal erklären?",
          "Bitte öffnen Sie Ihr Buch.",
          "Der Bus hat Verspätung."
        ],
        "answers": [
          "Ich habe meine Hausaufgaben fertig."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Ich habe meine Hausaufgaben fertig.",
        "ttsLang": "de-DE",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-de-1-15",
        "type": "audio_choice",
        "prompt": "Hören Sie zu und wählen Sie den gehörten Satz.",
        "options": [
          "Können Sie das noch einmal erklären?",
          "Bitte öffnen Sie Ihr Buch.",
          "Der Bus hat Verspätung.",
          "Ich hätte gern eine Fahrkarte."
        ],
        "answers": [
          "Können Sie das noch einmal erklären?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Können Sie das noch einmal erklären?",
        "ttsLang": "de-DE",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-de-1-16",
        "type": "audio_choice",
        "prompt": "Hören Sie zu und wählen Sie den gehörten Satz.",
        "options": [
          "Bitte öffnen Sie Ihr Buch.",
          "Der Bus hat Verspätung.",
          "Ich hätte gern eine Fahrkarte.",
          "Wo kann ich Mittagessen kaufen?"
        ],
        "answers": [
          "Bitte öffnen Sie Ihr Buch."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Bitte öffnen Sie Ihr Buch.",
        "ttsLang": "de-DE",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-de-1-17",
        "type": "audio_choice",
        "prompt": "Hören Sie zu und wählen Sie den gehörten Satz.",
        "options": [
          "Der Bus hat Verspätung.",
          "Ich hätte gern eine Fahrkarte.",
          "Wo kann ich Mittagessen kaufen?",
          "Der Unterricht beginnt um acht Uhr."
        ],
        "answers": [
          "Der Bus hat Verspätung."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Der Bus hat Verspätung.",
        "ttsLang": "de-DE",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-de-1-18",
        "type": "audio_choice",
        "prompt": "Hören Sie zu und wählen Sie den gehörten Satz.",
        "options": [
          "Ich hätte gern eine Fahrkarte.",
          "Wo kann ich Mittagessen kaufen?",
          "Der Unterricht beginnt um acht Uhr.",
          "Welchen Raum benutzen wir?"
        ],
        "answers": [
          "Ich hätte gern eine Fahrkarte."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Ich hätte gern eine Fahrkarte.",
        "ttsLang": "de-DE",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-de-1-19",
        "type": "fill_blank",
        "prompt": "Vervollständigen Sie den Satz. — Welchen Raum benutzen ___",
        "options": [
          "wir",
          "Uhr",
          "fertig",
          "erklären"
        ],
        "answers": [
          "wir"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-de-1-20",
        "type": "fill_blank",
        "prompt": "Vervollständigen Sie den Satz. — Ich habe meine Hausaufgaben ___",
        "options": [
          "fertig",
          "Uhr",
          "wir",
          "erklären"
        ],
        "answers": [
          "fertig"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-de-1-21",
        "type": "fill_blank",
        "prompt": "Vervollständigen Sie den Satz. — Können Sie das noch einmal ___",
        "options": [
          "erklären",
          "Uhr",
          "wir",
          "fertig"
        ],
        "answers": [
          "erklären"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-de-1-22",
        "type": "fill_blank",
        "prompt": "Vervollständigen Sie den Satz. — Bitte öffnen Sie Ihr ___",
        "options": [
          "Buch",
          "Uhr",
          "wir",
          "fertig"
        ],
        "answers": [
          "Buch"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-de-1-23",
        "type": "sentence_builder",
        "prompt": "Bringen Sie die Wörter in die richtige Reihenfolge.",
        "options": [
          "Können",
          "Sie",
          "das",
          "noch",
          "einmal",
          "erklären"
        ],
        "answers": [
          "Können Sie das noch einmal erklären"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-de-1-24",
        "type": "sentence_builder",
        "prompt": "Bringen Sie die Wörter in die richtige Reihenfolge.",
        "options": [
          "Bitte",
          "öffnen",
          "Sie",
          "Ihr",
          "Buch"
        ],
        "answers": [
          "Bitte öffnen Sie Ihr Buch"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-de-1-25",
        "type": "sentence_builder",
        "prompt": "Bringen Sie die Wörter in die richtige Reihenfolge.",
        "options": [
          "Der",
          "Bus",
          "hat",
          "Verspätung"
        ],
        "answers": [
          "Der Bus hat Verspätung"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-de-1-26",
        "type": "sentence_builder",
        "prompt": "Bringen Sie die Wörter in die richtige Reihenfolge.",
        "options": [
          "Ich",
          "hätte",
          "gern",
          "eine",
          "Fahrkarte"
        ],
        "answers": [
          "Ich hätte gern eine Fahrkarte"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-de-1-27",
        "type": "scenario_decision",
        "prompt": "Wählen Sie die passendste Antwort.",
        "options": [
          "Bitte öffnen Sie Ihr Buch.",
          "Der Bus hat Verspätung.",
          "Ich hätte gern eine Fahrkarte.",
          "Wo kann ich Mittagessen kaufen?"
        ],
        "answers": [
          "Bitte öffnen Sie Ihr Buch."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-de-1-28",
        "type": "scenario_decision",
        "prompt": "Wählen Sie die passendste Antwort.",
        "options": [
          "Der Bus hat Verspätung.",
          "Ich hätte gern eine Fahrkarte.",
          "Wo kann ich Mittagessen kaufen?",
          "Der Unterricht beginnt um acht Uhr."
        ],
        "answers": [
          "Der Bus hat Verspätung."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-de-1-29",
        "type": "scenario_decision",
        "prompt": "Wählen Sie die passendste Antwort.",
        "options": [
          "Ich hätte gern eine Fahrkarte.",
          "Wo kann ich Mittagessen kaufen?",
          "Der Unterricht beginnt um acht Uhr.",
          "Welchen Raum benutzen wir?"
        ],
        "answers": [
          "Ich hätte gern eine Fahrkarte."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-de-1-30",
        "type": "scenario_decision",
        "prompt": "Wählen Sie die passendste Antwort.",
        "options": [
          "Wo kann ich Mittagessen kaufen?",
          "Der Unterricht beginnt um acht Uhr.",
          "Welchen Raum benutzen wir?",
          "Ich habe meine Hausaufgaben fertig."
        ],
        "answers": [
          "Wo kann ich Mittagessen kaufen?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-de-3",
    "title": "Deutsch — Beruf und professionelle Kommunikation",
    "language": "de",
    "level": "Professional",
    "topic": "Deutsch — Beruf und professionelle Kommunikation",
    "context": "Workplace & Professional",
    "skill": "Mixed",
    "description": "Üben Sie berufliches Deutsch für Meetings, Fristen, E-Mails und Kundenservice.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-de-2-01",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Können Sie den Bericht heute senden?",
        "options": [
          "Können Sie den Bericht heute senden?",
          "Das Meeting beginnt um drei Uhr.",
          "Bitte bestätigen Sie die Frist.",
          "Ich brauche etwas mehr Zeit."
        ],
        "answers": [
          "Können Sie den Bericht heute senden?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-2-02",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Das Meeting beginnt um drei Uhr.",
        "options": [
          "Das Meeting beginnt um drei Uhr.",
          "Bitte bestätigen Sie die Frist.",
          "Ich brauche etwas mehr Zeit.",
          "Ich melde mich per E-Mail."
        ],
        "answers": [
          "Das Meeting beginnt um drei Uhr."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-2-03",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Bitte bestätigen Sie die Frist.",
        "options": [
          "Bitte bestätigen Sie die Frist.",
          "Ich brauche etwas mehr Zeit.",
          "Ich melde mich per E-Mail.",
          "Können wir das Meeting verschieben?"
        ],
        "answers": [
          "Bitte bestätigen Sie die Frist."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-2-04",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Ich brauche etwas mehr Zeit.",
        "options": [
          "Ich brauche etwas mehr Zeit.",
          "Ich melde mich per E-Mail.",
          "Können wir das Meeting verschieben?",
          "Vielen Dank für Ihre Unterstützung."
        ],
        "answers": [
          "Ich brauche etwas mehr Zeit."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-2-05",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Ich melde mich per E-Mail.",
        "options": [
          "Ich melde mich per E-Mail.",
          "Können wir das Meeting verschieben?",
          "Vielen Dank für Ihre Unterstützung.",
          "Bitte informieren Sie mich über Änderungen."
        ],
        "answers": [
          "Ich melde mich per E-Mail."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-2-06",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Können wir das Meeting verschieben?",
        "options": [
          "Können wir das Meeting verschieben?",
          "Vielen Dank für Ihre Unterstützung.",
          "Bitte informieren Sie mich über Änderungen.",
          "Können Sie den Bericht heute senden?"
        ],
        "answers": [
          "Können wir das Meeting verschieben?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-2-07",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Vielen Dank für Ihre Unterstützung.",
        "options": [
          "Vielen Dank für Ihre Unterstützung.",
          "Bitte informieren Sie mich über Änderungen.",
          "Können Sie den Bericht heute senden?",
          "Das Meeting beginnt um drei Uhr."
        ],
        "answers": [
          "Vielen Dank für Ihre Unterstützung."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-2-08",
        "type": "multiple_choice",
        "prompt": "Wählen Sie den passenden Ausdruck. — Bitte informieren Sie mich über Änderungen.",
        "options": [
          "Bitte informieren Sie mich über Änderungen.",
          "Können Sie den Bericht heute senden?",
          "Das Meeting beginnt um drei Uhr.",
          "Bitte bestätigen Sie die Frist."
        ],
        "answers": [
          "Bitte informieren Sie mich über Änderungen."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-de-2-09",
        "type": "typed",
        "prompt": "Geben Sie den folgenden Satz genau ein. — Können Sie den Bericht heute senden?",
        "options": [],
        "answers": [
          "Können Sie den Bericht heute senden?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-de-2-10",
        "type": "typed",
        "prompt": "Geben Sie den folgenden Satz genau ein. — Das Meeting beginnt um drei Uhr.",
        "options": [],
        "answers": [
          "Das Meeting beginnt um drei Uhr."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-de-2-11",
        "type": "typed",
        "prompt": "Geben Sie den folgenden Satz genau ein. — Bitte bestätigen Sie die Frist.",
        "options": [],
        "answers": [
          "Bitte bestätigen Sie die Frist."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-de-2-12",
        "type": "typed",
        "prompt": "Geben Sie den folgenden Satz genau ein. — Ich brauche etwas mehr Zeit.",
        "options": [],
        "answers": [
          "Ich brauche etwas mehr Zeit."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-de-2-13",
        "type": "typed",
        "prompt": "Geben Sie den folgenden Satz genau ein. — Ich melde mich per E-Mail.",
        "options": [],
        "answers": [
          "Ich melde mich per E-Mail."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-de-2-14",
        "type": "audio_choice",
        "prompt": "Hören Sie zu und wählen Sie den gehörten Satz.",
        "options": [
          "Bitte bestätigen Sie die Frist.",
          "Ich brauche etwas mehr Zeit.",
          "Ich melde mich per E-Mail.",
          "Können wir das Meeting verschieben?"
        ],
        "answers": [
          "Bitte bestätigen Sie die Frist."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Bitte bestätigen Sie die Frist.",
        "ttsLang": "de-DE",
        "maxPlays": 3,
        "playbackRate": 1,
        "mediaUrl": "/audio/de-workplace.wav"
      },
      {
        "id": "native-de-2-15",
        "type": "audio_choice",
        "prompt": "Hören Sie zu und wählen Sie den gehörten Satz.",
        "options": [
          "Ich brauche etwas mehr Zeit.",
          "Ich melde mich per E-Mail.",
          "Können wir das Meeting verschieben?",
          "Vielen Dank für Ihre Unterstützung."
        ],
        "answers": [
          "Ich brauche etwas mehr Zeit."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Ich brauche etwas mehr Zeit.",
        "ttsLang": "de-DE",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-de-2-16",
        "type": "audio_choice",
        "prompt": "Hören Sie zu und wählen Sie den gehörten Satz.",
        "options": [
          "Ich melde mich per E-Mail.",
          "Können wir das Meeting verschieben?",
          "Vielen Dank für Ihre Unterstützung.",
          "Bitte informieren Sie mich über Änderungen."
        ],
        "answers": [
          "Ich melde mich per E-Mail."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Ich melde mich per E-Mail.",
        "ttsLang": "de-DE",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-de-2-17",
        "type": "audio_choice",
        "prompt": "Hören Sie zu und wählen Sie den gehörten Satz.",
        "options": [
          "Können wir das Meeting verschieben?",
          "Vielen Dank für Ihre Unterstützung.",
          "Bitte informieren Sie mich über Änderungen.",
          "Können Sie den Bericht heute senden?"
        ],
        "answers": [
          "Können wir das Meeting verschieben?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Können wir das Meeting verschieben?",
        "ttsLang": "de-DE",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-de-2-18",
        "type": "audio_choice",
        "prompt": "Hören Sie zu und wählen Sie den gehörten Satz.",
        "options": [
          "Vielen Dank für Ihre Unterstützung.",
          "Bitte informieren Sie mich über Änderungen.",
          "Können Sie den Bericht heute senden?",
          "Das Meeting beginnt um drei Uhr."
        ],
        "answers": [
          "Vielen Dank für Ihre Unterstützung."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Vielen Dank für Ihre Unterstützung.",
        "ttsLang": "de-DE",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-de-2-19",
        "type": "fill_blank",
        "prompt": "Vervollständigen Sie den Satz. — Das Meeting beginnt um drei ___",
        "options": [
          "Uhr",
          "senden",
          "Frist",
          "Zeit"
        ],
        "answers": [
          "Uhr"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-de-2-20",
        "type": "fill_blank",
        "prompt": "Vervollständigen Sie den Satz. — Bitte bestätigen Sie die ___",
        "options": [
          "Frist",
          "senden",
          "Uhr",
          "Zeit"
        ],
        "answers": [
          "Frist"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-de-2-21",
        "type": "fill_blank",
        "prompt": "Vervollständigen Sie den Satz. — Ich brauche etwas mehr ___",
        "options": [
          "Zeit",
          "senden",
          "Uhr",
          "Frist"
        ],
        "answers": [
          "Zeit"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-de-2-22",
        "type": "fill_blank",
        "prompt": "Vervollständigen Sie den Satz. — Ich melde mich per ___",
        "options": [
          "E-Mail",
          "senden",
          "Uhr",
          "Frist"
        ],
        "answers": [
          "E-Mail"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-de-2-23",
        "type": "sentence_builder",
        "prompt": "Bringen Sie die Wörter in die richtige Reihenfolge.",
        "options": [
          "Ich",
          "brauche",
          "etwas",
          "mehr",
          "Zeit"
        ],
        "answers": [
          "Ich brauche etwas mehr Zeit"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-de-2-24",
        "type": "sentence_builder",
        "prompt": "Bringen Sie die Wörter in die richtige Reihenfolge.",
        "options": [
          "Ich",
          "melde",
          "mich",
          "per",
          "E-Mail"
        ],
        "answers": [
          "Ich melde mich per E-Mail"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-de-2-25",
        "type": "sentence_builder",
        "prompt": "Bringen Sie die Wörter in die richtige Reihenfolge.",
        "options": [
          "Können",
          "wir",
          "das",
          "Meeting",
          "verschieben"
        ],
        "answers": [
          "Können wir das Meeting verschieben"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-de-2-26",
        "type": "sentence_builder",
        "prompt": "Bringen Sie die Wörter in die richtige Reihenfolge.",
        "options": [
          "Vielen",
          "Dank",
          "für",
          "Ihre",
          "Unterstützung"
        ],
        "answers": [
          "Vielen Dank für Ihre Unterstützung"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-de-2-27",
        "type": "scenario_decision",
        "prompt": "Wählen Sie die passendste Antwort.",
        "options": [
          "Ich melde mich per E-Mail.",
          "Können wir das Meeting verschieben?",
          "Vielen Dank für Ihre Unterstützung.",
          "Bitte informieren Sie mich über Änderungen."
        ],
        "answers": [
          "Ich melde mich per E-Mail."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-de-2-28",
        "type": "scenario_decision",
        "prompt": "Wählen Sie die passendste Antwort.",
        "options": [
          "Können wir das Meeting verschieben?",
          "Vielen Dank für Ihre Unterstützung.",
          "Bitte informieren Sie mich über Änderungen.",
          "Können Sie den Bericht heute senden?"
        ],
        "answers": [
          "Können wir das Meeting verschieben?"
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-de-2-29",
        "type": "scenario_decision",
        "prompt": "Wählen Sie die passendste Antwort.",
        "options": [
          "Vielen Dank für Ihre Unterstützung.",
          "Bitte informieren Sie mich über Änderungen.",
          "Können Sie den Bericht heute senden?",
          "Das Meeting beginnt um drei Uhr."
        ],
        "answers": [
          "Vielen Dank für Ihre Unterstützung."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-de-2-30",
        "type": "scenario_decision",
        "prompt": "Wählen Sie die passendste Antwort.",
        "options": [
          "Bitte informieren Sie mich über Änderungen.",
          "Können Sie den Bericht heute senden?",
          "Das Meeting beginnt um drei Uhr.",
          "Bitte bestätigen Sie die Frist."
        ],
        "answers": [
          "Bitte informieren Sie mich über Änderungen."
        ],
        "explanation": "Wiederholen Sie diesen Ausdruck im Kontext.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-es-1",
    "title": "Español — Fundamentos",
    "language": "es",
    "level": "Starter",
    "topic": "Español — Fundamentos",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Practica español básico con escucha, orden de frases y respuestas útiles.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-es-0-01",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — Buenos días.",
        "options": [
          "Buenos días.",
          "Muchas gracias.",
          "¿Puede ayudarme, por favor?",
          "¿Dónde está la estación?"
        ],
        "answers": [
          "Buenos días."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-0-02",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — Muchas gracias.",
        "options": [
          "Muchas gracias.",
          "¿Puede ayudarme, por favor?",
          "¿Dónde está la estación?",
          "¿A qué hora empieza?"
        ],
        "answers": [
          "Muchas gracias."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-0-03",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — ¿Puede ayudarme, por favor?",
        "options": [
          "¿Puede ayudarme, por favor?",
          "¿Dónde está la estación?",
          "¿A qué hora empieza?",
          "Entiendo."
        ],
        "answers": [
          "¿Puede ayudarme, por favor?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-0-04",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — ¿Dónde está la estación?",
        "options": [
          "¿Dónde está la estación?",
          "¿A qué hora empieza?",
          "Entiendo.",
          "Repítalo, por favor."
        ],
        "answers": [
          "¿Dónde está la estación?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-0-05",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — ¿A qué hora empieza?",
        "options": [
          "¿A qué hora empieza?",
          "Entiendo.",
          "Repítalo, por favor.",
          "Hasta mañana."
        ],
        "answers": [
          "¿A qué hora empieza?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-0-06",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — Entiendo.",
        "options": [
          "Entiendo.",
          "Repítalo, por favor.",
          "Hasta mañana.",
          "Buenos días."
        ],
        "answers": [
          "Entiendo."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-0-07",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — Repítalo, por favor.",
        "options": [
          "Repítalo, por favor.",
          "Hasta mañana.",
          "Buenos días.",
          "Muchas gracias."
        ],
        "answers": [
          "Repítalo, por favor."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-0-08",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — Hasta mañana.",
        "options": [
          "Hasta mañana.",
          "Buenos días.",
          "Muchas gracias.",
          "¿Puede ayudarme, por favor?"
        ],
        "answers": [
          "Hasta mañana."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-0-09",
        "type": "typed",
        "prompt": "Escribe exactamente la siguiente frase. — Buenos días.",
        "options": [],
        "answers": [
          "Buenos días."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-es-0-10",
        "type": "typed",
        "prompt": "Escribe exactamente la siguiente frase. — Muchas gracias.",
        "options": [],
        "answers": [
          "Muchas gracias."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-es-0-11",
        "type": "typed",
        "prompt": "Escribe exactamente la siguiente frase. — ¿Puede ayudarme, por favor?",
        "options": [],
        "answers": [
          "¿Puede ayudarme, por favor?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-es-0-12",
        "type": "typed",
        "prompt": "Escribe exactamente la siguiente frase. — ¿Dónde está la estación?",
        "options": [],
        "answers": [
          "¿Dónde está la estación?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-es-0-13",
        "type": "typed",
        "prompt": "Escribe exactamente la siguiente frase. — ¿A qué hora empieza?",
        "options": [],
        "answers": [
          "¿A qué hora empieza?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-es-0-14",
        "type": "audio_choice",
        "prompt": "Escucha y elige la frase que oyes.",
        "options": [
          "¿Puede ayudarme, por favor?",
          "¿Dónde está la estación?",
          "¿A qué hora empieza?",
          "Entiendo."
        ],
        "answers": [
          "¿Puede ayudarme, por favor?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "¿Puede ayudarme, por favor?",
        "ttsLang": "es-ES",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-es-0-15",
        "type": "audio_choice",
        "prompt": "Escucha y elige la frase que oyes.",
        "options": [
          "¿Dónde está la estación?",
          "¿A qué hora empieza?",
          "Entiendo.",
          "Repítalo, por favor."
        ],
        "answers": [
          "¿Dónde está la estación?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "¿Dónde está la estación?",
        "ttsLang": "es-ES",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-es-0-16",
        "type": "audio_choice",
        "prompt": "Escucha y elige la frase que oyes.",
        "options": [
          "¿A qué hora empieza?",
          "Entiendo.",
          "Repítalo, por favor.",
          "Hasta mañana."
        ],
        "answers": [
          "¿A qué hora empieza?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "¿A qué hora empieza?",
        "ttsLang": "es-ES",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-es-0-17",
        "type": "audio_choice",
        "prompt": "Escucha y elige la frase que oyes.",
        "options": [
          "Entiendo.",
          "Repítalo, por favor.",
          "Hasta mañana.",
          "Buenos días."
        ],
        "answers": [
          "Entiendo."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Entiendo.",
        "ttsLang": "es-ES",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-es-0-18",
        "type": "audio_choice",
        "prompt": "Escucha y elige la frase que oyes.",
        "options": [
          "Repítalo, por favor.",
          "Hasta mañana.",
          "Buenos días.",
          "Muchas gracias."
        ],
        "answers": [
          "Repítalo, por favor."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Repítalo, por favor.",
        "ttsLang": "es-ES",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-es-0-19",
        "type": "fill_blank",
        "prompt": "Completa la frase. — Muchas ___",
        "options": [
          "gracias",
          "días",
          "favor",
          "estación"
        ],
        "answers": [
          "gracias"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-es-0-20",
        "type": "fill_blank",
        "prompt": "Completa la frase. — ¿Puede ayudarme, por ___",
        "options": [
          "favor",
          "días",
          "gracias",
          "estación"
        ],
        "answers": [
          "favor"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-es-0-21",
        "type": "fill_blank",
        "prompt": "Completa la frase. — ¿Dónde está la ___",
        "options": [
          "estación",
          "días",
          "gracias",
          "favor"
        ],
        "answers": [
          "estación"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-es-0-22",
        "type": "fill_blank",
        "prompt": "Completa la frase. — ¿A qué hora ___",
        "options": [
          "empieza",
          "días",
          "gracias",
          "favor"
        ],
        "answers": [
          "empieza"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-es-0-23",
        "type": "sentence_builder",
        "prompt": "Ordena las palabras correctamente.",
        "options": [
          "¿Dónde",
          "está",
          "la",
          "estación"
        ],
        "answers": [
          "¿Dónde está la estación"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-es-0-24",
        "type": "sentence_builder",
        "prompt": "Ordena las palabras correctamente.",
        "options": [
          "¿A",
          "qué",
          "hora",
          "empieza"
        ],
        "answers": [
          "¿A qué hora empieza"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-es-0-25",
        "type": "sentence_builder",
        "prompt": "Ordena las palabras correctamente.",
        "options": [
          "E",
          "n",
          "t",
          "i",
          "e",
          "n",
          "d",
          "o",
          "."
        ],
        "answers": [
          "Entiendo."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-es-0-26",
        "type": "sentence_builder",
        "prompt": "Ordena las palabras correctamente.",
        "options": [
          "Repítalo,",
          "por",
          "favor"
        ],
        "answers": [
          "Repítalo, por favor"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-es-0-27",
        "type": "scenario_decision",
        "prompt": "Elige la respuesta más adecuada.",
        "options": [
          "¿A qué hora empieza?",
          "Entiendo.",
          "Repítalo, por favor.",
          "Hasta mañana."
        ],
        "answers": [
          "¿A qué hora empieza?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-es-0-28",
        "type": "scenario_decision",
        "prompt": "Elige la respuesta más adecuada.",
        "options": [
          "Entiendo.",
          "Repítalo, por favor.",
          "Hasta mañana.",
          "Buenos días."
        ],
        "answers": [
          "Entiendo."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-es-0-29",
        "type": "scenario_decision",
        "prompt": "Elige la respuesta más adecuada.",
        "options": [
          "Repítalo, por favor.",
          "Hasta mañana.",
          "Buenos días.",
          "Muchas gracias."
        ],
        "answers": [
          "Repítalo, por favor."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-es-0-30",
        "type": "scenario_decision",
        "prompt": "Elige la respuesta más adecuada.",
        "options": [
          "Hasta mañana.",
          "Buenos días.",
          "Muchas gracias.",
          "¿Puede ayudarme, por favor?"
        ],
        "answers": [
          "Hasta mañana."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-es-2",
    "title": "Español — Escuela y vida diaria",
    "language": "es",
    "level": "Intermediate",
    "topic": "Español — Escuela y vida diaria",
    "context": "School & Travel",
    "skill": "Mixed",
    "description": "Practica español en la escuela, los viajes y la vida cotidiana.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-es-1-01",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — La clase empieza a las ocho.",
        "options": [
          "La clase empieza a las ocho.",
          "¿Qué aula usamos?",
          "He terminado los deberes.",
          "¿Puede explicarlo otra vez?"
        ],
        "answers": [
          "La clase empieza a las ocho."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-1-02",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — ¿Qué aula usamos?",
        "options": [
          "¿Qué aula usamos?",
          "He terminado los deberes.",
          "¿Puede explicarlo otra vez?",
          "Abra el libro, por favor."
        ],
        "answers": [
          "¿Qué aula usamos?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-1-03",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — He terminado los deberes.",
        "options": [
          "He terminado los deberes.",
          "¿Puede explicarlo otra vez?",
          "Abra el libro, por favor.",
          "El autobús llega tarde."
        ],
        "answers": [
          "He terminado los deberes."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-1-04",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — ¿Puede explicarlo otra vez?",
        "options": [
          "¿Puede explicarlo otra vez?",
          "Abra el libro, por favor.",
          "El autobús llega tarde.",
          "Quisiera un billete, por favor."
        ],
        "answers": [
          "¿Puede explicarlo otra vez?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-1-05",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — Abra el libro, por favor.",
        "options": [
          "Abra el libro, por favor.",
          "El autobús llega tarde.",
          "Quisiera un billete, por favor.",
          "¿Dónde puedo comprar el almuerzo?"
        ],
        "answers": [
          "Abra el libro, por favor."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-1-06",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — El autobús llega tarde.",
        "options": [
          "El autobús llega tarde.",
          "Quisiera un billete, por favor.",
          "¿Dónde puedo comprar el almuerzo?",
          "La clase empieza a las ocho."
        ],
        "answers": [
          "El autobús llega tarde."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-1-07",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — Quisiera un billete, por favor.",
        "options": [
          "Quisiera un billete, por favor.",
          "¿Dónde puedo comprar el almuerzo?",
          "La clase empieza a las ocho.",
          "¿Qué aula usamos?"
        ],
        "answers": [
          "Quisiera un billete, por favor."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-1-08",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — ¿Dónde puedo comprar el almuerzo?",
        "options": [
          "¿Dónde puedo comprar el almuerzo?",
          "La clase empieza a las ocho.",
          "¿Qué aula usamos?",
          "He terminado los deberes."
        ],
        "answers": [
          "¿Dónde puedo comprar el almuerzo?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-1-09",
        "type": "typed",
        "prompt": "Escribe exactamente la siguiente frase. — La clase empieza a las ocho.",
        "options": [],
        "answers": [
          "La clase empieza a las ocho."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-es-1-10",
        "type": "typed",
        "prompt": "Escribe exactamente la siguiente frase. — ¿Qué aula usamos?",
        "options": [],
        "answers": [
          "¿Qué aula usamos?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-es-1-11",
        "type": "typed",
        "prompt": "Escribe exactamente la siguiente frase. — He terminado los deberes.",
        "options": [],
        "answers": [
          "He terminado los deberes."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-es-1-12",
        "type": "typed",
        "prompt": "Escribe exactamente la siguiente frase. — ¿Puede explicarlo otra vez?",
        "options": [],
        "answers": [
          "¿Puede explicarlo otra vez?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-es-1-13",
        "type": "typed",
        "prompt": "Escribe exactamente la siguiente frase. — Abra el libro, por favor.",
        "options": [],
        "answers": [
          "Abra el libro, por favor."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-es-1-14",
        "type": "audio_choice",
        "prompt": "Escucha y elige la frase que oyes.",
        "options": [
          "He terminado los deberes.",
          "¿Puede explicarlo otra vez?",
          "Abra el libro, por favor.",
          "El autobús llega tarde."
        ],
        "answers": [
          "He terminado los deberes."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "He terminado los deberes.",
        "ttsLang": "es-ES",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-es-1-15",
        "type": "audio_choice",
        "prompt": "Escucha y elige la frase que oyes.",
        "options": [
          "¿Puede explicarlo otra vez?",
          "Abra el libro, por favor.",
          "El autobús llega tarde.",
          "Quisiera un billete, por favor."
        ],
        "answers": [
          "¿Puede explicarlo otra vez?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "¿Puede explicarlo otra vez?",
        "ttsLang": "es-ES",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-es-1-16",
        "type": "audio_choice",
        "prompt": "Escucha y elige la frase que oyes.",
        "options": [
          "Abra el libro, por favor.",
          "El autobús llega tarde.",
          "Quisiera un billete, por favor.",
          "¿Dónde puedo comprar el almuerzo?"
        ],
        "answers": [
          "Abra el libro, por favor."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Abra el libro, por favor.",
        "ttsLang": "es-ES",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-es-1-17",
        "type": "audio_choice",
        "prompt": "Escucha y elige la frase que oyes.",
        "options": [
          "El autobús llega tarde.",
          "Quisiera un billete, por favor.",
          "¿Dónde puedo comprar el almuerzo?",
          "La clase empieza a las ocho."
        ],
        "answers": [
          "El autobús llega tarde."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "El autobús llega tarde.",
        "ttsLang": "es-ES",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-es-1-18",
        "type": "audio_choice",
        "prompt": "Escucha y elige la frase que oyes.",
        "options": [
          "Quisiera un billete, por favor.",
          "¿Dónde puedo comprar el almuerzo?",
          "La clase empieza a las ocho.",
          "¿Qué aula usamos?"
        ],
        "answers": [
          "Quisiera un billete, por favor."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Quisiera un billete, por favor.",
        "ttsLang": "es-ES",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-es-1-19",
        "type": "fill_blank",
        "prompt": "Completa la frase. — ¿Qué aula ___",
        "options": [
          "usamos",
          "ocho",
          "deberes",
          "vez"
        ],
        "answers": [
          "usamos"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-es-1-20",
        "type": "fill_blank",
        "prompt": "Completa la frase. — He terminado los ___",
        "options": [
          "deberes",
          "ocho",
          "usamos",
          "vez"
        ],
        "answers": [
          "deberes"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-es-1-21",
        "type": "fill_blank",
        "prompt": "Completa la frase. — ¿Puede explicarlo otra ___",
        "options": [
          "vez",
          "ocho",
          "usamos",
          "deberes"
        ],
        "answers": [
          "vez"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-es-1-22",
        "type": "fill_blank",
        "prompt": "Completa la frase. — Abra el libro, por ___",
        "options": [
          "favor",
          "ocho",
          "usamos",
          "deberes"
        ],
        "answers": [
          "favor"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-es-1-23",
        "type": "sentence_builder",
        "prompt": "Ordena las palabras correctamente.",
        "options": [
          "¿Puede",
          "explicarlo",
          "otra",
          "vez"
        ],
        "answers": [
          "¿Puede explicarlo otra vez"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-es-1-24",
        "type": "sentence_builder",
        "prompt": "Ordena las palabras correctamente.",
        "options": [
          "Abra",
          "el",
          "libro,",
          "por",
          "favor"
        ],
        "answers": [
          "Abra el libro, por favor"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-es-1-25",
        "type": "sentence_builder",
        "prompt": "Ordena las palabras correctamente.",
        "options": [
          "El",
          "autobús",
          "llega",
          "tarde"
        ],
        "answers": [
          "El autobús llega tarde"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-es-1-26",
        "type": "sentence_builder",
        "prompt": "Ordena las palabras correctamente.",
        "options": [
          "Quisiera",
          "un",
          "billete,",
          "por",
          "favor"
        ],
        "answers": [
          "Quisiera un billete, por favor"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-es-1-27",
        "type": "scenario_decision",
        "prompt": "Elige la respuesta más adecuada.",
        "options": [
          "Abra el libro, por favor.",
          "El autobús llega tarde.",
          "Quisiera un billete, por favor.",
          "¿Dónde puedo comprar el almuerzo?"
        ],
        "answers": [
          "Abra el libro, por favor."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-es-1-28",
        "type": "scenario_decision",
        "prompt": "Elige la respuesta más adecuada.",
        "options": [
          "El autobús llega tarde.",
          "Quisiera un billete, por favor.",
          "¿Dónde puedo comprar el almuerzo?",
          "La clase empieza a las ocho."
        ],
        "answers": [
          "El autobús llega tarde."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-es-1-29",
        "type": "scenario_decision",
        "prompt": "Elige la respuesta más adecuada.",
        "options": [
          "Quisiera un billete, por favor.",
          "¿Dónde puedo comprar el almuerzo?",
          "La clase empieza a las ocho.",
          "¿Qué aula usamos?"
        ],
        "answers": [
          "Quisiera un billete, por favor."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-es-1-30",
        "type": "scenario_decision",
        "prompt": "Elige la respuesta más adecuada.",
        "options": [
          "¿Dónde puedo comprar el almuerzo?",
          "La clase empieza a las ocho.",
          "¿Qué aula usamos?",
          "He terminado los deberes."
        ],
        "answers": [
          "¿Dónde puedo comprar el almuerzo?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-es-3",
    "title": "Español — Trabajo y comunicación profesional",
    "language": "es",
    "level": "Professional",
    "topic": "Español — Trabajo y comunicación profesional",
    "context": "Workplace & Professional",
    "skill": "Mixed",
    "description": "Practica español profesional para reuniones, plazos, correos y atención al cliente.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-es-2-01",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — ¿Puede enviar el informe hoy?",
        "options": [
          "¿Puede enviar el informe hoy?",
          "La reunión empieza a las tres.",
          "Confirme la fecha límite, por favor.",
          "Necesito un poco más de tiempo."
        ],
        "answers": [
          "¿Puede enviar el informe hoy?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-2-02",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — La reunión empieza a las tres.",
        "options": [
          "La reunión empieza a las tres.",
          "Confirme la fecha límite, por favor.",
          "Necesito un poco más de tiempo.",
          "Haré seguimiento por correo electrónico."
        ],
        "answers": [
          "La reunión empieza a las tres."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-2-03",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — Confirme la fecha límite, por favor.",
        "options": [
          "Confirme la fecha límite, por favor.",
          "Necesito un poco más de tiempo.",
          "Haré seguimiento por correo electrónico.",
          "¿Podemos cambiar la reunión?"
        ],
        "answers": [
          "Confirme la fecha límite, por favor."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-2-04",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — Necesito un poco más de tiempo.",
        "options": [
          "Necesito un poco más de tiempo.",
          "Haré seguimiento por correo electrónico.",
          "¿Podemos cambiar la reunión?",
          "Gracias por su ayuda."
        ],
        "answers": [
          "Necesito un poco más de tiempo."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-2-05",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — Haré seguimiento por correo electrónico.",
        "options": [
          "Haré seguimiento por correo electrónico.",
          "¿Podemos cambiar la reunión?",
          "Gracias por su ayuda.",
          "Avíseme si hay algún cambio."
        ],
        "answers": [
          "Haré seguimiento por correo electrónico."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-2-06",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — ¿Podemos cambiar la reunión?",
        "options": [
          "¿Podemos cambiar la reunión?",
          "Gracias por su ayuda.",
          "Avíseme si hay algún cambio.",
          "¿Puede enviar el informe hoy?"
        ],
        "answers": [
          "¿Podemos cambiar la reunión?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-2-07",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — Gracias por su ayuda.",
        "options": [
          "Gracias por su ayuda.",
          "Avíseme si hay algún cambio.",
          "¿Puede enviar el informe hoy?",
          "La reunión empieza a las tres."
        ],
        "answers": [
          "Gracias por su ayuda."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-2-08",
        "type": "multiple_choice",
        "prompt": "Elige la expresión correcta. — Avíseme si hay algún cambio.",
        "options": [
          "Avíseme si hay algún cambio.",
          "¿Puede enviar el informe hoy?",
          "La reunión empieza a las tres.",
          "Confirme la fecha límite, por favor."
        ],
        "answers": [
          "Avíseme si hay algún cambio."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-es-2-09",
        "type": "typed",
        "prompt": "Escribe exactamente la siguiente frase. — ¿Puede enviar el informe hoy?",
        "options": [],
        "answers": [
          "¿Puede enviar el informe hoy?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-es-2-10",
        "type": "typed",
        "prompt": "Escribe exactamente la siguiente frase. — La reunión empieza a las tres.",
        "options": [],
        "answers": [
          "La reunión empieza a las tres."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-es-2-11",
        "type": "typed",
        "prompt": "Escribe exactamente la siguiente frase. — Confirme la fecha límite, por favor.",
        "options": [],
        "answers": [
          "Confirme la fecha límite, por favor."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-es-2-12",
        "type": "typed",
        "prompt": "Escribe exactamente la siguiente frase. — Necesito un poco más de tiempo.",
        "options": [],
        "answers": [
          "Necesito un poco más de tiempo."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-es-2-13",
        "type": "typed",
        "prompt": "Escribe exactamente la siguiente frase. — Haré seguimiento por correo electrónico.",
        "options": [],
        "answers": [
          "Haré seguimiento por correo electrónico."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-es-2-14",
        "type": "audio_choice",
        "prompt": "Escucha y elige la frase que oyes.",
        "options": [
          "Confirme la fecha límite, por favor.",
          "Necesito un poco más de tiempo.",
          "Haré seguimiento por correo electrónico.",
          "¿Podemos cambiar la reunión?"
        ],
        "answers": [
          "Confirme la fecha límite, por favor."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Confirme la fecha límite, por favor.",
        "ttsLang": "es-ES",
        "maxPlays": 3,
        "playbackRate": 1,
        "mediaUrl": "/audio/es-workplace.wav"
      },
      {
        "id": "native-es-2-15",
        "type": "audio_choice",
        "prompt": "Escucha y elige la frase que oyes.",
        "options": [
          "Necesito un poco más de tiempo.",
          "Haré seguimiento por correo electrónico.",
          "¿Podemos cambiar la reunión?",
          "Gracias por su ayuda."
        ],
        "answers": [
          "Necesito un poco más de tiempo."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Necesito un poco más de tiempo.",
        "ttsLang": "es-ES",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-es-2-16",
        "type": "audio_choice",
        "prompt": "Escucha y elige la frase que oyes.",
        "options": [
          "Haré seguimiento por correo electrónico.",
          "¿Podemos cambiar la reunión?",
          "Gracias por su ayuda.",
          "Avíseme si hay algún cambio."
        ],
        "answers": [
          "Haré seguimiento por correo electrónico."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Haré seguimiento por correo electrónico.",
        "ttsLang": "es-ES",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-es-2-17",
        "type": "audio_choice",
        "prompt": "Escucha y elige la frase que oyes.",
        "options": [
          "¿Podemos cambiar la reunión?",
          "Gracias por su ayuda.",
          "Avíseme si hay algún cambio.",
          "¿Puede enviar el informe hoy?"
        ],
        "answers": [
          "¿Podemos cambiar la reunión?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "¿Podemos cambiar la reunión?",
        "ttsLang": "es-ES",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-es-2-18",
        "type": "audio_choice",
        "prompt": "Escucha y elige la frase que oyes.",
        "options": [
          "Gracias por su ayuda.",
          "Avíseme si hay algún cambio.",
          "¿Puede enviar el informe hoy?",
          "La reunión empieza a las tres."
        ],
        "answers": [
          "Gracias por su ayuda."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Gracias por su ayuda.",
        "ttsLang": "es-ES",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-es-2-19",
        "type": "fill_blank",
        "prompt": "Completa la frase. — La reunión empieza a las ___",
        "options": [
          "tres",
          "hoy",
          "favor",
          "tiempo"
        ],
        "answers": [
          "tres"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-es-2-20",
        "type": "fill_blank",
        "prompt": "Completa la frase. — Confirme la fecha límite, por ___",
        "options": [
          "favor",
          "hoy",
          "tres",
          "tiempo"
        ],
        "answers": [
          "favor"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-es-2-21",
        "type": "fill_blank",
        "prompt": "Completa la frase. — Necesito un poco más de ___",
        "options": [
          "tiempo",
          "hoy",
          "tres",
          "favor"
        ],
        "answers": [
          "tiempo"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-es-2-22",
        "type": "fill_blank",
        "prompt": "Completa la frase. — Haré seguimiento por correo ___",
        "options": [
          "electrónico",
          "hoy",
          "tres",
          "favor"
        ],
        "answers": [
          "electrónico"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-es-2-23",
        "type": "sentence_builder",
        "prompt": "Ordena las palabras correctamente.",
        "options": [
          "Necesito",
          "un",
          "poco",
          "más",
          "de",
          "tiempo"
        ],
        "answers": [
          "Necesito un poco más de tiempo"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-es-2-24",
        "type": "sentence_builder",
        "prompt": "Ordena las palabras correctamente.",
        "options": [
          "Haré",
          "seguimiento",
          "por",
          "correo",
          "electrónico"
        ],
        "answers": [
          "Haré seguimiento por correo electrónico"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-es-2-25",
        "type": "sentence_builder",
        "prompt": "Ordena las palabras correctamente.",
        "options": [
          "¿Podemos",
          "cambiar",
          "la",
          "reunión"
        ],
        "answers": [
          "¿Podemos cambiar la reunión"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-es-2-26",
        "type": "sentence_builder",
        "prompt": "Ordena las palabras correctamente.",
        "options": [
          "Gracias",
          "por",
          "su",
          "ayuda"
        ],
        "answers": [
          "Gracias por su ayuda"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-es-2-27",
        "type": "scenario_decision",
        "prompt": "Elige la respuesta más adecuada.",
        "options": [
          "Haré seguimiento por correo electrónico.",
          "¿Podemos cambiar la reunión?",
          "Gracias por su ayuda.",
          "Avíseme si hay algún cambio."
        ],
        "answers": [
          "Haré seguimiento por correo electrónico."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-es-2-28",
        "type": "scenario_decision",
        "prompt": "Elige la respuesta más adecuada.",
        "options": [
          "¿Podemos cambiar la reunión?",
          "Gracias por su ayuda.",
          "Avíseme si hay algún cambio.",
          "¿Puede enviar el informe hoy?"
        ],
        "answers": [
          "¿Podemos cambiar la reunión?"
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-es-2-29",
        "type": "scenario_decision",
        "prompt": "Elige la respuesta más adecuada.",
        "options": [
          "Gracias por su ayuda.",
          "Avíseme si hay algún cambio.",
          "¿Puede enviar el informe hoy?",
          "La reunión empieza a las tres."
        ],
        "answers": [
          "Gracias por su ayuda."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-es-2-30",
        "type": "scenario_decision",
        "prompt": "Elige la respuesta más adecuada.",
        "options": [
          "Avíseme si hay algún cambio.",
          "¿Puede enviar el informe hoy?",
          "La reunión empieza a las tres.",
          "Confirme la fecha límite, por favor."
        ],
        "answers": [
          "Avíseme si hay algún cambio."
        ],
        "explanation": "Repasa esta expresión en contexto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-it-1",
    "title": "Italiano — Fondamenti",
    "language": "it",
    "level": "Starter",
    "topic": "Italiano — Fondamenti",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Pratica l’italiano di base con ascolto, ordine delle frasi e risposte utili.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-it-0-01",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Buongiorno.",
        "options": [
          "Buongiorno.",
          "Grazie mille.",
          "Può aiutarmi, per favore?",
          "Dov’è la stazione?"
        ],
        "answers": [
          "Buongiorno."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-0-02",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Grazie mille.",
        "options": [
          "Grazie mille.",
          "Può aiutarmi, per favore?",
          "Dov’è la stazione?",
          "A che ora inizia?"
        ],
        "answers": [
          "Grazie mille."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-0-03",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Può aiutarmi, per favore?",
        "options": [
          "Può aiutarmi, per favore?",
          "Dov’è la stazione?",
          "A che ora inizia?",
          "Capisco."
        ],
        "answers": [
          "Può aiutarmi, per favore?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-0-04",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Dov’è la stazione?",
        "options": [
          "Dov’è la stazione?",
          "A che ora inizia?",
          "Capisco.",
          "Può ripetere, per favore?"
        ],
        "answers": [
          "Dov’è la stazione?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-0-05",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — A che ora inizia?",
        "options": [
          "A che ora inizia?",
          "Capisco.",
          "Può ripetere, per favore?",
          "A domani."
        ],
        "answers": [
          "A che ora inizia?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-0-06",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Capisco.",
        "options": [
          "Capisco.",
          "Può ripetere, per favore?",
          "A domani.",
          "Buongiorno."
        ],
        "answers": [
          "Capisco."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-0-07",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Può ripetere, per favore?",
        "options": [
          "Può ripetere, per favore?",
          "A domani.",
          "Buongiorno.",
          "Grazie mille."
        ],
        "answers": [
          "Può ripetere, per favore?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-0-08",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — A domani.",
        "options": [
          "A domani.",
          "Buongiorno.",
          "Grazie mille.",
          "Può aiutarmi, per favore?"
        ],
        "answers": [
          "A domani."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-0-09",
        "type": "typed",
        "prompt": "Scrivi esattamente la frase seguente. — Buongiorno.",
        "options": [],
        "answers": [
          "Buongiorno."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-it-0-10",
        "type": "typed",
        "prompt": "Scrivi esattamente la frase seguente. — Grazie mille.",
        "options": [],
        "answers": [
          "Grazie mille."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-it-0-11",
        "type": "typed",
        "prompt": "Scrivi esattamente la frase seguente. — Può aiutarmi, per favore?",
        "options": [],
        "answers": [
          "Può aiutarmi, per favore?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-it-0-12",
        "type": "typed",
        "prompt": "Scrivi esattamente la frase seguente. — Dov’è la stazione?",
        "options": [],
        "answers": [
          "Dov’è la stazione?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-it-0-13",
        "type": "typed",
        "prompt": "Scrivi esattamente la frase seguente. — A che ora inizia?",
        "options": [],
        "answers": [
          "A che ora inizia?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-it-0-14",
        "type": "audio_choice",
        "prompt": "Ascolta e scegli la frase che senti.",
        "options": [
          "Può aiutarmi, per favore?",
          "Dov’è la stazione?",
          "A che ora inizia?",
          "Capisco."
        ],
        "answers": [
          "Può aiutarmi, per favore?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Può aiutarmi, per favore?",
        "ttsLang": "it-IT",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-it-0-15",
        "type": "audio_choice",
        "prompt": "Ascolta e scegli la frase che senti.",
        "options": [
          "Dov’è la stazione?",
          "A che ora inizia?",
          "Capisco.",
          "Può ripetere, per favore?"
        ],
        "answers": [
          "Dov’è la stazione?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Dov’è la stazione?",
        "ttsLang": "it-IT",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-it-0-16",
        "type": "audio_choice",
        "prompt": "Ascolta e scegli la frase che senti.",
        "options": [
          "A che ora inizia?",
          "Capisco.",
          "Può ripetere, per favore?",
          "A domani."
        ],
        "answers": [
          "A che ora inizia?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "A che ora inizia?",
        "ttsLang": "it-IT",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-it-0-17",
        "type": "audio_choice",
        "prompt": "Ascolta e scegli la frase che senti.",
        "options": [
          "Capisco.",
          "Può ripetere, per favore?",
          "A domani.",
          "Buongiorno."
        ],
        "answers": [
          "Capisco."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Capisco.",
        "ttsLang": "it-IT",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-it-0-18",
        "type": "audio_choice",
        "prompt": "Ascolta e scegli la frase che senti.",
        "options": [
          "Può ripetere, per favore?",
          "A domani.",
          "Buongiorno.",
          "Grazie mille."
        ],
        "answers": [
          "Può ripetere, per favore?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Può ripetere, per favore?",
        "ttsLang": "it-IT",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-it-0-19",
        "type": "fill_blank",
        "prompt": "Completa la frase. — Grazie ___",
        "options": [
          "mille",
          "Buongiorno",
          "favore",
          "stazione"
        ],
        "answers": [
          "mille"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-it-0-20",
        "type": "fill_blank",
        "prompt": "Completa la frase. — Può aiutarmi, per ___",
        "options": [
          "favore",
          "Buongiorno",
          "mille",
          "stazione"
        ],
        "answers": [
          "favore"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-it-0-21",
        "type": "fill_blank",
        "prompt": "Completa la frase. — Dov’è la ___",
        "options": [
          "stazione",
          "Buongiorno",
          "mille",
          "favore"
        ],
        "answers": [
          "stazione"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-it-0-22",
        "type": "fill_blank",
        "prompt": "Completa la frase. — A che ora ___",
        "options": [
          "inizia",
          "Buongiorno",
          "mille",
          "favore"
        ],
        "answers": [
          "inizia"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-it-0-23",
        "type": "sentence_builder",
        "prompt": "Metti le parole nell’ordine corretto.",
        "options": [
          "Dov’è",
          "la",
          "stazione"
        ],
        "answers": [
          "Dov’è la stazione"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-it-0-24",
        "type": "sentence_builder",
        "prompt": "Metti le parole nell’ordine corretto.",
        "options": [
          "A",
          "che",
          "ora",
          "inizia"
        ],
        "answers": [
          "A che ora inizia"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-it-0-25",
        "type": "sentence_builder",
        "prompt": "Metti le parole nell’ordine corretto.",
        "options": [
          "C",
          "a",
          "p",
          "i",
          "s",
          "c",
          "o",
          "."
        ],
        "answers": [
          "Capisco."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-it-0-26",
        "type": "sentence_builder",
        "prompt": "Metti le parole nell’ordine corretto.",
        "options": [
          "Può",
          "ripetere,",
          "per",
          "favore"
        ],
        "answers": [
          "Può ripetere, per favore"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-it-0-27",
        "type": "scenario_decision",
        "prompt": "Scegli la risposta più appropriata.",
        "options": [
          "A che ora inizia?",
          "Capisco.",
          "Può ripetere, per favore?",
          "A domani."
        ],
        "answers": [
          "A che ora inizia?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-it-0-28",
        "type": "scenario_decision",
        "prompt": "Scegli la risposta più appropriata.",
        "options": [
          "Capisco.",
          "Può ripetere, per favore?",
          "A domani.",
          "Buongiorno."
        ],
        "answers": [
          "Capisco."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-it-0-29",
        "type": "scenario_decision",
        "prompt": "Scegli la risposta più appropriata.",
        "options": [
          "Può ripetere, per favore?",
          "A domani.",
          "Buongiorno.",
          "Grazie mille."
        ],
        "answers": [
          "Può ripetere, per favore?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-it-0-30",
        "type": "scenario_decision",
        "prompt": "Scegli la risposta più appropriata.",
        "options": [
          "A domani.",
          "Buongiorno.",
          "Grazie mille.",
          "Può aiutarmi, per favore?"
        ],
        "answers": [
          "A domani."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-it-2",
    "title": "Italiano — Scuola e vita quotidiana",
    "language": "it",
    "level": "Intermediate",
    "topic": "Italiano — Scuola e vita quotidiana",
    "context": "School & Travel",
    "skill": "Mixed",
    "description": "Pratica l’italiano a scuola, in viaggio e nella vita quotidiana.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-it-1-01",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — La lezione inizia alle otto.",
        "options": [
          "La lezione inizia alle otto.",
          "Quale aula usiamo?",
          "Ho finito i compiti.",
          "Può spiegare di nuovo?"
        ],
        "answers": [
          "La lezione inizia alle otto."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-1-02",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Quale aula usiamo?",
        "options": [
          "Quale aula usiamo?",
          "Ho finito i compiti.",
          "Può spiegare di nuovo?",
          "Apra il libro, per favore."
        ],
        "answers": [
          "Quale aula usiamo?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-1-03",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Ho finito i compiti.",
        "options": [
          "Ho finito i compiti.",
          "Può spiegare di nuovo?",
          "Apra il libro, per favore.",
          "L’autobus è in ritardo."
        ],
        "answers": [
          "Ho finito i compiti."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-1-04",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Può spiegare di nuovo?",
        "options": [
          "Può spiegare di nuovo?",
          "Apra il libro, per favore.",
          "L’autobus è in ritardo.",
          "Vorrei un biglietto, per favore."
        ],
        "answers": [
          "Può spiegare di nuovo?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-1-05",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Apra il libro, per favore.",
        "options": [
          "Apra il libro, per favore.",
          "L’autobus è in ritardo.",
          "Vorrei un biglietto, per favore.",
          "Dove posso comprare il pranzo?"
        ],
        "answers": [
          "Apra il libro, per favore."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-1-06",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — L’autobus è in ritardo.",
        "options": [
          "L’autobus è in ritardo.",
          "Vorrei un biglietto, per favore.",
          "Dove posso comprare il pranzo?",
          "La lezione inizia alle otto."
        ],
        "answers": [
          "L’autobus è in ritardo."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-1-07",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Vorrei un biglietto, per favore.",
        "options": [
          "Vorrei un biglietto, per favore.",
          "Dove posso comprare il pranzo?",
          "La lezione inizia alle otto.",
          "Quale aula usiamo?"
        ],
        "answers": [
          "Vorrei un biglietto, per favore."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-1-08",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Dove posso comprare il pranzo?",
        "options": [
          "Dove posso comprare il pranzo?",
          "La lezione inizia alle otto.",
          "Quale aula usiamo?",
          "Ho finito i compiti."
        ],
        "answers": [
          "Dove posso comprare il pranzo?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-1-09",
        "type": "typed",
        "prompt": "Scrivi esattamente la frase seguente. — La lezione inizia alle otto.",
        "options": [],
        "answers": [
          "La lezione inizia alle otto."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-it-1-10",
        "type": "typed",
        "prompt": "Scrivi esattamente la frase seguente. — Quale aula usiamo?",
        "options": [],
        "answers": [
          "Quale aula usiamo?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-it-1-11",
        "type": "typed",
        "prompt": "Scrivi esattamente la frase seguente. — Ho finito i compiti.",
        "options": [],
        "answers": [
          "Ho finito i compiti."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-it-1-12",
        "type": "typed",
        "prompt": "Scrivi esattamente la frase seguente. — Può spiegare di nuovo?",
        "options": [],
        "answers": [
          "Può spiegare di nuovo?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-it-1-13",
        "type": "typed",
        "prompt": "Scrivi esattamente la frase seguente. — Apra il libro, per favore.",
        "options": [],
        "answers": [
          "Apra il libro, per favore."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-it-1-14",
        "type": "audio_choice",
        "prompt": "Ascolta e scegli la frase che senti.",
        "options": [
          "Ho finito i compiti.",
          "Può spiegare di nuovo?",
          "Apra il libro, per favore.",
          "L’autobus è in ritardo."
        ],
        "answers": [
          "Ho finito i compiti."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Ho finito i compiti.",
        "ttsLang": "it-IT",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-it-1-15",
        "type": "audio_choice",
        "prompt": "Ascolta e scegli la frase che senti.",
        "options": [
          "Può spiegare di nuovo?",
          "Apra il libro, per favore.",
          "L’autobus è in ritardo.",
          "Vorrei un biglietto, per favore."
        ],
        "answers": [
          "Può spiegare di nuovo?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Può spiegare di nuovo?",
        "ttsLang": "it-IT",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-it-1-16",
        "type": "audio_choice",
        "prompt": "Ascolta e scegli la frase che senti.",
        "options": [
          "Apra il libro, per favore.",
          "L’autobus è in ritardo.",
          "Vorrei un biglietto, per favore.",
          "Dove posso comprare il pranzo?"
        ],
        "answers": [
          "Apra il libro, per favore."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Apra il libro, per favore.",
        "ttsLang": "it-IT",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-it-1-17",
        "type": "audio_choice",
        "prompt": "Ascolta e scegli la frase che senti.",
        "options": [
          "L’autobus è in ritardo.",
          "Vorrei un biglietto, per favore.",
          "Dove posso comprare il pranzo?",
          "La lezione inizia alle otto."
        ],
        "answers": [
          "L’autobus è in ritardo."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "L’autobus è in ritardo.",
        "ttsLang": "it-IT",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-it-1-18",
        "type": "audio_choice",
        "prompt": "Ascolta e scegli la frase che senti.",
        "options": [
          "Vorrei un biglietto, per favore.",
          "Dove posso comprare il pranzo?",
          "La lezione inizia alle otto.",
          "Quale aula usiamo?"
        ],
        "answers": [
          "Vorrei un biglietto, per favore."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Vorrei un biglietto, per favore.",
        "ttsLang": "it-IT",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-it-1-19",
        "type": "fill_blank",
        "prompt": "Completa la frase. — Quale aula ___",
        "options": [
          "usiamo",
          "otto",
          "compiti",
          "nuovo"
        ],
        "answers": [
          "usiamo"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-it-1-20",
        "type": "fill_blank",
        "prompt": "Completa la frase. — Ho finito i ___",
        "options": [
          "compiti",
          "otto",
          "usiamo",
          "nuovo"
        ],
        "answers": [
          "compiti"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-it-1-21",
        "type": "fill_blank",
        "prompt": "Completa la frase. — Può spiegare di ___",
        "options": [
          "nuovo",
          "otto",
          "usiamo",
          "compiti"
        ],
        "answers": [
          "nuovo"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-it-1-22",
        "type": "fill_blank",
        "prompt": "Completa la frase. — Apra il libro, per ___",
        "options": [
          "favore",
          "otto",
          "usiamo",
          "compiti"
        ],
        "answers": [
          "favore"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-it-1-23",
        "type": "sentence_builder",
        "prompt": "Metti le parole nell’ordine corretto.",
        "options": [
          "Può",
          "spiegare",
          "di",
          "nuovo"
        ],
        "answers": [
          "Può spiegare di nuovo"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-it-1-24",
        "type": "sentence_builder",
        "prompt": "Metti le parole nell’ordine corretto.",
        "options": [
          "Apra",
          "il",
          "libro,",
          "per",
          "favore"
        ],
        "answers": [
          "Apra il libro, per favore"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-it-1-25",
        "type": "sentence_builder",
        "prompt": "Metti le parole nell’ordine corretto.",
        "options": [
          "L’autobus",
          "è",
          "in",
          "ritardo"
        ],
        "answers": [
          "L’autobus è in ritardo"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-it-1-26",
        "type": "sentence_builder",
        "prompt": "Metti le parole nell’ordine corretto.",
        "options": [
          "Vorrei",
          "un",
          "biglietto,",
          "per",
          "favore"
        ],
        "answers": [
          "Vorrei un biglietto, per favore"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-it-1-27",
        "type": "scenario_decision",
        "prompt": "Scegli la risposta più appropriata.",
        "options": [
          "Apra il libro, per favore.",
          "L’autobus è in ritardo.",
          "Vorrei un biglietto, per favore.",
          "Dove posso comprare il pranzo?"
        ],
        "answers": [
          "Apra il libro, per favore."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-it-1-28",
        "type": "scenario_decision",
        "prompt": "Scegli la risposta più appropriata.",
        "options": [
          "L’autobus è in ritardo.",
          "Vorrei un biglietto, per favore.",
          "Dove posso comprare il pranzo?",
          "La lezione inizia alle otto."
        ],
        "answers": [
          "L’autobus è in ritardo."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-it-1-29",
        "type": "scenario_decision",
        "prompt": "Scegli la risposta più appropriata.",
        "options": [
          "Vorrei un biglietto, per favore.",
          "Dove posso comprare il pranzo?",
          "La lezione inizia alle otto.",
          "Quale aula usiamo?"
        ],
        "answers": [
          "Vorrei un biglietto, per favore."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-it-1-30",
        "type": "scenario_decision",
        "prompt": "Scegli la risposta più appropriata.",
        "options": [
          "Dove posso comprare il pranzo?",
          "La lezione inizia alle otto.",
          "Quale aula usiamo?",
          "Ho finito i compiti."
        ],
        "answers": [
          "Dove posso comprare il pranzo?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-it-3",
    "title": "Italiano — Lavoro e comunicazione professionale",
    "language": "it",
    "level": "Professional",
    "topic": "Italiano — Lavoro e comunicazione professionale",
    "context": "Workplace & Professional",
    "skill": "Mixed",
    "description": "Pratica l’italiano professionale per riunioni, scadenze, e-mail e clienti.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-it-2-01",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Può inviare il rapporto oggi?",
        "options": [
          "Può inviare il rapporto oggi?",
          "La riunione inizia alle tre.",
          "Confermi la scadenza, per favore.",
          "Ho bisogno di un po’ più di tempo."
        ],
        "answers": [
          "Può inviare il rapporto oggi?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-2-02",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — La riunione inizia alle tre.",
        "options": [
          "La riunione inizia alle tre.",
          "Confermi la scadenza, per favore.",
          "Ho bisogno di un po’ più di tempo.",
          "Farò un seguito via e-mail."
        ],
        "answers": [
          "La riunione inizia alle tre."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-2-03",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Confermi la scadenza, per favore.",
        "options": [
          "Confermi la scadenza, per favore.",
          "Ho bisogno di un po’ più di tempo.",
          "Farò un seguito via e-mail.",
          "Possiamo spostare la riunione?"
        ],
        "answers": [
          "Confermi la scadenza, per favore."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-2-04",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Ho bisogno di un po’ più di tempo.",
        "options": [
          "Ho bisogno di un po’ più di tempo.",
          "Farò un seguito via e-mail.",
          "Possiamo spostare la riunione?",
          "Grazie per il suo aiuto."
        ],
        "answers": [
          "Ho bisogno di un po’ più di tempo."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-2-05",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Farò un seguito via e-mail.",
        "options": [
          "Farò un seguito via e-mail.",
          "Possiamo spostare la riunione?",
          "Grazie per il suo aiuto.",
          "Mi faccia sapere se cambia qualcosa."
        ],
        "answers": [
          "Farò un seguito via e-mail."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-2-06",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Possiamo spostare la riunione?",
        "options": [
          "Possiamo spostare la riunione?",
          "Grazie per il suo aiuto.",
          "Mi faccia sapere se cambia qualcosa.",
          "Può inviare il rapporto oggi?"
        ],
        "answers": [
          "Possiamo spostare la riunione?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-2-07",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Grazie per il suo aiuto.",
        "options": [
          "Grazie per il suo aiuto.",
          "Mi faccia sapere se cambia qualcosa.",
          "Può inviare il rapporto oggi?",
          "La riunione inizia alle tre."
        ],
        "answers": [
          "Grazie per il suo aiuto."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-2-08",
        "type": "multiple_choice",
        "prompt": "Scegli l’espressione corretta. — Mi faccia sapere se cambia qualcosa.",
        "options": [
          "Mi faccia sapere se cambia qualcosa.",
          "Può inviare il rapporto oggi?",
          "La riunione inizia alle tre.",
          "Confermi la scadenza, per favore."
        ],
        "answers": [
          "Mi faccia sapere se cambia qualcosa."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-it-2-09",
        "type": "typed",
        "prompt": "Scrivi esattamente la frase seguente. — Può inviare il rapporto oggi?",
        "options": [],
        "answers": [
          "Può inviare il rapporto oggi?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-it-2-10",
        "type": "typed",
        "prompt": "Scrivi esattamente la frase seguente. — La riunione inizia alle tre.",
        "options": [],
        "answers": [
          "La riunione inizia alle tre."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-it-2-11",
        "type": "typed",
        "prompt": "Scrivi esattamente la frase seguente. — Confermi la scadenza, per favore.",
        "options": [],
        "answers": [
          "Confermi la scadenza, per favore."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-it-2-12",
        "type": "typed",
        "prompt": "Scrivi esattamente la frase seguente. — Ho bisogno di un po’ più di tempo.",
        "options": [],
        "answers": [
          "Ho bisogno di un po’ più di tempo."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-it-2-13",
        "type": "typed",
        "prompt": "Scrivi esattamente la frase seguente. — Farò un seguito via e-mail.",
        "options": [],
        "answers": [
          "Farò un seguito via e-mail."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-it-2-14",
        "type": "audio_choice",
        "prompt": "Ascolta e scegli la frase che senti.",
        "options": [
          "Confermi la scadenza, per favore.",
          "Ho bisogno di un po’ più di tempo.",
          "Farò un seguito via e-mail.",
          "Possiamo spostare la riunione?"
        ],
        "answers": [
          "Confermi la scadenza, per favore."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Confermi la scadenza, per favore.",
        "ttsLang": "it-IT",
        "maxPlays": 3,
        "playbackRate": 1,
        "mediaUrl": "/audio/it-workplace.wav"
      },
      {
        "id": "native-it-2-15",
        "type": "audio_choice",
        "prompt": "Ascolta e scegli la frase che senti.",
        "options": [
          "Ho bisogno di un po’ più di tempo.",
          "Farò un seguito via e-mail.",
          "Possiamo spostare la riunione?",
          "Grazie per il suo aiuto."
        ],
        "answers": [
          "Ho bisogno di un po’ più di tempo."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Ho bisogno di un po’ più di tempo.",
        "ttsLang": "it-IT",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-it-2-16",
        "type": "audio_choice",
        "prompt": "Ascolta e scegli la frase che senti.",
        "options": [
          "Farò un seguito via e-mail.",
          "Possiamo spostare la riunione?",
          "Grazie per il suo aiuto.",
          "Mi faccia sapere se cambia qualcosa."
        ],
        "answers": [
          "Farò un seguito via e-mail."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Farò un seguito via e-mail.",
        "ttsLang": "it-IT",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-it-2-17",
        "type": "audio_choice",
        "prompt": "Ascolta e scegli la frase che senti.",
        "options": [
          "Possiamo spostare la riunione?",
          "Grazie per il suo aiuto.",
          "Mi faccia sapere se cambia qualcosa.",
          "Può inviare il rapporto oggi?"
        ],
        "answers": [
          "Possiamo spostare la riunione?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Possiamo spostare la riunione?",
        "ttsLang": "it-IT",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-it-2-18",
        "type": "audio_choice",
        "prompt": "Ascolta e scegli la frase che senti.",
        "options": [
          "Grazie per il suo aiuto.",
          "Mi faccia sapere se cambia qualcosa.",
          "Può inviare il rapporto oggi?",
          "La riunione inizia alle tre."
        ],
        "answers": [
          "Grazie per il suo aiuto."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Grazie per il suo aiuto.",
        "ttsLang": "it-IT",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-it-2-19",
        "type": "fill_blank",
        "prompt": "Completa la frase. — La riunione inizia alle ___",
        "options": [
          "tre",
          "oggi",
          "favore",
          "tempo"
        ],
        "answers": [
          "tre"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-it-2-20",
        "type": "fill_blank",
        "prompt": "Completa la frase. — Confermi la scadenza, per ___",
        "options": [
          "favore",
          "oggi",
          "tre",
          "tempo"
        ],
        "answers": [
          "favore"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-it-2-21",
        "type": "fill_blank",
        "prompt": "Completa la frase. — Ho bisogno di un po’ più di ___",
        "options": [
          "tempo",
          "oggi",
          "tre",
          "favore"
        ],
        "answers": [
          "tempo"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-it-2-22",
        "type": "fill_blank",
        "prompt": "Completa la frase. — Farò un seguito via ___",
        "options": [
          "e-mail",
          "oggi",
          "tre",
          "favore"
        ],
        "answers": [
          "e-mail"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-it-2-23",
        "type": "sentence_builder",
        "prompt": "Metti le parole nell’ordine corretto.",
        "options": [
          "Ho",
          "bisogno",
          "di",
          "un",
          "po’",
          "più",
          "di",
          "tempo"
        ],
        "answers": [
          "Ho bisogno di un po’ più di tempo"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-it-2-24",
        "type": "sentence_builder",
        "prompt": "Metti le parole nell’ordine corretto.",
        "options": [
          "Farò",
          "un",
          "seguito",
          "via",
          "e-mail"
        ],
        "answers": [
          "Farò un seguito via e-mail"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-it-2-25",
        "type": "sentence_builder",
        "prompt": "Metti le parole nell’ordine corretto.",
        "options": [
          "Possiamo",
          "spostare",
          "la",
          "riunione"
        ],
        "answers": [
          "Possiamo spostare la riunione"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-it-2-26",
        "type": "sentence_builder",
        "prompt": "Metti le parole nell’ordine corretto.",
        "options": [
          "Grazie",
          "per",
          "il",
          "suo",
          "aiuto"
        ],
        "answers": [
          "Grazie per il suo aiuto"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-it-2-27",
        "type": "scenario_decision",
        "prompt": "Scegli la risposta più appropriata.",
        "options": [
          "Farò un seguito via e-mail.",
          "Possiamo spostare la riunione?",
          "Grazie per il suo aiuto.",
          "Mi faccia sapere se cambia qualcosa."
        ],
        "answers": [
          "Farò un seguito via e-mail."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-it-2-28",
        "type": "scenario_decision",
        "prompt": "Scegli la risposta più appropriata.",
        "options": [
          "Possiamo spostare la riunione?",
          "Grazie per il suo aiuto.",
          "Mi faccia sapere se cambia qualcosa.",
          "Può inviare il rapporto oggi?"
        ],
        "answers": [
          "Possiamo spostare la riunione?"
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-it-2-29",
        "type": "scenario_decision",
        "prompt": "Scegli la risposta più appropriata.",
        "options": [
          "Grazie per il suo aiuto.",
          "Mi faccia sapere se cambia qualcosa.",
          "Può inviare il rapporto oggi?",
          "La riunione inizia alle tre."
        ],
        "answers": [
          "Grazie per il suo aiuto."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-it-2-30",
        "type": "scenario_decision",
        "prompt": "Scegli la risposta più appropriata.",
        "options": [
          "Mi faccia sapere se cambia qualcosa.",
          "Può inviare il rapporto oggi?",
          "La riunione inizia alle tre.",
          "Confermi la scadenza, per favore."
        ],
        "answers": [
          "Mi faccia sapere se cambia qualcosa."
        ],
        "explanation": "Rivedi questa espressione nel contesto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-pt-1",
    "title": "Português — Fundamentos",
    "language": "pt",
    "level": "Starter",
    "topic": "Português — Fundamentos",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Pratique português básico com escuta, ordem de frases e respostas úteis.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-pt-0-01",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Bom dia.",
        "options": [
          "Bom dia.",
          "Muito obrigado.",
          "Você pode me ajudar, por favor?",
          "Onde fica a estação?"
        ],
        "answers": [
          "Bom dia."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-0-02",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Muito obrigado.",
        "options": [
          "Muito obrigado.",
          "Você pode me ajudar, por favor?",
          "Onde fica a estação?",
          "A que horas começa?"
        ],
        "answers": [
          "Muito obrigado."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-0-03",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Você pode me ajudar, por favor?",
        "options": [
          "Você pode me ajudar, por favor?",
          "Onde fica a estação?",
          "A que horas começa?",
          "Eu entendo."
        ],
        "answers": [
          "Você pode me ajudar, por favor?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-0-04",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Onde fica a estação?",
        "options": [
          "Onde fica a estação?",
          "A que horas começa?",
          "Eu entendo.",
          "Pode repetir, por favor?"
        ],
        "answers": [
          "Onde fica a estação?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-0-05",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — A que horas começa?",
        "options": [
          "A que horas começa?",
          "Eu entendo.",
          "Pode repetir, por favor?",
          "Até amanhã."
        ],
        "answers": [
          "A que horas começa?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-0-06",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Eu entendo.",
        "options": [
          "Eu entendo.",
          "Pode repetir, por favor?",
          "Até amanhã.",
          "Bom dia."
        ],
        "answers": [
          "Eu entendo."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-0-07",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Pode repetir, por favor?",
        "options": [
          "Pode repetir, por favor?",
          "Até amanhã.",
          "Bom dia.",
          "Muito obrigado."
        ],
        "answers": [
          "Pode repetir, por favor?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-0-08",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Até amanhã.",
        "options": [
          "Até amanhã.",
          "Bom dia.",
          "Muito obrigado.",
          "Você pode me ajudar, por favor?"
        ],
        "answers": [
          "Até amanhã."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-0-09",
        "type": "typed",
        "prompt": "Digite exatamente a frase abaixo. — Bom dia.",
        "options": [],
        "answers": [
          "Bom dia."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-pt-0-10",
        "type": "typed",
        "prompt": "Digite exatamente a frase abaixo. — Muito obrigado.",
        "options": [],
        "answers": [
          "Muito obrigado."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-pt-0-11",
        "type": "typed",
        "prompt": "Digite exatamente a frase abaixo. — Você pode me ajudar, por favor?",
        "options": [],
        "answers": [
          "Você pode me ajudar, por favor?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-pt-0-12",
        "type": "typed",
        "prompt": "Digite exatamente a frase abaixo. — Onde fica a estação?",
        "options": [],
        "answers": [
          "Onde fica a estação?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-pt-0-13",
        "type": "typed",
        "prompt": "Digite exatamente a frase abaixo. — A que horas começa?",
        "options": [],
        "answers": [
          "A que horas começa?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-pt-0-14",
        "type": "audio_choice",
        "prompt": "Ouça e escolha a frase que você ouviu.",
        "options": [
          "Você pode me ajudar, por favor?",
          "Onde fica a estação?",
          "A que horas começa?",
          "Eu entendo."
        ],
        "answers": [
          "Você pode me ajudar, por favor?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Você pode me ajudar, por favor?",
        "ttsLang": "pt-BR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-pt-0-15",
        "type": "audio_choice",
        "prompt": "Ouça e escolha a frase que você ouviu.",
        "options": [
          "Onde fica a estação?",
          "A que horas começa?",
          "Eu entendo.",
          "Pode repetir, por favor?"
        ],
        "answers": [
          "Onde fica a estação?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Onde fica a estação?",
        "ttsLang": "pt-BR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-pt-0-16",
        "type": "audio_choice",
        "prompt": "Ouça e escolha a frase que você ouviu.",
        "options": [
          "A que horas começa?",
          "Eu entendo.",
          "Pode repetir, por favor?",
          "Até amanhã."
        ],
        "answers": [
          "A que horas começa?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "A que horas começa?",
        "ttsLang": "pt-BR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-pt-0-17",
        "type": "audio_choice",
        "prompt": "Ouça e escolha a frase que você ouviu.",
        "options": [
          "Eu entendo.",
          "Pode repetir, por favor?",
          "Até amanhã.",
          "Bom dia."
        ],
        "answers": [
          "Eu entendo."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Eu entendo.",
        "ttsLang": "pt-BR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-pt-0-18",
        "type": "audio_choice",
        "prompt": "Ouça e escolha a frase que você ouviu.",
        "options": [
          "Pode repetir, por favor?",
          "Até amanhã.",
          "Bom dia.",
          "Muito obrigado."
        ],
        "answers": [
          "Pode repetir, por favor?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Pode repetir, por favor?",
        "ttsLang": "pt-BR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-pt-0-19",
        "type": "fill_blank",
        "prompt": "Complete a frase. — Muito ___",
        "options": [
          "obrigado",
          "dia",
          "favor",
          "estação"
        ],
        "answers": [
          "obrigado"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-pt-0-20",
        "type": "fill_blank",
        "prompt": "Complete a frase. — Você pode me ajudar, por ___",
        "options": [
          "favor",
          "dia",
          "obrigado",
          "estação"
        ],
        "answers": [
          "favor"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-pt-0-21",
        "type": "fill_blank",
        "prompt": "Complete a frase. — Onde fica a ___",
        "options": [
          "estação",
          "dia",
          "obrigado",
          "favor"
        ],
        "answers": [
          "estação"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-pt-0-22",
        "type": "fill_blank",
        "prompt": "Complete a frase. — A que horas ___",
        "options": [
          "começa",
          "dia",
          "obrigado",
          "favor"
        ],
        "answers": [
          "começa"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-pt-0-23",
        "type": "sentence_builder",
        "prompt": "Coloque as palavras na ordem correta.",
        "options": [
          "Onde",
          "fica",
          "a",
          "estação"
        ],
        "answers": [
          "Onde fica a estação"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-pt-0-24",
        "type": "sentence_builder",
        "prompt": "Coloque as palavras na ordem correta.",
        "options": [
          "A",
          "que",
          "horas",
          "começa"
        ],
        "answers": [
          "A que horas começa"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-pt-0-25",
        "type": "sentence_builder",
        "prompt": "Coloque as palavras na ordem correta.",
        "options": [
          "Eu",
          "entendo"
        ],
        "answers": [
          "Eu entendo"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-pt-0-26",
        "type": "sentence_builder",
        "prompt": "Coloque as palavras na ordem correta.",
        "options": [
          "Pode",
          "repetir,",
          "por",
          "favor"
        ],
        "answers": [
          "Pode repetir, por favor"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-pt-0-27",
        "type": "scenario_decision",
        "prompt": "Escolha a resposta mais adequada.",
        "options": [
          "A que horas começa?",
          "Eu entendo.",
          "Pode repetir, por favor?",
          "Até amanhã."
        ],
        "answers": [
          "A que horas começa?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-pt-0-28",
        "type": "scenario_decision",
        "prompt": "Escolha a resposta mais adequada.",
        "options": [
          "Eu entendo.",
          "Pode repetir, por favor?",
          "Até amanhã.",
          "Bom dia."
        ],
        "answers": [
          "Eu entendo."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-pt-0-29",
        "type": "scenario_decision",
        "prompt": "Escolha a resposta mais adequada.",
        "options": [
          "Pode repetir, por favor?",
          "Até amanhã.",
          "Bom dia.",
          "Muito obrigado."
        ],
        "answers": [
          "Pode repetir, por favor?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-pt-0-30",
        "type": "scenario_decision",
        "prompt": "Escolha a resposta mais adequada.",
        "options": [
          "Até amanhã.",
          "Bom dia.",
          "Muito obrigado.",
          "Você pode me ajudar, por favor?"
        ],
        "answers": [
          "Até amanhã."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-pt-2",
    "title": "Português — Escola e vida cotidiana",
    "language": "pt",
    "level": "Intermediate",
    "topic": "Português — Escola e vida cotidiana",
    "context": "School & Travel",
    "skill": "Mixed",
    "description": "Pratique português na escola, em viagens e na vida cotidiana.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-pt-1-01",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — A aula começa às oito.",
        "options": [
          "A aula começa às oito.",
          "Qual sala vamos usar?",
          "Terminei a lição de casa.",
          "Pode explicar novamente?"
        ],
        "answers": [
          "A aula começa às oito."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-1-02",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Qual sala vamos usar?",
        "options": [
          "Qual sala vamos usar?",
          "Terminei a lição de casa.",
          "Pode explicar novamente?",
          "Abra o livro, por favor."
        ],
        "answers": [
          "Qual sala vamos usar?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-1-03",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Terminei a lição de casa.",
        "options": [
          "Terminei a lição de casa.",
          "Pode explicar novamente?",
          "Abra o livro, por favor.",
          "O ônibus está atrasado."
        ],
        "answers": [
          "Terminei a lição de casa."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-1-04",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Pode explicar novamente?",
        "options": [
          "Pode explicar novamente?",
          "Abra o livro, por favor.",
          "O ônibus está atrasado.",
          "Eu gostaria de uma passagem, por favor."
        ],
        "answers": [
          "Pode explicar novamente?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-1-05",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Abra o livro, por favor.",
        "options": [
          "Abra o livro, por favor.",
          "O ônibus está atrasado.",
          "Eu gostaria de uma passagem, por favor.",
          "Onde posso comprar o almoço?"
        ],
        "answers": [
          "Abra o livro, por favor."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-1-06",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — O ônibus está atrasado.",
        "options": [
          "O ônibus está atrasado.",
          "Eu gostaria de uma passagem, por favor.",
          "Onde posso comprar o almoço?",
          "A aula começa às oito."
        ],
        "answers": [
          "O ônibus está atrasado."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-1-07",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Eu gostaria de uma passagem, por favor.",
        "options": [
          "Eu gostaria de uma passagem, por favor.",
          "Onde posso comprar o almoço?",
          "A aula começa às oito.",
          "Qual sala vamos usar?"
        ],
        "answers": [
          "Eu gostaria de uma passagem, por favor."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-1-08",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Onde posso comprar o almoço?",
        "options": [
          "Onde posso comprar o almoço?",
          "A aula começa às oito.",
          "Qual sala vamos usar?",
          "Terminei a lição de casa."
        ],
        "answers": [
          "Onde posso comprar o almoço?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-1-09",
        "type": "typed",
        "prompt": "Digite exatamente a frase abaixo. — A aula começa às oito.",
        "options": [],
        "answers": [
          "A aula começa às oito."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-pt-1-10",
        "type": "typed",
        "prompt": "Digite exatamente a frase abaixo. — Qual sala vamos usar?",
        "options": [],
        "answers": [
          "Qual sala vamos usar?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-pt-1-11",
        "type": "typed",
        "prompt": "Digite exatamente a frase abaixo. — Terminei a lição de casa.",
        "options": [],
        "answers": [
          "Terminei a lição de casa."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-pt-1-12",
        "type": "typed",
        "prompt": "Digite exatamente a frase abaixo. — Pode explicar novamente?",
        "options": [],
        "answers": [
          "Pode explicar novamente?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-pt-1-13",
        "type": "typed",
        "prompt": "Digite exatamente a frase abaixo. — Abra o livro, por favor.",
        "options": [],
        "answers": [
          "Abra o livro, por favor."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-pt-1-14",
        "type": "audio_choice",
        "prompt": "Ouça e escolha a frase que você ouviu.",
        "options": [
          "Terminei a lição de casa.",
          "Pode explicar novamente?",
          "Abra o livro, por favor.",
          "O ônibus está atrasado."
        ],
        "answers": [
          "Terminei a lição de casa."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Terminei a lição de casa.",
        "ttsLang": "pt-BR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-pt-1-15",
        "type": "audio_choice",
        "prompt": "Ouça e escolha a frase que você ouviu.",
        "options": [
          "Pode explicar novamente?",
          "Abra o livro, por favor.",
          "O ônibus está atrasado.",
          "Eu gostaria de uma passagem, por favor."
        ],
        "answers": [
          "Pode explicar novamente?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Pode explicar novamente?",
        "ttsLang": "pt-BR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-pt-1-16",
        "type": "audio_choice",
        "prompt": "Ouça e escolha a frase que você ouviu.",
        "options": [
          "Abra o livro, por favor.",
          "O ônibus está atrasado.",
          "Eu gostaria de uma passagem, por favor.",
          "Onde posso comprar o almoço?"
        ],
        "answers": [
          "Abra o livro, por favor."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Abra o livro, por favor.",
        "ttsLang": "pt-BR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-pt-1-17",
        "type": "audio_choice",
        "prompt": "Ouça e escolha a frase que você ouviu.",
        "options": [
          "O ônibus está atrasado.",
          "Eu gostaria de uma passagem, por favor.",
          "Onde posso comprar o almoço?",
          "A aula começa às oito."
        ],
        "answers": [
          "O ônibus está atrasado."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "O ônibus está atrasado.",
        "ttsLang": "pt-BR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-pt-1-18",
        "type": "audio_choice",
        "prompt": "Ouça e escolha a frase que você ouviu.",
        "options": [
          "Eu gostaria de uma passagem, por favor.",
          "Onde posso comprar o almoço?",
          "A aula começa às oito.",
          "Qual sala vamos usar?"
        ],
        "answers": [
          "Eu gostaria de uma passagem, por favor."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Eu gostaria de uma passagem, por favor.",
        "ttsLang": "pt-BR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-pt-1-19",
        "type": "fill_blank",
        "prompt": "Complete a frase. — Qual sala vamos ___",
        "options": [
          "usar",
          "oito",
          "casa",
          "novamente"
        ],
        "answers": [
          "usar"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-pt-1-20",
        "type": "fill_blank",
        "prompt": "Complete a frase. — Terminei a lição de ___",
        "options": [
          "casa",
          "oito",
          "usar",
          "novamente"
        ],
        "answers": [
          "casa"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-pt-1-21",
        "type": "fill_blank",
        "prompt": "Complete a frase. — Pode explicar ___",
        "options": [
          "novamente",
          "oito",
          "usar",
          "casa"
        ],
        "answers": [
          "novamente"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-pt-1-22",
        "type": "fill_blank",
        "prompt": "Complete a frase. — Abra o livro, por ___",
        "options": [
          "favor",
          "oito",
          "usar",
          "casa"
        ],
        "answers": [
          "favor"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-pt-1-23",
        "type": "sentence_builder",
        "prompt": "Coloque as palavras na ordem correta.",
        "options": [
          "Pode",
          "explicar",
          "novamente"
        ],
        "answers": [
          "Pode explicar novamente"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-pt-1-24",
        "type": "sentence_builder",
        "prompt": "Coloque as palavras na ordem correta.",
        "options": [
          "Abra",
          "o",
          "livro,",
          "por",
          "favor"
        ],
        "answers": [
          "Abra o livro, por favor"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-pt-1-25",
        "type": "sentence_builder",
        "prompt": "Coloque as palavras na ordem correta.",
        "options": [
          "O",
          "ônibus",
          "está",
          "atrasado"
        ],
        "answers": [
          "O ônibus está atrasado"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-pt-1-26",
        "type": "sentence_builder",
        "prompt": "Coloque as palavras na ordem correta.",
        "options": [
          "Eu",
          "gostaria",
          "de",
          "uma",
          "passagem,",
          "por",
          "favor"
        ],
        "answers": [
          "Eu gostaria de uma passagem, por favor"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-pt-1-27",
        "type": "scenario_decision",
        "prompt": "Escolha a resposta mais adequada.",
        "options": [
          "Abra o livro, por favor.",
          "O ônibus está atrasado.",
          "Eu gostaria de uma passagem, por favor.",
          "Onde posso comprar o almoço?"
        ],
        "answers": [
          "Abra o livro, por favor."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-pt-1-28",
        "type": "scenario_decision",
        "prompt": "Escolha a resposta mais adequada.",
        "options": [
          "O ônibus está atrasado.",
          "Eu gostaria de uma passagem, por favor.",
          "Onde posso comprar o almoço?",
          "A aula começa às oito."
        ],
        "answers": [
          "O ônibus está atrasado."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-pt-1-29",
        "type": "scenario_decision",
        "prompt": "Escolha a resposta mais adequada.",
        "options": [
          "Eu gostaria de uma passagem, por favor.",
          "Onde posso comprar o almoço?",
          "A aula começa às oito.",
          "Qual sala vamos usar?"
        ],
        "answers": [
          "Eu gostaria de uma passagem, por favor."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-pt-1-30",
        "type": "scenario_decision",
        "prompt": "Escolha a resposta mais adequada.",
        "options": [
          "Onde posso comprar o almoço?",
          "A aula começa às oito.",
          "Qual sala vamos usar?",
          "Terminei a lição de casa."
        ],
        "answers": [
          "Onde posso comprar o almoço?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-pt-3",
    "title": "Português — Trabalho e comunicação profissional",
    "language": "pt",
    "level": "Professional",
    "topic": "Português — Trabalho e comunicação profissional",
    "context": "Workplace & Professional",
    "skill": "Mixed",
    "description": "Pratique português profissional para reuniões, prazos, e-mails e clientes.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-pt-2-01",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Você pode enviar o relatório hoje?",
        "options": [
          "Você pode enviar o relatório hoje?",
          "A reunião começa às três.",
          "Confirme o prazo, por favor.",
          "Preciso de um pouco mais de tempo."
        ],
        "answers": [
          "Você pode enviar o relatório hoje?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-2-02",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — A reunião começa às três.",
        "options": [
          "A reunião começa às três.",
          "Confirme o prazo, por favor.",
          "Preciso de um pouco mais de tempo.",
          "Vou acompanhar por e-mail."
        ],
        "answers": [
          "A reunião começa às três."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-2-03",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Confirme o prazo, por favor.",
        "options": [
          "Confirme o prazo, por favor.",
          "Preciso de um pouco mais de tempo.",
          "Vou acompanhar por e-mail.",
          "Podemos remarcar a reunião?"
        ],
        "answers": [
          "Confirme o prazo, por favor."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-2-04",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Preciso de um pouco mais de tempo.",
        "options": [
          "Preciso de um pouco mais de tempo.",
          "Vou acompanhar por e-mail.",
          "Podemos remarcar a reunião?",
          "Obrigado pela ajuda."
        ],
        "answers": [
          "Preciso de um pouco mais de tempo."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-2-05",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Vou acompanhar por e-mail.",
        "options": [
          "Vou acompanhar por e-mail.",
          "Podemos remarcar a reunião?",
          "Obrigado pela ajuda.",
          "Avise-me se houver alguma mudança."
        ],
        "answers": [
          "Vou acompanhar por e-mail."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-2-06",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Podemos remarcar a reunião?",
        "options": [
          "Podemos remarcar a reunião?",
          "Obrigado pela ajuda.",
          "Avise-me se houver alguma mudança.",
          "Você pode enviar o relatório hoje?"
        ],
        "answers": [
          "Podemos remarcar a reunião?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-2-07",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Obrigado pela ajuda.",
        "options": [
          "Obrigado pela ajuda.",
          "Avise-me se houver alguma mudança.",
          "Você pode enviar o relatório hoje?",
          "A reunião começa às três."
        ],
        "answers": [
          "Obrigado pela ajuda."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-2-08",
        "type": "multiple_choice",
        "prompt": "Escolha a expressão correta. — Avise-me se houver alguma mudança.",
        "options": [
          "Avise-me se houver alguma mudança.",
          "Você pode enviar o relatório hoje?",
          "A reunião começa às três.",
          "Confirme o prazo, por favor."
        ],
        "answers": [
          "Avise-me se houver alguma mudança."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-pt-2-09",
        "type": "typed",
        "prompt": "Digite exatamente a frase abaixo. — Você pode enviar o relatório hoje?",
        "options": [],
        "answers": [
          "Você pode enviar o relatório hoje?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-pt-2-10",
        "type": "typed",
        "prompt": "Digite exatamente a frase abaixo. — A reunião começa às três.",
        "options": [],
        "answers": [
          "A reunião começa às três."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-pt-2-11",
        "type": "typed",
        "prompt": "Digite exatamente a frase abaixo. — Confirme o prazo, por favor.",
        "options": [],
        "answers": [
          "Confirme o prazo, por favor."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-pt-2-12",
        "type": "typed",
        "prompt": "Digite exatamente a frase abaixo. — Preciso de um pouco mais de tempo.",
        "options": [],
        "answers": [
          "Preciso de um pouco mais de tempo."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-pt-2-13",
        "type": "typed",
        "prompt": "Digite exatamente a frase abaixo. — Vou acompanhar por e-mail.",
        "options": [],
        "answers": [
          "Vou acompanhar por e-mail."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-pt-2-14",
        "type": "audio_choice",
        "prompt": "Ouça e escolha a frase que você ouviu.",
        "options": [
          "Confirme o prazo, por favor.",
          "Preciso de um pouco mais de tempo.",
          "Vou acompanhar por e-mail.",
          "Podemos remarcar a reunião?"
        ],
        "answers": [
          "Confirme o prazo, por favor."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Confirme o prazo, por favor.",
        "ttsLang": "pt-BR",
        "maxPlays": 3,
        "playbackRate": 1,
        "mediaUrl": "/audio/pt-workplace.wav"
      },
      {
        "id": "native-pt-2-15",
        "type": "audio_choice",
        "prompt": "Ouça e escolha a frase que você ouviu.",
        "options": [
          "Preciso de um pouco mais de tempo.",
          "Vou acompanhar por e-mail.",
          "Podemos remarcar a reunião?",
          "Obrigado pela ajuda."
        ],
        "answers": [
          "Preciso de um pouco mais de tempo."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Preciso de um pouco mais de tempo.",
        "ttsLang": "pt-BR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-pt-2-16",
        "type": "audio_choice",
        "prompt": "Ouça e escolha a frase que você ouviu.",
        "options": [
          "Vou acompanhar por e-mail.",
          "Podemos remarcar a reunião?",
          "Obrigado pela ajuda.",
          "Avise-me se houver alguma mudança."
        ],
        "answers": [
          "Vou acompanhar por e-mail."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Vou acompanhar por e-mail.",
        "ttsLang": "pt-BR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-pt-2-17",
        "type": "audio_choice",
        "prompt": "Ouça e escolha a frase que você ouviu.",
        "options": [
          "Podemos remarcar a reunião?",
          "Obrigado pela ajuda.",
          "Avise-me se houver alguma mudança.",
          "Você pode enviar o relatório hoje?"
        ],
        "answers": [
          "Podemos remarcar a reunião?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Podemos remarcar a reunião?",
        "ttsLang": "pt-BR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-pt-2-18",
        "type": "audio_choice",
        "prompt": "Ouça e escolha a frase que você ouviu.",
        "options": [
          "Obrigado pela ajuda.",
          "Avise-me se houver alguma mudança.",
          "Você pode enviar o relatório hoje?",
          "A reunião começa às três."
        ],
        "answers": [
          "Obrigado pela ajuda."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Obrigado pela ajuda.",
        "ttsLang": "pt-BR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-pt-2-19",
        "type": "fill_blank",
        "prompt": "Complete a frase. — A reunião começa às ___",
        "options": [
          "três",
          "hoje",
          "favor",
          "tempo"
        ],
        "answers": [
          "três"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-pt-2-20",
        "type": "fill_blank",
        "prompt": "Complete a frase. — Confirme o prazo, por ___",
        "options": [
          "favor",
          "hoje",
          "três",
          "tempo"
        ],
        "answers": [
          "favor"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-pt-2-21",
        "type": "fill_blank",
        "prompt": "Complete a frase. — Preciso de um pouco mais de ___",
        "options": [
          "tempo",
          "hoje",
          "três",
          "favor"
        ],
        "answers": [
          "tempo"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-pt-2-22",
        "type": "fill_blank",
        "prompt": "Complete a frase. — Vou acompanhar por ___",
        "options": [
          "e-mail",
          "hoje",
          "três",
          "favor"
        ],
        "answers": [
          "e-mail"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-pt-2-23",
        "type": "sentence_builder",
        "prompt": "Coloque as palavras na ordem correta.",
        "options": [
          "Preciso",
          "de",
          "um",
          "pouco",
          "mais",
          "de",
          "tempo"
        ],
        "answers": [
          "Preciso de um pouco mais de tempo"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-pt-2-24",
        "type": "sentence_builder",
        "prompt": "Coloque as palavras na ordem correta.",
        "options": [
          "Vou",
          "acompanhar",
          "por",
          "e-mail"
        ],
        "answers": [
          "Vou acompanhar por e-mail"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-pt-2-25",
        "type": "sentence_builder",
        "prompt": "Coloque as palavras na ordem correta.",
        "options": [
          "Podemos",
          "remarcar",
          "a",
          "reunião"
        ],
        "answers": [
          "Podemos remarcar a reunião"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-pt-2-26",
        "type": "sentence_builder",
        "prompt": "Coloque as palavras na ordem correta.",
        "options": [
          "Obrigado",
          "pela",
          "ajuda"
        ],
        "answers": [
          "Obrigado pela ajuda"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-pt-2-27",
        "type": "scenario_decision",
        "prompt": "Escolha a resposta mais adequada.",
        "options": [
          "Vou acompanhar por e-mail.",
          "Podemos remarcar a reunião?",
          "Obrigado pela ajuda.",
          "Avise-me se houver alguma mudança."
        ],
        "answers": [
          "Vou acompanhar por e-mail."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-pt-2-28",
        "type": "scenario_decision",
        "prompt": "Escolha a resposta mais adequada.",
        "options": [
          "Podemos remarcar a reunião?",
          "Obrigado pela ajuda.",
          "Avise-me se houver alguma mudança.",
          "Você pode enviar o relatório hoje?"
        ],
        "answers": [
          "Podemos remarcar a reunião?"
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-pt-2-29",
        "type": "scenario_decision",
        "prompt": "Escolha a resposta mais adequada.",
        "options": [
          "Obrigado pela ajuda.",
          "Avise-me se houver alguma mudança.",
          "Você pode enviar o relatório hoje?",
          "A reunião começa às três."
        ],
        "answers": [
          "Obrigado pela ajuda."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-pt-2-30",
        "type": "scenario_decision",
        "prompt": "Escolha a resposta mais adequada.",
        "options": [
          "Avise-me se houver alguma mudança.",
          "Você pode enviar o relatório hoje?",
          "A reunião começa às três.",
          "Confirme o prazo, por favor."
        ],
        "answers": [
          "Avise-me se houver alguma mudança."
        ],
        "explanation": "Revise esta expressão no contexto.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-ru-1",
    "title": "Русский — Основы",
    "language": "ru",
    "level": "Starter",
    "topic": "Русский — Основы",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Практикуйте базовый русский с аудированием, порядком слов и полезными ответами.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-ru-0-01",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Доброе утро.",
        "options": [
          "Доброе утро.",
          "Большое спасибо.",
          "Вы можете мне помочь, пожалуйста?",
          "Где находится вокзал?"
        ],
        "answers": [
          "Доброе утро."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-0-02",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Большое спасибо.",
        "options": [
          "Большое спасибо.",
          "Вы можете мне помочь, пожалуйста?",
          "Где находится вокзал?",
          "Во сколько начинается?"
        ],
        "answers": [
          "Большое спасибо."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-0-03",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Вы можете мне помочь, пожалуйста?",
        "options": [
          "Вы можете мне помочь, пожалуйста?",
          "Где находится вокзал?",
          "Во сколько начинается?",
          "Я понимаю."
        ],
        "answers": [
          "Вы можете мне помочь, пожалуйста?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-0-04",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Где находится вокзал?",
        "options": [
          "Где находится вокзал?",
          "Во сколько начинается?",
          "Я понимаю.",
          "Повторите, пожалуйста."
        ],
        "answers": [
          "Где находится вокзал?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-0-05",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Во сколько начинается?",
        "options": [
          "Во сколько начинается?",
          "Я понимаю.",
          "Повторите, пожалуйста.",
          "До завтра."
        ],
        "answers": [
          "Во сколько начинается?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-0-06",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Я понимаю.",
        "options": [
          "Я понимаю.",
          "Повторите, пожалуйста.",
          "До завтра.",
          "Доброе утро."
        ],
        "answers": [
          "Я понимаю."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-0-07",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Повторите, пожалуйста.",
        "options": [
          "Повторите, пожалуйста.",
          "До завтра.",
          "Доброе утро.",
          "Большое спасибо."
        ],
        "answers": [
          "Повторите, пожалуйста."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-0-08",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — До завтра.",
        "options": [
          "До завтра.",
          "Доброе утро.",
          "Большое спасибо.",
          "Вы можете мне помочь, пожалуйста?"
        ],
        "answers": [
          "До завтра."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-0-09",
        "type": "typed",
        "prompt": "Введите следующую фразу точно. — Доброе утро.",
        "options": [],
        "answers": [
          "Доброе утро."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ru-0-10",
        "type": "typed",
        "prompt": "Введите следующую фразу точно. — Большое спасибо.",
        "options": [],
        "answers": [
          "Большое спасибо."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ru-0-11",
        "type": "typed",
        "prompt": "Введите следующую фразу точно. — Вы можете мне помочь, пожалуйста?",
        "options": [],
        "answers": [
          "Вы можете мне помочь, пожалуйста?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ru-0-12",
        "type": "typed",
        "prompt": "Введите следующую фразу точно. — Где находится вокзал?",
        "options": [],
        "answers": [
          "Где находится вокзал?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ru-0-13",
        "type": "typed",
        "prompt": "Введите следующую фразу точно. — Во сколько начинается?",
        "options": [],
        "answers": [
          "Во сколько начинается?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ru-0-14",
        "type": "audio_choice",
        "prompt": "Послушайте и выберите услышанную фразу.",
        "options": [
          "Вы можете мне помочь, пожалуйста?",
          "Где находится вокзал?",
          "Во сколько начинается?",
          "Я понимаю."
        ],
        "answers": [
          "Вы можете мне помочь, пожалуйста?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Вы можете мне помочь, пожалуйста?",
        "ttsLang": "ru-RU",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ru-0-15",
        "type": "audio_choice",
        "prompt": "Послушайте и выберите услышанную фразу.",
        "options": [
          "Где находится вокзал?",
          "Во сколько начинается?",
          "Я понимаю.",
          "Повторите, пожалуйста."
        ],
        "answers": [
          "Где находится вокзал?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Где находится вокзал?",
        "ttsLang": "ru-RU",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ru-0-16",
        "type": "audio_choice",
        "prompt": "Послушайте и выберите услышанную фразу.",
        "options": [
          "Во сколько начинается?",
          "Я понимаю.",
          "Повторите, пожалуйста.",
          "До завтра."
        ],
        "answers": [
          "Во сколько начинается?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Во сколько начинается?",
        "ttsLang": "ru-RU",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ru-0-17",
        "type": "audio_choice",
        "prompt": "Послушайте и выберите услышанную фразу.",
        "options": [
          "Я понимаю.",
          "Повторите, пожалуйста.",
          "До завтра.",
          "Доброе утро."
        ],
        "answers": [
          "Я понимаю."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Я понимаю.",
        "ttsLang": "ru-RU",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ru-0-18",
        "type": "audio_choice",
        "prompt": "Послушайте и выберите услышанную фразу.",
        "options": [
          "Повторите, пожалуйста.",
          "До завтра.",
          "Доброе утро.",
          "Большое спасибо."
        ],
        "answers": [
          "Повторите, пожалуйста."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Повторите, пожалуйста.",
        "ttsLang": "ru-RU",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ru-0-19",
        "type": "fill_blank",
        "prompt": "Дополните фразу. — Большое ___",
        "options": [
          "спасибо",
          "утро",
          "пожалуйста",
          "вокзал"
        ],
        "answers": [
          "спасибо"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ru-0-20",
        "type": "fill_blank",
        "prompt": "Дополните фразу. — Вы можете мне помочь, ___",
        "options": [
          "пожалуйста",
          "утро",
          "спасибо",
          "вокзал"
        ],
        "answers": [
          "пожалуйста"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ru-0-21",
        "type": "fill_blank",
        "prompt": "Дополните фразу. — Где находится ___",
        "options": [
          "вокзал",
          "утро",
          "спасибо",
          "пожалуйста"
        ],
        "answers": [
          "вокзал"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ru-0-22",
        "type": "fill_blank",
        "prompt": "Дополните фразу. — Во сколько ___",
        "options": [
          "начинается",
          "утро",
          "спасибо",
          "пожалуйста"
        ],
        "answers": [
          "начинается"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ru-0-23",
        "type": "sentence_builder",
        "prompt": "Расположите слова в правильном порядке.",
        "options": [
          "Где",
          "находится",
          "вокзал"
        ],
        "answers": [
          "Где находится вокзал"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ru-0-24",
        "type": "sentence_builder",
        "prompt": "Расположите слова в правильном порядке.",
        "options": [
          "Во",
          "сколько",
          "начинается"
        ],
        "answers": [
          "Во сколько начинается"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ru-0-25",
        "type": "sentence_builder",
        "prompt": "Расположите слова в правильном порядке.",
        "options": [
          "Я",
          "понимаю"
        ],
        "answers": [
          "Я понимаю"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ru-0-26",
        "type": "sentence_builder",
        "prompt": "Расположите слова в правильном порядке.",
        "options": [
          "Повторите,",
          "пожалуйста"
        ],
        "answers": [
          "Повторите, пожалуйста"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ru-0-27",
        "type": "scenario_decision",
        "prompt": "Выберите наиболее подходящий ответ.",
        "options": [
          "Во сколько начинается?",
          "Я понимаю.",
          "Повторите, пожалуйста.",
          "До завтра."
        ],
        "answers": [
          "Во сколько начинается?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ru-0-28",
        "type": "scenario_decision",
        "prompt": "Выберите наиболее подходящий ответ.",
        "options": [
          "Я понимаю.",
          "Повторите, пожалуйста.",
          "До завтра.",
          "Доброе утро."
        ],
        "answers": [
          "Я понимаю."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ru-0-29",
        "type": "scenario_decision",
        "prompt": "Выберите наиболее подходящий ответ.",
        "options": [
          "Повторите, пожалуйста.",
          "До завтра.",
          "Доброе утро.",
          "Большое спасибо."
        ],
        "answers": [
          "Повторите, пожалуйста."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ru-0-30",
        "type": "scenario_decision",
        "prompt": "Выберите наиболее подходящий ответ.",
        "options": [
          "До завтра.",
          "Доброе утро.",
          "Большое спасибо.",
          "Вы можете мне помочь, пожалуйста?"
        ],
        "answers": [
          "До завтра."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-ru-2",
    "title": "Русский — Школа и повседневная жизнь",
    "language": "ru",
    "level": "Intermediate",
    "topic": "Русский — Школа и повседневная жизнь",
    "context": "School & Travel",
    "skill": "Mixed",
    "description": "Практикуйте русский в школе, поездках и повседневной жизни.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-ru-1-01",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Урок начинается в восемь.",
        "options": [
          "Урок начинается в восемь.",
          "В какой аудитории мы занимаемся?",
          "Я закончил домашнее задание.",
          "Вы можете объяснить ещё раз?"
        ],
        "answers": [
          "Урок начинается в восемь."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-1-02",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — В какой аудитории мы занимаемся?",
        "options": [
          "В какой аудитории мы занимаемся?",
          "Я закончил домашнее задание.",
          "Вы можете объяснить ещё раз?",
          "Откройте книгу, пожалуйста."
        ],
        "answers": [
          "В какой аудитории мы занимаемся?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-1-03",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Я закончил домашнее задание.",
        "options": [
          "Я закончил домашнее задание.",
          "Вы можете объяснить ещё раз?",
          "Откройте книгу, пожалуйста.",
          "Автобус опаздывает."
        ],
        "answers": [
          "Я закончил домашнее задание."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-1-04",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Вы можете объяснить ещё раз?",
        "options": [
          "Вы можете объяснить ещё раз?",
          "Откройте книгу, пожалуйста.",
          "Автобус опаздывает.",
          "Мне нужен один билет, пожалуйста."
        ],
        "answers": [
          "Вы можете объяснить ещё раз?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-1-05",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Откройте книгу, пожалуйста.",
        "options": [
          "Откройте книгу, пожалуйста.",
          "Автобус опаздывает.",
          "Мне нужен один билет, пожалуйста.",
          "Где можно купить обед?"
        ],
        "answers": [
          "Откройте книгу, пожалуйста."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-1-06",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Автобус опаздывает.",
        "options": [
          "Автобус опаздывает.",
          "Мне нужен один билет, пожалуйста.",
          "Где можно купить обед?",
          "Урок начинается в восемь."
        ],
        "answers": [
          "Автобус опаздывает."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-1-07",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Мне нужен один билет, пожалуйста.",
        "options": [
          "Мне нужен один билет, пожалуйста.",
          "Где можно купить обед?",
          "Урок начинается в восемь.",
          "В какой аудитории мы занимаемся?"
        ],
        "answers": [
          "Мне нужен один билет, пожалуйста."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-1-08",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Где можно купить обед?",
        "options": [
          "Где можно купить обед?",
          "Урок начинается в восемь.",
          "В какой аудитории мы занимаемся?",
          "Я закончил домашнее задание."
        ],
        "answers": [
          "Где можно купить обед?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-1-09",
        "type": "typed",
        "prompt": "Введите следующую фразу точно. — Урок начинается в восемь.",
        "options": [],
        "answers": [
          "Урок начинается в восемь."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ru-1-10",
        "type": "typed",
        "prompt": "Введите следующую фразу точно. — В какой аудитории мы занимаемся?",
        "options": [],
        "answers": [
          "В какой аудитории мы занимаемся?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ru-1-11",
        "type": "typed",
        "prompt": "Введите следующую фразу точно. — Я закончил домашнее задание.",
        "options": [],
        "answers": [
          "Я закончил домашнее задание."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ru-1-12",
        "type": "typed",
        "prompt": "Введите следующую фразу точно. — Вы можете объяснить ещё раз?",
        "options": [],
        "answers": [
          "Вы можете объяснить ещё раз?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ru-1-13",
        "type": "typed",
        "prompt": "Введите следующую фразу точно. — Откройте книгу, пожалуйста.",
        "options": [],
        "answers": [
          "Откройте книгу, пожалуйста."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ru-1-14",
        "type": "audio_choice",
        "prompt": "Послушайте и выберите услышанную фразу.",
        "options": [
          "Я закончил домашнее задание.",
          "Вы можете объяснить ещё раз?",
          "Откройте книгу, пожалуйста.",
          "Автобус опаздывает."
        ],
        "answers": [
          "Я закончил домашнее задание."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Я закончил домашнее задание.",
        "ttsLang": "ru-RU",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ru-1-15",
        "type": "audio_choice",
        "prompt": "Послушайте и выберите услышанную фразу.",
        "options": [
          "Вы можете объяснить ещё раз?",
          "Откройте книгу, пожалуйста.",
          "Автобус опаздывает.",
          "Мне нужен один билет, пожалуйста."
        ],
        "answers": [
          "Вы можете объяснить ещё раз?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Вы можете объяснить ещё раз?",
        "ttsLang": "ru-RU",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ru-1-16",
        "type": "audio_choice",
        "prompt": "Послушайте и выберите услышанную фразу.",
        "options": [
          "Откройте книгу, пожалуйста.",
          "Автобус опаздывает.",
          "Мне нужен один билет, пожалуйста.",
          "Где можно купить обед?"
        ],
        "answers": [
          "Откройте книгу, пожалуйста."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Откройте книгу, пожалуйста.",
        "ttsLang": "ru-RU",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ru-1-17",
        "type": "audio_choice",
        "prompt": "Послушайте и выберите услышанную фразу.",
        "options": [
          "Автобус опаздывает.",
          "Мне нужен один билет, пожалуйста.",
          "Где можно купить обед?",
          "Урок начинается в восемь."
        ],
        "answers": [
          "Автобус опаздывает."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Автобус опаздывает.",
        "ttsLang": "ru-RU",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ru-1-18",
        "type": "audio_choice",
        "prompt": "Послушайте и выберите услышанную фразу.",
        "options": [
          "Мне нужен один билет, пожалуйста.",
          "Где можно купить обед?",
          "Урок начинается в восемь.",
          "В какой аудитории мы занимаемся?"
        ],
        "answers": [
          "Мне нужен один билет, пожалуйста."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Мне нужен один билет, пожалуйста.",
        "ttsLang": "ru-RU",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ru-1-19",
        "type": "fill_blank",
        "prompt": "Дополните фразу. — В какой аудитории мы ___",
        "options": [
          "занимаемся",
          "восемь",
          "задание",
          "раз"
        ],
        "answers": [
          "занимаемся"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ru-1-20",
        "type": "fill_blank",
        "prompt": "Дополните фразу. — Я закончил домашнее ___",
        "options": [
          "задание",
          "восемь",
          "занимаемся",
          "раз"
        ],
        "answers": [
          "задание"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ru-1-21",
        "type": "fill_blank",
        "prompt": "Дополните фразу. — Вы можете объяснить ещё ___",
        "options": [
          "раз",
          "восемь",
          "занимаемся",
          "задание"
        ],
        "answers": [
          "раз"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ru-1-22",
        "type": "fill_blank",
        "prompt": "Дополните фразу. — Откройте книгу, ___",
        "options": [
          "пожалуйста",
          "восемь",
          "занимаемся",
          "задание"
        ],
        "answers": [
          "пожалуйста"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ru-1-23",
        "type": "sentence_builder",
        "prompt": "Расположите слова в правильном порядке.",
        "options": [
          "Вы",
          "можете",
          "объяснить",
          "ещё",
          "раз"
        ],
        "answers": [
          "Вы можете объяснить ещё раз"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ru-1-24",
        "type": "sentence_builder",
        "prompt": "Расположите слова в правильном порядке.",
        "options": [
          "Откройте",
          "книгу,",
          "пожалуйста"
        ],
        "answers": [
          "Откройте книгу, пожалуйста"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ru-1-25",
        "type": "sentence_builder",
        "prompt": "Расположите слова в правильном порядке.",
        "options": [
          "Автобус",
          "опаздывает"
        ],
        "answers": [
          "Автобус опаздывает"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ru-1-26",
        "type": "sentence_builder",
        "prompt": "Расположите слова в правильном порядке.",
        "options": [
          "Мне",
          "нужен",
          "один",
          "билет,",
          "пожалуйста"
        ],
        "answers": [
          "Мне нужен один билет, пожалуйста"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ru-1-27",
        "type": "scenario_decision",
        "prompt": "Выберите наиболее подходящий ответ.",
        "options": [
          "Откройте книгу, пожалуйста.",
          "Автобус опаздывает.",
          "Мне нужен один билет, пожалуйста.",
          "Где можно купить обед?"
        ],
        "answers": [
          "Откройте книгу, пожалуйста."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ru-1-28",
        "type": "scenario_decision",
        "prompt": "Выберите наиболее подходящий ответ.",
        "options": [
          "Автобус опаздывает.",
          "Мне нужен один билет, пожалуйста.",
          "Где можно купить обед?",
          "Урок начинается в восемь."
        ],
        "answers": [
          "Автобус опаздывает."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ru-1-29",
        "type": "scenario_decision",
        "prompt": "Выберите наиболее подходящий ответ.",
        "options": [
          "Мне нужен один билет, пожалуйста.",
          "Где можно купить обед?",
          "Урок начинается в восемь.",
          "В какой аудитории мы занимаемся?"
        ],
        "answers": [
          "Мне нужен один билет, пожалуйста."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ru-1-30",
        "type": "scenario_decision",
        "prompt": "Выберите наиболее подходящий ответ.",
        "options": [
          "Где можно купить обед?",
          "Урок начинается в восемь.",
          "В какой аудитории мы занимаемся?",
          "Я закончил домашнее задание."
        ],
        "answers": [
          "Где можно купить обед?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-ru-3",
    "title": "Русский — Работа и профессиональное общение",
    "language": "ru",
    "level": "Professional",
    "topic": "Русский — Работа и профессиональное общение",
    "context": "Workplace & Professional",
    "skill": "Mixed",
    "description": "Практикуйте русский для встреч, сроков, электронной почты и работы с клиентами.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-ru-2-01",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Вы можете отправить отчёт сегодня?",
        "options": [
          "Вы можете отправить отчёт сегодня?",
          "Встреча начинается в три часа.",
          "Пожалуйста, подтвердите срок.",
          "Мне нужно немного больше времени."
        ],
        "answers": [
          "Вы можете отправить отчёт сегодня?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-2-02",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Встреча начинается в три часа.",
        "options": [
          "Встреча начинается в три часа.",
          "Пожалуйста, подтвердите срок.",
          "Мне нужно немного больше времени.",
          "Я напишу по электронной почте."
        ],
        "answers": [
          "Встреча начинается в три часа."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-2-03",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Пожалуйста, подтвердите срок.",
        "options": [
          "Пожалуйста, подтвердите срок.",
          "Мне нужно немного больше времени.",
          "Я напишу по электронной почте.",
          "Мы можем перенести встречу?"
        ],
        "answers": [
          "Пожалуйста, подтвердите срок."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-2-04",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Мне нужно немного больше времени.",
        "options": [
          "Мне нужно немного больше времени.",
          "Я напишу по электронной почте.",
          "Мы можем перенести встречу?",
          "Спасибо за помощь."
        ],
        "answers": [
          "Мне нужно немного больше времени."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-2-05",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Я напишу по электронной почте.",
        "options": [
          "Я напишу по электронной почте.",
          "Мы можем перенести встречу?",
          "Спасибо за помощь.",
          "Сообщите мне, если что-то изменится."
        ],
        "answers": [
          "Я напишу по электронной почте."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-2-06",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Мы можем перенести встречу?",
        "options": [
          "Мы можем перенести встречу?",
          "Спасибо за помощь.",
          "Сообщите мне, если что-то изменится.",
          "Вы можете отправить отчёт сегодня?"
        ],
        "answers": [
          "Мы можем перенести встречу?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-2-07",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Спасибо за помощь.",
        "options": [
          "Спасибо за помощь.",
          "Сообщите мне, если что-то изменится.",
          "Вы можете отправить отчёт сегодня?",
          "Встреча начинается в три часа."
        ],
        "answers": [
          "Спасибо за помощь."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-2-08",
        "type": "multiple_choice",
        "prompt": "Выберите подходящее выражение. — Сообщите мне, если что-то изменится.",
        "options": [
          "Сообщите мне, если что-то изменится.",
          "Вы можете отправить отчёт сегодня?",
          "Встреча начинается в три часа.",
          "Пожалуйста, подтвердите срок."
        ],
        "answers": [
          "Сообщите мне, если что-то изменится."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ru-2-09",
        "type": "typed",
        "prompt": "Введите следующую фразу точно. — Вы можете отправить отчёт сегодня?",
        "options": [],
        "answers": [
          "Вы можете отправить отчёт сегодня?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ru-2-10",
        "type": "typed",
        "prompt": "Введите следующую фразу точно. — Встреча начинается в три часа.",
        "options": [],
        "answers": [
          "Встреча начинается в три часа."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ru-2-11",
        "type": "typed",
        "prompt": "Введите следующую фразу точно. — Пожалуйста, подтвердите срок.",
        "options": [],
        "answers": [
          "Пожалуйста, подтвердите срок."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ru-2-12",
        "type": "typed",
        "prompt": "Введите следующую фразу точно. — Мне нужно немного больше времени.",
        "options": [],
        "answers": [
          "Мне нужно немного больше времени."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ru-2-13",
        "type": "typed",
        "prompt": "Введите следующую фразу точно. — Я напишу по электронной почте.",
        "options": [],
        "answers": [
          "Я напишу по электронной почте."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ru-2-14",
        "type": "audio_choice",
        "prompt": "Послушайте и выберите услышанную фразу.",
        "options": [
          "Пожалуйста, подтвердите срок.",
          "Мне нужно немного больше времени.",
          "Я напишу по электронной почте.",
          "Мы можем перенести встречу?"
        ],
        "answers": [
          "Пожалуйста, подтвердите срок."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Пожалуйста, подтвердите срок.",
        "ttsLang": "ru-RU",
        "maxPlays": 3,
        "playbackRate": 1,
        "mediaUrl": "/audio/ru-workplace.wav"
      },
      {
        "id": "native-ru-2-15",
        "type": "audio_choice",
        "prompt": "Послушайте и выберите услышанную фразу.",
        "options": [
          "Мне нужно немного больше времени.",
          "Я напишу по электронной почте.",
          "Мы можем перенести встречу?",
          "Спасибо за помощь."
        ],
        "answers": [
          "Мне нужно немного больше времени."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Мне нужно немного больше времени.",
        "ttsLang": "ru-RU",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ru-2-16",
        "type": "audio_choice",
        "prompt": "Послушайте и выберите услышанную фразу.",
        "options": [
          "Я напишу по электронной почте.",
          "Мы можем перенести встречу?",
          "Спасибо за помощь.",
          "Сообщите мне, если что-то изменится."
        ],
        "answers": [
          "Я напишу по электронной почте."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Я напишу по электронной почте.",
        "ttsLang": "ru-RU",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ru-2-17",
        "type": "audio_choice",
        "prompt": "Послушайте и выберите услышанную фразу.",
        "options": [
          "Мы можем перенести встречу?",
          "Спасибо за помощь.",
          "Сообщите мне, если что-то изменится.",
          "Вы можете отправить отчёт сегодня?"
        ],
        "answers": [
          "Мы можем перенести встречу?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Мы можем перенести встречу?",
        "ttsLang": "ru-RU",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ru-2-18",
        "type": "audio_choice",
        "prompt": "Послушайте и выберите услышанную фразу.",
        "options": [
          "Спасибо за помощь.",
          "Сообщите мне, если что-то изменится.",
          "Вы можете отправить отчёт сегодня?",
          "Встреча начинается в три часа."
        ],
        "answers": [
          "Спасибо за помощь."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Спасибо за помощь.",
        "ttsLang": "ru-RU",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ru-2-19",
        "type": "fill_blank",
        "prompt": "Дополните фразу. — Встреча начинается в три ___",
        "options": [
          "часа",
          "сегодня",
          "срок",
          "времени"
        ],
        "answers": [
          "часа"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ru-2-20",
        "type": "fill_blank",
        "prompt": "Дополните фразу. — Пожалуйста, подтвердите ___",
        "options": [
          "срок",
          "сегодня",
          "часа",
          "времени"
        ],
        "answers": [
          "срок"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ru-2-21",
        "type": "fill_blank",
        "prompt": "Дополните фразу. — Мне нужно немного больше ___",
        "options": [
          "времени",
          "сегодня",
          "часа",
          "срок"
        ],
        "answers": [
          "времени"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ru-2-22",
        "type": "fill_blank",
        "prompt": "Дополните фразу. — Я напишу по электронной ___",
        "options": [
          "почте",
          "сегодня",
          "часа",
          "срок"
        ],
        "answers": [
          "почте"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ru-2-23",
        "type": "sentence_builder",
        "prompt": "Расположите слова в правильном порядке.",
        "options": [
          "Мне",
          "нужно",
          "немного",
          "больше",
          "времени"
        ],
        "answers": [
          "Мне нужно немного больше времени"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ru-2-24",
        "type": "sentence_builder",
        "prompt": "Расположите слова в правильном порядке.",
        "options": [
          "Я",
          "напишу",
          "по",
          "электронной",
          "почте"
        ],
        "answers": [
          "Я напишу по электронной почте"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ru-2-25",
        "type": "sentence_builder",
        "prompt": "Расположите слова в правильном порядке.",
        "options": [
          "Мы",
          "можем",
          "перенести",
          "встречу"
        ],
        "answers": [
          "Мы можем перенести встречу"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ru-2-26",
        "type": "sentence_builder",
        "prompt": "Расположите слова в правильном порядке.",
        "options": [
          "Спасибо",
          "за",
          "помощь"
        ],
        "answers": [
          "Спасибо за помощь"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ru-2-27",
        "type": "scenario_decision",
        "prompt": "Выберите наиболее подходящий ответ.",
        "options": [
          "Я напишу по электронной почте.",
          "Мы можем перенести встречу?",
          "Спасибо за помощь.",
          "Сообщите мне, если что-то изменится."
        ],
        "answers": [
          "Я напишу по электронной почте."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ru-2-28",
        "type": "scenario_decision",
        "prompt": "Выберите наиболее подходящий ответ.",
        "options": [
          "Мы можем перенести встречу?",
          "Спасибо за помощь.",
          "Сообщите мне, если что-то изменится.",
          "Вы можете отправить отчёт сегодня?"
        ],
        "answers": [
          "Мы можем перенести встречу?"
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ru-2-29",
        "type": "scenario_decision",
        "prompt": "Выберите наиболее подходящий ответ.",
        "options": [
          "Спасибо за помощь.",
          "Сообщите мне, если что-то изменится.",
          "Вы можете отправить отчёт сегодня?",
          "Встреча начинается в три часа."
        ],
        "answers": [
          "Спасибо за помощь."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ru-2-30",
        "type": "scenario_decision",
        "prompt": "Выберите наиболее подходящий ответ.",
        "options": [
          "Сообщите мне, если что-то изменится.",
          "Вы можете отправить отчёт сегодня?",
          "Встреча начинается в три часа.",
          "Пожалуйста, подтвердите срок."
        ],
        "answers": [
          "Сообщите мне, если что-то изменится."
        ],
        "explanation": "Повторите это выражение в контексте.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-th-1",
    "title": "ภาษาไทย — พื้นฐาน",
    "language": "th",
    "level": "Starter",
    "topic": "ภาษาไทย — พื้นฐาน",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "ฝึกภาษาไทยพื้นฐานด้วยการฟัง การเรียงประโยค และการตอบสนองที่ใช้จริง",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-th-0-01",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — สวัสดีตอนเช้า",
        "options": [
          "สวัสดีตอนเช้า",
          "ขอบคุณมาก",
          "ช่วยฉันหน่อยได้ไหม",
          "สถานีอยู่ที่ไหน"
        ],
        "answers": [
          "สวัสดีตอนเช้า"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-0-02",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — ขอบคุณมาก",
        "options": [
          "ขอบคุณมาก",
          "ช่วยฉันหน่อยได้ไหม",
          "สถานีอยู่ที่ไหน",
          "เริ่มกี่โมง"
        ],
        "answers": [
          "ขอบคุณมาก"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-0-03",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — ช่วยฉันหน่อยได้ไหม",
        "options": [
          "ช่วยฉันหน่อยได้ไหม",
          "สถานีอยู่ที่ไหน",
          "เริ่มกี่โมง",
          "ฉันเข้าใจแล้ว"
        ],
        "answers": [
          "ช่วยฉันหน่อยได้ไหม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-0-04",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — สถานีอยู่ที่ไหน",
        "options": [
          "สถานีอยู่ที่ไหน",
          "เริ่มกี่โมง",
          "ฉันเข้าใจแล้ว",
          "กรุณาพูดอีกครั้ง"
        ],
        "answers": [
          "สถานีอยู่ที่ไหน"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-0-05",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — เริ่มกี่โมง",
        "options": [
          "เริ่มกี่โมง",
          "ฉันเข้าใจแล้ว",
          "กรุณาพูดอีกครั้ง",
          "เจอกันพรุ่งนี้"
        ],
        "answers": [
          "เริ่มกี่โมง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-0-06",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — ฉันเข้าใจแล้ว",
        "options": [
          "ฉันเข้าใจแล้ว",
          "กรุณาพูดอีกครั้ง",
          "เจอกันพรุ่งนี้",
          "สวัสดีตอนเช้า"
        ],
        "answers": [
          "ฉันเข้าใจแล้ว"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-0-07",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — กรุณาพูดอีกครั้ง",
        "options": [
          "กรุณาพูดอีกครั้ง",
          "เจอกันพรุ่งนี้",
          "สวัสดีตอนเช้า",
          "ขอบคุณมาก"
        ],
        "answers": [
          "กรุณาพูดอีกครั้ง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-0-08",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — เจอกันพรุ่งนี้",
        "options": [
          "เจอกันพรุ่งนี้",
          "สวัสดีตอนเช้า",
          "ขอบคุณมาก",
          "ช่วยฉันหน่อยได้ไหม"
        ],
        "answers": [
          "เจอกันพรุ่งนี้"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-0-09",
        "type": "typed",
        "prompt": "พิมพ์ประโยคต่อไปนี้ให้ถูกต้อง — สวัสดีตอนเช้า",
        "options": [],
        "answers": [
          "สวัสดีตอนเช้า"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-th-0-10",
        "type": "typed",
        "prompt": "พิมพ์ประโยคต่อไปนี้ให้ถูกต้อง — ขอบคุณมาก",
        "options": [],
        "answers": [
          "ขอบคุณมาก"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-th-0-11",
        "type": "typed",
        "prompt": "พิมพ์ประโยคต่อไปนี้ให้ถูกต้อง — ช่วยฉันหน่อยได้ไหม",
        "options": [],
        "answers": [
          "ช่วยฉันหน่อยได้ไหม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-th-0-12",
        "type": "typed",
        "prompt": "พิมพ์ประโยคต่อไปนี้ให้ถูกต้อง — สถานีอยู่ที่ไหน",
        "options": [],
        "answers": [
          "สถานีอยู่ที่ไหน"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-th-0-13",
        "type": "typed",
        "prompt": "พิมพ์ประโยคต่อไปนี้ให้ถูกต้อง — เริ่มกี่โมง",
        "options": [],
        "answers": [
          "เริ่มกี่โมง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-th-0-14",
        "type": "audio_choice",
        "prompt": "ฟังแล้วเลือกประโยคที่ได้ยิน",
        "options": [
          "ช่วยฉันหน่อยได้ไหม",
          "สถานีอยู่ที่ไหน",
          "เริ่มกี่โมง",
          "ฉันเข้าใจแล้ว"
        ],
        "answers": [
          "ช่วยฉันหน่อยได้ไหม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "ช่วยฉันหน่อยได้ไหม",
        "ttsLang": "th-TH",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-th-0-15",
        "type": "audio_choice",
        "prompt": "ฟังแล้วเลือกประโยคที่ได้ยิน",
        "options": [
          "สถานีอยู่ที่ไหน",
          "เริ่มกี่โมง",
          "ฉันเข้าใจแล้ว",
          "กรุณาพูดอีกครั้ง"
        ],
        "answers": [
          "สถานีอยู่ที่ไหน"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "สถานีอยู่ที่ไหน",
        "ttsLang": "th-TH",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-th-0-16",
        "type": "audio_choice",
        "prompt": "ฟังแล้วเลือกประโยคที่ได้ยิน",
        "options": [
          "เริ่มกี่โมง",
          "ฉันเข้าใจแล้ว",
          "กรุณาพูดอีกครั้ง",
          "เจอกันพรุ่งนี้"
        ],
        "answers": [
          "เริ่มกี่โมง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "เริ่มกี่โมง",
        "ttsLang": "th-TH",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-th-0-17",
        "type": "audio_choice",
        "prompt": "ฟังแล้วเลือกประโยคที่ได้ยิน",
        "options": [
          "ฉันเข้าใจแล้ว",
          "กรุณาพูดอีกครั้ง",
          "เจอกันพรุ่งนี้",
          "สวัสดีตอนเช้า"
        ],
        "answers": [
          "ฉันเข้าใจแล้ว"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "ฉันเข้าใจแล้ว",
        "ttsLang": "th-TH",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-th-0-18",
        "type": "audio_choice",
        "prompt": "ฟังแล้วเลือกประโยคที่ได้ยิน",
        "options": [
          "กรุณาพูดอีกครั้ง",
          "เจอกันพรุ่งนี้",
          "สวัสดีตอนเช้า",
          "ขอบคุณมาก"
        ],
        "answers": [
          "กรุณาพูดอีกครั้ง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "กรุณาพูดอีกครั้ง",
        "ttsLang": "th-TH",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-th-0-19",
        "type": "fill_blank",
        "prompt": "เติมประโยคให้สมบูรณ์ — ___",
        "options": [
          "ขอบคุณมาก",
          "สวัสดีตอนเช้า",
          "ช่วยฉันหน่อยได้ไหม",
          "สถานีอยู่ที่ไหน"
        ],
        "answers": [
          "ขอบคุณมาก"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-th-0-20",
        "type": "fill_blank",
        "prompt": "เติมประโยคให้สมบูรณ์ — ___",
        "options": [
          "ช่วยฉันหน่อยได้ไหม",
          "สวัสดีตอนเช้า",
          "ขอบคุณมาก",
          "สถานีอยู่ที่ไหน"
        ],
        "answers": [
          "ช่วยฉันหน่อยได้ไหม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-th-0-21",
        "type": "fill_blank",
        "prompt": "เติมประโยคให้สมบูรณ์ — ___",
        "options": [
          "สถานีอยู่ที่ไหน",
          "สวัสดีตอนเช้า",
          "ขอบคุณมาก",
          "ช่วยฉันหน่อยได้ไหม"
        ],
        "answers": [
          "สถานีอยู่ที่ไหน"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-th-0-22",
        "type": "fill_blank",
        "prompt": "เติมประโยคให้สมบูรณ์ — ___",
        "options": [
          "เริ่มกี่โมง",
          "สวัสดีตอนเช้า",
          "ขอบคุณมาก",
          "ช่วยฉันหน่อยได้ไหม"
        ],
        "answers": [
          "เริ่มกี่โมง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-th-0-23",
        "type": "sentence_builder",
        "prompt": "เรียงคำให้เป็นประโยคที่ถูกต้อง",
        "options": [
          "ส",
          "ถ",
          "า",
          "น",
          "ี",
          "อ",
          "ย",
          "ู",
          "่",
          "ท",
          "ี",
          "่",
          "ไ",
          "ห",
          "น"
        ],
        "answers": [
          "สถานีอยู่ที่ไหน"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-th-0-24",
        "type": "sentence_builder",
        "prompt": "เรียงคำให้เป็นประโยคที่ถูกต้อง",
        "options": [
          "เ",
          "ร",
          "ิ",
          "่",
          "ม",
          "ก",
          "ี",
          "่",
          "โ",
          "ม",
          "ง"
        ],
        "answers": [
          "เริ่มกี่โมง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-th-0-25",
        "type": "sentence_builder",
        "prompt": "เรียงคำให้เป็นประโยคที่ถูกต้อง",
        "options": [
          "ฉ",
          "ั",
          "น",
          "เ",
          "ข",
          "้",
          "า",
          "ใ",
          "จ",
          "แ",
          "ล",
          "้",
          "ว"
        ],
        "answers": [
          "ฉันเข้าใจแล้ว"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-th-0-26",
        "type": "sentence_builder",
        "prompt": "เรียงคำให้เป็นประโยคที่ถูกต้อง",
        "options": [
          "ก",
          "ร",
          "ุ",
          "ณ",
          "า",
          "พ",
          "ู",
          "ด",
          "อ",
          "ี",
          "ก",
          "ค",
          "ร",
          "ั",
          "้",
          "ง"
        ],
        "answers": [
          "กรุณาพูดอีกครั้ง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-th-0-27",
        "type": "scenario_decision",
        "prompt": "เลือกคำตอบที่เหมาะสมที่สุด",
        "options": [
          "เริ่มกี่โมง",
          "ฉันเข้าใจแล้ว",
          "กรุณาพูดอีกครั้ง",
          "เจอกันพรุ่งนี้"
        ],
        "answers": [
          "เริ่มกี่โมง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-th-0-28",
        "type": "scenario_decision",
        "prompt": "เลือกคำตอบที่เหมาะสมที่สุด",
        "options": [
          "ฉันเข้าใจแล้ว",
          "กรุณาพูดอีกครั้ง",
          "เจอกันพรุ่งนี้",
          "สวัสดีตอนเช้า"
        ],
        "answers": [
          "ฉันเข้าใจแล้ว"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-th-0-29",
        "type": "scenario_decision",
        "prompt": "เลือกคำตอบที่เหมาะสมที่สุด",
        "options": [
          "กรุณาพูดอีกครั้ง",
          "เจอกันพรุ่งนี้",
          "สวัสดีตอนเช้า",
          "ขอบคุณมาก"
        ],
        "answers": [
          "กรุณาพูดอีกครั้ง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-th-0-30",
        "type": "scenario_decision",
        "prompt": "เลือกคำตอบที่เหมาะสมที่สุด",
        "options": [
          "เจอกันพรุ่งนี้",
          "สวัสดีตอนเช้า",
          "ขอบคุณมาก",
          "ช่วยฉันหน่อยได้ไหม"
        ],
        "answers": [
          "เจอกันพรุ่งนี้"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-th-2",
    "title": "ภาษาไทย — โรงเรียนและชีวิตประจำวัน",
    "language": "th",
    "level": "Intermediate",
    "topic": "ภาษาไทย — โรงเรียนและชีวิตประจำวัน",
    "context": "School & Travel",
    "skill": "Mixed",
    "description": "ฝึกภาษาไทยในโรงเรียน การเดินทาง และชีวิตประจำวัน",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-th-1-01",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — ชั้นเรียนเริ่มตอนแปดโมง",
        "options": [
          "ชั้นเรียนเริ่มตอนแปดโมง",
          "เราใช้ห้องไหน",
          "ฉันทำการบ้านเสร็จแล้ว",
          "อธิบายอีกครั้งได้ไหม"
        ],
        "answers": [
          "ชั้นเรียนเริ่มตอนแปดโมง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-1-02",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — เราใช้ห้องไหน",
        "options": [
          "เราใช้ห้องไหน",
          "ฉันทำการบ้านเสร็จแล้ว",
          "อธิบายอีกครั้งได้ไหม",
          "กรุณาเปิดหนังสือ"
        ],
        "answers": [
          "เราใช้ห้องไหน"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-1-03",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — ฉันทำการบ้านเสร็จแล้ว",
        "options": [
          "ฉันทำการบ้านเสร็จแล้ว",
          "อธิบายอีกครั้งได้ไหม",
          "กรุณาเปิดหนังสือ",
          "รถบัสมาสาย"
        ],
        "answers": [
          "ฉันทำการบ้านเสร็จแล้ว"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-1-04",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — อธิบายอีกครั้งได้ไหม",
        "options": [
          "อธิบายอีกครั้งได้ไหม",
          "กรุณาเปิดหนังสือ",
          "รถบัสมาสาย",
          "ฉันขอตั๋วหนึ่งใบ"
        ],
        "answers": [
          "อธิบายอีกครั้งได้ไหม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-1-05",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — กรุณาเปิดหนังสือ",
        "options": [
          "กรุณาเปิดหนังสือ",
          "รถบัสมาสาย",
          "ฉันขอตั๋วหนึ่งใบ",
          "ฉันซื้ออาหารกลางวันได้ที่ไหน"
        ],
        "answers": [
          "กรุณาเปิดหนังสือ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-1-06",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — รถบัสมาสาย",
        "options": [
          "รถบัสมาสาย",
          "ฉันขอตั๋วหนึ่งใบ",
          "ฉันซื้ออาหารกลางวันได้ที่ไหน",
          "ชั้นเรียนเริ่มตอนแปดโมง"
        ],
        "answers": [
          "รถบัสมาสาย"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-1-07",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — ฉันขอตั๋วหนึ่งใบ",
        "options": [
          "ฉันขอตั๋วหนึ่งใบ",
          "ฉันซื้ออาหารกลางวันได้ที่ไหน",
          "ชั้นเรียนเริ่มตอนแปดโมง",
          "เราใช้ห้องไหน"
        ],
        "answers": [
          "ฉันขอตั๋วหนึ่งใบ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-1-08",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — ฉันซื้ออาหารกลางวันได้ที่ไหน",
        "options": [
          "ฉันซื้ออาหารกลางวันได้ที่ไหน",
          "ชั้นเรียนเริ่มตอนแปดโมง",
          "เราใช้ห้องไหน",
          "ฉันทำการบ้านเสร็จแล้ว"
        ],
        "answers": [
          "ฉันซื้ออาหารกลางวันได้ที่ไหน"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-1-09",
        "type": "typed",
        "prompt": "พิมพ์ประโยคต่อไปนี้ให้ถูกต้อง — ชั้นเรียนเริ่มตอนแปดโมง",
        "options": [],
        "answers": [
          "ชั้นเรียนเริ่มตอนแปดโมง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-th-1-10",
        "type": "typed",
        "prompt": "พิมพ์ประโยคต่อไปนี้ให้ถูกต้อง — เราใช้ห้องไหน",
        "options": [],
        "answers": [
          "เราใช้ห้องไหน"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-th-1-11",
        "type": "typed",
        "prompt": "พิมพ์ประโยคต่อไปนี้ให้ถูกต้อง — ฉันทำการบ้านเสร็จแล้ว",
        "options": [],
        "answers": [
          "ฉันทำการบ้านเสร็จแล้ว"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-th-1-12",
        "type": "typed",
        "prompt": "พิมพ์ประโยคต่อไปนี้ให้ถูกต้อง — อธิบายอีกครั้งได้ไหม",
        "options": [],
        "answers": [
          "อธิบายอีกครั้งได้ไหม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-th-1-13",
        "type": "typed",
        "prompt": "พิมพ์ประโยคต่อไปนี้ให้ถูกต้อง — กรุณาเปิดหนังสือ",
        "options": [],
        "answers": [
          "กรุณาเปิดหนังสือ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-th-1-14",
        "type": "audio_choice",
        "prompt": "ฟังแล้วเลือกประโยคที่ได้ยิน",
        "options": [
          "ฉันทำการบ้านเสร็จแล้ว",
          "อธิบายอีกครั้งได้ไหม",
          "กรุณาเปิดหนังสือ",
          "รถบัสมาสาย"
        ],
        "answers": [
          "ฉันทำการบ้านเสร็จแล้ว"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "ฉันทำการบ้านเสร็จแล้ว",
        "ttsLang": "th-TH",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-th-1-15",
        "type": "audio_choice",
        "prompt": "ฟังแล้วเลือกประโยคที่ได้ยิน",
        "options": [
          "อธิบายอีกครั้งได้ไหม",
          "กรุณาเปิดหนังสือ",
          "รถบัสมาสาย",
          "ฉันขอตั๋วหนึ่งใบ"
        ],
        "answers": [
          "อธิบายอีกครั้งได้ไหม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "อธิบายอีกครั้งได้ไหม",
        "ttsLang": "th-TH",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-th-1-16",
        "type": "audio_choice",
        "prompt": "ฟังแล้วเลือกประโยคที่ได้ยิน",
        "options": [
          "กรุณาเปิดหนังสือ",
          "รถบัสมาสาย",
          "ฉันขอตั๋วหนึ่งใบ",
          "ฉันซื้ออาหารกลางวันได้ที่ไหน"
        ],
        "answers": [
          "กรุณาเปิดหนังสือ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "กรุณาเปิดหนังสือ",
        "ttsLang": "th-TH",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-th-1-17",
        "type": "audio_choice",
        "prompt": "ฟังแล้วเลือกประโยคที่ได้ยิน",
        "options": [
          "รถบัสมาสาย",
          "ฉันขอตั๋วหนึ่งใบ",
          "ฉันซื้ออาหารกลางวันได้ที่ไหน",
          "ชั้นเรียนเริ่มตอนแปดโมง"
        ],
        "answers": [
          "รถบัสมาสาย"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "รถบัสมาสาย",
        "ttsLang": "th-TH",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-th-1-18",
        "type": "audio_choice",
        "prompt": "ฟังแล้วเลือกประโยคที่ได้ยิน",
        "options": [
          "ฉันขอตั๋วหนึ่งใบ",
          "ฉันซื้ออาหารกลางวันได้ที่ไหน",
          "ชั้นเรียนเริ่มตอนแปดโมง",
          "เราใช้ห้องไหน"
        ],
        "answers": [
          "ฉันขอตั๋วหนึ่งใบ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "ฉันขอตั๋วหนึ่งใบ",
        "ttsLang": "th-TH",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-th-1-19",
        "type": "fill_blank",
        "prompt": "เติมประโยคให้สมบูรณ์ — ___",
        "options": [
          "เราใช้ห้องไหน",
          "ชั้นเรียนเริ่มตอนแปดโมง",
          "ฉันทำการบ้านเสร็จแล้ว",
          "อธิบายอีกครั้งได้ไหม"
        ],
        "answers": [
          "เราใช้ห้องไหน"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-th-1-20",
        "type": "fill_blank",
        "prompt": "เติมประโยคให้สมบูรณ์ — ___",
        "options": [
          "ฉันทำการบ้านเสร็จแล้ว",
          "ชั้นเรียนเริ่มตอนแปดโมง",
          "เราใช้ห้องไหน",
          "อธิบายอีกครั้งได้ไหม"
        ],
        "answers": [
          "ฉันทำการบ้านเสร็จแล้ว"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-th-1-21",
        "type": "fill_blank",
        "prompt": "เติมประโยคให้สมบูรณ์ — ___",
        "options": [
          "อธิบายอีกครั้งได้ไหม",
          "ชั้นเรียนเริ่มตอนแปดโมง",
          "เราใช้ห้องไหน",
          "ฉันทำการบ้านเสร็จแล้ว"
        ],
        "answers": [
          "อธิบายอีกครั้งได้ไหม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-th-1-22",
        "type": "fill_blank",
        "prompt": "เติมประโยคให้สมบูรณ์ — ___",
        "options": [
          "กรุณาเปิดหนังสือ",
          "ชั้นเรียนเริ่มตอนแปดโมง",
          "เราใช้ห้องไหน",
          "ฉันทำการบ้านเสร็จแล้ว"
        ],
        "answers": [
          "กรุณาเปิดหนังสือ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-th-1-23",
        "type": "sentence_builder",
        "prompt": "เรียงคำให้เป็นประโยคที่ถูกต้อง",
        "options": [
          "อ",
          "ธ",
          "ิ",
          "บ",
          "า",
          "ย",
          "อ",
          "ี",
          "ก",
          "ค",
          "ร",
          "ั",
          "้",
          "ง",
          "ไ",
          "ด",
          "้",
          "ไ",
          "ห",
          "ม"
        ],
        "answers": [
          "อธิบายอีกครั้งได้ไหม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-th-1-24",
        "type": "sentence_builder",
        "prompt": "เรียงคำให้เป็นประโยคที่ถูกต้อง",
        "options": [
          "ก",
          "ร",
          "ุ",
          "ณ",
          "า",
          "เ",
          "ป",
          "ิ",
          "ด",
          "ห",
          "น",
          "ั",
          "ง",
          "ส",
          "ื",
          "อ"
        ],
        "answers": [
          "กรุณาเปิดหนังสือ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-th-1-25",
        "type": "sentence_builder",
        "prompt": "เรียงคำให้เป็นประโยคที่ถูกต้อง",
        "options": [
          "ร",
          "ถ",
          "บ",
          "ั",
          "ส",
          "ม",
          "า",
          "ส",
          "า",
          "ย"
        ],
        "answers": [
          "รถบัสมาสาย"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-th-1-26",
        "type": "sentence_builder",
        "prompt": "เรียงคำให้เป็นประโยคที่ถูกต้อง",
        "options": [
          "ฉ",
          "ั",
          "น",
          "ข",
          "อ",
          "ต",
          "ั",
          "๋",
          "ว",
          "ห",
          "น",
          "ึ",
          "่",
          "ง",
          "ใ",
          "บ"
        ],
        "answers": [
          "ฉันขอตั๋วหนึ่งใบ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-th-1-27",
        "type": "scenario_decision",
        "prompt": "เลือกคำตอบที่เหมาะสมที่สุด",
        "options": [
          "กรุณาเปิดหนังสือ",
          "รถบัสมาสาย",
          "ฉันขอตั๋วหนึ่งใบ",
          "ฉันซื้ออาหารกลางวันได้ที่ไหน"
        ],
        "answers": [
          "กรุณาเปิดหนังสือ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-th-1-28",
        "type": "scenario_decision",
        "prompt": "เลือกคำตอบที่เหมาะสมที่สุด",
        "options": [
          "รถบัสมาสาย",
          "ฉันขอตั๋วหนึ่งใบ",
          "ฉันซื้ออาหารกลางวันได้ที่ไหน",
          "ชั้นเรียนเริ่มตอนแปดโมง"
        ],
        "answers": [
          "รถบัสมาสาย"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-th-1-29",
        "type": "scenario_decision",
        "prompt": "เลือกคำตอบที่เหมาะสมที่สุด",
        "options": [
          "ฉันขอตั๋วหนึ่งใบ",
          "ฉันซื้ออาหารกลางวันได้ที่ไหน",
          "ชั้นเรียนเริ่มตอนแปดโมง",
          "เราใช้ห้องไหน"
        ],
        "answers": [
          "ฉันขอตั๋วหนึ่งใบ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-th-1-30",
        "type": "scenario_decision",
        "prompt": "เลือกคำตอบที่เหมาะสมที่สุด",
        "options": [
          "ฉันซื้ออาหารกลางวันได้ที่ไหน",
          "ชั้นเรียนเริ่มตอนแปดโมง",
          "เราใช้ห้องไหน",
          "ฉันทำการบ้านเสร็จแล้ว"
        ],
        "answers": [
          "ฉันซื้ออาหารกลางวันได้ที่ไหน"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-th-3",
    "title": "ภาษาไทย — การทำงานและการสื่อสารมืออาชีพ",
    "language": "th",
    "level": "Professional",
    "topic": "ภาษาไทย — การทำงานและการสื่อสารมืออาชีพ",
    "context": "Workplace & Professional",
    "skill": "Mixed",
    "description": "ฝึกภาษาไทยสำหรับการประชุม กำหนดส่ง อีเมล และการบริการลูกค้า",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-th-2-01",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — วันนี้ส่งรายงานได้ไหม",
        "options": [
          "วันนี้ส่งรายงานได้ไหม",
          "การประชุมเริ่มตอนบ่ายสาม",
          "กรุณายืนยันกำหนดส่ง",
          "ฉันต้องการเวลาเพิ่มอีกนิด"
        ],
        "answers": [
          "วันนี้ส่งรายงานได้ไหม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-2-02",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — การประชุมเริ่มตอนบ่ายสาม",
        "options": [
          "การประชุมเริ่มตอนบ่ายสาม",
          "กรุณายืนยันกำหนดส่ง",
          "ฉันต้องการเวลาเพิ่มอีกนิด",
          "ฉันจะติดตามทางอีเมล"
        ],
        "answers": [
          "การประชุมเริ่มตอนบ่ายสาม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-2-03",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — กรุณายืนยันกำหนดส่ง",
        "options": [
          "กรุณายืนยันกำหนดส่ง",
          "ฉันต้องการเวลาเพิ่มอีกนิด",
          "ฉันจะติดตามทางอีเมล",
          "เราเลื่อนการประชุมได้ไหม"
        ],
        "answers": [
          "กรุณายืนยันกำหนดส่ง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-2-04",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — ฉันต้องการเวลาเพิ่มอีกนิด",
        "options": [
          "ฉันต้องการเวลาเพิ่มอีกนิด",
          "ฉันจะติดตามทางอีเมล",
          "เราเลื่อนการประชุมได้ไหม",
          "ขอบคุณสำหรับความช่วยเหลือ"
        ],
        "answers": [
          "ฉันต้องการเวลาเพิ่มอีกนิด"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-2-05",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — ฉันจะติดตามทางอีเมล",
        "options": [
          "ฉันจะติดตามทางอีเมล",
          "เราเลื่อนการประชุมได้ไหม",
          "ขอบคุณสำหรับความช่วยเหลือ",
          "ถ้ามีการเปลี่ยนแปลงโปรดแจ้งให้ทราบ"
        ],
        "answers": [
          "ฉันจะติดตามทางอีเมล"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-2-06",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — เราเลื่อนการประชุมได้ไหม",
        "options": [
          "เราเลื่อนการประชุมได้ไหม",
          "ขอบคุณสำหรับความช่วยเหลือ",
          "ถ้ามีการเปลี่ยนแปลงโปรดแจ้งให้ทราบ",
          "วันนี้ส่งรายงานได้ไหม"
        ],
        "answers": [
          "เราเลื่อนการประชุมได้ไหม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-2-07",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — ขอบคุณสำหรับความช่วยเหลือ",
        "options": [
          "ขอบคุณสำหรับความช่วยเหลือ",
          "ถ้ามีการเปลี่ยนแปลงโปรดแจ้งให้ทราบ",
          "วันนี้ส่งรายงานได้ไหม",
          "การประชุมเริ่มตอนบ่ายสาม"
        ],
        "answers": [
          "ขอบคุณสำหรับความช่วยเหลือ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-2-08",
        "type": "multiple_choice",
        "prompt": "เลือกประโยคที่เหมาะสม — ถ้ามีการเปลี่ยนแปลงโปรดแจ้งให้ทราบ",
        "options": [
          "ถ้ามีการเปลี่ยนแปลงโปรดแจ้งให้ทราบ",
          "วันนี้ส่งรายงานได้ไหม",
          "การประชุมเริ่มตอนบ่ายสาม",
          "กรุณายืนยันกำหนดส่ง"
        ],
        "answers": [
          "ถ้ามีการเปลี่ยนแปลงโปรดแจ้งให้ทราบ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-th-2-09",
        "type": "typed",
        "prompt": "พิมพ์ประโยคต่อไปนี้ให้ถูกต้อง — วันนี้ส่งรายงานได้ไหม",
        "options": [],
        "answers": [
          "วันนี้ส่งรายงานได้ไหม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-th-2-10",
        "type": "typed",
        "prompt": "พิมพ์ประโยคต่อไปนี้ให้ถูกต้อง — การประชุมเริ่มตอนบ่ายสาม",
        "options": [],
        "answers": [
          "การประชุมเริ่มตอนบ่ายสาม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-th-2-11",
        "type": "typed",
        "prompt": "พิมพ์ประโยคต่อไปนี้ให้ถูกต้อง — กรุณายืนยันกำหนดส่ง",
        "options": [],
        "answers": [
          "กรุณายืนยันกำหนดส่ง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-th-2-12",
        "type": "typed",
        "prompt": "พิมพ์ประโยคต่อไปนี้ให้ถูกต้อง — ฉันต้องการเวลาเพิ่มอีกนิด",
        "options": [],
        "answers": [
          "ฉันต้องการเวลาเพิ่มอีกนิด"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-th-2-13",
        "type": "typed",
        "prompt": "พิมพ์ประโยคต่อไปนี้ให้ถูกต้อง — ฉันจะติดตามทางอีเมล",
        "options": [],
        "answers": [
          "ฉันจะติดตามทางอีเมล"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-th-2-14",
        "type": "audio_choice",
        "prompt": "ฟังแล้วเลือกประโยคที่ได้ยิน",
        "options": [
          "กรุณายืนยันกำหนดส่ง",
          "ฉันต้องการเวลาเพิ่มอีกนิด",
          "ฉันจะติดตามทางอีเมล",
          "เราเลื่อนการประชุมได้ไหม"
        ],
        "answers": [
          "กรุณายืนยันกำหนดส่ง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "กรุณายืนยันกำหนดส่ง",
        "ttsLang": "th-TH",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-th-2-15",
        "type": "audio_choice",
        "prompt": "ฟังแล้วเลือกประโยคที่ได้ยิน",
        "options": [
          "ฉันต้องการเวลาเพิ่มอีกนิด",
          "ฉันจะติดตามทางอีเมล",
          "เราเลื่อนการประชุมได้ไหม",
          "ขอบคุณสำหรับความช่วยเหลือ"
        ],
        "answers": [
          "ฉันต้องการเวลาเพิ่มอีกนิด"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "ฉันต้องการเวลาเพิ่มอีกนิด",
        "ttsLang": "th-TH",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-th-2-16",
        "type": "audio_choice",
        "prompt": "ฟังแล้วเลือกประโยคที่ได้ยิน",
        "options": [
          "ฉันจะติดตามทางอีเมล",
          "เราเลื่อนการประชุมได้ไหม",
          "ขอบคุณสำหรับความช่วยเหลือ",
          "ถ้ามีการเปลี่ยนแปลงโปรดแจ้งให้ทราบ"
        ],
        "answers": [
          "ฉันจะติดตามทางอีเมล"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "ฉันจะติดตามทางอีเมล",
        "ttsLang": "th-TH",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-th-2-17",
        "type": "audio_choice",
        "prompt": "ฟังแล้วเลือกประโยคที่ได้ยิน",
        "options": [
          "เราเลื่อนการประชุมได้ไหม",
          "ขอบคุณสำหรับความช่วยเหลือ",
          "ถ้ามีการเปลี่ยนแปลงโปรดแจ้งให้ทราบ",
          "วันนี้ส่งรายงานได้ไหม"
        ],
        "answers": [
          "เราเลื่อนการประชุมได้ไหม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "เราเลื่อนการประชุมได้ไหม",
        "ttsLang": "th-TH",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-th-2-18",
        "type": "audio_choice",
        "prompt": "ฟังแล้วเลือกประโยคที่ได้ยิน",
        "options": [
          "ขอบคุณสำหรับความช่วยเหลือ",
          "ถ้ามีการเปลี่ยนแปลงโปรดแจ้งให้ทราบ",
          "วันนี้ส่งรายงานได้ไหม",
          "การประชุมเริ่มตอนบ่ายสาม"
        ],
        "answers": [
          "ขอบคุณสำหรับความช่วยเหลือ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "ขอบคุณสำหรับความช่วยเหลือ",
        "ttsLang": "th-TH",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-th-2-19",
        "type": "fill_blank",
        "prompt": "เติมประโยคให้สมบูรณ์ — ___",
        "options": [
          "การประชุมเริ่มตอนบ่ายสาม",
          "วันนี้ส่งรายงานได้ไหม",
          "กรุณายืนยันกำหนดส่ง",
          "ฉันต้องการเวลาเพิ่มอีกนิด"
        ],
        "answers": [
          "การประชุมเริ่มตอนบ่ายสาม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-th-2-20",
        "type": "fill_blank",
        "prompt": "เติมประโยคให้สมบูรณ์ — ___",
        "options": [
          "กรุณายืนยันกำหนดส่ง",
          "วันนี้ส่งรายงานได้ไหม",
          "การประชุมเริ่มตอนบ่ายสาม",
          "ฉันต้องการเวลาเพิ่มอีกนิด"
        ],
        "answers": [
          "กรุณายืนยันกำหนดส่ง"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-th-2-21",
        "type": "fill_blank",
        "prompt": "เติมประโยคให้สมบูรณ์ — ___",
        "options": [
          "ฉันต้องการเวลาเพิ่มอีกนิด",
          "วันนี้ส่งรายงานได้ไหม",
          "การประชุมเริ่มตอนบ่ายสาม",
          "กรุณายืนยันกำหนดส่ง"
        ],
        "answers": [
          "ฉันต้องการเวลาเพิ่มอีกนิด"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-th-2-22",
        "type": "fill_blank",
        "prompt": "เติมประโยคให้สมบูรณ์ — ___",
        "options": [
          "ฉันจะติดตามทางอีเมล",
          "วันนี้ส่งรายงานได้ไหม",
          "การประชุมเริ่มตอนบ่ายสาม",
          "กรุณายืนยันกำหนดส่ง"
        ],
        "answers": [
          "ฉันจะติดตามทางอีเมล"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-th-2-23",
        "type": "sentence_builder",
        "prompt": "เรียงคำให้เป็นประโยคที่ถูกต้อง",
        "options": [
          "ฉ",
          "ั",
          "น",
          "ต",
          "้",
          "อ",
          "ง",
          "ก",
          "า",
          "ร",
          "เ",
          "ว",
          "ล",
          "า",
          "เ",
          "พ",
          "ิ",
          "่",
          "ม",
          "อ",
          "ี",
          "ก",
          "น",
          "ิ",
          "ด"
        ],
        "answers": [
          "ฉันต้องการเวลาเพิ่มอีกนิด"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-th-2-24",
        "type": "sentence_builder",
        "prompt": "เรียงคำให้เป็นประโยคที่ถูกต้อง",
        "options": [
          "ฉ",
          "ั",
          "น",
          "จ",
          "ะ",
          "ต",
          "ิ",
          "ด",
          "ต",
          "า",
          "ม",
          "ท",
          "า",
          "ง",
          "อ",
          "ี",
          "เ",
          "ม",
          "ล"
        ],
        "answers": [
          "ฉันจะติดตามทางอีเมล"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-th-2-25",
        "type": "sentence_builder",
        "prompt": "เรียงคำให้เป็นประโยคที่ถูกต้อง",
        "options": [
          "เ",
          "ร",
          "า",
          "เ",
          "ล",
          "ื",
          "่",
          "อ",
          "น",
          "ก",
          "า",
          "ร",
          "ป",
          "ร",
          "ะ",
          "ช",
          "ุ",
          "ม",
          "ไ",
          "ด",
          "้",
          "ไ",
          "ห",
          "ม"
        ],
        "answers": [
          "เราเลื่อนการประชุมได้ไหม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-th-2-26",
        "type": "sentence_builder",
        "prompt": "เรียงคำให้เป็นประโยคที่ถูกต้อง",
        "options": [
          "ข",
          "อ",
          "บ",
          "ค",
          "ุ",
          "ณ",
          "ส",
          "ำ",
          "ห",
          "ร",
          "ั",
          "บ",
          "ค",
          "ว",
          "า",
          "ม",
          "ช",
          "่",
          "ว",
          "ย",
          "เ",
          "ห",
          "ล",
          "ื",
          "อ"
        ],
        "answers": [
          "ขอบคุณสำหรับความช่วยเหลือ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-th-2-27",
        "type": "scenario_decision",
        "prompt": "เลือกคำตอบที่เหมาะสมที่สุด",
        "options": [
          "ฉันจะติดตามทางอีเมล",
          "เราเลื่อนการประชุมได้ไหม",
          "ขอบคุณสำหรับความช่วยเหลือ",
          "ถ้ามีการเปลี่ยนแปลงโปรดแจ้งให้ทราบ"
        ],
        "answers": [
          "ฉันจะติดตามทางอีเมล"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-th-2-28",
        "type": "scenario_decision",
        "prompt": "เลือกคำตอบที่เหมาะสมที่สุด",
        "options": [
          "เราเลื่อนการประชุมได้ไหม",
          "ขอบคุณสำหรับความช่วยเหลือ",
          "ถ้ามีการเปลี่ยนแปลงโปรดแจ้งให้ทราบ",
          "วันนี้ส่งรายงานได้ไหม"
        ],
        "answers": [
          "เราเลื่อนการประชุมได้ไหม"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-th-2-29",
        "type": "scenario_decision",
        "prompt": "เลือกคำตอบที่เหมาะสมที่สุด",
        "options": [
          "ขอบคุณสำหรับความช่วยเหลือ",
          "ถ้ามีการเปลี่ยนแปลงโปรดแจ้งให้ทราบ",
          "วันนี้ส่งรายงานได้ไหม",
          "การประชุมเริ่มตอนบ่ายสาม"
        ],
        "answers": [
          "ขอบคุณสำหรับความช่วยเหลือ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-th-2-30",
        "type": "scenario_decision",
        "prompt": "เลือกคำตอบที่เหมาะสมที่สุด",
        "options": [
          "ถ้ามีการเปลี่ยนแปลงโปรดแจ้งให้ทราบ",
          "วันนี้ส่งรายงานได้ไหม",
          "การประชุมเริ่มตอนบ่ายสาม",
          "กรุณายืนยันกำหนดส่ง"
        ],
        "answers": [
          "ถ้ามีการเปลี่ยนแปลงโปรดแจ้งให้ทราบ"
        ],
        "explanation": "ทบทวนประโยคนี้ในบริบท",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-ar-1",
    "title": "العربية — الأساسيات",
    "language": "ar",
    "level": "Starter",
    "topic": "العربية — الأساسيات",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "تدرّب على العربية الأساسية من خلال الاستماع وترتيب الجمل والردود العملية.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-ar-0-01",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — صباح الخير.",
        "options": [
          "صباح الخير.",
          "شكراً جزيلاً.",
          "هل يمكنك مساعدتي من فضلك؟",
          "أين المحطة؟"
        ],
        "answers": [
          "صباح الخير."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-0-02",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — شكراً جزيلاً.",
        "options": [
          "شكراً جزيلاً.",
          "هل يمكنك مساعدتي من فضلك؟",
          "أين المحطة؟",
          "متى يبدأ؟"
        ],
        "answers": [
          "شكراً جزيلاً."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-0-03",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — هل يمكنك مساعدتي من فضلك؟",
        "options": [
          "هل يمكنك مساعدتي من فضلك؟",
          "أين المحطة؟",
          "متى يبدأ؟",
          "أنا أفهم."
        ],
        "answers": [
          "هل يمكنك مساعدتي من فضلك؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-0-04",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — أين المحطة؟",
        "options": [
          "أين المحطة؟",
          "متى يبدأ؟",
          "أنا أفهم.",
          "من فضلك قل ذلك مرة أخرى."
        ],
        "answers": [
          "أين المحطة؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-0-05",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — متى يبدأ؟",
        "options": [
          "متى يبدأ؟",
          "أنا أفهم.",
          "من فضلك قل ذلك مرة أخرى.",
          "أراك غداً."
        ],
        "answers": [
          "متى يبدأ؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-0-06",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — أنا أفهم.",
        "options": [
          "أنا أفهم.",
          "من فضلك قل ذلك مرة أخرى.",
          "أراك غداً.",
          "صباح الخير."
        ],
        "answers": [
          "أنا أفهم."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-0-07",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — من فضلك قل ذلك مرة أخرى.",
        "options": [
          "من فضلك قل ذلك مرة أخرى.",
          "أراك غداً.",
          "صباح الخير.",
          "شكراً جزيلاً."
        ],
        "answers": [
          "من فضلك قل ذلك مرة أخرى."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-0-08",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — أراك غداً.",
        "options": [
          "أراك غداً.",
          "صباح الخير.",
          "شكراً جزيلاً.",
          "هل يمكنك مساعدتي من فضلك؟"
        ],
        "answers": [
          "أراك غداً."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-0-09",
        "type": "typed",
        "prompt": "اكتب الجملة التالية بدقة. — صباح الخير.",
        "options": [],
        "answers": [
          "صباح الخير."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ar-0-10",
        "type": "typed",
        "prompt": "اكتب الجملة التالية بدقة. — شكراً جزيلاً.",
        "options": [],
        "answers": [
          "شكراً جزيلاً."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ar-0-11",
        "type": "typed",
        "prompt": "اكتب الجملة التالية بدقة. — هل يمكنك مساعدتي من فضلك؟",
        "options": [],
        "answers": [
          "هل يمكنك مساعدتي من فضلك؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ar-0-12",
        "type": "typed",
        "prompt": "اكتب الجملة التالية بدقة. — أين المحطة؟",
        "options": [],
        "answers": [
          "أين المحطة؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ar-0-13",
        "type": "typed",
        "prompt": "اكتب الجملة التالية بدقة. — متى يبدأ؟",
        "options": [],
        "answers": [
          "متى يبدأ؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ar-0-14",
        "type": "audio_choice",
        "prompt": "استمع واختر الجملة التي سمعتها.",
        "options": [
          "هل يمكنك مساعدتي من فضلك؟",
          "أين المحطة؟",
          "متى يبدأ؟",
          "أنا أفهم."
        ],
        "answers": [
          "هل يمكنك مساعدتي من فضلك؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "هل يمكنك مساعدتي من فضلك؟",
        "ttsLang": "ar-SA",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ar-0-15",
        "type": "audio_choice",
        "prompt": "استمع واختر الجملة التي سمعتها.",
        "options": [
          "أين المحطة؟",
          "متى يبدأ؟",
          "أنا أفهم.",
          "من فضلك قل ذلك مرة أخرى."
        ],
        "answers": [
          "أين المحطة؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "أين المحطة؟",
        "ttsLang": "ar-SA",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ar-0-16",
        "type": "audio_choice",
        "prompt": "استمع واختر الجملة التي سمعتها.",
        "options": [
          "متى يبدأ؟",
          "أنا أفهم.",
          "من فضلك قل ذلك مرة أخرى.",
          "أراك غداً."
        ],
        "answers": [
          "متى يبدأ؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "متى يبدأ؟",
        "ttsLang": "ar-SA",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ar-0-17",
        "type": "audio_choice",
        "prompt": "استمع واختر الجملة التي سمعتها.",
        "options": [
          "أنا أفهم.",
          "من فضلك قل ذلك مرة أخرى.",
          "أراك غداً.",
          "صباح الخير."
        ],
        "answers": [
          "أنا أفهم."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "أنا أفهم.",
        "ttsLang": "ar-SA",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ar-0-18",
        "type": "audio_choice",
        "prompt": "استمع واختر الجملة التي سمعتها.",
        "options": [
          "من فضلك قل ذلك مرة أخرى.",
          "أراك غداً.",
          "صباح الخير.",
          "شكراً جزيلاً."
        ],
        "answers": [
          "من فضلك قل ذلك مرة أخرى."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "من فضلك قل ذلك مرة أخرى.",
        "ttsLang": "ar-SA",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ar-0-19",
        "type": "fill_blank",
        "prompt": "أكمل الجملة. — شكراً ___",
        "options": [
          "جزيلاً",
          "الخير",
          "فضلك",
          "المحطة"
        ],
        "answers": [
          "جزيلاً"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ar-0-20",
        "type": "fill_blank",
        "prompt": "أكمل الجملة. — هل يمكنك مساعدتي من ___",
        "options": [
          "فضلك",
          "الخير",
          "جزيلاً",
          "المحطة"
        ],
        "answers": [
          "فضلك"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ar-0-21",
        "type": "fill_blank",
        "prompt": "أكمل الجملة. — أين ___",
        "options": [
          "المحطة",
          "الخير",
          "جزيلاً",
          "فضلك"
        ],
        "answers": [
          "المحطة"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ar-0-22",
        "type": "fill_blank",
        "prompt": "أكمل الجملة. — متى ___",
        "options": [
          "يبدأ",
          "الخير",
          "جزيلاً",
          "فضلك"
        ],
        "answers": [
          "يبدأ"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ar-0-23",
        "type": "sentence_builder",
        "prompt": "رتّب الكلمات بالترتيب الصحيح.",
        "options": [
          "أين",
          "المحطة"
        ],
        "answers": [
          "أين المحطة"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ar-0-24",
        "type": "sentence_builder",
        "prompt": "رتّب الكلمات بالترتيب الصحيح.",
        "options": [
          "متى",
          "يبدأ"
        ],
        "answers": [
          "متى يبدأ"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ar-0-25",
        "type": "sentence_builder",
        "prompt": "رتّب الكلمات بالترتيب الصحيح.",
        "options": [
          "أنا",
          "أفهم"
        ],
        "answers": [
          "أنا أفهم"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ar-0-26",
        "type": "sentence_builder",
        "prompt": "رتّب الكلمات بالترتيب الصحيح.",
        "options": [
          "من",
          "فضلك",
          "قل",
          "ذلك",
          "مرة",
          "أخرى"
        ],
        "answers": [
          "من فضلك قل ذلك مرة أخرى"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ar-0-27",
        "type": "scenario_decision",
        "prompt": "اختر الرد الأكثر ملاءمة.",
        "options": [
          "متى يبدأ؟",
          "أنا أفهم.",
          "من فضلك قل ذلك مرة أخرى.",
          "أراك غداً."
        ],
        "answers": [
          "متى يبدأ؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ar-0-28",
        "type": "scenario_decision",
        "prompt": "اختر الرد الأكثر ملاءمة.",
        "options": [
          "أنا أفهم.",
          "من فضلك قل ذلك مرة أخرى.",
          "أراك غداً.",
          "صباح الخير."
        ],
        "answers": [
          "أنا أفهم."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ar-0-29",
        "type": "scenario_decision",
        "prompt": "اختر الرد الأكثر ملاءمة.",
        "options": [
          "من فضلك قل ذلك مرة أخرى.",
          "أراك غداً.",
          "صباح الخير.",
          "شكراً جزيلاً."
        ],
        "answers": [
          "من فضلك قل ذلك مرة أخرى."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ar-0-30",
        "type": "scenario_decision",
        "prompt": "اختر الرد الأكثر ملاءمة.",
        "options": [
          "أراك غداً.",
          "صباح الخير.",
          "شكراً جزيلاً.",
          "هل يمكنك مساعدتي من فضلك؟"
        ],
        "answers": [
          "أراك غداً."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-ar-2",
    "title": "العربية — المدرسة والحياة اليومية",
    "language": "ar",
    "level": "Intermediate",
    "topic": "العربية — المدرسة والحياة اليومية",
    "context": "School & Travel",
    "skill": "Mixed",
    "description": "تدرّب على العربية في المدرسة والسفر والحياة اليومية.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-ar-1-01",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — يبدأ الدرس الساعة الثامنة.",
        "options": [
          "يبدأ الدرس الساعة الثامنة.",
          "أي قاعة نستخدم؟",
          "أنهيت واجبي المنزلي.",
          "هل يمكنك الشرح مرة أخرى؟"
        ],
        "answers": [
          "يبدأ الدرس الساعة الثامنة."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-1-02",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — أي قاعة نستخدم؟",
        "options": [
          "أي قاعة نستخدم؟",
          "أنهيت واجبي المنزلي.",
          "هل يمكنك الشرح مرة أخرى؟",
          "افتح الكتاب من فضلك."
        ],
        "answers": [
          "أي قاعة نستخدم؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-1-03",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — أنهيت واجبي المنزلي.",
        "options": [
          "أنهيت واجبي المنزلي.",
          "هل يمكنك الشرح مرة أخرى؟",
          "افتح الكتاب من فضلك.",
          "الحافلة متأخرة."
        ],
        "answers": [
          "أنهيت واجبي المنزلي."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-1-04",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — هل يمكنك الشرح مرة أخرى؟",
        "options": [
          "هل يمكنك الشرح مرة أخرى؟",
          "افتح الكتاب من فضلك.",
          "الحافلة متأخرة.",
          "أريد تذكرة واحدة من فضلك."
        ],
        "answers": [
          "هل يمكنك الشرح مرة أخرى؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-1-05",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — افتح الكتاب من فضلك.",
        "options": [
          "افتح الكتاب من فضلك.",
          "الحافلة متأخرة.",
          "أريد تذكرة واحدة من فضلك.",
          "أين يمكنني شراء الغداء؟"
        ],
        "answers": [
          "افتح الكتاب من فضلك."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-1-06",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — الحافلة متأخرة.",
        "options": [
          "الحافلة متأخرة.",
          "أريد تذكرة واحدة من فضلك.",
          "أين يمكنني شراء الغداء؟",
          "يبدأ الدرس الساعة الثامنة."
        ],
        "answers": [
          "الحافلة متأخرة."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-1-07",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — أريد تذكرة واحدة من فضلك.",
        "options": [
          "أريد تذكرة واحدة من فضلك.",
          "أين يمكنني شراء الغداء؟",
          "يبدأ الدرس الساعة الثامنة.",
          "أي قاعة نستخدم؟"
        ],
        "answers": [
          "أريد تذكرة واحدة من فضلك."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-1-08",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — أين يمكنني شراء الغداء؟",
        "options": [
          "أين يمكنني شراء الغداء؟",
          "يبدأ الدرس الساعة الثامنة.",
          "أي قاعة نستخدم؟",
          "أنهيت واجبي المنزلي."
        ],
        "answers": [
          "أين يمكنني شراء الغداء؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-1-09",
        "type": "typed",
        "prompt": "اكتب الجملة التالية بدقة. — يبدأ الدرس الساعة الثامنة.",
        "options": [],
        "answers": [
          "يبدأ الدرس الساعة الثامنة."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ar-1-10",
        "type": "typed",
        "prompt": "اكتب الجملة التالية بدقة. — أي قاعة نستخدم؟",
        "options": [],
        "answers": [
          "أي قاعة نستخدم؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ar-1-11",
        "type": "typed",
        "prompt": "اكتب الجملة التالية بدقة. — أنهيت واجبي المنزلي.",
        "options": [],
        "answers": [
          "أنهيت واجبي المنزلي."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ar-1-12",
        "type": "typed",
        "prompt": "اكتب الجملة التالية بدقة. — هل يمكنك الشرح مرة أخرى؟",
        "options": [],
        "answers": [
          "هل يمكنك الشرح مرة أخرى؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ar-1-13",
        "type": "typed",
        "prompt": "اكتب الجملة التالية بدقة. — افتح الكتاب من فضلك.",
        "options": [],
        "answers": [
          "افتح الكتاب من فضلك."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ar-1-14",
        "type": "audio_choice",
        "prompt": "استمع واختر الجملة التي سمعتها.",
        "options": [
          "أنهيت واجبي المنزلي.",
          "هل يمكنك الشرح مرة أخرى؟",
          "افتح الكتاب من فضلك.",
          "الحافلة متأخرة."
        ],
        "answers": [
          "أنهيت واجبي المنزلي."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "أنهيت واجبي المنزلي.",
        "ttsLang": "ar-SA",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ar-1-15",
        "type": "audio_choice",
        "prompt": "استمع واختر الجملة التي سمعتها.",
        "options": [
          "هل يمكنك الشرح مرة أخرى؟",
          "افتح الكتاب من فضلك.",
          "الحافلة متأخرة.",
          "أريد تذكرة واحدة من فضلك."
        ],
        "answers": [
          "هل يمكنك الشرح مرة أخرى؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "هل يمكنك الشرح مرة أخرى؟",
        "ttsLang": "ar-SA",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ar-1-16",
        "type": "audio_choice",
        "prompt": "استمع واختر الجملة التي سمعتها.",
        "options": [
          "افتح الكتاب من فضلك.",
          "الحافلة متأخرة.",
          "أريد تذكرة واحدة من فضلك.",
          "أين يمكنني شراء الغداء؟"
        ],
        "answers": [
          "افتح الكتاب من فضلك."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "افتح الكتاب من فضلك.",
        "ttsLang": "ar-SA",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ar-1-17",
        "type": "audio_choice",
        "prompt": "استمع واختر الجملة التي سمعتها.",
        "options": [
          "الحافلة متأخرة.",
          "أريد تذكرة واحدة من فضلك.",
          "أين يمكنني شراء الغداء؟",
          "يبدأ الدرس الساعة الثامنة."
        ],
        "answers": [
          "الحافلة متأخرة."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "الحافلة متأخرة.",
        "ttsLang": "ar-SA",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ar-1-18",
        "type": "audio_choice",
        "prompt": "استمع واختر الجملة التي سمعتها.",
        "options": [
          "أريد تذكرة واحدة من فضلك.",
          "أين يمكنني شراء الغداء؟",
          "يبدأ الدرس الساعة الثامنة.",
          "أي قاعة نستخدم؟"
        ],
        "answers": [
          "أريد تذكرة واحدة من فضلك."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "أريد تذكرة واحدة من فضلك.",
        "ttsLang": "ar-SA",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ar-1-19",
        "type": "fill_blank",
        "prompt": "أكمل الجملة. — أي قاعة ___",
        "options": [
          "نستخدم",
          "الثامنة",
          "المنزلي",
          "أخرى"
        ],
        "answers": [
          "نستخدم"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ar-1-20",
        "type": "fill_blank",
        "prompt": "أكمل الجملة. — أنهيت واجبي ___",
        "options": [
          "المنزلي",
          "الثامنة",
          "نستخدم",
          "أخرى"
        ],
        "answers": [
          "المنزلي"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ar-1-21",
        "type": "fill_blank",
        "prompt": "أكمل الجملة. — هل يمكنك الشرح مرة ___",
        "options": [
          "أخرى",
          "الثامنة",
          "نستخدم",
          "المنزلي"
        ],
        "answers": [
          "أخرى"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ar-1-22",
        "type": "fill_blank",
        "prompt": "أكمل الجملة. — افتح الكتاب من ___",
        "options": [
          "فضلك",
          "الثامنة",
          "نستخدم",
          "المنزلي"
        ],
        "answers": [
          "فضلك"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ar-1-23",
        "type": "sentence_builder",
        "prompt": "رتّب الكلمات بالترتيب الصحيح.",
        "options": [
          "هل",
          "يمكنك",
          "الشرح",
          "مرة",
          "أخرى"
        ],
        "answers": [
          "هل يمكنك الشرح مرة أخرى"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ar-1-24",
        "type": "sentence_builder",
        "prompt": "رتّب الكلمات بالترتيب الصحيح.",
        "options": [
          "افتح",
          "الكتاب",
          "من",
          "فضلك"
        ],
        "answers": [
          "افتح الكتاب من فضلك"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ar-1-25",
        "type": "sentence_builder",
        "prompt": "رتّب الكلمات بالترتيب الصحيح.",
        "options": [
          "الحافلة",
          "متأخرة"
        ],
        "answers": [
          "الحافلة متأخرة"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ar-1-26",
        "type": "sentence_builder",
        "prompt": "رتّب الكلمات بالترتيب الصحيح.",
        "options": [
          "أريد",
          "تذكرة",
          "واحدة",
          "من",
          "فضلك"
        ],
        "answers": [
          "أريد تذكرة واحدة من فضلك"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ar-1-27",
        "type": "scenario_decision",
        "prompt": "اختر الرد الأكثر ملاءمة.",
        "options": [
          "افتح الكتاب من فضلك.",
          "الحافلة متأخرة.",
          "أريد تذكرة واحدة من فضلك.",
          "أين يمكنني شراء الغداء؟"
        ],
        "answers": [
          "افتح الكتاب من فضلك."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ar-1-28",
        "type": "scenario_decision",
        "prompt": "اختر الرد الأكثر ملاءمة.",
        "options": [
          "الحافلة متأخرة.",
          "أريد تذكرة واحدة من فضلك.",
          "أين يمكنني شراء الغداء؟",
          "يبدأ الدرس الساعة الثامنة."
        ],
        "answers": [
          "الحافلة متأخرة."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ar-1-29",
        "type": "scenario_decision",
        "prompt": "اختر الرد الأكثر ملاءمة.",
        "options": [
          "أريد تذكرة واحدة من فضلك.",
          "أين يمكنني شراء الغداء؟",
          "يبدأ الدرس الساعة الثامنة.",
          "أي قاعة نستخدم؟"
        ],
        "answers": [
          "أريد تذكرة واحدة من فضلك."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ar-1-30",
        "type": "scenario_decision",
        "prompt": "اختر الرد الأكثر ملاءمة.",
        "options": [
          "أين يمكنني شراء الغداء؟",
          "يبدأ الدرس الساعة الثامنة.",
          "أي قاعة نستخدم؟",
          "أنهيت واجبي المنزلي."
        ],
        "answers": [
          "أين يمكنني شراء الغداء؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-ar-3",
    "title": "العربية — العمل والتواصل المهني",
    "language": "ar",
    "level": "Professional",
    "topic": "العربية — العمل والتواصل المهني",
    "context": "Workplace & Professional",
    "skill": "Mixed",
    "description": "تدرّب على العربية المهنية للاجتماعات والمواعيد النهائية والبريد الإلكتروني وخدمة العملاء.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-ar-2-01",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — هل يمكنك إرسال التقرير اليوم؟",
        "options": [
          "هل يمكنك إرسال التقرير اليوم؟",
          "يبدأ الاجتماع الساعة الثالثة.",
          "يرجى تأكيد الموعد النهائي.",
          "أحتاج إلى مزيد من الوقت."
        ],
        "answers": [
          "هل يمكنك إرسال التقرير اليوم؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-2-02",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — يبدأ الاجتماع الساعة الثالثة.",
        "options": [
          "يبدأ الاجتماع الساعة الثالثة.",
          "يرجى تأكيد الموعد النهائي.",
          "أحتاج إلى مزيد من الوقت.",
          "سأتابع عبر البريد الإلكتروني."
        ],
        "answers": [
          "يبدأ الاجتماع الساعة الثالثة."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-2-03",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — يرجى تأكيد الموعد النهائي.",
        "options": [
          "يرجى تأكيد الموعد النهائي.",
          "أحتاج إلى مزيد من الوقت.",
          "سأتابع عبر البريد الإلكتروني.",
          "هل يمكننا إعادة جدولة الاجتماع؟"
        ],
        "answers": [
          "يرجى تأكيد الموعد النهائي."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-2-04",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — أحتاج إلى مزيد من الوقت.",
        "options": [
          "أحتاج إلى مزيد من الوقت.",
          "سأتابع عبر البريد الإلكتروني.",
          "هل يمكننا إعادة جدولة الاجتماع؟",
          "شكراً لمساعدتك."
        ],
        "answers": [
          "أحتاج إلى مزيد من الوقت."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-2-05",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — سأتابع عبر البريد الإلكتروني.",
        "options": [
          "سأتابع عبر البريد الإلكتروني.",
          "هل يمكننا إعادة جدولة الاجتماع؟",
          "شكراً لمساعدتك.",
          "أخبرني إذا طرأ أي تغيير."
        ],
        "answers": [
          "سأتابع عبر البريد الإلكتروني."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-2-06",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — هل يمكننا إعادة جدولة الاجتماع؟",
        "options": [
          "هل يمكننا إعادة جدولة الاجتماع؟",
          "شكراً لمساعدتك.",
          "أخبرني إذا طرأ أي تغيير.",
          "هل يمكنك إرسال التقرير اليوم؟"
        ],
        "answers": [
          "هل يمكننا إعادة جدولة الاجتماع؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-2-07",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — شكراً لمساعدتك.",
        "options": [
          "شكراً لمساعدتك.",
          "أخبرني إذا طرأ أي تغيير.",
          "هل يمكنك إرسال التقرير اليوم؟",
          "يبدأ الاجتماع الساعة الثالثة."
        ],
        "answers": [
          "شكراً لمساعدتك."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-2-08",
        "type": "multiple_choice",
        "prompt": "اختر التعبير المناسب. — أخبرني إذا طرأ أي تغيير.",
        "options": [
          "أخبرني إذا طرأ أي تغيير.",
          "هل يمكنك إرسال التقرير اليوم؟",
          "يبدأ الاجتماع الساعة الثالثة.",
          "يرجى تأكيد الموعد النهائي."
        ],
        "answers": [
          "أخبرني إذا طرأ أي تغيير."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-ar-2-09",
        "type": "typed",
        "prompt": "اكتب الجملة التالية بدقة. — هل يمكنك إرسال التقرير اليوم؟",
        "options": [],
        "answers": [
          "هل يمكنك إرسال التقرير اليوم؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ar-2-10",
        "type": "typed",
        "prompt": "اكتب الجملة التالية بدقة. — يبدأ الاجتماع الساعة الثالثة.",
        "options": [],
        "answers": [
          "يبدأ الاجتماع الساعة الثالثة."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ar-2-11",
        "type": "typed",
        "prompt": "اكتب الجملة التالية بدقة. — يرجى تأكيد الموعد النهائي.",
        "options": [],
        "answers": [
          "يرجى تأكيد الموعد النهائي."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ar-2-12",
        "type": "typed",
        "prompt": "اكتب الجملة التالية بدقة. — أحتاج إلى مزيد من الوقت.",
        "options": [],
        "answers": [
          "أحتاج إلى مزيد من الوقت."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ar-2-13",
        "type": "typed",
        "prompt": "اكتب الجملة التالية بدقة. — سأتابع عبر البريد الإلكتروني.",
        "options": [],
        "answers": [
          "سأتابع عبر البريد الإلكتروني."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-ar-2-14",
        "type": "audio_choice",
        "prompt": "استمع واختر الجملة التي سمعتها.",
        "options": [
          "يرجى تأكيد الموعد النهائي.",
          "أحتاج إلى مزيد من الوقت.",
          "سأتابع عبر البريد الإلكتروني.",
          "هل يمكننا إعادة جدولة الاجتماع؟"
        ],
        "answers": [
          "يرجى تأكيد الموعد النهائي."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "يرجى تأكيد الموعد النهائي.",
        "ttsLang": "ar-SA",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ar-2-15",
        "type": "audio_choice",
        "prompt": "استمع واختر الجملة التي سمعتها.",
        "options": [
          "أحتاج إلى مزيد من الوقت.",
          "سأتابع عبر البريد الإلكتروني.",
          "هل يمكننا إعادة جدولة الاجتماع؟",
          "شكراً لمساعدتك."
        ],
        "answers": [
          "أحتاج إلى مزيد من الوقت."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "أحتاج إلى مزيد من الوقت.",
        "ttsLang": "ar-SA",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ar-2-16",
        "type": "audio_choice",
        "prompt": "استمع واختر الجملة التي سمعتها.",
        "options": [
          "سأتابع عبر البريد الإلكتروني.",
          "هل يمكننا إعادة جدولة الاجتماع؟",
          "شكراً لمساعدتك.",
          "أخبرني إذا طرأ أي تغيير."
        ],
        "answers": [
          "سأتابع عبر البريد الإلكتروني."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "سأتابع عبر البريد الإلكتروني.",
        "ttsLang": "ar-SA",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ar-2-17",
        "type": "audio_choice",
        "prompt": "استمع واختر الجملة التي سمعتها.",
        "options": [
          "هل يمكننا إعادة جدولة الاجتماع؟",
          "شكراً لمساعدتك.",
          "أخبرني إذا طرأ أي تغيير.",
          "هل يمكنك إرسال التقرير اليوم؟"
        ],
        "answers": [
          "هل يمكننا إعادة جدولة الاجتماع؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "هل يمكننا إعادة جدولة الاجتماع؟",
        "ttsLang": "ar-SA",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ar-2-18",
        "type": "audio_choice",
        "prompt": "استمع واختر الجملة التي سمعتها.",
        "options": [
          "شكراً لمساعدتك.",
          "أخبرني إذا طرأ أي تغيير.",
          "هل يمكنك إرسال التقرير اليوم؟",
          "يبدأ الاجتماع الساعة الثالثة."
        ],
        "answers": [
          "شكراً لمساعدتك."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "شكراً لمساعدتك.",
        "ttsLang": "ar-SA",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-ar-2-19",
        "type": "fill_blank",
        "prompt": "أكمل الجملة. — يبدأ الاجتماع الساعة ___",
        "options": [
          "الثالثة",
          "اليوم",
          "النهائي",
          "الوقت"
        ],
        "answers": [
          "الثالثة"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ar-2-20",
        "type": "fill_blank",
        "prompt": "أكمل الجملة. — يرجى تأكيد الموعد ___",
        "options": [
          "النهائي",
          "اليوم",
          "الثالثة",
          "الوقت"
        ],
        "answers": [
          "النهائي"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ar-2-21",
        "type": "fill_blank",
        "prompt": "أكمل الجملة. — أحتاج إلى مزيد من ___",
        "options": [
          "الوقت",
          "اليوم",
          "الثالثة",
          "النهائي"
        ],
        "answers": [
          "الوقت"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ar-2-22",
        "type": "fill_blank",
        "prompt": "أكمل الجملة. — سأتابع عبر البريد ___",
        "options": [
          "الإلكتروني",
          "اليوم",
          "الثالثة",
          "النهائي"
        ],
        "answers": [
          "الإلكتروني"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-ar-2-23",
        "type": "sentence_builder",
        "prompt": "رتّب الكلمات بالترتيب الصحيح.",
        "options": [
          "أحتاج",
          "إلى",
          "مزيد",
          "من",
          "الوقت"
        ],
        "answers": [
          "أحتاج إلى مزيد من الوقت"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ar-2-24",
        "type": "sentence_builder",
        "prompt": "رتّب الكلمات بالترتيب الصحيح.",
        "options": [
          "سأتابع",
          "عبر",
          "البريد",
          "الإلكتروني"
        ],
        "answers": [
          "سأتابع عبر البريد الإلكتروني"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ar-2-25",
        "type": "sentence_builder",
        "prompt": "رتّب الكلمات بالترتيب الصحيح.",
        "options": [
          "هل",
          "يمكننا",
          "إعادة",
          "جدولة",
          "الاجتماع"
        ],
        "answers": [
          "هل يمكننا إعادة جدولة الاجتماع"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ar-2-26",
        "type": "sentence_builder",
        "prompt": "رتّب الكلمات بالترتيب الصحيح.",
        "options": [
          "شكراً",
          "لمساعدتك"
        ],
        "answers": [
          "شكراً لمساعدتك"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-ar-2-27",
        "type": "scenario_decision",
        "prompt": "اختر الرد الأكثر ملاءمة.",
        "options": [
          "سأتابع عبر البريد الإلكتروني.",
          "هل يمكننا إعادة جدولة الاجتماع؟",
          "شكراً لمساعدتك.",
          "أخبرني إذا طرأ أي تغيير."
        ],
        "answers": [
          "سأتابع عبر البريد الإلكتروني."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ar-2-28",
        "type": "scenario_decision",
        "prompt": "اختر الرد الأكثر ملاءمة.",
        "options": [
          "هل يمكننا إعادة جدولة الاجتماع؟",
          "شكراً لمساعدتك.",
          "أخبرني إذا طرأ أي تغيير.",
          "هل يمكنك إرسال التقرير اليوم؟"
        ],
        "answers": [
          "هل يمكننا إعادة جدولة الاجتماع؟"
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ar-2-29",
        "type": "scenario_decision",
        "prompt": "اختر الرد الأكثر ملاءمة.",
        "options": [
          "شكراً لمساعدتك.",
          "أخبرني إذا طرأ أي تغيير.",
          "هل يمكنك إرسال التقرير اليوم؟",
          "يبدأ الاجتماع الساعة الثالثة."
        ],
        "answers": [
          "شكراً لمساعدتك."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-ar-2-30",
        "type": "scenario_decision",
        "prompt": "اختر الرد الأكثر ملاءمة.",
        "options": [
          "أخبرني إذا طرأ أي تغيير.",
          "هل يمكنك إرسال التقرير اليوم؟",
          "يبدأ الاجتماع الساعة الثالثة.",
          "يرجى تأكيد الموعد النهائي."
        ],
        "answers": [
          "أخبرني إذا طرأ أي تغيير."
        ],
        "explanation": "راجع هذا التعبير في سياقه.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-id-1",
    "title": "Bahasa Indonesia — Dasar",
    "language": "id",
    "level": "Starter",
    "topic": "Bahasa Indonesia — Dasar",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Latih bahasa Indonesia dasar dengan mendengar, menyusun kalimat, dan respons praktis.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-id-0-01",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Selamat pagi.",
        "options": [
          "Selamat pagi.",
          "Terima kasih banyak.",
          "Bisakah Anda membantu saya?",
          "Di mana stasiunnya?"
        ],
        "answers": [
          "Selamat pagi."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-0-02",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Terima kasih banyak.",
        "options": [
          "Terima kasih banyak.",
          "Bisakah Anda membantu saya?",
          "Di mana stasiunnya?",
          "Mulai jam berapa?"
        ],
        "answers": [
          "Terima kasih banyak."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-0-03",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Bisakah Anda membantu saya?",
        "options": [
          "Bisakah Anda membantu saya?",
          "Di mana stasiunnya?",
          "Mulai jam berapa?",
          "Saya mengerti."
        ],
        "answers": [
          "Bisakah Anda membantu saya?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-0-04",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Di mana stasiunnya?",
        "options": [
          "Di mana stasiunnya?",
          "Mulai jam berapa?",
          "Saya mengerti.",
          "Tolong ulangi sekali lagi."
        ],
        "answers": [
          "Di mana stasiunnya?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-0-05",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Mulai jam berapa?",
        "options": [
          "Mulai jam berapa?",
          "Saya mengerti.",
          "Tolong ulangi sekali lagi.",
          "Sampai besok."
        ],
        "answers": [
          "Mulai jam berapa?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-0-06",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Saya mengerti.",
        "options": [
          "Saya mengerti.",
          "Tolong ulangi sekali lagi.",
          "Sampai besok.",
          "Selamat pagi."
        ],
        "answers": [
          "Saya mengerti."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-0-07",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Tolong ulangi sekali lagi.",
        "options": [
          "Tolong ulangi sekali lagi.",
          "Sampai besok.",
          "Selamat pagi.",
          "Terima kasih banyak."
        ],
        "answers": [
          "Tolong ulangi sekali lagi."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-0-08",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Sampai besok.",
        "options": [
          "Sampai besok.",
          "Selamat pagi.",
          "Terima kasih banyak.",
          "Bisakah Anda membantu saya?"
        ],
        "answers": [
          "Sampai besok."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-0-09",
        "type": "typed",
        "prompt": "Ketik kalimat berikut dengan tepat. — Selamat pagi.",
        "options": [],
        "answers": [
          "Selamat pagi."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-id-0-10",
        "type": "typed",
        "prompt": "Ketik kalimat berikut dengan tepat. — Terima kasih banyak.",
        "options": [],
        "answers": [
          "Terima kasih banyak."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-id-0-11",
        "type": "typed",
        "prompt": "Ketik kalimat berikut dengan tepat. — Bisakah Anda membantu saya?",
        "options": [],
        "answers": [
          "Bisakah Anda membantu saya?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-id-0-12",
        "type": "typed",
        "prompt": "Ketik kalimat berikut dengan tepat. — Di mana stasiunnya?",
        "options": [],
        "answers": [
          "Di mana stasiunnya?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-id-0-13",
        "type": "typed",
        "prompt": "Ketik kalimat berikut dengan tepat. — Mulai jam berapa?",
        "options": [],
        "answers": [
          "Mulai jam berapa?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-id-0-14",
        "type": "audio_choice",
        "prompt": "Dengarkan lalu pilih kalimat yang Anda dengar.",
        "options": [
          "Bisakah Anda membantu saya?",
          "Di mana stasiunnya?",
          "Mulai jam berapa?",
          "Saya mengerti."
        ],
        "answers": [
          "Bisakah Anda membantu saya?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Bisakah Anda membantu saya?",
        "ttsLang": "id-ID",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-id-0-15",
        "type": "audio_choice",
        "prompt": "Dengarkan lalu pilih kalimat yang Anda dengar.",
        "options": [
          "Di mana stasiunnya?",
          "Mulai jam berapa?",
          "Saya mengerti.",
          "Tolong ulangi sekali lagi."
        ],
        "answers": [
          "Di mana stasiunnya?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Di mana stasiunnya?",
        "ttsLang": "id-ID",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-id-0-16",
        "type": "audio_choice",
        "prompt": "Dengarkan lalu pilih kalimat yang Anda dengar.",
        "options": [
          "Mulai jam berapa?",
          "Saya mengerti.",
          "Tolong ulangi sekali lagi.",
          "Sampai besok."
        ],
        "answers": [
          "Mulai jam berapa?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Mulai jam berapa?",
        "ttsLang": "id-ID",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-id-0-17",
        "type": "audio_choice",
        "prompt": "Dengarkan lalu pilih kalimat yang Anda dengar.",
        "options": [
          "Saya mengerti.",
          "Tolong ulangi sekali lagi.",
          "Sampai besok.",
          "Selamat pagi."
        ],
        "answers": [
          "Saya mengerti."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Saya mengerti.",
        "ttsLang": "id-ID",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-id-0-18",
        "type": "audio_choice",
        "prompt": "Dengarkan lalu pilih kalimat yang Anda dengar.",
        "options": [
          "Tolong ulangi sekali lagi.",
          "Sampai besok.",
          "Selamat pagi.",
          "Terima kasih banyak."
        ],
        "answers": [
          "Tolong ulangi sekali lagi."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Tolong ulangi sekali lagi.",
        "ttsLang": "id-ID",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-id-0-19",
        "type": "fill_blank",
        "prompt": "Lengkapi kalimat. — Terima kasih ___",
        "options": [
          "banyak",
          "pagi",
          "saya",
          "stasiunnya"
        ],
        "answers": [
          "banyak"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-id-0-20",
        "type": "fill_blank",
        "prompt": "Lengkapi kalimat. — Bisakah Anda membantu ___",
        "options": [
          "saya",
          "pagi",
          "banyak",
          "stasiunnya"
        ],
        "answers": [
          "saya"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-id-0-21",
        "type": "fill_blank",
        "prompt": "Lengkapi kalimat. — Di mana ___",
        "options": [
          "stasiunnya",
          "pagi",
          "banyak",
          "saya"
        ],
        "answers": [
          "stasiunnya"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-id-0-22",
        "type": "fill_blank",
        "prompt": "Lengkapi kalimat. — Mulai jam ___",
        "options": [
          "berapa",
          "pagi",
          "banyak",
          "saya"
        ],
        "answers": [
          "berapa"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-id-0-23",
        "type": "sentence_builder",
        "prompt": "Susun kata-kata dalam urutan yang benar.",
        "options": [
          "Di",
          "mana",
          "stasiunnya"
        ],
        "answers": [
          "Di mana stasiunnya"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-id-0-24",
        "type": "sentence_builder",
        "prompt": "Susun kata-kata dalam urutan yang benar.",
        "options": [
          "Mulai",
          "jam",
          "berapa"
        ],
        "answers": [
          "Mulai jam berapa"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-id-0-25",
        "type": "sentence_builder",
        "prompt": "Susun kata-kata dalam urutan yang benar.",
        "options": [
          "Saya",
          "mengerti"
        ],
        "answers": [
          "Saya mengerti"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-id-0-26",
        "type": "sentence_builder",
        "prompt": "Susun kata-kata dalam urutan yang benar.",
        "options": [
          "Tolong",
          "ulangi",
          "sekali",
          "lagi"
        ],
        "answers": [
          "Tolong ulangi sekali lagi"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-id-0-27",
        "type": "scenario_decision",
        "prompt": "Pilih respons yang paling tepat.",
        "options": [
          "Mulai jam berapa?",
          "Saya mengerti.",
          "Tolong ulangi sekali lagi.",
          "Sampai besok."
        ],
        "answers": [
          "Mulai jam berapa?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-id-0-28",
        "type": "scenario_decision",
        "prompt": "Pilih respons yang paling tepat.",
        "options": [
          "Saya mengerti.",
          "Tolong ulangi sekali lagi.",
          "Sampai besok.",
          "Selamat pagi."
        ],
        "answers": [
          "Saya mengerti."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-id-0-29",
        "type": "scenario_decision",
        "prompt": "Pilih respons yang paling tepat.",
        "options": [
          "Tolong ulangi sekali lagi.",
          "Sampai besok.",
          "Selamat pagi.",
          "Terima kasih banyak."
        ],
        "answers": [
          "Tolong ulangi sekali lagi."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-id-0-30",
        "type": "scenario_decision",
        "prompt": "Pilih respons yang paling tepat.",
        "options": [
          "Sampai besok.",
          "Selamat pagi.",
          "Terima kasih banyak.",
          "Bisakah Anda membantu saya?"
        ],
        "answers": [
          "Sampai besok."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-id-2",
    "title": "Bahasa Indonesia — Sekolah & Kehidupan Sehari-hari",
    "language": "id",
    "level": "Intermediate",
    "topic": "Bahasa Indonesia — Sekolah & Kehidupan Sehari-hari",
    "context": "School & Travel",
    "skill": "Mixed",
    "description": "Latih bahasa Indonesia di sekolah, perjalanan, dan kehidupan sehari-hari.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-id-1-01",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Kelas dimulai pukul delapan.",
        "options": [
          "Kelas dimulai pukul delapan.",
          "Kita menggunakan ruang yang mana?",
          "Saya sudah menyelesaikan pekerjaan rumah.",
          "Bisakah Anda menjelaskan lagi?"
        ],
        "answers": [
          "Kelas dimulai pukul delapan."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-1-02",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Kita menggunakan ruang yang mana?",
        "options": [
          "Kita menggunakan ruang yang mana?",
          "Saya sudah menyelesaikan pekerjaan rumah.",
          "Bisakah Anda menjelaskan lagi?",
          "Silakan buka buku Anda."
        ],
        "answers": [
          "Kita menggunakan ruang yang mana?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-1-03",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Saya sudah menyelesaikan pekerjaan rumah.",
        "options": [
          "Saya sudah menyelesaikan pekerjaan rumah.",
          "Bisakah Anda menjelaskan lagi?",
          "Silakan buka buku Anda.",
          "Busnya terlambat."
        ],
        "answers": [
          "Saya sudah menyelesaikan pekerjaan rumah."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-1-04",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Bisakah Anda menjelaskan lagi?",
        "options": [
          "Bisakah Anda menjelaskan lagi?",
          "Silakan buka buku Anda.",
          "Busnya terlambat.",
          "Saya mau satu tiket, tolong."
        ],
        "answers": [
          "Bisakah Anda menjelaskan lagi?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-1-05",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Silakan buka buku Anda.",
        "options": [
          "Silakan buka buku Anda.",
          "Busnya terlambat.",
          "Saya mau satu tiket, tolong.",
          "Di mana saya bisa membeli makan siang?"
        ],
        "answers": [
          "Silakan buka buku Anda."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-1-06",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Busnya terlambat.",
        "options": [
          "Busnya terlambat.",
          "Saya mau satu tiket, tolong.",
          "Di mana saya bisa membeli makan siang?",
          "Kelas dimulai pukul delapan."
        ],
        "answers": [
          "Busnya terlambat."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-1-07",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Saya mau satu tiket, tolong.",
        "options": [
          "Saya mau satu tiket, tolong.",
          "Di mana saya bisa membeli makan siang?",
          "Kelas dimulai pukul delapan.",
          "Kita menggunakan ruang yang mana?"
        ],
        "answers": [
          "Saya mau satu tiket, tolong."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-1-08",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Di mana saya bisa membeli makan siang?",
        "options": [
          "Di mana saya bisa membeli makan siang?",
          "Kelas dimulai pukul delapan.",
          "Kita menggunakan ruang yang mana?",
          "Saya sudah menyelesaikan pekerjaan rumah."
        ],
        "answers": [
          "Di mana saya bisa membeli makan siang?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-1-09",
        "type": "typed",
        "prompt": "Ketik kalimat berikut dengan tepat. — Kelas dimulai pukul delapan.",
        "options": [],
        "answers": [
          "Kelas dimulai pukul delapan."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-id-1-10",
        "type": "typed",
        "prompt": "Ketik kalimat berikut dengan tepat. — Kita menggunakan ruang yang mana?",
        "options": [],
        "answers": [
          "Kita menggunakan ruang yang mana?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-id-1-11",
        "type": "typed",
        "prompt": "Ketik kalimat berikut dengan tepat. — Saya sudah menyelesaikan pekerjaan rumah.",
        "options": [],
        "answers": [
          "Saya sudah menyelesaikan pekerjaan rumah."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-id-1-12",
        "type": "typed",
        "prompt": "Ketik kalimat berikut dengan tepat. — Bisakah Anda menjelaskan lagi?",
        "options": [],
        "answers": [
          "Bisakah Anda menjelaskan lagi?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-id-1-13",
        "type": "typed",
        "prompt": "Ketik kalimat berikut dengan tepat. — Silakan buka buku Anda.",
        "options": [],
        "answers": [
          "Silakan buka buku Anda."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-id-1-14",
        "type": "audio_choice",
        "prompt": "Dengarkan lalu pilih kalimat yang Anda dengar.",
        "options": [
          "Saya sudah menyelesaikan pekerjaan rumah.",
          "Bisakah Anda menjelaskan lagi?",
          "Silakan buka buku Anda.",
          "Busnya terlambat."
        ],
        "answers": [
          "Saya sudah menyelesaikan pekerjaan rumah."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Saya sudah menyelesaikan pekerjaan rumah.",
        "ttsLang": "id-ID",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-id-1-15",
        "type": "audio_choice",
        "prompt": "Dengarkan lalu pilih kalimat yang Anda dengar.",
        "options": [
          "Bisakah Anda menjelaskan lagi?",
          "Silakan buka buku Anda.",
          "Busnya terlambat.",
          "Saya mau satu tiket, tolong."
        ],
        "answers": [
          "Bisakah Anda menjelaskan lagi?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Bisakah Anda menjelaskan lagi?",
        "ttsLang": "id-ID",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-id-1-16",
        "type": "audio_choice",
        "prompt": "Dengarkan lalu pilih kalimat yang Anda dengar.",
        "options": [
          "Silakan buka buku Anda.",
          "Busnya terlambat.",
          "Saya mau satu tiket, tolong.",
          "Di mana saya bisa membeli makan siang?"
        ],
        "answers": [
          "Silakan buka buku Anda."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Silakan buka buku Anda.",
        "ttsLang": "id-ID",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-id-1-17",
        "type": "audio_choice",
        "prompt": "Dengarkan lalu pilih kalimat yang Anda dengar.",
        "options": [
          "Busnya terlambat.",
          "Saya mau satu tiket, tolong.",
          "Di mana saya bisa membeli makan siang?",
          "Kelas dimulai pukul delapan."
        ],
        "answers": [
          "Busnya terlambat."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Busnya terlambat.",
        "ttsLang": "id-ID",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-id-1-18",
        "type": "audio_choice",
        "prompt": "Dengarkan lalu pilih kalimat yang Anda dengar.",
        "options": [
          "Saya mau satu tiket, tolong.",
          "Di mana saya bisa membeli makan siang?",
          "Kelas dimulai pukul delapan.",
          "Kita menggunakan ruang yang mana?"
        ],
        "answers": [
          "Saya mau satu tiket, tolong."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Saya mau satu tiket, tolong.",
        "ttsLang": "id-ID",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-id-1-19",
        "type": "fill_blank",
        "prompt": "Lengkapi kalimat. — Kita menggunakan ruang yang ___",
        "options": [
          "mana",
          "delapan",
          "rumah",
          "lagi"
        ],
        "answers": [
          "mana"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-id-1-20",
        "type": "fill_blank",
        "prompt": "Lengkapi kalimat. — Saya sudah menyelesaikan pekerjaan ___",
        "options": [
          "rumah",
          "delapan",
          "mana",
          "lagi"
        ],
        "answers": [
          "rumah"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-id-1-21",
        "type": "fill_blank",
        "prompt": "Lengkapi kalimat. — Bisakah Anda menjelaskan ___",
        "options": [
          "lagi",
          "delapan",
          "mana",
          "rumah"
        ],
        "answers": [
          "lagi"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-id-1-22",
        "type": "fill_blank",
        "prompt": "Lengkapi kalimat. — Silakan buka buku ___",
        "options": [
          "Anda",
          "delapan",
          "mana",
          "rumah"
        ],
        "answers": [
          "Anda"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-id-1-23",
        "type": "sentence_builder",
        "prompt": "Susun kata-kata dalam urutan yang benar.",
        "options": [
          "Bisakah",
          "Anda",
          "menjelaskan",
          "lagi"
        ],
        "answers": [
          "Bisakah Anda menjelaskan lagi"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-id-1-24",
        "type": "sentence_builder",
        "prompt": "Susun kata-kata dalam urutan yang benar.",
        "options": [
          "Silakan",
          "buka",
          "buku",
          "Anda"
        ],
        "answers": [
          "Silakan buka buku Anda"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-id-1-25",
        "type": "sentence_builder",
        "prompt": "Susun kata-kata dalam urutan yang benar.",
        "options": [
          "Busnya",
          "terlambat"
        ],
        "answers": [
          "Busnya terlambat"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-id-1-26",
        "type": "sentence_builder",
        "prompt": "Susun kata-kata dalam urutan yang benar.",
        "options": [
          "Saya",
          "mau",
          "satu",
          "tiket,",
          "tolong"
        ],
        "answers": [
          "Saya mau satu tiket, tolong"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-id-1-27",
        "type": "scenario_decision",
        "prompt": "Pilih respons yang paling tepat.",
        "options": [
          "Silakan buka buku Anda.",
          "Busnya terlambat.",
          "Saya mau satu tiket, tolong.",
          "Di mana saya bisa membeli makan siang?"
        ],
        "answers": [
          "Silakan buka buku Anda."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-id-1-28",
        "type": "scenario_decision",
        "prompt": "Pilih respons yang paling tepat.",
        "options": [
          "Busnya terlambat.",
          "Saya mau satu tiket, tolong.",
          "Di mana saya bisa membeli makan siang?",
          "Kelas dimulai pukul delapan."
        ],
        "answers": [
          "Busnya terlambat."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-id-1-29",
        "type": "scenario_decision",
        "prompt": "Pilih respons yang paling tepat.",
        "options": [
          "Saya mau satu tiket, tolong.",
          "Di mana saya bisa membeli makan siang?",
          "Kelas dimulai pukul delapan.",
          "Kita menggunakan ruang yang mana?"
        ],
        "answers": [
          "Saya mau satu tiket, tolong."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-id-1-30",
        "type": "scenario_decision",
        "prompt": "Pilih respons yang paling tepat.",
        "options": [
          "Di mana saya bisa membeli makan siang?",
          "Kelas dimulai pukul delapan.",
          "Kita menggunakan ruang yang mana?",
          "Saya sudah menyelesaikan pekerjaan rumah."
        ],
        "answers": [
          "Di mana saya bisa membeli makan siang?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-id-3",
    "title": "Bahasa Indonesia — Kerja & Komunikasi Profesional",
    "language": "id",
    "level": "Professional",
    "topic": "Bahasa Indonesia — Kerja & Komunikasi Profesional",
    "context": "Workplace & Professional",
    "skill": "Mixed",
    "description": "Latih bahasa Indonesia profesional untuk rapat, tenggat, email, dan layanan pelanggan.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-id-2-01",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Bisakah Anda mengirim laporan hari ini?",
        "options": [
          "Bisakah Anda mengirim laporan hari ini?",
          "Rapat dimulai pukul tiga.",
          "Tolong konfirmasi tenggat waktunya.",
          "Saya membutuhkan sedikit lebih banyak waktu."
        ],
        "answers": [
          "Bisakah Anda mengirim laporan hari ini?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-2-02",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Rapat dimulai pukul tiga.",
        "options": [
          "Rapat dimulai pukul tiga.",
          "Tolong konfirmasi tenggat waktunya.",
          "Saya membutuhkan sedikit lebih banyak waktu.",
          "Saya akan menindaklanjuti melalui email."
        ],
        "answers": [
          "Rapat dimulai pukul tiga."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-2-03",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Tolong konfirmasi tenggat waktunya.",
        "options": [
          "Tolong konfirmasi tenggat waktunya.",
          "Saya membutuhkan sedikit lebih banyak waktu.",
          "Saya akan menindaklanjuti melalui email.",
          "Bisakah kita menjadwal ulang rapat?"
        ],
        "answers": [
          "Tolong konfirmasi tenggat waktunya."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-2-04",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Saya membutuhkan sedikit lebih banyak waktu.",
        "options": [
          "Saya membutuhkan sedikit lebih banyak waktu.",
          "Saya akan menindaklanjuti melalui email.",
          "Bisakah kita menjadwal ulang rapat?",
          "Terima kasih atas bantuannya."
        ],
        "answers": [
          "Saya membutuhkan sedikit lebih banyak waktu."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-2-05",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Saya akan menindaklanjuti melalui email.",
        "options": [
          "Saya akan menindaklanjuti melalui email.",
          "Bisakah kita menjadwal ulang rapat?",
          "Terima kasih atas bantuannya.",
          "Beri tahu saya jika ada perubahan."
        ],
        "answers": [
          "Saya akan menindaklanjuti melalui email."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-2-06",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Bisakah kita menjadwal ulang rapat?",
        "options": [
          "Bisakah kita menjadwal ulang rapat?",
          "Terima kasih atas bantuannya.",
          "Beri tahu saya jika ada perubahan.",
          "Bisakah Anda mengirim laporan hari ini?"
        ],
        "answers": [
          "Bisakah kita menjadwal ulang rapat?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-2-07",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Terima kasih atas bantuannya.",
        "options": [
          "Terima kasih atas bantuannya.",
          "Beri tahu saya jika ada perubahan.",
          "Bisakah Anda mengirim laporan hari ini?",
          "Rapat dimulai pukul tiga."
        ],
        "answers": [
          "Terima kasih atas bantuannya."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-2-08",
        "type": "multiple_choice",
        "prompt": "Pilih ungkapan yang tepat. — Beri tahu saya jika ada perubahan.",
        "options": [
          "Beri tahu saya jika ada perubahan.",
          "Bisakah Anda mengirim laporan hari ini?",
          "Rapat dimulai pukul tiga.",
          "Tolong konfirmasi tenggat waktunya."
        ],
        "answers": [
          "Beri tahu saya jika ada perubahan."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-id-2-09",
        "type": "typed",
        "prompt": "Ketik kalimat berikut dengan tepat. — Bisakah Anda mengirim laporan hari ini?",
        "options": [],
        "answers": [
          "Bisakah Anda mengirim laporan hari ini?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-id-2-10",
        "type": "typed",
        "prompt": "Ketik kalimat berikut dengan tepat. — Rapat dimulai pukul tiga.",
        "options": [],
        "answers": [
          "Rapat dimulai pukul tiga."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-id-2-11",
        "type": "typed",
        "prompt": "Ketik kalimat berikut dengan tepat. — Tolong konfirmasi tenggat waktunya.",
        "options": [],
        "answers": [
          "Tolong konfirmasi tenggat waktunya."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-id-2-12",
        "type": "typed",
        "prompt": "Ketik kalimat berikut dengan tepat. — Saya membutuhkan sedikit lebih banyak waktu.",
        "options": [],
        "answers": [
          "Saya membutuhkan sedikit lebih banyak waktu."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-id-2-13",
        "type": "typed",
        "prompt": "Ketik kalimat berikut dengan tepat. — Saya akan menindaklanjuti melalui email.",
        "options": [],
        "answers": [
          "Saya akan menindaklanjuti melalui email."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-id-2-14",
        "type": "audio_choice",
        "prompt": "Dengarkan lalu pilih kalimat yang Anda dengar.",
        "options": [
          "Tolong konfirmasi tenggat waktunya.",
          "Saya membutuhkan sedikit lebih banyak waktu.",
          "Saya akan menindaklanjuti melalui email.",
          "Bisakah kita menjadwal ulang rapat?"
        ],
        "answers": [
          "Tolong konfirmasi tenggat waktunya."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Tolong konfirmasi tenggat waktunya.",
        "ttsLang": "id-ID",
        "maxPlays": 3,
        "playbackRate": 1,
        "mediaUrl": "/audio/id-workplace.wav"
      },
      {
        "id": "native-id-2-15",
        "type": "audio_choice",
        "prompt": "Dengarkan lalu pilih kalimat yang Anda dengar.",
        "options": [
          "Saya membutuhkan sedikit lebih banyak waktu.",
          "Saya akan menindaklanjuti melalui email.",
          "Bisakah kita menjadwal ulang rapat?",
          "Terima kasih atas bantuannya."
        ],
        "answers": [
          "Saya membutuhkan sedikit lebih banyak waktu."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Saya membutuhkan sedikit lebih banyak waktu.",
        "ttsLang": "id-ID",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-id-2-16",
        "type": "audio_choice",
        "prompt": "Dengarkan lalu pilih kalimat yang Anda dengar.",
        "options": [
          "Saya akan menindaklanjuti melalui email.",
          "Bisakah kita menjadwal ulang rapat?",
          "Terima kasih atas bantuannya.",
          "Beri tahu saya jika ada perubahan."
        ],
        "answers": [
          "Saya akan menindaklanjuti melalui email."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Saya akan menindaklanjuti melalui email.",
        "ttsLang": "id-ID",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-id-2-17",
        "type": "audio_choice",
        "prompt": "Dengarkan lalu pilih kalimat yang Anda dengar.",
        "options": [
          "Bisakah kita menjadwal ulang rapat?",
          "Terima kasih atas bantuannya.",
          "Beri tahu saya jika ada perubahan.",
          "Bisakah Anda mengirim laporan hari ini?"
        ],
        "answers": [
          "Bisakah kita menjadwal ulang rapat?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Bisakah kita menjadwal ulang rapat?",
        "ttsLang": "id-ID",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-id-2-18",
        "type": "audio_choice",
        "prompt": "Dengarkan lalu pilih kalimat yang Anda dengar.",
        "options": [
          "Terima kasih atas bantuannya.",
          "Beri tahu saya jika ada perubahan.",
          "Bisakah Anda mengirim laporan hari ini?",
          "Rapat dimulai pukul tiga."
        ],
        "answers": [
          "Terima kasih atas bantuannya."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Terima kasih atas bantuannya.",
        "ttsLang": "id-ID",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-id-2-19",
        "type": "fill_blank",
        "prompt": "Lengkapi kalimat. — Rapat dimulai pukul ___",
        "options": [
          "tiga",
          "ini",
          "waktunya",
          "waktu"
        ],
        "answers": [
          "tiga"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-id-2-20",
        "type": "fill_blank",
        "prompt": "Lengkapi kalimat. — Tolong konfirmasi tenggat ___",
        "options": [
          "waktunya",
          "ini",
          "tiga",
          "waktu"
        ],
        "answers": [
          "waktunya"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-id-2-21",
        "type": "fill_blank",
        "prompt": "Lengkapi kalimat. — Saya membutuhkan sedikit lebih banyak ___",
        "options": [
          "waktu",
          "ini",
          "tiga",
          "waktunya"
        ],
        "answers": [
          "waktu"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-id-2-22",
        "type": "fill_blank",
        "prompt": "Lengkapi kalimat. — Saya akan menindaklanjuti melalui ___",
        "options": [
          "email",
          "ini",
          "tiga",
          "waktunya"
        ],
        "answers": [
          "email"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-id-2-23",
        "type": "sentence_builder",
        "prompt": "Susun kata-kata dalam urutan yang benar.",
        "options": [
          "Saya",
          "membutuhkan",
          "sedikit",
          "lebih",
          "banyak",
          "waktu"
        ],
        "answers": [
          "Saya membutuhkan sedikit lebih banyak waktu"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-id-2-24",
        "type": "sentence_builder",
        "prompt": "Susun kata-kata dalam urutan yang benar.",
        "options": [
          "Saya",
          "akan",
          "menindaklanjuti",
          "melalui",
          "email"
        ],
        "answers": [
          "Saya akan menindaklanjuti melalui email"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-id-2-25",
        "type": "sentence_builder",
        "prompt": "Susun kata-kata dalam urutan yang benar.",
        "options": [
          "Bisakah",
          "kita",
          "menjadwal",
          "ulang",
          "rapat"
        ],
        "answers": [
          "Bisakah kita menjadwal ulang rapat"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-id-2-26",
        "type": "sentence_builder",
        "prompt": "Susun kata-kata dalam urutan yang benar.",
        "options": [
          "Terima",
          "kasih",
          "atas",
          "bantuannya"
        ],
        "answers": [
          "Terima kasih atas bantuannya"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-id-2-27",
        "type": "scenario_decision",
        "prompt": "Pilih respons yang paling tepat.",
        "options": [
          "Saya akan menindaklanjuti melalui email.",
          "Bisakah kita menjadwal ulang rapat?",
          "Terima kasih atas bantuannya.",
          "Beri tahu saya jika ada perubahan."
        ],
        "answers": [
          "Saya akan menindaklanjuti melalui email."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-id-2-28",
        "type": "scenario_decision",
        "prompt": "Pilih respons yang paling tepat.",
        "options": [
          "Bisakah kita menjadwal ulang rapat?",
          "Terima kasih atas bantuannya.",
          "Beri tahu saya jika ada perubahan.",
          "Bisakah Anda mengirim laporan hari ini?"
        ],
        "answers": [
          "Bisakah kita menjadwal ulang rapat?"
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-id-2-29",
        "type": "scenario_decision",
        "prompt": "Pilih respons yang paling tepat.",
        "options": [
          "Terima kasih atas bantuannya.",
          "Beri tahu saya jika ada perubahan.",
          "Bisakah Anda mengirim laporan hari ini?",
          "Rapat dimulai pukul tiga."
        ],
        "answers": [
          "Terima kasih atas bantuannya."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-id-2-30",
        "type": "scenario_decision",
        "prompt": "Pilih respons yang paling tepat.",
        "options": [
          "Beri tahu saya jika ada perubahan.",
          "Bisakah Anda mengirim laporan hari ini?",
          "Rapat dimulai pukul tiga.",
          "Tolong konfirmasi tenggat waktunya."
        ],
        "answers": [
          "Beri tahu saya jika ada perubahan."
        ],
        "explanation": "Tinjau ungkapan ini dalam konteks.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-tr-1",
    "title": "Türkçe — Temel",
    "language": "tr",
    "level": "Starter",
    "topic": "Türkçe — Temel",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Dinleme, cümle sıralama ve pratik yanıtlarla temel Türkçe çalışın.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-tr-0-01",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Günaydın.",
        "options": [
          "Günaydın.",
          "Çok teşekkür ederim.",
          "Bana yardım edebilir misiniz?",
          "İstasyon nerede?"
        ],
        "answers": [
          "Günaydın."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-0-02",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Çok teşekkür ederim.",
        "options": [
          "Çok teşekkür ederim.",
          "Bana yardım edebilir misiniz?",
          "İstasyon nerede?",
          "Saat kaçta başlıyor?"
        ],
        "answers": [
          "Çok teşekkür ederim."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-0-03",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Bana yardım edebilir misiniz?",
        "options": [
          "Bana yardım edebilir misiniz?",
          "İstasyon nerede?",
          "Saat kaçta başlıyor?",
          "Anlıyorum."
        ],
        "answers": [
          "Bana yardım edebilir misiniz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-0-04",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — İstasyon nerede?",
        "options": [
          "İstasyon nerede?",
          "Saat kaçta başlıyor?",
          "Anlıyorum.",
          "Lütfen tekrar söyler misiniz?"
        ],
        "answers": [
          "İstasyon nerede?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-0-05",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Saat kaçta başlıyor?",
        "options": [
          "Saat kaçta başlıyor?",
          "Anlıyorum.",
          "Lütfen tekrar söyler misiniz?",
          "Yarın görüşürüz."
        ],
        "answers": [
          "Saat kaçta başlıyor?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-0-06",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Anlıyorum.",
        "options": [
          "Anlıyorum.",
          "Lütfen tekrar söyler misiniz?",
          "Yarın görüşürüz.",
          "Günaydın."
        ],
        "answers": [
          "Anlıyorum."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-0-07",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Lütfen tekrar söyler misiniz?",
        "options": [
          "Lütfen tekrar söyler misiniz?",
          "Yarın görüşürüz.",
          "Günaydın.",
          "Çok teşekkür ederim."
        ],
        "answers": [
          "Lütfen tekrar söyler misiniz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-0-08",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Yarın görüşürüz.",
        "options": [
          "Yarın görüşürüz.",
          "Günaydın.",
          "Çok teşekkür ederim.",
          "Bana yardım edebilir misiniz?"
        ],
        "answers": [
          "Yarın görüşürüz."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-0-09",
        "type": "typed",
        "prompt": "Aşağıdaki cümleyi tam olarak yazın. — Günaydın.",
        "options": [],
        "answers": [
          "Günaydın."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-tr-0-10",
        "type": "typed",
        "prompt": "Aşağıdaki cümleyi tam olarak yazın. — Çok teşekkür ederim.",
        "options": [],
        "answers": [
          "Çok teşekkür ederim."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-tr-0-11",
        "type": "typed",
        "prompt": "Aşağıdaki cümleyi tam olarak yazın. — Bana yardım edebilir misiniz?",
        "options": [],
        "answers": [
          "Bana yardım edebilir misiniz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-tr-0-12",
        "type": "typed",
        "prompt": "Aşağıdaki cümleyi tam olarak yazın. — İstasyon nerede?",
        "options": [],
        "answers": [
          "İstasyon nerede?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-tr-0-13",
        "type": "typed",
        "prompt": "Aşağıdaki cümleyi tam olarak yazın. — Saat kaçta başlıyor?",
        "options": [],
        "answers": [
          "Saat kaçta başlıyor?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-tr-0-14",
        "type": "audio_choice",
        "prompt": "Dinleyin ve duyduğunuz cümleyi seçin.",
        "options": [
          "Bana yardım edebilir misiniz?",
          "İstasyon nerede?",
          "Saat kaçta başlıyor?",
          "Anlıyorum."
        ],
        "answers": [
          "Bana yardım edebilir misiniz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Bana yardım edebilir misiniz?",
        "ttsLang": "tr-TR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-tr-0-15",
        "type": "audio_choice",
        "prompt": "Dinleyin ve duyduğunuz cümleyi seçin.",
        "options": [
          "İstasyon nerede?",
          "Saat kaçta başlıyor?",
          "Anlıyorum.",
          "Lütfen tekrar söyler misiniz?"
        ],
        "answers": [
          "İstasyon nerede?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "İstasyon nerede?",
        "ttsLang": "tr-TR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-tr-0-16",
        "type": "audio_choice",
        "prompt": "Dinleyin ve duyduğunuz cümleyi seçin.",
        "options": [
          "Saat kaçta başlıyor?",
          "Anlıyorum.",
          "Lütfen tekrar söyler misiniz?",
          "Yarın görüşürüz."
        ],
        "answers": [
          "Saat kaçta başlıyor?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Saat kaçta başlıyor?",
        "ttsLang": "tr-TR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-tr-0-17",
        "type": "audio_choice",
        "prompt": "Dinleyin ve duyduğunuz cümleyi seçin.",
        "options": [
          "Anlıyorum.",
          "Lütfen tekrar söyler misiniz?",
          "Yarın görüşürüz.",
          "Günaydın."
        ],
        "answers": [
          "Anlıyorum."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Anlıyorum.",
        "ttsLang": "tr-TR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-tr-0-18",
        "type": "audio_choice",
        "prompt": "Dinleyin ve duyduğunuz cümleyi seçin.",
        "options": [
          "Lütfen tekrar söyler misiniz?",
          "Yarın görüşürüz.",
          "Günaydın.",
          "Çok teşekkür ederim."
        ],
        "answers": [
          "Lütfen tekrar söyler misiniz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Lütfen tekrar söyler misiniz?",
        "ttsLang": "tr-TR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-tr-0-19",
        "type": "fill_blank",
        "prompt": "Cümleyi tamamlayın. — Çok teşekkür ___",
        "options": [
          "ederim",
          "Günaydın",
          "misiniz",
          "nerede"
        ],
        "answers": [
          "ederim"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-tr-0-20",
        "type": "fill_blank",
        "prompt": "Cümleyi tamamlayın. — Bana yardım edebilir ___",
        "options": [
          "misiniz",
          "Günaydın",
          "ederim",
          "nerede"
        ],
        "answers": [
          "misiniz"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-tr-0-21",
        "type": "fill_blank",
        "prompt": "Cümleyi tamamlayın. — İstasyon ___",
        "options": [
          "nerede",
          "Günaydın",
          "ederim",
          "misiniz"
        ],
        "answers": [
          "nerede"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-tr-0-22",
        "type": "fill_blank",
        "prompt": "Cümleyi tamamlayın. — Saat kaçta ___",
        "options": [
          "başlıyor",
          "Günaydın",
          "ederim",
          "misiniz"
        ],
        "answers": [
          "başlıyor"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-tr-0-23",
        "type": "sentence_builder",
        "prompt": "Kelimeleri doğru sıraya koyun.",
        "options": [
          "İstasyon",
          "nerede"
        ],
        "answers": [
          "İstasyon nerede"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-tr-0-24",
        "type": "sentence_builder",
        "prompt": "Kelimeleri doğru sıraya koyun.",
        "options": [
          "Saat",
          "kaçta",
          "başlıyor"
        ],
        "answers": [
          "Saat kaçta başlıyor"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-tr-0-25",
        "type": "sentence_builder",
        "prompt": "Kelimeleri doğru sıraya koyun.",
        "options": [
          "A",
          "n",
          "l",
          "ı",
          "y",
          "o",
          "r",
          "u",
          "m",
          "."
        ],
        "answers": [
          "Anlıyorum."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-tr-0-26",
        "type": "sentence_builder",
        "prompt": "Kelimeleri doğru sıraya koyun.",
        "options": [
          "Lütfen",
          "tekrar",
          "söyler",
          "misiniz"
        ],
        "answers": [
          "Lütfen tekrar söyler misiniz"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-tr-0-27",
        "type": "scenario_decision",
        "prompt": "En uygun yanıtı seçin.",
        "options": [
          "Saat kaçta başlıyor?",
          "Anlıyorum.",
          "Lütfen tekrar söyler misiniz?",
          "Yarın görüşürüz."
        ],
        "answers": [
          "Saat kaçta başlıyor?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-tr-0-28",
        "type": "scenario_decision",
        "prompt": "En uygun yanıtı seçin.",
        "options": [
          "Anlıyorum.",
          "Lütfen tekrar söyler misiniz?",
          "Yarın görüşürüz.",
          "Günaydın."
        ],
        "answers": [
          "Anlıyorum."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-tr-0-29",
        "type": "scenario_decision",
        "prompt": "En uygun yanıtı seçin.",
        "options": [
          "Lütfen tekrar söyler misiniz?",
          "Yarın görüşürüz.",
          "Günaydın.",
          "Çok teşekkür ederim."
        ],
        "answers": [
          "Lütfen tekrar söyler misiniz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-tr-0-30",
        "type": "scenario_decision",
        "prompt": "En uygun yanıtı seçin.",
        "options": [
          "Yarın görüşürüz.",
          "Günaydın.",
          "Çok teşekkür ederim.",
          "Bana yardım edebilir misiniz?"
        ],
        "answers": [
          "Yarın görüşürüz."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-tr-2",
    "title": "Türkçe — Okul ve Günlük Yaşam",
    "language": "tr",
    "level": "Intermediate",
    "topic": "Türkçe — Okul ve Günlük Yaşam",
    "context": "School & Travel",
    "skill": "Mixed",
    "description": "Okulda, seyahatte ve günlük yaşamda Türkçe çalışın.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-tr-1-01",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Ders saat sekizde başlıyor.",
        "options": [
          "Ders saat sekizde başlıyor.",
          "Hangi sınıfı kullanıyoruz?",
          "Ödevimi bitirdim.",
          "Bir daha açıklayabilir misiniz?"
        ],
        "answers": [
          "Ders saat sekizde başlıyor."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-1-02",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Hangi sınıfı kullanıyoruz?",
        "options": [
          "Hangi sınıfı kullanıyoruz?",
          "Ödevimi bitirdim.",
          "Bir daha açıklayabilir misiniz?",
          "Lütfen kitabınızı açın."
        ],
        "answers": [
          "Hangi sınıfı kullanıyoruz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-1-03",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Ödevimi bitirdim.",
        "options": [
          "Ödevimi bitirdim.",
          "Bir daha açıklayabilir misiniz?",
          "Lütfen kitabınızı açın.",
          "Otobüs gecikti."
        ],
        "answers": [
          "Ödevimi bitirdim."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-1-04",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Bir daha açıklayabilir misiniz?",
        "options": [
          "Bir daha açıklayabilir misiniz?",
          "Lütfen kitabınızı açın.",
          "Otobüs gecikti.",
          "Bir bilet istiyorum, lütfen."
        ],
        "answers": [
          "Bir daha açıklayabilir misiniz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-1-05",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Lütfen kitabınızı açın.",
        "options": [
          "Lütfen kitabınızı açın.",
          "Otobüs gecikti.",
          "Bir bilet istiyorum, lütfen.",
          "Öğle yemeğini nereden alabilirim?"
        ],
        "answers": [
          "Lütfen kitabınızı açın."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-1-06",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Otobüs gecikti.",
        "options": [
          "Otobüs gecikti.",
          "Bir bilet istiyorum, lütfen.",
          "Öğle yemeğini nereden alabilirim?",
          "Ders saat sekizde başlıyor."
        ],
        "answers": [
          "Otobüs gecikti."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-1-07",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Bir bilet istiyorum, lütfen.",
        "options": [
          "Bir bilet istiyorum, lütfen.",
          "Öğle yemeğini nereden alabilirim?",
          "Ders saat sekizde başlıyor.",
          "Hangi sınıfı kullanıyoruz?"
        ],
        "answers": [
          "Bir bilet istiyorum, lütfen."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-1-08",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Öğle yemeğini nereden alabilirim?",
        "options": [
          "Öğle yemeğini nereden alabilirim?",
          "Ders saat sekizde başlıyor.",
          "Hangi sınıfı kullanıyoruz?",
          "Ödevimi bitirdim."
        ],
        "answers": [
          "Öğle yemeğini nereden alabilirim?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-1-09",
        "type": "typed",
        "prompt": "Aşağıdaki cümleyi tam olarak yazın. — Ders saat sekizde başlıyor.",
        "options": [],
        "answers": [
          "Ders saat sekizde başlıyor."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-tr-1-10",
        "type": "typed",
        "prompt": "Aşağıdaki cümleyi tam olarak yazın. — Hangi sınıfı kullanıyoruz?",
        "options": [],
        "answers": [
          "Hangi sınıfı kullanıyoruz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-tr-1-11",
        "type": "typed",
        "prompt": "Aşağıdaki cümleyi tam olarak yazın. — Ödevimi bitirdim.",
        "options": [],
        "answers": [
          "Ödevimi bitirdim."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-tr-1-12",
        "type": "typed",
        "prompt": "Aşağıdaki cümleyi tam olarak yazın. — Bir daha açıklayabilir misiniz?",
        "options": [],
        "answers": [
          "Bir daha açıklayabilir misiniz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-tr-1-13",
        "type": "typed",
        "prompt": "Aşağıdaki cümleyi tam olarak yazın. — Lütfen kitabınızı açın.",
        "options": [],
        "answers": [
          "Lütfen kitabınızı açın."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-tr-1-14",
        "type": "audio_choice",
        "prompt": "Dinleyin ve duyduğunuz cümleyi seçin.",
        "options": [
          "Ödevimi bitirdim.",
          "Bir daha açıklayabilir misiniz?",
          "Lütfen kitabınızı açın.",
          "Otobüs gecikti."
        ],
        "answers": [
          "Ödevimi bitirdim."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Ödevimi bitirdim.",
        "ttsLang": "tr-TR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-tr-1-15",
        "type": "audio_choice",
        "prompt": "Dinleyin ve duyduğunuz cümleyi seçin.",
        "options": [
          "Bir daha açıklayabilir misiniz?",
          "Lütfen kitabınızı açın.",
          "Otobüs gecikti.",
          "Bir bilet istiyorum, lütfen."
        ],
        "answers": [
          "Bir daha açıklayabilir misiniz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Bir daha açıklayabilir misiniz?",
        "ttsLang": "tr-TR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-tr-1-16",
        "type": "audio_choice",
        "prompt": "Dinleyin ve duyduğunuz cümleyi seçin.",
        "options": [
          "Lütfen kitabınızı açın.",
          "Otobüs gecikti.",
          "Bir bilet istiyorum, lütfen.",
          "Öğle yemeğini nereden alabilirim?"
        ],
        "answers": [
          "Lütfen kitabınızı açın."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Lütfen kitabınızı açın.",
        "ttsLang": "tr-TR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-tr-1-17",
        "type": "audio_choice",
        "prompt": "Dinleyin ve duyduğunuz cümleyi seçin.",
        "options": [
          "Otobüs gecikti.",
          "Bir bilet istiyorum, lütfen.",
          "Öğle yemeğini nereden alabilirim?",
          "Ders saat sekizde başlıyor."
        ],
        "answers": [
          "Otobüs gecikti."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Otobüs gecikti.",
        "ttsLang": "tr-TR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-tr-1-18",
        "type": "audio_choice",
        "prompt": "Dinleyin ve duyduğunuz cümleyi seçin.",
        "options": [
          "Bir bilet istiyorum, lütfen.",
          "Öğle yemeğini nereden alabilirim?",
          "Ders saat sekizde başlıyor.",
          "Hangi sınıfı kullanıyoruz?"
        ],
        "answers": [
          "Bir bilet istiyorum, lütfen."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Bir bilet istiyorum, lütfen.",
        "ttsLang": "tr-TR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-tr-1-19",
        "type": "fill_blank",
        "prompt": "Cümleyi tamamlayın. — Hangi sınıfı ___",
        "options": [
          "kullanıyoruz",
          "başlıyor",
          "bitirdim",
          "misiniz"
        ],
        "answers": [
          "kullanıyoruz"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-tr-1-20",
        "type": "fill_blank",
        "prompt": "Cümleyi tamamlayın. — Ödevimi ___",
        "options": [
          "bitirdim",
          "başlıyor",
          "kullanıyoruz",
          "misiniz"
        ],
        "answers": [
          "bitirdim"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-tr-1-21",
        "type": "fill_blank",
        "prompt": "Cümleyi tamamlayın. — Bir daha açıklayabilir ___",
        "options": [
          "misiniz",
          "başlıyor",
          "kullanıyoruz",
          "bitirdim"
        ],
        "answers": [
          "misiniz"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-tr-1-22",
        "type": "fill_blank",
        "prompt": "Cümleyi tamamlayın. — Lütfen kitabınızı ___",
        "options": [
          "açın",
          "başlıyor",
          "kullanıyoruz",
          "bitirdim"
        ],
        "answers": [
          "açın"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-tr-1-23",
        "type": "sentence_builder",
        "prompt": "Kelimeleri doğru sıraya koyun.",
        "options": [
          "Bir",
          "daha",
          "açıklayabilir",
          "misiniz"
        ],
        "answers": [
          "Bir daha açıklayabilir misiniz"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-tr-1-24",
        "type": "sentence_builder",
        "prompt": "Kelimeleri doğru sıraya koyun.",
        "options": [
          "Lütfen",
          "kitabınızı",
          "açın"
        ],
        "answers": [
          "Lütfen kitabınızı açın"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-tr-1-25",
        "type": "sentence_builder",
        "prompt": "Kelimeleri doğru sıraya koyun.",
        "options": [
          "Otobüs",
          "gecikti"
        ],
        "answers": [
          "Otobüs gecikti"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-tr-1-26",
        "type": "sentence_builder",
        "prompt": "Kelimeleri doğru sıraya koyun.",
        "options": [
          "Bir",
          "bilet",
          "istiyorum,",
          "lütfen"
        ],
        "answers": [
          "Bir bilet istiyorum, lütfen"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-tr-1-27",
        "type": "scenario_decision",
        "prompt": "En uygun yanıtı seçin.",
        "options": [
          "Lütfen kitabınızı açın.",
          "Otobüs gecikti.",
          "Bir bilet istiyorum, lütfen.",
          "Öğle yemeğini nereden alabilirim?"
        ],
        "answers": [
          "Lütfen kitabınızı açın."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-tr-1-28",
        "type": "scenario_decision",
        "prompt": "En uygun yanıtı seçin.",
        "options": [
          "Otobüs gecikti.",
          "Bir bilet istiyorum, lütfen.",
          "Öğle yemeğini nereden alabilirim?",
          "Ders saat sekizde başlıyor."
        ],
        "answers": [
          "Otobüs gecikti."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-tr-1-29",
        "type": "scenario_decision",
        "prompt": "En uygun yanıtı seçin.",
        "options": [
          "Bir bilet istiyorum, lütfen.",
          "Öğle yemeğini nereden alabilirim?",
          "Ders saat sekizde başlıyor.",
          "Hangi sınıfı kullanıyoruz?"
        ],
        "answers": [
          "Bir bilet istiyorum, lütfen."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-tr-1-30",
        "type": "scenario_decision",
        "prompt": "En uygun yanıtı seçin.",
        "options": [
          "Öğle yemeğini nereden alabilirim?",
          "Ders saat sekizde başlıyor.",
          "Hangi sınıfı kullanıyoruz?",
          "Ödevimi bitirdim."
        ],
        "answers": [
          "Öğle yemeğini nereden alabilirim?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  },
  {
    "id": "native-tr-3",
    "title": "Türkçe — İş ve Profesyonel İletişim",
    "language": "tr",
    "level": "Professional",
    "topic": "Türkçe — İş ve Profesyonel İletişim",
    "context": "Workplace & Professional",
    "skill": "Mixed",
    "description": "Toplantılar, son tarihler, e-postalar ve müşteri hizmetleri için profesyonel Türkçe çalışın.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "native-tr-2-01",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Raporu bugün gönderebilir misiniz?",
        "options": [
          "Raporu bugün gönderebilir misiniz?",
          "Toplantı saat üçte başlıyor.",
          "Lütfen son tarihi onaylayın.",
          "Biraz daha zamana ihtiyacım var."
        ],
        "answers": [
          "Raporu bugün gönderebilir misiniz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-2-02",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Toplantı saat üçte başlıyor.",
        "options": [
          "Toplantı saat üçte başlıyor.",
          "Lütfen son tarihi onaylayın.",
          "Biraz daha zamana ihtiyacım var.",
          "E-posta ile takip edeceğim."
        ],
        "answers": [
          "Toplantı saat üçte başlıyor."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-2-03",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Lütfen son tarihi onaylayın.",
        "options": [
          "Lütfen son tarihi onaylayın.",
          "Biraz daha zamana ihtiyacım var.",
          "E-posta ile takip edeceğim.",
          "Toplantıyı yeniden planlayabilir miyiz?"
        ],
        "answers": [
          "Lütfen son tarihi onaylayın."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-2-04",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Biraz daha zamana ihtiyacım var.",
        "options": [
          "Biraz daha zamana ihtiyacım var.",
          "E-posta ile takip edeceğim.",
          "Toplantıyı yeniden planlayabilir miyiz?",
          "Yardımınız için teşekkür ederim."
        ],
        "answers": [
          "Biraz daha zamana ihtiyacım var."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-2-05",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — E-posta ile takip edeceğim.",
        "options": [
          "E-posta ile takip edeceğim.",
          "Toplantıyı yeniden planlayabilir miyiz?",
          "Yardımınız için teşekkür ederim.",
          "Bir değişiklik olursa lütfen bana bildirin."
        ],
        "answers": [
          "E-posta ile takip edeceğim."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-2-06",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Toplantıyı yeniden planlayabilir miyiz?",
        "options": [
          "Toplantıyı yeniden planlayabilir miyiz?",
          "Yardımınız için teşekkür ederim.",
          "Bir değişiklik olursa lütfen bana bildirin.",
          "Raporu bugün gönderebilir misiniz?"
        ],
        "answers": [
          "Toplantıyı yeniden planlayabilir miyiz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-2-07",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Yardımınız için teşekkür ederim.",
        "options": [
          "Yardımınız için teşekkür ederim.",
          "Bir değişiklik olursa lütfen bana bildirin.",
          "Raporu bugün gönderebilir misiniz?",
          "Toplantı saat üçte başlıyor."
        ],
        "answers": [
          "Yardımınız için teşekkür ederim."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 1,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-2-08",
        "type": "multiple_choice",
        "prompt": "Uygun ifadeyi seçin. — Bir değişiklik olursa lütfen bana bildirin.",
        "options": [
          "Bir değişiklik olursa lütfen bana bildirin.",
          "Raporu bugün gönderebilir misiniz?",
          "Toplantı saat üçte başlıyor.",
          "Lütfen son tarihi onaylayın."
        ],
        "answers": [
          "Bir değişiklik olursa lütfen bana bildirin."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "recognition"
        ]
      },
      {
        "id": "native-tr-2-09",
        "type": "typed",
        "prompt": "Aşağıdaki cümleyi tam olarak yazın. — Raporu bugün gönderebilir misiniz?",
        "options": [],
        "answers": [
          "Raporu bugün gönderebilir misiniz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-tr-2-10",
        "type": "typed",
        "prompt": "Aşağıdaki cümleyi tam olarak yazın. — Toplantı saat üçte başlıyor.",
        "options": [],
        "answers": [
          "Toplantı saat üçte başlıyor."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-tr-2-11",
        "type": "typed",
        "prompt": "Aşağıdaki cümleyi tam olarak yazın. — Lütfen son tarihi onaylayın.",
        "options": [],
        "answers": [
          "Lütfen son tarihi onaylayın."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-tr-2-12",
        "type": "typed",
        "prompt": "Aşağıdaki cümleyi tam olarak yazın. — Biraz daha zamana ihtiyacım var.",
        "options": [],
        "answers": [
          "Biraz daha zamana ihtiyacım var."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-tr-2-13",
        "type": "typed",
        "prompt": "Aşağıdaki cümleyi tam olarak yazın. — E-posta ile takip edeceğim.",
        "options": [],
        "answers": [
          "E-posta ile takip edeceğim."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "typing"
        ]
      },
      {
        "id": "native-tr-2-14",
        "type": "audio_choice",
        "prompt": "Dinleyin ve duyduğunuz cümleyi seçin.",
        "options": [
          "Lütfen son tarihi onaylayın.",
          "Biraz daha zamana ihtiyacım var.",
          "E-posta ile takip edeceğim.",
          "Toplantıyı yeniden planlayabilir miyiz?"
        ],
        "answers": [
          "Lütfen son tarihi onaylayın."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Lütfen son tarihi onaylayın.",
        "ttsLang": "tr-TR",
        "maxPlays": 3,
        "playbackRate": 1,
        "mediaUrl": "/audio/tr-workplace.wav"
      },
      {
        "id": "native-tr-2-15",
        "type": "audio_choice",
        "prompt": "Dinleyin ve duyduğunuz cümleyi seçin.",
        "options": [
          "Biraz daha zamana ihtiyacım var.",
          "E-posta ile takip edeceğim.",
          "Toplantıyı yeniden planlayabilir miyiz?",
          "Yardımınız için teşekkür ederim."
        ],
        "answers": [
          "Biraz daha zamana ihtiyacım var."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Biraz daha zamana ihtiyacım var.",
        "ttsLang": "tr-TR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-tr-2-16",
        "type": "audio_choice",
        "prompt": "Dinleyin ve duyduğunuz cümleyi seçin.",
        "options": [
          "E-posta ile takip edeceğim.",
          "Toplantıyı yeniden planlayabilir miyiz?",
          "Yardımınız için teşekkür ederim.",
          "Bir değişiklik olursa lütfen bana bildirin."
        ],
        "answers": [
          "E-posta ile takip edeceğim."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "E-posta ile takip edeceğim.",
        "ttsLang": "tr-TR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-tr-2-17",
        "type": "audio_choice",
        "prompt": "Dinleyin ve duyduğunuz cümleyi seçin.",
        "options": [
          "Toplantıyı yeniden planlayabilir miyiz?",
          "Yardımınız için teşekkür ederim.",
          "Bir değişiklik olursa lütfen bana bildirin.",
          "Raporu bugün gönderebilir misiniz?"
        ],
        "answers": [
          "Toplantıyı yeniden planlayabilir miyiz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Toplantıyı yeniden planlayabilir miyiz?",
        "ttsLang": "tr-TR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-tr-2-18",
        "type": "audio_choice",
        "prompt": "Dinleyin ve duyduğunuz cümleyi seçin.",
        "options": [
          "Yardımınız için teşekkür ederim.",
          "Bir değişiklik olursa lütfen bana bildirin.",
          "Raporu bugün gönderebilir misiniz?",
          "Toplantı saat üçte başlıyor."
        ],
        "answers": [
          "Yardımınız için teşekkür ederim."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "listening"
        ],
        "mediaType": "audio",
        "ttsText": "Yardımınız için teşekkür ederim.",
        "ttsLang": "tr-TR",
        "maxPlays": 3,
        "playbackRate": 1
      },
      {
        "id": "native-tr-2-19",
        "type": "fill_blank",
        "prompt": "Cümleyi tamamlayın. — Toplantı saat üçte ___",
        "options": [
          "başlıyor",
          "misiniz",
          "onaylayın",
          "var"
        ],
        "answers": [
          "başlıyor"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-tr-2-20",
        "type": "fill_blank",
        "prompt": "Cümleyi tamamlayın. — Lütfen son tarihi ___",
        "options": [
          "onaylayın",
          "misiniz",
          "başlıyor",
          "var"
        ],
        "answers": [
          "onaylayın"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-tr-2-21",
        "type": "fill_blank",
        "prompt": "Cümleyi tamamlayın. — Biraz daha zamana ihtiyacım ___",
        "options": [
          "var",
          "misiniz",
          "başlıyor",
          "onaylayın"
        ],
        "answers": [
          "var"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-tr-2-22",
        "type": "fill_blank",
        "prompt": "Cümleyi tamamlayın. — E-posta ile takip ___",
        "options": [
          "edeceğim",
          "misiniz",
          "başlıyor",
          "onaylayın"
        ],
        "answers": [
          "edeceğim"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 2,
        "tags": [
          "native",
          "fill-blank"
        ]
      },
      {
        "id": "native-tr-2-23",
        "type": "sentence_builder",
        "prompt": "Kelimeleri doğru sıraya koyun.",
        "options": [
          "Biraz",
          "daha",
          "zamana",
          "ihtiyacım",
          "var"
        ],
        "answers": [
          "Biraz daha zamana ihtiyacım var"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-tr-2-24",
        "type": "sentence_builder",
        "prompt": "Kelimeleri doğru sıraya koyun.",
        "options": [
          "E-posta",
          "ile",
          "takip",
          "edeceğim"
        ],
        "answers": [
          "E-posta ile takip edeceğim"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-tr-2-25",
        "type": "sentence_builder",
        "prompt": "Kelimeleri doğru sıraya koyun.",
        "options": [
          "Toplantıyı",
          "yeniden",
          "planlayabilir",
          "miyiz"
        ],
        "answers": [
          "Toplantıyı yeniden planlayabilir miyiz"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-tr-2-26",
        "type": "sentence_builder",
        "prompt": "Kelimeleri doğru sıraya koyun.",
        "options": [
          "Yardımınız",
          "için",
          "teşekkür",
          "ederim"
        ],
        "answers": [
          "Yardımınız için teşekkür ederim"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "sentence-builder"
        ]
      },
      {
        "id": "native-tr-2-27",
        "type": "scenario_decision",
        "prompt": "En uygun yanıtı seçin.",
        "options": [
          "E-posta ile takip edeceğim.",
          "Toplantıyı yeniden planlayabilir miyiz?",
          "Yardımınız için teşekkür ederim.",
          "Bir değişiklik olursa lütfen bana bildirin."
        ],
        "answers": [
          "E-posta ile takip edeceğim."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-tr-2-28",
        "type": "scenario_decision",
        "prompt": "En uygun yanıtı seçin.",
        "options": [
          "Toplantıyı yeniden planlayabilir miyiz?",
          "Yardımınız için teşekkür ederim.",
          "Bir değişiklik olursa lütfen bana bildirin.",
          "Raporu bugün gönderebilir misiniz?"
        ],
        "answers": [
          "Toplantıyı yeniden planlayabilir miyiz?"
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-tr-2-29",
        "type": "scenario_decision",
        "prompt": "En uygun yanıtı seçin.",
        "options": [
          "Yardımınız için teşekkür ederim.",
          "Bir değişiklik olursa lütfen bana bildirin.",
          "Raporu bugün gönderebilir misiniz?",
          "Toplantı saat üçte başlıyor."
        ],
        "answers": [
          "Yardımınız için teşekkür ederim."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 3,
        "tags": [
          "native",
          "scenario"
        ]
      },
      {
        "id": "native-tr-2-30",
        "type": "scenario_decision",
        "prompt": "En uygun yanıtı seçin.",
        "options": [
          "Bir değişiklik olursa lütfen bana bildirin.",
          "Raporu bugün gönderebilir misiniz?",
          "Toplantı saat üçte başlıyor.",
          "Lütfen son tarihi onaylayın."
        ],
        "answers": [
          "Bir değişiklik olursa lütfen bana bildirin."
        ],
        "explanation": "Bu ifadeyi bağlam içinde tekrar edin.",
        "difficulty": 4,
        "tags": [
          "native",
          "scenario"
        ]
      }
    ]
  }
] as QuestionSet[];
