import { PropsWithChildren } from 'react'
import Icon from '../Icon'

type Props = {
  icon?: string
}

export default function Tag({ icon, children }: PropsWithChildren<Props>) {
  return (
    <li className='tag'>
      {icon && <Icon nameIcon={icon} propsIcon={{ className: 'tag-icon' }} />}
      <span className='tag-text'>{children}</span>
    </li>
  )
}
