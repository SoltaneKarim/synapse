import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import ProductHolder from "./components/ProductHolder";
import PartnerHolder from "./components/PartnerHolder";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Hero} />
          <Route path="/contact" Component={Contact} />
          <Route path="/about" Component={About} />
          <Route path="/products" Component={ProductHolder} />
          <Route path="/partners" Component={PartnerHolder} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
