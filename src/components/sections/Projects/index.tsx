import Button from 'components/ui/Button'
import Heading from 'components/ui/Heading'
import { projects } from 'data/projects'
import { FaChevronRight } from 'react-icons/fa'
import Project from './Project'

export default function Projects() {
  return (
    <section id='projects'>
      <Heading as='h3' variant='underlined'>
        Projects
      </Heading>
      <div className='projects-content'>
        {projects.map((project, index) => (
          <Project
            key={index}
            {...project}
            flip={index % 2 === 0 ? true : false}
          />
        ))}
      </div>
      <div className='projects-button'>
        <Button
          as='a'
          href='https://github.com/NightlyFlux?tab=repositories'
          target='_blank'
          rel='noopener noreferrer'
          variant='outlined'
        >
          <span>Want to see more?</span>
          <FaChevronRight />
        </Button>
      </div>
    </section>
  )
}
