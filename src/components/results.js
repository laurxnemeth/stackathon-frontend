import React from 'react'
import { Redirect } from 'react-router'
import { Button } from 'grommet'

function Results(props) {
  const excerpt = props.location.excerpt
  const form = props.location.form

  const reload = () => {
    window.location.reload(false)
  }

  if (!props.location.excerpt && !props.location.excerpt) {
    return <Redirect to={'/game'} />
  } else {
    return (
      <div>
        <p id="result">{result(form, excerpt)}</p>
        <Button
          className="button"
          primary
          color="#ECBDBD"
          onClick={reload}
          label="Play again?"
        />
      </div>
    )
  }
}

export default Results

//helpers
const result = (obj, str) => {
  const arr = str.split(/ |\n/)
  const regex = /[A-Z].*[A-Z]/
  console.log('ARR:', arr)
  for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i])) {
      for (let key in obj) {
        const noSpaces = key.replace(' ', '')
        if (noSpaces.toUpperCase().includes(arr[i]) && obj[key] !== '') {
          arr[i] = obj[key].toUpperCase()
          obj[key] = ''
        }
      }
    }
  }
  return arr.join(' ')
}
