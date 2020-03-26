import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Routes from './routes'
import { Home } from './components'
// eslint-disable-next-line
import './App.css'

function App(props) {
  return (
    <div className="App">
      <Routes />
    </div>
  )
}

export default App
