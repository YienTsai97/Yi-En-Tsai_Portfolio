import type { ExperienceGroup } from '~/types/site'

export const experienceGroups = [
  {
    id: 'education',
    label: 'Education',
    items: [
      {
        title: 'Department Of Digital Multimedia Arts, Bachelor Of Design',
        organization: 'Shih Hsin University, Taipei City, Taiwan (R.O.C.)',
        period: '2015 - 2019'
      },
      {
        title: 'WEB DEVELOPMENT CO-OP',
        organization: 'Cornerstone International Community College of Canada',
        period: '2024 - Present'
      }
    ]
  },
  {
    id: 'work',
    label: 'Work',
    items: [
      {
        title: 'Workshop Teaching Assistant & Exhibition Staff',
        organization: 'Centre Georges-Pompidou × UDNFUNLIFE CO., LTD. Taipei City, Taiwan (R.O.C.)',
        period: '2019 - 2020'
      },
      {
        title: 'Mograph Animator',
        organization: 'Nobility Advertisement Limited Co. Taipei City, Taiwan (R.O.C.)',
        period: '2020 - 2021'
      },
      {
        title: 'Project Coordinator',
        organization: 'MOTION M VFX Limited Co. Taipei City, Taiwan (R.O.C.)',
        period: '2023'
      }
    ]
  },
  {
    id: 'volunteer',
    label: 'Volunteer',
    items: [
      {
        title: 'Blue Ocean Conversation Club Event Staff',
        organization: 'Blue Ocean International Consulting Inc - Volunteer',
        period: '2024'
      },
      {
        title: 'WEB DEVELOPER',
        organization: 'Mission Possible',
        period: '2025.03'
      }
    ]
  }
] satisfies ExperienceGroup[]
