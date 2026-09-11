export type LanguageCode = 'en' | 'zh' | 'ja' | 'ko' | 'fr' | 'de' | 'es' | 'vi' | string;

export type QuestionType =
  | 'multiple_choice'
  | 'multiple_select'
  | 'true_false'
  | 'typed'
  | 'fill_blank'
  | 'matching'
  | 'ordering'
  | 'sentence_builder'
  | 'image_choice'
  | 'audio_choice'
  | 'listening_input'
  | 'spelling';

export type GameFamily = 'speed' | 'language' | 'listening' | 'arcade' | 'classroom';
export type SessionMode = 'solo' | 'live' | 'assignment' | 'one_screen';

export interface LanguageDefinition {
  code: LanguageCode;
  name: string;
  nativeName: string;
  icon: string;
  status: 'active' | 'beta' | 'coming_soon' | 'disabled';
  direction: 'ltr' | 'rtl';
  accent?: string;
}

export interface GameMode {
  id: string;
  name: string;
  family: GameFamily;
  icon: string;
  description: string;
  supportedQuestionTypes: QuestionType[];
  sessionModes: SessionMode[];
  minPlayers: number;
  maxPlayers: number;
  durationMinutes: [number, number];
  languages: 'universal' | LanguageCode[];
  status: 'active' | 'beta' | 'seasonal' | 'disabled';
  featured?: boolean;
  color: string;
  mechanic: 'quiz' | 'race' | 'match' | 'builder' | 'choice' | 'board' | 'team' | 'survival';
}

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  options?: string[];
  answers: string[];
  pairs?: { left: string; right: string }[];
  explanation?: string;
  hint?: string;
  mediaUrl?: string;
  difficulty?: 1 | 2 | 3 | 4 | 5;
  tags?: string[];
}

export interface QuestionSet {
  id: string;
  title: string;
  language: LanguageCode;
  level: string;
  topic: string;
  description: string;
  isOfficial: boolean;
  visibility: 'public' | 'link' | 'password' | 'private';
  questions: Question[];
  updatedAt: string;
}

export interface SiteConfig {
  brandName: string;
  shortName: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  mainSiteUrl: string;
  mainSiteLabel: string;
  announcement: string;
  maintenance: boolean;
  primaryCta: string;
  footerAbout: string;
  seoTitle: string;
  seoDescription: string;
  contactEmail: string;
  navigationItems?: { label: string; url: string }[];
  footerLinks?: { label: string; url: string }[];
  homepageSections?: string[];
  primaryColor?: string;
  navyColor?: string;
  borderRadius?: string;
  customPages?: Record<string, { title: string; intro: string; body: string }>;
}

export interface Account {
  id: string;
  email: string;
  displayName: string;
  isAdmin: boolean;
  status: 'active' | 'suspended';
}
