import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { NavBar } from './components/NavBar.js';
import { Footer } from './components/Footer.js';
import { HomePage } from './pages/HomePage.js';
import { ExplorePage } from './pages/ExplorePage.js';
import { QuickPlayPage } from './pages/QuickPlayPage.js';
import { JoinPage } from './pages/JoinPage.js';
import { LoginPage } from './pages/LoginPage.js';
import { CreatorPage } from './pages/CreatorPage.js';
import { AdminPage } from './pages/AdminPage.js';
import { RoomPage } from './pages/RoomPage.js';
import { HostPage } from './pages/HostPage.js';
import { GamePlayer } from './components/GamePlayer.js';
import { getRoute } from './lib/router.js';
import { api, authToken } from './lib/api.js';
import { gameModes } from './data/gameModes.js';
import { seedQuestionSets } from './data/seedContent.js';
const fallbackConfig = {
    brandName: 'Sky First Games', shortName: 'SFG', tagline: 'Play. Learn. Level Up.',
    heroTitle: 'Chơi để học. Học để đi xa hơn.',
    heroSubtitle: 'Hệ sinh thái trò chơi học tập đa ngôn ngữ của Sky First — vào là chơi, tạo một lần và triển khai theo hàng chục cách.',
    mainSiteUrl: 'https://skyfirst.io.vn', mainSiteLabel: 'Website chính — Sky First Network',
    announcement: 'Sky First Games • 40 Game Modes • English, 中文, 日本語, 한국어', maintenance: false,
    primaryCta: 'Chơi ngay', footerAbout: 'Sky First Games là sản phẩm trò chơi học tập thuộc hệ sinh thái Sky First Network.',
    seoTitle: 'Sky First Games', seoDescription: 'Hệ sinh thái trò chơi học tập đa ngôn ngữ của Sky First.', contactEmail: 'games@skyfirst.io.vn'
};
function StaticPage({ kind, config }) {
    const pg = config.customPages?.[kind];
    const fallback = kind === 'about' ? { title: 'Giới thiệu', intro: 'Sky First Games là một sản phẩm độc lập trong hệ sinh thái Sky First Network.', body: 'Thiết kế đa ngôn ngữ, game-first, không phải một cổng học liệu.' } : { title: 'Quyền riêng tư', intro: 'Người chơi có thể tham gia bằng mã/link mà không cần tài khoản.', body: 'Sky First Games áp dụng nguyên tắc tối thiểu dữ liệu.' };
    const data = pg || fallback;
    return _jsxs("main", { className: "page-shell narrow", children: [_jsxs("div", { className: "page-hero compact", children: [_jsx("span", { className: "eyebrow", children: "SKY FIRST GAMES" }), _jsx("h1", { children: data.title }), _jsx("p", { children: data.intro })] }), _jsx("div", { className: "panel prose-card", children: _jsx("p", { children: data.body }) })] });
}
export default function App() {
    const [route, setRoute] = React.useState(getRoute());
    const [account, setAccount] = React.useState(null);
    const [config, setConfig] = React.useState(fallbackConfig);
    React.useEffect(() => { const fn = () => setRoute(getRoute()); addEventListener('popstate', fn); return () => removeEventListener('popstate', fn); }, []);
    React.useEffect(() => { api.publicConfig().then(r => setConfig({ ...fallbackConfig, ...r.config })).catch(() => { }); if (authToken.get())
        api.me().then(r => setAccount(r.account)).catch(() => authToken.clear()); }, []);
    React.useEffect(() => { document.title = config.seoTitle || 'Sky First Games'; document.documentElement.style.setProperty('--blue', config.primaryColor || '#0ea5e9'); document.documentElement.style.setProperty('--navy', config.navyColor || '#07182f'); let meta = document.querySelector('meta[name=description]'); if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
    } meta.content = config.seoDescription || ''; }, [config]);
    const logout = async () => { try {
        await api.logout();
    }
    catch { } authToken.clear(); setAccount(null); window.history.pushState({}, '', '/'); setRoute(getRoute()); };
    let page;
    const p = route.path;
    if (p === '/explore')
        page = _jsx(ExplorePage, {});
    else if (p === '/quick-play')
        page = _jsx(QuickPlayPage, {});
    else if (p === '/join' || p.startsWith('/join/'))
        page = _jsx(JoinPage, {});
    else if (p === '/room')
        page = _jsx(RoomPage, {});
    else if (p.startsWith('/host/'))
        page = _jsx(HostPage, { token: decodeURIComponent(p.slice('/host/'.length)) });
    else if (p === '/login')
        page = _jsx(LoginPage, { onAuth: setAccount });
    else if (p === '/creator')
        page = account ? _jsx(CreatorPage, { account: account }) : _jsx(LoginPage, { onAuth: setAccount });
    else if (p === '/admin')
        page = account?.isAdmin ? _jsx(AdminPage, { account: account }) : _jsx(LoginPage, { onAuth: setAccount });
    else if (p === '/about')
        page = _jsx(StaticPage, { kind: "about", config: config });
    else if (p === '/privacy')
        page = _jsx(StaticPage, { kind: "privacy", config: config });
    else if (p === '/play') {
        const mode = gameModes.find(m => m.id === route.query.get('mode')) || gameModes[0];
        const set = seedQuestionSets.find(s => s.id === route.query.get('set')) || seedQuestionSets[0];
        page = _jsx(GamePlayer, { set: set, mode: mode });
    }
    else
        page = _jsx(HomePage, { config: config });
    const immersive = p === '/play' || p === '/room' || p.startsWith('/host/') || p === '/login' || p === '/creator' || p === '/admin';
    if (config.maintenance && !['/login', '/admin', '/creator'].includes(p)) {
        page = _jsx("main", { className: "auth-page", children: _jsxs("div", { className: "auth-card", children: [_jsxs("div", { className: "auth-brand", children: [_jsx("span", { children: "\uD83D\uDEE0\uFE0F" }), _jsxs("div", { children: [_jsx("strong", { children: "Sky First Games" }), _jsx("small", { children: "Maintenance" })] })] }), _jsx("h1", { children: "H\u1EC7 th\u1ED1ng \u0111ang b\u1EA3o tr\u00EC" }), _jsx("p", { children: "Sky First Games \u0111ang t\u1EA1m \u0111\u00F3ng \u0111\u1EC3 c\u1EADp nh\u1EADt. Creator/Admin v\u1EABn c\u00F3 th\u1EC3 \u0111\u0103ng nh\u1EADp \u0111\u1EC3 qu\u1EA3n tr\u1ECB." }), _jsx("button", { className: "secondary-button full", onClick: () => { history.pushState({}, '', '/login'); dispatchEvent(new PopStateEvent('popstate')); }, children: "Creator / Admin" })] }) });
    }
    return _jsxs("div", { className: "app-shell", children: [!immersive && _jsx(NavBar, { account: account, onLogout: logout, config: config }), " ", page, " ", !immersive && _jsx(Footer, { config: config })] });
}
