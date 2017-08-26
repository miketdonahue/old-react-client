import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shape, string, func } from 'prop-types';
import { getApiDetails } from './actionCreators';
import Header from './Header';
import Spinner from './Spinner';

class Details extends Component {
  componentDidMount() {
    // the conditional ensures rating is only gotten from API once per TV show
    // once we have the rating, we don't need to request it again and again
    if (!this.props.rating) {
      this.props.getApiData();
    }
  }

  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let ratingComponent;

    // Do not ever create a component within a render function
    // Creating and destroying on every render, incredibly slow
    // i.e. RatingComponent = () => <Spinner />
    if (this.props.rating) {
      ratingComponent = <h3>{this.props.rating}</h3>;
    } else {
      ratingComponent = <Spinner />;
    }

    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img src={`/public/images/posters/${poster}`} alt={`Poster for ${title}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe title={`Trailer for ${title}`} src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder="0" />
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  show: shape({
    title: string,
    description: string,
    year: string,
    imdbID: string,
    poster: string,
    trailer: string,
  }),
  rating: string,
  getApiData: func,
};

Details.defaultProps = {
  show: [],
  rating: '',
  getApiData: function noop() {},
};

// 'ownProps' are the props passed down from the parent
const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {};

  return {
    rating: apiData.rating,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getApiData() {
    dispatch(getApiDetails(ownProps.show.imdbID));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
