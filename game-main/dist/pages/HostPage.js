import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Copy, KeyRound, Loader2, Play, ShieldCheck, Users } from 'lucide-react';
import { api } from '../lib/api.js';
function wsUrl(path) { return `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}${path}`; }
export function HostPage({ token }) {
    const [data, setData] = React.useState(null);
    const [err, setErr] = React.useState('');
    const [session, setSession] = React.useState(null);
    const [players, setPlayers] = React.useState([]);
    React.useEffect(() => { api.hostPass(token).then(setData).catch(e => setErr(e.message)); }, [token]);
    React.useEffect(() => { if (!session?.id)
        return; const ws = new WebSocket(wsUrl(`/api/live/${session.id}?role=host&pass=${encodeURIComponent(token)}`)); ws.onmessage = e => { try {
        const d = JSON.parse(e.data);
        if (d.players)
            setPlayers(d.players);
    }
    catch { } }; return () => ws.close(); }, [session?.id, token]);
    if (err)
        return _jsx("main", { className: "auth-page", children: _jsxs("div", { className: "auth-card", children: [_jsx("h1", { children: "Access Pass kh\u00F4ng h\u1EE3p l\u1EC7" }), _jsx("p", { children: err })] }) });
    if (!data)
        return _jsx("main", { className: "auth-page", children: _jsxs("div", { className: "auth-card", children: [_jsx(Loader2, { className: "spin" }), _jsx("h1", { children: "\u0110ang m\u1EDF quy\u1EC1n Host\u2026" })] }) });
    const joinUrl = `${location.origin}/join?code=${data.game.join_code}`;
    return _jsx("main", { className: "host-page", children: _jsxs("section", { className: "host-card", children: [_jsxs("div", { className: "host-badge", children: [_jsx(ShieldCheck, {}), "TNV HOST ACCESS"] }), _jsx("h1", { children: data.game.title }), _jsxs("p", { children: [data.set.title, " \u2022 ", data.set.questions.length, " c\u00E2u \u2022 Game Mode: ", data.game.mode_id] }), _jsxs("div", { className: "host-code", children: [_jsx("span", { children: "M\u00C3 THAM GIA" }), _jsx("strong", { children: data.game.join_code }), _jsxs("button", { onClick: () => navigator.clipboard.writeText(joinUrl), children: [_jsx(Copy, {}), "Copy link"] })] }), session ? _jsxs(_Fragment, { children: [_jsxs("div", { className: "session-live", children: [_jsx("span", { children: "\u25CF SESSION ACTIVE" }), _jsx("strong", { children: session.room_code }), _jsxs("p", { children: [_jsx(Users, { size: 14 }), " ", players.length, " ng\u01B0\u1EDDi \u0111\u00E3 k\u1EBFt n\u1ED1i realtime."] })] }), _jsxs("div", { className: "player-roster", children: [players.map(p => _jsx("span", { children: p.nickname }, p.id)), !players.length && _jsx("small", { children: "\u0110ang ch\u1EDD h\u1ECDc vi\u00EAn v\u00E0o ph\u00F2ng\u2026" })] })] }) : _jsxs("button", { className: "primary-button big full", onClick: async () => setSession((await api.startHostSession(token)).session), children: [_jsx(Play, {}), "B\u1EAFt \u0111\u1EA7u phi\u00EAn"] }), _jsxs("div", { className: "host-note", children: [_jsx(KeyRound, {}), "Access Pass ch\u1EC9 c\u1EA5p quy\u1EC1n cho game n\u00E0y; kh\u00F4ng c\u1EA7n t\u00E0i kho\u1EA3n Creator."] })] }) });
}
