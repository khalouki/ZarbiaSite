import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation"
import Hero from './components/Hero'
import ProductsSection from './components/products-section'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import TestimonialSection from './components/about-dev'
import "../src/style.css"
function App() {
  return (
    <BrowserRouter>
      <main>
        <Navigation />
        <Hero />
        <ProductsSection />
        <FeaturesSection />
        <TestimonialSection />
        <Footer />
      </main>
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

