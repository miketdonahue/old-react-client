import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import Squeeze from './pages/Squeeze';
import Landing from './pages/Landing';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Squeeze} />
      <Route path="/landing" component={Landing} />
    </Switch>
  </BrowserRouter>
);

export default App;
