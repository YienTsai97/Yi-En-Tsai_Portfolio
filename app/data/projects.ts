import type { ProjectSummary } from '~/types/project'

export const projects = [
  {
    slug: 'vancastro',
    title: 'Vancastro Driving School',
    category: 'Driving School Booking System',
    summary:
      'An online booking and management system designed for a driving school, integrating lesson purchases, scheduling, availability management, invoicing, and payment processing to provide a seamless digital experience for both students and instructors.',
    stack: [
      'Next.js',
      'Tailwind CSS',
      'shadcn',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'Clerk',
      'FullCalendar'
    ],
    liveUrl: 'https://vancastro-driving-school-v1.vercel.app/',
    previewImage: '/image/project_preview/vancastro.png'
  },
  {
    slug: 'taskpicker',
    title: 'TaskPicker',
    category: 'Kanban board web app',
    summary:
      'A Mobile-friendly Kanban board web app with functionalities include drag-and-drop using TypeScript. Responsible for UI and front-end development.',
    role: 'UI and front-end development',
    stack: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Astro', 'Figma'],
    liveUrl: 'https://taskpicker-kanban.onrender.com/',
    previewImage: '/image/project_preview/taskpicker.png'
  },
  {
    slug: 'shoppy',
    title: 'Shoppy',
    category: 'shopping website',
    summary:
      'A responsive shopping website using OOP. Users can browse a list of products (with images, titles, descriptions, and prices), add items to the cart, adjust quantities, or remove items, and view real-time updates of the item count and total price.',
    stack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    liveUrl: 'https://shoppy-2sza.onrender.com/',
    previewImage: '/image/project_preview/shoppy.png'
  },
  {
    slug: 'filmbuff',
    title: 'Filmbufff',
    category: 'Movie Web App',
    summary:
      'A movie website app where it displays the trending movies of the day, which user could search for movies and the details.',
    stack: ['JavaScript', 'jQuery', 'HTML', 'CSS'],
    liveUrl: 'https://filmbuff.onrender.com/',
    previewImage: '/image/project_preview/filmbuff.png'
  },
  {
    slug: 'ddsgnr',
    title: 'Ddsgnr',
    category: 'Official Website',
    summary: 'A fully responsive business website using Astro and tailwind css.',
    stack: ['JavaScript', 'HTML', 'CSS', 'Astro'],
    liveUrl: 'https://ddsgnr.onrender.com/',
    previewImage: '/image/project_preview/ddsgnr.png'
  }
] satisfies ProjectSummary[]
