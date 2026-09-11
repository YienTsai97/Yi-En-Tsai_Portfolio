import type { SkillGroup } from '~/types/site'

export const skillGroups = [
  {
    title: 'Core Development',
    items: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Vue',
      'Node.js',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'Prisma'
    ]
  },
  {
    title: 'Web / Integration',
    items: [
      'REST APIs',
      'WordPress',
      'WooCommerce',
      'HubSpot CMS',
      'Git',
      'SCSS',
      'Tailwind CSS'
    ]
  },
  {
    title: 'Design Background',
    items: ['Figma', 'Photoshop', 'Illustrator', 'After Effects']
  }
] satisfies SkillGroup[]
