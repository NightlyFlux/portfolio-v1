import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import Logo from './Logo'
import MobileNav from './MobileNav'
import NavItem from './NavItem'
import PrimaryNav from './PrimaryNav'
import SocialNav from './SocialNav'

export default function Navbar() {
  const router = useRouter()
  const isValidRoute: boolean = router.route !== '/404'
  const [visible, setVisible] = useState<boolean>(false)

  const handleToggle = () => {
    setVisible(!visible)
  }

  return (
    <header className='navbar'>
      <nav className='navbar-wrapper'>
        <Link href='/'>
          <Logo />
        </Link>
        {isValidRoute && <PrimaryNav />}
        <SocialNav />
        {isValidRoute && (
          <NavItem
            as='button'
            className='text-xl sm:hidden'
            onClick={handleToggle}
          >
            {visible ? <IoClose /> : <IoMenu />}
          </NavItem>
        )}
        <MobileNav visible={visible} />
      </nav>
    </header>
  )
}
