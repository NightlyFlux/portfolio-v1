import classNames from 'classnames'
import Heading from 'components/ui/Heading'
import Tag from 'components/ui/Tag'
import Image from 'next/image'
import { FiGithub } from 'react-icons/fi'
import { IoMdOpen } from 'react-icons/io'
import { Project as ProjectType } from 'types'

type Props = ProjectType & {
  flip: boolean
}

export default function Project({
  image,
  title,
  stack,
  description,
  source,
  demo,
  flip,
}: Props) {
  return (
    <article className='project'>
      <div
        className={classNames('project-content', {
          inverted: flip,
        })}
      >
        <div
          className={classNames('project-heading', {
            inverted: flip,
          })}
        >
          <Heading as='h3'>{title}</Heading>
          <div className='project-buttons'>
            <a href={source} target='_blank' rel='noopener noreferrer'>
              <IoMdOpen />
            </a>
            {demo && (
              <a href={demo} target='_blank' rel='noopener noreferrer'>
                <FiGithub />
              </a>
            )}
          </div>
        </div>
        <ul
          className={classNames('project-stack', {
            inverted: flip,
          })}
        >
          {stack.map(({ name, icon }, index) => (
            <Tag key={index} icon={icon}>
              {name}
            </Tag>
          ))}
        </ul>
        <p className='project-description'>{description}</p>
      </div>
      <picture
        className={classNames('project-image', {
          inverted: flip,
        })}
      >
        <Image
          src={image}
          alt={`${title} image`}
          fill
          sizes='(max-width: 640px) 420px, (min-width: 641px) 100vw'
        />
      </picture>
    </article>
  )
}
