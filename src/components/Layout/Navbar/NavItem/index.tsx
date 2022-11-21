import classNames from 'classnames'
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  PropsWithChildren,
} from 'react'

type Props = {
  as?: ElementType
  className?: string
} & AnchorHTMLAttributes<Props> &
  ButtonHTMLAttributes<Props>

export default function NavItem({
  as: Component = 'a',
  className,
  children,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <Component className={classNames('nav-item', className)} {...rest}>
      {children}
    </Component>
  )
}
