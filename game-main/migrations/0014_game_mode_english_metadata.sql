-- Keep the Admin/Public game catalogue fully English on existing D1 installations.
UPDATE game_modes
SET description = CASE family
  WHEN 'speed' THEN 'A fast-paced learning mode that rewards accuracy, timing and streaks.'
  WHEN 'language' THEN 'A language-focused mode for vocabulary, sentence structure and practical use.'
  WHEN 'listening' THEN 'A listening-focused mode with audio playback and TTS fallback support.'
  WHEN 'arcade' THEN 'An arcade-style learning mode where correct answers drive the game mechanic.'
  WHEN 'classroom' THEN 'A classroom mode designed for live, team or one-screen play.'
  WHEN 'strategy' THEN 'A strategy-based mode that combines learning decisions with progression.'
  WHEN 'scenario' THEN 'A real-life scenario mode built around decisions, dialogue and practical communication.'
  ELSE 'An interactive Sky First Games learning mode.'
END,
updated_at = datetime('now');
