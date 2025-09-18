import React from "react";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Header from "../components/Header";
// import Header2 from "../components/Header2";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Experience from "../components/Experience";
import FeaturedItems from "../components/FeaturedItems";
import ProductPage from "../components/ProductPage";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Hero />
      <Experience />
      <Testimonial />
      <ProductPage />
      <FeaturedItems />
      <Footer />
    </div>
  );
};

export default Home;
