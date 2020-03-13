import React, { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core'

function Form(props) {
  const wordTypes = props.game.data.wordTypes
  const wordTypeArr = objArr(wordTypes)

  return (
    <div>
      {console.log(wordTypeArr)}
      <form noValidate autoComplete="off">
        {wordTypeArr.map((e, idx) => {
          return (
            <TextField
              key={idx}
              id="outlined-basic"
              label={e}
              variant="outlined"
            />
          )
        })}
      </form>
    </div>
  )
}

export default Form

//helper
const objArr = obj => {
  let arr = []
  for (let key in obj) {
    for (let i = 0; i < obj[key]; i++) {
      arr.push(key)
    }
  }
  return arr
}
