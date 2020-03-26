import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Routes from './routes'
import { Home } from './components'
import { Grommet } from 'grommet'
// eslint-disable-next-line
import './App.css'

function App(props) {
  return (
    <div className="App">
      <Grommet>
        <Routes />
      </Grommet>
    </div>
  )
}

export default App
