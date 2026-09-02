import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Home from "./components/homeimg.jsx";
import Footer from "./components/footer.jsx";
import About from "./components/about.jsx";
import Products from "./components/products.jsx";
import WhyUs from "./components/whyus.jsx";
import Contacts from "./components/contacts.jsx";
import Headerabout from "./components/headerabout.jsx";
import Headerproducts from "./components/headerproducts.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Products />
              <WhyUs />
            </>
          }
        />
        {/* <Route path="/about" element={<> < /> <About /></> */}
          {/* } */}
        {/* /> */}
        <Route path="/about" element={<Headerabout />} />
        <Route path="/products" element={<Headerproducts />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
