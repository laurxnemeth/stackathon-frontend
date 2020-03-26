//import { TextField, Button } from '@material-ui/core'
import useForm from './customHooks'
import { Redirect } from 'react-router'
import React, { useState, useEffect } from 'react'
import { FormField, Button, Form, TextInput } from 'grommet'

function GameForm(props) {
  const [form, setForm] = useState({})

  const { inputs, handleInputChange, handleSubmit } = useForm(setForm)

  const wordTypes = props.game.data.wordTypes
  const excerpt = props.game.data.gameExcerpt
  const wordTypeArr = objArr(wordTypes)

  const reload = () => {
    window.location.reload(false)
  }

  if (!Object.keys(form).length) {
    return (
      <div id="form">
        <Form validate="submit" onSubmit={handleSubmit}>
          {wordTypeArr.map((e, idx) => {
            return (
              <FormField
                key={idx}
                label={e}
                name={e + idx}
                value={inputs.e}
                onChange={handleInputChange}
                required={true}
                className="formField"
              >
                <TextInput placeholder="your word here!" />
              </FormField>
            )
          })}
          <div id="buttons">
            <div>
              <Button
                primary
                color="#ECBDBD"
                type="submit"
                label="Done!"
                padding="5px"
              />
            </div>
            <div>
              <Button
                primary
                color="#ECBDBD"
                onClick={reload}
                label="I want other words!"
                padding="5px"
              />
            </div>
          </div>
        </Form>
        <div id="invisible"></div>
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

export default GameForm

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
