# Exercise Engine Upgrade

This build keeps the previous Creator Studio upgrade and expands the learning content layer.

## What changed
- 66 frontend Sky First Official packs now contain 24 questions each (1,584 frontend seed questions).
- Existing D1 starter packs are also expanded so every official pack has at least 20 questions after migration.
- Added migration `migrations/0009_expand_official_exercises.sql` for existing databases.
- Refreshed `setup-d1.sql` includes migrations 0001–0009 in order.
- Added broader question coverage: fill blank, multiple select, reading group, scenario decision, role-play, transformation, cloze, synonym/antonym, word formation, audio choice, listening input, dictation, sentence builder/ordering, error correction and mastery reflection.
- Game sessions now prefer unique questions first; reinforcement/repetition is only used when the selected compatible pool is below the 20–30 question target.
- Existing learning loop is preserved: Play → Review → Relearn wrong answers → Retest → Next lesson / Exit.

## Existing D1 database
Run only:
`migrations/0009_expand_official_exercises.sql`

## New D1 database
Run:
`setup-d1.sql`
