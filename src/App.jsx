import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { shape, number } from 'prop-types';
import { Provider } from 'react-redux';
import AsyncRoute from './AsyncRoute';
import store from './store';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Switch>
        <Route exact path="/" component={props => <AsyncRoute props={props} loadingPromise={import('./Landing')} />} />
        <Route
          path="/search"
          component={props => (
            <AsyncRoute loadingPromise={import('./Search')} props={Object.assign({ shows: preload.shows }, props)} />
          )}
        />
        <Route
          path="/details/:id"
          component={(props) => {
            const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
            return (
              <AsyncRoute
                loadingPromise={import('./Details')}
                props={Object.assign({ show: selectedShow }, props)}
              />
            );
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Provider>
);

App.defaultProps = {
  match: {},
};

App.propTypes = {
  match: shape({
    params: shape({
      id: number,
    }),
  }),
};

export default App;
