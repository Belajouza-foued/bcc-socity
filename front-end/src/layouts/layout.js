import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useLocation } from "react-router-dom";
const Layout = ({ children }) => {
   const location = useLocation();
  const hideLayout = ["/login", "/register"]; // les pages sans footer/navbar

  const isHidden = hideLayout.includes(location.pathname);
  return (
    <>
      {!isHidden && <Navbar />}
      <main>{children}</main>
      {/* <Footer /> */}
       {!isHidden && <Footer />}
    </>
  );
};

export default Layout;
