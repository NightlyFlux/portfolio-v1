import { primaryLinks } from 'data/links'
import NavItem from '../NavItem'

export default function PrimaryNav() {
  return (
    <div className='primary-nav'>
      {primaryLinks.map(({ title, path }) => (
        <NavItem key={title} href={path}>
          {title}
        </NavItem>
      ))}
    </div>
  )
}
