/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';

const ReviewsEntry = ({
  review: {
    users_id,
    date,
    review,
  },
}) => (
  <dl>
    <dt>
      Username:
      {users_id}
    </dt>
    <dt>
      {date}
    </dt>
    <dt>{review}</dt>
  </dl>
);

export default ReviewsEntry;
