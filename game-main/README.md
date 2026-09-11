# Sky First Games

**PLAY • LEARN • LEVEL UP**

`game.skyfirst.io.vn` — nền tảng trò chơi học tập đa ngôn ngữ thuộc hệ sinh thái Sky First Network.

## Project scope

Project này là một package duy nhất gồm:

- Public website: Home / Explore / Quick Play / Join / Play.
- 15 language worlds: English, 中文, 日本語, 한국어, Français, Deutsch, Español, Italiano, Português, Русский, ไทย, Tiếng Việt, العربية, Bahasa Indonesia, Türkçe.
- 50+ built-in Game Mode manifests (D1 migration hiện có 58 records sau khi chạy đủ migrations).
- 66 official content packs / 528 câu hỏi seed mới, ngoài các legacy seed trước đó.
- Các dạng bài: MCQ, multi-select, true/false, typed answer, fill blank, matching, ordering, sentence builder, audio choice, listening input, dictation, cloze, error correction, transformation, word formation, translation, dialogue, scenario decision, reading group, role-play.
- Listening có audio file thật trong `public/audio/` cho nhiều ngôn ngữ và TTS fallback ở browser khi media không tải được.
- Creator Studio: tự khởi tạo account, tạo/sửa Question Set, upload audio/image/video lên R2, tạo game, cấp Access Pass cho TNV (link + PIN).
- Admin Console tại `/admin`: website CMS, navigation, homepage, footer, branding, SEO, languages, content, matrix, collections, accounts, sessions, R2 media, moderation, system settings.
- Cloudflare D1, R2, Pages Functions và Worker/Durable Objects.

## Brand

Logo chính thức được dùng tại:

`public/brand/sky-first-logo.png`

Đây là logo chữ **S** cách điệu do Sky First cung cấp. Không thay biểu tượng bằng chữ khác.

## Cloudflare resources đã cấu hình

- D1 database ID: `ad37223f-92b4-4636-a17b-f1083a469031`
- R2 bucket: `game`
- Domain dự kiến: `game.skyfirst.io.vn`

## Deploy bằng GitHub + Cloudflare Pages

Repo GitHub có cấu trúc:

```text
repo/
└── game-main/
    ├── package.json
    ├── src/
    ├── public/
    ├── functions/
    ├── worker/
    ├── migrations/
    └── ...
```

Cloudflare Pages build settings:

```text
Framework preset: None
Build command: npm run build
Build output directory: dist
Root directory: game-main
```

Không cần build `dist` trên máy trước khi push GitHub.

### Pages bindings

Trong Pages project, tạo bindings cho Production và Preview:

- D1: variable `GAME_DB` → database ID `ad37223f-92b4-4636-a17b-f1083a469031`
- R2: variable `GAME_ASSETS` → bucket `game`

Pages Functions trong thư mục `functions/` sử dụng trực tiếp 2 binding trên để Creator/Admin/API và media hoạt động cùng domain.

### First Admin

Creator có thể tự khởi tạo account tại `/login` → **Tự khởi tạo tài khoản**.

Quyền Admin không tự cấp. Để tạo Admin đầu tiên khi D1 chưa có account:

1. Tạo secret/environment variable `ADMIN_SETUP_KEY` trong Cloudflare.
2. Mở `/login` khi hệ thống chưa được khởi tạo.
3. Nhập setup key, email, mật khẩu và tên hiển thị.
4. Tài khoản đầu tiên được tạo với quyền Admin.

Sau đó Admin có thể cấp/gỡ quyền Admin cho Creator khác tại `/admin`.

## D1 migrations

Chạy theo thứ tự:

```bash
0001_init.sql
0002_seed_game_modes.sql
0003_seed_official_content.sql
0004_multilingual_advanced.sql
0005_seed_15_languages.sql
0006_extra_game_modes.sql
0007_access_pass_pin.sql
```

Có thể dùng Wrangler:

```bash
npm install
npx wrangler d1 migrations apply GAME_DB --remote --config wrangler.worker.jsonc
```

Hoặc chạy SQL qua Cloudflare D1 console theo đúng thứ tự.

Sau toàn bộ migrations hiện tại:

- 15 languages
- 70 question sets (bao gồm legacy seed)
- 541 questions (bao gồm legacy seed)
- 58 Game Mode records

## Worker / realtime

`wrangler.worker.jsonc` là cấu hình Worker đầy đủ, có:

- D1 `GAME_DB`
- R2 `GAME_ASSETS`
- Durable Object `GAME_ROOMS`
- Static assets `dist`

Pages Functions đủ cho website, tài khoản, Creator, Admin, D1/R2 và session cơ bản. Realtime WebSocket/Durable Object đầy đủ dùng Worker configuration này.

Deploy Worker:

```bash
npm run deploy:worker
```

Nếu chỉ deploy Pages trước, phần public/Creator/Admin vẫn dùng Pages Functions; realtime Durable Object cần binding/deployment Worker đầy đủ để có WebSocket lobby.

## Listening

Question schema hỗ trợ:

- `mediaUrl`
- `mediaType: audio`
- `transcript`
- `ttsText`
- `ttsLang`
- `maxPlays`
- `playbackRate`

Player ưu tiên phát file audio. Nếu file lỗi hoặc không có file, player gọi `SpeechSynthesis` với `ttsText`/`ttsLang` để người học vẫn nghe được.

Creator có thể upload MP3/WAV/OGG trực tiếp từ Question Editor; file được đưa vào R2 thông qua `/api/media`.

## Admin philosophy

`/admin` được thiết kế theo nguyên tắc **không góc khuất**: phần nội dung/cấu hình/vận hành website phải quản được từ Admin Console thay vì phải sửa source. Logic kỹ thuật lõi, security code và migrations vẫn nằm trong source để tránh admin UI có thể phá kiến trúc hệ thống.

## Footer

Footer đã chốt:

- Sky First Games — PLAY • LEARN • LEVEL UP
- Website chính Sky First Network
- `hotro.sfn@gmail.com`
- 15 ngôn ngữ
- Cổng Thành viên / Tình nguyện viên / Thông tin / Học thuật / Website chính
- `© 2026 Sky First Games — Bản quyền thuộc Mạng lưới Giáo dục & Phát triển Cộng đồng Sky First.`
- `Một sản phẩm thuộc hệ sinh thái Sky First Network.`

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Cloudflare Pages sẽ tạo `dist/` tự động từ source.
