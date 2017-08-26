import React from 'react';
import { connect } from 'react-redux';
import { shape, string, arrayOf } from 'prop-types';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = props => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(show => `${show.title} ${show.description}`.toLowerCase().indexOf(props.searchTerm.toLowerCase()) >= 0)
        .map(show => <ShowCard key={show.imdbID} {...show} />)
      }
    </div>
  </div>
);

Search.propTypes = {
  shows: arrayOf(shape({
    title: string,
    description: string,
    year: string,
    imdbID: string,
    poster: string,
    trailer: string,
  })),
  searchTerm: string,
};

Search.defaultProps = {
  shows: [],
  searchTerm: '',
};

// This returns an object that gets passed to 'connect' which passes
// the object to 'Search' as props
const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

export default connect(mapStateToProps)(Search);
