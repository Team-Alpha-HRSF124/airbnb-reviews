/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import ReviewsEntry from './ReviewsEntry.jsx';

const Reviews = ({ reviews }) => (
  <ul>
    {reviews.map((review, idx) => {
      return <ReviewsEntry key={idx} review={review} />;
    })}
  </ul>
);

export default Reviews;
