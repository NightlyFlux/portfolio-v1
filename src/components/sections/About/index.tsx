import aboutImg from '@assets/images/profile.jpg'
import Alert from 'components/ui/Alert'
import Button from 'components/ui/Button'
import Heading from 'components/ui/Heading'
import Image from 'next/image'
import { FaFileDownload } from 'react-icons/fa'

export default function About() {
  return (
    <section id='about'>
      <Alert>Hi, I'm a Full Stack Developer based in México! 🇲🇽</Alert>
      <div className='about-info'>
        <div className='about-text'>
          <Heading as='h2'>Salvador Gómez</Heading>
          <p>Digital Craftsman ( Developer / Designer )</p>
        </div>
        <picture className='about-picture'>
          <Image
            src={aboutImg}
            alt='Profile picture'
            width='128'
            height='128'
          />
        </picture>
      </div>
      <div className='about-description'>
        <p>
          I'm always learning about the latest <strong>Web Development</strong>{' '}
          technologies like HTML, CSS, JavaScript (ES6), jQuery, SCSS, React,
          Node.js. Recently I've been getting into{' '}
          <strong>iOS App Development</strong> using Swift and Objective-C.
        </p>
        <p>
          If you need a modern, functional and responsive website, you're on the
          right place.
        </p>
        <p>
          In my spare time I like to read some&nbsp;
          <Button
            as='a'
            variant='link'
            href='https://app.daily.dev/'
            target='_blank'
            rel='noopener noreferrer'
          >
            daily.dev
          </Button>
          &nbsp;articles, practice new skills, play video games and watch
          YouTube videos.
        </p>
      </div>
      <div className='about-button'>
        <Button
          as='a'
          href='assets/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span>My resume</span>
          <FaFileDownload />
        </Button>
      </div>
    </section>
  )
}
