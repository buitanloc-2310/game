-- Final system consistency: English UI, official logo, join defaults and safe operational settings.
INSERT INTO settings(key,value_json,updated_at,updated_by) VALUES
('site','{"brandName":"Sky First Games","shortName":"SFG","tagline":"PLAY • LEARN • LEVEL UP","contactEmail":"hotro.sfn@gmail.com","mainSiteUrl":"https://skyfirst.io.vn","mainSiteLabel":"Main Website — Sky First Network"}',datetime('now'),NULL),
('branding','{"logoUrl":"/brand/sky-first-logo.png","primary":"#0ea5e9","navy":"#07182f","radius":"22px","motion":true}',datetime('now'),NULL),
('join','{"code":true,"cameraQr":true,"uploadQr":true,"directLink":true,"requireName":true,"maxPlayers":60,"allowLateJoin":true,"safeNickname":true,"codeLength":6,"cameraMessage":"Allow camera access to scan QR codes."}',datetime('now'),NULL),
('system','{"maintenance":false,"selfCreatorRegistration":true,"guestPlay":true,"featureFlags":{"dailyChallenge":true,"quickPlay":true,"qrScanner":true,"volunteerHub":true,"ttsFallback":true,"accessPass":true}}',datetime('now'),NULL)
ON CONFLICT(key) DO UPDATE SET value_json=excluded.value_json,updated_at=excluded.updated_at;
