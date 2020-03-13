import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form } from '../components'

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

  return <div>{game.data ? <Form game={game} /> : <h1>Loading...</h1>}</div>
}

export default Game
