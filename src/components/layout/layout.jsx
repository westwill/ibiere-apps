import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

const Layout = () => {
  return (
    <div>
    <div className="w-4/5 mx-auto">
      <Header />
      <Outlet />
    </div>
        <Footer />
    </div>
  );
};

export default Layout;
