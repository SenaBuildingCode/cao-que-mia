"use client";

import Header from "./Header";
import Banner from "./Banner";
import DonationCarousel from "./DonationCarousel";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <DonationCarousel />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default HomePage;
