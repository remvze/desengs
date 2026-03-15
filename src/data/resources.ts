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

export const colors: Record<Format, string> = {
  browse: '#ef4444',
  build: '#f97316',
  follow: '#a3e635',
  join: '#4ade80',
  learn: '#2dd4bf',
  listen: '#22d3ee',
  read: '#8b5cf6',
  use: '#6366f1',
  watch: '#f472b6',
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
  {
    date: '2026-03-09',
    description:
      'A non-exhaustive list of details that make a good web interface.',
    format: 'read',
    id: '',
    title: 'Web Interface Guidelines',
    url: 'https://interfaces.rauno.me/',
  },
  {
    date: '2026-03-09',
    description: 'Fast, unstyled command menu React component.',
    format: 'build',
    id: '',
    title: '⌘K',
    url: 'https://github.com/dip/cmdk',
  },
  {
    date: '2026-03-09',
    description: 'The documented collection of UI components.',
    format: 'browse',
    id: '',
    title: 'UI Playbook',
    url: 'https://uiplaybook.dev/',
  },
  {
    date: '2026-03-09',
    description:
      'An interactive reference manual for interaction-curious designers.',
    format: 'learn',
    id: '',
    title: 'Devouring Details',
    url: 'https://devouringdetails.com/',
  },
  {
    date: '2026-03-09',
    description: 'What makes Family, Family.',
    format: 'read',
    id: '',
    title: 'Family Values',
    url: 'https://benji.org/family-values',
  },
  {
    date: '2026-03-09',
    description: 'Real-time animated line chart for React.',
    format: 'build',
    id: '',
    title: 'Liveline',
    url: 'https://github.com/benjitaylor/liveline',
  },
  {
    date: '2026-03-10',
    description:
      'An interactive mini-course on creating SVG animations by Nanda Syahrasyad.',
    format: 'learn',
    id: '',
    title: 'Interactive SVG Animations',
    url: 'https://www.svg.guide/',
  },
  {
    date: '2026-03-10',
    description: 'What makes great interactions feel right?',
    format: 'read',
    id: '',
    title: 'Invisible Details of Interaction Design',
    url: 'https://rauno.me/craft/interaction-design',
  },
  {
    date: '2026-03-10',
    description:
      'A working library for those committed to designing with uncommon care.',
    format: 'learn',
    id: '',
    title: 'Interface Craft',
    url: 'https://www.interfacecraft.dev/',
  },
  {
    date: '2026-03-10',
    description:
      'An up-to-date repository of interface components based on examples from the world of design systems, designed to be a reference for anyone building user interfaces.',
    format: 'browse',
    id: '',
    title: 'The Component Gallery',
    url: 'https://component.gallery/',
  },
  {
    date: '2026-03-11',
    description:
      'Convert, generate and explore OKLCH colors – a powerful tool to build unique and uniform color palettes.',
    format: 'use',
    id: '',
    title: 'OKLCH.fyi',
    url: 'https://oklch.fyi/',
  },
  {
    date: '2026-03-14',
    description:
      'A living manual for better interfaces. Learn design principles, motion, typography, and more.',
    format: 'browse',
    id: '',
    title: 'userinterface.wiki',
    url: 'https://userinterface.wiki/',
  },
  {
    date: '2026-03-14',
    description: 'A list of useful tools for web-focused design engineers.',
    format: 'browse',
    id: '',
    title: 'Design Engineer Tools',
    url: 'https://designengineer.tools/',
  },
  {
    date: '2026-03-15',
    description:
      'Learn what Design Engineers do, why they matter to modern tech companies, and how they differ from vibe coders.',
    format: 'read',
    id: '',
    title: 'Design Engineering',
    url: 'https://www.designengineer.xyz/design-engineering',
  },
  {
    date: '2026-03-15',
    description:
      'Thoughts about design, code, technology and everything in between.',
    format: 'read',
    id: '',
    title: 'Becoming a Design Engineer',
    url: 'https://marcel.io/posts/becoming-a-design-engineer',
  },
  {
    date: '2026-03-15',
    description: 'Links and observations on design engineering',
    format: 'browse',
    id: '',
    title: 'Design Engineering',
    url: 'https://www.floguo.com/notes/design-engineering',
  },
  {
    date: '2026-03-15',
    description: 'Founding design engineer at Paradigm',
    format: 'follow',
    id: '',
    title: 'floguo',
    url: 'https://www.floguo.com/',
  },
];

export const resources = reverseArray(_resources);
