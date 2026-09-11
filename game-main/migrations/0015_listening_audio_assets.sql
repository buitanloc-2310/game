-- Attach real bundled WAV assets to selected listening questions; browser TTS remains the fallback.
UPDATE questions SET media_url='/audio/en-workplace.wav',media_type='audio',updated_at=datetime('now') WHERE id='native-en-2-14';
UPDATE questions SET media_url='/audio/zh-workplace.wav',media_type='audio',updated_at=datetime('now') WHERE id='native-zh-2-14';
UPDATE questions SET media_url='/audio/fr-workplace.wav',media_type='audio',updated_at=datetime('now') WHERE id='native-fr-2-14';
UPDATE questions SET media_url='/audio/de-workplace.wav',media_type='audio',updated_at=datetime('now') WHERE id='native-de-2-14';
UPDATE questions SET media_url='/audio/es-workplace.wav',media_type='audio',updated_at=datetime('now') WHERE id='native-es-2-14';
UPDATE questions SET media_url='/audio/it-workplace.wav',media_type='audio',updated_at=datetime('now') WHERE id='native-it-2-14';
UPDATE questions SET media_url='/audio/pt-workplace.wav',media_type='audio',updated_at=datetime('now') WHERE id='native-pt-2-14';
UPDATE questions SET media_url='/audio/ru-workplace.wav',media_type='audio',updated_at=datetime('now') WHERE id='native-ru-2-14';
UPDATE questions SET media_url='/audio/vi-workplace.wav',media_type='audio',updated_at=datetime('now') WHERE id='native-vi-2-14';
UPDATE questions SET media_url='/audio/id-workplace.wav',media_type='audio',updated_at=datetime('now') WHERE id='native-id-2-14';
UPDATE questions SET media_url='/audio/tr-workplace.wav',media_type='audio',updated_at=datetime('now') WHERE id='native-tr-2-14';
