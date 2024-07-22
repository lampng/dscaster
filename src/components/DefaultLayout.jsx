import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
function DefaultLayout({ children }) {
    return (
        <>
            <div className="w-full h-full p-0 m-0 overflow-hidden">
                <Navbar />
                <div className="">{children}</div>
                <Footer />
                <BackToTop />
            </div>
        </>
    );
}

export default DefaultLayout;
