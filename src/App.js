import React, { useState, useEffect } from 'react';
import start from './startGame.png'
// eslint-disable-next-line
import axios from 'axios';
import './App.css';

const SERVER_PATH = 'http://localhost:2020';

function App(props){

const [gameData, setGameData] = useState({ wordType: {}, excerpt: ""}); //actual game
const [game, toggle] = useState(false); //on or off
const [excerpt, setExcerpt] = useState("") // final excerpt that I show the user
const [userInput, setUserInput] = useState({}) // what the user gives me

async function fetchData(){

  const res = await axios(SERVER_PATH + "/api/madlibs")
  setGameData(res)
}

  useEffect(() => {
    fetchData();
  }, []);

//make button to toggle
//on click, toggle true
//inside of the fetch data useEffect, only fetch data if toggle is true
//then, build a form with the fields received from the backend
//font playfair display

    return (
			<div className="App">
				<header className="App-header">
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={start} className="App-logo" alt="start game" />
					</a>
				</header>
			</div>
		);
}

export default App;
