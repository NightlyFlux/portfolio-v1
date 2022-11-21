import { Project } from 'types'
import { Techs } from './techs'

export const projects: Project[] = [
  {
    image:
      'https://via.placeholder.com/100.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide',
    title: 'La Karta',
    stack: [Techs.React, Techs.NextJS],
    description:
      'Sitio web para creación de cartas digitales para restaurantes.',
    source: 'https://github.com/nightlyflux/lakarta-web',
    demo: 'https://lakarta.com.mx',
  },
]
