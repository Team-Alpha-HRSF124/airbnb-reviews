/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import Stats from './Stats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: [],
      reviews: [],
    };
  }

  getListing() {

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
