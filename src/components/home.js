import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import start from '../startGame.png'

function Home(props) {
  return (
    <Router>
      <Link to="/game">
        <img src={start} alt="start game" data-testid="startGame" />
      </Link>
    </Router>
  )
}

export default Home
