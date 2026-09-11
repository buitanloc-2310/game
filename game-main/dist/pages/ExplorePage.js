import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Filter, Search } from 'lucide-react';
import { gameModes } from '../data/gameModes.js';
import { seedQuestionSets } from '../data/seedContent.js';
import { languages } from '../data/languages.js';
import { GameCard } from '../components/GameCard.js';
import { navigate } from '../lib/router.js';
export function ExplorePage() {
    const params = new URLSearchParams(location.search);
    const initial = params.get('lang') || 'all';
    const [lang, setLang] = React.useState(initial);
    const [family, setFamily] = React.useState('all');
    const [q, setQ] = React.useState('');
    const modes = gameModes.filter(m => (family === 'all' || m.family === family) && (!q || `${m.name} ${m.description}`.toLowerCase().includes(q.toLowerCase())));
    const selectedSet = seedQuestionSets.find(s => lang === 'all' || s.language === lang) || seedQuestionSets[0];
    return _jsxs("main", { className: "page-shell", children: [_jsxs("div", { className: "page-hero compact", children: [_jsx("span", { className: "eyebrow", children: "GAME CATALOGUE" }), _jsx("h1", { children: "Kh\u00E1m ph\u00E1 40 Game Modes" }), _jsx("p", { children: "Ch\u1ECDn ng\u00F4n ng\u1EEF, ki\u1EC3u ch\u01A1i v\u00E0 b\u1EAFt \u0111\u1EA7u ngay v\u1EDBi n\u1ED9i dung ch\u00EDnh th\u1EE9c c\u1EE7a Sky First Games." })] }), _jsxs("div", { className: "filterbar", children: [_jsxs("div", { className: "searchbox", children: [_jsx(Search, { size: 18 }), _jsx("input", { placeholder: "T\u00ECm game\u2026", value: q, onChange: e => setQ(e.target.value) })] }), _jsxs("select", { value: lang, onChange: e => setLang(e.target.value), children: [_jsx("option", { value: "all", children: "T\u1EA5t c\u1EA3 ng\u00F4n ng\u1EEF" }), languages.filter(l => l.status !== 'disabled').map(l => _jsxs("option", { value: l.code, children: [l.icon, " ", l.nativeName] }, l.code))] }), _jsxs("select", { value: family, onChange: e => setFamily(e.target.value), children: [_jsx("option", { value: "all", children: "T\u1EA5t c\u1EA3 nh\u00F3m" }), _jsx("option", { value: "speed", children: "Speed" }), _jsx("option", { value: "language", children: "Language" }), _jsx("option", { value: "listening", children: "Listening" }), _jsx("option", { value: "arcade", children: "Arcade" }), _jsx("option", { value: "classroom", children: "Classroom" })] })] }), _jsxs("div", { className: "catalog-note", children: [_jsx(Filter, { size: 16 }), _jsxs("span", { children: ["\u0110ang d\u00F9ng b\u1ED9 m\u1EABu: ", _jsx("b", { children: selectedSet.title }), ". Creator c\u00F3 th\u1EC3 t\u1EA1o b\u1ED9 ri\u00EAng v\u00E0 h\u1EC7 th\u1ED1ng s\u1EBD t\u1EF1 l\u1ECDc game t\u01B0\u01A1ng th\u00EDch."] })] }), _jsx("div", { className: "game-grid catalog", children: modes.map(m => _jsx(GameCard, { mode: m, onPlay: () => navigate(`/play?mode=${m.id}&set=${selectedSet.id}`) }, m.id)) })] });
}
