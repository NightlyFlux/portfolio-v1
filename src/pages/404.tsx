import notFoundImage from '@assets/images/not-found.svg'
import Button from 'components/ui/Button'
import Divider from 'components/ui/Divider'
import Heading from 'components/ui/Heading'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='container flex flex-col h-[calc(100vh-3.5rem)] items-center justify-center space-y-6'>
      <figure className='w-72 sm:w-96'>
        <Image
          src={notFoundImage}
          alt='Not found'
          width='1100'
          height='731'
          priority
        />
      </figure>
      <Heading className='text-violet-600'>Whoops!</Heading>
      <Divider />
      <p className='text-center'>The page you're looking for can't be found.</p>
      <Link href='/' passHref legacyBehavior>
        <Button as='a'>Return to home</Button>
      </Link>
    </section>
  )
}
