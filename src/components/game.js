import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SERVER_PATH = 'http://localhost:2020'

function Game(props) {
  const [gameData, setGameData] = useState('') //actual game

  async function fetchData() {
    const res = await axios(SERVER_PATH + '/api/madlibs')
    setGameData(res)
  }

  function getWordTypes() {}

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>{gameData.data}</h1>
    </div>
  )
}

export default Game
