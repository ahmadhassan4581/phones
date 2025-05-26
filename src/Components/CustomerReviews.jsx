// src/components/CustomerReviews.jsx
import React from 'react';
import '../styles/CustomerReviews.css';

const reviews = [
  {
    name: 'AYESHA TAHIR',
    rating: 5,
    review: 'Really satisfied, I just got my order from Go Trolly and I completely love it.',
    image: 'https://cdn-icons-png.flaticon.com/512/545/545705.png',
  },
  {
    name: 'AHMAD RAZA',
    rating: 5,
    review: 'Never used Go Trolly. I will order one more as my new friend uses as well.',
    image: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
  },
  {
    name: 'MANZOOR BALTI',
    rating: 5,
    review: 'The order was delivered today and it was nicely packed. The wire works great thanks to Trolly.',
    image: 'https://cdn-icons-png.flaticon.com/512/1998/1998671.png',
  },
];

const CustomerReviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="review-title">CUSTOMER REVIEWS</h2>
      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div className="review-card" key={i}>
            <img src={r.image} alt={r.name} />
            <h4>{r.name}</h4>
            <p>{'★'.repeat(r.rating)}</p>
            <p>{r.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
