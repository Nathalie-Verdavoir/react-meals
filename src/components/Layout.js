import Footer from './Footer';
import Header from './Header';

import SidebarHome from "./SidebarHome";
const Layout = ({ children }) => {
    return (
    <>
        <Header />
        <main className="d-flex col-12">
            <div className="col-12 col-md-10">
                {children}
            </div>
            <SidebarHome />
        </main>  
        <Footer />
    </>
    );
};
export default Layout;