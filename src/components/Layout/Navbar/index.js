import { useRouter } from 'next/router'
import { useState } from 'react'
import { TbMenu, TbX } from 'react-icons/tb'
import Button from '../../Button'
import Logo from './Logo'
import MobileNav from './MobileNav'
import PrimaryNav from './PrimaryNav'
import SocialNav from './SocialNav'

const Navbar = () => {
  const router = useRouter()
  const isValidRoute = router.route !== '/404'
  const [visible, setVisible] = useState(false)

  const handleToggle = () => {
    setVisible(!visible)
  }

  return (
    <header className='navbar'>
      <nav className='navbar-wrapper'>
        <Logo />
        {isValidRoute && <PrimaryNav />}
        <SocialNav />
        {isValidRoute && (
          <Button
            className='sm:hidden'
            variant='outlined'
            onClick={handleToggle}
          >
            {visible ? <TbX /> : <TbMenu />}
          </Button>
        )}
        <MobileNav visible={visible} setVisible={handleToggle} />
      </nav>
    </header>
  )
}

export default Navbar
