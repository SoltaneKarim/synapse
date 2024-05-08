import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import ProductHolder from "./components/ProductHolder";
import PartnerHolder from "./components/PartnerHolder";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" exact Component={Hero} />
            <Route path="/contact" Component={Contact} />
            <Route path="/products" Component={ProductHolder} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter> */}
      <PartnerHolder />
    </>
  );
}

export default App;
