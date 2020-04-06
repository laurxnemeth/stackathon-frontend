import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import start from '../startGame.png'

function Home(props) {
  return (
    <div className="home">
      <Router>
        <a href="/game">
          <img
            src={start}
            alt="start game"
            data-testid="startGame"
            id="startgame"
          />
        </a>
      </Router>
    </div>
  )
}

export default Home
