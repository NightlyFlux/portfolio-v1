import Heading from 'components/ui/Heading'
import { skills } from 'data/skills'
import Skill from './Skill'

const Skills = () => {
  return (
    <section id='skills'>
      <Heading as='h3' variant='underlined'>
        My Skills
      </Heading>
      <div className='skills-content'>
        {skills.map(({ name, iconURL }, index) => (
          <Skill key={index} name={name} iconURL={iconURL} />
        ))}
      </div>
    </section>
  )
}

export default Skills
