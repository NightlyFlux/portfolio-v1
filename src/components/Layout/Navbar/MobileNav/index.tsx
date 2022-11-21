import classNames from 'classnames'
import Divider from 'components/ui/Divider'
import { primaryLinks } from 'data/links'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import NavItem from '../NavItem'

type Props = { visible: boolean }

export default function MobileNav({ visible }: Props) {
  return (
    <div className={classNames('mobile-nav', { ['visible']: visible })}>
      {primaryLinks.map(({ title, path }) => (
        <NavItem key={title} href={path}>
          {title}
        </NavItem>
      ))}
      <Divider />
      <div className='mobile-nav-socials'>
        <NavItem
          href='https://github.com/NightlyFlux'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoGithub />
          <span>GitHub</span>
        </NavItem>
        <NavItem
          href='https://www.linkedin.com/in/salvadorgomezdev'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoLinkedin />
          <span>LinkedIn</span>
        </NavItem>
      </div>
    </div>
  )
}
