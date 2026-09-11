export type LanguageCode = string;

export type QuestionType =
  | 'multiple_choice' | 'multiple_select' | 'true_false' | 'typed' | 'fill_blank'
  | 'matching' | 'ordering' | 'sentence_builder' | 'image_choice' | 'audio_choice'
  | 'listening_input' | 'dictation' | 'cloze' | 'error_correction' | 'transformation'
  | 'synonym_antonym' | 'word_formation' | 'translation' | 'dialogue' | 'scenario_decision'
  | 'reading_group' | 'roleplay';

export type GameFamily = 'speed' | 'language' | 'listening' | 'arcade' | 'classroom' | 'strategy' | 'scenario';
export type SessionMode = 'solo' | 'live' | 'assignment' | 'one_screen' | 'host_paced' | 'player_paced';

export interface LanguageDefinition {
  code: LanguageCode; name: string; nativeName: string; icon: string;
  status: 'active' | 'beta' | 'coming_soon' | 'disabled'; direction: 'ltr' | 'rtl';
  accent?: string; tts?: string; scripts?: string[]; frameworks?: string[];
  specialties?: string[];
}

export interface GameMode {
  id: string; name: string; family: GameFamily; icon: string; description: string;
  supportedQuestionTypes: QuestionType[]; sessionModes: SessionMode[];
  minPlayers: number; maxPlayers: number; durationMinutes: [number, number];
  languages: 'universal' | LanguageCode[]; status: 'active' | 'beta' | 'seasonal' | 'disabled';
  featured?: boolean; color: string;
  mechanic: 'quiz' | 'race' | 'match' | 'builder' | 'choice' | 'board' | 'team' | 'survival' | 'tower' | 'economy' | 'memory' | 'scenario';
  version?: string; tags?: string[];
}

export interface Question {
  id: string; type: QuestionType; prompt: string; options?: string[]; answers: string[];
  pairs?: { left: string; right: string }[]; explanation?: string; hint?: string;
  mediaUrl?: string; mediaType?: 'audio' | 'image' | 'video'; transcript?: string;
  ttsText?: string; ttsLang?: string; maxPlays?: number; playbackRate?: number;
  passage?: string; context?: string; difficulty?: 1 | 2 | 3 | 4 | 5; tags?: string[];
}

export interface QuestionSet {
  id: string; title: string; language: LanguageCode; level: string; topic: string;
  context?: string; skill?: string; description: string; isOfficial: boolean;
  visibility: 'public' | 'link' | 'password' | 'private'; questions: Question[]; updatedAt: string;
  status?: 'draft' | 'review' | 'verified' | 'published' | 'archived';
}

export interface SiteConfig {
  brandName: string; shortName: string; tagline: string; heroTitle: string; heroSubtitle: string;
  mainSiteUrl: string; mainSiteLabel: string; announcement: string; maintenance: boolean;
  primaryCta: string; footerAbout: string; seoTitle: string; seoDescription: string; contactEmail: string;
  navigationItems?: { label: string; url: string }[]; footerLinks?: { label: string; url: string }[];
  homepageSections?: string[]; primaryColor?: string; navyColor?: string; borderRadius?: string; logoUrl?: string;
  footerPortals?: {name:string;domain:string;url?:string}[]; footerCopyright?: string; footerEcosystemLine?: string; languageItems?: any[];
  customPages?: Record<string, { title: string; intro: string; body: string }>;
}

export interface Account { id: string; email: string; displayName: string; isAdmin: boolean; status: 'active' | 'suspended'; }
