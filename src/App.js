import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Pages/Home';
import Converter from './Pages/Converter';
import About from './Pages/About';
import ProductDetail from './Pages/ProductDetail';
import { ThemeProvider } from './Context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
