/* eslint-disable react/prop-types */
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    const { handleSearch } = this.props;
    handleSearch(value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Search review" onChange={this.handleChange} />
      </form>
    );
  }
}

export default Search;
