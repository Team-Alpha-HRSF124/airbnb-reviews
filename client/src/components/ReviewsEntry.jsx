/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import ShowMoreText from 'react-show-more-text';

const moment = require('moment');

const Wrapper = styled.div`
  display: grid;
  width: 600px;
`;

const Crop = styled.img`
  border-radius: 50%;
`;

const User = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  width: 350px
`;

const NameDate = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  height: 50px;
`;

const Review = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  border-bottom: 1px solid rgb(235, 235, 235);
  padding: 9px;
`;

const OwnersRes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const DateFont = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: regular;
  size: 10px;
  color: #484848;
`;

const NameReviewFont = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  size: 16px;
  color: #484848; 
`;

const OwnersResFont = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: light;
  size: 12px;
  color: #484848; 
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
  <Wrapper>
    <dl>
      <User>
        <div>
          <Crop src={image} width="50" height="50" alt="" />
        </div>
        <NameDate>
          <div>
            <NameReviewFont>
              {name}
            </NameReviewFont>
          </div>
          <div>
            <DateFont>
              {moment(date).format('MMMM YYYY')}
            </DateFont>
          </div>
          </NameDate>
        </User>
        <Review>
          <div>
            <ShowMoreText
              lines={3}
              more='Read more'
              anchorClass=''
              expanded={false}
            >
              <NameReviewFont>
                {review}
              </NameReviewFont>
            </ShowMoreText>
          </div>
          {ownersName
            ?
            (
              <OwnersRes>
                <div>
                  <dt>
                    <Crop src={ownersImage} width="34" height="34" alt="" />
                  </dt>
                  <dt>
                    <OwnersResFont>
                      Response from:
                      &nbsp;
              <NameReviewFont>
                        {ownersName}
                      </NameReviewFont>
                    </OwnersResFont>
                  </dt>
                  <dt>
                    {response}
                  </dt>
                  <dt>
                    <DateFont>
                      {moment(ownersResponseDate).format('MMMM YYYY')}
                    </DateFont>
                  </dt>
                </div>
              </OwnersRes>)
            : null}
        </Review>
      </dl>
    </Wrapper>
  );

export default ReviewsEntry;

// class ReviewsEntry extends React.Component {
//   constructor(props) {
//     super(props);

//     this.executeOnClick = this.executeOnClick.bind(this);
//   }

//   executeOnClick(isExpanded) {
//     console.log(isExpanded);
//   }

//   render() {
//     return(
// <Wrapper>
//   <dl>
//     <User>
//     <div>
//       <Crop src={this.props.review.image} width="50" height="50" alt="" />
//     </div>
//     <NameDate>
//     <div>
//       <NameReviewFont>
//       {this.props.review.name}
//     </NameReviewFont>
//     </div>
//     <div>
//       <DateFont>
//       {moment(this.props.review.date).format('MMMM YYYY')}
//       </DateFont>
//     </div>
//     </NameDate>
//     </User>
//     <Review>
//       <div>
//       <ShowMoreText
//         lines={3}
//         more='Show more'
//         less='Show less'
//         anchorClass=''
//         onClick={this.executeOnClick}
//         expanded={false}
//             >
//         <NameReviewFont>
//         {this.props.review.review}
//         </NameReviewFont>
//         </ShowMoreText>
//       </div>
//       {this.props.review.ownersName
//         ?
//         (<OwnersRes>
//           <div>
//             <dt>
//               <Crop src={this.props.review.ownersImage} width="34" height="34" alt="" />
//             </dt>
//             <dt>
//               <OwnersResFont>
//               Response from:
//               &nbsp;
//               {this.props.review.ownersName}
//               </OwnersResFont>
//             </dt>
//             <dt>
//               <NameReviewFont></NameReviewFont>
//               {this.props.review.response}
//             </dt>
//             <dt>
//             <DateFont>
//               {moment(this.props.review.ownersResponseDate).format('MMMM YYYY')}
//               </DateFont>
//             </dt>
//           </div>
//       </OwnersRes>)
//         : null}
//     </Review>
//   </dl>
//   </Wrapper>
//     )
//   }
// }
