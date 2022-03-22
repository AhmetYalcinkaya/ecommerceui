import React from "react";
import Category from "../../components/categories/Category";
import Footer from "../../components/footer/Footer";
import Newsletter from "../../components/newsletter/Newsletter";
import ProductList from "../../components/productlist/ProductList";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Category />
      <ProductList />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
