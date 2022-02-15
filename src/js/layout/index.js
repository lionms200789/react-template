import Header from './header'
import Footer from './footer'

/**
 * Layout 佈局
 * @param {children} 各 pages 
 */

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;