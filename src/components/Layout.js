import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

import SidebarHome from "./SidebarHome";
const Layout = ({ children }) => {
    
    const location = useLocation()
    const openedSidebarDrink = location.pathname.search(/drink/gi)!==-1;
    return (
    <>
        <Header />
        <main className="d-flex col-12">
            <div className="col-12 col-md-10">
                {children}
            </div>
            <SidebarHome openedSidebarDrink={openedSidebarDrink}/>
        </main>  
        <Footer />
    </>
    );
};
export default Layout;