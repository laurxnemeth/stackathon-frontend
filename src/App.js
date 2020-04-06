import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Routes from './routes'
import { Navbar } from './components'
import { Grommet } from 'grommet'
// eslint-disable-next-line
import './App.css'

const myTheme = {
  global: {
    colors: {
      border: '#fbfaf8',
    },
    focus: {
      border: {
        color: '#fbfaf8',
      },
    },
  },
  button: {
    color: '#383838',
  },
}

function App(props) {
  return (
    <div>
      <Navbar id="navbar" />
      <div className="App">
        <Grommet theme={myTheme}>
          <Routes />
        </Grommet>
      </div>
    </div>
  )
}

export default App
