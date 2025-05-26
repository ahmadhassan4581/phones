// Product.jsx
import React from 'react';
import '../styles/Products.css';
import { productData_2 } from '../Pages/data';
import { speakers } from '../Pages/data';

const Audio
 = () => {
  return (
    <section className="product-section">
      <div className="product-layout">
        {/* Left - Product Grid */}
        <div className="product-grid">
          {productData_2.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <div className='vv'>
                  <h3 className="product-title">{product.price}</h3>
                  <p className="product-discount">{product.discount}</p>
                </div>
                <div className="product-rating">
                  {'★'.repeat(product.rating).padEnd(5, '☆')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Sidebar */}
        <aside className="product-sidebar">
          <div className="filter-section">
            <h3>FILTERS:</h3>

            <div className="filter-block">
              <h4>Product Type</h4>
              <ul>
                {[
                  'Wire', 'Data Cables', 'Cameras', 'Laptop', 'Tablets', 'Laptop Stand',
                  'Camera Stand', 'Storage Light', 'Lens', 'Ear Pods', 'Ear Phones',
                  'Phone Cases', 'Charger', 'Hands Free', 'Speakers', 'Diffuser',
                  'Camera Holder', 'Smartwatch', 'Power Bank', 'Adapter', 'Charging',
                  'Internet Devices'
                ].map((type, i) => (
                  <li key={i}><input type="checkbox" /> {type}</li>
                ))}
              </ul>
            </div>

            <div className="filter-block">
              <h4>Price</h4>
              <p>RS 2000 → RS 10000</p>
              <p>→ RS 50000+</p>
            </div>

            <div className="filter-block">
              <h4>Ratings</h4>
              <p>★★★★★ - 5/5</p>
              <p>★★★★☆ - 4/5</p>
              <p>★★★☆☆ - 3.5/5</p>
            </div>

            <div className="filter-block">
              <h4>Brands</h4>
              <ul className="brand-list">
                {[
                  'LG', 'Apple', 'Samsung', 'Oppo', 'Infinix', 'Canon', 'Nikon',
                  'Sony', 'Redmi', 'Nokia', 'Amazon', 'Amoi', 'Bird', 'Blackberry',
                  'Huawei', 'Lenovo', 'Realme', 'Sony Ericsson', 'Vivo', 'Xiaomi',
                  'Alcatel', 'Allview'
                ].map((brand, i) => (
                  <li key={i}><input type="checkbox" /> {brand}</li>
                ))}
              </ul>
            </div>

            <div className="filter-block">
              <h4>Memory</h4>
              <div className="memory-options">
                {['16 GB', '32 GB', '62 GB', '128 GB', '250 GB'].map((mem, i) => (
                  <span key={i} className="memory-chip">{mem}</span>
                ))}
              </div>
            </div>

            <div className="filter-block">
              <h4>Sold Out:</h4>
              <div className="sold-out-grid">
             {speakers.map((product) => (
  <div className="product-card" key={product.id}>
    <img src={product.image} alt={product.name} />
  </div>
))}

              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Audio;
