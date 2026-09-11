export function getRoute() {
    return { path: window.location.pathname || '/', query: new URLSearchParams(window.location.search) };
}
export function navigate(path) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
