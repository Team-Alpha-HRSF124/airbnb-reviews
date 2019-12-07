/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import Stats from './Stats.jsx';
import Reviews from './Reviews.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {},
      reviews: [],
      renderedReviews: [],
      serchedTerm: '',
      start: 0,
      end: 7,
      max: 0,
      showBack: false,
      showNext: true,
    };
    this.getListing = this.getListing.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filterBySearchedTerm = this.filterBySearchedTerm.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.pervPage = this.pervPage.bind(this);
  }

  componentDidMount() {
    this.getListing();
  }

  getListing() {
    const endpoint = window.location.pathname;
    let url = '';
    if (endpoint.length === 1) {
      url = 'http://localhost:3000/api/listing/1';
    } else {
      const arr = endpoint.split('/');
      const id = arr[arr.length - 2];
      url = `http://localhost:3000/api/listing/${id}`;
    }
    axios.get(url)
      .then((results) => {
        const reviewsLength = results.data.reviews.length;
        const totalPage = Math.ceil(reviewsLength / 7);
        const max = totalPage * 7;
        let showNext = true;
        if (reviewsLength < 7) {
          showNext = false;
        }
        this.setState({
          listing: results.data.stats[0],
          reviews: results.data.reviews,
          renderedReviews: results.data.reviews.slice(0, 7),
          max,
          showNext,
        });
      })
      .catch((err) => {
        throw (err);
      });
  }

  handleSearch(searchedTerm) {
    this.setState({ searchedTerm });
  }

  filterBySearchedTerm() {
    const { reviews, searchedTerm, renderedReviews } = this.state;
    if (searchedTerm) {
      const searchedReviewsArr = [];
      for (let i = 0; i < reviews.length; i += 1) {
        const reviewWordsArr = reviews[i].review.split(' ');
        for (let j = 0; j < reviewWordsArr.length; j += 1) {
          if (reviewWordsArr[j].toLowerCase() === searchedTerm.toLowerCase()) {
            searchedReviewsArr.push(reviews[i]);
          }
        }
      }
      return searchedReviewsArr;
    }
    return renderedReviews;
  }

  nextPage() {
    const { reviews, start, end, max } = this.state;
    if (start < max) {
      const nextStart = start + 7;
      const nextEnd = end + 7;
      const renderedReviews = reviews.slice(nextStart, nextEnd);
      this.setState({
        start: nextStart,
        end: nextEnd,
        renderedReviews,
        showBack: true,
      });
    } else {
      this.setState({ showNext: false });
    }
  }

  pervPage() {
    const { reviews, start, end } = this.state;
    let showBack = true;
    const prevStart = start - 7;
    const prevEnd = end - 7;
    if (prevStart === 0) {
      showBack = false;
    }
    const renderedReviews = reviews.slice(prevStart, prevEnd);
    this.setState({ renderedReviews, showBack });
  }

  render() {
    const { listing, showBack, showNext } = this.state;
    return (
      <div>
        <Stats listing={listing} />
        <Search handleSearch={this.handleSearch} />
        <Reviews reviews={this.filterBySearchedTerm()} />
        {showBack ? <button type="button" onClick={this.pervPage}>Back</button> : null}
        {showNext ? <button type="button" onClick={this.nextPage}>Next</button> : null}
      </div>
    );
  }
}

export default App;
