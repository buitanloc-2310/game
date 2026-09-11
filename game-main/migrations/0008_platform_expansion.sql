CREATE TABLE IF NOT EXISTS support_requests (
  id TEXT PRIMARY KEY,
  ticket_code TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL,
  name TEXT,
  email TEXT,
  message TEXT NOT NULL,
  source TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_support_status ON support_requests(status, created_at DESC);

CREATE TABLE IF NOT EXISTS volunteer_media (
  id TEXT PRIMARY KEY,
  access_pass_id TEXT,
  r2_key TEXT NOT NULL,
  media_url TEXT NOT NULL,
  mime_type TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  note TEXT,
  created_at TEXT NOT NULL,
  reviewed_at TEXT,
  reviewed_by TEXT,
  FOREIGN KEY(access_pass_id) REFERENCES access_passes(id)
);
CREATE INDEX IF NOT EXISTS idx_volunteer_media_status ON volunteer_media(status, created_at DESC);

INSERT INTO settings(key,value_json,updated_at,updated_by)
VALUES('join','{"code":true,"cameraQr":true,"uploadQr":true,"directLink":true,"requireName":true,"maxPlayers":60,"allowLateJoin":true,"safeNickname":true,"codeLength":6,"cameraMessage":"Cho phép camera để quét QR."}',datetime('now'),NULL)
ON CONFLICT(key) DO NOTHING;

INSERT INTO settings(key,value_json,updated_at,updated_by)
VALUES('volunteer','{"enabled":true,"gallery":true,"uploadsRequireReview":true,"reportEnabled":true,"announcements":true,"hostByAccessPass":true}',datetime('now'),NULL)
ON CONFLICT(key) DO NOTHING;
