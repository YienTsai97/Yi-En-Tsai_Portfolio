import type { ProjectSummary } from '~/types/project'

export const projects = [
  {
    slug: 'vancastro',
    title: 'Vancastro Driving School',
    category: 'Driving-school operations platform',
    summary:
      'A team capstone for booking, scheduling, and lesson management — built for students and instructors, not just a marketing site.',
    role: 'Team project · frontend ownership',
    highlights: [
      {
        label: 'Dashboards',
        text: 'Public site plus student and instructor views for booking, scheduling, and lesson management.'
      },
      {
        label: 'Booking',
        text: 'Availability-aware flow that accounts for lesson length and travel time across Metro Vancouver.'
      },
      {
        label: 'Calendar',
        text: 'Instructor scheduling UX with FullCalendar and Clerk-protected, role-based navigation.'
      }
    ],
    stack: [
      'Next.js',
      'Tailwind CSS',
      'shadcn/ui',
      'PostgreSQL',
      'Prisma',
      'Clerk',
      'FullCalendar',
      'QuickBooks API'
    ],
    liveUrl: 'https://vancastro-driving-school-v1.vercel.app/',
    githubUrl: 'https://github.com/YienTsai97/Vancastro_driving_school_v1',
    previewImage: '/image/project_preview/vancastro.png'
  },
  {
    slug: 'plurk-styler',
    title: 'Plurk Styler',
    category: 'Visual CSS editor',
    summary:
      'A login-optional visual editor that mirrors a Plurk profile so users can restyle the timeline, posts, and dashboard — then export CSS ready to paste into Plurk.',
    role: 'Independent product · design through implementation',
    highlights: [
      {
        label: 'Architecture',
        text: 'Preview DOM, feature modules, and a central style store so only intentional edits ship in export.'
      },
      {
        label: 'Hit-testing',
        text: 'River, posts, and the custom logo each open the correct menu without blocking each other.'
      },
      {
        label: 'CSS pipeline',
        text: 'Import/export aligned to selectors verified against live Plurk, not a generic page builder.'
      }
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Zustand',
      'Prisma',
      'NextAuth',
      'Tailwind CSS',
      'Radix UI'
    ],
    liveUrl: 'https://plurk-styler.vercel.app/editor',
    githubUrl: 'https://github.com/YienTsai97/plurk-css-editor',
    previewImage: '/image/project_preview/plurk-styler.png'
  }
] satisfies ProjectSummary[]
