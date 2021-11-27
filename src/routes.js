import React from 'react';
import { Game, Home, Results, About, Me } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/results" component={Results} />
        <Route path="/about" component={About} />
        <Route path="/thedeveloper" component={Me} />
      </Switch>
    </Router>
  );
}
