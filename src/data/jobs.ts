export interface Job {
  addedAt: string;
  company: string;
  compensation?: string;
  employmentType?:
    | 'Full-time'
    | 'Part-time'
    | 'Contract'
    | 'Freelance'
    | 'Internship'
    | 'Temporary';
  location?: string;
  title: string;
  url: string;
  workArrangement?: 'Remote' | 'Hybrid' | 'On-site';
}

export const jobs: Job[] = [
  {
    addedAt: '2026-10-19',
    company: 'Confido',
    compensation: '$150K – $180K',
    employmentType: 'Full-time',
    location: 'NYC Office',
    title: 'Design Engineer',
    url: 'https://jobs.ashbyhq.com/confido/3155bda4-fdb2-487f-a0ec-719cd876a726',
    workArrangement: 'On-site',
  },
  {
    addedAt: '2026-10-19',
    company: 'Granola',
    employmentType: 'Full-time',
    location: 'London',
    title: 'Design Engineer (Web & Brand)',
    url: 'https://jobs.ashbyhq.com/granola/559ae443-4595-48d3-9cb8-580439762d19',
    workArrangement: 'On-site',
  },
  {
    addedAt: '2026-10-19',
    company: 'Replit',
    compensation: '$180K – $290K',
    employmentType: 'Full-time',
    location: 'Foster City, CA',
    title: 'Design Engineer',
    url: 'https://jobs.ashbyhq.com/replit/2f1de5f1-48c2-4104-a697-a51fe1620508',
    workArrangement: 'Hybrid',
  },
  {
    addedAt: '2026-10-19',
    company: 'tldraw',
    employmentType: 'Full-time',
    location: 'London Office',
    title: 'Design Engineer',
    url: 'https://jobs.ashbyhq.com/tldraw/c52007ee-bac0-4176-a5f0-48fe6e1fe854',
    workArrangement: 'On-site',
  },
  {
    addedAt: '2026-10-19',
    company: 'Cohere',
    employmentType: 'Full-time',
    location: 'United States; Canada; New York; San Francisco; Toronto',
    title: 'Design Engineer',
    url: 'https://jobs.ashbyhq.com/cohere/75765a04-82cb-4d17-ac53-09b156656a7d',
    workArrangement: 'On-site',
  },
  {
    addedAt: '2026-10-19',
    company: 'Vercel',
    compensation: '$208K – $312K',
    employmentType: 'Full-time',
    location: 'United States',
    title: 'Design Engineer',
    url: 'https://job-boards.greenhouse.io/vercel/jobs/6129441004',
    workArrangement: 'Remote',
  },
  {
    addedAt: '2026-10-20',
    company: 'Profound',
    compensation: '$120K – $250K (NYC)',
    employmentType: 'Full-time',
    location: 'NYC or Buenos Aires Office',
    title: 'Member of Technical Staff, Design Engineer',
    url: 'https://www.tryprofound.com/careers/e98d1d1d-aeec-4b8d-aef8-ea9b61546639',
    workArrangement: 'On-site',
  },
  {
    addedAt: '2026-10-20',
    company: 'Nord Security',
    employmentType: 'Full-time',
    location: 'Poland',
    title: 'Design Engineer · Mid-Senior',
    url: 'https://nordsecurity.com/careers/d9da600d-43b4-43f3-af47-d854c5eb508c/',
    workArrangement: 'Remote',
  },
];
