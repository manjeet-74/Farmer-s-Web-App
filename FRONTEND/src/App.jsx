import { BrowserRouter, Route, Routes } from "react-router-dom";

// import "./App.css";

import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Product from "./Pages/Product.jsx";
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";

import fruits_banner from "./Components/Assets/banner_fruits.jpg";
import grains_banner from "./Components/Assets/banner_grains.jpg";
import vegetables_banner from "./Components/Assets/banner_vegetables.jpg";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/fruits"
            element={<ShopCategory banner={fruits_banner} category="fruits" />}
          />
          <Route
            path="/vegetables"
            element={
              <ShopCategory banner={vegetables_banner} category="vegetables" />
            }
          />
          <Route
            path="/grains"
            element={<ShopCategory banner={grains_banner} category="grains" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
