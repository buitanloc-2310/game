# Sky First Games — Project Map

```text
game-main/
├── functions/
│   ├── api/[[path]].ts          Pages API bridge to D1/R2 backend
│   └── media/[[path]].ts        R2 media delivery
├── migrations/
│   ├── 0001_init.sql
│   ├── 0002_seed_game_modes.sql
│   ├── 0003_seed_official_content.sql
│   ├── 0004_multilingual_advanced.sql
│   ├── 0005_seed_15_languages.sql
│   ├── 0006_extra_game_modes.sql
│   └── 0007_access_pass_pin.sql
├── public/
│   ├── audio/                    working WAV listening assets
│   ├── brand/sky-first-logo.png official supplied S logo
│   └── _redirects               SPA routing for Pages
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── GameCard.tsx
│   │   ├── GamePlayer.tsx       question/audio/gameplay engine
│   │   └── NavBar.tsx
│   ├── data/
│   │   ├── gameModes.ts         50+ frontend game manifests
│   │   ├── languages.ts         15 Language Adapters
│   │   └── seedContent.ts       66 official packs / 528 seed questions
│   ├── pages/
│   │   ├── AdminPage.tsx        /admin full-control console
│   │   ├── CreatorPage.tsx      Creator Studio
│   │   ├── HomePage.tsx
│   │   ├── ExplorePage.tsx
│   │   ├── QuickPlayPage.tsx
│   │   ├── JoinPage.tsx
│   │   ├── RoomPage.tsx
│   │   ├── HostPage.tsx
│   │   └── LoginPage.tsx        login + self-initialize Creator
│   ├── App.tsx
│   ├── styles.css
│   └── types.ts
├── worker/index.ts              full Worker API + Durable Object realtime
├── wrangler.worker.jsonc
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## System layers

```text
PUBLIC EXPERIENCE
  ↓
CONTENT ENGINE ── LANGUAGE ADAPTERS
  ↓
COMPATIBILITY / GAME MANIFESTS
  ↓
GAME PLAYER / LIVE SESSION / ASSIGNMENT
  ↓
RESULTS & ANALYTICS

CREATOR STUDIO ── Question Sets / Media / Games / Access Pass
ADMIN CONSOLE  ── Website / Games / Languages / Content / Accounts / Operations

D1 = persistent platform data
R2 = audio, image, video, thumbnails, assets
Durable Objects = realtime room coordinator
```
