export interface ProjectHighlight {
  label: string
  text: string
}

export interface ProjectSummary {
  slug: string
  title: string
  category: string
  summary: string
  role?: string
  highlights?: ProjectHighlight[]
  stack: string[]
  liveUrl: string
  githubUrl?: string
  previewImage: string
}
