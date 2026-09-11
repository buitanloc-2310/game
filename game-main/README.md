# Sky First Games

**PLAY • LEARN • LEVEL UP**  
Production project for `game.skyfirst.io.vn`.

## Cloudflare Pages build

Use the repository structure:

```text
repo/
└── game-main/
    ├── package.json
    ├── src/
    ├── functions/
    ├── worker/
    ├── migrations/
    └── ...
```

Cloudflare Pages settings:

```text
Framework preset: None
Build command: npm run build
Build output directory: dist
Root directory: game-main
```

Bindings:

```text
D1 binding: GAME_DB
D1 database ID: ad37223f-92b4-4636-a17b-f1083a469031
R2 binding: GAME_ASSETS
R2 bucket: game
```

For the first Admin bootstrap, add the secret/environment variable `ADMIN_SETUP_KEY`.

## Database

Run `setup-d1.sql` once for a fresh database, or apply migrations `0001` through `0008` in order.

Migration `0008_platform_expansion.sql` adds Support Center and TNV media moderation.

## Main product areas

- Public home / Explore / Quick Play
- Join by game code, direct link, camera QR, or QR image upload
- 15 language worlds and language-specific metadata/adapters
- 40+ game mode registry
- 20–30 question session loop with review → relearn wrong answers → retest → continue/exit
- Real audio assets + browser TTS fallback
- TNV Hub with Access Pass, host tools, reports, activity photo upload and moderation
- Creator Studio
- Self-initialization endpoint at `/initialize` when enabled; login screen remains clean
- Admin Console at `/admin`
- Long-form Overview pages and policies under `/info/*`
- Support requests / issue reports / feedback tickets
- R2 media library

## Admin Console

The Admin Console manages website/branding, menu/footer, Join/QR behavior, TNV Hub, information pages, languages, game modes, content, accounts/permissions, Access Passes, sessions, R2 media, support tickets, privacy/security, maintenance and feature flags.

## Brand

The project includes the exact supplied Sky First signature **S** logo at:

```text
public/brand/sky-first-logo.png
```

Do not replace the symbol with an “E” or redraw the mark.

## Support

`hotro.sfn@gmail.com`

© 2026 Sky First Games — Bản quyền thuộc Mạng lưới Giáo dục & Phát triển Cộng đồng Sky First.  
Một sản phẩm thuộc hệ sinh thái Sky First Network.


## Creator Studio Ultra upgrade
Bản này giữ nguyên toàn bộ Public/Admin/TNV/Game hiện có và nâng Creator Studio thành workspace nhiều mô-đun: Content Library, Official Content, Game Builder, Challenge, Assignment, Sessions, Access Pass, TNV Sharing, Media Studio, Reports, Collections, Import/Export, Version History, Settings và Help Center.

Một số mô-đun tổ chức cá nhân (Challenge, Assignment, Collection, Creator preferences) hiện lưu localStorage để không yêu cầu migration D1 mới; các tài nguyên chính Question Set/Game/Access Pass/Media tiếp tục dùng API/D1/R2 sẵn có.

## Advanced exercise content upgrade
- 66 Sky First Official packs are expanded from 8 to **24 questions per pack** (1,584 official seed questions total).
- Each pack now mixes listening/TTS, reading, multiple select, fill blank, role-play, scenario decision, transformation, cloze, dictation, ordering and mastery reflection.
- Game sessions prefer **20–30 unique questions** before any reinforcement/repetition.
- Learning loop remains: play → review → relearn wrong answers → retest → next lesson / exit.
- Run `migrations/0009_expand_official_exercises.sql` on an existing D1 database, or use the refreshed `setup-d1.sql` for a new database.
