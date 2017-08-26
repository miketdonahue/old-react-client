import React, { Component } from 'react';
import { shape } from 'prop-types';
import Spinner from './Spinner';

// This is a high-order component
// Captures a behavior; When it is rendered, fetches component asked for
// then it renders itself
class AsyncRoute extends Component {
  state = {
    loaded: false,
  }

  componentDidMount() {
    this.props.loadingPromise.then((module) => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }

  component = null;

  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />;
    }

    return <Spinner />;
  }
}

AsyncRoute.propTypes = {
  props: shape().isRequired,
  loadingPromise: shape().isRequired, // This loadingPromise returns a React Component
};

export default AsyncRoute;
