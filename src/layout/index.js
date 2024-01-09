import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Preloader from "../components/Preloader";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : null}
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
