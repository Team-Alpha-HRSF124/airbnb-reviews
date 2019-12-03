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
    axios.get('/api/listing/1')
      .then((listing) => {
        this.setState({ listing: listing.data[0] });
      })
      .catch((err) => {
        throw (err);
      });
  }

  render() {
    const listing = this.state.listing;
    return (
      <div>
        Reviews:
        <Stats listing={listing} />
      </div>
    );
  }
}

export default App;
