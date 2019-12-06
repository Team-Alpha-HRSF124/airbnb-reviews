/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';

const moment = require('moment');

const Crop = styled.img`
  border-radius: 50%;
`;

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
      <Crop src={image} width="50" height="50" alt="" />
    </dt>
    <dt>
      {moment(date).format('MMMM YYYY')}
    </dt>
    <dt>
      {review}
    </dt>
    {ownersName
      ?
      (
        <dl>
          <dt>
            Response from:
            &nbsp;
            {ownersName}
          </dt>
          <dt>
            <Crop src={ownersImage} width="34" height="34" alt="" />
          </dt>
          <dt>
            {moment(ownersResponseDate).format('MMMM YYYY')}
          </dt>
          <dt>
            {response}
          </dt>
        </dl>
      ) : null}
  </dl>
);

export default ReviewsEntry;
