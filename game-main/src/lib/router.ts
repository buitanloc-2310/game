export type RouteState = { path: string; query: URLSearchParams };

export function getRoute(): RouteState {
  return { path: window.location.pathname || '/', query: new URLSearchParams(window.location.search) };
}

export function navigate(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
