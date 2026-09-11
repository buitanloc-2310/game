# Sky First Games — Project Map

- `src/App.tsx` — router / app shell
- `src/components/NavBar.tsx` — 5 main menu items + Overview mega menu
- `src/components/Footer.tsx` — footer, Sky First portals, UI-language dropdown
- `src/components/GamePlayer.tsx` — 24-question learning loop, review/relearn/retest, audio/TTS
- `src/pages/JoinPage.tsx` — code / camera QR / image QR
- `src/pages/VolunteerPage.tsx` — TNV Hub
- `src/pages/CreatorPage.tsx` — Creator Studio
- `src/pages/AdminPage.tsx` — full Admin Console
- `src/pages/InfoPage.tsx` — long-form Overview/policy pages + support forms
- `src/data/infoPages.ts` — long content pages
- `src/data/languages.ts` — 15 languages
- `src/data/gameModes.ts` — game mode manifests
- `src/data/seedContent.ts` — built-in official content
- `worker/index.ts` — API / auth / D1 / R2 / Access Pass / support / realtime worker
- `functions/api/[[path]].ts` — Pages Functions API bridge
- `functions/media/[[path]].ts` — R2 delivery
- `migrations/0008_platform_expansion.sql` — support + TNV media
- `setup-d1.sql` — one-shot D1 schema/seed setup
