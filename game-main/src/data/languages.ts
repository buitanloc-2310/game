import type { LanguageDefinition } from '../types';

export const languages: LanguageDefinition[] = [
  { code: 'en', name: 'English', nativeName: 'English', icon: '🇬🇧', status: 'active', direction: 'ltr', accent: '#4f7cff' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', icon: '🇨🇳', status: 'active', direction: 'ltr', accent: '#ef4444' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', icon: '🇯🇵', status: 'beta', direction: 'ltr', accent: '#f97316' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', icon: '🇰🇷', status: 'beta', direction: 'ltr', accent: '#8b5cf6' },
  { code: 'fr', name: 'French', nativeName: 'Français', icon: '🇫🇷', status: 'coming_soon', direction: 'ltr', accent: '#2563eb' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', icon: '🇩🇪', status: 'coming_soon', direction: 'ltr', accent: '#eab308' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', icon: '🇪🇸', status: 'coming_soon', direction: 'ltr', accent: '#f59e0b' }
];
