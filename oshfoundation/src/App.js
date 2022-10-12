import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Contactus from "./Pages/Contactus";

// components
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="services" element={<Services />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contactus" element={<Contactus />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
