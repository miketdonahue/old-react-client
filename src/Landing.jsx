import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { shape, string, func } from 'prop-types';
import { setSearchTerm } from './actionCreators';

// Do not pass around the entire state. Just what you need.
const mapStateToProps = state => ({ searchTerm: state.searchTerm });

// This passes events that happen in the UI which translate to actions in Redux
// Passing events to Redux
const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    // Dispatched to redux
    dispatch(setSearchTerm(event.target.value));
  },
});

class Landing extends Component {
  goToSearch = (event) => {
    event.preventDefault();
    this.props.history.push('/search'); // All routes have history injected on props
  };

  render() {
    return (
      <div className="landing">
        <h1>TV Shows</h1>
        <form onSubmit={this.goToSearch}>
          <input type="text" placeholder="Search" value={this.props.searchTerm} onChange={this.props.handleSearchTermChange} />
        </form>
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

Landing.defaultProps = {
  searchTerm: '',
  handleSearchTermChange: function noop() {},
  history: {},
};

Landing.propTypes = {
  searchTerm: string,
  handleSearchTermChange: func,
  history: shape(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
