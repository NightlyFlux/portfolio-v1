import Image from 'next/image'
import NextLink from 'next/link'

const Logo = () => (
  <NextLink href='/'>
    <a className='logo'>
      <Image src='/assets/images/logo.svg' width={48} height={48} alt='logo' />
    </a>
  </NextLink>
)

export default Logo
