import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { ArrowLeft, CheckCircle2, XCircle, Trophy, RotateCcw, Lightbulb } from 'lucide-react';
import { navigate } from '../lib/router.js';
function normalize(s) { return s.trim().toLocaleLowerCase().replace(/[.,!?。]/g, '').replace(/\s+/g, ' '); }
function isCorrect(q, value) { return q.answers.some(a => normalize(a) === normalize(value)); }
export function GamePlayer({ set, mode }) {
    const [index, setIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [streak, setStreak] = React.useState(0);
    const [answer, setAnswer] = React.useState('');
    const [selected, setSelected] = React.useState([]);
    const [locked, setLocked] = React.useState(false);
    const [wasCorrect, setWasCorrect] = React.useState(false);
    const [finished, setFinished] = React.useState(false);
    const [order, setOrder] = React.useState([]);
    const [matched, setMatched] = React.useState({});
    const timed = ['time-bomb', 'lightning-round', 'quick-fire', 'last-second'].includes(mode.id);
    const [timeLeft, setTimeLeft] = React.useState(timed ? 12 : 0);
    const compatible = set.questions.filter(q => mode.supportedQuestionTypes.includes(q.type));
    const questions = compatible.length ? compatible : set.questions;
    const q = questions[index];
    React.useEffect(() => { if (q?.options && ['ordering', 'sentence_builder'].includes(q.type))
        setOrder([...q.options].sort(() => Math.random() - .5));
    else
        setOrder([]); setMatched({}); setTimeLeft(timed ? 12 : 0); }, [index, q?.id, timed]);
    React.useEffect(() => { if (!timed || locked || finished)
        return; const t = setInterval(() => setTimeLeft(v => { if (v <= 1) {
        clearInterval(t);
        setWasCorrect(false);
        setLocked(true);
        setStreak(0);
        return 0;
    } return v - 1; }), 1000); return () => clearInterval(t); }, [index, timed, locked, finished]);
    if (!q || finished) {
        const accuracy = questions.length ? Math.round((score / (questions.length * 100)) * 100) : 0;
        return _jsx("main", { className: "play-stage finish-stage", children: _jsxs("div", { className: "finish-card", children: [_jsx("div", { className: "finish-trophy", children: _jsx(Trophy, {}) }), _jsx("div", { className: "eyebrow", children: "HO\u00C0N TH\u00C0NH" }), _jsxs("h1", { children: [mode.icon, " ", mode.name] }), _jsx("p", { children: set.title }), _jsxs("div", { className: "result-grid", children: [_jsxs("div", { children: [_jsx("strong", { children: score }), _jsx("span", { children: "\u0110i\u1EC3m" })] }), _jsxs("div", { children: [_jsxs("strong", { children: [accuracy, "%"] }), _jsx("span", { children: "Hi\u1EC7u su\u1EA5t" })] }), _jsxs("div", { children: [_jsx("strong", { children: questions.length }), _jsx("span", { children: "C\u00E2u" })] })] }), _jsxs("div", { className: "button-row", children: [_jsxs("button", { className: "primary-button", onClick: () => { setIndex(0); setScore(0); setStreak(0); setFinished(false); setLocked(false); setAnswer(''); setSelected([]); }, children: [_jsx(RotateCcw, { size: 18 }), "Ch\u01A1i l\u1EA1i"] }), _jsx("button", { className: "secondary-button", onClick: () => navigate('/explore'), children: "Kh\u00E1m ph\u00E1 game kh\u00E1c" })] })] }) });
    }
    const submit = (value) => {
        if (locked)
            return;
        let response = value ?? answer;
        let ok = false;
        if (['ordering', 'sentence_builder'].includes(q.type))
            response = order.join(' ');
        if (q.type === 'matching') {
            const pairStrings = (q.pairs || []).map(p => `${p.left}=${matched[p.left] || ''}`);
            ok = (q.pairs || []).every(p => normalize(matched[p.left] || '') === normalize(p.right));
            response = pairStrings.join('|');
        }
        else if (q.type === 'multiple_select')
            ok = q.answers.length === selected.length && q.answers.every(a => selected.some(s => normalize(s) === normalize(a)));
        else
            ok = isCorrect(q, response);
        setWasCorrect(ok);
        setLocked(true);
        const nextStreak = ok ? streak + 1 : 0;
        setStreak(nextStreak);
        if (ok) {
            const bonus = Math.min(nextStreak * 8, 60);
            setScore(s => s + 100 + bonus);
        }
    };
    const next = () => { if (index >= questions.length - 1) {
        setFinished(true);
        return;
    } setIndex(i => i + 1); setAnswer(''); setSelected([]); setLocked(false); setWasCorrect(false); };
    const renderQuestion = () => {
        if (q.type === 'matching' && q.pairs) {
            return _jsx("div", { className: "matching-grid", children: q.pairs.map(p => _jsxs("div", { className: "match-row", children: [_jsx("strong", { children: p.left }), _jsxs("select", { value: matched[p.left] || '', onChange: e => setMatched(m => ({ ...m, [p.left]: e.target.value })), disabled: locked, children: [_jsx("option", { value: "", children: "Ch\u1ECDn\u2026" }), [...q.pairs].sort(() => Math.random() - .5).map(x => _jsx("option", { value: x.right, children: x.right }, x.right))] })] }, p.left)) });
        }
        if (['ordering', 'sentence_builder'].includes(q.type) && q.options) {
            return _jsxs("div", { className: "order-box", children: [_jsx("p", { className: "muted", children: "B\u1EA5m v\u00E0o c\u00E1c th\u1EBB \u0111\u1EC3 \u0111\u1ED5i v\u1ECB tr\u00ED." }), _jsx("div", { className: "token-row", children: order.map((t, i) => _jsx("button", { disabled: locked, className: "token", onClick: () => { if (i === 0)
                                return; const c = [...order]; [c[i - 1], c[i]] = [c[i], c[i - 1]]; setOrder(c); }, children: t }, `${t}-${i}`)) })] });
        }
        if (q.options?.length) {
            return _jsx("div", { className: "answer-grid", children: q.options.map((opt, i) => { const sel = selected.includes(opt) || answer === opt; let cls = 'answer-button' + (sel ? ' selected' : ''); if (locked) {
                    if (isCorrect(q, opt))
                        cls += ' correct';
                    else if (sel)
                        cls += ' wrong';
                } return _jsxs("button", { disabled: locked, className: cls, onClick: () => { if (q.type === 'multiple_select')
                        setSelected(s => s.includes(opt) ? s.filter(x => x !== opt) : [...s, opt]);
                    else {
                        setAnswer(opt);
                        submit(opt);
                    } }, children: [_jsx("span", { children: String.fromCharCode(65 + i) }), opt] }, opt); }) });
        }
        return _jsxs("div", { className: "typed-wrap", children: [_jsx("input", { autoFocus: true, disabled: locked, value: answer, onChange: e => setAnswer(e.target.value), onKeyDown: e => { if (e.key === 'Enter' && answer)
                        submit(); }, placeholder: "Nh\u1EADp c\u00E2u tr\u1EA3 l\u1EDDi\u2026" }), _jsx("button", { className: "primary-button", disabled: !answer || locked, onClick: () => submit(), children: "Tr\u1EA3 l\u1EDDi" })] });
    };
    return _jsx("main", { className: `play-stage mechanic-${mode.mechanic}`, style: { '--game-accent': mode.color }, children: _jsxs("div", { className: "play-shell", children: [_jsxs("div", { className: "play-topline", children: [_jsx("button", { className: "icon-button", onClick: () => navigate('/explore'), children: _jsx(ArrowLeft, {}) }), _jsxs("div", { className: "play-title", children: [_jsx("span", { children: mode.icon }), _jsxs("div", { children: [_jsx("strong", { children: mode.name }), _jsx("small", { children: set.title })] })] }), _jsxs("div", { className: "score-pill", children: [_jsx("span", { children: streak > 1 ? `🔥 ${streak}x` : 'Điểm' }), _jsx("strong", { children: score })] })] }), _jsx("div", { className: "progress", children: _jsx("span", { style: { width: `${((index + 1) / questions.length) * 100}%` } }) }), _jsx(ModeHud, { mode: mode, score: score, index: index, total: questions.length, streak: streak, timeLeft: timeLeft }), _jsxs("section", { className: "question-panel", children: [_jsxs("div", { className: "question-counter", children: ["C\u00C2U ", index + 1, " / ", questions.length] }), q.mediaUrl && _jsx("div", { className: "question-media", children: q.mediaUrl.match(/\.(mp3|wav|ogg)$/i) ? _jsx("audio", { controls: true, src: q.mediaUrl }) : _jsx("img", { src: q.mediaUrl, alt: "Question media" }) }), _jsx("h1", { children: q.prompt }), q.hint && _jsxs("div", { className: "hint", children: [_jsx(Lightbulb, { size: 16 }), q.hint] }), renderQuestion(), !locked && (q.type === 'matching' || q.type === 'multiple_select' || ['ordering', 'sentence_builder'].includes(q.type)) && _jsx("button", { className: "primary-button submit-wide", onClick: () => submit(), children: "Ch\u1ED1t \u0111\u00E1p \u00E1n" }), locked && _jsxs("div", { className: wasCorrect ? 'feedback correct' : 'feedback wrong', children: [wasCorrect ? _jsx(CheckCircle2, {}) : _jsx(XCircle, {}), _jsxs("div", { children: [_jsx("strong", { children: wasCorrect ? 'Chính xác!' : 'Chưa đúng rồi' }), !wasCorrect && _jsxs("p", { children: ["\u0110\u00E1p \u00E1n: ", q.answers.join(' / ')] }), q.explanation && _jsx("p", { children: q.explanation })] }), _jsx("button", { onClick: next, children: index === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp →' })] })] }), _jsxs("div", { className: "game-decor", children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {}), _jsx("span", {})] })] }) });
}
function ModeHud({ mode, score, index, total, streak, timeLeft }) {
    const progress = Math.min(100, Math.round(((index + 1) / Math.max(total, 1)) * 100));
    if (['rocket-race', 'word-sprint', 'turbo-track', 'monster-run'].includes(mode.id))
        return _jsxs("div", { className: "mode-hud race-hud", children: [_jsx("span", { children: "\uD83C\uDFC1" }), _jsxs("div", { children: [_jsx("i", { style: { width: `${progress}%` } }), _jsx("b", { style: { left: `calc(${progress}% - 14px)` }, children: mode.icon })] }), _jsx("span", { children: "\uD83C\uDFC6" })] });
    if (['time-bomb', 'lightning-round', 'quick-fire', 'last-second'].includes(mode.id))
        return _jsxs("div", { className: "mode-hud timer-hud", children: [_jsx("span", { children: mode.id === 'time-bomb' ? '💣' : '⚡' }), _jsxs("strong", { children: [timeLeft, "s"] }), _jsx("div", { children: _jsx("i", { style: { width: `${Math.max(0, timeLeft / 12 * 100)}%` } }) }), _jsx("em", { children: streak > 1 ? `${streak}x streak` : 'Giữ nhịp!' })] });
    if (mode.id === 'millionaire')
        return _jsxs("div", { className: "mode-hud millionaire-hud", children: [_jsx("span", { children: "\uD83D\uDCB0" }), [100, 200, 300, 500, 1000].map((x, i) => _jsx("b", { className: score >= x ? 'won' : '', children: x }, x))] });
    if (['treasure-hunt', 'maze-escape', 'galaxy-quest', 'lucky-tiles', 'classroom-bingo'].includes(mode.id))
        return _jsx("div", { className: "mode-hud board-hud", children: Array.from({ length: 8 }).map((_, i) => _jsx("span", { className: i < Math.ceil(progress / 12.5) ? 'open' : '', children: mode.id === 'galaxy-quest' ? '🪐' : mode.id === 'treasure-hunt' ? (i === 7 ? '💎' : '🗺️') : '▦' }, i)) });
    if (mode.id === 'balloon-pop')
        return _jsxs("div", { className: "mode-hud balloon-hud", children: [['🎈', '🎈', '🎈', '🎈', '🎈'].map((x, i) => _jsx("span", { className: i < Math.min(5, Math.ceil(score / 120)) ? 'popped' : '', children: x }, i)), _jsxs("b", { children: [Math.floor(score / 100), " pops"] })] });
    if (mode.id === 'fishing-words')
        return _jsxs("div", { className: "mode-hud fishing-hud", children: [_jsx("span", { children: "\uD83C\uDF0A" }), _jsx("strong", { children: "\uD83C\uDFA3" }), _jsx("b", { children: '🐟'.repeat(Math.min(6, Math.floor(score / 100))) || '…' })] });
    if (['team-battle', 'mystery-box', 'king-of-words', 'knockout', 'final-showdown'].includes(mode.id))
        return _jsxs("div", { className: "mode-hud battle-hud", children: [_jsxs("div", { children: [_jsx("span", { children: "TEAM SKY" }), _jsx("i", { style: { width: `${Math.min(100, 40 + progress * .5)}%` } })] }), _jsx("b", { children: mode.icon }), _jsxs("div", { children: [_jsx("span", { children: "RIVAL" }), _jsx("i", { style: { width: `${Math.max(10, 85 - progress * .45)}%` } })] })] });
    if (['sentence-builder', 'missing-word', 'spell-it', 'word-match', 'synonym-hunt', 'opposite-hunt', 'grammar-fixer', 'dialogue-dash'].includes(mode.id))
        return _jsxs("div", { className: "mode-hud language-hud", children: [_jsx("span", { children: mode.icon }), _jsx("strong", { children: mode.name }), _jsxs("em", { children: ["Language skill \u2022 ", progress, "%"] })] });
    if (['listen-pick', 'listen-type', 'sound-match', 'stress-master', 'pronounce-quest', 'reading-hunt', 'context-clues', 'translation-relay'].includes(mode.id))
        return _jsxs("div", { className: "mode-hud listening-hud", children: [_jsx("span", { children: "\uD83C\uDFA7" }), _jsxs("div", { children: [_jsx("i", {}), _jsx("i", {}), _jsx("i", {}), _jsx("i", {}), _jsx("i", {})] }), _jsx("b", { children: mode.name })] });
    return _jsxs("div", { className: "mode-hud generic-hud", children: [_jsx("span", { children: mode.icon }), _jsx("strong", { children: mode.name }), _jsxs("em", { children: [progress, "%"] })] });
}
