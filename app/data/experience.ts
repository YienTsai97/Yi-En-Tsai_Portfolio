import type { ExperienceGroup } from '~/types/site'

export const experienceGroups = [
  {
    id: 'education',
    label: 'Education',
    items: [
      {
        title: 'Web Development Co-op Diploma',
        organization: 'Cornerstone International Community College of Canada',
        period: 'April 2024 – May 2026'
      },
      {
        title: 'Bachelor of Design in Digital Multimedia Arts',
        organization: 'Shih Hsin University, Taipei City, Taiwan',
        period: '2015 – 2019'
      }
    ]
  },
  {
    id: 'work',
    label: 'Work',
    items: [
      {
        title: 'Project Coordinator',
        organization: 'MOTION M VFX Limited Co., Taipei City, Taiwan',
        period: 'Feb 2023 – Dec 2023',
        highlights: [
          'Coordinated design, production, and development teams to deliver commercial projects on schedule.',
          'Planned the company website and collaborated with developers through implementation.'
        ]
      },
      {
        title: 'Animator',
        organization: 'Nobility Advertisement Limited Co., Taipei City, Taiwan',
        period: 'May 2020 – Nov 2021',
        highlights: [
          'Produced animation for concept advertisement projects while coordinating with cross-functional teams.'
        ]
      }
    ]
  },
  {
    id: 'volunteer',
    label: 'Volunteer',
    items: [
      {
        title: 'Web Developer Volunteer',
        organization: 'Canadian Network for International Surgery (CNIS), Vancouver, Canada',
        period: 'June 2025 – Jan 2026',
        highlights: [
          'Automated course enrollment by integrating WooCommerce with Thinkific through a custom WordPress plugin.',
          'Collaborated with stakeholders on the online course platform and learning workflow.'
        ]
      },
      {
        title: 'Web Developer Volunteer',
        organization: 'Mission Possible, Vancouver, Canada',
        period: 'Mar 2025 – Apr 2025',
        highlights: [
          'Maintained the HubSpot CMS site: frontend/backend fixes, SEO metadata, and performance/accessibility improvements.',
          'Worked with nonprofit stakeholders to ship user-centered updates on a live website.'
        ]
      }
    ]
  }
] satisfies ExperienceGroup[]
