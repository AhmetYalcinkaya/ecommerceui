import React from "react";
import Announcement from "../../components/announcment/Announcment";
import Category from "../../components/categories/Category";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import ProductList from "../../components/productlist/ProductList";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <ProductList />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
