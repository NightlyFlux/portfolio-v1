import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import NavItem from '../NavItem'

export default function SocialNav() {
  return (
    <div className='social-nav'>
      <NavItem
        href='https://github.com/NightlyFlux'
        target='_blank'
        rel='noopener noreferrer'
      >
        <IoLogoGithub />
      </NavItem>
      <NavItem
        href='https://www.linkedin.com/in/salvadorgomezdev'
        target='_blank'
        rel='noopener noreferrer'
      >
        <IoLogoLinkedin />
      </NavItem>
    </div>
  )
}
