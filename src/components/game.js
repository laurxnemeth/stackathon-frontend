import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SERVER_PATH = 'http://localhost:2020'

function Game(props) {
  const [game, setGame] = useState({})

  useEffect(() => {
    async function fetchData() {
      const res = await axios(SERVER_PATH + '/api/madlibs')
      setGame(res)
    }
    fetchData()
  }, [])

  return (
    <div>
      {game.data ? <h1>{game.data.gameExcerpt}</h1> : <h1>Loading...</h1>}
    </div>
  )
}

export default Game
