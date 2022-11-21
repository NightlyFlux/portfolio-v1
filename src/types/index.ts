export type IconURL = (
  iconName: string,
  collection?: 'logos' | 'vscode-icons'
) => string

export type Link = {
  title: string
  path: string
}

export type Project = {
  image: string
  title: string
  stack: Tech[]
  description: string
  source: string
  demo: string
}

export type Skill = {
  name: string
  iconURL: string
}

export type Tech = {
  name: string
  icon: string
}
