import classNames from 'classnames'
import { forwardRef } from 'react'

const Button = (
  { className, variant, as: Component = 'button', children, leftIcon, ...rest },
  ref
) => (
  <Component
    className={classNames('button', { [`${variant}`]: variant }, className)}
    ref={ref}
    {...rest}
  >
    {leftIcon}
    {children}
  </Component>
)

export default forwardRef(Button)
