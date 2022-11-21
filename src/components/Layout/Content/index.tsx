import { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Content({ children }: Props) {
  return <main className='content'>{children}</main>
}
