import React from 'react'
import { Game, Home, Results } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/game" component={Game} />
        <Route path="/home" component={Home} />
        <Route path="/results" component={Results} />
      </Switch>
    </Router>
  )
}
