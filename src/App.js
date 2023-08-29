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
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
