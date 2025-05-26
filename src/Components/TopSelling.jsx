// src/components/Topselling.jsx
import React from 'react';
import '../styles/TopSelling.css';
import { featuredProducts, products,shopByCategories } from '../Pages/data';

const Topselling = () => {
  return (
    <div className="topselling-wrapper">

      {/* HERO BANNER */}
         <div className="hero-banner">
      <img
        src="https://media.johnlewiscontent.com/i/JohnLewis/headphones-bg-hero2-251119?fmt=auto&resMode=sharp"
        alt="Bluetooth Headphones"
        className="hero-image"
      />
      <div className="hero-content">
        <h1>FEATURED PRODUCTS</h1>
        <h2>ORDER YOURS NOW!</h2>
       
      </div>
    </div>

      {/* FEATURED PRODUCTS SECTION */}
      <div className="featured-section">
        {featuredProducts.map((item, index) => (
          <div className="featured-card" key={index}>
            <img src={item.image} alt={item.title} />
            <p className="product-title">{item.title}</p>
            <p className="product-price">RS {item.price}</p>
          </div>
        ))}
      </div>

      {/* LAST CHANCE TO BUY SECTION */}
      <h3 className="topselling-title">LAST CHANCE TO BUY</h3>
      <div className="topselling-grid">
        {products.map((product, index) => (
          <div className="topselling-card" key={index}>
            <img src={product.image} alt={product.title} className="topselling-image" />
            <div className='ss'>
            <h3 className="topselling-name">{product.title}</h3>
            <div className="topselling-price">
              <h2 className="discounted">RS {product.discountedPrice}</h2>
              <p className="original">RS {product.originalPrice}</p>
              <div className="discount-tag">-{product.discount}%</div>
            </div>
            </div>
          </div>
        ))}
      </div>

      {/*3ree images*/}
      <h3 className="shop-categories-title">SHOP BY CATEGORIES</h3>
<div className="shop-categories-grid">
  {shopByCategories.map((category, index) => (
    <div className="shop-category-card" key={index}>
      <img src={category.image} alt={category.title} />
      <h3 className="shop-category-name">{category.title}</h3>
    </div>
  ))}
</div>


    </div>
  );
};

export default Topselling;
