// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/productcardd.css';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Productcardd from './Productcardd';
import Hero from '../Components/Hero';
import CustomerReviews from '../Components/CustomerReviews';
import FlashSale from '../Components/FlashSale'; // Adjust path if different
import NewArrivals from '../Components/NewArrivals';
import Products from '../Components/Products'
import Topselling from '../Components/TopSelling';
import Audio from '../Components/Audio'
import SmartPhones from '../Components/SmartPhones';
import '../styles/responsive.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={
        <>
          <Hero /><br />
          <Productcardd />
          <CustomerReviews />
        </>
      } />
      <Route path="/flash-sale" element={<FlashSale />} />
      <Route path="/new-arrivals" element={<NewArrivals />} />
      <Route path="/products" element={<Products />} />
      <Route path='/top-selling' element={<Topselling />} />
      <Route path='/audio' element={<Audio />} />
      <Route path='/smart-phones' element={<SmartPhones />} />



    </Routes>
    <Footer />
  </Router>
);

export default App;
