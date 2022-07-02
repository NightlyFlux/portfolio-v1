import classNames from 'classnames'
import NavItem from '../NavItem'

const MobileNav = ({ visible, setVisible }) => {
  return (
    <div className={classNames('mobileNav', { ['visible']: visible })}>
      <NavItem className='mobileNav-item' to='about' onClick={setVisible}>
        About
      </NavItem>
      <NavItem className='mobileNav-item' to='skills' onClick={setVisible}>
        Skills
      </NavItem>
      <NavItem className='mobileNav-item' to='projects' onClick={setVisible}>
        Projects
      </NavItem>
      <NavItem className='mobileNav-item' to='contact' onClick={setVisible}>
        Contact
      </NavItem>
    </div>
  )
}

export default MobileNav
