import classNames from 'classnames'

const Heading = ({ as: Component = 'h1', className, children }) => (
  <Component
    className={classNames('heading', className)}
  >
    {children}
  </Component>
)

export default Heading
