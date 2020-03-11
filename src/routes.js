import React from 'react'
import { Game } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/game" component={Game} />
      </Switch>
    </Router>
  )
}
