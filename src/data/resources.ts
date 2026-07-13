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
  | 'follow'
  | 'apply';

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
  'apply',
];

export const emojis: Record<Format, string> = {
  apply: '💰',
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
  apply: '#fbbf24',
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
  apply: 'Apply',
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
  {
    date: '2026-03-15',
    description: 'A curated collection of easing graphs',
    format: 'use',
    id: '',
    title: 'Easing Graphs',
    url: 'https://www.easing.dev/',
  },
  {
    date: '2026-03-16',
    description:
      'My definition of design engineering after building the practice at DoorDash.',
    format: 'read',
    id: '',
    title: 'The Attributes of a Design Engineer',
    url: 'https://www.ryngonzalez.com/blog/the-attributes-of-a-design-engineer',
  },
  {
    date: '2026-03-16',
    description: 'Fluid text transitions powered by Motion',
    format: 'build',
    id: '',
    title: 'Calligraph',
    url: 'https://calligraph.raphaelsalaja.com/',
  },
  {
    date: '2026-03-16',
    description:
      'A collection of details that make your interfaces feel better.',
    format: 'read',
    id: '',
    title: 'Details That Make Interfaces Feel Better',
    url: 'https://jakub.kr/writing/details-that-make-interfaces-feel-better',
  },
  {
    date: '2026-03-17',
    description:
      'A floating control panel for React: sliders, toggles, color pickers, spring editors, and action buttons wired directly to your UI values.',
    format: 'build',
    id: '',
    title: 'DialKit',
    url: 'https://joshpuckett.me/dialkit',
  },
  {
    date: '2026-03-17',
    description:
      '1 skill, 20 commands, and curated anti-patterns for impeccable frontend design. Works with Cursor, Claude Code, Gemini CLI, and Codex CLI.',
    format: 'use',
    id: '',
    title: 'Impeccable',
    url: 'https://impeccable.style/',
  },
  {
    date: '2026-03-17',
    description:
      'Laws of UX is a collection of best practices that designers can consider when building user interfaces.',
    format: 'browse',
    id: '',
    title: 'Laws of UX',
    url: 'https://lawsofux.com/',
  },
  {
    date: '2026-03-17',
    description:
      'An open-source checklist to help you plan, build and grow your design system.',
    format: 'use',
    id: '',
    title: 'Design System Checklist',
    url: 'https://www.designsystemchecklist.com/',
  },
  {
    date: '2026-03-18',
    description:
      'Ready to use, fancy React components to make the web fun again. Free & Open Source.',
    format: 'build',
    id: '',
    title: 'Fancy Components',
    url: 'https://www.fancycomponents.dev/',
  },
  {
    date: '2026-03-18',
    description:
      'A curated collection of design principles used as decision-making frameworks. Practical examples and guidance for teams building products.',
    format: 'browse',
    id: '',
    title: 'Design Principles',
    url: 'https://principles.design/',
  },
  {
    date: '2026-03-21',
    description:
      'Automated design reviews for AI-generated code. Catches accessibility issues and visual bugs in React, Vue, Svelte, and more.',
    format: 'use',
    id: '',
    title: 'rams',
    url: 'https://www.rams.ai/',
  },
  {
    date: '2026-03-24',
    description:
      'Collecting people I know who work at the intersection of design and engineering, in an attempt to figure out what a design engineer is',
    format: 'browse',
    id: '',
    title: 'A Collection of Design Engineers',
    url: 'https://maggieappleton.com/design-engineers',
  },
  {
    date: '2026-03-24',
    description: 'A set of skills to polish interfaces built by agents.',
    format: 'use',
    id: '',
    title: 'UI Skills',
    url: 'https://www.ui-skills.com/',
  },
  {
    date: '2026-03-27',
    description:
      'A playground for creating box shadows for web and React Native.',
    format: 'use',
    id: '',
    title: 'shadowLab',
    url: 'https://shadowlab.mocarski.design/',
  },
  {
    date: '2026-04-03',
    description: 'Dependency-free animated text component.',
    format: 'build',
    id: '',
    title: 'Torph',
    url: 'https://torph.lochie.me/',
  },
  {
    date: '2026-04-05',
    description: 'How I use AI as a design engineer on a daily basis.',
    format: 'read',
    id: '',
    title: 'Using AI as a Design Engineer',
    url: 'https://jakub.kr/work/using-ai-as-a-design-engineer',
  },
  {
    date: '2026-04-16',
    description: 'The Digital Library for Designers and Engineers.',
    format: 'browse',
    id: '',
    title: 'ui.land',
    url: 'https://ui.land/',
  },
  {
    date: '2026-04-27',
    description:
      'Two years of UI experiments. 159+ components built on coss-ui, all on the shadcn registry.',
    format: 'build',
    id: '',
    title: 'devl.dev',
    url: 'https://devl.dev/',
  },
  {
    date: '2026-05-02',
    description:
      'Collection of the most essential transitions for web apps that you can just copy and paste into any project.',
    format: 'browse',
    id: '',
    title: 'Transitions.dev',
    url: 'https://transitions.dev/',
  },
  {
    date: '2026-05-04',
    description:
      'Capture screenshots, video, voice notes, and annotations from users as in-app feedback. One React component, one server helper. Routes to Slack, Linear, GitHub, email, or webhooks. MIT licensed.',
    format: 'build',
    id: '',
    title: 'Remediate',
    url: 'https://www.remediate.ski/',
  },
  {
    date: '2026-05-13',
    description:
      'Generate deterministic, unique avatars from wallet addresses, usernames, or any string. Zero dependencies. Gradient & dither modes. React & vanilla JS.',
    format: 'build',
    id: '',
    title: 'Hashvatar',
    url: 'https://www.hashvatar.com/',
  },
  {
    date: '2026-05-13',
    description: 'Design Engineering Magazine',
    format: 'browse',
    id: '',
    title: 'Interfaces',
    url: 'https://interfaces.dev/',
  },
  {
    date: '2026-05-13',
    description: 'Founding Design Engineer at Interfere',
    format: 'follow',
    id: '',
    title: 'Jakub Krehel',
    url: 'https://jakub.kr/',
  },
  {
    date: '2026-05-13',
    description:
      'Design and code work hand-in-hand to produce memorable digital products.',
    format: 'browse',
    id: '',
    title: 'Design for Engineers',
    url: 'https://didoesdigital.com/project/design-for-engineers/',
  },
  {
    date: '2026-05-13',
    description:
      'An exploration of aesthetic taste in art, design, and creative fields.',
    format: 'read',
    id: '',
    title: 'The Concept of Taste',
    url: 'https://www.raphaelsalaja.com/library/the-concept-of-taste',
  },
  {
    date: '2026-05-14',
    description:
      'Taste Skill gives your AI coding agent good taste. Open-source skill files that stop Cursor, Claude Code, Codex & more from generating generic, boring frontends. Install in one command.',
    format: 'use',
    id: '',
    title: 'Taste Skill',
    url: 'https://www.tasteskill.dev/',
  },
  {
    date: '2026-05-15',
    description: '',
    format: 'read',
    id: '',
    title: 'Front-of-the-front-end and back-of-the-front-end web development',
    url: 'https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/',
  },
  {
    date: '2026-05-15',
    description:
      "A simple Tailwind CSS plugin for beautiful gradient borders using mask-composite. Mirrors Tailwind's gradient utilities with from / via / to color stops, configurable widths, and an animated variant.",
    format: 'build',
    id: '',
    title: 'Gradient Border Plugin',
    url: 'https://gradient-border.floriankiem.com/',
  },
  {
    date: '2026-05-16',
    description: 'Declarative audio synthesis for the web.',
    format: 'build',
    id: '',
    title: '@web-kits/audio',
    url: 'https://audio.raphaelsalaja.com/',
  },
  {
    date: '2026-05-16',
    description:
      'Best-in-class Design Systems collection with a repository of Components and Foundations references from top-tier tech companies and leading UI teams.',
    format: 'browse',
    id: '',
    title: 'Design Systems Surf',
    url: 'https://designsystems.surf/',
  },
  {
    date: '2026-05-18',
    description:
      'Discover micro-interactions, easter eggs, and other seemingly extra design details that infuse life, personality, and fun back into the web.',
    format: 'browse',
    id: '',
    title: 'Design Spells',
    url: 'https://designspells.com',
  },
  {
    date: '2026-07-01',
    description:
      'Beautiful UI components and templates to make your landing page look stunning.',
    format: 'build',
    id: '',
    title: 'Magic UI',
    url: 'https://magicui.design/',
  },
  {
    date: '2026-07-08',
    description: 'Why you are animating more often than you should.',
    format: 'read',
    id: '',
    title: "You Don't Need Animations",
    url: 'https://emilkowal.ski/ui/you-dont-need-animations',
  },
  {
    date: '2026-07-08',
    description: 'Design Engineer / Rockstar New York',
    format: 'apply',
    id: '',
    title: 'Rockstar Games',
    url: 'https://www.rockstargames.com/careers/openings/position/7767935003',
  },
  {
    date: '2026-07-08',
    description: 'Product Engineer / Americas / Remote',
    format: 'apply',
    id: '',
    title: 'Resend',
    url: 'https://resend.com/careers/9b68ba51-3895-4d29-8fd1-364bdf8956e7',
  },
  {
    date: '2026-07-09',
    description:
      'A React component to animate numbers. Dependency-free. Accessible. Customizable.',
    format: 'build',
    id: '',
    title: 'NumberFlow',
    url: 'https://number-flow.barvian.me/',
  },
  {
    date: '2026-07-09',
    description:
      'A curated reading list for product, interaction, and visual designers studying usability, systems, typography, research, and the craft of making useful things.',
    format: 'browse',
    id: '',
    title: 'Design Books',
    url: 'https://designbooks.org/',
  },
  {
    date: '2026-07-12',
    description: 'Skills for Design Engineers.',
    format: 'build',
    id: '',
    title: 'emilkowalski/skills',
    url: 'https://github.com/emilkowalski/skills',
  },
  {
    date: '2026-07-13',
    description: 'Product Design Engineer / Remote',
    format: 'apply',
    id: '',
    title: 'Zed',
    url: 'https://zed.dev/jobs/product-designer',
  },
  {
    date: '2026-07-13',
    description: 'Founding Design Engineer / Remote, United States',
    format: 'apply',
    id: '',
    title: 'Autumn',
    url: 'https://findautumn.com/careers/design-engineer',
  },
];

export const resources = reverseArray(_resources);
