import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core'
import useForm from './customHooks'

function Form(props) {
  const formInput = data => {
    console.log('inputs', data)
  }
  const { inputs, handleInputChange, handleSubmit } = useForm(formInput)

  const wordTypes = props.game.data.wordTypes
  const wordTypeArr = objArr(wordTypes)

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        {wordTypeArr.map((e, idx) => {
          return (
            <TextField
              key={idx}
              label={e}
              name={e + idx}
              variant="outlined"
              value={inputs.e}
              onChange={handleInputChange}
            />
          )
        })}
        <Button variant="contained" type="submit">
          See Results!
        </Button>
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
