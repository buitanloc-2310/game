const TOKEN_KEY = 'sfg_token';
export const authToken = {
    get: () => localStorage.getItem(TOKEN_KEY),
    set: (token) => localStorage.setItem(TOKEN_KEY, token),
    clear: () => localStorage.removeItem(TOKEN_KEY)
};
async function request(path, init = {}) {
    const token = authToken.get();
    const headers = new Headers(init.headers || {});
    if (!headers.has('Content-Type') && init.body)
        headers.set('Content-Type', 'application/json');
    if (token)
        headers.set('Authorization', `Bearer ${token}`);
    const res = await fetch(path, { ...init, headers });
    const data = await res.json().catch(() => ({}));
    if (!res.ok)
        throw new Error(data?.error || `HTTP ${res.status}`);
    return data;
}
export const api = {
    publicConfig: () => request('/api/public/config'),
    publicQuestionSets: () => request('/api/public/question-sets'),
    publicGameModes: () => request('/api/public/game-modes'),
    publicGame: (code) => request(`/api/public/games/${encodeURIComponent(code)}`),
    hostPass: (token) => request(`/api/host/pass/${encodeURIComponent(token)}`),
    startHostSession: (token) => request(`/api/host/pass/${encodeURIComponent(token)}/sessions`, { method: 'POST' }),
    login: (email, password) => request('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
    bootstrap: (setupKey, email, password, displayName) => request('/api/auth/bootstrap', { method: 'POST', body: JSON.stringify({ setupKey, email, password, displayName }) }),
    authStatus: () => request('/api/auth/status'),
    me: () => request('/api/auth/me'),
    logout: () => request('/api/auth/logout', { method: 'POST' }),
    creatorSets: () => request('/api/creator/question-sets'),
    saveSet: (set) => request('/api/creator/question-sets', { method: 'POST', body: JSON.stringify(set) }),
    deleteSet: (id) => request(`/api/creator/question-sets/${encodeURIComponent(id)}`, { method: 'DELETE' }),
    createGame: (payload) => request('/api/creator/games', { method: 'POST', body: JSON.stringify(payload) }),
    listGames: () => request('/api/creator/games'),
    listPasses: () => request('/api/creator/access-passes'),
    createPass: (payload) => request('/api/creator/access-passes', { method: 'POST', body: JSON.stringify(payload) }),
    revokePass: (id) => request(`/api/creator/access-passes/${encodeURIComponent(id)}`, { method: 'DELETE' }),
    adminSettings: () => request('/api/admin/settings'),
    saveAdminSetting: (key, value) => request(`/api/admin/settings/${encodeURIComponent(key)}`, { method: 'PUT', body: JSON.stringify({ value }) }),
    adminModes: () => request('/api/admin/game-modes'),
    updateMode: (id, patch) => request(`/api/admin/game-modes/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(patch) }),
    adminAccounts: () => request('/api/admin/accounts'),
    adminSessions: () => request('/api/admin/sessions'),
    createAccount: (payload) => request('/api/admin/accounts', { method: 'POST', body: JSON.stringify(payload) }),
    updateAccount: (id, payload) => request(`/api/admin/accounts/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(payload) }),
    uploadMedia: async (file) => {
        const token = authToken.get();
        const res = await fetch(`/api/admin/media?name=${encodeURIComponent(file.name)}`, { method: 'POST', body: file, headers: token ? { Authorization: `Bearer ${token}`, 'Content-Type': file.type || 'application/octet-stream' } : undefined });
        const data = await res.json();
        if (!res.ok)
            throw new Error(data.error || 'Upload failed');
        return data;
    }
};
