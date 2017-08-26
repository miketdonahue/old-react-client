import React, { Component } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  color: black;
  text-decoration: none;
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class ShowCard extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Wrapper to={`/details/${this.props.imdbID}`}>
        <Image src={`/public/images/posters/${this.props.poster}`} alt={`${this.props.title} Show Poster`} />

        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Wrapper>
    );
  }
}

ShowCard.propTypes = {
  imdbID: string.isRequired,
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
};

export default ShowCard;
