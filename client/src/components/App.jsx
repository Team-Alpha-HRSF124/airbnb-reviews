import React from 'react';
// import Stats from './Stats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: [],
      reviews: [],
    };
  }

  render() {
    return (
      <div>
        Hello from App.jsx
      </div>
    );
  }
}

export default App;
