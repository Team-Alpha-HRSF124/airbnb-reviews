/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import Stats from './Stats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {},
      reviews: [],
    };
    this.getListing = this.getListing.bind(this);
  }

  componentDidMount() {
    this.getListing();
  }

  getListing() {
    const endpoint = window.location.pathname;
    let url = '';
    if (endpoint.length === 1) {
      url = '/api/listing/1';
    } else {
      const arr = endpoint.split('/');
      const id = arr[arr.length - 2];
      url = `/api/listing/${id}`;
    }
    axios.get(url)
      .then((listing) => {
        this.setState({ listing: listing.data[0] });
      })
      .catch((err) => {
        throw (err);
      });
  }

  render() {
    const { listing, reviews} = this.state;
    return (
      <div>
        Reviews:
        <Stats listing={listing} />
      </div>
    );
  }
}

export default App;
