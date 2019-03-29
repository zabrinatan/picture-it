import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Emotions from './components/Home';motions

const Routes = (
  <Router>
    <div>
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/emotions" component = {Emotions} />
    </div>
  </Router>
)

export default Routes;
