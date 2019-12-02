/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';

const Stats = ({ listing: { id, title, avg_rating } }) => (
  <ul>
    <li>ID: {id}</li>
    <li>Title: {title}</li>
    <li>* {avg_rating}</li>
    <li>communication: {communication}</li>
    <li>cleanliness: {cleanliness}</li>
    <li>hospitality: {hospitality}</li>
    <li>stylish: {stylish}</li>
    <li>sparkling clean: {sparkling_clean}</li>
    <li>quick responses: {quick_responses}</li>
    <li>amazing amenities: {amazing_amenities}</li>
    <li>Rating: {counts}</li>
  </ul>
);

export default Stats;
