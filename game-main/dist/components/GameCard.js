import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { ArrowRight, Users, Clock3 } from 'lucide-react';
export function GameCard({ mode, onPlay }) {
    return _jsxs("article", { className: "game-card", style: { '--accent': mode.color }, children: [_jsx("div", { className: "game-icon", children: mode.icon }), _jsxs("div", { className: "game-card-content", children: [_jsx("div", { className: "eyebrow", children: mode.family.toUpperCase() }), _jsx("h3", { children: mode.name }), _jsx("p", { children: mode.description }), _jsxs("div", { className: "game-meta", children: [_jsxs("span", { children: [_jsx(Users, { size: 14 }), mode.minPlayers, "\u2013", mode.maxPlayers] }), _jsxs("span", { children: [_jsx(Clock3, { size: 14 }), mode.durationMinutes[0], "\u2013", mode.durationMinutes[1], " ph\u00FAt"] })] })] }), _jsx("button", { className: "round-arrow", onClick: onPlay, "aria-label": `Chơi ${mode.name}`, children: _jsx(ArrowRight, {}) })] });
}
