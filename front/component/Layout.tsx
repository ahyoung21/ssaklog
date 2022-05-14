import React from 'react';
import HeadInfo from './HeadInfo';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
