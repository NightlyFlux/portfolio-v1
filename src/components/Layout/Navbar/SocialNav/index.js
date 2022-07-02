import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'
import NavItem from '../NavItem'

const SocialNav = () => (
  <div className='socialNav'>
    <NavItem to='https://github.com/NightlyFlux'>
      <TbBrandGithub />
    </NavItem>
    <NavItem to='https://www.linkedin.com/in/salvadorgomezdev'>
      <TbBrandLinkedin />
    </NavItem>
  </div>
)

export default SocialNav
