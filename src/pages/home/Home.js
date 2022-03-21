import React from "react";
import Announcement from "../../components/announcment/Announcment";
import Category from "../../components/categories/Category";
// import Footer from "../components/Footer";
import Navbar from "../../components/navbar/Navbar";
import ProductList from "../../components/productlist/ProductList";
import Slider from "../../components/slider/Slider";
// import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <ProductList />
    </div>
  );
};

export default Home;
