import Button from 'components/Button'
import Heading from 'components/Heading'
import NextLink from 'next/link'
import { TbHome } from 'react-icons/tb'

export default function NotFound() {
  return (
    <section className='flex flex-col min-h-screen items-center justify-center'>
      <Heading as='h3' className='mb-2'>
        404 - Not found
      </Heading>
      <p className='mb-4'>
        The page you&apos;re looking for wasn&apos;t found.
      </p>
      <NextLink href='/' passHref>
        <Button leftIcon={<TbHome />}>Return to home</Button>
      </NextLink>
    </section>
  )
}
