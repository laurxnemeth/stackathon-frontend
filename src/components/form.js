import { TextField, Button } from '@material-ui/core'
import useForm from './customHooks'
import { Redirect } from 'react-router'
import React, { useState, useEffect } from 'react'

function Form(props) {
  const [form, setForm] = useState({})

  const { inputs, handleInputChange, handleSubmit } = useForm(setForm)

  const wordTypes = props.game.data.wordTypes
  const excerpt = props.game.data.gameExcerpt
  const wordTypeArr = objArr(wordTypes)

  if (!Object.keys(form).length) {
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
  } else {
    return (
      <Redirect
        to={{
          pathname: '/results',
          form: form,
          excerpt: excerpt,
        }}
      />
    )
  }
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
