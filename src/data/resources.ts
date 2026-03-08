import { reverseArray } from '@/helpers/array';

export type Format =
  | 'read'
  | 'watch'
  | 'listen'
  | 'browse'
  | 'use'
  | 'build'
  | 'learn'
  | 'join'
  | 'follow';

export const formats: Array<Format> = [
  'read',
  'watch',
  'listen',
  'browse',
  'use',
  'build',
  'learn',
  'join',
  'follow',
];

export const emojis: Record<Format, string> = {
  browse: '🔎',
  build: '🛠️',
  follow: '👀',
  join: '🌍',
  learn: '🎓',
  listen: '🎧',
  read: '📖',
  use: '💻',
  watch: '📽️',
};

export const labels: Record<Format, string> = {
  browse: 'Browse',
  build: 'Build',
  follow: 'Follow',
  join: 'Join',
  learn: 'Learn',
  listen: 'Listen',
  read: 'Read',
  use: 'Use',
  watch: 'Watch',
};

export interface Resource {
  date: string;
  description?: string;
  format: Format;
  id: string;
  title: string;
  url: string;
}

export type Resources = Array<Resource>;

/**
 * OLD to NEW
 *
 * Date Format: YYYY-MM-DD
 */

const _resources: Resources = [
  {
    date: '2026-03-04',
    description: 'Learn what Design Engineers are and what they do at Vercel.',
    format: 'read',
    id: '',
    title: 'Design Engineering at Vercel',
    url: 'https://vercel.com/blog/design-engineering-at-vercel',
  },
  {
    date: '2026-03-05',
    description: 'Why taste matters and how to develop it.',
    format: 'read',
    id: '',
    title: 'Developing Taste',
    url: 'https://emilkowal.ski/ui/developing-taste',
  },
  {
    date: '2026-03-05',
    description: 'A guide to the foundational principles of animation.',
    format: 'read',
    id: '',
    title: '12 Principles of Animation',
    url: 'https://www.raphaelsalaja.com/library/12-principles-of-animation',
  },
  {
    date: '2026-03-06',
    description: 'Animations on the Web',
    format: 'learn',
    id: '',
    title: 'animations.dev',
    url: 'https://animations.dev',
  },
  {
    date: '2026-03-06',
    description: 'Design engineer working at Linear.',
    format: 'follow',
    id: '',
    title: 'Emil Kowalski',
    url: 'https://emilkowal.ski/',
  },
  {
    date: '2026-03-06',
    description: 'An opinionated toast component for React.',
    format: 'build',
    id: '',
    title: 'Sonner',
    url: 'https://sonner.emilkowal.ski/',
  },
  {
    date: '2026-03-07',
    description: 'Staff Design Engineer at Vercel',
    format: 'follow',
    id: '',
    title: 'Rauno Freiberg',
    url: 'https://rauno.me/',
  },
  {
    date: '2026-03-07',
    description:
      'Practical guide to the jobs and skills of the design engineer in tech',
    format: 'read',
    id: '',
    title: 'Design Engineering 101',
    url: 'https://www.designdisciplin.com/p/design-engineering-101',
  },
  {
    date: '2026-03-07',
    description: 'Haptic feedback for the mobile web.',
    format: 'build',
    id: '',
    title: 'WebHaptics',
    url: 'https://haptics.lochie.me',
  },
  {
    date: '2026-03-08',
    description: 'Design Engineering Community',
    format: 'join',
    id: '',
    title: 'Design Engineering Club',
    url: 'https://designeng.club/',
  },
  {
    date: '2026-03-08',
    description:
      'Finding my dream role blending code, design, and product thinking',
    format: 'read',
    id: '',
    title: 'Design Engineering: A State of Mind',
    url: 'https://blog.designeng.club/p/design-engineering-a-state-of-mind',
  },
  {
    date: '2026-03-08',
    description: '700+ curated UI sound effects for modern web apps.',
    format: 'build',
    id: '',
    title: 'soundcn',
    url: 'https://soundcn.xyz/',
  },
  {
    date: '2026-03-08',
    description:
      'Find a design engineering job in a next generation software company.',
    format: 'browse',
    id: '',
    title: 'Design Engineer Jobs',
    url: 'https://designengineer.io/',
  },
];

export const resources = reverseArray(_resources);
