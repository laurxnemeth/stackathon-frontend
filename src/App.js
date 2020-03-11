import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import start from './startGame.png'
import Routes from './routes'
// eslint-disable-next-line
import './App.css'

function App(props) {
  // const [gameData, setGameData] = useState({ wordType: {}, excerpt: ""}); //actual game
  // const [game, toggle] = useState(false); //on or off
  // const [excerpt, setExcerpt] = useState("") // final excerpt that I show the user
  // const [userInput, setUserInput] = useState({}) // what the user gives me

  return (
    <div className="App">
      <Routes />
      <header className="App-header">
        <Router>
          <Link to="/game">
            <img
              src={start}
              className="App-logo"
              alt="start game"
              data-testid="startGame"
            />
          </Link>
        </Router>
        <div>
          <p>Hello!</p>
        </div>
      </header>
    </div>
  )
}

export default App
