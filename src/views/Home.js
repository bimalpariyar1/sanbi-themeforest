import React from "react";
import Layout from "../layout";
import SiteBanner from "../sections/SiteBanner";
import About from "../sections/About";
import GeneralFetures from "../sections/GeneralFetures";
import ExtendedFeatures from "../sections/ExtendedFeatures";
import PricingPlans from "../sections/PricingPlans";
import Trusties from "../sections/Trusties";
import Testimonials from "../sections/Testimonials";
import Blogs from "../sections/Blogs";
import Download from "../sections/Download";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <Layout>
      <SiteBanner />
      <About />
      <GeneralFetures />
      <ExtendedFeatures />
      <PricingPlans />
      <Trusties />
      <Testimonials />
      <Blogs />
      <Download />
      <Contact />
    </Layout>
  );
};

export default Home;
