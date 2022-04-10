import HeadInfo from './HeadInfo';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <HeadInfo />
      <Header />
      <div id="bodyWrap">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
