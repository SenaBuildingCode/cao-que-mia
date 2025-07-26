"use client";

import Header from "../components/Header";
import Banner from "../components/Banner";
import DonationCarousel from "../components/DonationCarousel";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const Home = () => {
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

export default Home;
