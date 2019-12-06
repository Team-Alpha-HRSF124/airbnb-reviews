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

const NumFont = styled.span`
font-family: 'Varela Round', sans-serif;
size: 14px;
color: #484848; 
`;

const ReviewsHeader = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 20px
grid-row-gap: 20px
justify-items: stretch
align-items: start
`;

const OuterContainer = styled.div`
display: grid;
width: 600px;
height: 200px;
grid-template-rows: 49% 2% 49%;
padding: 10px;
border: 1px solid #ededed;
border-radius: 10px;
-moz-box-shadow: 0 0 3px #ccc;
-webkit-box-shadow: 0 0 3px #ccc;
box-shadow: 0 0 3px #ccc;
`;

const MidLine = styled.div`
border-bottom: 1px solid #BEBEBE;
`;

const InnerContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
font-family: 'Varela Round', sans-serif;
padding: 10px;
size: 18px;
color: #484848; 
`;

const Stats = ({
  listing: {
    avg_rating, communication, cleanliness,
    hospitality, stylish, sparkling_clean, quick_responses,
    amazing_amenities, counts, check_in, accuracy, value, location,
  },
}) => (
  <WrappReviews>
    <Reviews>Reviews</Reviews>
    <IconContext.Provider value={{ color: '#008489' }}>
      <ReviewsHeader>
        <div>
          <IoMdStar />
          <NumFont>
            {avg_rating}
          </NumFont>
        </div>
        <div>
          <NumFont>
            <div>
              {counts}
              &nbsp;
                Reviews
            </div>
          </NumFont>
        </div>
      </ReviewsHeader>
    </IconContext.Provider>
    <OuterContainer>
      <InnerContainer>
        <div>Check-in: {check_in}</div>
        <div>Accuracy: {accuracy}</div>
        <div>Communication: {communication}</div>
        <div>Cleanliness: {cleanliness}</div>
        <div>Location: {location}</div>
        <div>Value: {value}</div>
      </InnerContainer>
      <MidLine />
      <InnerContainer>
        <div>Hospitality: {hospitality}</div>
        <div>Stylish space: {stylish}</div>
        <div>Sparkling clean: {sparkling_clean}</div>
        <div>Quick responses: {quick_responses}</div>
        <div>Amazing amenities: {amazing_amenities}</div>
      </InnerContainer>
    </OuterContainer>
  </WrappReviews>
);

export default Stats;
