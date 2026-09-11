import type { QuestionSet } from '../types';

export const seedQuestionSets: QuestionSet[] = [
  {
    "id": "official-en-foundation",
    "title": "English — Foundation & Everyday",
    "language": "en",
    "level": "A2",
    "topic": "Everyday Communication",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Bộ bài nền tảng English: từ vựng, hội thoại, dịch và xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "en-b1",
        "type": "multiple_choice",
        "prompt": "Chọn nghĩa phù hợp của “Good morning”.",
        "options": [
          "Chào buổi sáng",
          "hạn chót",
          "Bạn có thể gửi báo cáo không?",
          "Cuộc họp bắt đầu lúc ba giờ."
        ],
        "answers": [
          "Chào buổi sáng"
        ],
        "explanation": "Good morning → Chào buổi sáng.",
        "difficulty": 1,
        "tags": [
          "starter",
          "vocabulary"
        ]
      },
      {
        "id": "en-b2",
        "type": "matching",
        "prompt": "Ghép từ/cụm từ với nghĩa phù hợp.",
        "answers": [
          "Good morning=Chào buổi sáng",
          "deadline=hạn chót",
          "Could you send the report?=Bạn có thể gửi báo cáo không?"
        ],
        "pairs": [
          {
            "left": "Good morning",
            "right": "Chào buổi sáng"
          },
          {
            "left": "deadline",
            "right": "hạn chót"
          },
          {
            "left": "Could you send the report?",
            "right": "Bạn có thể gửi báo cáo không?"
          }
        ],
        "difficulty": 2,
        "tags": [
          "vocabulary",
          "matching"
        ]
      },
      {
        "id": "en-b3",
        "type": "typed",
        "prompt": "Gõ lại cụm từ: deadline",
        "answers": [
          "deadline"
        ],
        "difficulty": 2,
        "tags": [
          "spelling"
        ]
      },
      {
        "id": "en-b4",
        "type": "translation",
        "prompt": "Dịch sang tiếng Việt: “Could you send the report?”.",
        "answers": [
          "Bạn có thể gửi báo cáo không?"
        ],
        "difficulty": 2,
        "tags": [
          "translation"
        ]
      },
      {
        "id": "en-b5",
        "type": "dialogue",
        "prompt": "Trong một cuộc trò chuyện lịch sự, bạn nên chọn phản hồi nào?",
        "options": [
          "Cảm ơn và xác nhận thông tin",
          "Bỏ đi mà không trả lời",
          "Trả lời bằng một từ không liên quan",
          "Gửi nội dung trống"
        ],
        "answers": [
          "Cảm ơn và xác nhận thông tin"
        ],
        "difficulty": 2,
        "tags": [
          "dialogue",
          "pragmatics"
        ]
      },
      {
        "id": "en-b6",
        "type": "scenario_decision",
        "prompt": "Bạn nhận được yêu cầu gấp nhưng chưa rõ deadline. Hành động tốt nhất là gì?",
        "options": [
          "Hỏi lại deadline và xác nhận ưu tiên",
          "Im lặng chờ",
          "Đoán deadline",
          "Từ chối ngay"
        ],
        "answers": [
          "Hỏi lại deadline và xác nhận ưu tiên"
        ],
        "difficulty": 3,
        "tags": [
          "workplace",
          "scenario"
        ]
      },
      {
        "id": "en-b7",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý một nhiệm vụ.",
        "options": [
          "Xác nhận yêu cầu",
          "Lập kế hoạch",
          "Thực hiện",
          "Báo cáo kết quả"
        ],
        "answers": [
          "Xác nhận yêu cầu Lập kế hoạch Thực hiện Báo cáo kết quả"
        ],
        "difficulty": 3,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "en-b8",
        "type": "true_false",
        "prompt": "Trong giao tiếp chuyên nghiệp, xác nhận lại thông tin quan trọng giúp giảm hiểu nhầm.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 2,
        "tags": [
          "professional"
        ]
      }
    ]
  },
  {
    "id": "official-en-professional",
    "title": "English — Real-life & Professional Scenarios",
    "language": "en",
    "level": "A2–B2",
    "topic": "Workplace & Real Life",
    "context": "Workplace & School",
    "skill": "Advanced Mixed",
    "description": "Tình huống thực tế English: nghe, email, deadline, khách hàng, lớp học và ra quyết định.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "en-a1",
        "type": "audio_choice",
        "prompt": "Nghe thông báo và chọn ý chính phù hợp nhất.",
        "options": [
          "Thông báo về lịch hoặc nhiệm vụ",
          "Một câu chuyện cổ tích",
          "Mô tả thời tiết",
          "Quảng cáo trò chơi"
        ],
        "answers": [
          "Thông báo về lịch hoặc nhiệm vụ"
        ],
        "mediaUrl": "/audio/en-workplace.wav",
        "mediaType": "audio",
        "ttsText": "The meeting starts at three.",
        "ttsLang": "en-US",
        "transcript": "The meeting starts at three.",
        "maxPlays": 3,
        "playbackRate": 1,
        "difficulty": 3,
        "tags": [
          "listening",
          "workplace"
        ]
      },
      {
        "id": "en-a2",
        "type": "listening_input",
        "prompt": "Nghe lại và gõ từ/cụm trọng tâm bạn nghe được.",
        "answers": [
          "The meeting starts at three.",
          "Could you send the report?"
        ],
        "mediaUrl": "/audio/en-workplace.wav",
        "mediaType": "audio",
        "ttsText": "The meeting starts at three.",
        "ttsLang": "en-US",
        "transcript": "The meeting starts at three.",
        "maxPlays": 5,
        "difficulty": 3,
        "tags": [
          "listening",
          "dictation"
        ]
      },
      {
        "id": "en-a3",
        "type": "error_correction",
        "prompt": "Bạn đang viết email chuyên nghiệp. Hãy chọn câu phù hợp nhất.",
        "options": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin.",
          "Ê nhận được chưa?",
          "Không trả lời cũng được.",
          "Tôi gửi đại thôi."
        ],
        "answers": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "email",
          "register"
        ]
      },
      {
        "id": "en-a4",
        "type": "scenario_decision",
        "prompt": "Bạn phát hiện báo cáo có lỗi ngay trước cuộc họp. Bạn nên làm gì?",
        "options": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật",
          "Giấu lỗi",
          "Xóa file",
          "Đợi người khác phát hiện"
        ],
        "answers": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "workplace",
          "problem-solving"
        ]
      },
      {
        "id": "en-a5",
        "type": "dialogue",
        "prompt": "Khách hàng phàn nàn vì giao hàng trễ. Phản hồi nào chuyên nghiệp nhất?",
        "options": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể.",
          "Không phải việc của tôi.",
          "Chờ đi.",
          "Bạn tự kiểm tra nhé."
        ],
        "answers": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể."
        ],
        "difficulty": 4,
        "tags": [
          "customer-service"
        ]
      },
      {
        "id": "en-a6",
        "type": "transformation",
        "prompt": "Viết lại yêu cầu theo phong cách lịch sự/chuyên nghiệp.",
        "answers": [
          "Vui lòng gửi tài liệu trước cuộc họp.",
          "Xin vui lòng gửi tài liệu trước cuộc họp."
        ],
        "difficulty": 4,
        "tags": [
          "formal",
          "writing"
        ]
      },
      {
        "id": "en-a7",
        "type": "cloze",
        "prompt": "Hoàn thành quy trình: Nhận yêu cầu → xác nhận ___ → thực hiện → kiểm tra → báo cáo.",
        "options": [
          "mục tiêu và thời hạn",
          "màu sắc",
          "thời tiết",
          "sở thích"
        ],
        "answers": [
          "mục tiêu và thời hạn"
        ],
        "difficulty": 4,
        "tags": [
          "workflow",
          "professional"
        ]
      },
      {
        "id": "en-a8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là TNV phụ trách lớp học và cần báo việc đổi phòng. Chọn thông điệp rõ ràng nhất.",
        "options": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ.",
          "Chỉ gửi “đổi phòng nha”.",
          "Không cần thông báo.",
          "Gửi sau khi buổi học kết thúc."
        ],
        "answers": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ."
        ],
        "difficulty": 5,
        "tags": [
          "school-workplace",
          "roleplay"
        ]
      }
    ]
  },
  {
    "id": "official-zh-foundation",
    "title": "中文 — Foundation & Everyday",
    "language": "zh",
    "level": "HSK 1",
    "topic": "Everyday Communication",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Bộ bài nền tảng 中文: từ vựng, hội thoại, dịch và xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "zh-b1",
        "type": "multiple_choice",
        "prompt": "Chọn nghĩa phù hợp của “你好”.",
        "options": [
          "Xin chào",
          "Cảm ơn",
          "cuộc họp",
          "Vui lòng gửi báo cáo"
        ],
        "answers": [
          "Xin chào"
        ],
        "explanation": "你好 → Xin chào.",
        "difficulty": 1,
        "tags": [
          "starter",
          "vocabulary"
        ]
      },
      {
        "id": "zh-b2",
        "type": "matching",
        "prompt": "Ghép từ/cụm từ với nghĩa phù hợp.",
        "answers": [
          "你好=Xin chào",
          "谢谢=Cảm ơn",
          "会议=cuộc họp"
        ],
        "pairs": [
          {
            "left": "你好",
            "right": "Xin chào"
          },
          {
            "left": "谢谢",
            "right": "Cảm ơn"
          },
          {
            "left": "会议",
            "right": "cuộc họp"
          }
        ],
        "difficulty": 2,
        "tags": [
          "vocabulary",
          "matching"
        ]
      },
      {
        "id": "zh-b3",
        "type": "typed",
        "prompt": "Gõ lại cụm từ: 谢谢",
        "answers": [
          "谢谢"
        ],
        "difficulty": 2,
        "tags": [
          "spelling"
        ]
      },
      {
        "id": "zh-b4",
        "type": "translation",
        "prompt": "Dịch sang tiếng Việt: “会议”.",
        "answers": [
          "cuộc họp"
        ],
        "difficulty": 2,
        "tags": [
          "translation"
        ]
      },
      {
        "id": "zh-b5",
        "type": "dialogue",
        "prompt": "Trong một cuộc trò chuyện lịch sự, bạn nên chọn phản hồi nào?",
        "options": [
          "Cảm ơn và xác nhận thông tin",
          "Bỏ đi mà không trả lời",
          "Trả lời bằng một từ không liên quan",
          "Gửi nội dung trống"
        ],
        "answers": [
          "Cảm ơn và xác nhận thông tin"
        ],
        "difficulty": 2,
        "tags": [
          "dialogue",
          "pragmatics"
        ]
      },
      {
        "id": "zh-b6",
        "type": "scenario_decision",
        "prompt": "Bạn nhận được yêu cầu gấp nhưng chưa rõ deadline. Hành động tốt nhất là gì?",
        "options": [
          "Hỏi lại deadline và xác nhận ưu tiên",
          "Im lặng chờ",
          "Đoán deadline",
          "Từ chối ngay"
        ],
        "answers": [
          "Hỏi lại deadline và xác nhận ưu tiên"
        ],
        "difficulty": 3,
        "tags": [
          "workplace",
          "scenario"
        ]
      },
      {
        "id": "zh-b7",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý một nhiệm vụ.",
        "options": [
          "Xác nhận yêu cầu",
          "Lập kế hoạch",
          "Thực hiện",
          "Báo cáo kết quả"
        ],
        "answers": [
          "Xác nhận yêu cầu Lập kế hoạch Thực hiện Báo cáo kết quả"
        ],
        "difficulty": 3,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "zh-b8",
        "type": "true_false",
        "prompt": "Trong giao tiếp chuyên nghiệp, xác nhận lại thông tin quan trọng giúp giảm hiểu nhầm.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 2,
        "tags": [
          "professional"
        ]
      }
    ]
  },
  {
    "id": "official-zh-professional",
    "title": "中文 — Real-life & Professional Scenarios",
    "language": "zh",
    "level": "HSK 1–3",
    "topic": "Workplace & Real Life",
    "context": "Daily Life & Workplace",
    "skill": "Advanced Mixed",
    "description": "Tình huống thực tế 中文: nghe, email, deadline, khách hàng, lớp học và ra quyết định.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "zh-a1",
        "type": "audio_choice",
        "prompt": "Nghe thông báo và chọn ý chính phù hợp nhất.",
        "options": [
          "Thông báo về lịch hoặc nhiệm vụ",
          "Một câu chuyện cổ tích",
          "Mô tả thời tiết",
          "Quảng cáo trò chơi"
        ],
        "answers": [
          "Thông báo về lịch hoặc nhiệm vụ"
        ],
        "mediaUrl": "/audio/zh-workplace.wav",
        "mediaType": "audio",
        "ttsText": "请发报告",
        "ttsLang": "zh-CN",
        "transcript": "请发报告",
        "maxPlays": 3,
        "playbackRate": 1,
        "difficulty": 3,
        "tags": [
          "listening",
          "workplace"
        ]
      },
      {
        "id": "zh-a2",
        "type": "listening_input",
        "prompt": "Nghe lại và gõ từ/cụm trọng tâm bạn nghe được.",
        "answers": [
          "请发报告",
          "会议"
        ],
        "mediaUrl": "/audio/zh-workplace.wav",
        "mediaType": "audio",
        "ttsText": "请发报告",
        "ttsLang": "zh-CN",
        "transcript": "请发报告",
        "maxPlays": 5,
        "difficulty": 3,
        "tags": [
          "listening",
          "dictation"
        ]
      },
      {
        "id": "zh-a3",
        "type": "error_correction",
        "prompt": "Bạn đang viết email chuyên nghiệp. Hãy chọn câu phù hợp nhất.",
        "options": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin.",
          "Ê nhận được chưa?",
          "Không trả lời cũng được.",
          "Tôi gửi đại thôi."
        ],
        "answers": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "email",
          "register"
        ]
      },
      {
        "id": "zh-a4",
        "type": "scenario_decision",
        "prompt": "Bạn phát hiện báo cáo có lỗi ngay trước cuộc họp. Bạn nên làm gì?",
        "options": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật",
          "Giấu lỗi",
          "Xóa file",
          "Đợi người khác phát hiện"
        ],
        "answers": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "workplace",
          "problem-solving"
        ]
      },
      {
        "id": "zh-a5",
        "type": "dialogue",
        "prompt": "Khách hàng phàn nàn vì giao hàng trễ. Phản hồi nào chuyên nghiệp nhất?",
        "options": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể.",
          "Không phải việc của tôi.",
          "Chờ đi.",
          "Bạn tự kiểm tra nhé."
        ],
        "answers": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể."
        ],
        "difficulty": 4,
        "tags": [
          "customer-service"
        ]
      },
      {
        "id": "zh-a6",
        "type": "transformation",
        "prompt": "Viết lại yêu cầu theo phong cách lịch sự/chuyên nghiệp.",
        "answers": [
          "Vui lòng gửi tài liệu trước cuộc họp.",
          "Xin vui lòng gửi tài liệu trước cuộc họp."
        ],
        "difficulty": 4,
        "tags": [
          "formal",
          "writing"
        ]
      },
      {
        "id": "zh-a7",
        "type": "cloze",
        "prompt": "Hoàn thành quy trình: Nhận yêu cầu → xác nhận ___ → thực hiện → kiểm tra → báo cáo.",
        "options": [
          "mục tiêu và thời hạn",
          "màu sắc",
          "thời tiết",
          "sở thích"
        ],
        "answers": [
          "mục tiêu và thời hạn"
        ],
        "difficulty": 4,
        "tags": [
          "workflow",
          "professional"
        ]
      },
      {
        "id": "zh-a8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là TNV phụ trách lớp học và cần báo việc đổi phòng. Chọn thông điệp rõ ràng nhất.",
        "options": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ.",
          "Chỉ gửi “đổi phòng nha”.",
          "Không cần thông báo.",
          "Gửi sau khi buổi học kết thúc."
        ],
        "answers": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ."
        ],
        "difficulty": 5,
        "tags": [
          "school-workplace",
          "roleplay"
        ]
      }
    ]
  },
  {
    "id": "official-ja-foundation",
    "title": "日本語 — Foundation & Everyday",
    "language": "ja",
    "level": "Starter",
    "topic": "Everyday Communication",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Bộ bài nền tảng 日本語: từ vựng, hội thoại, dịch và xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ja-b1",
        "type": "multiple_choice",
        "prompt": "Chọn nghĩa phù hợp của “こんにちは”.",
        "options": [
          "Xin chào",
          "Cảm ơn",
          "trường học",
          "cuộc họp"
        ],
        "answers": [
          "Xin chào"
        ],
        "explanation": "こんにちは → Xin chào.",
        "difficulty": 1,
        "tags": [
          "starter",
          "vocabulary"
        ]
      },
      {
        "id": "ja-b2",
        "type": "matching",
        "prompt": "Ghép từ/cụm từ với nghĩa phù hợp.",
        "answers": [
          "こんにちは=Xin chào",
          "ありがとう=Cảm ơn",
          "学校=trường học"
        ],
        "pairs": [
          {
            "left": "こんにちは",
            "right": "Xin chào"
          },
          {
            "left": "ありがとう",
            "right": "Cảm ơn"
          },
          {
            "left": "学校",
            "right": "trường học"
          }
        ],
        "difficulty": 2,
        "tags": [
          "vocabulary",
          "matching"
        ]
      },
      {
        "id": "ja-b3",
        "type": "typed",
        "prompt": "Gõ lại cụm từ: ありがとう",
        "answers": [
          "ありがとう"
        ],
        "difficulty": 2,
        "tags": [
          "spelling"
        ]
      },
      {
        "id": "ja-b4",
        "type": "translation",
        "prompt": "Dịch sang tiếng Việt: “学校”.",
        "answers": [
          "trường học"
        ],
        "difficulty": 2,
        "tags": [
          "translation"
        ]
      },
      {
        "id": "ja-b5",
        "type": "dialogue",
        "prompt": "Trong một cuộc trò chuyện lịch sự, bạn nên chọn phản hồi nào?",
        "options": [
          "Cảm ơn và xác nhận thông tin",
          "Bỏ đi mà không trả lời",
          "Trả lời bằng một từ không liên quan",
          "Gửi nội dung trống"
        ],
        "answers": [
          "Cảm ơn và xác nhận thông tin"
        ],
        "difficulty": 2,
        "tags": [
          "dialogue",
          "pragmatics"
        ]
      },
      {
        "id": "ja-b6",
        "type": "scenario_decision",
        "prompt": "Bạn nhận được yêu cầu gấp nhưng chưa rõ deadline. Hành động tốt nhất là gì?",
        "options": [
          "Hỏi lại deadline và xác nhận ưu tiên",
          "Im lặng chờ",
          "Đoán deadline",
          "Từ chối ngay"
        ],
        "answers": [
          "Hỏi lại deadline và xác nhận ưu tiên"
        ],
        "difficulty": 3,
        "tags": [
          "workplace",
          "scenario"
        ]
      },
      {
        "id": "ja-b7",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý một nhiệm vụ.",
        "options": [
          "Xác nhận yêu cầu",
          "Lập kế hoạch",
          "Thực hiện",
          "Báo cáo kết quả"
        ],
        "answers": [
          "Xác nhận yêu cầu Lập kế hoạch Thực hiện Báo cáo kết quả"
        ],
        "difficulty": 3,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "ja-b8",
        "type": "true_false",
        "prompt": "Trong giao tiếp chuyên nghiệp, xác nhận lại thông tin quan trọng giúp giảm hiểu nhầm.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 2,
        "tags": [
          "professional"
        ]
      }
    ]
  },
  {
    "id": "official-ja-professional",
    "title": "日本語 — Real-life & Professional Scenarios",
    "language": "ja",
    "level": "Starter–N4",
    "topic": "Workplace & Real Life",
    "context": "Daily Life & School",
    "skill": "Advanced Mixed",
    "description": "Tình huống thực tế 日本語: nghe, email, deadline, khách hàng, lớp học và ra quyết định.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ja-a1",
        "type": "audio_choice",
        "prompt": "Nghe thông báo và chọn ý chính phù hợp nhất.",
        "options": [
          "Thông báo về lịch hoặc nhiệm vụ",
          "Một câu chuyện cổ tích",
          "Mô tả thời tiết",
          "Quảng cáo trò chơi"
        ],
        "answers": [
          "Thông báo về lịch hoặc nhiệm vụ"
        ],
        "mediaType": "audio",
        "ttsText": "会議",
        "ttsLang": "ja-JP",
        "transcript": "会議",
        "maxPlays": 3,
        "playbackRate": 1,
        "difficulty": 3,
        "tags": [
          "listening",
          "workplace"
        ]
      },
      {
        "id": "ja-a2",
        "type": "listening_input",
        "prompt": "Nghe lại và gõ từ/cụm trọng tâm bạn nghe được.",
        "answers": [
          "会議",
          "学校"
        ],
        "mediaType": "audio",
        "ttsText": "会議",
        "ttsLang": "ja-JP",
        "transcript": "会議",
        "maxPlays": 5,
        "difficulty": 3,
        "tags": [
          "listening",
          "dictation"
        ]
      },
      {
        "id": "ja-a3",
        "type": "error_correction",
        "prompt": "Bạn đang viết email chuyên nghiệp. Hãy chọn câu phù hợp nhất.",
        "options": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin.",
          "Ê nhận được chưa?",
          "Không trả lời cũng được.",
          "Tôi gửi đại thôi."
        ],
        "answers": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "email",
          "register"
        ]
      },
      {
        "id": "ja-a4",
        "type": "scenario_decision",
        "prompt": "Bạn phát hiện báo cáo có lỗi ngay trước cuộc họp. Bạn nên làm gì?",
        "options": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật",
          "Giấu lỗi",
          "Xóa file",
          "Đợi người khác phát hiện"
        ],
        "answers": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "workplace",
          "problem-solving"
        ]
      },
      {
        "id": "ja-a5",
        "type": "dialogue",
        "prompt": "Khách hàng phàn nàn vì giao hàng trễ. Phản hồi nào chuyên nghiệp nhất?",
        "options": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể.",
          "Không phải việc của tôi.",
          "Chờ đi.",
          "Bạn tự kiểm tra nhé."
        ],
        "answers": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể."
        ],
        "difficulty": 4,
        "tags": [
          "customer-service"
        ]
      },
      {
        "id": "ja-a6",
        "type": "transformation",
        "prompt": "Viết lại yêu cầu theo phong cách lịch sự/chuyên nghiệp.",
        "answers": [
          "Vui lòng gửi tài liệu trước cuộc họp.",
          "Xin vui lòng gửi tài liệu trước cuộc họp."
        ],
        "difficulty": 4,
        "tags": [
          "formal",
          "writing"
        ]
      },
      {
        "id": "ja-a7",
        "type": "cloze",
        "prompt": "Hoàn thành quy trình: Nhận yêu cầu → xác nhận ___ → thực hiện → kiểm tra → báo cáo.",
        "options": [
          "mục tiêu và thời hạn",
          "màu sắc",
          "thời tiết",
          "sở thích"
        ],
        "answers": [
          "mục tiêu và thời hạn"
        ],
        "difficulty": 4,
        "tags": [
          "workflow",
          "professional"
        ]
      },
      {
        "id": "ja-a8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là TNV phụ trách lớp học và cần báo việc đổi phòng. Chọn thông điệp rõ ràng nhất.",
        "options": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ.",
          "Chỉ gửi “đổi phòng nha”.",
          "Không cần thông báo.",
          "Gửi sau khi buổi học kết thúc."
        ],
        "answers": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ."
        ],
        "difficulty": 5,
        "tags": [
          "school-workplace",
          "roleplay"
        ]
      }
    ]
  },
  {
    "id": "official-ko-foundation",
    "title": "한국어 — Foundation & Everyday",
    "language": "ko",
    "level": "Starter",
    "topic": "Everyday Communication",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Bộ bài nền tảng 한국어: từ vựng, hội thoại, dịch và xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ko-b1",
        "type": "multiple_choice",
        "prompt": "Chọn nghĩa phù hợp của “안녕하세요”.",
        "options": [
          "Xin chào",
          "Cảm ơn",
          "trường học",
          "cuộc họp"
        ],
        "answers": [
          "Xin chào"
        ],
        "explanation": "안녕하세요 → Xin chào.",
        "difficulty": 1,
        "tags": [
          "starter",
          "vocabulary"
        ]
      },
      {
        "id": "ko-b2",
        "type": "matching",
        "prompt": "Ghép từ/cụm từ với nghĩa phù hợp.",
        "answers": [
          "안녕하세요=Xin chào",
          "감사합니다=Cảm ơn",
          "학교=trường học"
        ],
        "pairs": [
          {
            "left": "안녕하세요",
            "right": "Xin chào"
          },
          {
            "left": "감사합니다",
            "right": "Cảm ơn"
          },
          {
            "left": "학교",
            "right": "trường học"
          }
        ],
        "difficulty": 2,
        "tags": [
          "vocabulary",
          "matching"
        ]
      },
      {
        "id": "ko-b3",
        "type": "typed",
        "prompt": "Gõ lại cụm từ: 감사합니다",
        "answers": [
          "감사합니다"
        ],
        "difficulty": 2,
        "tags": [
          "spelling"
        ]
      },
      {
        "id": "ko-b4",
        "type": "translation",
        "prompt": "Dịch sang tiếng Việt: “학교”.",
        "answers": [
          "trường học"
        ],
        "difficulty": 2,
        "tags": [
          "translation"
        ]
      },
      {
        "id": "ko-b5",
        "type": "dialogue",
        "prompt": "Trong một cuộc trò chuyện lịch sự, bạn nên chọn phản hồi nào?",
        "options": [
          "Cảm ơn và xác nhận thông tin",
          "Bỏ đi mà không trả lời",
          "Trả lời bằng một từ không liên quan",
          "Gửi nội dung trống"
        ],
        "answers": [
          "Cảm ơn và xác nhận thông tin"
        ],
        "difficulty": 2,
        "tags": [
          "dialogue",
          "pragmatics"
        ]
      },
      {
        "id": "ko-b6",
        "type": "scenario_decision",
        "prompt": "Bạn nhận được yêu cầu gấp nhưng chưa rõ deadline. Hành động tốt nhất là gì?",
        "options": [
          "Hỏi lại deadline và xác nhận ưu tiên",
          "Im lặng chờ",
          "Đoán deadline",
          "Từ chối ngay"
        ],
        "answers": [
          "Hỏi lại deadline và xác nhận ưu tiên"
        ],
        "difficulty": 3,
        "tags": [
          "workplace",
          "scenario"
        ]
      },
      {
        "id": "ko-b7",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý một nhiệm vụ.",
        "options": [
          "Xác nhận yêu cầu",
          "Lập kế hoạch",
          "Thực hiện",
          "Báo cáo kết quả"
        ],
        "answers": [
          "Xác nhận yêu cầu Lập kế hoạch Thực hiện Báo cáo kết quả"
        ],
        "difficulty": 3,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "ko-b8",
        "type": "true_false",
        "prompt": "Trong giao tiếp chuyên nghiệp, xác nhận lại thông tin quan trọng giúp giảm hiểu nhầm.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 2,
        "tags": [
          "professional"
        ]
      }
    ]
  },
  {
    "id": "official-ko-professional",
    "title": "한국어 — Real-life & Professional Scenarios",
    "language": "ko",
    "level": "Starter–TOPIK I",
    "topic": "Workplace & Real Life",
    "context": "Daily Life & School",
    "skill": "Advanced Mixed",
    "description": "Tình huống thực tế 한국어: nghe, email, deadline, khách hàng, lớp học và ra quyết định.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ko-a1",
        "type": "audio_choice",
        "prompt": "Nghe thông báo và chọn ý chính phù hợp nhất.",
        "options": [
          "Thông báo về lịch hoặc nhiệm vụ",
          "Một câu chuyện cổ tích",
          "Mô tả thời tiết",
          "Quảng cáo trò chơi"
        ],
        "answers": [
          "Thông báo về lịch hoặc nhiệm vụ"
        ],
        "mediaType": "audio",
        "ttsText": "회의",
        "ttsLang": "ko-KR",
        "transcript": "회의",
        "maxPlays": 3,
        "playbackRate": 1,
        "difficulty": 3,
        "tags": [
          "listening",
          "workplace"
        ]
      },
      {
        "id": "ko-a2",
        "type": "listening_input",
        "prompt": "Nghe lại và gõ từ/cụm trọng tâm bạn nghe được.",
        "answers": [
          "회의",
          "학교"
        ],
        "mediaType": "audio",
        "ttsText": "회의",
        "ttsLang": "ko-KR",
        "transcript": "회의",
        "maxPlays": 5,
        "difficulty": 3,
        "tags": [
          "listening",
          "dictation"
        ]
      },
      {
        "id": "ko-a3",
        "type": "error_correction",
        "prompt": "Bạn đang viết email chuyên nghiệp. Hãy chọn câu phù hợp nhất.",
        "options": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin.",
          "Ê nhận được chưa?",
          "Không trả lời cũng được.",
          "Tôi gửi đại thôi."
        ],
        "answers": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "email",
          "register"
        ]
      },
      {
        "id": "ko-a4",
        "type": "scenario_decision",
        "prompt": "Bạn phát hiện báo cáo có lỗi ngay trước cuộc họp. Bạn nên làm gì?",
        "options": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật",
          "Giấu lỗi",
          "Xóa file",
          "Đợi người khác phát hiện"
        ],
        "answers": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "workplace",
          "problem-solving"
        ]
      },
      {
        "id": "ko-a5",
        "type": "dialogue",
        "prompt": "Khách hàng phàn nàn vì giao hàng trễ. Phản hồi nào chuyên nghiệp nhất?",
        "options": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể.",
          "Không phải việc của tôi.",
          "Chờ đi.",
          "Bạn tự kiểm tra nhé."
        ],
        "answers": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể."
        ],
        "difficulty": 4,
        "tags": [
          "customer-service"
        ]
      },
      {
        "id": "ko-a6",
        "type": "transformation",
        "prompt": "Viết lại yêu cầu theo phong cách lịch sự/chuyên nghiệp.",
        "answers": [
          "Vui lòng gửi tài liệu trước cuộc họp.",
          "Xin vui lòng gửi tài liệu trước cuộc họp."
        ],
        "difficulty": 4,
        "tags": [
          "formal",
          "writing"
        ]
      },
      {
        "id": "ko-a7",
        "type": "cloze",
        "prompt": "Hoàn thành quy trình: Nhận yêu cầu → xác nhận ___ → thực hiện → kiểm tra → báo cáo.",
        "options": [
          "mục tiêu và thời hạn",
          "màu sắc",
          "thời tiết",
          "sở thích"
        ],
        "answers": [
          "mục tiêu và thời hạn"
        ],
        "difficulty": 4,
        "tags": [
          "workflow",
          "professional"
        ]
      },
      {
        "id": "ko-a8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là TNV phụ trách lớp học và cần báo việc đổi phòng. Chọn thông điệp rõ ràng nhất.",
        "options": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ.",
          "Chỉ gửi “đổi phòng nha”.",
          "Không cần thông báo.",
          "Gửi sau khi buổi học kết thúc."
        ],
        "answers": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ."
        ],
        "difficulty": 5,
        "tags": [
          "school-workplace",
          "roleplay"
        ]
      }
    ]
  },
  {
    "id": "official-fr-foundation",
    "title": "Français — Foundation & Everyday",
    "language": "fr",
    "level": "A1",
    "topic": "Everyday Communication",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Bộ bài nền tảng Français: từ vựng, hội thoại, dịch và xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "fr-b1",
        "type": "multiple_choice",
        "prompt": "Chọn nghĩa phù hợp của “Bonjour”.",
        "options": [
          "Xin chào",
          "Cảm ơn",
          "cuộc họp",
          "tàu hỏa"
        ],
        "answers": [
          "Xin chào"
        ],
        "explanation": "Bonjour → Xin chào.",
        "difficulty": 1,
        "tags": [
          "starter",
          "vocabulary"
        ]
      },
      {
        "id": "fr-b2",
        "type": "matching",
        "prompt": "Ghép từ/cụm từ với nghĩa phù hợp.",
        "answers": [
          "Bonjour=Xin chào",
          "Merci=Cảm ơn",
          "la réunion=cuộc họp"
        ],
        "pairs": [
          {
            "left": "Bonjour",
            "right": "Xin chào"
          },
          {
            "left": "Merci",
            "right": "Cảm ơn"
          },
          {
            "left": "la réunion",
            "right": "cuộc họp"
          }
        ],
        "difficulty": 2,
        "tags": [
          "vocabulary",
          "matching"
        ]
      },
      {
        "id": "fr-b3",
        "type": "typed",
        "prompt": "Gõ lại cụm từ: Merci",
        "answers": [
          "Merci"
        ],
        "difficulty": 2,
        "tags": [
          "spelling"
        ]
      },
      {
        "id": "fr-b4",
        "type": "translation",
        "prompt": "Dịch sang tiếng Việt: “la réunion”.",
        "answers": [
          "cuộc họp"
        ],
        "difficulty": 2,
        "tags": [
          "translation"
        ]
      },
      {
        "id": "fr-b5",
        "type": "dialogue",
        "prompt": "Trong một cuộc trò chuyện lịch sự, bạn nên chọn phản hồi nào?",
        "options": [
          "Cảm ơn và xác nhận thông tin",
          "Bỏ đi mà không trả lời",
          "Trả lời bằng một từ không liên quan",
          "Gửi nội dung trống"
        ],
        "answers": [
          "Cảm ơn và xác nhận thông tin"
        ],
        "difficulty": 2,
        "tags": [
          "dialogue",
          "pragmatics"
        ]
      },
      {
        "id": "fr-b6",
        "type": "scenario_decision",
        "prompt": "Bạn nhận được yêu cầu gấp nhưng chưa rõ deadline. Hành động tốt nhất là gì?",
        "options": [
          "Hỏi lại deadline và xác nhận ưu tiên",
          "Im lặng chờ",
          "Đoán deadline",
          "Từ chối ngay"
        ],
        "answers": [
          "Hỏi lại deadline và xác nhận ưu tiên"
        ],
        "difficulty": 3,
        "tags": [
          "workplace",
          "scenario"
        ]
      },
      {
        "id": "fr-b7",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý một nhiệm vụ.",
        "options": [
          "Xác nhận yêu cầu",
          "Lập kế hoạch",
          "Thực hiện",
          "Báo cáo kết quả"
        ],
        "answers": [
          "Xác nhận yêu cầu Lập kế hoạch Thực hiện Báo cáo kết quả"
        ],
        "difficulty": 3,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "fr-b8",
        "type": "true_false",
        "prompt": "Trong giao tiếp chuyên nghiệp, xác nhận lại thông tin quan trọng giúp giảm hiểu nhầm.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 2,
        "tags": [
          "professional"
        ]
      }
    ]
  },
  {
    "id": "official-fr-professional",
    "title": "Français — Real-life & Professional Scenarios",
    "language": "fr",
    "level": "A1–B1",
    "topic": "Workplace & Real Life",
    "context": "Travel & Workplace",
    "skill": "Advanced Mixed",
    "description": "Tình huống thực tế Français: nghe, email, deadline, khách hàng, lớp học và ra quyết định.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "fr-a1",
        "type": "audio_choice",
        "prompt": "Nghe thông báo và chọn ý chính phù hợp nhất.",
        "options": [
          "Thông báo về lịch hoặc nhiệm vụ",
          "Một câu chuyện cổ tích",
          "Mô tả thời tiết",
          "Quảng cáo trò chơi"
        ],
        "answers": [
          "Thông báo về lịch hoặc nhiệm vụ"
        ],
        "mediaUrl": "/audio/fr-travel.wav",
        "mediaType": "audio",
        "ttsText": "le train",
        "ttsLang": "fr-FR",
        "transcript": "le train",
        "maxPlays": 3,
        "playbackRate": 1,
        "difficulty": 3,
        "tags": [
          "listening",
          "workplace"
        ]
      },
      {
        "id": "fr-a2",
        "type": "listening_input",
        "prompt": "Nghe lại và gõ từ/cụm trọng tâm bạn nghe được.",
        "answers": [
          "le train",
          "la réunion"
        ],
        "mediaUrl": "/audio/fr-travel.wav",
        "mediaType": "audio",
        "ttsText": "le train",
        "ttsLang": "fr-FR",
        "transcript": "le train",
        "maxPlays": 5,
        "difficulty": 3,
        "tags": [
          "listening",
          "dictation"
        ]
      },
      {
        "id": "fr-a3",
        "type": "error_correction",
        "prompt": "Bạn đang viết email chuyên nghiệp. Hãy chọn câu phù hợp nhất.",
        "options": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin.",
          "Ê nhận được chưa?",
          "Không trả lời cũng được.",
          "Tôi gửi đại thôi."
        ],
        "answers": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "email",
          "register"
        ]
      },
      {
        "id": "fr-a4",
        "type": "scenario_decision",
        "prompt": "Bạn phát hiện báo cáo có lỗi ngay trước cuộc họp. Bạn nên làm gì?",
        "options": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật",
          "Giấu lỗi",
          "Xóa file",
          "Đợi người khác phát hiện"
        ],
        "answers": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "workplace",
          "problem-solving"
        ]
      },
      {
        "id": "fr-a5",
        "type": "dialogue",
        "prompt": "Khách hàng phàn nàn vì giao hàng trễ. Phản hồi nào chuyên nghiệp nhất?",
        "options": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể.",
          "Không phải việc của tôi.",
          "Chờ đi.",
          "Bạn tự kiểm tra nhé."
        ],
        "answers": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể."
        ],
        "difficulty": 4,
        "tags": [
          "customer-service"
        ]
      },
      {
        "id": "fr-a6",
        "type": "transformation",
        "prompt": "Viết lại yêu cầu theo phong cách lịch sự/chuyên nghiệp.",
        "answers": [
          "Vui lòng gửi tài liệu trước cuộc họp.",
          "Xin vui lòng gửi tài liệu trước cuộc họp."
        ],
        "difficulty": 4,
        "tags": [
          "formal",
          "writing"
        ]
      },
      {
        "id": "fr-a7",
        "type": "cloze",
        "prompt": "Hoàn thành quy trình: Nhận yêu cầu → xác nhận ___ → thực hiện → kiểm tra → báo cáo.",
        "options": [
          "mục tiêu và thời hạn",
          "màu sắc",
          "thời tiết",
          "sở thích"
        ],
        "answers": [
          "mục tiêu và thời hạn"
        ],
        "difficulty": 4,
        "tags": [
          "workflow",
          "professional"
        ]
      },
      {
        "id": "fr-a8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là TNV phụ trách lớp học và cần báo việc đổi phòng. Chọn thông điệp rõ ràng nhất.",
        "options": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ.",
          "Chỉ gửi “đổi phòng nha”.",
          "Không cần thông báo.",
          "Gửi sau khi buổi học kết thúc."
        ],
        "answers": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ."
        ],
        "difficulty": 5,
        "tags": [
          "school-workplace",
          "roleplay"
        ]
      }
    ]
  },
  {
    "id": "official-de-foundation",
    "title": "Deutsch — Foundation & Everyday",
    "language": "de",
    "level": "A1",
    "topic": "Everyday Communication",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Bộ bài nền tảng Deutsch: từ vựng, hội thoại, dịch và xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "de-b1",
        "type": "multiple_choice",
        "prompt": "Chọn nghĩa phù hợp của “Guten Morgen”.",
        "options": [
          "Chào buổi sáng",
          "Cảm ơn",
          "cuộc họp",
          "báo cáo"
        ],
        "answers": [
          "Chào buổi sáng"
        ],
        "explanation": "Guten Morgen → Chào buổi sáng.",
        "difficulty": 1,
        "tags": [
          "starter",
          "vocabulary"
        ]
      },
      {
        "id": "de-b2",
        "type": "matching",
        "prompt": "Ghép từ/cụm từ với nghĩa phù hợp.",
        "answers": [
          "Guten Morgen=Chào buổi sáng",
          "Danke=Cảm ơn",
          "die Besprechung=cuộc họp"
        ],
        "pairs": [
          {
            "left": "Guten Morgen",
            "right": "Chào buổi sáng"
          },
          {
            "left": "Danke",
            "right": "Cảm ơn"
          },
          {
            "left": "die Besprechung",
            "right": "cuộc họp"
          }
        ],
        "difficulty": 2,
        "tags": [
          "vocabulary",
          "matching"
        ]
      },
      {
        "id": "de-b3",
        "type": "typed",
        "prompt": "Gõ lại cụm từ: Danke",
        "answers": [
          "Danke"
        ],
        "difficulty": 2,
        "tags": [
          "spelling"
        ]
      },
      {
        "id": "de-b4",
        "type": "translation",
        "prompt": "Dịch sang tiếng Việt: “die Besprechung”.",
        "answers": [
          "cuộc họp"
        ],
        "difficulty": 2,
        "tags": [
          "translation"
        ]
      },
      {
        "id": "de-b5",
        "type": "dialogue",
        "prompt": "Trong một cuộc trò chuyện lịch sự, bạn nên chọn phản hồi nào?",
        "options": [
          "Cảm ơn và xác nhận thông tin",
          "Bỏ đi mà không trả lời",
          "Trả lời bằng một từ không liên quan",
          "Gửi nội dung trống"
        ],
        "answers": [
          "Cảm ơn và xác nhận thông tin"
        ],
        "difficulty": 2,
        "tags": [
          "dialogue",
          "pragmatics"
        ]
      },
      {
        "id": "de-b6",
        "type": "scenario_decision",
        "prompt": "Bạn nhận được yêu cầu gấp nhưng chưa rõ deadline. Hành động tốt nhất là gì?",
        "options": [
          "Hỏi lại deadline và xác nhận ưu tiên",
          "Im lặng chờ",
          "Đoán deadline",
          "Từ chối ngay"
        ],
        "answers": [
          "Hỏi lại deadline và xác nhận ưu tiên"
        ],
        "difficulty": 3,
        "tags": [
          "workplace",
          "scenario"
        ]
      },
      {
        "id": "de-b7",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý một nhiệm vụ.",
        "options": [
          "Xác nhận yêu cầu",
          "Lập kế hoạch",
          "Thực hiện",
          "Báo cáo kết quả"
        ],
        "answers": [
          "Xác nhận yêu cầu Lập kế hoạch Thực hiện Báo cáo kết quả"
        ],
        "difficulty": 3,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "de-b8",
        "type": "true_false",
        "prompt": "Trong giao tiếp chuyên nghiệp, xác nhận lại thông tin quan trọng giúp giảm hiểu nhầm.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 2,
        "tags": [
          "professional"
        ]
      }
    ]
  },
  {
    "id": "official-de-professional",
    "title": "Deutsch — Real-life & Professional Scenarios",
    "language": "de",
    "level": "A1–B1",
    "topic": "Workplace & Real Life",
    "context": "Workplace & Daily Life",
    "skill": "Advanced Mixed",
    "description": "Tình huống thực tế Deutsch: nghe, email, deadline, khách hàng, lớp học và ra quyết định.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "de-a1",
        "type": "audio_choice",
        "prompt": "Nghe thông báo và chọn ý chính phù hợp nhất.",
        "options": [
          "Thông báo về lịch hoặc nhiệm vụ",
          "Một câu chuyện cổ tích",
          "Mô tả thời tiết",
          "Quảng cáo trò chơi"
        ],
        "answers": [
          "Thông báo về lịch hoặc nhiệm vụ"
        ],
        "mediaUrl": "/audio/de-office.wav",
        "mediaType": "audio",
        "ttsText": "der Bericht",
        "ttsLang": "de-DE",
        "transcript": "der Bericht",
        "maxPlays": 3,
        "playbackRate": 1,
        "difficulty": 3,
        "tags": [
          "listening",
          "workplace"
        ]
      },
      {
        "id": "de-a2",
        "type": "listening_input",
        "prompt": "Nghe lại và gõ từ/cụm trọng tâm bạn nghe được.",
        "answers": [
          "der Bericht",
          "die Besprechung"
        ],
        "mediaUrl": "/audio/de-office.wav",
        "mediaType": "audio",
        "ttsText": "der Bericht",
        "ttsLang": "de-DE",
        "transcript": "der Bericht",
        "maxPlays": 5,
        "difficulty": 3,
        "tags": [
          "listening",
          "dictation"
        ]
      },
      {
        "id": "de-a3",
        "type": "error_correction",
        "prompt": "Bạn đang viết email chuyên nghiệp. Hãy chọn câu phù hợp nhất.",
        "options": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin.",
          "Ê nhận được chưa?",
          "Không trả lời cũng được.",
          "Tôi gửi đại thôi."
        ],
        "answers": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "email",
          "register"
        ]
      },
      {
        "id": "de-a4",
        "type": "scenario_decision",
        "prompt": "Bạn phát hiện báo cáo có lỗi ngay trước cuộc họp. Bạn nên làm gì?",
        "options": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật",
          "Giấu lỗi",
          "Xóa file",
          "Đợi người khác phát hiện"
        ],
        "answers": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "workplace",
          "problem-solving"
        ]
      },
      {
        "id": "de-a5",
        "type": "dialogue",
        "prompt": "Khách hàng phàn nàn vì giao hàng trễ. Phản hồi nào chuyên nghiệp nhất?",
        "options": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể.",
          "Không phải việc của tôi.",
          "Chờ đi.",
          "Bạn tự kiểm tra nhé."
        ],
        "answers": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể."
        ],
        "difficulty": 4,
        "tags": [
          "customer-service"
        ]
      },
      {
        "id": "de-a6",
        "type": "transformation",
        "prompt": "Viết lại yêu cầu theo phong cách lịch sự/chuyên nghiệp.",
        "answers": [
          "Vui lòng gửi tài liệu trước cuộc họp.",
          "Xin vui lòng gửi tài liệu trước cuộc họp."
        ],
        "difficulty": 4,
        "tags": [
          "formal",
          "writing"
        ]
      },
      {
        "id": "de-a7",
        "type": "cloze",
        "prompt": "Hoàn thành quy trình: Nhận yêu cầu → xác nhận ___ → thực hiện → kiểm tra → báo cáo.",
        "options": [
          "mục tiêu và thời hạn",
          "màu sắc",
          "thời tiết",
          "sở thích"
        ],
        "answers": [
          "mục tiêu và thời hạn"
        ],
        "difficulty": 4,
        "tags": [
          "workflow",
          "professional"
        ]
      },
      {
        "id": "de-a8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là TNV phụ trách lớp học và cần báo việc đổi phòng. Chọn thông điệp rõ ràng nhất.",
        "options": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ.",
          "Chỉ gửi “đổi phòng nha”.",
          "Không cần thông báo.",
          "Gửi sau khi buổi học kết thúc."
        ],
        "answers": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ."
        ],
        "difficulty": 5,
        "tags": [
          "school-workplace",
          "roleplay"
        ]
      }
    ]
  },
  {
    "id": "official-es-foundation",
    "title": "Español — Foundation & Everyday",
    "language": "es",
    "level": "A1",
    "topic": "Everyday Communication",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Bộ bài nền tảng Español: từ vựng, hội thoại, dịch và xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "es-b1",
        "type": "multiple_choice",
        "prompt": "Chọn nghĩa phù hợp của “Buenos días”.",
        "options": [
          "Chào buổi sáng",
          "Cảm ơn",
          "phòng",
          "cuộc họp"
        ],
        "answers": [
          "Chào buổi sáng"
        ],
        "explanation": "Buenos días → Chào buổi sáng.",
        "difficulty": 1,
        "tags": [
          "starter",
          "vocabulary"
        ]
      },
      {
        "id": "es-b2",
        "type": "matching",
        "prompt": "Ghép từ/cụm từ với nghĩa phù hợp.",
        "answers": [
          "Buenos días=Chào buổi sáng",
          "Gracias=Cảm ơn",
          "la habitación=phòng"
        ],
        "pairs": [
          {
            "left": "Buenos días",
            "right": "Chào buổi sáng"
          },
          {
            "left": "Gracias",
            "right": "Cảm ơn"
          },
          {
            "left": "la habitación",
            "right": "phòng"
          }
        ],
        "difficulty": 2,
        "tags": [
          "vocabulary",
          "matching"
        ]
      },
      {
        "id": "es-b3",
        "type": "typed",
        "prompt": "Gõ lại cụm từ: Gracias",
        "answers": [
          "Gracias"
        ],
        "difficulty": 2,
        "tags": [
          "spelling"
        ]
      },
      {
        "id": "es-b4",
        "type": "translation",
        "prompt": "Dịch sang tiếng Việt: “la habitación”.",
        "answers": [
          "phòng"
        ],
        "difficulty": 2,
        "tags": [
          "translation"
        ]
      },
      {
        "id": "es-b5",
        "type": "dialogue",
        "prompt": "Trong một cuộc trò chuyện lịch sự, bạn nên chọn phản hồi nào?",
        "options": [
          "Cảm ơn và xác nhận thông tin",
          "Bỏ đi mà không trả lời",
          "Trả lời bằng một từ không liên quan",
          "Gửi nội dung trống"
        ],
        "answers": [
          "Cảm ơn và xác nhận thông tin"
        ],
        "difficulty": 2,
        "tags": [
          "dialogue",
          "pragmatics"
        ]
      },
      {
        "id": "es-b6",
        "type": "scenario_decision",
        "prompt": "Bạn nhận được yêu cầu gấp nhưng chưa rõ deadline. Hành động tốt nhất là gì?",
        "options": [
          "Hỏi lại deadline và xác nhận ưu tiên",
          "Im lặng chờ",
          "Đoán deadline",
          "Từ chối ngay"
        ],
        "answers": [
          "Hỏi lại deadline và xác nhận ưu tiên"
        ],
        "difficulty": 3,
        "tags": [
          "workplace",
          "scenario"
        ]
      },
      {
        "id": "es-b7",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý một nhiệm vụ.",
        "options": [
          "Xác nhận yêu cầu",
          "Lập kế hoạch",
          "Thực hiện",
          "Báo cáo kết quả"
        ],
        "answers": [
          "Xác nhận yêu cầu Lập kế hoạch Thực hiện Báo cáo kết quả"
        ],
        "difficulty": 3,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "es-b8",
        "type": "true_false",
        "prompt": "Trong giao tiếp chuyên nghiệp, xác nhận lại thông tin quan trọng giúp giảm hiểu nhầm.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 2,
        "tags": [
          "professional"
        ]
      }
    ]
  },
  {
    "id": "official-es-professional",
    "title": "Español — Real-life & Professional Scenarios",
    "language": "es",
    "level": "A1–B1",
    "topic": "Workplace & Real Life",
    "context": "Travel & Service",
    "skill": "Advanced Mixed",
    "description": "Tình huống thực tế Español: nghe, email, deadline, khách hàng, lớp học và ra quyết định.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "es-a1",
        "type": "audio_choice",
        "prompt": "Nghe thông báo và chọn ý chính phù hợp nhất.",
        "options": [
          "Thông báo về lịch hoặc nhiệm vụ",
          "Một câu chuyện cổ tích",
          "Mô tả thời tiết",
          "Quảng cáo trò chơi"
        ],
        "answers": [
          "Thông báo về lịch hoặc nhiệm vụ"
        ],
        "mediaUrl": "/audio/es-hotel.wav",
        "mediaType": "audio",
        "ttsText": "la reunión",
        "ttsLang": "es-ES",
        "transcript": "la reunión",
        "maxPlays": 3,
        "playbackRate": 1,
        "difficulty": 3,
        "tags": [
          "listening",
          "workplace"
        ]
      },
      {
        "id": "es-a2",
        "type": "listening_input",
        "prompt": "Nghe lại và gõ từ/cụm trọng tâm bạn nghe được.",
        "answers": [
          "la reunión",
          "la habitación"
        ],
        "mediaUrl": "/audio/es-hotel.wav",
        "mediaType": "audio",
        "ttsText": "la reunión",
        "ttsLang": "es-ES",
        "transcript": "la reunión",
        "maxPlays": 5,
        "difficulty": 3,
        "tags": [
          "listening",
          "dictation"
        ]
      },
      {
        "id": "es-a3",
        "type": "error_correction",
        "prompt": "Bạn đang viết email chuyên nghiệp. Hãy chọn câu phù hợp nhất.",
        "options": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin.",
          "Ê nhận được chưa?",
          "Không trả lời cũng được.",
          "Tôi gửi đại thôi."
        ],
        "answers": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "email",
          "register"
        ]
      },
      {
        "id": "es-a4",
        "type": "scenario_decision",
        "prompt": "Bạn phát hiện báo cáo có lỗi ngay trước cuộc họp. Bạn nên làm gì?",
        "options": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật",
          "Giấu lỗi",
          "Xóa file",
          "Đợi người khác phát hiện"
        ],
        "answers": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "workplace",
          "problem-solving"
        ]
      },
      {
        "id": "es-a5",
        "type": "dialogue",
        "prompt": "Khách hàng phàn nàn vì giao hàng trễ. Phản hồi nào chuyên nghiệp nhất?",
        "options": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể.",
          "Không phải việc của tôi.",
          "Chờ đi.",
          "Bạn tự kiểm tra nhé."
        ],
        "answers": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể."
        ],
        "difficulty": 4,
        "tags": [
          "customer-service"
        ]
      },
      {
        "id": "es-a6",
        "type": "transformation",
        "prompt": "Viết lại yêu cầu theo phong cách lịch sự/chuyên nghiệp.",
        "answers": [
          "Vui lòng gửi tài liệu trước cuộc họp.",
          "Xin vui lòng gửi tài liệu trước cuộc họp."
        ],
        "difficulty": 4,
        "tags": [
          "formal",
          "writing"
        ]
      },
      {
        "id": "es-a7",
        "type": "cloze",
        "prompt": "Hoàn thành quy trình: Nhận yêu cầu → xác nhận ___ → thực hiện → kiểm tra → báo cáo.",
        "options": [
          "mục tiêu và thời hạn",
          "màu sắc",
          "thời tiết",
          "sở thích"
        ],
        "answers": [
          "mục tiêu và thời hạn"
        ],
        "difficulty": 4,
        "tags": [
          "workflow",
          "professional"
        ]
      },
      {
        "id": "es-a8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là TNV phụ trách lớp học và cần báo việc đổi phòng. Chọn thông điệp rõ ràng nhất.",
        "options": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ.",
          "Chỉ gửi “đổi phòng nha”.",
          "Không cần thông báo.",
          "Gửi sau khi buổi học kết thúc."
        ],
        "answers": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ."
        ],
        "difficulty": 5,
        "tags": [
          "school-workplace",
          "roleplay"
        ]
      }
    ]
  },
  {
    "id": "official-it-foundation",
    "title": "Italiano — Foundation & Everyday",
    "language": "it",
    "level": "A1",
    "topic": "Everyday Communication",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Bộ bài nền tảng Italiano: từ vựng, hội thoại, dịch và xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "it-b1",
        "type": "multiple_choice",
        "prompt": "Chọn nghĩa phù hợp của “Buongiorno”.",
        "options": [
          "Chào buổi sáng",
          "Cảm ơn",
          "cà phê",
          "trường học"
        ],
        "answers": [
          "Chào buổi sáng"
        ],
        "explanation": "Buongiorno → Chào buổi sáng.",
        "difficulty": 1,
        "tags": [
          "starter",
          "vocabulary"
        ]
      },
      {
        "id": "it-b2",
        "type": "matching",
        "prompt": "Ghép từ/cụm từ với nghĩa phù hợp.",
        "answers": [
          "Buongiorno=Chào buổi sáng",
          "Grazie=Cảm ơn",
          "il caffè=cà phê"
        ],
        "pairs": [
          {
            "left": "Buongiorno",
            "right": "Chào buổi sáng"
          },
          {
            "left": "Grazie",
            "right": "Cảm ơn"
          },
          {
            "left": "il caffè",
            "right": "cà phê"
          }
        ],
        "difficulty": 2,
        "tags": [
          "vocabulary",
          "matching"
        ]
      },
      {
        "id": "it-b3",
        "type": "typed",
        "prompt": "Gõ lại cụm từ: Grazie",
        "answers": [
          "Grazie"
        ],
        "difficulty": 2,
        "tags": [
          "spelling"
        ]
      },
      {
        "id": "it-b4",
        "type": "translation",
        "prompt": "Dịch sang tiếng Việt: “il caffè”.",
        "answers": [
          "cà phê"
        ],
        "difficulty": 2,
        "tags": [
          "translation"
        ]
      },
      {
        "id": "it-b5",
        "type": "dialogue",
        "prompt": "Trong một cuộc trò chuyện lịch sự, bạn nên chọn phản hồi nào?",
        "options": [
          "Cảm ơn và xác nhận thông tin",
          "Bỏ đi mà không trả lời",
          "Trả lời bằng một từ không liên quan",
          "Gửi nội dung trống"
        ],
        "answers": [
          "Cảm ơn và xác nhận thông tin"
        ],
        "difficulty": 2,
        "tags": [
          "dialogue",
          "pragmatics"
        ]
      },
      {
        "id": "it-b6",
        "type": "scenario_decision",
        "prompt": "Bạn nhận được yêu cầu gấp nhưng chưa rõ deadline. Hành động tốt nhất là gì?",
        "options": [
          "Hỏi lại deadline và xác nhận ưu tiên",
          "Im lặng chờ",
          "Đoán deadline",
          "Từ chối ngay"
        ],
        "answers": [
          "Hỏi lại deadline và xác nhận ưu tiên"
        ],
        "difficulty": 3,
        "tags": [
          "workplace",
          "scenario"
        ]
      },
      {
        "id": "it-b7",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý một nhiệm vụ.",
        "options": [
          "Xác nhận yêu cầu",
          "Lập kế hoạch",
          "Thực hiện",
          "Báo cáo kết quả"
        ],
        "answers": [
          "Xác nhận yêu cầu Lập kế hoạch Thực hiện Báo cáo kết quả"
        ],
        "difficulty": 3,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "it-b8",
        "type": "true_false",
        "prompt": "Trong giao tiếp chuyên nghiệp, xác nhận lại thông tin quan trọng giúp giảm hiểu nhầm.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 2,
        "tags": [
          "professional"
        ]
      }
    ]
  },
  {
    "id": "official-it-professional",
    "title": "Italiano — Real-life & Professional Scenarios",
    "language": "it",
    "level": "A1–B1",
    "topic": "Workplace & Real Life",
    "context": "Daily Life & Service",
    "skill": "Advanced Mixed",
    "description": "Tình huống thực tế Italiano: nghe, email, deadline, khách hàng, lớp học và ra quyết định.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "it-a1",
        "type": "audio_choice",
        "prompt": "Nghe thông báo và chọn ý chính phù hợp nhất.",
        "options": [
          "Thông báo về lịch hoặc nhiệm vụ",
          "Một câu chuyện cổ tích",
          "Mô tả thời tiết",
          "Quảng cáo trò chơi"
        ],
        "answers": [
          "Thông báo về lịch hoặc nhiệm vụ"
        ],
        "mediaUrl": "/audio/it-cafe.wav",
        "mediaType": "audio",
        "ttsText": "la scuola",
        "ttsLang": "it-IT",
        "transcript": "la scuola",
        "maxPlays": 3,
        "playbackRate": 1,
        "difficulty": 3,
        "tags": [
          "listening",
          "workplace"
        ]
      },
      {
        "id": "it-a2",
        "type": "listening_input",
        "prompt": "Nghe lại và gõ từ/cụm trọng tâm bạn nghe được.",
        "answers": [
          "la scuola",
          "il caffè"
        ],
        "mediaUrl": "/audio/it-cafe.wav",
        "mediaType": "audio",
        "ttsText": "la scuola",
        "ttsLang": "it-IT",
        "transcript": "la scuola",
        "maxPlays": 5,
        "difficulty": 3,
        "tags": [
          "listening",
          "dictation"
        ]
      },
      {
        "id": "it-a3",
        "type": "error_correction",
        "prompt": "Bạn đang viết email chuyên nghiệp. Hãy chọn câu phù hợp nhất.",
        "options": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin.",
          "Ê nhận được chưa?",
          "Không trả lời cũng được.",
          "Tôi gửi đại thôi."
        ],
        "answers": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "email",
          "register"
        ]
      },
      {
        "id": "it-a4",
        "type": "scenario_decision",
        "prompt": "Bạn phát hiện báo cáo có lỗi ngay trước cuộc họp. Bạn nên làm gì?",
        "options": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật",
          "Giấu lỗi",
          "Xóa file",
          "Đợi người khác phát hiện"
        ],
        "answers": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "workplace",
          "problem-solving"
        ]
      },
      {
        "id": "it-a5",
        "type": "dialogue",
        "prompt": "Khách hàng phàn nàn vì giao hàng trễ. Phản hồi nào chuyên nghiệp nhất?",
        "options": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể.",
          "Không phải việc của tôi.",
          "Chờ đi.",
          "Bạn tự kiểm tra nhé."
        ],
        "answers": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể."
        ],
        "difficulty": 4,
        "tags": [
          "customer-service"
        ]
      },
      {
        "id": "it-a6",
        "type": "transformation",
        "prompt": "Viết lại yêu cầu theo phong cách lịch sự/chuyên nghiệp.",
        "answers": [
          "Vui lòng gửi tài liệu trước cuộc họp.",
          "Xin vui lòng gửi tài liệu trước cuộc họp."
        ],
        "difficulty": 4,
        "tags": [
          "formal",
          "writing"
        ]
      },
      {
        "id": "it-a7",
        "type": "cloze",
        "prompt": "Hoàn thành quy trình: Nhận yêu cầu → xác nhận ___ → thực hiện → kiểm tra → báo cáo.",
        "options": [
          "mục tiêu và thời hạn",
          "màu sắc",
          "thời tiết",
          "sở thích"
        ],
        "answers": [
          "mục tiêu và thời hạn"
        ],
        "difficulty": 4,
        "tags": [
          "workflow",
          "professional"
        ]
      },
      {
        "id": "it-a8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là TNV phụ trách lớp học và cần báo việc đổi phòng. Chọn thông điệp rõ ràng nhất.",
        "options": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ.",
          "Chỉ gửi “đổi phòng nha”.",
          "Không cần thông báo.",
          "Gửi sau khi buổi học kết thúc."
        ],
        "answers": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ."
        ],
        "difficulty": 5,
        "tags": [
          "school-workplace",
          "roleplay"
        ]
      }
    ]
  },
  {
    "id": "official-pt-foundation",
    "title": "Português — Foundation & Everyday",
    "language": "pt",
    "level": "A1",
    "topic": "Everyday Communication",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Bộ bài nền tảng Português: từ vựng, hội thoại, dịch và xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "pt-b1",
        "type": "multiple_choice",
        "prompt": "Chọn nghĩa phù hợp của “Bom dia”.",
        "options": [
          "Chào buổi sáng",
          "Cảm ơn",
          "chuyến bay",
          "cuộc họp"
        ],
        "answers": [
          "Chào buổi sáng"
        ],
        "explanation": "Bom dia → Chào buổi sáng.",
        "difficulty": 1,
        "tags": [
          "starter",
          "vocabulary"
        ]
      },
      {
        "id": "pt-b2",
        "type": "matching",
        "prompt": "Ghép từ/cụm từ với nghĩa phù hợp.",
        "answers": [
          "Bom dia=Chào buổi sáng",
          "Obrigado=Cảm ơn",
          "o voo=chuyến bay"
        ],
        "pairs": [
          {
            "left": "Bom dia",
            "right": "Chào buổi sáng"
          },
          {
            "left": "Obrigado",
            "right": "Cảm ơn"
          },
          {
            "left": "o voo",
            "right": "chuyến bay"
          }
        ],
        "difficulty": 2,
        "tags": [
          "vocabulary",
          "matching"
        ]
      },
      {
        "id": "pt-b3",
        "type": "typed",
        "prompt": "Gõ lại cụm từ: Obrigado",
        "answers": [
          "Obrigado"
        ],
        "difficulty": 2,
        "tags": [
          "spelling"
        ]
      },
      {
        "id": "pt-b4",
        "type": "translation",
        "prompt": "Dịch sang tiếng Việt: “o voo”.",
        "answers": [
          "chuyến bay"
        ],
        "difficulty": 2,
        "tags": [
          "translation"
        ]
      },
      {
        "id": "pt-b5",
        "type": "dialogue",
        "prompt": "Trong một cuộc trò chuyện lịch sự, bạn nên chọn phản hồi nào?",
        "options": [
          "Cảm ơn và xác nhận thông tin",
          "Bỏ đi mà không trả lời",
          "Trả lời bằng một từ không liên quan",
          "Gửi nội dung trống"
        ],
        "answers": [
          "Cảm ơn và xác nhận thông tin"
        ],
        "difficulty": 2,
        "tags": [
          "dialogue",
          "pragmatics"
        ]
      },
      {
        "id": "pt-b6",
        "type": "scenario_decision",
        "prompt": "Bạn nhận được yêu cầu gấp nhưng chưa rõ deadline. Hành động tốt nhất là gì?",
        "options": [
          "Hỏi lại deadline và xác nhận ưu tiên",
          "Im lặng chờ",
          "Đoán deadline",
          "Từ chối ngay"
        ],
        "answers": [
          "Hỏi lại deadline và xác nhận ưu tiên"
        ],
        "difficulty": 3,
        "tags": [
          "workplace",
          "scenario"
        ]
      },
      {
        "id": "pt-b7",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý một nhiệm vụ.",
        "options": [
          "Xác nhận yêu cầu",
          "Lập kế hoạch",
          "Thực hiện",
          "Báo cáo kết quả"
        ],
        "answers": [
          "Xác nhận yêu cầu Lập kế hoạch Thực hiện Báo cáo kết quả"
        ],
        "difficulty": 3,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "pt-b8",
        "type": "true_false",
        "prompt": "Trong giao tiếp chuyên nghiệp, xác nhận lại thông tin quan trọng giúp giảm hiểu nhầm.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 2,
        "tags": [
          "professional"
        ]
      }
    ]
  },
  {
    "id": "official-pt-professional",
    "title": "Português — Real-life & Professional Scenarios",
    "language": "pt",
    "level": "A1–B1",
    "topic": "Workplace & Real Life",
    "context": "Travel & Daily Life",
    "skill": "Advanced Mixed",
    "description": "Tình huống thực tế Português: nghe, email, deadline, khách hàng, lớp học và ra quyết định.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "pt-a1",
        "type": "audio_choice",
        "prompt": "Nghe thông báo và chọn ý chính phù hợp nhất.",
        "options": [
          "Thông báo về lịch hoặc nhiệm vụ",
          "Một câu chuyện cổ tích",
          "Mô tả thời tiết",
          "Quảng cáo trò chơi"
        ],
        "answers": [
          "Thông báo về lịch hoặc nhiệm vụ"
        ],
        "mediaUrl": "/audio/pt-airport.wav",
        "mediaType": "audio",
        "ttsText": "a reunião",
        "ttsLang": "pt-PT",
        "transcript": "a reunião",
        "maxPlays": 3,
        "playbackRate": 1,
        "difficulty": 3,
        "tags": [
          "listening",
          "workplace"
        ]
      },
      {
        "id": "pt-a2",
        "type": "listening_input",
        "prompt": "Nghe lại và gõ từ/cụm trọng tâm bạn nghe được.",
        "answers": [
          "a reunião",
          "o voo"
        ],
        "mediaUrl": "/audio/pt-airport.wav",
        "mediaType": "audio",
        "ttsText": "a reunião",
        "ttsLang": "pt-PT",
        "transcript": "a reunião",
        "maxPlays": 5,
        "difficulty": 3,
        "tags": [
          "listening",
          "dictation"
        ]
      },
      {
        "id": "pt-a3",
        "type": "error_correction",
        "prompt": "Bạn đang viết email chuyên nghiệp. Hãy chọn câu phù hợp nhất.",
        "options": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin.",
          "Ê nhận được chưa?",
          "Không trả lời cũng được.",
          "Tôi gửi đại thôi."
        ],
        "answers": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "email",
          "register"
        ]
      },
      {
        "id": "pt-a4",
        "type": "scenario_decision",
        "prompt": "Bạn phát hiện báo cáo có lỗi ngay trước cuộc họp. Bạn nên làm gì?",
        "options": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật",
          "Giấu lỗi",
          "Xóa file",
          "Đợi người khác phát hiện"
        ],
        "answers": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "workplace",
          "problem-solving"
        ]
      },
      {
        "id": "pt-a5",
        "type": "dialogue",
        "prompt": "Khách hàng phàn nàn vì giao hàng trễ. Phản hồi nào chuyên nghiệp nhất?",
        "options": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể.",
          "Không phải việc của tôi.",
          "Chờ đi.",
          "Bạn tự kiểm tra nhé."
        ],
        "answers": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể."
        ],
        "difficulty": 4,
        "tags": [
          "customer-service"
        ]
      },
      {
        "id": "pt-a6",
        "type": "transformation",
        "prompt": "Viết lại yêu cầu theo phong cách lịch sự/chuyên nghiệp.",
        "answers": [
          "Vui lòng gửi tài liệu trước cuộc họp.",
          "Xin vui lòng gửi tài liệu trước cuộc họp."
        ],
        "difficulty": 4,
        "tags": [
          "formal",
          "writing"
        ]
      },
      {
        "id": "pt-a7",
        "type": "cloze",
        "prompt": "Hoàn thành quy trình: Nhận yêu cầu → xác nhận ___ → thực hiện → kiểm tra → báo cáo.",
        "options": [
          "mục tiêu và thời hạn",
          "màu sắc",
          "thời tiết",
          "sở thích"
        ],
        "answers": [
          "mục tiêu và thời hạn"
        ],
        "difficulty": 4,
        "tags": [
          "workflow",
          "professional"
        ]
      },
      {
        "id": "pt-a8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là TNV phụ trách lớp học và cần báo việc đổi phòng. Chọn thông điệp rõ ràng nhất.",
        "options": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ.",
          "Chỉ gửi “đổi phòng nha”.",
          "Không cần thông báo.",
          "Gửi sau khi buổi học kết thúc."
        ],
        "answers": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ."
        ],
        "difficulty": 5,
        "tags": [
          "school-workplace",
          "roleplay"
        ]
      }
    ]
  },
  {
    "id": "official-ru-foundation",
    "title": "Русский — Foundation & Everyday",
    "language": "ru",
    "level": "A1",
    "topic": "Everyday Communication",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Bộ bài nền tảng Русский: từ vựng, hội thoại, dịch và xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ru-b1",
        "type": "multiple_choice",
        "prompt": "Chọn nghĩa phù hợp của “Здравствуйте”.",
        "options": [
          "Xin chào",
          "Cảm ơn",
          "tàu hỏa",
          "cuộc họp"
        ],
        "answers": [
          "Xin chào"
        ],
        "explanation": "Здравствуйте → Xin chào.",
        "difficulty": 1,
        "tags": [
          "starter",
          "vocabulary"
        ]
      },
      {
        "id": "ru-b2",
        "type": "matching",
        "prompt": "Ghép từ/cụm từ với nghĩa phù hợp.",
        "answers": [
          "Здравствуйте=Xin chào",
          "Спасибо=Cảm ơn",
          "поезд=tàu hỏa"
        ],
        "pairs": [
          {
            "left": "Здравствуйте",
            "right": "Xin chào"
          },
          {
            "left": "Спасибо",
            "right": "Cảm ơn"
          },
          {
            "left": "поезд",
            "right": "tàu hỏa"
          }
        ],
        "difficulty": 2,
        "tags": [
          "vocabulary",
          "matching"
        ]
      },
      {
        "id": "ru-b3",
        "type": "typed",
        "prompt": "Gõ lại cụm từ: Спасибо",
        "answers": [
          "Спасибо"
        ],
        "difficulty": 2,
        "tags": [
          "spelling"
        ]
      },
      {
        "id": "ru-b4",
        "type": "translation",
        "prompt": "Dịch sang tiếng Việt: “поезд”.",
        "answers": [
          "tàu hỏa"
        ],
        "difficulty": 2,
        "tags": [
          "translation"
        ]
      },
      {
        "id": "ru-b5",
        "type": "dialogue",
        "prompt": "Trong một cuộc trò chuyện lịch sự, bạn nên chọn phản hồi nào?",
        "options": [
          "Cảm ơn và xác nhận thông tin",
          "Bỏ đi mà không trả lời",
          "Trả lời bằng một từ không liên quan",
          "Gửi nội dung trống"
        ],
        "answers": [
          "Cảm ơn và xác nhận thông tin"
        ],
        "difficulty": 2,
        "tags": [
          "dialogue",
          "pragmatics"
        ]
      },
      {
        "id": "ru-b6",
        "type": "scenario_decision",
        "prompt": "Bạn nhận được yêu cầu gấp nhưng chưa rõ deadline. Hành động tốt nhất là gì?",
        "options": [
          "Hỏi lại deadline và xác nhận ưu tiên",
          "Im lặng chờ",
          "Đoán deadline",
          "Từ chối ngay"
        ],
        "answers": [
          "Hỏi lại deadline và xác nhận ưu tiên"
        ],
        "difficulty": 3,
        "tags": [
          "workplace",
          "scenario"
        ]
      },
      {
        "id": "ru-b7",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý một nhiệm vụ.",
        "options": [
          "Xác nhận yêu cầu",
          "Lập kế hoạch",
          "Thực hiện",
          "Báo cáo kết quả"
        ],
        "answers": [
          "Xác nhận yêu cầu Lập kế hoạch Thực hiện Báo cáo kết quả"
        ],
        "difficulty": 3,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "ru-b8",
        "type": "true_false",
        "prompt": "Trong giao tiếp chuyên nghiệp, xác nhận lại thông tin quan trọng giúp giảm hiểu nhầm.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 2,
        "tags": [
          "professional"
        ]
      }
    ]
  },
  {
    "id": "official-ru-professional",
    "title": "Русский — Real-life & Professional Scenarios",
    "language": "ru",
    "level": "A1–B1",
    "topic": "Workplace & Real Life",
    "context": "Travel & Daily Life",
    "skill": "Advanced Mixed",
    "description": "Tình huống thực tế Русский: nghe, email, deadline, khách hàng, lớp học và ra quyết định.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ru-a1",
        "type": "audio_choice",
        "prompt": "Nghe thông báo và chọn ý chính phù hợp nhất.",
        "options": [
          "Thông báo về lịch hoặc nhiệm vụ",
          "Một câu chuyện cổ tích",
          "Mô tả thời tiết",
          "Quảng cáo trò chơi"
        ],
        "answers": [
          "Thông báo về lịch hoặc nhiệm vụ"
        ],
        "mediaUrl": "/audio/ru-station.wav",
        "mediaType": "audio",
        "ttsText": "встреча",
        "ttsLang": "ru-RU",
        "transcript": "встреча",
        "maxPlays": 3,
        "playbackRate": 1,
        "difficulty": 3,
        "tags": [
          "listening",
          "workplace"
        ]
      },
      {
        "id": "ru-a2",
        "type": "listening_input",
        "prompt": "Nghe lại và gõ từ/cụm trọng tâm bạn nghe được.",
        "answers": [
          "встреча",
          "поезд"
        ],
        "mediaUrl": "/audio/ru-station.wav",
        "mediaType": "audio",
        "ttsText": "встреча",
        "ttsLang": "ru-RU",
        "transcript": "встреча",
        "maxPlays": 5,
        "difficulty": 3,
        "tags": [
          "listening",
          "dictation"
        ]
      },
      {
        "id": "ru-a3",
        "type": "error_correction",
        "prompt": "Bạn đang viết email chuyên nghiệp. Hãy chọn câu phù hợp nhất.",
        "options": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin.",
          "Ê nhận được chưa?",
          "Không trả lời cũng được.",
          "Tôi gửi đại thôi."
        ],
        "answers": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "email",
          "register"
        ]
      },
      {
        "id": "ru-a4",
        "type": "scenario_decision",
        "prompt": "Bạn phát hiện báo cáo có lỗi ngay trước cuộc họp. Bạn nên làm gì?",
        "options": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật",
          "Giấu lỗi",
          "Xóa file",
          "Đợi người khác phát hiện"
        ],
        "answers": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "workplace",
          "problem-solving"
        ]
      },
      {
        "id": "ru-a5",
        "type": "dialogue",
        "prompt": "Khách hàng phàn nàn vì giao hàng trễ. Phản hồi nào chuyên nghiệp nhất?",
        "options": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể.",
          "Không phải việc của tôi.",
          "Chờ đi.",
          "Bạn tự kiểm tra nhé."
        ],
        "answers": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể."
        ],
        "difficulty": 4,
        "tags": [
          "customer-service"
        ]
      },
      {
        "id": "ru-a6",
        "type": "transformation",
        "prompt": "Viết lại yêu cầu theo phong cách lịch sự/chuyên nghiệp.",
        "answers": [
          "Vui lòng gửi tài liệu trước cuộc họp.",
          "Xin vui lòng gửi tài liệu trước cuộc họp."
        ],
        "difficulty": 4,
        "tags": [
          "formal",
          "writing"
        ]
      },
      {
        "id": "ru-a7",
        "type": "cloze",
        "prompt": "Hoàn thành quy trình: Nhận yêu cầu → xác nhận ___ → thực hiện → kiểm tra → báo cáo.",
        "options": [
          "mục tiêu và thời hạn",
          "màu sắc",
          "thời tiết",
          "sở thích"
        ],
        "answers": [
          "mục tiêu và thời hạn"
        ],
        "difficulty": 4,
        "tags": [
          "workflow",
          "professional"
        ]
      },
      {
        "id": "ru-a8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là TNV phụ trách lớp học và cần báo việc đổi phòng. Chọn thông điệp rõ ràng nhất.",
        "options": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ.",
          "Chỉ gửi “đổi phòng nha”.",
          "Không cần thông báo.",
          "Gửi sau khi buổi học kết thúc."
        ],
        "answers": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ."
        ],
        "difficulty": 5,
        "tags": [
          "school-workplace",
          "roleplay"
        ]
      }
    ]
  },
  {
    "id": "official-th-foundation",
    "title": "ไทย — Foundation & Everyday",
    "language": "th",
    "level": "Starter",
    "topic": "Everyday Communication",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Bộ bài nền tảng ไทย: từ vựng, hội thoại, dịch và xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "th-b1",
        "type": "multiple_choice",
        "prompt": "Chọn nghĩa phù hợp của “สวัสดี”.",
        "options": [
          "Xin chào",
          "Cảm ơn",
          "trường học",
          "cuộc họp"
        ],
        "answers": [
          "Xin chào"
        ],
        "explanation": "สวัสดี → Xin chào.",
        "difficulty": 1,
        "tags": [
          "starter",
          "vocabulary"
        ]
      },
      {
        "id": "th-b2",
        "type": "matching",
        "prompt": "Ghép từ/cụm từ với nghĩa phù hợp.",
        "answers": [
          "สวัสดี=Xin chào",
          "ขอบคุณ=Cảm ơn",
          "โรงเรียน=trường học"
        ],
        "pairs": [
          {
            "left": "สวัสดี",
            "right": "Xin chào"
          },
          {
            "left": "ขอบคุณ",
            "right": "Cảm ơn"
          },
          {
            "left": "โรงเรียน",
            "right": "trường học"
          }
        ],
        "difficulty": 2,
        "tags": [
          "vocabulary",
          "matching"
        ]
      },
      {
        "id": "th-b3",
        "type": "typed",
        "prompt": "Gõ lại cụm từ: ขอบคุณ",
        "answers": [
          "ขอบคุณ"
        ],
        "difficulty": 2,
        "tags": [
          "spelling"
        ]
      },
      {
        "id": "th-b4",
        "type": "translation",
        "prompt": "Dịch sang tiếng Việt: “โรงเรียน”.",
        "answers": [
          "trường học"
        ],
        "difficulty": 2,
        "tags": [
          "translation"
        ]
      },
      {
        "id": "th-b5",
        "type": "dialogue",
        "prompt": "Trong một cuộc trò chuyện lịch sự, bạn nên chọn phản hồi nào?",
        "options": [
          "Cảm ơn và xác nhận thông tin",
          "Bỏ đi mà không trả lời",
          "Trả lời bằng một từ không liên quan",
          "Gửi nội dung trống"
        ],
        "answers": [
          "Cảm ơn và xác nhận thông tin"
        ],
        "difficulty": 2,
        "tags": [
          "dialogue",
          "pragmatics"
        ]
      },
      {
        "id": "th-b6",
        "type": "scenario_decision",
        "prompt": "Bạn nhận được yêu cầu gấp nhưng chưa rõ deadline. Hành động tốt nhất là gì?",
        "options": [
          "Hỏi lại deadline và xác nhận ưu tiên",
          "Im lặng chờ",
          "Đoán deadline",
          "Từ chối ngay"
        ],
        "answers": [
          "Hỏi lại deadline và xác nhận ưu tiên"
        ],
        "difficulty": 3,
        "tags": [
          "workplace",
          "scenario"
        ]
      },
      {
        "id": "th-b7",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý một nhiệm vụ.",
        "options": [
          "Xác nhận yêu cầu",
          "Lập kế hoạch",
          "Thực hiện",
          "Báo cáo kết quả"
        ],
        "answers": [
          "Xác nhận yêu cầu Lập kế hoạch Thực hiện Báo cáo kết quả"
        ],
        "difficulty": 3,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "th-b8",
        "type": "true_false",
        "prompt": "Trong giao tiếp chuyên nghiệp, xác nhận lại thông tin quan trọng giúp giảm hiểu nhầm.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 2,
        "tags": [
          "professional"
        ]
      }
    ]
  },
  {
    "id": "official-th-professional",
    "title": "ไทย — Real-life & Professional Scenarios",
    "language": "th",
    "level": "Starter–Intermediate",
    "topic": "Workplace & Real Life",
    "context": "Daily Life & Travel",
    "skill": "Advanced Mixed",
    "description": "Tình huống thực tế ไทย: nghe, email, deadline, khách hàng, lớp học và ra quyết định.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "th-a1",
        "type": "audio_choice",
        "prompt": "Nghe thông báo và chọn ý chính phù hợp nhất.",
        "options": [
          "Thông báo về lịch hoặc nhiệm vụ",
          "Một câu chuyện cổ tích",
          "Mô tả thời tiết",
          "Quảng cáo trò chơi"
        ],
        "answers": [
          "Thông báo về lịch hoặc nhiệm vụ"
        ],
        "mediaType": "audio",
        "ttsText": "ประชุม",
        "ttsLang": "th-TH",
        "transcript": "ประชุม",
        "maxPlays": 3,
        "playbackRate": 1,
        "difficulty": 3,
        "tags": [
          "listening",
          "workplace"
        ]
      },
      {
        "id": "th-a2",
        "type": "listening_input",
        "prompt": "Nghe lại và gõ từ/cụm trọng tâm bạn nghe được.",
        "answers": [
          "ประชุม",
          "โรงเรียน"
        ],
        "mediaType": "audio",
        "ttsText": "ประชุม",
        "ttsLang": "th-TH",
        "transcript": "ประชุม",
        "maxPlays": 5,
        "difficulty": 3,
        "tags": [
          "listening",
          "dictation"
        ]
      },
      {
        "id": "th-a3",
        "type": "error_correction",
        "prompt": "Bạn đang viết email chuyên nghiệp. Hãy chọn câu phù hợp nhất.",
        "options": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin.",
          "Ê nhận được chưa?",
          "Không trả lời cũng được.",
          "Tôi gửi đại thôi."
        ],
        "answers": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "email",
          "register"
        ]
      },
      {
        "id": "th-a4",
        "type": "scenario_decision",
        "prompt": "Bạn phát hiện báo cáo có lỗi ngay trước cuộc họp. Bạn nên làm gì?",
        "options": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật",
          "Giấu lỗi",
          "Xóa file",
          "Đợi người khác phát hiện"
        ],
        "answers": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "workplace",
          "problem-solving"
        ]
      },
      {
        "id": "th-a5",
        "type": "dialogue",
        "prompt": "Khách hàng phàn nàn vì giao hàng trễ. Phản hồi nào chuyên nghiệp nhất?",
        "options": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể.",
          "Không phải việc của tôi.",
          "Chờ đi.",
          "Bạn tự kiểm tra nhé."
        ],
        "answers": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể."
        ],
        "difficulty": 4,
        "tags": [
          "customer-service"
        ]
      },
      {
        "id": "th-a6",
        "type": "transformation",
        "prompt": "Viết lại yêu cầu theo phong cách lịch sự/chuyên nghiệp.",
        "answers": [
          "Vui lòng gửi tài liệu trước cuộc họp.",
          "Xin vui lòng gửi tài liệu trước cuộc họp."
        ],
        "difficulty": 4,
        "tags": [
          "formal",
          "writing"
        ]
      },
      {
        "id": "th-a7",
        "type": "cloze",
        "prompt": "Hoàn thành quy trình: Nhận yêu cầu → xác nhận ___ → thực hiện → kiểm tra → báo cáo.",
        "options": [
          "mục tiêu và thời hạn",
          "màu sắc",
          "thời tiết",
          "sở thích"
        ],
        "answers": [
          "mục tiêu và thời hạn"
        ],
        "difficulty": 4,
        "tags": [
          "workflow",
          "professional"
        ]
      },
      {
        "id": "th-a8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là TNV phụ trách lớp học và cần báo việc đổi phòng. Chọn thông điệp rõ ràng nhất.",
        "options": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ.",
          "Chỉ gửi “đổi phòng nha”.",
          "Không cần thông báo.",
          "Gửi sau khi buổi học kết thúc."
        ],
        "answers": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ."
        ],
        "difficulty": 5,
        "tags": [
          "school-workplace",
          "roleplay"
        ]
      }
    ]
  },
  {
    "id": "official-vi-foundation",
    "title": "Tiếng Việt — Foundation & Everyday",
    "language": "vi",
    "level": "THCS",
    "topic": "Everyday Communication",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Bộ bài nền tảng Tiếng Việt: từ vựng, hội thoại, dịch và xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "vi-b1",
        "type": "multiple_choice",
        "prompt": "Chọn nghĩa phù hợp của “Xin chào”.",
        "options": [
          "Hello",
          "deadline",
          "classroom",
          "minutes/report"
        ],
        "answers": [
          "Hello"
        ],
        "explanation": "Xin chào → Hello.",
        "difficulty": 1,
        "tags": [
          "starter",
          "vocabulary"
        ]
      },
      {
        "id": "vi-b2",
        "type": "matching",
        "prompt": "Ghép từ/cụm từ với nghĩa phù hợp.",
        "answers": [
          "Xin chào=Hello",
          "hạn chót=deadline",
          "phòng học=classroom"
        ],
        "pairs": [
          {
            "left": "Xin chào",
            "right": "Hello"
          },
          {
            "left": "hạn chót",
            "right": "deadline"
          },
          {
            "left": "phòng học",
            "right": "classroom"
          }
        ],
        "difficulty": 2,
        "tags": [
          "vocabulary",
          "matching"
        ]
      },
      {
        "id": "vi-b3",
        "type": "typed",
        "prompt": "Gõ lại cụm từ: hạn chót",
        "answers": [
          "hạn chót"
        ],
        "difficulty": 2,
        "tags": [
          "spelling"
        ]
      },
      {
        "id": "vi-b4",
        "type": "translation",
        "prompt": "Dịch sang tiếng Việt: “phòng học”.",
        "answers": [
          "classroom"
        ],
        "difficulty": 2,
        "tags": [
          "translation"
        ]
      },
      {
        "id": "vi-b5",
        "type": "dialogue",
        "prompt": "Trong một cuộc trò chuyện lịch sự, bạn nên chọn phản hồi nào?",
        "options": [
          "Cảm ơn và xác nhận thông tin",
          "Bỏ đi mà không trả lời",
          "Trả lời bằng một từ không liên quan",
          "Gửi nội dung trống"
        ],
        "answers": [
          "Cảm ơn và xác nhận thông tin"
        ],
        "difficulty": 2,
        "tags": [
          "dialogue",
          "pragmatics"
        ]
      },
      {
        "id": "vi-b6",
        "type": "scenario_decision",
        "prompt": "Bạn nhận được yêu cầu gấp nhưng chưa rõ deadline. Hành động tốt nhất là gì?",
        "options": [
          "Hỏi lại deadline và xác nhận ưu tiên",
          "Im lặng chờ",
          "Đoán deadline",
          "Từ chối ngay"
        ],
        "answers": [
          "Hỏi lại deadline và xác nhận ưu tiên"
        ],
        "difficulty": 3,
        "tags": [
          "workplace",
          "scenario"
        ]
      },
      {
        "id": "vi-b7",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý một nhiệm vụ.",
        "options": [
          "Xác nhận yêu cầu",
          "Lập kế hoạch",
          "Thực hiện",
          "Báo cáo kết quả"
        ],
        "answers": [
          "Xác nhận yêu cầu Lập kế hoạch Thực hiện Báo cáo kết quả"
        ],
        "difficulty": 3,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "vi-b8",
        "type": "true_false",
        "prompt": "Trong giao tiếp chuyên nghiệp, xác nhận lại thông tin quan trọng giúp giảm hiểu nhầm.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 2,
        "tags": [
          "professional"
        ]
      }
    ]
  },
  {
    "id": "official-vi-professional",
    "title": "Tiếng Việt — Real-life & Professional Scenarios",
    "language": "vi",
    "level": "THCS–THPT",
    "topic": "Workplace & Real Life",
    "context": "School & Professional",
    "skill": "Advanced Mixed",
    "description": "Tình huống thực tế Tiếng Việt: nghe, email, deadline, khách hàng, lớp học và ra quyết định.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "vi-a1",
        "type": "audio_choice",
        "prompt": "Nghe thông báo và chọn ý chính phù hợp nhất.",
        "options": [
          "Thông báo về lịch hoặc nhiệm vụ",
          "Một câu chuyện cổ tích",
          "Mô tả thời tiết",
          "Quảng cáo trò chơi"
        ],
        "answers": [
          "Thông báo về lịch hoặc nhiệm vụ"
        ],
        "mediaUrl": "/audio/vi-school.wav",
        "mediaType": "audio",
        "ttsText": "biên bản",
        "ttsLang": "vi-VN",
        "transcript": "biên bản",
        "maxPlays": 3,
        "playbackRate": 1,
        "difficulty": 3,
        "tags": [
          "listening",
          "workplace"
        ]
      },
      {
        "id": "vi-a2",
        "type": "listening_input",
        "prompt": "Nghe lại và gõ từ/cụm trọng tâm bạn nghe được.",
        "answers": [
          "biên bản",
          "phòng học"
        ],
        "mediaUrl": "/audio/vi-school.wav",
        "mediaType": "audio",
        "ttsText": "biên bản",
        "ttsLang": "vi-VN",
        "transcript": "biên bản",
        "maxPlays": 5,
        "difficulty": 3,
        "tags": [
          "listening",
          "dictation"
        ]
      },
      {
        "id": "vi-a3",
        "type": "error_correction",
        "prompt": "Bạn đang viết email chuyên nghiệp. Hãy chọn câu phù hợp nhất.",
        "options": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin.",
          "Ê nhận được chưa?",
          "Không trả lời cũng được.",
          "Tôi gửi đại thôi."
        ],
        "answers": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "email",
          "register"
        ]
      },
      {
        "id": "vi-a4",
        "type": "scenario_decision",
        "prompt": "Bạn phát hiện báo cáo có lỗi ngay trước cuộc họp. Bạn nên làm gì?",
        "options": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật",
          "Giấu lỗi",
          "Xóa file",
          "Đợi người khác phát hiện"
        ],
        "answers": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "workplace",
          "problem-solving"
        ]
      },
      {
        "id": "vi-a5",
        "type": "dialogue",
        "prompt": "Khách hàng phàn nàn vì giao hàng trễ. Phản hồi nào chuyên nghiệp nhất?",
        "options": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể.",
          "Không phải việc của tôi.",
          "Chờ đi.",
          "Bạn tự kiểm tra nhé."
        ],
        "answers": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể."
        ],
        "difficulty": 4,
        "tags": [
          "customer-service"
        ]
      },
      {
        "id": "vi-a6",
        "type": "transformation",
        "prompt": "Viết lại yêu cầu theo phong cách lịch sự/chuyên nghiệp.",
        "answers": [
          "Vui lòng gửi tài liệu trước cuộc họp.",
          "Xin vui lòng gửi tài liệu trước cuộc họp."
        ],
        "difficulty": 4,
        "tags": [
          "formal",
          "writing"
        ]
      },
      {
        "id": "vi-a7",
        "type": "cloze",
        "prompt": "Hoàn thành quy trình: Nhận yêu cầu → xác nhận ___ → thực hiện → kiểm tra → báo cáo.",
        "options": [
          "mục tiêu và thời hạn",
          "màu sắc",
          "thời tiết",
          "sở thích"
        ],
        "answers": [
          "mục tiêu và thời hạn"
        ],
        "difficulty": 4,
        "tags": [
          "workflow",
          "professional"
        ]
      },
      {
        "id": "vi-a8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là TNV phụ trách lớp học và cần báo việc đổi phòng. Chọn thông điệp rõ ràng nhất.",
        "options": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ.",
          "Chỉ gửi “đổi phòng nha”.",
          "Không cần thông báo.",
          "Gửi sau khi buổi học kết thúc."
        ],
        "answers": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ."
        ],
        "difficulty": 5,
        "tags": [
          "school-workplace",
          "roleplay"
        ]
      }
    ]
  },
  {
    "id": "official-ar-foundation",
    "title": "العربية — Foundation & Everyday",
    "language": "ar",
    "level": "Starter",
    "topic": "Everyday Communication",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Bộ bài nền tảng العربية: từ vựng, hội thoại, dịch và xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ar-b1",
        "type": "multiple_choice",
        "prompt": "Chọn nghĩa phù hợp của “مرحبا”.",
        "options": [
          "Xin chào",
          "Cảm ơn",
          "trường học",
          "cuộc họp"
        ],
        "answers": [
          "Xin chào"
        ],
        "explanation": "مرحبا → Xin chào.",
        "difficulty": 1,
        "tags": [
          "starter",
          "vocabulary"
        ]
      },
      {
        "id": "ar-b2",
        "type": "matching",
        "prompt": "Ghép từ/cụm từ với nghĩa phù hợp.",
        "answers": [
          "مرحبا=Xin chào",
          "شكرا=Cảm ơn",
          "المدرسة=trường học"
        ],
        "pairs": [
          {
            "left": "مرحبا",
            "right": "Xin chào"
          },
          {
            "left": "شكرا",
            "right": "Cảm ơn"
          },
          {
            "left": "المدرسة",
            "right": "trường học"
          }
        ],
        "difficulty": 2,
        "tags": [
          "vocabulary",
          "matching"
        ]
      },
      {
        "id": "ar-b3",
        "type": "typed",
        "prompt": "Gõ lại cụm từ: شكرا",
        "answers": [
          "شكرا"
        ],
        "difficulty": 2,
        "tags": [
          "spelling"
        ]
      },
      {
        "id": "ar-b4",
        "type": "translation",
        "prompt": "Dịch sang tiếng Việt: “المدرسة”.",
        "answers": [
          "trường học"
        ],
        "difficulty": 2,
        "tags": [
          "translation"
        ]
      },
      {
        "id": "ar-b5",
        "type": "dialogue",
        "prompt": "Trong một cuộc trò chuyện lịch sự, bạn nên chọn phản hồi nào?",
        "options": [
          "Cảm ơn và xác nhận thông tin",
          "Bỏ đi mà không trả lời",
          "Trả lời bằng một từ không liên quan",
          "Gửi nội dung trống"
        ],
        "answers": [
          "Cảm ơn và xác nhận thông tin"
        ],
        "difficulty": 2,
        "tags": [
          "dialogue",
          "pragmatics"
        ]
      },
      {
        "id": "ar-b6",
        "type": "scenario_decision",
        "prompt": "Bạn nhận được yêu cầu gấp nhưng chưa rõ deadline. Hành động tốt nhất là gì?",
        "options": [
          "Hỏi lại deadline và xác nhận ưu tiên",
          "Im lặng chờ",
          "Đoán deadline",
          "Từ chối ngay"
        ],
        "answers": [
          "Hỏi lại deadline và xác nhận ưu tiên"
        ],
        "difficulty": 3,
        "tags": [
          "workplace",
          "scenario"
        ]
      },
      {
        "id": "ar-b7",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý một nhiệm vụ.",
        "options": [
          "Xác nhận yêu cầu",
          "Lập kế hoạch",
          "Thực hiện",
          "Báo cáo kết quả"
        ],
        "answers": [
          "Xác nhận yêu cầu Lập kế hoạch Thực hiện Báo cáo kết quả"
        ],
        "difficulty": 3,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "ar-b8",
        "type": "true_false",
        "prompt": "Trong giao tiếp chuyên nghiệp, xác nhận lại thông tin quan trọng giúp giảm hiểu nhầm.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 2,
        "tags": [
          "professional"
        ]
      }
    ]
  },
  {
    "id": "official-ar-professional",
    "title": "العربية — Real-life & Professional Scenarios",
    "language": "ar",
    "level": "Starter–Intermediate",
    "topic": "Workplace & Real Life",
    "context": "Daily Life & Travel",
    "skill": "Advanced Mixed",
    "description": "Tình huống thực tế العربية: nghe, email, deadline, khách hàng, lớp học và ra quyết định.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ar-a1",
        "type": "audio_choice",
        "prompt": "Nghe thông báo và chọn ý chính phù hợp nhất.",
        "options": [
          "Thông báo về lịch hoặc nhiệm vụ",
          "Một câu chuyện cổ tích",
          "Mô tả thời tiết",
          "Quảng cáo trò chơi"
        ],
        "answers": [
          "Thông báo về lịch hoặc nhiệm vụ"
        ],
        "mediaType": "audio",
        "ttsText": "الاجتماع",
        "ttsLang": "ar-SA",
        "transcript": "الاجتماع",
        "maxPlays": 3,
        "playbackRate": 1,
        "difficulty": 3,
        "tags": [
          "listening",
          "workplace"
        ]
      },
      {
        "id": "ar-a2",
        "type": "listening_input",
        "prompt": "Nghe lại và gõ từ/cụm trọng tâm bạn nghe được.",
        "answers": [
          "الاجتماع",
          "المدرسة"
        ],
        "mediaType": "audio",
        "ttsText": "الاجتماع",
        "ttsLang": "ar-SA",
        "transcript": "الاجتماع",
        "maxPlays": 5,
        "difficulty": 3,
        "tags": [
          "listening",
          "dictation"
        ]
      },
      {
        "id": "ar-a3",
        "type": "error_correction",
        "prompt": "Bạn đang viết email chuyên nghiệp. Hãy chọn câu phù hợp nhất.",
        "options": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin.",
          "Ê nhận được chưa?",
          "Không trả lời cũng được.",
          "Tôi gửi đại thôi."
        ],
        "answers": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "email",
          "register"
        ]
      },
      {
        "id": "ar-a4",
        "type": "scenario_decision",
        "prompt": "Bạn phát hiện báo cáo có lỗi ngay trước cuộc họp. Bạn nên làm gì?",
        "options": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật",
          "Giấu lỗi",
          "Xóa file",
          "Đợi người khác phát hiện"
        ],
        "answers": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "workplace",
          "problem-solving"
        ]
      },
      {
        "id": "ar-a5",
        "type": "dialogue",
        "prompt": "Khách hàng phàn nàn vì giao hàng trễ. Phản hồi nào chuyên nghiệp nhất?",
        "options": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể.",
          "Không phải việc của tôi.",
          "Chờ đi.",
          "Bạn tự kiểm tra nhé."
        ],
        "answers": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể."
        ],
        "difficulty": 4,
        "tags": [
          "customer-service"
        ]
      },
      {
        "id": "ar-a6",
        "type": "transformation",
        "prompt": "Viết lại yêu cầu theo phong cách lịch sự/chuyên nghiệp.",
        "answers": [
          "Vui lòng gửi tài liệu trước cuộc họp.",
          "Xin vui lòng gửi tài liệu trước cuộc họp."
        ],
        "difficulty": 4,
        "tags": [
          "formal",
          "writing"
        ]
      },
      {
        "id": "ar-a7",
        "type": "cloze",
        "prompt": "Hoàn thành quy trình: Nhận yêu cầu → xác nhận ___ → thực hiện → kiểm tra → báo cáo.",
        "options": [
          "mục tiêu và thời hạn",
          "màu sắc",
          "thời tiết",
          "sở thích"
        ],
        "answers": [
          "mục tiêu và thời hạn"
        ],
        "difficulty": 4,
        "tags": [
          "workflow",
          "professional"
        ]
      },
      {
        "id": "ar-a8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là TNV phụ trách lớp học và cần báo việc đổi phòng. Chọn thông điệp rõ ràng nhất.",
        "options": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ.",
          "Chỉ gửi “đổi phòng nha”.",
          "Không cần thông báo.",
          "Gửi sau khi buổi học kết thúc."
        ],
        "answers": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ."
        ],
        "difficulty": 5,
        "tags": [
          "school-workplace",
          "roleplay"
        ]
      }
    ]
  },
  {
    "id": "official-id-foundation",
    "title": "Bahasa Indonesia — Foundation & Everyday",
    "language": "id",
    "level": "A1",
    "topic": "Everyday Communication",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Bộ bài nền tảng Bahasa Indonesia: từ vựng, hội thoại, dịch và xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "id-b1",
        "type": "multiple_choice",
        "prompt": "Chọn nghĩa phù hợp của “Selamat pagi”.",
        "options": [
          "Chào buổi sáng",
          "Cảm ơn",
          "đơn hàng",
          "cuộc họp"
        ],
        "answers": [
          "Chào buổi sáng"
        ],
        "explanation": "Selamat pagi → Chào buổi sáng.",
        "difficulty": 1,
        "tags": [
          "starter",
          "vocabulary"
        ]
      },
      {
        "id": "id-b2",
        "type": "matching",
        "prompt": "Ghép từ/cụm từ với nghĩa phù hợp.",
        "answers": [
          "Selamat pagi=Chào buổi sáng",
          "Terima kasih=Cảm ơn",
          "pesanan=đơn hàng"
        ],
        "pairs": [
          {
            "left": "Selamat pagi",
            "right": "Chào buổi sáng"
          },
          {
            "left": "Terima kasih",
            "right": "Cảm ơn"
          },
          {
            "left": "pesanan",
            "right": "đơn hàng"
          }
        ],
        "difficulty": 2,
        "tags": [
          "vocabulary",
          "matching"
        ]
      },
      {
        "id": "id-b3",
        "type": "typed",
        "prompt": "Gõ lại cụm từ: Terima kasih",
        "answers": [
          "Terima kasih"
        ],
        "difficulty": 2,
        "tags": [
          "spelling"
        ]
      },
      {
        "id": "id-b4",
        "type": "translation",
        "prompt": "Dịch sang tiếng Việt: “pesanan”.",
        "answers": [
          "đơn hàng"
        ],
        "difficulty": 2,
        "tags": [
          "translation"
        ]
      },
      {
        "id": "id-b5",
        "type": "dialogue",
        "prompt": "Trong một cuộc trò chuyện lịch sự, bạn nên chọn phản hồi nào?",
        "options": [
          "Cảm ơn và xác nhận thông tin",
          "Bỏ đi mà không trả lời",
          "Trả lời bằng một từ không liên quan",
          "Gửi nội dung trống"
        ],
        "answers": [
          "Cảm ơn và xác nhận thông tin"
        ],
        "difficulty": 2,
        "tags": [
          "dialogue",
          "pragmatics"
        ]
      },
      {
        "id": "id-b6",
        "type": "scenario_decision",
        "prompt": "Bạn nhận được yêu cầu gấp nhưng chưa rõ deadline. Hành động tốt nhất là gì?",
        "options": [
          "Hỏi lại deadline và xác nhận ưu tiên",
          "Im lặng chờ",
          "Đoán deadline",
          "Từ chối ngay"
        ],
        "answers": [
          "Hỏi lại deadline và xác nhận ưu tiên"
        ],
        "difficulty": 3,
        "tags": [
          "workplace",
          "scenario"
        ]
      },
      {
        "id": "id-b7",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý một nhiệm vụ.",
        "options": [
          "Xác nhận yêu cầu",
          "Lập kế hoạch",
          "Thực hiện",
          "Báo cáo kết quả"
        ],
        "answers": [
          "Xác nhận yêu cầu Lập kế hoạch Thực hiện Báo cáo kết quả"
        ],
        "difficulty": 3,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "id-b8",
        "type": "true_false",
        "prompt": "Trong giao tiếp chuyên nghiệp, xác nhận lại thông tin quan trọng giúp giảm hiểu nhầm.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 2,
        "tags": [
          "professional"
        ]
      }
    ]
  },
  {
    "id": "official-id-professional",
    "title": "Bahasa Indonesia — Real-life & Professional Scenarios",
    "language": "id",
    "level": "A1–B1",
    "topic": "Workplace & Real Life",
    "context": "Daily Life & Service",
    "skill": "Advanced Mixed",
    "description": "Tình huống thực tế Bahasa Indonesia: nghe, email, deadline, khách hàng, lớp học và ra quyết định.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "id-a1",
        "type": "audio_choice",
        "prompt": "Nghe thông báo và chọn ý chính phù hợp nhất.",
        "options": [
          "Thông báo về lịch hoặc nhiệm vụ",
          "Một câu chuyện cổ tích",
          "Mô tả thời tiết",
          "Quảng cáo trò chơi"
        ],
        "answers": [
          "Thông báo về lịch hoặc nhiệm vụ"
        ],
        "mediaUrl": "/audio/id-service.wav",
        "mediaType": "audio",
        "ttsText": "rapat",
        "ttsLang": "id-ID",
        "transcript": "rapat",
        "maxPlays": 3,
        "playbackRate": 1,
        "difficulty": 3,
        "tags": [
          "listening",
          "workplace"
        ]
      },
      {
        "id": "id-a2",
        "type": "listening_input",
        "prompt": "Nghe lại và gõ từ/cụm trọng tâm bạn nghe được.",
        "answers": [
          "rapat",
          "pesanan"
        ],
        "mediaUrl": "/audio/id-service.wav",
        "mediaType": "audio",
        "ttsText": "rapat",
        "ttsLang": "id-ID",
        "transcript": "rapat",
        "maxPlays": 5,
        "difficulty": 3,
        "tags": [
          "listening",
          "dictation"
        ]
      },
      {
        "id": "id-a3",
        "type": "error_correction",
        "prompt": "Bạn đang viết email chuyên nghiệp. Hãy chọn câu phù hợp nhất.",
        "options": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin.",
          "Ê nhận được chưa?",
          "Không trả lời cũng được.",
          "Tôi gửi đại thôi."
        ],
        "answers": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "email",
          "register"
        ]
      },
      {
        "id": "id-a4",
        "type": "scenario_decision",
        "prompt": "Bạn phát hiện báo cáo có lỗi ngay trước cuộc họp. Bạn nên làm gì?",
        "options": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật",
          "Giấu lỗi",
          "Xóa file",
          "Đợi người khác phát hiện"
        ],
        "answers": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "workplace",
          "problem-solving"
        ]
      },
      {
        "id": "id-a5",
        "type": "dialogue",
        "prompt": "Khách hàng phàn nàn vì giao hàng trễ. Phản hồi nào chuyên nghiệp nhất?",
        "options": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể.",
          "Không phải việc của tôi.",
          "Chờ đi.",
          "Bạn tự kiểm tra nhé."
        ],
        "answers": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể."
        ],
        "difficulty": 4,
        "tags": [
          "customer-service"
        ]
      },
      {
        "id": "id-a6",
        "type": "transformation",
        "prompt": "Viết lại yêu cầu theo phong cách lịch sự/chuyên nghiệp.",
        "answers": [
          "Vui lòng gửi tài liệu trước cuộc họp.",
          "Xin vui lòng gửi tài liệu trước cuộc họp."
        ],
        "difficulty": 4,
        "tags": [
          "formal",
          "writing"
        ]
      },
      {
        "id": "id-a7",
        "type": "cloze",
        "prompt": "Hoàn thành quy trình: Nhận yêu cầu → xác nhận ___ → thực hiện → kiểm tra → báo cáo.",
        "options": [
          "mục tiêu và thời hạn",
          "màu sắc",
          "thời tiết",
          "sở thích"
        ],
        "answers": [
          "mục tiêu và thời hạn"
        ],
        "difficulty": 4,
        "tags": [
          "workflow",
          "professional"
        ]
      },
      {
        "id": "id-a8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là TNV phụ trách lớp học và cần báo việc đổi phòng. Chọn thông điệp rõ ràng nhất.",
        "options": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ.",
          "Chỉ gửi “đổi phòng nha”.",
          "Không cần thông báo.",
          "Gửi sau khi buổi học kết thúc."
        ],
        "answers": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ."
        ],
        "difficulty": 5,
        "tags": [
          "school-workplace",
          "roleplay"
        ]
      }
    ]
  },
  {
    "id": "official-tr-foundation",
    "title": "Türkçe — Foundation & Everyday",
    "language": "tr",
    "level": "A1",
    "topic": "Everyday Communication",
    "context": "Daily Life",
    "skill": "Mixed",
    "description": "Bộ bài nền tảng Türkçe: từ vựng, hội thoại, dịch và xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "tr-b1",
        "type": "multiple_choice",
        "prompt": "Chọn nghĩa phù hợp của “Günaydın”.",
        "options": [
          "Chào buổi sáng",
          "Cảm ơn",
          "cuộc họp",
          "báo cáo"
        ],
        "answers": [
          "Chào buổi sáng"
        ],
        "explanation": "Günaydın → Chào buổi sáng.",
        "difficulty": 1,
        "tags": [
          "starter",
          "vocabulary"
        ]
      },
      {
        "id": "tr-b2",
        "type": "matching",
        "prompt": "Ghép từ/cụm từ với nghĩa phù hợp.",
        "answers": [
          "Günaydın=Chào buổi sáng",
          "Teşekkürler=Cảm ơn",
          "toplantı=cuộc họp"
        ],
        "pairs": [
          {
            "left": "Günaydın",
            "right": "Chào buổi sáng"
          },
          {
            "left": "Teşekkürler",
            "right": "Cảm ơn"
          },
          {
            "left": "toplantı",
            "right": "cuộc họp"
          }
        ],
        "difficulty": 2,
        "tags": [
          "vocabulary",
          "matching"
        ]
      },
      {
        "id": "tr-b3",
        "type": "typed",
        "prompt": "Gõ lại cụm từ: Teşekkürler",
        "answers": [
          "Teşekkürler"
        ],
        "difficulty": 2,
        "tags": [
          "spelling"
        ]
      },
      {
        "id": "tr-b4",
        "type": "translation",
        "prompt": "Dịch sang tiếng Việt: “toplantı”.",
        "answers": [
          "cuộc họp"
        ],
        "difficulty": 2,
        "tags": [
          "translation"
        ]
      },
      {
        "id": "tr-b5",
        "type": "dialogue",
        "prompt": "Trong một cuộc trò chuyện lịch sự, bạn nên chọn phản hồi nào?",
        "options": [
          "Cảm ơn và xác nhận thông tin",
          "Bỏ đi mà không trả lời",
          "Trả lời bằng một từ không liên quan",
          "Gửi nội dung trống"
        ],
        "answers": [
          "Cảm ơn và xác nhận thông tin"
        ],
        "difficulty": 2,
        "tags": [
          "dialogue",
          "pragmatics"
        ]
      },
      {
        "id": "tr-b6",
        "type": "scenario_decision",
        "prompt": "Bạn nhận được yêu cầu gấp nhưng chưa rõ deadline. Hành động tốt nhất là gì?",
        "options": [
          "Hỏi lại deadline và xác nhận ưu tiên",
          "Im lặng chờ",
          "Đoán deadline",
          "Từ chối ngay"
        ],
        "answers": [
          "Hỏi lại deadline và xác nhận ưu tiên"
        ],
        "difficulty": 3,
        "tags": [
          "workplace",
          "scenario"
        ]
      },
      {
        "id": "tr-b7",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý một nhiệm vụ.",
        "options": [
          "Xác nhận yêu cầu",
          "Lập kế hoạch",
          "Thực hiện",
          "Báo cáo kết quả"
        ],
        "answers": [
          "Xác nhận yêu cầu Lập kế hoạch Thực hiện Báo cáo kết quả"
        ],
        "difficulty": 3,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "tr-b8",
        "type": "true_false",
        "prompt": "Trong giao tiếp chuyên nghiệp, xác nhận lại thông tin quan trọng giúp giảm hiểu nhầm.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 2,
        "tags": [
          "professional"
        ]
      }
    ]
  },
  {
    "id": "official-tr-professional",
    "title": "Türkçe — Real-life & Professional Scenarios",
    "language": "tr",
    "level": "A1–B1",
    "topic": "Workplace & Real Life",
    "context": "Workplace & Daily Life",
    "skill": "Advanced Mixed",
    "description": "Tình huống thực tế Türkçe: nghe, email, deadline, khách hàng, lớp học và ra quyết định.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "tr-a1",
        "type": "audio_choice",
        "prompt": "Nghe thông báo và chọn ý chính phù hợp nhất.",
        "options": [
          "Thông báo về lịch hoặc nhiệm vụ",
          "Một câu chuyện cổ tích",
          "Mô tả thời tiết",
          "Quảng cáo trò chơi"
        ],
        "answers": [
          "Thông báo về lịch hoặc nhiệm vụ"
        ],
        "mediaUrl": "/audio/tr-office.wav",
        "mediaType": "audio",
        "ttsText": "rapor",
        "ttsLang": "tr-TR",
        "transcript": "rapor",
        "maxPlays": 3,
        "playbackRate": 1,
        "difficulty": 3,
        "tags": [
          "listening",
          "workplace"
        ]
      },
      {
        "id": "tr-a2",
        "type": "listening_input",
        "prompt": "Nghe lại và gõ từ/cụm trọng tâm bạn nghe được.",
        "answers": [
          "rapor",
          "toplantı"
        ],
        "mediaUrl": "/audio/tr-office.wav",
        "mediaType": "audio",
        "ttsText": "rapor",
        "ttsLang": "tr-TR",
        "transcript": "rapor",
        "maxPlays": 5,
        "difficulty": 3,
        "tags": [
          "listening",
          "dictation"
        ]
      },
      {
        "id": "tr-a3",
        "type": "error_correction",
        "prompt": "Bạn đang viết email chuyên nghiệp. Hãy chọn câu phù hợp nhất.",
        "options": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin.",
          "Ê nhận được chưa?",
          "Không trả lời cũng được.",
          "Tôi gửi đại thôi."
        ],
        "answers": [
          "Xin vui lòng xác nhận bạn đã nhận được thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "email",
          "register"
        ]
      },
      {
        "id": "tr-a4",
        "type": "scenario_decision",
        "prompt": "Bạn phát hiện báo cáo có lỗi ngay trước cuộc họp. Bạn nên làm gì?",
        "options": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật",
          "Giấu lỗi",
          "Xóa file",
          "Đợi người khác phát hiện"
        ],
        "answers": [
          "Báo ngay người phụ trách, sửa lỗi và gửi bản cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "workplace",
          "problem-solving"
        ]
      },
      {
        "id": "tr-a5",
        "type": "dialogue",
        "prompt": "Khách hàng phàn nàn vì giao hàng trễ. Phản hồi nào chuyên nghiệp nhất?",
        "options": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể.",
          "Không phải việc của tôi.",
          "Chờ đi.",
          "Bạn tự kiểm tra nhé."
        ],
        "answers": [
          "Xin lỗi, xác nhận vấn đề và đưa phương án xử lý cụ thể."
        ],
        "difficulty": 4,
        "tags": [
          "customer-service"
        ]
      },
      {
        "id": "tr-a6",
        "type": "transformation",
        "prompt": "Viết lại yêu cầu theo phong cách lịch sự/chuyên nghiệp.",
        "answers": [
          "Vui lòng gửi tài liệu trước cuộc họp.",
          "Xin vui lòng gửi tài liệu trước cuộc họp."
        ],
        "difficulty": 4,
        "tags": [
          "formal",
          "writing"
        ]
      },
      {
        "id": "tr-a7",
        "type": "cloze",
        "prompt": "Hoàn thành quy trình: Nhận yêu cầu → xác nhận ___ → thực hiện → kiểm tra → báo cáo.",
        "options": [
          "mục tiêu và thời hạn",
          "màu sắc",
          "thời tiết",
          "sở thích"
        ],
        "answers": [
          "mục tiêu và thời hạn"
        ],
        "difficulty": 4,
        "tags": [
          "workflow",
          "professional"
        ]
      },
      {
        "id": "tr-a8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là TNV phụ trách lớp học và cần báo việc đổi phòng. Chọn thông điệp rõ ràng nhất.",
        "options": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ.",
          "Chỉ gửi “đổi phòng nha”.",
          "Không cần thông báo.",
          "Gửi sau khi buổi học kết thúc."
        ],
        "answers": [
          "Thông báo rõ phòng mới, thời gian, lý do ngắn gọn và đầu mối hỗ trợ."
        ],
        "difficulty": 5,
        "tags": [
          "school-workplace",
          "roleplay"
        ]
      }
    ]
  },
  {
    "id": "official-en-extra-30",
    "title": "English B1–B2 — School & Exam Mastery",
    "language": "en",
    "level": "B1–B2",
    "topic": "School & Exam",
    "context": "School & Exam",
    "skill": "Reading / Grammar / Writing",
    "description": "Bộ nâng cao nhiều dạng bài, tập trung năng lực thực tế và tư duy xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "en-x1-30",
        "type": "reading_group",
        "prompt": "Đọc tình huống và xác định mục đích chính của người viết.",
        "passage": "Một nhóm đang chuẩn bị hoạt động tại trường. Người phụ trách gửi thông báo gồm thời gian, địa điểm, nhiệm vụ và đầu mối liên hệ để mọi người chuẩn bị trước.",
        "options": [
          "Cung cấp thông tin tổ chức hoạt động",
          "Kể chuyện giải trí",
          "Quảng cáo sản phẩm",
          "Xin nghỉ học"
        ],
        "answers": [
          "Cung cấp thông tin tổ chức hoạt động"
        ],
        "difficulty": 4,
        "tags": [
          "reading",
          "inference"
        ]
      },
      {
        "id": "en-x2-30",
        "type": "scenario_decision",
        "prompt": "Một thành viên báo không thể tham gia vào phút chót. Cách xử lý tốt nhất?",
        "options": [
          "Xác nhận thông tin, đánh giá ảnh hưởng, phân công thay thế và cập nhật nhóm",
          "Mắng thành viên trước nhóm",
          "Hủy toàn bộ hoạt động",
          "Không phản hồi"
        ],
        "answers": [
          "Xác nhận thông tin, đánh giá ảnh hưởng, phân công thay thế và cập nhật nhóm"
        ],
        "difficulty": 5,
        "tags": [
          "leadership",
          "scenario"
        ]
      },
      {
        "id": "en-x3-30",
        "type": "multiple_select",
        "prompt": "Chọn các yếu tố nên có trong một thông báo đổi lịch.",
        "options": [
          "Thời gian mới",
          "Lý do ngắn gọn",
          "Việc người nhận cần làm",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Thời gian mới",
          "Lý do ngắn gọn",
          "Việc người nhận cần làm"
        ],
        "difficulty": 4,
        "tags": [
          "communication"
        ]
      },
      {
        "id": "en-x4-30",
        "type": "word_formation",
        "prompt": "Chọn dạng diễn đạt phù hợp với văn phong chuyên nghiệp.",
        "options": [
          "xác nhận",
          "ờ ha",
          "chắc vậy",
          "tùy"
        ],
        "answers": [
          "xác nhận"
        ],
        "difficulty": 3,
        "tags": [
          "register"
        ]
      },
      {
        "id": "en-x5-30",
        "type": "ordering",
        "prompt": "Sắp xếp chu trình làm việc hợp lý.",
        "options": [
          "Tiếp nhận",
          "Xác nhận",
          "Thực hiện",
          "Kiểm tra",
          "Báo cáo"
        ],
        "answers": [
          "Tiếp nhận Xác nhận Thực hiện Kiểm tra Báo cáo"
        ],
        "difficulty": 4,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "en-x6-30",
        "type": "true_false",
        "prompt": "Một báo cáo tốt nên tách rõ sự kiện, kết quả và việc cần theo dõi.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "reporting"
        ]
      },
      {
        "id": "en-x7-30",
        "type": "dialogue",
        "prompt": "Trong cuộc họp, bạn chưa hiểu nhiệm vụ. Chọn phản hồi phù hợp.",
        "options": [
          "Bạn có thể xác nhận lại đầu việc và thời hạn giúp mình không?",
          "Thôi bỏ qua.",
          "Tôi hiểu rồi dù chưa hiểu.",
          "Không nói gì."
        ],
        "answers": [
          "Bạn có thể xác nhận lại đầu việc và thời hạn giúp mình không?"
        ],
        "difficulty": 4,
        "tags": [
          "meeting"
        ]
      },
      {
        "id": "en-x8-30",
        "type": "translation",
        "prompt": "Diễn đạt ý “vui lòng xác nhận trước khi triển khai” theo ngôn ngữ mục tiêu hoặc văn phong đang luyện.",
        "answers": [
          "vui lòng xác nhận trước khi triển khai",
          "please confirm before proceeding"
        ],
        "difficulty": 4,
        "tags": [
          "translation"
        ]
      }
    ]
  },
  {
    "id": "official-en-extra-31",
    "title": "English Professional — Email, Meeting & Customer Service",
    "language": "en",
    "level": "Professional",
    "topic": "Workplace",
    "context": "Workplace",
    "skill": "Professional Communication",
    "description": "Bộ nâng cao nhiều dạng bài, tập trung năng lực thực tế và tư duy xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "en-x1-31",
        "type": "reading_group",
        "prompt": "Đọc tình huống và xác định mục đích chính của người viết.",
        "passage": "Một nhóm đang chuẩn bị hoạt động tại trường. Người phụ trách gửi thông báo gồm thời gian, địa điểm, nhiệm vụ và đầu mối liên hệ để mọi người chuẩn bị trước.",
        "options": [
          "Cung cấp thông tin tổ chức hoạt động",
          "Kể chuyện giải trí",
          "Quảng cáo sản phẩm",
          "Xin nghỉ học"
        ],
        "answers": [
          "Cung cấp thông tin tổ chức hoạt động"
        ],
        "difficulty": 4,
        "tags": [
          "reading",
          "inference"
        ]
      },
      {
        "id": "en-x2-31",
        "type": "scenario_decision",
        "prompt": "Một thành viên báo không thể tham gia vào phút chót. Cách xử lý tốt nhất?",
        "options": [
          "Xác nhận thông tin, đánh giá ảnh hưởng, phân công thay thế và cập nhật nhóm",
          "Mắng thành viên trước nhóm",
          "Hủy toàn bộ hoạt động",
          "Không phản hồi"
        ],
        "answers": [
          "Xác nhận thông tin, đánh giá ảnh hưởng, phân công thay thế và cập nhật nhóm"
        ],
        "difficulty": 5,
        "tags": [
          "leadership",
          "scenario"
        ]
      },
      {
        "id": "en-x3-31",
        "type": "multiple_select",
        "prompt": "Chọn các yếu tố nên có trong một thông báo đổi lịch.",
        "options": [
          "Thời gian mới",
          "Lý do ngắn gọn",
          "Việc người nhận cần làm",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Thời gian mới",
          "Lý do ngắn gọn",
          "Việc người nhận cần làm"
        ],
        "difficulty": 4,
        "tags": [
          "communication"
        ]
      },
      {
        "id": "en-x4-31",
        "type": "word_formation",
        "prompt": "Chọn dạng diễn đạt phù hợp với văn phong chuyên nghiệp.",
        "options": [
          "xác nhận",
          "ờ ha",
          "chắc vậy",
          "tùy"
        ],
        "answers": [
          "xác nhận"
        ],
        "difficulty": 3,
        "tags": [
          "register"
        ]
      },
      {
        "id": "en-x5-31",
        "type": "ordering",
        "prompt": "Sắp xếp chu trình làm việc hợp lý.",
        "options": [
          "Tiếp nhận",
          "Xác nhận",
          "Thực hiện",
          "Kiểm tra",
          "Báo cáo"
        ],
        "answers": [
          "Tiếp nhận Xác nhận Thực hiện Kiểm tra Báo cáo"
        ],
        "difficulty": 4,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "en-x6-31",
        "type": "true_false",
        "prompt": "Một báo cáo tốt nên tách rõ sự kiện, kết quả và việc cần theo dõi.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "reporting"
        ]
      },
      {
        "id": "en-x7-31",
        "type": "dialogue",
        "prompt": "Trong cuộc họp, bạn chưa hiểu nhiệm vụ. Chọn phản hồi phù hợp.",
        "options": [
          "Bạn có thể xác nhận lại đầu việc và thời hạn giúp mình không?",
          "Thôi bỏ qua.",
          "Tôi hiểu rồi dù chưa hiểu.",
          "Không nói gì."
        ],
        "answers": [
          "Bạn có thể xác nhận lại đầu việc và thời hạn giúp mình không?"
        ],
        "difficulty": 4,
        "tags": [
          "meeting"
        ]
      },
      {
        "id": "en-x8-31",
        "type": "translation",
        "prompt": "Diễn đạt ý “vui lòng xác nhận trước khi triển khai” theo ngôn ngữ mục tiêu hoặc văn phong đang luyện.",
        "answers": [
          "vui lòng xác nhận trước khi triển khai",
          "please confirm before proceeding"
        ],
        "difficulty": 4,
        "tags": [
          "translation"
        ]
      }
    ]
  },
  {
    "id": "official-zh-extra-32",
    "title": "中文 HSK 1–3 — Hanzi, Pinyin & Tone",
    "language": "zh",
    "level": "HSK 1–3",
    "topic": "Language Core",
    "context": "Language Core",
    "skill": "Hanzi / Pinyin / Tone",
    "description": "Bộ nâng cao nhiều dạng bài, tập trung năng lực thực tế và tư duy xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "zh-x1-32",
        "type": "reading_group",
        "prompt": "Đọc tình huống và xác định mục đích chính của người viết.",
        "passage": "Một nhóm đang chuẩn bị hoạt động tại trường. Người phụ trách gửi thông báo gồm thời gian, địa điểm, nhiệm vụ và đầu mối liên hệ để mọi người chuẩn bị trước.",
        "options": [
          "Cung cấp thông tin tổ chức hoạt động",
          "Kể chuyện giải trí",
          "Quảng cáo sản phẩm",
          "Xin nghỉ học"
        ],
        "answers": [
          "Cung cấp thông tin tổ chức hoạt động"
        ],
        "difficulty": 4,
        "tags": [
          "reading",
          "inference"
        ]
      },
      {
        "id": "zh-x2-32",
        "type": "scenario_decision",
        "prompt": "Một thành viên báo không thể tham gia vào phút chót. Cách xử lý tốt nhất?",
        "options": [
          "Xác nhận thông tin, đánh giá ảnh hưởng, phân công thay thế và cập nhật nhóm",
          "Mắng thành viên trước nhóm",
          "Hủy toàn bộ hoạt động",
          "Không phản hồi"
        ],
        "answers": [
          "Xác nhận thông tin, đánh giá ảnh hưởng, phân công thay thế và cập nhật nhóm"
        ],
        "difficulty": 5,
        "tags": [
          "leadership",
          "scenario"
        ]
      },
      {
        "id": "zh-x3-32",
        "type": "multiple_select",
        "prompt": "Chọn các yếu tố nên có trong một thông báo đổi lịch.",
        "options": [
          "Thời gian mới",
          "Lý do ngắn gọn",
          "Việc người nhận cần làm",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Thời gian mới",
          "Lý do ngắn gọn",
          "Việc người nhận cần làm"
        ],
        "difficulty": 4,
        "tags": [
          "communication"
        ]
      },
      {
        "id": "zh-x4-32",
        "type": "word_formation",
        "prompt": "Chọn dạng diễn đạt phù hợp với văn phong chuyên nghiệp.",
        "options": [
          "xác nhận",
          "ờ ha",
          "chắc vậy",
          "tùy"
        ],
        "answers": [
          "xác nhận"
        ],
        "difficulty": 3,
        "tags": [
          "register"
        ]
      },
      {
        "id": "zh-x5-32",
        "type": "ordering",
        "prompt": "Sắp xếp chu trình làm việc hợp lý.",
        "options": [
          "Tiếp nhận",
          "Xác nhận",
          "Thực hiện",
          "Kiểm tra",
          "Báo cáo"
        ],
        "answers": [
          "Tiếp nhận Xác nhận Thực hiện Kiểm tra Báo cáo"
        ],
        "difficulty": 4,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "zh-x6-32",
        "type": "true_false",
        "prompt": "Một báo cáo tốt nên tách rõ sự kiện, kết quả và việc cần theo dõi.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "reporting"
        ]
      },
      {
        "id": "zh-x7-32",
        "type": "dialogue",
        "prompt": "Trong cuộc họp, bạn chưa hiểu nhiệm vụ. Chọn phản hồi phù hợp.",
        "options": [
          "Bạn có thể xác nhận lại đầu việc và thời hạn giúp mình không?",
          "Thôi bỏ qua.",
          "Tôi hiểu rồi dù chưa hiểu.",
          "Không nói gì."
        ],
        "answers": [
          "Bạn có thể xác nhận lại đầu việc và thời hạn giúp mình không?"
        ],
        "difficulty": 4,
        "tags": [
          "meeting"
        ]
      },
      {
        "id": "zh-x8-32",
        "type": "translation",
        "prompt": "Diễn đạt ý “vui lòng xác nhận trước khi triển khai” theo ngôn ngữ mục tiêu hoặc văn phong đang luyện.",
        "answers": [
          "vui lòng xác nhận trước khi triển khai",
          "please confirm before proceeding"
        ],
        "difficulty": 4,
        "tags": [
          "translation"
        ]
      }
    ]
  },
  {
    "id": "official-zh-extra-33",
    "title": "中文 Workplace — 会议、报告与客户沟通",
    "language": "zh",
    "level": "HSK 2–4",
    "topic": "Workplace",
    "context": "Workplace",
    "skill": "Professional Communication",
    "description": "Bộ nâng cao nhiều dạng bài, tập trung năng lực thực tế và tư duy xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "zh-x1-33",
        "type": "reading_group",
        "prompt": "Đọc tình huống và xác định mục đích chính của người viết.",
        "passage": "Một nhóm đang chuẩn bị hoạt động tại trường. Người phụ trách gửi thông báo gồm thời gian, địa điểm, nhiệm vụ và đầu mối liên hệ để mọi người chuẩn bị trước.",
        "options": [
          "Cung cấp thông tin tổ chức hoạt động",
          "Kể chuyện giải trí",
          "Quảng cáo sản phẩm",
          "Xin nghỉ học"
        ],
        "answers": [
          "Cung cấp thông tin tổ chức hoạt động"
        ],
        "difficulty": 4,
        "tags": [
          "reading",
          "inference"
        ]
      },
      {
        "id": "zh-x2-33",
        "type": "scenario_decision",
        "prompt": "Một thành viên báo không thể tham gia vào phút chót. Cách xử lý tốt nhất?",
        "options": [
          "Xác nhận thông tin, đánh giá ảnh hưởng, phân công thay thế và cập nhật nhóm",
          "Mắng thành viên trước nhóm",
          "Hủy toàn bộ hoạt động",
          "Không phản hồi"
        ],
        "answers": [
          "Xác nhận thông tin, đánh giá ảnh hưởng, phân công thay thế và cập nhật nhóm"
        ],
        "difficulty": 5,
        "tags": [
          "leadership",
          "scenario"
        ]
      },
      {
        "id": "zh-x3-33",
        "type": "multiple_select",
        "prompt": "Chọn các yếu tố nên có trong một thông báo đổi lịch.",
        "options": [
          "Thời gian mới",
          "Lý do ngắn gọn",
          "Việc người nhận cần làm",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Thời gian mới",
          "Lý do ngắn gọn",
          "Việc người nhận cần làm"
        ],
        "difficulty": 4,
        "tags": [
          "communication"
        ]
      },
      {
        "id": "zh-x4-33",
        "type": "word_formation",
        "prompt": "Chọn dạng diễn đạt phù hợp với văn phong chuyên nghiệp.",
        "options": [
          "xác nhận",
          "ờ ha",
          "chắc vậy",
          "tùy"
        ],
        "answers": [
          "xác nhận"
        ],
        "difficulty": 3,
        "tags": [
          "register"
        ]
      },
      {
        "id": "zh-x5-33",
        "type": "ordering",
        "prompt": "Sắp xếp chu trình làm việc hợp lý.",
        "options": [
          "Tiếp nhận",
          "Xác nhận",
          "Thực hiện",
          "Kiểm tra",
          "Báo cáo"
        ],
        "answers": [
          "Tiếp nhận Xác nhận Thực hiện Kiểm tra Báo cáo"
        ],
        "difficulty": 4,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "zh-x6-33",
        "type": "true_false",
        "prompt": "Một báo cáo tốt nên tách rõ sự kiện, kết quả và việc cần theo dõi.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "reporting"
        ]
      },
      {
        "id": "zh-x7-33",
        "type": "dialogue",
        "prompt": "Trong cuộc họp, bạn chưa hiểu nhiệm vụ. Chọn phản hồi phù hợp.",
        "options": [
          "Bạn có thể xác nhận lại đầu việc và thời hạn giúp mình không?",
          "Thôi bỏ qua.",
          "Tôi hiểu rồi dù chưa hiểu.",
          "Không nói gì."
        ],
        "answers": [
          "Bạn có thể xác nhận lại đầu việc và thời hạn giúp mình không?"
        ],
        "difficulty": 4,
        "tags": [
          "meeting"
        ]
      },
      {
        "id": "zh-x8-33",
        "type": "translation",
        "prompt": "Diễn đạt ý “vui lòng xác nhận trước khi triển khai” theo ngôn ngữ mục tiêu hoặc văn phong đang luyện.",
        "answers": [
          "vui lòng xác nhận trước khi triển khai",
          "please confirm before proceeding"
        ],
        "difficulty": 4,
        "tags": [
          "translation"
        ]
      }
    ]
  },
  {
    "id": "official-vi-extra-34",
    "title": "Tiếng Việt THCS–THPT — Đọc hiểu & Ngôn ngữ",
    "language": "vi",
    "level": "THCS–THPT",
    "topic": "School & Exam",
    "context": "School & Exam",
    "skill": "Reading / Language",
    "description": "Bộ nâng cao nhiều dạng bài, tập trung năng lực thực tế và tư duy xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "vi-x1-34",
        "type": "reading_group",
        "prompt": "Đọc tình huống và xác định mục đích chính của người viết.",
        "passage": "Một nhóm đang chuẩn bị hoạt động tại trường. Người phụ trách gửi thông báo gồm thời gian, địa điểm, nhiệm vụ và đầu mối liên hệ để mọi người chuẩn bị trước.",
        "options": [
          "Cung cấp thông tin tổ chức hoạt động",
          "Kể chuyện giải trí",
          "Quảng cáo sản phẩm",
          "Xin nghỉ học"
        ],
        "answers": [
          "Cung cấp thông tin tổ chức hoạt động"
        ],
        "difficulty": 4,
        "tags": [
          "reading",
          "inference"
        ]
      },
      {
        "id": "vi-x2-34",
        "type": "scenario_decision",
        "prompt": "Một thành viên báo không thể tham gia vào phút chót. Cách xử lý tốt nhất?",
        "options": [
          "Xác nhận thông tin, đánh giá ảnh hưởng, phân công thay thế và cập nhật nhóm",
          "Mắng thành viên trước nhóm",
          "Hủy toàn bộ hoạt động",
          "Không phản hồi"
        ],
        "answers": [
          "Xác nhận thông tin, đánh giá ảnh hưởng, phân công thay thế và cập nhật nhóm"
        ],
        "difficulty": 5,
        "tags": [
          "leadership",
          "scenario"
        ]
      },
      {
        "id": "vi-x3-34",
        "type": "multiple_select",
        "prompt": "Chọn các yếu tố nên có trong một thông báo đổi lịch.",
        "options": [
          "Thời gian mới",
          "Lý do ngắn gọn",
          "Việc người nhận cần làm",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Thời gian mới",
          "Lý do ngắn gọn",
          "Việc người nhận cần làm"
        ],
        "difficulty": 4,
        "tags": [
          "communication"
        ]
      },
      {
        "id": "vi-x4-34",
        "type": "word_formation",
        "prompt": "Chọn dạng diễn đạt phù hợp với văn phong chuyên nghiệp.",
        "options": [
          "xác nhận",
          "ờ ha",
          "chắc vậy",
          "tùy"
        ],
        "answers": [
          "xác nhận"
        ],
        "difficulty": 3,
        "tags": [
          "register"
        ]
      },
      {
        "id": "vi-x5-34",
        "type": "ordering",
        "prompt": "Sắp xếp chu trình làm việc hợp lý.",
        "options": [
          "Tiếp nhận",
          "Xác nhận",
          "Thực hiện",
          "Kiểm tra",
          "Báo cáo"
        ],
        "answers": [
          "Tiếp nhận Xác nhận Thực hiện Kiểm tra Báo cáo"
        ],
        "difficulty": 4,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "vi-x6-34",
        "type": "true_false",
        "prompt": "Một báo cáo tốt nên tách rõ sự kiện, kết quả và việc cần theo dõi.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "reporting"
        ]
      },
      {
        "id": "vi-x7-34",
        "type": "dialogue",
        "prompt": "Trong cuộc họp, bạn chưa hiểu nhiệm vụ. Chọn phản hồi phù hợp.",
        "options": [
          "Bạn có thể xác nhận lại đầu việc và thời hạn giúp mình không?",
          "Thôi bỏ qua.",
          "Tôi hiểu rồi dù chưa hiểu.",
          "Không nói gì."
        ],
        "answers": [
          "Bạn có thể xác nhận lại đầu việc và thời hạn giúp mình không?"
        ],
        "difficulty": 4,
        "tags": [
          "meeting"
        ]
      },
      {
        "id": "vi-x8-34",
        "type": "translation",
        "prompt": "Diễn đạt ý “vui lòng xác nhận trước khi triển khai” theo ngôn ngữ mục tiêu hoặc văn phong đang luyện.",
        "answers": [
          "vui lòng xác nhận trước khi triển khai",
          "please confirm before proceeding"
        ],
        "difficulty": 4,
        "tags": [
          "translation"
        ]
      }
    ]
  },
  {
    "id": "official-vi-extra-35",
    "title": "Tiếng Việt thực tế — Trường học, TNV & công việc",
    "language": "vi",
    "level": "Advanced",
    "topic": "School Workplace",
    "context": "School Workplace",
    "skill": "Professional Communication",
    "description": "Bộ nâng cao nhiều dạng bài, tập trung năng lực thực tế và tư duy xử lý tình huống.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "vi-x1-35",
        "type": "reading_group",
        "prompt": "Đọc tình huống và xác định mục đích chính của người viết.",
        "passage": "Một nhóm đang chuẩn bị hoạt động tại trường. Người phụ trách gửi thông báo gồm thời gian, địa điểm, nhiệm vụ và đầu mối liên hệ để mọi người chuẩn bị trước.",
        "options": [
          "Cung cấp thông tin tổ chức hoạt động",
          "Kể chuyện giải trí",
          "Quảng cáo sản phẩm",
          "Xin nghỉ học"
        ],
        "answers": [
          "Cung cấp thông tin tổ chức hoạt động"
        ],
        "difficulty": 4,
        "tags": [
          "reading",
          "inference"
        ]
      },
      {
        "id": "vi-x2-35",
        "type": "scenario_decision",
        "prompt": "Một thành viên báo không thể tham gia vào phút chót. Cách xử lý tốt nhất?",
        "options": [
          "Xác nhận thông tin, đánh giá ảnh hưởng, phân công thay thế và cập nhật nhóm",
          "Mắng thành viên trước nhóm",
          "Hủy toàn bộ hoạt động",
          "Không phản hồi"
        ],
        "answers": [
          "Xác nhận thông tin, đánh giá ảnh hưởng, phân công thay thế và cập nhật nhóm"
        ],
        "difficulty": 5,
        "tags": [
          "leadership",
          "scenario"
        ]
      },
      {
        "id": "vi-x3-35",
        "type": "multiple_select",
        "prompt": "Chọn các yếu tố nên có trong một thông báo đổi lịch.",
        "options": [
          "Thời gian mới",
          "Lý do ngắn gọn",
          "Việc người nhận cần làm",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Thời gian mới",
          "Lý do ngắn gọn",
          "Việc người nhận cần làm"
        ],
        "difficulty": 4,
        "tags": [
          "communication"
        ]
      },
      {
        "id": "vi-x4-35",
        "type": "word_formation",
        "prompt": "Chọn dạng diễn đạt phù hợp với văn phong chuyên nghiệp.",
        "options": [
          "xác nhận",
          "ờ ha",
          "chắc vậy",
          "tùy"
        ],
        "answers": [
          "xác nhận"
        ],
        "difficulty": 3,
        "tags": [
          "register"
        ]
      },
      {
        "id": "vi-x5-35",
        "type": "ordering",
        "prompt": "Sắp xếp chu trình làm việc hợp lý.",
        "options": [
          "Tiếp nhận",
          "Xác nhận",
          "Thực hiện",
          "Kiểm tra",
          "Báo cáo"
        ],
        "answers": [
          "Tiếp nhận Xác nhận Thực hiện Kiểm tra Báo cáo"
        ],
        "difficulty": 4,
        "tags": [
          "workflow"
        ]
      },
      {
        "id": "vi-x6-35",
        "type": "true_false",
        "prompt": "Một báo cáo tốt nên tách rõ sự kiện, kết quả và việc cần theo dõi.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "reporting"
        ]
      },
      {
        "id": "vi-x7-35",
        "type": "dialogue",
        "prompt": "Trong cuộc họp, bạn chưa hiểu nhiệm vụ. Chọn phản hồi phù hợp.",
        "options": [
          "Bạn có thể xác nhận lại đầu việc và thời hạn giúp mình không?",
          "Thôi bỏ qua.",
          "Tôi hiểu rồi dù chưa hiểu.",
          "Không nói gì."
        ],
        "answers": [
          "Bạn có thể xác nhận lại đầu việc và thời hạn giúp mình không?"
        ],
        "difficulty": 4,
        "tags": [
          "meeting"
        ]
      },
      {
        "id": "vi-x8-35",
        "type": "translation",
        "prompt": "Diễn đạt ý “vui lòng xác nhận trước khi triển khai” theo ngôn ngữ mục tiêu hoặc văn phong đang luyện.",
        "answers": [
          "vui lòng xác nhận trước khi triển khai",
          "please confirm before proceeding"
        ],
        "difficulty": 4,
        "tags": [
          "translation"
        ]
      }
    ]
  },
  {
    "id": "official-en-school-scenario",
    "title": "English — School & Classroom Scenarios",
    "language": "en",
    "level": "School / Intermediate",
    "topic": "School & Classroom",
    "context": "School Workplace",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Bài tập thực tế ở trường: đổi lịch, đổi phòng, thông báo, phối hợp và xử lý tình huống lớp học.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "en-s1",
        "type": "dialogue",
        "prompt": "Bạn chưa nghe rõ hướng dẫn. Chọn cách yêu cầu nhắc lại lịch sự nhất.",
        "options": [
          "Could you repeat that, please?",
          "Không cần nói gì.",
          "Nói thật to một từ bất kỳ.",
          "Rời cuộc trò chuyện."
        ],
        "answers": [
          "Could you repeat that, please?"
        ],
        "difficulty": 2,
        "tags": [
          "school",
          "dialogue",
          "politeness"
        ]
      },
      {
        "id": "en-s2",
        "type": "scenario_decision",
        "prompt": "Bạn đến trường nhưng không tìm thấy phòng học mới. Nên làm gì trước?",
        "options": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách",
          "Tự chọn một phòng bất kỳ",
          "Về nhà ngay",
          "Đợi mà không báo ai"
        ],
        "answers": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách"
        ],
        "difficulty": 3,
        "tags": [
          "school-workplace",
          "scenario"
        ]
      },
      {
        "id": "en-s3",
        "type": "multiple_select",
        "prompt": "Chọn thông tin nên có trong thông báo đổi phòng học.",
        "options": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ"
        ],
        "difficulty": 3,
        "tags": [
          "school",
          "communication"
        ]
      },
      {
        "id": "en-s4",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình chuẩn bị một buổi học.",
        "options": [
          "Xác nhận phòng",
          "Chuẩn bị nội dung",
          "Kiểm tra thiết bị",
          "Đón học viên",
          "Tổng kết"
        ],
        "answers": [
          "Xác nhận phòng Chuẩn bị nội dung Kiểm tra thiết bị Đón học viên Tổng kết"
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "workflow"
        ]
      },
      {
        "id": "en-s5",
        "type": "error_correction",
        "prompt": "Chọn thông báo phù hợp nhất khi phải đổi lịch đột xuất.",
        "options": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin.",
          "Đổi giờ nha.",
          "Tự xem lại đi.",
          "Không cần thông báo."
        ],
        "answers": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "formal"
        ]
      },
      {
        "id": "en-s6",
        "type": "reading_group",
        "prompt": "Từ thông báo, hành động nào cần làm trước buổi học?",
        "passage": "Ban tổ chức thông báo phòng học thay đổi. Học viên cần kiểm tra địa điểm mới, có mặt trước 10 phút và liên hệ đầu mối nếu gặp khó khăn.",
        "options": [
          "Kiểm tra địa điểm mới và đến sớm",
          "Chỉ đến sau giờ học",
          "Không đọc thông báo",
          "Tự đổi sang ngày khác"
        ],
        "answers": [
          "Kiểm tra địa điểm mới và đến sớm"
        ],
        "difficulty": 3,
        "tags": [
          "reading",
          "school"
        ]
      },
      {
        "id": "en-s7",
        "type": "translation",
        "prompt": "Diễn đạt/nhận diện câu dùng để xác nhận phòng học: “Please confirm the room number.”",
        "answers": [
          "Please confirm the room number.",
          "Vui lòng xác nhận số phòng học."
        ],
        "difficulty": 3,
        "tags": [
          "translation",
          "school"
        ]
      },
      {
        "id": "en-s8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là người phụ trách lớp và có học viên đến nhầm phòng. Phản hồi nào tốt nhất?",
        "options": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau.",
          "Bạn tự tìm đi.",
          "Không phải việc của mình.",
          "Im lặng."
        ],
        "answers": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau."
        ],
        "difficulty": 5,
        "tags": [
          "roleplay",
          "school-workplace"
        ]
      }
    ]
  },
  {
    "id": "official-en-travel-public",
    "title": "English — Travel & Public Services",
    "language": "en",
    "level": "Everyday / Intermediate",
    "topic": "Travel & Public Services",
    "context": "Travel",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Sân bay, khách sạn, phương tiện, hỏi đường và dịch vụ công cộng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "en-t1",
        "type": "dialogue",
        "prompt": "Bạn cần hỏi đường tới ga gần nhất. Chọn câu phù hợp.",
        "options": [
          "Where is the nearest station?",
          "I would like to make a reservation.",
          "Please confirm the room number.",
          "Could you repeat that, please?"
        ],
        "answers": [
          "Where is the nearest station?"
        ],
        "difficulty": 2,
        "tags": [
          "travel",
          "dialogue"
        ]
      },
      {
        "id": "en-t2",
        "type": "dialogue",
        "prompt": "Bạn muốn đặt phòng khách sạn. Chọn câu phù hợp.",
        "options": [
          "I would like to make a reservation.",
          "Could you repeat that, please?",
          "Where is the nearest station?",
          "Please confirm the room number."
        ],
        "answers": [
          "I would like to make a reservation."
        ],
        "difficulty": 2,
        "tags": [
          "hotel",
          "dialogue"
        ]
      },
      {
        "id": "en-t3",
        "type": "scenario_decision",
        "prompt": "Chuyến bay bị hoãn 45 phút và bạn có chuyến nối chuyến. Nên làm gì?",
        "options": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến",
          "Rời sân bay không báo ai",
          "Bỏ hành lý",
          "Tắt điện thoại"
        ],
        "answers": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến"
        ],
        "difficulty": 4,
        "tags": [
          "airport",
          "scenario"
        ]
      },
      {
        "id": "en-t4",
        "type": "multiple_select",
        "prompt": "Khi nhận phòng khách sạn, thông tin nào nên xác nhận?",
        "options": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng",
          "Mật khẩu mạng xã hội cá nhân"
        ],
        "answers": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng"
        ],
        "difficulty": 3,
        "tags": [
          "hotel",
          "practical"
        ]
      },
      {
        "id": "en-t5",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý thất lạc hành lý.",
        "options": [
          "Xác định quầy hỗ trợ",
          "Cung cấp thông tin chuyến bay",
          "Mô tả hành lý",
          "Nhận mã hồ sơ",
          "Theo dõi cập nhật"
        ],
        "answers": [
          "Xác định quầy hỗ trợ Cung cấp thông tin chuyến bay Mô tả hành lý Nhận mã hồ sơ Theo dõi cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "travel",
          "workflow"
        ]
      },
      {
        "id": "en-t6",
        "type": "reading_group",
        "prompt": "Đâu là thông tin quan trọng nhất trong bảng thông báo?",
        "passage": "Gate changed from B12 to C04. Boarding begins at 18:20. Passengers should arrive at the gate at least 20 minutes before departure.",
        "options": [
          "Cổng mới và giờ boarding",
          "Màu máy bay",
          "Tên phi công",
          "Giá vé năm sau"
        ],
        "answers": [
          "Cổng mới và giờ boarding"
        ],
        "difficulty": 3,
        "tags": [
          "travel",
          "reading"
        ]
      },
      {
        "id": "en-t7",
        "type": "true_false",
        "prompt": "Trong tình huống khẩn cấp ở nơi công cộng, nên cung cấp địa điểm và mô tả sự việc rõ ràng khi yêu cầu hỗ trợ.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "public-services",
          "safety"
        ]
      },
      {
        "id": "en-t8",
        "type": "roleplay",
        "prompt": "Role-play: nhân viên nói bạn chưa có tên trong danh sách đặt phòng. Cách phản hồi tốt nhất?",
        "options": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại.",
          "Nổi giận và bỏ đi.",
          "Đưa thông tin không liên quan.",
          "Yêu cầu người khác tự giải quyết."
        ],
        "answers": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại."
        ],
        "difficulty": 5,
        "tags": [
          "hotel",
          "problem-solving"
        ]
      }
    ]
  },
  {
    "id": "official-zh-school-scenario",
    "title": "中文 — School & Classroom Scenarios",
    "language": "zh",
    "level": "School / Intermediate",
    "topic": "School & Classroom",
    "context": "School Workplace",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Bài tập thực tế ở trường: đổi lịch, đổi phòng, thông báo, phối hợp và xử lý tình huống lớp học.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "zh-s1",
        "type": "dialogue",
        "prompt": "Bạn chưa nghe rõ hướng dẫn. Chọn cách yêu cầu nhắc lại lịch sự nhất.",
        "options": [
          "请再说一遍。",
          "Không cần nói gì.",
          "Nói thật to một từ bất kỳ.",
          "Rời cuộc trò chuyện."
        ],
        "answers": [
          "请再说一遍。"
        ],
        "difficulty": 2,
        "tags": [
          "school",
          "dialogue",
          "politeness"
        ]
      },
      {
        "id": "zh-s2",
        "type": "scenario_decision",
        "prompt": "Bạn đến trường nhưng không tìm thấy phòng học mới. Nên làm gì trước?",
        "options": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách",
          "Tự chọn một phòng bất kỳ",
          "Về nhà ngay",
          "Đợi mà không báo ai"
        ],
        "answers": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách"
        ],
        "difficulty": 3,
        "tags": [
          "school-workplace",
          "scenario"
        ]
      },
      {
        "id": "zh-s3",
        "type": "multiple_select",
        "prompt": "Chọn thông tin nên có trong thông báo đổi phòng học.",
        "options": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ"
        ],
        "difficulty": 3,
        "tags": [
          "school",
          "communication"
        ]
      },
      {
        "id": "zh-s4",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình chuẩn bị một buổi học.",
        "options": [
          "Xác nhận phòng",
          "Chuẩn bị nội dung",
          "Kiểm tra thiết bị",
          "Đón học viên",
          "Tổng kết"
        ],
        "answers": [
          "Xác nhận phòng Chuẩn bị nội dung Kiểm tra thiết bị Đón học viên Tổng kết"
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "workflow"
        ]
      },
      {
        "id": "zh-s5",
        "type": "error_correction",
        "prompt": "Chọn thông báo phù hợp nhất khi phải đổi lịch đột xuất.",
        "options": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin.",
          "Đổi giờ nha.",
          "Tự xem lại đi.",
          "Không cần thông báo."
        ],
        "answers": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "formal"
        ]
      },
      {
        "id": "zh-s6",
        "type": "reading_group",
        "prompt": "Từ thông báo, hành động nào cần làm trước buổi học?",
        "passage": "Ban tổ chức thông báo phòng học thay đổi. Học viên cần kiểm tra địa điểm mới, có mặt trước 10 phút và liên hệ đầu mối nếu gặp khó khăn.",
        "options": [
          "Kiểm tra địa điểm mới và đến sớm",
          "Chỉ đến sau giờ học",
          "Không đọc thông báo",
          "Tự đổi sang ngày khác"
        ],
        "answers": [
          "Kiểm tra địa điểm mới và đến sớm"
        ],
        "difficulty": 3,
        "tags": [
          "reading",
          "school"
        ]
      },
      {
        "id": "zh-s7",
        "type": "translation",
        "prompt": "Diễn đạt/nhận diện câu dùng để xác nhận phòng học: “请确认教室号码。”",
        "answers": [
          "请确认教室号码。",
          "Vui lòng xác nhận số phòng học."
        ],
        "difficulty": 3,
        "tags": [
          "translation",
          "school"
        ]
      },
      {
        "id": "zh-s8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là người phụ trách lớp và có học viên đến nhầm phòng. Phản hồi nào tốt nhất?",
        "options": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau.",
          "Bạn tự tìm đi.",
          "Không phải việc của mình.",
          "Im lặng."
        ],
        "answers": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau."
        ],
        "difficulty": 5,
        "tags": [
          "roleplay",
          "school-workplace"
        ]
      }
    ]
  },
  {
    "id": "official-zh-travel-public",
    "title": "中文 — Travel & Public Services",
    "language": "zh",
    "level": "Everyday / Intermediate",
    "topic": "Travel & Public Services",
    "context": "Travel",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Sân bay, khách sạn, phương tiện, hỏi đường và dịch vụ công cộng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "zh-t1",
        "type": "dialogue",
        "prompt": "Bạn cần hỏi đường tới ga gần nhất. Chọn câu phù hợp.",
        "options": [
          "最近的车站在哪里？",
          "我想预订一个房间。",
          "请确认教室号码。",
          "请再说一遍。"
        ],
        "answers": [
          "最近的车站在哪里？"
        ],
        "difficulty": 2,
        "tags": [
          "travel",
          "dialogue"
        ]
      },
      {
        "id": "zh-t2",
        "type": "dialogue",
        "prompt": "Bạn muốn đặt phòng khách sạn. Chọn câu phù hợp.",
        "options": [
          "我想预订一个房间。",
          "请再说一遍。",
          "最近的车站在哪里？",
          "请确认教室号码。"
        ],
        "answers": [
          "我想预订一个房间。"
        ],
        "difficulty": 2,
        "tags": [
          "hotel",
          "dialogue"
        ]
      },
      {
        "id": "zh-t3",
        "type": "scenario_decision",
        "prompt": "Chuyến bay bị hoãn 45 phút và bạn có chuyến nối chuyến. Nên làm gì?",
        "options": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến",
          "Rời sân bay không báo ai",
          "Bỏ hành lý",
          "Tắt điện thoại"
        ],
        "answers": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến"
        ],
        "difficulty": 4,
        "tags": [
          "airport",
          "scenario"
        ]
      },
      {
        "id": "zh-t4",
        "type": "multiple_select",
        "prompt": "Khi nhận phòng khách sạn, thông tin nào nên xác nhận?",
        "options": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng",
          "Mật khẩu mạng xã hội cá nhân"
        ],
        "answers": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng"
        ],
        "difficulty": 3,
        "tags": [
          "hotel",
          "practical"
        ]
      },
      {
        "id": "zh-t5",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý thất lạc hành lý.",
        "options": [
          "Xác định quầy hỗ trợ",
          "Cung cấp thông tin chuyến bay",
          "Mô tả hành lý",
          "Nhận mã hồ sơ",
          "Theo dõi cập nhật"
        ],
        "answers": [
          "Xác định quầy hỗ trợ Cung cấp thông tin chuyến bay Mô tả hành lý Nhận mã hồ sơ Theo dõi cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "travel",
          "workflow"
        ]
      },
      {
        "id": "zh-t6",
        "type": "reading_group",
        "prompt": "Đâu là thông tin quan trọng nhất trong bảng thông báo?",
        "passage": "Gate changed from B12 to C04. Boarding begins at 18:20. Passengers should arrive at the gate at least 20 minutes before departure.",
        "options": [
          "Cổng mới và giờ boarding",
          "Màu máy bay",
          "Tên phi công",
          "Giá vé năm sau"
        ],
        "answers": [
          "Cổng mới và giờ boarding"
        ],
        "difficulty": 3,
        "tags": [
          "travel",
          "reading"
        ]
      },
      {
        "id": "zh-t7",
        "type": "true_false",
        "prompt": "Trong tình huống khẩn cấp ở nơi công cộng, nên cung cấp địa điểm và mô tả sự việc rõ ràng khi yêu cầu hỗ trợ.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "public-services",
          "safety"
        ]
      },
      {
        "id": "zh-t8",
        "type": "roleplay",
        "prompt": "Role-play: nhân viên nói bạn chưa có tên trong danh sách đặt phòng. Cách phản hồi tốt nhất?",
        "options": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại.",
          "Nổi giận và bỏ đi.",
          "Đưa thông tin không liên quan.",
          "Yêu cầu người khác tự giải quyết."
        ],
        "answers": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại."
        ],
        "difficulty": 5,
        "tags": [
          "hotel",
          "problem-solving"
        ]
      }
    ]
  },
  {
    "id": "official-ja-school-scenario",
    "title": "日本語 — School & Classroom Scenarios",
    "language": "ja",
    "level": "School / Intermediate",
    "topic": "School & Classroom",
    "context": "School Workplace",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Bài tập thực tế ở trường: đổi lịch, đổi phòng, thông báo, phối hợp và xử lý tình huống lớp học.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ja-s1",
        "type": "dialogue",
        "prompt": "Bạn chưa nghe rõ hướng dẫn. Chọn cách yêu cầu nhắc lại lịch sự nhất.",
        "options": [
          "もう一度お願いします。",
          "Không cần nói gì.",
          "Nói thật to một từ bất kỳ.",
          "Rời cuộc trò chuyện."
        ],
        "answers": [
          "もう一度お願いします。"
        ],
        "difficulty": 2,
        "tags": [
          "school",
          "dialogue",
          "politeness"
        ]
      },
      {
        "id": "ja-s2",
        "type": "scenario_decision",
        "prompt": "Bạn đến trường nhưng không tìm thấy phòng học mới. Nên làm gì trước?",
        "options": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách",
          "Tự chọn một phòng bất kỳ",
          "Về nhà ngay",
          "Đợi mà không báo ai"
        ],
        "answers": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách"
        ],
        "difficulty": 3,
        "tags": [
          "school-workplace",
          "scenario"
        ]
      },
      {
        "id": "ja-s3",
        "type": "multiple_select",
        "prompt": "Chọn thông tin nên có trong thông báo đổi phòng học.",
        "options": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ"
        ],
        "difficulty": 3,
        "tags": [
          "school",
          "communication"
        ]
      },
      {
        "id": "ja-s4",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình chuẩn bị một buổi học.",
        "options": [
          "Xác nhận phòng",
          "Chuẩn bị nội dung",
          "Kiểm tra thiết bị",
          "Đón học viên",
          "Tổng kết"
        ],
        "answers": [
          "Xác nhận phòng Chuẩn bị nội dung Kiểm tra thiết bị Đón học viên Tổng kết"
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "workflow"
        ]
      },
      {
        "id": "ja-s5",
        "type": "error_correction",
        "prompt": "Chọn thông báo phù hợp nhất khi phải đổi lịch đột xuất.",
        "options": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin.",
          "Đổi giờ nha.",
          "Tự xem lại đi.",
          "Không cần thông báo."
        ],
        "answers": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "formal"
        ]
      },
      {
        "id": "ja-s6",
        "type": "reading_group",
        "prompt": "Từ thông báo, hành động nào cần làm trước buổi học?",
        "passage": "Ban tổ chức thông báo phòng học thay đổi. Học viên cần kiểm tra địa điểm mới, có mặt trước 10 phút và liên hệ đầu mối nếu gặp khó khăn.",
        "options": [
          "Kiểm tra địa điểm mới và đến sớm",
          "Chỉ đến sau giờ học",
          "Không đọc thông báo",
          "Tự đổi sang ngày khác"
        ],
        "answers": [
          "Kiểm tra địa điểm mới và đến sớm"
        ],
        "difficulty": 3,
        "tags": [
          "reading",
          "school"
        ]
      },
      {
        "id": "ja-s7",
        "type": "translation",
        "prompt": "Diễn đạt/nhận diện câu dùng để xác nhận phòng học: “教室番号を確認してください。”",
        "answers": [
          "教室番号を確認してください。",
          "Vui lòng xác nhận số phòng học."
        ],
        "difficulty": 3,
        "tags": [
          "translation",
          "school"
        ]
      },
      {
        "id": "ja-s8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là người phụ trách lớp và có học viên đến nhầm phòng. Phản hồi nào tốt nhất?",
        "options": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau.",
          "Bạn tự tìm đi.",
          "Không phải việc của mình.",
          "Im lặng."
        ],
        "answers": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau."
        ],
        "difficulty": 5,
        "tags": [
          "roleplay",
          "school-workplace"
        ]
      }
    ]
  },
  {
    "id": "official-ja-travel-public",
    "title": "日本語 — Travel & Public Services",
    "language": "ja",
    "level": "Everyday / Intermediate",
    "topic": "Travel & Public Services",
    "context": "Travel",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Sân bay, khách sạn, phương tiện, hỏi đường và dịch vụ công cộng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ja-t1",
        "type": "dialogue",
        "prompt": "Bạn cần hỏi đường tới ga gần nhất. Chọn câu phù hợp.",
        "options": [
          "最寄りの駅はどこですか。",
          "予約をしたいです。",
          "教室番号を確認してください。",
          "もう一度お願いします。"
        ],
        "answers": [
          "最寄りの駅はどこですか。"
        ],
        "difficulty": 2,
        "tags": [
          "travel",
          "dialogue"
        ]
      },
      {
        "id": "ja-t2",
        "type": "dialogue",
        "prompt": "Bạn muốn đặt phòng khách sạn. Chọn câu phù hợp.",
        "options": [
          "予約をしたいです。",
          "もう一度お願いします。",
          "最寄りの駅はどこですか。",
          "教室番号を確認してください。"
        ],
        "answers": [
          "予約をしたいです。"
        ],
        "difficulty": 2,
        "tags": [
          "hotel",
          "dialogue"
        ]
      },
      {
        "id": "ja-t3",
        "type": "scenario_decision",
        "prompt": "Chuyến bay bị hoãn 45 phút và bạn có chuyến nối chuyến. Nên làm gì?",
        "options": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến",
          "Rời sân bay không báo ai",
          "Bỏ hành lý",
          "Tắt điện thoại"
        ],
        "answers": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến"
        ],
        "difficulty": 4,
        "tags": [
          "airport",
          "scenario"
        ]
      },
      {
        "id": "ja-t4",
        "type": "multiple_select",
        "prompt": "Khi nhận phòng khách sạn, thông tin nào nên xác nhận?",
        "options": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng",
          "Mật khẩu mạng xã hội cá nhân"
        ],
        "answers": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng"
        ],
        "difficulty": 3,
        "tags": [
          "hotel",
          "practical"
        ]
      },
      {
        "id": "ja-t5",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý thất lạc hành lý.",
        "options": [
          "Xác định quầy hỗ trợ",
          "Cung cấp thông tin chuyến bay",
          "Mô tả hành lý",
          "Nhận mã hồ sơ",
          "Theo dõi cập nhật"
        ],
        "answers": [
          "Xác định quầy hỗ trợ Cung cấp thông tin chuyến bay Mô tả hành lý Nhận mã hồ sơ Theo dõi cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "travel",
          "workflow"
        ]
      },
      {
        "id": "ja-t6",
        "type": "reading_group",
        "prompt": "Đâu là thông tin quan trọng nhất trong bảng thông báo?",
        "passage": "Gate changed from B12 to C04. Boarding begins at 18:20. Passengers should arrive at the gate at least 20 minutes before departure.",
        "options": [
          "Cổng mới và giờ boarding",
          "Màu máy bay",
          "Tên phi công",
          "Giá vé năm sau"
        ],
        "answers": [
          "Cổng mới và giờ boarding"
        ],
        "difficulty": 3,
        "tags": [
          "travel",
          "reading"
        ]
      },
      {
        "id": "ja-t7",
        "type": "true_false",
        "prompt": "Trong tình huống khẩn cấp ở nơi công cộng, nên cung cấp địa điểm và mô tả sự việc rõ ràng khi yêu cầu hỗ trợ.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "public-services",
          "safety"
        ]
      },
      {
        "id": "ja-t8",
        "type": "roleplay",
        "prompt": "Role-play: nhân viên nói bạn chưa có tên trong danh sách đặt phòng. Cách phản hồi tốt nhất?",
        "options": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại.",
          "Nổi giận và bỏ đi.",
          "Đưa thông tin không liên quan.",
          "Yêu cầu người khác tự giải quyết."
        ],
        "answers": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại."
        ],
        "difficulty": 5,
        "tags": [
          "hotel",
          "problem-solving"
        ]
      }
    ]
  },
  {
    "id": "official-ko-school-scenario",
    "title": "한국어 — School & Classroom Scenarios",
    "language": "ko",
    "level": "School / Intermediate",
    "topic": "School & Classroom",
    "context": "School Workplace",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Bài tập thực tế ở trường: đổi lịch, đổi phòng, thông báo, phối hợp và xử lý tình huống lớp học.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ko-s1",
        "type": "dialogue",
        "prompt": "Bạn chưa nghe rõ hướng dẫn. Chọn cách yêu cầu nhắc lại lịch sự nhất.",
        "options": [
          "다시 말씀해 주세요.",
          "Không cần nói gì.",
          "Nói thật to một từ bất kỳ.",
          "Rời cuộc trò chuyện."
        ],
        "answers": [
          "다시 말씀해 주세요."
        ],
        "difficulty": 2,
        "tags": [
          "school",
          "dialogue",
          "politeness"
        ]
      },
      {
        "id": "ko-s2",
        "type": "scenario_decision",
        "prompt": "Bạn đến trường nhưng không tìm thấy phòng học mới. Nên làm gì trước?",
        "options": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách",
          "Tự chọn một phòng bất kỳ",
          "Về nhà ngay",
          "Đợi mà không báo ai"
        ],
        "answers": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách"
        ],
        "difficulty": 3,
        "tags": [
          "school-workplace",
          "scenario"
        ]
      },
      {
        "id": "ko-s3",
        "type": "multiple_select",
        "prompt": "Chọn thông tin nên có trong thông báo đổi phòng học.",
        "options": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ"
        ],
        "difficulty": 3,
        "tags": [
          "school",
          "communication"
        ]
      },
      {
        "id": "ko-s4",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình chuẩn bị một buổi học.",
        "options": [
          "Xác nhận phòng",
          "Chuẩn bị nội dung",
          "Kiểm tra thiết bị",
          "Đón học viên",
          "Tổng kết"
        ],
        "answers": [
          "Xác nhận phòng Chuẩn bị nội dung Kiểm tra thiết bị Đón học viên Tổng kết"
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "workflow"
        ]
      },
      {
        "id": "ko-s5",
        "type": "error_correction",
        "prompt": "Chọn thông báo phù hợp nhất khi phải đổi lịch đột xuất.",
        "options": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin.",
          "Đổi giờ nha.",
          "Tự xem lại đi.",
          "Không cần thông báo."
        ],
        "answers": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "formal"
        ]
      },
      {
        "id": "ko-s6",
        "type": "reading_group",
        "prompt": "Từ thông báo, hành động nào cần làm trước buổi học?",
        "passage": "Ban tổ chức thông báo phòng học thay đổi. Học viên cần kiểm tra địa điểm mới, có mặt trước 10 phút và liên hệ đầu mối nếu gặp khó khăn.",
        "options": [
          "Kiểm tra địa điểm mới và đến sớm",
          "Chỉ đến sau giờ học",
          "Không đọc thông báo",
          "Tự đổi sang ngày khác"
        ],
        "answers": [
          "Kiểm tra địa điểm mới và đến sớm"
        ],
        "difficulty": 3,
        "tags": [
          "reading",
          "school"
        ]
      },
      {
        "id": "ko-s7",
        "type": "translation",
        "prompt": "Diễn đạt/nhận diện câu dùng để xác nhận phòng học: “교실 번호를 확인해 주세요.”",
        "answers": [
          "교실 번호를 확인해 주세요.",
          "Vui lòng xác nhận số phòng học."
        ],
        "difficulty": 3,
        "tags": [
          "translation",
          "school"
        ]
      },
      {
        "id": "ko-s8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là người phụ trách lớp và có học viên đến nhầm phòng. Phản hồi nào tốt nhất?",
        "options": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau.",
          "Bạn tự tìm đi.",
          "Không phải việc của mình.",
          "Im lặng."
        ],
        "answers": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau."
        ],
        "difficulty": 5,
        "tags": [
          "roleplay",
          "school-workplace"
        ]
      }
    ]
  },
  {
    "id": "official-ko-travel-public",
    "title": "한국어 — Travel & Public Services",
    "language": "ko",
    "level": "Everyday / Intermediate",
    "topic": "Travel & Public Services",
    "context": "Travel",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Sân bay, khách sạn, phương tiện, hỏi đường và dịch vụ công cộng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ko-t1",
        "type": "dialogue",
        "prompt": "Bạn cần hỏi đường tới ga gần nhất. Chọn câu phù hợp.",
        "options": [
          "가장 가까운 역이 어디예요?",
          "예약하고 싶어요.",
          "교실 번호를 확인해 주세요.",
          "다시 말씀해 주세요."
        ],
        "answers": [
          "가장 가까운 역이 어디예요?"
        ],
        "difficulty": 2,
        "tags": [
          "travel",
          "dialogue"
        ]
      },
      {
        "id": "ko-t2",
        "type": "dialogue",
        "prompt": "Bạn muốn đặt phòng khách sạn. Chọn câu phù hợp.",
        "options": [
          "예약하고 싶어요.",
          "다시 말씀해 주세요.",
          "가장 가까운 역이 어디예요?",
          "교실 번호를 확인해 주세요."
        ],
        "answers": [
          "예약하고 싶어요."
        ],
        "difficulty": 2,
        "tags": [
          "hotel",
          "dialogue"
        ]
      },
      {
        "id": "ko-t3",
        "type": "scenario_decision",
        "prompt": "Chuyến bay bị hoãn 45 phút và bạn có chuyến nối chuyến. Nên làm gì?",
        "options": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến",
          "Rời sân bay không báo ai",
          "Bỏ hành lý",
          "Tắt điện thoại"
        ],
        "answers": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến"
        ],
        "difficulty": 4,
        "tags": [
          "airport",
          "scenario"
        ]
      },
      {
        "id": "ko-t4",
        "type": "multiple_select",
        "prompt": "Khi nhận phòng khách sạn, thông tin nào nên xác nhận?",
        "options": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng",
          "Mật khẩu mạng xã hội cá nhân"
        ],
        "answers": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng"
        ],
        "difficulty": 3,
        "tags": [
          "hotel",
          "practical"
        ]
      },
      {
        "id": "ko-t5",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý thất lạc hành lý.",
        "options": [
          "Xác định quầy hỗ trợ",
          "Cung cấp thông tin chuyến bay",
          "Mô tả hành lý",
          "Nhận mã hồ sơ",
          "Theo dõi cập nhật"
        ],
        "answers": [
          "Xác định quầy hỗ trợ Cung cấp thông tin chuyến bay Mô tả hành lý Nhận mã hồ sơ Theo dõi cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "travel",
          "workflow"
        ]
      },
      {
        "id": "ko-t6",
        "type": "reading_group",
        "prompt": "Đâu là thông tin quan trọng nhất trong bảng thông báo?",
        "passage": "Gate changed from B12 to C04. Boarding begins at 18:20. Passengers should arrive at the gate at least 20 minutes before departure.",
        "options": [
          "Cổng mới và giờ boarding",
          "Màu máy bay",
          "Tên phi công",
          "Giá vé năm sau"
        ],
        "answers": [
          "Cổng mới và giờ boarding"
        ],
        "difficulty": 3,
        "tags": [
          "travel",
          "reading"
        ]
      },
      {
        "id": "ko-t7",
        "type": "true_false",
        "prompt": "Trong tình huống khẩn cấp ở nơi công cộng, nên cung cấp địa điểm và mô tả sự việc rõ ràng khi yêu cầu hỗ trợ.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "public-services",
          "safety"
        ]
      },
      {
        "id": "ko-t8",
        "type": "roleplay",
        "prompt": "Role-play: nhân viên nói bạn chưa có tên trong danh sách đặt phòng. Cách phản hồi tốt nhất?",
        "options": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại.",
          "Nổi giận và bỏ đi.",
          "Đưa thông tin không liên quan.",
          "Yêu cầu người khác tự giải quyết."
        ],
        "answers": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại."
        ],
        "difficulty": 5,
        "tags": [
          "hotel",
          "problem-solving"
        ]
      }
    ]
  },
  {
    "id": "official-fr-school-scenario",
    "title": "Français — School & Classroom Scenarios",
    "language": "fr",
    "level": "School / Intermediate",
    "topic": "School & Classroom",
    "context": "School Workplace",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Bài tập thực tế ở trường: đổi lịch, đổi phòng, thông báo, phối hợp và xử lý tình huống lớp học.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "fr-s1",
        "type": "dialogue",
        "prompt": "Bạn chưa nghe rõ hướng dẫn. Chọn cách yêu cầu nhắc lại lịch sự nhất.",
        "options": [
          "Pouvez-vous répéter, s’il vous plaît ?",
          "Không cần nói gì.",
          "Nói thật to một từ bất kỳ.",
          "Rời cuộc trò chuyện."
        ],
        "answers": [
          "Pouvez-vous répéter, s’il vous plaît ?"
        ],
        "difficulty": 2,
        "tags": [
          "school",
          "dialogue",
          "politeness"
        ]
      },
      {
        "id": "fr-s2",
        "type": "scenario_decision",
        "prompt": "Bạn đến trường nhưng không tìm thấy phòng học mới. Nên làm gì trước?",
        "options": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách",
          "Tự chọn một phòng bất kỳ",
          "Về nhà ngay",
          "Đợi mà không báo ai"
        ],
        "answers": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách"
        ],
        "difficulty": 3,
        "tags": [
          "school-workplace",
          "scenario"
        ]
      },
      {
        "id": "fr-s3",
        "type": "multiple_select",
        "prompt": "Chọn thông tin nên có trong thông báo đổi phòng học.",
        "options": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ"
        ],
        "difficulty": 3,
        "tags": [
          "school",
          "communication"
        ]
      },
      {
        "id": "fr-s4",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình chuẩn bị một buổi học.",
        "options": [
          "Xác nhận phòng",
          "Chuẩn bị nội dung",
          "Kiểm tra thiết bị",
          "Đón học viên",
          "Tổng kết"
        ],
        "answers": [
          "Xác nhận phòng Chuẩn bị nội dung Kiểm tra thiết bị Đón học viên Tổng kết"
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "workflow"
        ]
      },
      {
        "id": "fr-s5",
        "type": "error_correction",
        "prompt": "Chọn thông báo phù hợp nhất khi phải đổi lịch đột xuất.",
        "options": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin.",
          "Đổi giờ nha.",
          "Tự xem lại đi.",
          "Không cần thông báo."
        ],
        "answers": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "formal"
        ]
      },
      {
        "id": "fr-s6",
        "type": "reading_group",
        "prompt": "Từ thông báo, hành động nào cần làm trước buổi học?",
        "passage": "Ban tổ chức thông báo phòng học thay đổi. Học viên cần kiểm tra địa điểm mới, có mặt trước 10 phút và liên hệ đầu mối nếu gặp khó khăn.",
        "options": [
          "Kiểm tra địa điểm mới và đến sớm",
          "Chỉ đến sau giờ học",
          "Không đọc thông báo",
          "Tự đổi sang ngày khác"
        ],
        "answers": [
          "Kiểm tra địa điểm mới và đến sớm"
        ],
        "difficulty": 3,
        "tags": [
          "reading",
          "school"
        ]
      },
      {
        "id": "fr-s7",
        "type": "translation",
        "prompt": "Diễn đạt/nhận diện câu dùng để xác nhận phòng học: “Veuillez confirmer la salle.”",
        "answers": [
          "Veuillez confirmer la salle.",
          "Vui lòng xác nhận số phòng học."
        ],
        "difficulty": 3,
        "tags": [
          "translation",
          "school"
        ]
      },
      {
        "id": "fr-s8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là người phụ trách lớp và có học viên đến nhầm phòng. Phản hồi nào tốt nhất?",
        "options": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau.",
          "Bạn tự tìm đi.",
          "Không phải việc của mình.",
          "Im lặng."
        ],
        "answers": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau."
        ],
        "difficulty": 5,
        "tags": [
          "roleplay",
          "school-workplace"
        ]
      }
    ]
  },
  {
    "id": "official-fr-travel-public",
    "title": "Français — Travel & Public Services",
    "language": "fr",
    "level": "Everyday / Intermediate",
    "topic": "Travel & Public Services",
    "context": "Travel",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Sân bay, khách sạn, phương tiện, hỏi đường và dịch vụ công cộng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "fr-t1",
        "type": "dialogue",
        "prompt": "Bạn cần hỏi đường tới ga gần nhất. Chọn câu phù hợp.",
        "options": [
          "Où est la gare la plus proche ?",
          "Je voudrais faire une réservation.",
          "Veuillez confirmer la salle.",
          "Pouvez-vous répéter, s’il vous plaît ?"
        ],
        "answers": [
          "Où est la gare la plus proche ?"
        ],
        "difficulty": 2,
        "tags": [
          "travel",
          "dialogue"
        ]
      },
      {
        "id": "fr-t2",
        "type": "dialogue",
        "prompt": "Bạn muốn đặt phòng khách sạn. Chọn câu phù hợp.",
        "options": [
          "Je voudrais faire une réservation.",
          "Pouvez-vous répéter, s’il vous plaît ?",
          "Où est la gare la plus proche ?",
          "Veuillez confirmer la salle."
        ],
        "answers": [
          "Je voudrais faire une réservation."
        ],
        "difficulty": 2,
        "tags": [
          "hotel",
          "dialogue"
        ]
      },
      {
        "id": "fr-t3",
        "type": "scenario_decision",
        "prompt": "Chuyến bay bị hoãn 45 phút và bạn có chuyến nối chuyến. Nên làm gì?",
        "options": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến",
          "Rời sân bay không báo ai",
          "Bỏ hành lý",
          "Tắt điện thoại"
        ],
        "answers": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến"
        ],
        "difficulty": 4,
        "tags": [
          "airport",
          "scenario"
        ]
      },
      {
        "id": "fr-t4",
        "type": "multiple_select",
        "prompt": "Khi nhận phòng khách sạn, thông tin nào nên xác nhận?",
        "options": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng",
          "Mật khẩu mạng xã hội cá nhân"
        ],
        "answers": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng"
        ],
        "difficulty": 3,
        "tags": [
          "hotel",
          "practical"
        ]
      },
      {
        "id": "fr-t5",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý thất lạc hành lý.",
        "options": [
          "Xác định quầy hỗ trợ",
          "Cung cấp thông tin chuyến bay",
          "Mô tả hành lý",
          "Nhận mã hồ sơ",
          "Theo dõi cập nhật"
        ],
        "answers": [
          "Xác định quầy hỗ trợ Cung cấp thông tin chuyến bay Mô tả hành lý Nhận mã hồ sơ Theo dõi cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "travel",
          "workflow"
        ]
      },
      {
        "id": "fr-t6",
        "type": "reading_group",
        "prompt": "Đâu là thông tin quan trọng nhất trong bảng thông báo?",
        "passage": "Gate changed from B12 to C04. Boarding begins at 18:20. Passengers should arrive at the gate at least 20 minutes before departure.",
        "options": [
          "Cổng mới và giờ boarding",
          "Màu máy bay",
          "Tên phi công",
          "Giá vé năm sau"
        ],
        "answers": [
          "Cổng mới và giờ boarding"
        ],
        "difficulty": 3,
        "tags": [
          "travel",
          "reading"
        ]
      },
      {
        "id": "fr-t7",
        "type": "true_false",
        "prompt": "Trong tình huống khẩn cấp ở nơi công cộng, nên cung cấp địa điểm và mô tả sự việc rõ ràng khi yêu cầu hỗ trợ.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "public-services",
          "safety"
        ]
      },
      {
        "id": "fr-t8",
        "type": "roleplay",
        "prompt": "Role-play: nhân viên nói bạn chưa có tên trong danh sách đặt phòng. Cách phản hồi tốt nhất?",
        "options": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại.",
          "Nổi giận và bỏ đi.",
          "Đưa thông tin không liên quan.",
          "Yêu cầu người khác tự giải quyết."
        ],
        "answers": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại."
        ],
        "difficulty": 5,
        "tags": [
          "hotel",
          "problem-solving"
        ]
      }
    ]
  },
  {
    "id": "official-de-school-scenario",
    "title": "Deutsch — School & Classroom Scenarios",
    "language": "de",
    "level": "School / Intermediate",
    "topic": "School & Classroom",
    "context": "School Workplace",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Bài tập thực tế ở trường: đổi lịch, đổi phòng, thông báo, phối hợp và xử lý tình huống lớp học.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "de-s1",
        "type": "dialogue",
        "prompt": "Bạn chưa nghe rõ hướng dẫn. Chọn cách yêu cầu nhắc lại lịch sự nhất.",
        "options": [
          "Könnten Sie das bitte wiederholen?",
          "Không cần nói gì.",
          "Nói thật to một từ bất kỳ.",
          "Rời cuộc trò chuyện."
        ],
        "answers": [
          "Könnten Sie das bitte wiederholen?"
        ],
        "difficulty": 2,
        "tags": [
          "school",
          "dialogue",
          "politeness"
        ]
      },
      {
        "id": "de-s2",
        "type": "scenario_decision",
        "prompt": "Bạn đến trường nhưng không tìm thấy phòng học mới. Nên làm gì trước?",
        "options": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách",
          "Tự chọn một phòng bất kỳ",
          "Về nhà ngay",
          "Đợi mà không báo ai"
        ],
        "answers": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách"
        ],
        "difficulty": 3,
        "tags": [
          "school-workplace",
          "scenario"
        ]
      },
      {
        "id": "de-s3",
        "type": "multiple_select",
        "prompt": "Chọn thông tin nên có trong thông báo đổi phòng học.",
        "options": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ"
        ],
        "difficulty": 3,
        "tags": [
          "school",
          "communication"
        ]
      },
      {
        "id": "de-s4",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình chuẩn bị một buổi học.",
        "options": [
          "Xác nhận phòng",
          "Chuẩn bị nội dung",
          "Kiểm tra thiết bị",
          "Đón học viên",
          "Tổng kết"
        ],
        "answers": [
          "Xác nhận phòng Chuẩn bị nội dung Kiểm tra thiết bị Đón học viên Tổng kết"
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "workflow"
        ]
      },
      {
        "id": "de-s5",
        "type": "error_correction",
        "prompt": "Chọn thông báo phù hợp nhất khi phải đổi lịch đột xuất.",
        "options": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin.",
          "Đổi giờ nha.",
          "Tự xem lại đi.",
          "Không cần thông báo."
        ],
        "answers": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "formal"
        ]
      },
      {
        "id": "de-s6",
        "type": "reading_group",
        "prompt": "Từ thông báo, hành động nào cần làm trước buổi học?",
        "passage": "Ban tổ chức thông báo phòng học thay đổi. Học viên cần kiểm tra địa điểm mới, có mặt trước 10 phút và liên hệ đầu mối nếu gặp khó khăn.",
        "options": [
          "Kiểm tra địa điểm mới và đến sớm",
          "Chỉ đến sau giờ học",
          "Không đọc thông báo",
          "Tự đổi sang ngày khác"
        ],
        "answers": [
          "Kiểm tra địa điểm mới và đến sớm"
        ],
        "difficulty": 3,
        "tags": [
          "reading",
          "school"
        ]
      },
      {
        "id": "de-s7",
        "type": "translation",
        "prompt": "Diễn đạt/nhận diện câu dùng để xác nhận phòng học: “Bitte bestätigen Sie den Raum.”",
        "answers": [
          "Bitte bestätigen Sie den Raum.",
          "Vui lòng xác nhận số phòng học."
        ],
        "difficulty": 3,
        "tags": [
          "translation",
          "school"
        ]
      },
      {
        "id": "de-s8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là người phụ trách lớp và có học viên đến nhầm phòng. Phản hồi nào tốt nhất?",
        "options": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau.",
          "Bạn tự tìm đi.",
          "Không phải việc của mình.",
          "Im lặng."
        ],
        "answers": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau."
        ],
        "difficulty": 5,
        "tags": [
          "roleplay",
          "school-workplace"
        ]
      }
    ]
  },
  {
    "id": "official-de-travel-public",
    "title": "Deutsch — Travel & Public Services",
    "language": "de",
    "level": "Everyday / Intermediate",
    "topic": "Travel & Public Services",
    "context": "Travel",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Sân bay, khách sạn, phương tiện, hỏi đường và dịch vụ công cộng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "de-t1",
        "type": "dialogue",
        "prompt": "Bạn cần hỏi đường tới ga gần nhất. Chọn câu phù hợp.",
        "options": [
          "Wo ist der nächste Bahnhof?",
          "Ich möchte reservieren.",
          "Bitte bestätigen Sie den Raum.",
          "Könnten Sie das bitte wiederholen?"
        ],
        "answers": [
          "Wo ist der nächste Bahnhof?"
        ],
        "difficulty": 2,
        "tags": [
          "travel",
          "dialogue"
        ]
      },
      {
        "id": "de-t2",
        "type": "dialogue",
        "prompt": "Bạn muốn đặt phòng khách sạn. Chọn câu phù hợp.",
        "options": [
          "Ich möchte reservieren.",
          "Könnten Sie das bitte wiederholen?",
          "Wo ist der nächste Bahnhof?",
          "Bitte bestätigen Sie den Raum."
        ],
        "answers": [
          "Ich möchte reservieren."
        ],
        "difficulty": 2,
        "tags": [
          "hotel",
          "dialogue"
        ]
      },
      {
        "id": "de-t3",
        "type": "scenario_decision",
        "prompt": "Chuyến bay bị hoãn 45 phút và bạn có chuyến nối chuyến. Nên làm gì?",
        "options": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến",
          "Rời sân bay không báo ai",
          "Bỏ hành lý",
          "Tắt điện thoại"
        ],
        "answers": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến"
        ],
        "difficulty": 4,
        "tags": [
          "airport",
          "scenario"
        ]
      },
      {
        "id": "de-t4",
        "type": "multiple_select",
        "prompt": "Khi nhận phòng khách sạn, thông tin nào nên xác nhận?",
        "options": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng",
          "Mật khẩu mạng xã hội cá nhân"
        ],
        "answers": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng"
        ],
        "difficulty": 3,
        "tags": [
          "hotel",
          "practical"
        ]
      },
      {
        "id": "de-t5",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý thất lạc hành lý.",
        "options": [
          "Xác định quầy hỗ trợ",
          "Cung cấp thông tin chuyến bay",
          "Mô tả hành lý",
          "Nhận mã hồ sơ",
          "Theo dõi cập nhật"
        ],
        "answers": [
          "Xác định quầy hỗ trợ Cung cấp thông tin chuyến bay Mô tả hành lý Nhận mã hồ sơ Theo dõi cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "travel",
          "workflow"
        ]
      },
      {
        "id": "de-t6",
        "type": "reading_group",
        "prompt": "Đâu là thông tin quan trọng nhất trong bảng thông báo?",
        "passage": "Gate changed from B12 to C04. Boarding begins at 18:20. Passengers should arrive at the gate at least 20 minutes before departure.",
        "options": [
          "Cổng mới và giờ boarding",
          "Màu máy bay",
          "Tên phi công",
          "Giá vé năm sau"
        ],
        "answers": [
          "Cổng mới và giờ boarding"
        ],
        "difficulty": 3,
        "tags": [
          "travel",
          "reading"
        ]
      },
      {
        "id": "de-t7",
        "type": "true_false",
        "prompt": "Trong tình huống khẩn cấp ở nơi công cộng, nên cung cấp địa điểm và mô tả sự việc rõ ràng khi yêu cầu hỗ trợ.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "public-services",
          "safety"
        ]
      },
      {
        "id": "de-t8",
        "type": "roleplay",
        "prompt": "Role-play: nhân viên nói bạn chưa có tên trong danh sách đặt phòng. Cách phản hồi tốt nhất?",
        "options": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại.",
          "Nổi giận và bỏ đi.",
          "Đưa thông tin không liên quan.",
          "Yêu cầu người khác tự giải quyết."
        ],
        "answers": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại."
        ],
        "difficulty": 5,
        "tags": [
          "hotel",
          "problem-solving"
        ]
      }
    ]
  },
  {
    "id": "official-es-school-scenario",
    "title": "Español — School & Classroom Scenarios",
    "language": "es",
    "level": "School / Intermediate",
    "topic": "School & Classroom",
    "context": "School Workplace",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Bài tập thực tế ở trường: đổi lịch, đổi phòng, thông báo, phối hợp và xử lý tình huống lớp học.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "es-s1",
        "type": "dialogue",
        "prompt": "Bạn chưa nghe rõ hướng dẫn. Chọn cách yêu cầu nhắc lại lịch sự nhất.",
        "options": [
          "¿Puede repetir, por favor?",
          "Không cần nói gì.",
          "Nói thật to một từ bất kỳ.",
          "Rời cuộc trò chuyện."
        ],
        "answers": [
          "¿Puede repetir, por favor?"
        ],
        "difficulty": 2,
        "tags": [
          "school",
          "dialogue",
          "politeness"
        ]
      },
      {
        "id": "es-s2",
        "type": "scenario_decision",
        "prompt": "Bạn đến trường nhưng không tìm thấy phòng học mới. Nên làm gì trước?",
        "options": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách",
          "Tự chọn một phòng bất kỳ",
          "Về nhà ngay",
          "Đợi mà không báo ai"
        ],
        "answers": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách"
        ],
        "difficulty": 3,
        "tags": [
          "school-workplace",
          "scenario"
        ]
      },
      {
        "id": "es-s3",
        "type": "multiple_select",
        "prompt": "Chọn thông tin nên có trong thông báo đổi phòng học.",
        "options": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ"
        ],
        "difficulty": 3,
        "tags": [
          "school",
          "communication"
        ]
      },
      {
        "id": "es-s4",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình chuẩn bị một buổi học.",
        "options": [
          "Xác nhận phòng",
          "Chuẩn bị nội dung",
          "Kiểm tra thiết bị",
          "Đón học viên",
          "Tổng kết"
        ],
        "answers": [
          "Xác nhận phòng Chuẩn bị nội dung Kiểm tra thiết bị Đón học viên Tổng kết"
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "workflow"
        ]
      },
      {
        "id": "es-s5",
        "type": "error_correction",
        "prompt": "Chọn thông báo phù hợp nhất khi phải đổi lịch đột xuất.",
        "options": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin.",
          "Đổi giờ nha.",
          "Tự xem lại đi.",
          "Không cần thông báo."
        ],
        "answers": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "formal"
        ]
      },
      {
        "id": "es-s6",
        "type": "reading_group",
        "prompt": "Từ thông báo, hành động nào cần làm trước buổi học?",
        "passage": "Ban tổ chức thông báo phòng học thay đổi. Học viên cần kiểm tra địa điểm mới, có mặt trước 10 phút và liên hệ đầu mối nếu gặp khó khăn.",
        "options": [
          "Kiểm tra địa điểm mới và đến sớm",
          "Chỉ đến sau giờ học",
          "Không đọc thông báo",
          "Tự đổi sang ngày khác"
        ],
        "answers": [
          "Kiểm tra địa điểm mới và đến sớm"
        ],
        "difficulty": 3,
        "tags": [
          "reading",
          "school"
        ]
      },
      {
        "id": "es-s7",
        "type": "translation",
        "prompt": "Diễn đạt/nhận diện câu dùng để xác nhận phòng học: “Por favor, confirme el aula.”",
        "answers": [
          "Por favor, confirme el aula.",
          "Vui lòng xác nhận số phòng học."
        ],
        "difficulty": 3,
        "tags": [
          "translation",
          "school"
        ]
      },
      {
        "id": "es-s8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là người phụ trách lớp và có học viên đến nhầm phòng. Phản hồi nào tốt nhất?",
        "options": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau.",
          "Bạn tự tìm đi.",
          "Không phải việc của mình.",
          "Im lặng."
        ],
        "answers": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau."
        ],
        "difficulty": 5,
        "tags": [
          "roleplay",
          "school-workplace"
        ]
      }
    ]
  },
  {
    "id": "official-es-travel-public",
    "title": "Español — Travel & Public Services",
    "language": "es",
    "level": "Everyday / Intermediate",
    "topic": "Travel & Public Services",
    "context": "Travel",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Sân bay, khách sạn, phương tiện, hỏi đường và dịch vụ công cộng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "es-t1",
        "type": "dialogue",
        "prompt": "Bạn cần hỏi đường tới ga gần nhất. Chọn câu phù hợp.",
        "options": [
          "¿Dónde está la estación más cercana?",
          "Quisiera hacer una reserva.",
          "Por favor, confirme el aula.",
          "¿Puede repetir, por favor?"
        ],
        "answers": [
          "¿Dónde está la estación más cercana?"
        ],
        "difficulty": 2,
        "tags": [
          "travel",
          "dialogue"
        ]
      },
      {
        "id": "es-t2",
        "type": "dialogue",
        "prompt": "Bạn muốn đặt phòng khách sạn. Chọn câu phù hợp.",
        "options": [
          "Quisiera hacer una reserva.",
          "¿Puede repetir, por favor?",
          "¿Dónde está la estación más cercana?",
          "Por favor, confirme el aula."
        ],
        "answers": [
          "Quisiera hacer una reserva."
        ],
        "difficulty": 2,
        "tags": [
          "hotel",
          "dialogue"
        ]
      },
      {
        "id": "es-t3",
        "type": "scenario_decision",
        "prompt": "Chuyến bay bị hoãn 45 phút và bạn có chuyến nối chuyến. Nên làm gì?",
        "options": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến",
          "Rời sân bay không báo ai",
          "Bỏ hành lý",
          "Tắt điện thoại"
        ],
        "answers": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến"
        ],
        "difficulty": 4,
        "tags": [
          "airport",
          "scenario"
        ]
      },
      {
        "id": "es-t4",
        "type": "multiple_select",
        "prompt": "Khi nhận phòng khách sạn, thông tin nào nên xác nhận?",
        "options": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng",
          "Mật khẩu mạng xã hội cá nhân"
        ],
        "answers": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng"
        ],
        "difficulty": 3,
        "tags": [
          "hotel",
          "practical"
        ]
      },
      {
        "id": "es-t5",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý thất lạc hành lý.",
        "options": [
          "Xác định quầy hỗ trợ",
          "Cung cấp thông tin chuyến bay",
          "Mô tả hành lý",
          "Nhận mã hồ sơ",
          "Theo dõi cập nhật"
        ],
        "answers": [
          "Xác định quầy hỗ trợ Cung cấp thông tin chuyến bay Mô tả hành lý Nhận mã hồ sơ Theo dõi cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "travel",
          "workflow"
        ]
      },
      {
        "id": "es-t6",
        "type": "reading_group",
        "prompt": "Đâu là thông tin quan trọng nhất trong bảng thông báo?",
        "passage": "Gate changed from B12 to C04. Boarding begins at 18:20. Passengers should arrive at the gate at least 20 minutes before departure.",
        "options": [
          "Cổng mới và giờ boarding",
          "Màu máy bay",
          "Tên phi công",
          "Giá vé năm sau"
        ],
        "answers": [
          "Cổng mới và giờ boarding"
        ],
        "difficulty": 3,
        "tags": [
          "travel",
          "reading"
        ]
      },
      {
        "id": "es-t7",
        "type": "true_false",
        "prompt": "Trong tình huống khẩn cấp ở nơi công cộng, nên cung cấp địa điểm và mô tả sự việc rõ ràng khi yêu cầu hỗ trợ.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "public-services",
          "safety"
        ]
      },
      {
        "id": "es-t8",
        "type": "roleplay",
        "prompt": "Role-play: nhân viên nói bạn chưa có tên trong danh sách đặt phòng. Cách phản hồi tốt nhất?",
        "options": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại.",
          "Nổi giận và bỏ đi.",
          "Đưa thông tin không liên quan.",
          "Yêu cầu người khác tự giải quyết."
        ],
        "answers": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại."
        ],
        "difficulty": 5,
        "tags": [
          "hotel",
          "problem-solving"
        ]
      }
    ]
  },
  {
    "id": "official-it-school-scenario",
    "title": "Italiano — School & Classroom Scenarios",
    "language": "it",
    "level": "School / Intermediate",
    "topic": "School & Classroom",
    "context": "School Workplace",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Bài tập thực tế ở trường: đổi lịch, đổi phòng, thông báo, phối hợp và xử lý tình huống lớp học.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "it-s1",
        "type": "dialogue",
        "prompt": "Bạn chưa nghe rõ hướng dẫn. Chọn cách yêu cầu nhắc lại lịch sự nhất.",
        "options": [
          "Può ripetere, per favore?",
          "Không cần nói gì.",
          "Nói thật to một từ bất kỳ.",
          "Rời cuộc trò chuyện."
        ],
        "answers": [
          "Può ripetere, per favore?"
        ],
        "difficulty": 2,
        "tags": [
          "school",
          "dialogue",
          "politeness"
        ]
      },
      {
        "id": "it-s2",
        "type": "scenario_decision",
        "prompt": "Bạn đến trường nhưng không tìm thấy phòng học mới. Nên làm gì trước?",
        "options": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách",
          "Tự chọn một phòng bất kỳ",
          "Về nhà ngay",
          "Đợi mà không báo ai"
        ],
        "answers": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách"
        ],
        "difficulty": 3,
        "tags": [
          "school-workplace",
          "scenario"
        ]
      },
      {
        "id": "it-s3",
        "type": "multiple_select",
        "prompt": "Chọn thông tin nên có trong thông báo đổi phòng học.",
        "options": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ"
        ],
        "difficulty": 3,
        "tags": [
          "school",
          "communication"
        ]
      },
      {
        "id": "it-s4",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình chuẩn bị một buổi học.",
        "options": [
          "Xác nhận phòng",
          "Chuẩn bị nội dung",
          "Kiểm tra thiết bị",
          "Đón học viên",
          "Tổng kết"
        ],
        "answers": [
          "Xác nhận phòng Chuẩn bị nội dung Kiểm tra thiết bị Đón học viên Tổng kết"
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "workflow"
        ]
      },
      {
        "id": "it-s5",
        "type": "error_correction",
        "prompt": "Chọn thông báo phù hợp nhất khi phải đổi lịch đột xuất.",
        "options": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin.",
          "Đổi giờ nha.",
          "Tự xem lại đi.",
          "Không cần thông báo."
        ],
        "answers": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "formal"
        ]
      },
      {
        "id": "it-s6",
        "type": "reading_group",
        "prompt": "Từ thông báo, hành động nào cần làm trước buổi học?",
        "passage": "Ban tổ chức thông báo phòng học thay đổi. Học viên cần kiểm tra địa điểm mới, có mặt trước 10 phút và liên hệ đầu mối nếu gặp khó khăn.",
        "options": [
          "Kiểm tra địa điểm mới và đến sớm",
          "Chỉ đến sau giờ học",
          "Không đọc thông báo",
          "Tự đổi sang ngày khác"
        ],
        "answers": [
          "Kiểm tra địa điểm mới và đến sớm"
        ],
        "difficulty": 3,
        "tags": [
          "reading",
          "school"
        ]
      },
      {
        "id": "it-s7",
        "type": "translation",
        "prompt": "Diễn đạt/nhận diện câu dùng để xác nhận phòng học: “Confermi l’aula, per favore.”",
        "answers": [
          "Confermi l’aula, per favore.",
          "Vui lòng xác nhận số phòng học."
        ],
        "difficulty": 3,
        "tags": [
          "translation",
          "school"
        ]
      },
      {
        "id": "it-s8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là người phụ trách lớp và có học viên đến nhầm phòng. Phản hồi nào tốt nhất?",
        "options": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau.",
          "Bạn tự tìm đi.",
          "Không phải việc của mình.",
          "Im lặng."
        ],
        "answers": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau."
        ],
        "difficulty": 5,
        "tags": [
          "roleplay",
          "school-workplace"
        ]
      }
    ]
  },
  {
    "id": "official-it-travel-public",
    "title": "Italiano — Travel & Public Services",
    "language": "it",
    "level": "Everyday / Intermediate",
    "topic": "Travel & Public Services",
    "context": "Travel",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Sân bay, khách sạn, phương tiện, hỏi đường và dịch vụ công cộng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "it-t1",
        "type": "dialogue",
        "prompt": "Bạn cần hỏi đường tới ga gần nhất. Chọn câu phù hợp.",
        "options": [
          "Dov’è la stazione più vicina?",
          "Vorrei fare una prenotazione.",
          "Confermi l’aula, per favore.",
          "Può ripetere, per favore?"
        ],
        "answers": [
          "Dov’è la stazione più vicina?"
        ],
        "difficulty": 2,
        "tags": [
          "travel",
          "dialogue"
        ]
      },
      {
        "id": "it-t2",
        "type": "dialogue",
        "prompt": "Bạn muốn đặt phòng khách sạn. Chọn câu phù hợp.",
        "options": [
          "Vorrei fare una prenotazione.",
          "Può ripetere, per favore?",
          "Dov’è la stazione più vicina?",
          "Confermi l’aula, per favore."
        ],
        "answers": [
          "Vorrei fare una prenotazione."
        ],
        "difficulty": 2,
        "tags": [
          "hotel",
          "dialogue"
        ]
      },
      {
        "id": "it-t3",
        "type": "scenario_decision",
        "prompt": "Chuyến bay bị hoãn 45 phút và bạn có chuyến nối chuyến. Nên làm gì?",
        "options": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến",
          "Rời sân bay không báo ai",
          "Bỏ hành lý",
          "Tắt điện thoại"
        ],
        "answers": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến"
        ],
        "difficulty": 4,
        "tags": [
          "airport",
          "scenario"
        ]
      },
      {
        "id": "it-t4",
        "type": "multiple_select",
        "prompt": "Khi nhận phòng khách sạn, thông tin nào nên xác nhận?",
        "options": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng",
          "Mật khẩu mạng xã hội cá nhân"
        ],
        "answers": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng"
        ],
        "difficulty": 3,
        "tags": [
          "hotel",
          "practical"
        ]
      },
      {
        "id": "it-t5",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý thất lạc hành lý.",
        "options": [
          "Xác định quầy hỗ trợ",
          "Cung cấp thông tin chuyến bay",
          "Mô tả hành lý",
          "Nhận mã hồ sơ",
          "Theo dõi cập nhật"
        ],
        "answers": [
          "Xác định quầy hỗ trợ Cung cấp thông tin chuyến bay Mô tả hành lý Nhận mã hồ sơ Theo dõi cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "travel",
          "workflow"
        ]
      },
      {
        "id": "it-t6",
        "type": "reading_group",
        "prompt": "Đâu là thông tin quan trọng nhất trong bảng thông báo?",
        "passage": "Gate changed from B12 to C04. Boarding begins at 18:20. Passengers should arrive at the gate at least 20 minutes before departure.",
        "options": [
          "Cổng mới và giờ boarding",
          "Màu máy bay",
          "Tên phi công",
          "Giá vé năm sau"
        ],
        "answers": [
          "Cổng mới và giờ boarding"
        ],
        "difficulty": 3,
        "tags": [
          "travel",
          "reading"
        ]
      },
      {
        "id": "it-t7",
        "type": "true_false",
        "prompt": "Trong tình huống khẩn cấp ở nơi công cộng, nên cung cấp địa điểm và mô tả sự việc rõ ràng khi yêu cầu hỗ trợ.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "public-services",
          "safety"
        ]
      },
      {
        "id": "it-t8",
        "type": "roleplay",
        "prompt": "Role-play: nhân viên nói bạn chưa có tên trong danh sách đặt phòng. Cách phản hồi tốt nhất?",
        "options": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại.",
          "Nổi giận và bỏ đi.",
          "Đưa thông tin không liên quan.",
          "Yêu cầu người khác tự giải quyết."
        ],
        "answers": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại."
        ],
        "difficulty": 5,
        "tags": [
          "hotel",
          "problem-solving"
        ]
      }
    ]
  },
  {
    "id": "official-pt-school-scenario",
    "title": "Português — School & Classroom Scenarios",
    "language": "pt",
    "level": "School / Intermediate",
    "topic": "School & Classroom",
    "context": "School Workplace",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Bài tập thực tế ở trường: đổi lịch, đổi phòng, thông báo, phối hợp và xử lý tình huống lớp học.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "pt-s1",
        "type": "dialogue",
        "prompt": "Bạn chưa nghe rõ hướng dẫn. Chọn cách yêu cầu nhắc lại lịch sự nhất.",
        "options": [
          "Pode repetir, por favor?",
          "Không cần nói gì.",
          "Nói thật to một từ bất kỳ.",
          "Rời cuộc trò chuyện."
        ],
        "answers": [
          "Pode repetir, por favor?"
        ],
        "difficulty": 2,
        "tags": [
          "school",
          "dialogue",
          "politeness"
        ]
      },
      {
        "id": "pt-s2",
        "type": "scenario_decision",
        "prompt": "Bạn đến trường nhưng không tìm thấy phòng học mới. Nên làm gì trước?",
        "options": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách",
          "Tự chọn một phòng bất kỳ",
          "Về nhà ngay",
          "Đợi mà không báo ai"
        ],
        "answers": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách"
        ],
        "difficulty": 3,
        "tags": [
          "school-workplace",
          "scenario"
        ]
      },
      {
        "id": "pt-s3",
        "type": "multiple_select",
        "prompt": "Chọn thông tin nên có trong thông báo đổi phòng học.",
        "options": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ"
        ],
        "difficulty": 3,
        "tags": [
          "school",
          "communication"
        ]
      },
      {
        "id": "pt-s4",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình chuẩn bị một buổi học.",
        "options": [
          "Xác nhận phòng",
          "Chuẩn bị nội dung",
          "Kiểm tra thiết bị",
          "Đón học viên",
          "Tổng kết"
        ],
        "answers": [
          "Xác nhận phòng Chuẩn bị nội dung Kiểm tra thiết bị Đón học viên Tổng kết"
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "workflow"
        ]
      },
      {
        "id": "pt-s5",
        "type": "error_correction",
        "prompt": "Chọn thông báo phù hợp nhất khi phải đổi lịch đột xuất.",
        "options": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin.",
          "Đổi giờ nha.",
          "Tự xem lại đi.",
          "Không cần thông báo."
        ],
        "answers": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "formal"
        ]
      },
      {
        "id": "pt-s6",
        "type": "reading_group",
        "prompt": "Từ thông báo, hành động nào cần làm trước buổi học?",
        "passage": "Ban tổ chức thông báo phòng học thay đổi. Học viên cần kiểm tra địa điểm mới, có mặt trước 10 phút và liên hệ đầu mối nếu gặp khó khăn.",
        "options": [
          "Kiểm tra địa điểm mới và đến sớm",
          "Chỉ đến sau giờ học",
          "Không đọc thông báo",
          "Tự đổi sang ngày khác"
        ],
        "answers": [
          "Kiểm tra địa điểm mới và đến sớm"
        ],
        "difficulty": 3,
        "tags": [
          "reading",
          "school"
        ]
      },
      {
        "id": "pt-s7",
        "type": "translation",
        "prompt": "Diễn đạt/nhận diện câu dùng để xác nhận phòng học: “Por favor, confirme a sala.”",
        "answers": [
          "Por favor, confirme a sala.",
          "Vui lòng xác nhận số phòng học."
        ],
        "difficulty": 3,
        "tags": [
          "translation",
          "school"
        ]
      },
      {
        "id": "pt-s8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là người phụ trách lớp và có học viên đến nhầm phòng. Phản hồi nào tốt nhất?",
        "options": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau.",
          "Bạn tự tìm đi.",
          "Không phải việc của mình.",
          "Im lặng."
        ],
        "answers": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau."
        ],
        "difficulty": 5,
        "tags": [
          "roleplay",
          "school-workplace"
        ]
      }
    ]
  },
  {
    "id": "official-pt-travel-public",
    "title": "Português — Travel & Public Services",
    "language": "pt",
    "level": "Everyday / Intermediate",
    "topic": "Travel & Public Services",
    "context": "Travel",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Sân bay, khách sạn, phương tiện, hỏi đường và dịch vụ công cộng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "pt-t1",
        "type": "dialogue",
        "prompt": "Bạn cần hỏi đường tới ga gần nhất. Chọn câu phù hợp.",
        "options": [
          "Onde fica a estação mais próxima?",
          "Gostaria de fazer uma reserva.",
          "Por favor, confirme a sala.",
          "Pode repetir, por favor?"
        ],
        "answers": [
          "Onde fica a estação mais próxima?"
        ],
        "difficulty": 2,
        "tags": [
          "travel",
          "dialogue"
        ]
      },
      {
        "id": "pt-t2",
        "type": "dialogue",
        "prompt": "Bạn muốn đặt phòng khách sạn. Chọn câu phù hợp.",
        "options": [
          "Gostaria de fazer uma reserva.",
          "Pode repetir, por favor?",
          "Onde fica a estação mais próxima?",
          "Por favor, confirme a sala."
        ],
        "answers": [
          "Gostaria de fazer uma reserva."
        ],
        "difficulty": 2,
        "tags": [
          "hotel",
          "dialogue"
        ]
      },
      {
        "id": "pt-t3",
        "type": "scenario_decision",
        "prompt": "Chuyến bay bị hoãn 45 phút và bạn có chuyến nối chuyến. Nên làm gì?",
        "options": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến",
          "Rời sân bay không báo ai",
          "Bỏ hành lý",
          "Tắt điện thoại"
        ],
        "answers": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến"
        ],
        "difficulty": 4,
        "tags": [
          "airport",
          "scenario"
        ]
      },
      {
        "id": "pt-t4",
        "type": "multiple_select",
        "prompt": "Khi nhận phòng khách sạn, thông tin nào nên xác nhận?",
        "options": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng",
          "Mật khẩu mạng xã hội cá nhân"
        ],
        "answers": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng"
        ],
        "difficulty": 3,
        "tags": [
          "hotel",
          "practical"
        ]
      },
      {
        "id": "pt-t5",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý thất lạc hành lý.",
        "options": [
          "Xác định quầy hỗ trợ",
          "Cung cấp thông tin chuyến bay",
          "Mô tả hành lý",
          "Nhận mã hồ sơ",
          "Theo dõi cập nhật"
        ],
        "answers": [
          "Xác định quầy hỗ trợ Cung cấp thông tin chuyến bay Mô tả hành lý Nhận mã hồ sơ Theo dõi cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "travel",
          "workflow"
        ]
      },
      {
        "id": "pt-t6",
        "type": "reading_group",
        "prompt": "Đâu là thông tin quan trọng nhất trong bảng thông báo?",
        "passage": "Gate changed from B12 to C04. Boarding begins at 18:20. Passengers should arrive at the gate at least 20 minutes before departure.",
        "options": [
          "Cổng mới và giờ boarding",
          "Màu máy bay",
          "Tên phi công",
          "Giá vé năm sau"
        ],
        "answers": [
          "Cổng mới và giờ boarding"
        ],
        "difficulty": 3,
        "tags": [
          "travel",
          "reading"
        ]
      },
      {
        "id": "pt-t7",
        "type": "true_false",
        "prompt": "Trong tình huống khẩn cấp ở nơi công cộng, nên cung cấp địa điểm và mô tả sự việc rõ ràng khi yêu cầu hỗ trợ.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "public-services",
          "safety"
        ]
      },
      {
        "id": "pt-t8",
        "type": "roleplay",
        "prompt": "Role-play: nhân viên nói bạn chưa có tên trong danh sách đặt phòng. Cách phản hồi tốt nhất?",
        "options": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại.",
          "Nổi giận và bỏ đi.",
          "Đưa thông tin không liên quan.",
          "Yêu cầu người khác tự giải quyết."
        ],
        "answers": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại."
        ],
        "difficulty": 5,
        "tags": [
          "hotel",
          "problem-solving"
        ]
      }
    ]
  },
  {
    "id": "official-ru-school-scenario",
    "title": "Русский — School & Classroom Scenarios",
    "language": "ru",
    "level": "School / Intermediate",
    "topic": "School & Classroom",
    "context": "School Workplace",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Bài tập thực tế ở trường: đổi lịch, đổi phòng, thông báo, phối hợp và xử lý tình huống lớp học.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ru-s1",
        "type": "dialogue",
        "prompt": "Bạn chưa nghe rõ hướng dẫn. Chọn cách yêu cầu nhắc lại lịch sự nhất.",
        "options": [
          "Повторите, пожалуйста.",
          "Không cần nói gì.",
          "Nói thật to một từ bất kỳ.",
          "Rời cuộc trò chuyện."
        ],
        "answers": [
          "Повторите, пожалуйста."
        ],
        "difficulty": 2,
        "tags": [
          "school",
          "dialogue",
          "politeness"
        ]
      },
      {
        "id": "ru-s2",
        "type": "scenario_decision",
        "prompt": "Bạn đến trường nhưng không tìm thấy phòng học mới. Nên làm gì trước?",
        "options": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách",
          "Tự chọn một phòng bất kỳ",
          "Về nhà ngay",
          "Đợi mà không báo ai"
        ],
        "answers": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách"
        ],
        "difficulty": 3,
        "tags": [
          "school-workplace",
          "scenario"
        ]
      },
      {
        "id": "ru-s3",
        "type": "multiple_select",
        "prompt": "Chọn thông tin nên có trong thông báo đổi phòng học.",
        "options": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ"
        ],
        "difficulty": 3,
        "tags": [
          "school",
          "communication"
        ]
      },
      {
        "id": "ru-s4",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình chuẩn bị một buổi học.",
        "options": [
          "Xác nhận phòng",
          "Chuẩn bị nội dung",
          "Kiểm tra thiết bị",
          "Đón học viên",
          "Tổng kết"
        ],
        "answers": [
          "Xác nhận phòng Chuẩn bị nội dung Kiểm tra thiết bị Đón học viên Tổng kết"
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "workflow"
        ]
      },
      {
        "id": "ru-s5",
        "type": "error_correction",
        "prompt": "Chọn thông báo phù hợp nhất khi phải đổi lịch đột xuất.",
        "options": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin.",
          "Đổi giờ nha.",
          "Tự xem lại đi.",
          "Không cần thông báo."
        ],
        "answers": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "formal"
        ]
      },
      {
        "id": "ru-s6",
        "type": "reading_group",
        "prompt": "Từ thông báo, hành động nào cần làm trước buổi học?",
        "passage": "Ban tổ chức thông báo phòng học thay đổi. Học viên cần kiểm tra địa điểm mới, có mặt trước 10 phút và liên hệ đầu mối nếu gặp khó khăn.",
        "options": [
          "Kiểm tra địa điểm mới và đến sớm",
          "Chỉ đến sau giờ học",
          "Không đọc thông báo",
          "Tự đổi sang ngày khác"
        ],
        "answers": [
          "Kiểm tra địa điểm mới và đến sớm"
        ],
        "difficulty": 3,
        "tags": [
          "reading",
          "school"
        ]
      },
      {
        "id": "ru-s7",
        "type": "translation",
        "prompt": "Diễn đạt/nhận diện câu dùng để xác nhận phòng học: “Пожалуйста, подтвердите номер аудитории.”",
        "answers": [
          "Пожалуйста, подтвердите номер аудитории.",
          "Vui lòng xác nhận số phòng học."
        ],
        "difficulty": 3,
        "tags": [
          "translation",
          "school"
        ]
      },
      {
        "id": "ru-s8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là người phụ trách lớp và có học viên đến nhầm phòng. Phản hồi nào tốt nhất?",
        "options": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau.",
          "Bạn tự tìm đi.",
          "Không phải việc của mình.",
          "Im lặng."
        ],
        "answers": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau."
        ],
        "difficulty": 5,
        "tags": [
          "roleplay",
          "school-workplace"
        ]
      }
    ]
  },
  {
    "id": "official-ru-travel-public",
    "title": "Русский — Travel & Public Services",
    "language": "ru",
    "level": "Everyday / Intermediate",
    "topic": "Travel & Public Services",
    "context": "Travel",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Sân bay, khách sạn, phương tiện, hỏi đường và dịch vụ công cộng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ru-t1",
        "type": "dialogue",
        "prompt": "Bạn cần hỏi đường tới ga gần nhất. Chọn câu phù hợp.",
        "options": [
          "Где ближайшая станция?",
          "Я хотел бы забронировать номер.",
          "Пожалуйста, подтвердите номер аудитории.",
          "Повторите, пожалуйста."
        ],
        "answers": [
          "Где ближайшая станция?"
        ],
        "difficulty": 2,
        "tags": [
          "travel",
          "dialogue"
        ]
      },
      {
        "id": "ru-t2",
        "type": "dialogue",
        "prompt": "Bạn muốn đặt phòng khách sạn. Chọn câu phù hợp.",
        "options": [
          "Я хотел бы забронировать номер.",
          "Повторите, пожалуйста.",
          "Где ближайшая станция?",
          "Пожалуйста, подтвердите номер аудитории."
        ],
        "answers": [
          "Я хотел бы забронировать номер."
        ],
        "difficulty": 2,
        "tags": [
          "hotel",
          "dialogue"
        ]
      },
      {
        "id": "ru-t3",
        "type": "scenario_decision",
        "prompt": "Chuyến bay bị hoãn 45 phút và bạn có chuyến nối chuyến. Nên làm gì?",
        "options": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến",
          "Rời sân bay không báo ai",
          "Bỏ hành lý",
          "Tắt điện thoại"
        ],
        "answers": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến"
        ],
        "difficulty": 4,
        "tags": [
          "airport",
          "scenario"
        ]
      },
      {
        "id": "ru-t4",
        "type": "multiple_select",
        "prompt": "Khi nhận phòng khách sạn, thông tin nào nên xác nhận?",
        "options": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng",
          "Mật khẩu mạng xã hội cá nhân"
        ],
        "answers": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng"
        ],
        "difficulty": 3,
        "tags": [
          "hotel",
          "practical"
        ]
      },
      {
        "id": "ru-t5",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý thất lạc hành lý.",
        "options": [
          "Xác định quầy hỗ trợ",
          "Cung cấp thông tin chuyến bay",
          "Mô tả hành lý",
          "Nhận mã hồ sơ",
          "Theo dõi cập nhật"
        ],
        "answers": [
          "Xác định quầy hỗ trợ Cung cấp thông tin chuyến bay Mô tả hành lý Nhận mã hồ sơ Theo dõi cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "travel",
          "workflow"
        ]
      },
      {
        "id": "ru-t6",
        "type": "reading_group",
        "prompt": "Đâu là thông tin quan trọng nhất trong bảng thông báo?",
        "passage": "Gate changed from B12 to C04. Boarding begins at 18:20. Passengers should arrive at the gate at least 20 minutes before departure.",
        "options": [
          "Cổng mới và giờ boarding",
          "Màu máy bay",
          "Tên phi công",
          "Giá vé năm sau"
        ],
        "answers": [
          "Cổng mới và giờ boarding"
        ],
        "difficulty": 3,
        "tags": [
          "travel",
          "reading"
        ]
      },
      {
        "id": "ru-t7",
        "type": "true_false",
        "prompt": "Trong tình huống khẩn cấp ở nơi công cộng, nên cung cấp địa điểm và mô tả sự việc rõ ràng khi yêu cầu hỗ trợ.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "public-services",
          "safety"
        ]
      },
      {
        "id": "ru-t8",
        "type": "roleplay",
        "prompt": "Role-play: nhân viên nói bạn chưa có tên trong danh sách đặt phòng. Cách phản hồi tốt nhất?",
        "options": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại.",
          "Nổi giận và bỏ đi.",
          "Đưa thông tin không liên quan.",
          "Yêu cầu người khác tự giải quyết."
        ],
        "answers": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại."
        ],
        "difficulty": 5,
        "tags": [
          "hotel",
          "problem-solving"
        ]
      }
    ]
  },
  {
    "id": "official-th-school-scenario",
    "title": "ไทย — School & Classroom Scenarios",
    "language": "th",
    "level": "School / Intermediate",
    "topic": "School & Classroom",
    "context": "School Workplace",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Bài tập thực tế ở trường: đổi lịch, đổi phòng, thông báo, phối hợp và xử lý tình huống lớp học.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "th-s1",
        "type": "dialogue",
        "prompt": "Bạn chưa nghe rõ hướng dẫn. Chọn cách yêu cầu nhắc lại lịch sự nhất.",
        "options": [
          "กรุณาพูดอีกครั้ง",
          "Không cần nói gì.",
          "Nói thật to một từ bất kỳ.",
          "Rời cuộc trò chuyện."
        ],
        "answers": [
          "กรุณาพูดอีกครั้ง"
        ],
        "difficulty": 2,
        "tags": [
          "school",
          "dialogue",
          "politeness"
        ]
      },
      {
        "id": "th-s2",
        "type": "scenario_decision",
        "prompt": "Bạn đến trường nhưng không tìm thấy phòng học mới. Nên làm gì trước?",
        "options": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách",
          "Tự chọn một phòng bất kỳ",
          "Về nhà ngay",
          "Đợi mà không báo ai"
        ],
        "answers": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách"
        ],
        "difficulty": 3,
        "tags": [
          "school-workplace",
          "scenario"
        ]
      },
      {
        "id": "th-s3",
        "type": "multiple_select",
        "prompt": "Chọn thông tin nên có trong thông báo đổi phòng học.",
        "options": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ"
        ],
        "difficulty": 3,
        "tags": [
          "school",
          "communication"
        ]
      },
      {
        "id": "th-s4",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình chuẩn bị một buổi học.",
        "options": [
          "Xác nhận phòng",
          "Chuẩn bị nội dung",
          "Kiểm tra thiết bị",
          "Đón học viên",
          "Tổng kết"
        ],
        "answers": [
          "Xác nhận phòng Chuẩn bị nội dung Kiểm tra thiết bị Đón học viên Tổng kết"
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "workflow"
        ]
      },
      {
        "id": "th-s5",
        "type": "error_correction",
        "prompt": "Chọn thông báo phù hợp nhất khi phải đổi lịch đột xuất.",
        "options": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin.",
          "Đổi giờ nha.",
          "Tự xem lại đi.",
          "Không cần thông báo."
        ],
        "answers": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "formal"
        ]
      },
      {
        "id": "th-s6",
        "type": "reading_group",
        "prompt": "Từ thông báo, hành động nào cần làm trước buổi học?",
        "passage": "Ban tổ chức thông báo phòng học thay đổi. Học viên cần kiểm tra địa điểm mới, có mặt trước 10 phút và liên hệ đầu mối nếu gặp khó khăn.",
        "options": [
          "Kiểm tra địa điểm mới và đến sớm",
          "Chỉ đến sau giờ học",
          "Không đọc thông báo",
          "Tự đổi sang ngày khác"
        ],
        "answers": [
          "Kiểm tra địa điểm mới và đến sớm"
        ],
        "difficulty": 3,
        "tags": [
          "reading",
          "school"
        ]
      },
      {
        "id": "th-s7",
        "type": "translation",
        "prompt": "Diễn đạt/nhận diện câu dùng để xác nhận phòng học: “กรุณายืนยันหมายเลขห้องเรียน”",
        "answers": [
          "กรุณายืนยันหมายเลขห้องเรียน",
          "Vui lòng xác nhận số phòng học."
        ],
        "difficulty": 3,
        "tags": [
          "translation",
          "school"
        ]
      },
      {
        "id": "th-s8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là người phụ trách lớp và có học viên đến nhầm phòng. Phản hồi nào tốt nhất?",
        "options": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau.",
          "Bạn tự tìm đi.",
          "Không phải việc của mình.",
          "Im lặng."
        ],
        "answers": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau."
        ],
        "difficulty": 5,
        "tags": [
          "roleplay",
          "school-workplace"
        ]
      }
    ]
  },
  {
    "id": "official-th-travel-public",
    "title": "ไทย — Travel & Public Services",
    "language": "th",
    "level": "Everyday / Intermediate",
    "topic": "Travel & Public Services",
    "context": "Travel",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Sân bay, khách sạn, phương tiện, hỏi đường và dịch vụ công cộng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "th-t1",
        "type": "dialogue",
        "prompt": "Bạn cần hỏi đường tới ga gần nhất. Chọn câu phù hợp.",
        "options": [
          "สถานีที่ใกล้ที่สุดอยู่ที่ไหน",
          "ฉันต้องการจองห้อง",
          "กรุณายืนยันหมายเลขห้องเรียน",
          "กรุณาพูดอีกครั้ง"
        ],
        "answers": [
          "สถานีที่ใกล้ที่สุดอยู่ที่ไหน"
        ],
        "difficulty": 2,
        "tags": [
          "travel",
          "dialogue"
        ]
      },
      {
        "id": "th-t2",
        "type": "dialogue",
        "prompt": "Bạn muốn đặt phòng khách sạn. Chọn câu phù hợp.",
        "options": [
          "ฉันต้องการจองห้อง",
          "กรุณาพูดอีกครั้ง",
          "สถานีที่ใกล้ที่สุดอยู่ที่ไหน",
          "กรุณายืนยันหมายเลขห้องเรียน"
        ],
        "answers": [
          "ฉันต้องการจองห้อง"
        ],
        "difficulty": 2,
        "tags": [
          "hotel",
          "dialogue"
        ]
      },
      {
        "id": "th-t3",
        "type": "scenario_decision",
        "prompt": "Chuyến bay bị hoãn 45 phút và bạn có chuyến nối chuyến. Nên làm gì?",
        "options": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến",
          "Rời sân bay không báo ai",
          "Bỏ hành lý",
          "Tắt điện thoại"
        ],
        "answers": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến"
        ],
        "difficulty": 4,
        "tags": [
          "airport",
          "scenario"
        ]
      },
      {
        "id": "th-t4",
        "type": "multiple_select",
        "prompt": "Khi nhận phòng khách sạn, thông tin nào nên xác nhận?",
        "options": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng",
          "Mật khẩu mạng xã hội cá nhân"
        ],
        "answers": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng"
        ],
        "difficulty": 3,
        "tags": [
          "hotel",
          "practical"
        ]
      },
      {
        "id": "th-t5",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý thất lạc hành lý.",
        "options": [
          "Xác định quầy hỗ trợ",
          "Cung cấp thông tin chuyến bay",
          "Mô tả hành lý",
          "Nhận mã hồ sơ",
          "Theo dõi cập nhật"
        ],
        "answers": [
          "Xác định quầy hỗ trợ Cung cấp thông tin chuyến bay Mô tả hành lý Nhận mã hồ sơ Theo dõi cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "travel",
          "workflow"
        ]
      },
      {
        "id": "th-t6",
        "type": "reading_group",
        "prompt": "Đâu là thông tin quan trọng nhất trong bảng thông báo?",
        "passage": "Gate changed from B12 to C04. Boarding begins at 18:20. Passengers should arrive at the gate at least 20 minutes before departure.",
        "options": [
          "Cổng mới và giờ boarding",
          "Màu máy bay",
          "Tên phi công",
          "Giá vé năm sau"
        ],
        "answers": [
          "Cổng mới và giờ boarding"
        ],
        "difficulty": 3,
        "tags": [
          "travel",
          "reading"
        ]
      },
      {
        "id": "th-t7",
        "type": "true_false",
        "prompt": "Trong tình huống khẩn cấp ở nơi công cộng, nên cung cấp địa điểm và mô tả sự việc rõ ràng khi yêu cầu hỗ trợ.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "public-services",
          "safety"
        ]
      },
      {
        "id": "th-t8",
        "type": "roleplay",
        "prompt": "Role-play: nhân viên nói bạn chưa có tên trong danh sách đặt phòng. Cách phản hồi tốt nhất?",
        "options": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại.",
          "Nổi giận và bỏ đi.",
          "Đưa thông tin không liên quan.",
          "Yêu cầu người khác tự giải quyết."
        ],
        "answers": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại."
        ],
        "difficulty": 5,
        "tags": [
          "hotel",
          "problem-solving"
        ]
      }
    ]
  },
  {
    "id": "official-vi-school-scenario",
    "title": "Tiếng Việt — School & Classroom Scenarios",
    "language": "vi",
    "level": "School / Intermediate",
    "topic": "School & Classroom",
    "context": "School Workplace",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Bài tập thực tế ở trường: đổi lịch, đổi phòng, thông báo, phối hợp và xử lý tình huống lớp học.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "vi-s1",
        "type": "dialogue",
        "prompt": "Bạn chưa nghe rõ hướng dẫn. Chọn cách yêu cầu nhắc lại lịch sự nhất.",
        "options": [
          "Bạn có thể nhắc lại giúp mình không?",
          "Không cần nói gì.",
          "Nói thật to một từ bất kỳ.",
          "Rời cuộc trò chuyện."
        ],
        "answers": [
          "Bạn có thể nhắc lại giúp mình không?"
        ],
        "difficulty": 2,
        "tags": [
          "school",
          "dialogue",
          "politeness"
        ]
      },
      {
        "id": "vi-s2",
        "type": "scenario_decision",
        "prompt": "Bạn đến trường nhưng không tìm thấy phòng học mới. Nên làm gì trước?",
        "options": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách",
          "Tự chọn một phòng bất kỳ",
          "Về nhà ngay",
          "Đợi mà không báo ai"
        ],
        "answers": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách"
        ],
        "difficulty": 3,
        "tags": [
          "school-workplace",
          "scenario"
        ]
      },
      {
        "id": "vi-s3",
        "type": "multiple_select",
        "prompt": "Chọn thông tin nên có trong thông báo đổi phòng học.",
        "options": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ"
        ],
        "difficulty": 3,
        "tags": [
          "school",
          "communication"
        ]
      },
      {
        "id": "vi-s4",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình chuẩn bị một buổi học.",
        "options": [
          "Xác nhận phòng",
          "Chuẩn bị nội dung",
          "Kiểm tra thiết bị",
          "Đón học viên",
          "Tổng kết"
        ],
        "answers": [
          "Xác nhận phòng Chuẩn bị nội dung Kiểm tra thiết bị Đón học viên Tổng kết"
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "workflow"
        ]
      },
      {
        "id": "vi-s5",
        "type": "error_correction",
        "prompt": "Chọn thông báo phù hợp nhất khi phải đổi lịch đột xuất.",
        "options": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin.",
          "Đổi giờ nha.",
          "Tự xem lại đi.",
          "Không cần thông báo."
        ],
        "answers": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "formal"
        ]
      },
      {
        "id": "vi-s6",
        "type": "reading_group",
        "prompt": "Từ thông báo, hành động nào cần làm trước buổi học?",
        "passage": "Ban tổ chức thông báo phòng học thay đổi. Học viên cần kiểm tra địa điểm mới, có mặt trước 10 phút và liên hệ đầu mối nếu gặp khó khăn.",
        "options": [
          "Kiểm tra địa điểm mới và đến sớm",
          "Chỉ đến sau giờ học",
          "Không đọc thông báo",
          "Tự đổi sang ngày khác"
        ],
        "answers": [
          "Kiểm tra địa điểm mới và đến sớm"
        ],
        "difficulty": 3,
        "tags": [
          "reading",
          "school"
        ]
      },
      {
        "id": "vi-s7",
        "type": "translation",
        "prompt": "Diễn đạt/nhận diện câu dùng để xác nhận phòng học: “Vui lòng xác nhận số phòng học.”",
        "answers": [
          "Vui lòng xác nhận số phòng học.",
          "Vui lòng xác nhận số phòng học."
        ],
        "difficulty": 3,
        "tags": [
          "translation",
          "school"
        ]
      },
      {
        "id": "vi-s8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là người phụ trách lớp và có học viên đến nhầm phòng. Phản hồi nào tốt nhất?",
        "options": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau.",
          "Bạn tự tìm đi.",
          "Không phải việc của mình.",
          "Im lặng."
        ],
        "answers": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau."
        ],
        "difficulty": 5,
        "tags": [
          "roleplay",
          "school-workplace"
        ]
      }
    ]
  },
  {
    "id": "official-vi-travel-public",
    "title": "Tiếng Việt — Travel & Public Services",
    "language": "vi",
    "level": "Everyday / Intermediate",
    "topic": "Travel & Public Services",
    "context": "Travel",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Sân bay, khách sạn, phương tiện, hỏi đường và dịch vụ công cộng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "vi-t1",
        "type": "dialogue",
        "prompt": "Bạn cần hỏi đường tới ga gần nhất. Chọn câu phù hợp.",
        "options": [
          "Ga gần nhất ở đâu?",
          "Tôi muốn đặt phòng.",
          "Vui lòng xác nhận số phòng học.",
          "Bạn có thể nhắc lại giúp mình không?"
        ],
        "answers": [
          "Ga gần nhất ở đâu?"
        ],
        "difficulty": 2,
        "tags": [
          "travel",
          "dialogue"
        ]
      },
      {
        "id": "vi-t2",
        "type": "dialogue",
        "prompt": "Bạn muốn đặt phòng khách sạn. Chọn câu phù hợp.",
        "options": [
          "Tôi muốn đặt phòng.",
          "Bạn có thể nhắc lại giúp mình không?",
          "Ga gần nhất ở đâu?",
          "Vui lòng xác nhận số phòng học."
        ],
        "answers": [
          "Tôi muốn đặt phòng."
        ],
        "difficulty": 2,
        "tags": [
          "hotel",
          "dialogue"
        ]
      },
      {
        "id": "vi-t3",
        "type": "scenario_decision",
        "prompt": "Chuyến bay bị hoãn 45 phút và bạn có chuyến nối chuyến. Nên làm gì?",
        "options": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến",
          "Rời sân bay không báo ai",
          "Bỏ hành lý",
          "Tắt điện thoại"
        ],
        "answers": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến"
        ],
        "difficulty": 4,
        "tags": [
          "airport",
          "scenario"
        ]
      },
      {
        "id": "vi-t4",
        "type": "multiple_select",
        "prompt": "Khi nhận phòng khách sạn, thông tin nào nên xác nhận?",
        "options": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng",
          "Mật khẩu mạng xã hội cá nhân"
        ],
        "answers": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng"
        ],
        "difficulty": 3,
        "tags": [
          "hotel",
          "practical"
        ]
      },
      {
        "id": "vi-t5",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý thất lạc hành lý.",
        "options": [
          "Xác định quầy hỗ trợ",
          "Cung cấp thông tin chuyến bay",
          "Mô tả hành lý",
          "Nhận mã hồ sơ",
          "Theo dõi cập nhật"
        ],
        "answers": [
          "Xác định quầy hỗ trợ Cung cấp thông tin chuyến bay Mô tả hành lý Nhận mã hồ sơ Theo dõi cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "travel",
          "workflow"
        ]
      },
      {
        "id": "vi-t6",
        "type": "reading_group",
        "prompt": "Đâu là thông tin quan trọng nhất trong bảng thông báo?",
        "passage": "Gate changed from B12 to C04. Boarding begins at 18:20. Passengers should arrive at the gate at least 20 minutes before departure.",
        "options": [
          "Cổng mới và giờ boarding",
          "Màu máy bay",
          "Tên phi công",
          "Giá vé năm sau"
        ],
        "answers": [
          "Cổng mới và giờ boarding"
        ],
        "difficulty": 3,
        "tags": [
          "travel",
          "reading"
        ]
      },
      {
        "id": "vi-t7",
        "type": "true_false",
        "prompt": "Trong tình huống khẩn cấp ở nơi công cộng, nên cung cấp địa điểm và mô tả sự việc rõ ràng khi yêu cầu hỗ trợ.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "public-services",
          "safety"
        ]
      },
      {
        "id": "vi-t8",
        "type": "roleplay",
        "prompt": "Role-play: nhân viên nói bạn chưa có tên trong danh sách đặt phòng. Cách phản hồi tốt nhất?",
        "options": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại.",
          "Nổi giận và bỏ đi.",
          "Đưa thông tin không liên quan.",
          "Yêu cầu người khác tự giải quyết."
        ],
        "answers": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại."
        ],
        "difficulty": 5,
        "tags": [
          "hotel",
          "problem-solving"
        ]
      }
    ]
  },
  {
    "id": "official-ar-school-scenario",
    "title": "العربية — School & Classroom Scenarios",
    "language": "ar",
    "level": "School / Intermediate",
    "topic": "School & Classroom",
    "context": "School Workplace",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Bài tập thực tế ở trường: đổi lịch, đổi phòng, thông báo, phối hợp và xử lý tình huống lớp học.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ar-s1",
        "type": "dialogue",
        "prompt": "Bạn chưa nghe rõ hướng dẫn. Chọn cách yêu cầu nhắc lại lịch sự nhất.",
        "options": [
          "هل يمكنك التكرار من فضلك؟",
          "Không cần nói gì.",
          "Nói thật to một từ bất kỳ.",
          "Rời cuộc trò chuyện."
        ],
        "answers": [
          "هل يمكنك التكرار من فضلك؟"
        ],
        "difficulty": 2,
        "tags": [
          "school",
          "dialogue",
          "politeness"
        ]
      },
      {
        "id": "ar-s2",
        "type": "scenario_decision",
        "prompt": "Bạn đến trường nhưng không tìm thấy phòng học mới. Nên làm gì trước?",
        "options": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách",
          "Tự chọn một phòng bất kỳ",
          "Về nhà ngay",
          "Đợi mà không báo ai"
        ],
        "answers": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách"
        ],
        "difficulty": 3,
        "tags": [
          "school-workplace",
          "scenario"
        ]
      },
      {
        "id": "ar-s3",
        "type": "multiple_select",
        "prompt": "Chọn thông tin nên có trong thông báo đổi phòng học.",
        "options": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ"
        ],
        "difficulty": 3,
        "tags": [
          "school",
          "communication"
        ]
      },
      {
        "id": "ar-s4",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình chuẩn bị một buổi học.",
        "options": [
          "Xác nhận phòng",
          "Chuẩn bị nội dung",
          "Kiểm tra thiết bị",
          "Đón học viên",
          "Tổng kết"
        ],
        "answers": [
          "Xác nhận phòng Chuẩn bị nội dung Kiểm tra thiết bị Đón học viên Tổng kết"
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "workflow"
        ]
      },
      {
        "id": "ar-s5",
        "type": "error_correction",
        "prompt": "Chọn thông báo phù hợp nhất khi phải đổi lịch đột xuất.",
        "options": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin.",
          "Đổi giờ nha.",
          "Tự xem lại đi.",
          "Không cần thông báo."
        ],
        "answers": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "formal"
        ]
      },
      {
        "id": "ar-s6",
        "type": "reading_group",
        "prompt": "Từ thông báo, hành động nào cần làm trước buổi học?",
        "passage": "Ban tổ chức thông báo phòng học thay đổi. Học viên cần kiểm tra địa điểm mới, có mặt trước 10 phút và liên hệ đầu mối nếu gặp khó khăn.",
        "options": [
          "Kiểm tra địa điểm mới và đến sớm",
          "Chỉ đến sau giờ học",
          "Không đọc thông báo",
          "Tự đổi sang ngày khác"
        ],
        "answers": [
          "Kiểm tra địa điểm mới và đến sớm"
        ],
        "difficulty": 3,
        "tags": [
          "reading",
          "school"
        ]
      },
      {
        "id": "ar-s7",
        "type": "translation",
        "prompt": "Diễn đạt/nhận diện câu dùng để xác nhận phòng học: “يرجى تأكيد رقم القاعة.”",
        "answers": [
          "يرجى تأكيد رقم القاعة.",
          "Vui lòng xác nhận số phòng học."
        ],
        "difficulty": 3,
        "tags": [
          "translation",
          "school"
        ]
      },
      {
        "id": "ar-s8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là người phụ trách lớp và có học viên đến nhầm phòng. Phản hồi nào tốt nhất?",
        "options": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau.",
          "Bạn tự tìm đi.",
          "Không phải việc của mình.",
          "Im lặng."
        ],
        "answers": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau."
        ],
        "difficulty": 5,
        "tags": [
          "roleplay",
          "school-workplace"
        ]
      }
    ]
  },
  {
    "id": "official-ar-travel-public",
    "title": "العربية — Travel & Public Services",
    "language": "ar",
    "level": "Everyday / Intermediate",
    "topic": "Travel & Public Services",
    "context": "Travel",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Sân bay, khách sạn, phương tiện, hỏi đường và dịch vụ công cộng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "ar-t1",
        "type": "dialogue",
        "prompt": "Bạn cần hỏi đường tới ga gần nhất. Chọn câu phù hợp.",
        "options": [
          "أين أقرب محطة؟",
          "أود أن أحجز غرفة.",
          "يرجى تأكيد رقم القاعة.",
          "هل يمكنك التكرار من فضلك؟"
        ],
        "answers": [
          "أين أقرب محطة؟"
        ],
        "difficulty": 2,
        "tags": [
          "travel",
          "dialogue"
        ]
      },
      {
        "id": "ar-t2",
        "type": "dialogue",
        "prompt": "Bạn muốn đặt phòng khách sạn. Chọn câu phù hợp.",
        "options": [
          "أود أن أحجز غرفة.",
          "هل يمكنك التكرار من فضلك؟",
          "أين أقرب محطة؟",
          "يرجى تأكيد رقم القاعة."
        ],
        "answers": [
          "أود أن أحجز غرفة."
        ],
        "difficulty": 2,
        "tags": [
          "hotel",
          "dialogue"
        ]
      },
      {
        "id": "ar-t3",
        "type": "scenario_decision",
        "prompt": "Chuyến bay bị hoãn 45 phút và bạn có chuyến nối chuyến. Nên làm gì?",
        "options": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến",
          "Rời sân bay không báo ai",
          "Bỏ hành lý",
          "Tắt điện thoại"
        ],
        "answers": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến"
        ],
        "difficulty": 4,
        "tags": [
          "airport",
          "scenario"
        ]
      },
      {
        "id": "ar-t4",
        "type": "multiple_select",
        "prompt": "Khi nhận phòng khách sạn, thông tin nào nên xác nhận?",
        "options": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng",
          "Mật khẩu mạng xã hội cá nhân"
        ],
        "answers": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng"
        ],
        "difficulty": 3,
        "tags": [
          "hotel",
          "practical"
        ]
      },
      {
        "id": "ar-t5",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý thất lạc hành lý.",
        "options": [
          "Xác định quầy hỗ trợ",
          "Cung cấp thông tin chuyến bay",
          "Mô tả hành lý",
          "Nhận mã hồ sơ",
          "Theo dõi cập nhật"
        ],
        "answers": [
          "Xác định quầy hỗ trợ Cung cấp thông tin chuyến bay Mô tả hành lý Nhận mã hồ sơ Theo dõi cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "travel",
          "workflow"
        ]
      },
      {
        "id": "ar-t6",
        "type": "reading_group",
        "prompt": "Đâu là thông tin quan trọng nhất trong bảng thông báo?",
        "passage": "Gate changed from B12 to C04. Boarding begins at 18:20. Passengers should arrive at the gate at least 20 minutes before departure.",
        "options": [
          "Cổng mới và giờ boarding",
          "Màu máy bay",
          "Tên phi công",
          "Giá vé năm sau"
        ],
        "answers": [
          "Cổng mới và giờ boarding"
        ],
        "difficulty": 3,
        "tags": [
          "travel",
          "reading"
        ]
      },
      {
        "id": "ar-t7",
        "type": "true_false",
        "prompt": "Trong tình huống khẩn cấp ở nơi công cộng, nên cung cấp địa điểm và mô tả sự việc rõ ràng khi yêu cầu hỗ trợ.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "public-services",
          "safety"
        ]
      },
      {
        "id": "ar-t8",
        "type": "roleplay",
        "prompt": "Role-play: nhân viên nói bạn chưa có tên trong danh sách đặt phòng. Cách phản hồi tốt nhất?",
        "options": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại.",
          "Nổi giận và bỏ đi.",
          "Đưa thông tin không liên quan.",
          "Yêu cầu người khác tự giải quyết."
        ],
        "answers": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại."
        ],
        "difficulty": 5,
        "tags": [
          "hotel",
          "problem-solving"
        ]
      }
    ]
  },
  {
    "id": "official-id-school-scenario",
    "title": "Bahasa Indonesia — School & Classroom Scenarios",
    "language": "id",
    "level": "School / Intermediate",
    "topic": "School & Classroom",
    "context": "School Workplace",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Bài tập thực tế ở trường: đổi lịch, đổi phòng, thông báo, phối hợp và xử lý tình huống lớp học.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "id-s1",
        "type": "dialogue",
        "prompt": "Bạn chưa nghe rõ hướng dẫn. Chọn cách yêu cầu nhắc lại lịch sự nhất.",
        "options": [
          "Bisa diulangi, tolong?",
          "Không cần nói gì.",
          "Nói thật to một từ bất kỳ.",
          "Rời cuộc trò chuyện."
        ],
        "answers": [
          "Bisa diulangi, tolong?"
        ],
        "difficulty": 2,
        "tags": [
          "school",
          "dialogue",
          "politeness"
        ]
      },
      {
        "id": "id-s2",
        "type": "scenario_decision",
        "prompt": "Bạn đến trường nhưng không tìm thấy phòng học mới. Nên làm gì trước?",
        "options": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách",
          "Tự chọn một phòng bất kỳ",
          "Về nhà ngay",
          "Đợi mà không báo ai"
        ],
        "answers": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách"
        ],
        "difficulty": 3,
        "tags": [
          "school-workplace",
          "scenario"
        ]
      },
      {
        "id": "id-s3",
        "type": "multiple_select",
        "prompt": "Chọn thông tin nên có trong thông báo đổi phòng học.",
        "options": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ"
        ],
        "difficulty": 3,
        "tags": [
          "school",
          "communication"
        ]
      },
      {
        "id": "id-s4",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình chuẩn bị một buổi học.",
        "options": [
          "Xác nhận phòng",
          "Chuẩn bị nội dung",
          "Kiểm tra thiết bị",
          "Đón học viên",
          "Tổng kết"
        ],
        "answers": [
          "Xác nhận phòng Chuẩn bị nội dung Kiểm tra thiết bị Đón học viên Tổng kết"
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "workflow"
        ]
      },
      {
        "id": "id-s5",
        "type": "error_correction",
        "prompt": "Chọn thông báo phù hợp nhất khi phải đổi lịch đột xuất.",
        "options": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin.",
          "Đổi giờ nha.",
          "Tự xem lại đi.",
          "Không cần thông báo."
        ],
        "answers": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "formal"
        ]
      },
      {
        "id": "id-s6",
        "type": "reading_group",
        "prompt": "Từ thông báo, hành động nào cần làm trước buổi học?",
        "passage": "Ban tổ chức thông báo phòng học thay đổi. Học viên cần kiểm tra địa điểm mới, có mặt trước 10 phút và liên hệ đầu mối nếu gặp khó khăn.",
        "options": [
          "Kiểm tra địa điểm mới và đến sớm",
          "Chỉ đến sau giờ học",
          "Không đọc thông báo",
          "Tự đổi sang ngày khác"
        ],
        "answers": [
          "Kiểm tra địa điểm mới và đến sớm"
        ],
        "difficulty": 3,
        "tags": [
          "reading",
          "school"
        ]
      },
      {
        "id": "id-s7",
        "type": "translation",
        "prompt": "Diễn đạt/nhận diện câu dùng để xác nhận phòng học: “Mohon konfirmasi nomor ruang kelas.”",
        "answers": [
          "Mohon konfirmasi nomor ruang kelas.",
          "Vui lòng xác nhận số phòng học."
        ],
        "difficulty": 3,
        "tags": [
          "translation",
          "school"
        ]
      },
      {
        "id": "id-s8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là người phụ trách lớp và có học viên đến nhầm phòng. Phản hồi nào tốt nhất?",
        "options": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau.",
          "Bạn tự tìm đi.",
          "Không phải việc của mình.",
          "Im lặng."
        ],
        "answers": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau."
        ],
        "difficulty": 5,
        "tags": [
          "roleplay",
          "school-workplace"
        ]
      }
    ]
  },
  {
    "id": "official-id-travel-public",
    "title": "Bahasa Indonesia — Travel & Public Services",
    "language": "id",
    "level": "Everyday / Intermediate",
    "topic": "Travel & Public Services",
    "context": "Travel",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Sân bay, khách sạn, phương tiện, hỏi đường và dịch vụ công cộng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "id-t1",
        "type": "dialogue",
        "prompt": "Bạn cần hỏi đường tới ga gần nhất. Chọn câu phù hợp.",
        "options": [
          "Di mana stasiun terdekat?",
          "Saya ingin membuat reservasi.",
          "Mohon konfirmasi nomor ruang kelas.",
          "Bisa diulangi, tolong?"
        ],
        "answers": [
          "Di mana stasiun terdekat?"
        ],
        "difficulty": 2,
        "tags": [
          "travel",
          "dialogue"
        ]
      },
      {
        "id": "id-t2",
        "type": "dialogue",
        "prompt": "Bạn muốn đặt phòng khách sạn. Chọn câu phù hợp.",
        "options": [
          "Saya ingin membuat reservasi.",
          "Bisa diulangi, tolong?",
          "Di mana stasiun terdekat?",
          "Mohon konfirmasi nomor ruang kelas."
        ],
        "answers": [
          "Saya ingin membuat reservasi."
        ],
        "difficulty": 2,
        "tags": [
          "hotel",
          "dialogue"
        ]
      },
      {
        "id": "id-t3",
        "type": "scenario_decision",
        "prompt": "Chuyến bay bị hoãn 45 phút và bạn có chuyến nối chuyến. Nên làm gì?",
        "options": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến",
          "Rời sân bay không báo ai",
          "Bỏ hành lý",
          "Tắt điện thoại"
        ],
        "answers": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến"
        ],
        "difficulty": 4,
        "tags": [
          "airport",
          "scenario"
        ]
      },
      {
        "id": "id-t4",
        "type": "multiple_select",
        "prompt": "Khi nhận phòng khách sạn, thông tin nào nên xác nhận?",
        "options": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng",
          "Mật khẩu mạng xã hội cá nhân"
        ],
        "answers": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng"
        ],
        "difficulty": 3,
        "tags": [
          "hotel",
          "practical"
        ]
      },
      {
        "id": "id-t5",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý thất lạc hành lý.",
        "options": [
          "Xác định quầy hỗ trợ",
          "Cung cấp thông tin chuyến bay",
          "Mô tả hành lý",
          "Nhận mã hồ sơ",
          "Theo dõi cập nhật"
        ],
        "answers": [
          "Xác định quầy hỗ trợ Cung cấp thông tin chuyến bay Mô tả hành lý Nhận mã hồ sơ Theo dõi cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "travel",
          "workflow"
        ]
      },
      {
        "id": "id-t6",
        "type": "reading_group",
        "prompt": "Đâu là thông tin quan trọng nhất trong bảng thông báo?",
        "passage": "Gate changed from B12 to C04. Boarding begins at 18:20. Passengers should arrive at the gate at least 20 minutes before departure.",
        "options": [
          "Cổng mới và giờ boarding",
          "Màu máy bay",
          "Tên phi công",
          "Giá vé năm sau"
        ],
        "answers": [
          "Cổng mới và giờ boarding"
        ],
        "difficulty": 3,
        "tags": [
          "travel",
          "reading"
        ]
      },
      {
        "id": "id-t7",
        "type": "true_false",
        "prompt": "Trong tình huống khẩn cấp ở nơi công cộng, nên cung cấp địa điểm và mô tả sự việc rõ ràng khi yêu cầu hỗ trợ.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "public-services",
          "safety"
        ]
      },
      {
        "id": "id-t8",
        "type": "roleplay",
        "prompt": "Role-play: nhân viên nói bạn chưa có tên trong danh sách đặt phòng. Cách phản hồi tốt nhất?",
        "options": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại.",
          "Nổi giận và bỏ đi.",
          "Đưa thông tin không liên quan.",
          "Yêu cầu người khác tự giải quyết."
        ],
        "answers": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại."
        ],
        "difficulty": 5,
        "tags": [
          "hotel",
          "problem-solving"
        ]
      }
    ]
  },
  {
    "id": "official-tr-school-scenario",
    "title": "Türkçe — School & Classroom Scenarios",
    "language": "tr",
    "level": "School / Intermediate",
    "topic": "School & Classroom",
    "context": "School Workplace",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Bài tập thực tế ở trường: đổi lịch, đổi phòng, thông báo, phối hợp và xử lý tình huống lớp học.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "tr-s1",
        "type": "dialogue",
        "prompt": "Bạn chưa nghe rõ hướng dẫn. Chọn cách yêu cầu nhắc lại lịch sự nhất.",
        "options": [
          "Tekrar eder misiniz, lütfen?",
          "Không cần nói gì.",
          "Nói thật to một từ bất kỳ.",
          "Rời cuộc trò chuyện."
        ],
        "answers": [
          "Tekrar eder misiniz, lütfen?"
        ],
        "difficulty": 2,
        "tags": [
          "school",
          "dialogue",
          "politeness"
        ]
      },
      {
        "id": "tr-s2",
        "type": "scenario_decision",
        "prompt": "Bạn đến trường nhưng không tìm thấy phòng học mới. Nên làm gì trước?",
        "options": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách",
          "Tự chọn một phòng bất kỳ",
          "Về nhà ngay",
          "Đợi mà không báo ai"
        ],
        "answers": [
          "Kiểm tra thông báo và hỏi đầu mối phụ trách"
        ],
        "difficulty": 3,
        "tags": [
          "school-workplace",
          "scenario"
        ]
      },
      {
        "id": "tr-s3",
        "type": "multiple_select",
        "prompt": "Chọn thông tin nên có trong thông báo đổi phòng học.",
        "options": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ",
          "Tin đồn không liên quan"
        ],
        "answers": [
          "Phòng mới",
          "Thời gian áp dụng",
          "Đầu mối hỗ trợ"
        ],
        "difficulty": 3,
        "tags": [
          "school",
          "communication"
        ]
      },
      {
        "id": "tr-s4",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình chuẩn bị một buổi học.",
        "options": [
          "Xác nhận phòng",
          "Chuẩn bị nội dung",
          "Kiểm tra thiết bị",
          "Đón học viên",
          "Tổng kết"
        ],
        "answers": [
          "Xác nhận phòng Chuẩn bị nội dung Kiểm tra thiết bị Đón học viên Tổng kết"
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "workflow"
        ]
      },
      {
        "id": "tr-s5",
        "type": "error_correction",
        "prompt": "Chọn thông báo phù hợp nhất khi phải đổi lịch đột xuất.",
        "options": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin.",
          "Đổi giờ nha.",
          "Tự xem lại đi.",
          "Không cần thông báo."
        ],
        "answers": [
          "Xin lỗi vì thay đổi đột xuất. Buổi học chuyển sang 20:00; vui lòng xác nhận bạn đã nhận thông tin."
        ],
        "difficulty": 4,
        "tags": [
          "school",
          "formal"
        ]
      },
      {
        "id": "tr-s6",
        "type": "reading_group",
        "prompt": "Từ thông báo, hành động nào cần làm trước buổi học?",
        "passage": "Ban tổ chức thông báo phòng học thay đổi. Học viên cần kiểm tra địa điểm mới, có mặt trước 10 phút và liên hệ đầu mối nếu gặp khó khăn.",
        "options": [
          "Kiểm tra địa điểm mới và đến sớm",
          "Chỉ đến sau giờ học",
          "Không đọc thông báo",
          "Tự đổi sang ngày khác"
        ],
        "answers": [
          "Kiểm tra địa điểm mới và đến sớm"
        ],
        "difficulty": 3,
        "tags": [
          "reading",
          "school"
        ]
      },
      {
        "id": "tr-s7",
        "type": "translation",
        "prompt": "Diễn đạt/nhận diện câu dùng để xác nhận phòng học: “Lütfen sınıf numarasını onaylayın.”",
        "answers": [
          "Lütfen sınıf numarasını onaylayın.",
          "Vui lòng xác nhận số phòng học."
        ],
        "difficulty": 3,
        "tags": [
          "translation",
          "school"
        ]
      },
      {
        "id": "tr-s8",
        "type": "roleplay",
        "prompt": "Role-play: bạn là người phụ trách lớp và có học viên đến nhầm phòng. Phản hồi nào tốt nhất?",
        "options": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau.",
          "Bạn tự tìm đi.",
          "Không phải việc của mình.",
          "Im lặng."
        ],
        "answers": [
          "Chào bạn, mình sẽ chỉ phòng mới và cập nhật lại thông tin để bạn không bị nhầm lần sau."
        ],
        "difficulty": 5,
        "tags": [
          "roleplay",
          "school-workplace"
        ]
      }
    ]
  },
  {
    "id": "official-tr-travel-public",
    "title": "Türkçe — Travel & Public Services",
    "language": "tr",
    "level": "Everyday / Intermediate",
    "topic": "Travel & Public Services",
    "context": "Travel",
    "skill": "Dialogue / Reading / Scenario",
    "description": "Sân bay, khách sạn, phương tiện, hỏi đường và dịch vụ công cộng.",
    "isOfficial": true,
    "visibility": "public",
    "updatedAt": "2026-09-11",
    "status": "published",
    "questions": [
      {
        "id": "tr-t1",
        "type": "dialogue",
        "prompt": "Bạn cần hỏi đường tới ga gần nhất. Chọn câu phù hợp.",
        "options": [
          "En yakın istasyon nerede?",
          "Rezervasyon yapmak istiyorum.",
          "Lütfen sınıf numarasını onaylayın.",
          "Tekrar eder misiniz, lütfen?"
        ],
        "answers": [
          "En yakın istasyon nerede?"
        ],
        "difficulty": 2,
        "tags": [
          "travel",
          "dialogue"
        ]
      },
      {
        "id": "tr-t2",
        "type": "dialogue",
        "prompt": "Bạn muốn đặt phòng khách sạn. Chọn câu phù hợp.",
        "options": [
          "Rezervasyon yapmak istiyorum.",
          "Tekrar eder misiniz, lütfen?",
          "En yakın istasyon nerede?",
          "Lütfen sınıf numarasını onaylayın."
        ],
        "answers": [
          "Rezervasyon yapmak istiyorum."
        ],
        "difficulty": 2,
        "tags": [
          "hotel",
          "dialogue"
        ]
      },
      {
        "id": "tr-t3",
        "type": "scenario_decision",
        "prompt": "Chuyến bay bị hoãn 45 phút và bạn có chuyến nối chuyến. Nên làm gì?",
        "options": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến",
          "Rời sân bay không báo ai",
          "Bỏ hành lý",
          "Tắt điện thoại"
        ],
        "answers": [
          "Kiểm tra cổng/giờ mới và liên hệ hãng nếu nguy cơ lỡ nối chuyến"
        ],
        "difficulty": 4,
        "tags": [
          "airport",
          "scenario"
        ]
      },
      {
        "id": "tr-t4",
        "type": "multiple_select",
        "prompt": "Khi nhận phòng khách sạn, thông tin nào nên xác nhận?",
        "options": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng",
          "Mật khẩu mạng xã hội cá nhân"
        ],
        "answers": [
          "Tên đặt phòng",
          "Số đêm",
          "Loại phòng"
        ],
        "difficulty": 3,
        "tags": [
          "hotel",
          "practical"
        ]
      },
      {
        "id": "tr-t5",
        "type": "ordering",
        "prompt": "Sắp xếp quy trình xử lý thất lạc hành lý.",
        "options": [
          "Xác định quầy hỗ trợ",
          "Cung cấp thông tin chuyến bay",
          "Mô tả hành lý",
          "Nhận mã hồ sơ",
          "Theo dõi cập nhật"
        ],
        "answers": [
          "Xác định quầy hỗ trợ Cung cấp thông tin chuyến bay Mô tả hành lý Nhận mã hồ sơ Theo dõi cập nhật"
        ],
        "difficulty": 4,
        "tags": [
          "travel",
          "workflow"
        ]
      },
      {
        "id": "tr-t6",
        "type": "reading_group",
        "prompt": "Đâu là thông tin quan trọng nhất trong bảng thông báo?",
        "passage": "Gate changed from B12 to C04. Boarding begins at 18:20. Passengers should arrive at the gate at least 20 minutes before departure.",
        "options": [
          "Cổng mới và giờ boarding",
          "Màu máy bay",
          "Tên phi công",
          "Giá vé năm sau"
        ],
        "answers": [
          "Cổng mới và giờ boarding"
        ],
        "difficulty": 3,
        "tags": [
          "travel",
          "reading"
        ]
      },
      {
        "id": "tr-t7",
        "type": "true_false",
        "prompt": "Trong tình huống khẩn cấp ở nơi công cộng, nên cung cấp địa điểm và mô tả sự việc rõ ràng khi yêu cầu hỗ trợ.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "difficulty": 3,
        "tags": [
          "public-services",
          "safety"
        ]
      },
      {
        "id": "tr-t8",
        "type": "roleplay",
        "prompt": "Role-play: nhân viên nói bạn chưa có tên trong danh sách đặt phòng. Cách phản hồi tốt nhất?",
        "options": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại.",
          "Nổi giận và bỏ đi.",
          "Đưa thông tin không liên quan.",
          "Yêu cầu người khác tự giải quyết."
        ],
        "answers": [
          "Bình tĩnh đưa mã đặt chỗ và đề nghị họ kiểm tra lại."
        ],
        "difficulty": 5,
        "tags": [
          "hotel",
          "problem-solving"
        ]
      }
    ]
  }
];
