/* eslint-disable*/
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
