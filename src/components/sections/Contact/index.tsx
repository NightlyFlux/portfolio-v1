import mapImage from '@assets/images/map.png'
import Button from 'components/ui/Button'
import Heading from 'components/ui/Heading'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  name: string
  subject: string
  message: string
}

export default function Contact() {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = ({ name, subject, message }) => {
    window.location.href = `mailto:nightlyflux@gmail.com?subject=${name} - ${subject}&body=${message}`
  }

  return (
    <section id='contact'>
      <Heading as='h3' variant='underlined'>
        Let's talk!
      </Heading>
      <div className='contact-content'>
        <div className='contact-info'>
          <p>
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. 👋
          </p>
          <figure className='contact-image'>
            <Image
              src={mapImage}
              alt={'Map background'}
              width='330'
              height='213'
            />
          </figure>
        </div>
        <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
          <input
            className='form-input'
            type='text'
            placeholder='Name'
            {...register('name', { required: true })}
          />
          <input
            className='form-input'
            type='text'
            placeholder='Subject'
            {...register('subject', { required: true })}
          />
          <textarea
            className='form-input'
            placeholder='Message'
            rows={3}
            {...register('message', { required: true })}
          />
          <Button className='self-stretch sm:self-start' type='submit'>
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
