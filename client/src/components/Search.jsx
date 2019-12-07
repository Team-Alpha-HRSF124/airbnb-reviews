/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const Icon = styled.span`
font-family: 'Montserrat', sans-serif;
font-weight: light;
size: 12px;
color: #c0c0c0; 
`;

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 2fr;
  grid-template-rows: 1fr;
  width: 350px;
  height: 10px;
  solid #ededed;
  border-radius: 5px;
  -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 3px #ccc;
`;

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
    const { value } = this.state;
    return (
      <Wrapper onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Search review" onChange={this.handleChange} value={value} />
        <Icon>
          <MdSearch>
            <input type="submit" value="" />
          </MdSearch>
        </Icon>
      </Wrapper>
    );
  }
}

export default Search;
