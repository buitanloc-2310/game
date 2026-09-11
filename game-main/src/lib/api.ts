import type { Account, GameMode, QuestionSet, SiteConfig } from '../types';

const TOKEN_KEY = 'sfg_token';

export const authToken = {
  get: () => localStorage.getItem(TOKEN_KEY),
  set: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  clear: () => localStorage.removeItem(TOKEN_KEY)
};

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = authToken.get();
  const headers = new Headers(init.headers || {});
  if (!headers.has('Content-Type') && init.body) headers.set('Content-Type', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);
  const res = await fetch(path, { ...init, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
  return data as T;
}

export const api = {
  publicConfig: () => request<{ config: SiteConfig }>('/api/public/config'),
  publicQuestionSets: () => request<{ sets: QuestionSet[] }>('/api/public/question-sets'),
  publicGameModes: () => request<{ modes: GameMode[] }>('/api/public/game-modes'),
  publicGame: (code: string) => request<{ game: any; set: QuestionSet }>(`/api/public/games/${encodeURIComponent(code)}`),
  publicVolunteerGallery: () => request<{ items:any[] }>('/api/public/volunteer-gallery'),

  submitSupport: (payload: unknown) => request<{ ticketCode: string }>('/api/public/support', { method: 'POST', body: JSON.stringify(payload) }),
  volunteerUpload: async (token: string, pin: string, file: File) => {
    const res = await fetch(`/api/volunteer/upload?token=${encodeURIComponent(token)}&pin=${encodeURIComponent(pin)}&name=${encodeURIComponent(file.name)}`, { method: 'POST', body: file, headers: { 'Content-Type': file.type || 'application/octet-stream' } });
    const data = await res.json(); if (!res.ok) throw new Error(data.error || 'Upload failed'); return data as { url:string; key:string };
  },
  volunteerReport: (payload: unknown) => request<{ ok:boolean }>('/api/volunteer/report', { method: 'POST', body: JSON.stringify(payload) }),
  hostPass: (token: string, pin='') => request<{ pass: any; game: any; set: QuestionSet }>(`/api/host/pass/${encodeURIComponent(token)}?pin=${encodeURIComponent(pin)}`),
  startHostSession: (token: string, pin='') => request<{ session: any }>(`/api/host/pass/${encodeURIComponent(token)}/sessions?pin=${encodeURIComponent(pin)}`, { method: 'POST' }),
  login: (email: string, password: string) => request<{ token: string; account: Account }>('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
  register: (email: string, password: string, displayName: string) => request<{ token: string; account: Account }>('/api/auth/register', { method: 'POST', body: JSON.stringify({ email, password, displayName }) }),
  bootstrap: (setupKey: string, email: string, password: string, displayName: string) => request<{ token: string; account: Account }>('/api/auth/bootstrap', { method: 'POST', body: JSON.stringify({ setupKey, email, password, displayName }) }),
  authStatus: () => request<{ initialized: boolean }>('/api/auth/status'),
  me: () => request<{ account: Account }>('/api/auth/me'),
  logout: () => request<{ ok: boolean }>('/api/auth/logout', { method: 'POST' }),
  creatorSets: () => request<{ sets: QuestionSet[] }>('/api/creator/question-sets'),
  saveSet: (set: Partial<QuestionSet>) => request<{ set: QuestionSet }>('/api/creator/question-sets', { method: 'POST', body: JSON.stringify(set) }),
  deleteSet: (id: string) => request<{ ok: boolean }>(`/api/creator/question-sets/${encodeURIComponent(id)}`, { method: 'DELETE' }),
  createGame: (payload: unknown) => request<any>('/api/creator/games', { method: 'POST', body: JSON.stringify(payload) }),
  listGames: () => request<{ games: any[] }>('/api/creator/games'),
  listPasses: () => request<{ passes: any[] }>('/api/creator/access-passes'),
  createPass: (payload: unknown) => request<{ pass: any; pin: string }>('/api/creator/access-passes', { method: 'POST', body: JSON.stringify(payload) }),
  revokePass: (id: string) => request<{ ok: boolean }>(`/api/creator/access-passes/${encodeURIComponent(id)}`, { method: 'DELETE' }),
  creatorItems: (type='') => request<{ items:any[] }>(`/api/creator/items${type?`?type=${encodeURIComponent(type)}`:''}`),
  saveCreatorItem: (payload:any) => request<{ item:any }>('/api/creator/items', { method:'POST', body:JSON.stringify(payload) }),
  updateCreatorItem: (id:string,payload:any) => request<{ item:any }>(`/api/creator/items/${encodeURIComponent(id)}`, { method:'PUT', body:JSON.stringify(payload) }),
  deleteCreatorItem: (id:string) => request<{ ok:boolean }>(`/api/creator/items/${encodeURIComponent(id)}`, { method:'DELETE' }),
  creatorPreferences: () => request<{ preferences:any }>('/api/creator/preferences'),
  saveCreatorPreferences: (value:any) => request<{ ok:boolean }>('/api/creator/preferences', { method:'PUT', body:JSON.stringify({value}) }),
  creatorActivity: () => request<{ items:any[] }>('/api/creator/activity'),
  creatorSessions: () => request<{ sessions:any[] }>('/api/creator/sessions'),
  updateGame: (id:string,payload:any) => request<{ game:any }>(`/api/creator/games/${encodeURIComponent(id)}`, { method:'PUT', body:JSON.stringify(payload) }),
  deleteGame: (id:string) => request<{ ok:boolean }>(`/api/creator/games/${encodeURIComponent(id)}`, { method:'DELETE' }),
  creatorMedia: () => request<{ items:any[] }>('/api/creator/media'),
  adminSettings: () => request<{ settings: Record<string, any> }>('/api/admin/settings'),
  saveAdminSetting: (key: string, value: unknown) => request<{ ok: boolean }>(`/api/admin/settings/${encodeURIComponent(key)}`, { method: 'PUT', body: JSON.stringify({ value }) }),
  adminModes: () => request<{ modes: any[] }>('/api/admin/game-modes'),
  updateMode: (id: string, patch: unknown) => request<{ ok: boolean }>(`/api/admin/game-modes/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(patch) }),
  adminAccounts: () => request<{ accounts: any[] }>('/api/admin/accounts'),
  adminSessions: () => request<{ sessions: any[] }>('/api/admin/sessions'),
  adminQuestionSets: () => request<{ sets:any[] }>('/api/admin/question-sets'),
  updateAdminQuestionSet: (id:string,payload:any) => request<{ok:boolean}>(`/api/admin/question-sets/${encodeURIComponent(id)}`, {method:'PUT',body:JSON.stringify(payload)}),
  deleteAdminQuestionSet: (id:string) => request<{ok:boolean}>(`/api/admin/question-sets/${encodeURIComponent(id)}`, {method:'DELETE'}),
  terminateAdminSession: (id:string) => request<{ok:boolean}>(`/api/admin/sessions/${encodeURIComponent(id)}/terminate`, {method:'POST'}),
  revokeAdminPass: (id:string) => request<{ok:boolean}>(`/api/admin/access-passes/${encodeURIComponent(id)}/revoke`, {method:'POST'}),

  adminPasses: () => request<{ passes:any[] }>('/api/admin/access-passes'),
  adminMedia: () => request<{ items:any[] }>('/api/admin/media'),
  deleteAdminMedia: (key:string) => request<{ ok:boolean }>(`/api/admin/media?key=${encodeURIComponent(key)}`, { method:'DELETE' }),
  adminSupport: () => request<{ requests:any[] }>('/api/admin/support'),
  adminVolunteerMedia: () => request<{ items:any[] }>('/api/admin/volunteer-media'),
  updateVolunteerMedia: (id:string,payload:unknown) => request<{ok:boolean}>(`/api/admin/volunteer-media/${encodeURIComponent(id)}`, {method:'PUT',body:JSON.stringify(payload)}),
  updateSupport: (id:string, payload:unknown) => request<{ok:boolean}>(`/api/admin/support/${encodeURIComponent(id)}`, { method:'PUT', body:JSON.stringify(payload) }),
  createAccount: (payload: unknown) => request<{ account: any }>('/api/admin/accounts', { method: 'POST', body: JSON.stringify(payload) }),
  updateAccount: (id: string, payload: unknown) => request<{ ok: boolean }>(`/api/admin/accounts/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(payload) }),
  uploadMedia: async (file: File) => {
    const token = authToken.get();
    const res = await fetch(`/api/media?name=${encodeURIComponent(file.name)}`, { method: 'POST', body: file, headers: token ? { Authorization: `Bearer ${token}`, 'Content-Type': file.type || 'application/octet-stream' } : undefined });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Upload failed');
    return data as { url: string; key: string };
  }
};
