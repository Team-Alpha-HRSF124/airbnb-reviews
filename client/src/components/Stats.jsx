/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
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

const Items = styled.span`
  flex-grow: 2;
`;

const Stats = ({
  listing: {
    id, title, avg_rating, communication, cleanliness,
    hospitality, stylish, sparkling_clean, quick_responses, amazing_amenities, counts,
  },
}) => (
  <WrappReviews>
    <Reviews>Reviews</Reviews>
    <IconContext.Provider value={{ color: 'green' }}>
      <li> <IoMdStar /> {avg_rating}</li>
    </IconContext.Provider>
      <li>ID: {id}</li>
      <li>Title: {title}</li>
      <li>{counts} Reviews</li>
      <li>communication: {communication}</li>
      <li>cleanliness: {cleanliness}</li>
      <li>hospitality: {hospitality}</li>
      <li>stylish: {stylish}</li>
      <li>sparkling clean: {sparkling_clean}</li>
      <li>quick responses: {quick_responses}</li>
      <li>amazing amenities: {amazing_amenities}</li>
  </WrappReviews>
);

export default Stats;
