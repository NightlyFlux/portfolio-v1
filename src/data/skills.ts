import { IconURL, Skill } from 'types'

const buildURL: IconURL = (iconName, collection = 'logos') =>
  `https://api.iconify.design/${collection}/${iconName}.svg?width=40&height=40`

export const skills: Skill[] = [
  // Languages
  { name: 'HTML', iconURL: buildURL('file-type-html', 'vscode-icons') },
  { name: 'CSS', iconURL: buildURL('file-type-css', 'vscode-icons') },
  { name: 'Typescript', iconURL: buildURL('typescript-icon') },
  { name: 'Swift', iconURL: buildURL('swift') },
  {
    name: 'C#',
    iconURL: buildURL('file-type-csharp2', 'vscode-icons'),
  },
  { name: 'PHP', iconURL: buildURL('php') },
  { name: 'MySQL', iconURL: buildURL('file-type-mysql', 'vscode-icons') },
  { name: 'MongoDB', iconURL: buildURL('mongodb-icon') },
  // Frameworks
  { name: 'React', iconURL: buildURL('react') },
  { name: 'NodeJS', iconURL: buildURL('nodejs-icon') },
  { name: 'AdonisJS', iconURL: buildURL('adonisjs-icon') },
  { name: 'Laravel', iconURL: buildURL('laravel') },
  // Tools
  { name: 'Git', iconURL: buildURL('git-icon') },
  { name: 'Postman', iconURL: buildURL('postman-icon') },
  { name: 'Figma', iconURL: buildURL('figma') },
]
