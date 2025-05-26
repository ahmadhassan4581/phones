import React from 'react';
import {  products } from '../Pages/data';

import '../styles/productcardd.css'
const Productcardd=()=>(

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
)

export default Productcardd
