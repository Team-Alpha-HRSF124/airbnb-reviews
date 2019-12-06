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
      serchedTerm: '',
    };
    this.getListing = this.getListing.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filterBySearchedTerm = this.filterBySearchedTerm.bind(this);
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
        this.setState({ listing: results.data.stats[0], reviews: results.data.reviews });
      })
      .catch((err) => {
        throw (err);
      });
  }

  handleSearch(searchedTerm) {
    this.setState({ searchedTerm });
  }

  filterBySearchedTerm() {
    const { reviews, searchedTerm } = this.state;
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
    return reviews;
  }

  render() {
    const { listing } = this.state;
    return (
      <div>
        <Stats listing={listing} />
        <Search handleSearch={this.handleSearch} />
        <Reviews reviews={this.filterBySearchedTerm()} />
      </div>
    );
  }
}

export default App;
