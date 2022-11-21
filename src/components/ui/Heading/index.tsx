import classNames from 'classnames'
import { PropsWithChildren } from 'react'

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  className?: string
  variant?: 'underlined'
}

export default function Heading({
  as: Component = 'h1',
  className,
  variant,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Component
      className={classNames('heading', { [`${variant}`]: variant }, className)}
    >
      {children}
    </Component>
  )
}
