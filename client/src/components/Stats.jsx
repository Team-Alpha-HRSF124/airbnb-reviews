/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { IoMdStar } from 'react-icons/io';
import { IconContext } from 'react-icons';

const WrappReviews = styled.ul`
  top:400px;
  padding-top:20px;
`;

const Reviews = styled.h2`
font-family: 'Varela Round', sans-serif;
size: 24px;
color: #484848; 
`;

const ReviewsHeader = styled.div`
  display: grid;
  grid-template-columns: .5fr .5fr 4fr;
  grid-auto-rows: 35px;
  border: #333 1px solid;
  border-radius: 10px;
`;

const Items = styled.span`
  flex-grow: 2;
`;

const Stats = ({
  listing: {
    id, title, avg_rating, communication, cleanliness,
    hospitality, stylish, sparkling_clean, quick_responses, amazing_amenities, counts, check_in, accuracy, value, location,
  },
}) => (
  <WrappReviews>
    <Reviews>Reviews</Reviews>
    <IconContext.Provider value={{ color: '#008489' }}>
      <ReviewsHeader>
        <div>
          <IoMdStar />
          {avg_rating}
        </div>
        <div>
          <div>
            {counts}
            Reviews
          </div>
        </div>
      </ReviewsHeader>
    </IconContext.Provider>
      <div>ID: {id}</div>
      <div>Title: {title}</div>
      <div>check-in: {check_in}</div>
      <div>accuracy: {accuracy}</div>
      <div>communication: {communication}</div>
      <div>cleanliness: {cleanliness}</div>
      <div>location: {location}</div>
      <div>value: {value}</div>
      <div>hospitality: {hospitality}</div>
      <div>stylish: {stylish}</div>
      <div>sparkling clean: {sparkling_clean}</div>
      <div>quick responses: {quick_responses}</div>
      <div>amazing amenities: {amazing_amenities}</div>
  </WrappReviews>
);

export default Stats;
