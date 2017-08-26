import React from 'react';
import { connect } from 'react-redux';
import { bool, string, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

const Header = (props) => {
  let utilSpace;

  if (props.showSearch) {
    utilSpace = (
      <input type="text" placeholder="Search" value={props.searchTerm} onChange={props.handleSearchTermChange} />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">
          Back
        </Link>
      </h2>
    );
  }

  return (
    <header>
      <h1>
        <Link to="/">
          TV Shows
        </Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.propTypes = {
  showSearch: bool,
  handleSearchTermChange: func,
  searchTerm: string,
};

Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: function noop() {},
  searchTerm: '',
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
