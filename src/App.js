import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Socials from "./Components/Socials";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Order from "./Pages/Order";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <Router>
      <Socials />
      <Navbar />
      <Routes>
        <Route path="/resturant-website" element={<Home />} />
        <Route path="/resturant-website/order" element={<Order />} />
        <Route path="/resturant-website/contact" element={<Contact />} />
        <Route path="/resturant-website/menu" element={<Menu />} />
        <Route path="/resturant-website/about" element={<About />} />
        <Route path="/resturant-website/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
