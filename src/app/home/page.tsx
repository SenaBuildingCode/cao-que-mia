"use client";

import Header from "../components/Header";
import Banner from "../components/Banner";
import DonationCarousel from "../components/DonationCarousel";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <DonationCarousel />
      <AboutUs />
    </div>
  );
};

export default Home;
