import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { KeyRound, LockKeyhole, Mail, ShieldCheck } from 'lucide-react';
import { api, authToken } from '../lib/api.js';
import { navigate } from '../lib/router.js';
export function LoginPage({ onAuth }) {
    const [initialized, setInitialized] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [displayName, setDisplayName] = React.useState('');
    const [setupKey, setSetupKey] = React.useState('');
    React.useEffect(() => { api.authStatus().then(x => setInitialized(x.initialized)).catch(() => setInitialized(true)); }, []);
    const submit = async () => { setLoading(true); setError(''); try {
        const r = initialized === false ? await api.bootstrap(setupKey, email, password, displayName) : await api.login(email, password);
        authToken.set(r.token);
        onAuth(r.account);
        navigate(r.account.isAdmin ? '/admin' : '/creator');
    }
    catch (e) {
        setError(e.message || 'Không thể đăng nhập');
    }
    finally {
        setLoading(false);
    } };
    return _jsx("main", { className: "auth-page", children: _jsxs("section", { className: "auth-card", children: [_jsxs("div", { className: "auth-brand", children: [_jsx("span", { children: _jsx(ShieldCheck, {}) }), _jsxs("div", { children: [_jsx("strong", { children: "Sky First Games" }), _jsx("small", { children: "Creator & Admin Access" })] })] }), _jsx("h1", { children: initialized === false ? 'Khởi tạo hệ thống' : 'Đăng nhập Creator' }), _jsx("p", { children: initialized === false ? 'Tạo tài khoản quản trị đầu tiên. Setup key lấy từ biến môi trường ADMIN_SETUP_KEY.' : 'Khu vực dành cho tài khoản tạo nội dung và quản trị hệ thống.' }), initialized === false && _jsxs("label", { children: ["T\u00EAn hi\u1EC3n th\u1ECB", _jsx("input", { value: displayName, onChange: e => setDisplayName(e.target.value), placeholder: "Sky First Admin" })] }), _jsxs("label", { children: ["Email", _jsxs("div", { className: "input-icon", children: [_jsx(Mail, {}), _jsx("input", { type: "email", value: email, onChange: e => setEmail(e.target.value), placeholder: "admin@skyfirst.io.vn" })] })] }), _jsxs("label", { children: ["M\u1EADt kh\u1EA9u", _jsxs("div", { className: "input-icon", children: [_jsx(LockKeyhole, {}), _jsx("input", { type: "password", value: password, onChange: e => setPassword(e.target.value), placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" })] })] }), initialized === false && _jsxs("label", { children: ["Setup key", _jsxs("div", { className: "input-icon", children: [_jsx(KeyRound, {}), _jsx("input", { type: "password", value: setupKey, onChange: e => setSetupKey(e.target.value), placeholder: "ADMIN_SETUP_KEY" })] })] }), error && _jsx("div", { className: "error-box", children: error }), _jsx("button", { className: "primary-button big full", onClick: submit, disabled: loading || !email || !password || (initialized === false && (!displayName || !setupKey)), children: loading ? 'Đang xử lý…' : initialized === false ? 'Khởi tạo & đăng nhập' : 'Đăng nhập' }), _jsx("button", { className: "text-button center", onClick: () => navigate('/'), children: "\u2190 Quay v\u1EC1 trang ch\u01A1i" })] }) });
}
