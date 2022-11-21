import classNames from 'classnames'
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  PropsWithChildren,
} from 'react'

type ButtonProps<C extends ElementType> = {
  as?: C
  className?: string
  disabled?: boolean
  variant?: 'outlined' | 'ghost' | 'link'
}

type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref']

type Props<C extends ElementType> = PropsWithChildren<ButtonProps<C>> &
  ComponentPropsWithoutRef<C> & { ref?: PolymorphicRef<C> }

type ButtonComponent = <C extends React.ElementType = 'button'>(
  props: Props<C>
) => React.ReactElement | null

const Button: ButtonComponent = forwardRef(
  <C extends ElementType = 'button'>(
    { as, className, variant, disabled, children, ...rest }: Props<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Component = as || 'button'
    const isAnchor = Component === 'a'

    return (
      <Component
        ref={ref}
        className={classNames(
          'button',
          { [`${variant}`]: variant },
          { disabled: isAnchor && disabled },
          className
        )}
        disabled={disabled}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)

export default Button
