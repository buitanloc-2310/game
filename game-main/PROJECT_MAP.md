# Sky First Games — Project Map

## Public Experience
- `/` — landing game-first, featured modes, language worlds.
- `/explore` — catalogue 40 Game Modes.
- `/quick-play` — hệ thống tự chọn nội dung/mode.
- `/join` — nhập mã game, không cần account.
- `/room` — chơi game được Creator tạo thông qua join code.
- `/play` — chơi official content trực tiếp.
- `/about`, `/privacy` — nội dung lấy từ CMS settings.

## Creator
- `/login` — bootstrap hệ thống lần đầu hoặc Creator login.
- `/creator` — Question Set editor, Game instance, Access Pass.
- Host link `/host/<pass-token>` — TNV host không cần account.

## Admin — full control
- `/admin` — website/CMS, navigation, homepage, custom pages, footer, branding, SEO, language config, Game Modes, content, Creator accounts, sessions, R2 media, system flags.

## Backend
- `worker/index.ts` — API, auth, D1, R2, live room proxy.
- Durable Object `GameRoom` — WebSocket roster/event state theo session.
- `migrations/` — schema + 40 mode manifests + official seed content.

## Core separation
`Question Set -> Game Mode -> Game Instance -> Access Pass -> Session -> Result`

Nội dung không bị khóa vào một game. Game Mode khai báo compatibility và có thể bật/tắt độc lập từ Admin.
