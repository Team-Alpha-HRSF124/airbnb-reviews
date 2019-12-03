/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';

const Stats = ({
  listing: {
    id, title, avg_rating, communication, cleanliness,
    hospitality, stylish, sparkling_clean, quick_responses, amazing_amenities, counts,
  },
}) => (
  <ul>
    <li>ID: {id}</li>
    <li>Title: {title}</li>
    <li>* {avg_rating}</li>
    <li>{counts} Reviews</li>
    <li>communication: {communication}</li>
    <li>cleanliness: {cleanliness}</li>
    <li>hospitality: {hospitality}</li>
    <li>stylish: {stylish}</li>
    <li>sparkling clean: {sparkling_clean}</li>
    <li>quick responses: {quick_responses}</li>
    <li>amazing amenities: {amazing_amenities}</li>
  </ul>
);

export default Stats;
