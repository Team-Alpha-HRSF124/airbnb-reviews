/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';

const moment = require('moment');

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
      {moment(date).format('MMMM YYYY')}
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
      {moment(ownersResponseDate).format('MMMM YYYY')}
    </dt>
    <dt>
      {response}
    </dt>
  </dl>
);

export default ReviewsEntry;
