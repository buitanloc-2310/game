# Sky First Games — `game-main`

Một project duy nhất cho **Sky First Games**: public game experience + Creator Studio + Admin Console + Cloudflare Worker API + D1 + R2.

## Hạ tầng đã cấu hình

- **D1 database ID:** `ad37223f-92b4-4636-a17b-f1083a469031`
- **D1 binding:** `GAME_DB`
- `database_name` trong `wrangler.worker.jsonc` đang đặt là `sky-first-games`; nếu tên hiển thị thật trong Cloudflare Dashboard khác, đổi duy nhất trường này, giữ nguyên database ID.
- **R2 bucket:** `game`
- **R2 binding:** `GAME_ASSETS`
- Website chính: `https://skyfirst.io.vn`

> Project không chứa API token, secret hoặc mật khẩu Cloudflare.

## Kiến trúc

- React + TypeScript + Vite cho giao diện.
- Cloudflare Worker làm API và phục vụ static SPA.
- D1 lưu account Creator/Admin, settings toàn site, ngôn ngữ, Game Modes, Question Sets, questions, game instances, Access Pass, sessions/results.
- R2 lưu media/audio/image/game assets.
- Durable Object `GameRoom` điều phối live room/WebSocket và roster realtime theo từng session.
- Người chơi/TNV không bắt buộc có account.
- Creator account tạo Question Set, game và Access Pass.
- Admin cùng một hệ account nhưng có `is_admin=1`; Admin Console điều khiển gần như toàn bộ website qua settings + các module quản trị.

## 40 Game Modes

Project khai báo 40 Game Modes thuộc 5 nhóm: Speed, Language, Listening, Arcade, Classroom. Tất cả mode dùng chung Question/Content Engine. Một số mode chuyên biệt chỉ nhận các question type phù hợp.

## Chạy local

```bash
npm install
cp .dev.vars.example .dev.vars
# sửa ADMIN_SETUP_KEY trong .dev.vars
npm run db:migrate:local
npm run dev
```

Vite dev server chỉ phục vụ frontend. Để test Worker + D1/R2 local giống production:

```bash
npm run build
npx wrangler dev
```

Sau đó mở URL Wrangler cung cấp.

## Khởi tạo Admin đầu tiên

1. Đặt secret `ADMIN_SETUP_KEY`.
2. Deploy/migrate D1.
3. Truy cập `/login`.
4. Khi database chưa có account, giao diện tự hiện form **Khởi tạo hệ thống**.
5. Nhập setup key + email + password + tên hiển thị.

Production:

```bash
npx wrangler secret put ADMIN_SETUP_KEY
```

Không commit secret vào source.

## Migrate D1

```bash
npm run db:migrate
```

Các migration:

- `0001_init.sql`: schema + settings + languages.
- `0002_seed_game_modes.sql`: 40 Game Modes.
- `0003_seed_official_content.sql`: official content khởi đầu.

## Deploy

```bash
npm install
npm run db:migrate
npm run deploy
```

Sau deploy, gắn custom domain `game.skyfirst.io.vn` vào Worker trong Cloudflare Dashboard.

## Admin Console — “không góc khuất”

Các nhóm đã dựng trong UI:

- Tổng quan
- Cấu hình website
- Menu & điều hướng
- Homepage
- Footer
- Branding
- SEO & metadata
- Game Modes
- Ngôn ngữ
- Nội dung
- Creator Accounts
- Sessions
- Media / R2
- System / feature flags / maintenance

Cấu hình trang/copy/branding/SEO được lưu ở bảng `settings`, không cần sửa source cho các thay đổi vận hành thông thường. Logic game/server cốt lõi vẫn nằm trong source code để đảm bảo an toàn.

## Creator Studio

- Tạo/sửa/xóa Question Set.
- Nhiều question type: MCQ, True/False, typed, fill blank, matching, ordering, sentence builder…
- Tạo Game instance từ Question Set + Game Mode.
- Sinh join code.
- Tạo Access Pass cho TNV, có thể thu hồi.
- Người học vào public/Quick Play không cần account.

## Lưu ý

- Live room đã có Durable Object/WebSocket coordinator (`GameRoom`) cho snapshot/roster/event realtime; D1 giữ session/result bền vững còn Durable Object giữ trạng thái phiên đang chạy.
- Game Player hiện triển khai engine dùng chung với các mechanic quiz/race/match/builder/board/team/survival để toàn bộ 40 mode có thể dùng chung nền nội dung. Các game art/mechanic nâng cao có thể phát triển độc lập trên cùng manifest mà không thay cấu trúc Content Engine.
- Official seed content là nội dung mẫu khởi đầu, cần được đội ngũ nội dung kiểm duyệt/bổ sung trước khi public rộng.
