import Content from './Content'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Content>
        {children}
        <Footer />
      </Content>
    </>
  )
}

export default Layout
