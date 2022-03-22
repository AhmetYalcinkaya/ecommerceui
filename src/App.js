import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductsPage from "./pages/productspage/ProductsPage";
import Navbar from "./components/navbar/Navbar";
import Announcment from "./components/announcment/Announcment";

function App() {
  return (
    <>
      <Announcment />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
