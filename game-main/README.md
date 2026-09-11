# Sky First Games

**PLAY • LEARN • LEVEL UP**

Sky First Games is a multilingual learning-game platform for school, daily life, volunteer activities and workplace learning. The system interface is English; learning content stays in the selected target language.

## Project structure

This project is designed to live inside a repository folder named `game-main/`.

Cloudflare Pages build settings:

- Framework preset: `None`
- Root directory: `game-main`
- Build command: `npm run build`
- Build output directory: `dist`

## Cloudflare bindings

Pages/Worker bindings:

- D1 binding: `GAME_DB`
- D1 database ID: `ad37223f-92b4-4636-a17b-f1083a469031`
- R2 binding: `GAME_ASSETS`
- R2 bucket: `game`

Optional secrets / variables:

- `ADMIN_SETUP_KEY` — required only for first-system Admin bootstrap
- `APP_NAME=Sky First Games`
- `MAIN_SITE_URL=https://skyfirst.io.vn`

## Database setup

For a new database, run the complete `setup-d1.sql` in D1 Console, or apply every migration in `migrations/` in numeric order.

For an existing installation, apply only migrations that have not yet been applied. The latest migrations include:

- `0010_creator_workspace.sql` — persistent Creator challenges, assignments, collections, templates, plans, preferences and activity
- `0011_native_language_content.sql` — target-language Official Content for all 15 languages
- `0012_english_system_ui.sql` — English system navigation and public-site defaults
- `0013_system_consistency.sql` — official logo, English join settings and operational defaults
- `0014_game_mode_english_metadata.sql` — English Game Mode metadata for existing D1 installations

Current clean database result after all migrations:

- 15 learning languages
- 58 registered D1 Game Modes
- 45 published Official Content packs
- 1,350 published Official Content questions (30 per published pack)
- legacy Official Content is archived by the native-language migration

## Product rules implemented

- System UI: English
- Learning language and system UI are independent
- Minimum 20 questions for Creator Question Sets (enforced in UI and API)
- Typical game session: 20–30 questions
- Learning loop: Play → Results → Review → Relearn Incorrect Answers → Retest → Continue / Exit
- Real audio support + browser TTS fallback
- QR join: code, camera scan, QR image upload and direct links
- Volunteer Hub: Access Pass, host controls, session reports and moderated photo uploads
- Creator Studio: persistent D1 workspace with create/edit/delete flows
- Admin Console: website settings, navigation/footer, Join/QR, Volunteer Hub, policy pages, languages, game modes, content moderation, accounts, Access Passes, sessions, R2 media, support, security and system settings

## Creator Studio

Creator Studio includes:

- Overview and global Create menu
- My Content / Question Set editor
- Official Content browser
- Game Builder with compatibility filtering
- Challenges
- Assignments
- Templates
- Games & Sessions
- Access Passes
- Volunteer Sharing
- Reports & Analytics
- Version History
- Activity Log
- R2 Media Studio
- Collections
- Import / Export
- Creator Settings
- Help Center

Challenges, assignments, collections, templates and scheduled-session plans are stored in D1 through `creator_items`; they are not browser-only localStorage records.

## Admin Console

`/admin` uses the same account system as Creator Studio. Admin access is an additional permission.

Admin can control:

- Website branding, official logo, colors and core copy
- SEO metadata
- Main navigation, Overview mega-menu and footer configuration
- Join and QR behavior
- Volunteer Hub and media approval
- Full information/policy page content overrides
- Learning-language configuration
- Game Mode status and metadata
- All Question Sets: publish/review/verify/archive/official/delete
- Creator/Admin permissions and account status
- Access Pass revocation
- Live/session termination
- R2 media upload/delete
- Support requests and status workflow
- Security configuration
- Maintenance and feature flags
- Settings JSON backup

## Logo

The project includes the exact Sky First S-shaped logo supplied for this project at:

`public/brand/sky-first-logo.png`

## Support

`hotro.sfn@gmail.com`

Main Sky First Network website: `https://skyfirst.io.vn`
