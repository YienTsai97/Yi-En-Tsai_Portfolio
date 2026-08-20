export interface SkillGroup {
  title: string
  items: string[]
}

export interface ExperienceItem {
  title: string
  organization: string
  period: string
}

export interface ExperienceGroup {
  id: 'education' | 'work' | 'volunteer'
  label: string
  items: ExperienceItem[]
}

export interface SiteContent {
  name: string
  roleLabel: string
  heroTitle: string
  heroSubtitle: string
  aboutEyebrow: string
  aboutTitle: string
  aboutBody: string
  skillsTitle: string
  skillsSubtitle: string
  experienceTitle: string
  experienceSubtitle: string
  projectsTitle: string
  projectsSubtitle: string
  contactTitle: string
  contactSubtitle: string
  social: {
    linkedin: string
    github: string
  }
}
