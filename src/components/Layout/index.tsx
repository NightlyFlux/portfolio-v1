import { ReactNode } from 'react'
import Content from './Content'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
