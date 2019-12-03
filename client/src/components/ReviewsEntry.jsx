/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';

const ReviewsEntry = ({
  review: {
    name,
    image,
    date,
    review,
    ownersName,
    ownersImage,
    ownersResponseDate,
    response,
  },
}) => (
  <dl>
    <dt>
      {name}
    </dt>
    <dt>
    <img src={image} />
    </dt>
    <dt>
      {date}
    </dt>
    <dt>
      {review}
    </dt>
    <dt>
      Owner:
      {ownersName}
    </dt>
    <dt>
      <img src={ownersImage} />
    </dt>
    <dt>
      {ownersResponseDate}
    </dt>
    <dt>
      {response}
    </dt>
  </dl>
);

export default ReviewsEntry;
