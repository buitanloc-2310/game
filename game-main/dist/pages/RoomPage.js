import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Loader2 } from 'lucide-react';
import { api } from '../lib/api.js';
import { gameModes } from '../data/gameModes.js';
import { GamePlayer } from '../components/GamePlayer.js';
function wsUrl(path) { return `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}${path}`; }
export function RoomPage() {
    const params = new URLSearchParams(location.search);
    const code = params.get('code') || '';
    const nickname = params.get('name') || 'Player';
    const [data, setData] = React.useState(null);
    const [err, setErr] = React.useState('');
    React.useEffect(() => { if (!code) {
        setErr('Thiếu mã trò chơi.');
        return;
    } api.publicGame(code).then(setData).catch(e => setErr(e.message)); }, [code]);
    React.useEffect(() => { if (!data?.activeSession?.id)
        return; const ws = new WebSocket(wsUrl(`/api/live/${data.activeSession.id}?role=player`)); ws.addEventListener('open', () => ws.send(JSON.stringify({ type: 'join', nickname }))); return () => ws.close(); }, [data?.activeSession?.id, nickname]);
    if (err)
        return _jsx("main", { className: "auth-page", children: _jsxs("div", { className: "auth-card", children: [_jsx("h1", { children: "Kh\u00F4ng v\u00E0o \u0111\u01B0\u1EE3c game" }), _jsx("p", { children: err })] }) });
    if (!data)
        return _jsx("main", { className: "auth-page", children: _jsxs("div", { className: "auth-card", children: [_jsx(Loader2, { className: "spin" }), _jsx("h1", { children: "\u0110ang t\u1EA3i tr\u00F2 ch\u01A1i\u2026" })] }) });
    const mode = gameModes.find(m => m.id === data.game.mode_id) || gameModes[0];
    return _jsx(GamePlayer, { set: data.set, mode: mode });
}
