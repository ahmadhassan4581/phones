// src/components/CustomerReviews.jsx
import React from 'react';
import '../styles/CustomerReviews.css';
import { reviews } from '../Pages/data';

const CustomerReviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="review-title">What Our Users Say</h2>
      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div className="review-card" key={i}>
            <div className="review-header">
              <img src={r.image} alt={r.name} />
              <div>
                <h4>{r.name}</h4>
                <span className="review-role">{r.role}</span>
              </div>
            </div>
            <p className="review-text">"{r.review}"</p>
            <p className="review-rating">{'★'.repeat(r.rating)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
