import classNames from 'classnames'

const NavItem = ({ className, to: href, onClick, children }) => {
  const isNavItem = !href?.startsWith('http' || 'www')

  if (isNavItem) {
    return (
      <a
        className={classNames('navItem', className)}
        onClick={onClick}
        to={href}
        offset={-56}
        smooth='true'
      >
        {children}
      </a>
    )
  } else {
    return (
      <a
        className={classNames('navItem', className)}
        href={href}
        target='_blank'
        rel='noreferrer'
        onClick={onClick}
      >
        {children}
      </a>
    )
  }
}

export default NavItem
