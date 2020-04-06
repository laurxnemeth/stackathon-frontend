import React from 'react'
import { Redirect } from 'react-router'
import { Button } from 'grommet'

export function Results(props) {
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
        <p id="result">{newExcerpt(form, excerpt)}</p>
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

//helpers
export const newExcerpt = (obj, str) => {
  const arr = str.split(/ |\n/)
  const regex = /{[A-Z].*[A-Z]}/
  for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i])) {
      let substring = arr[i].substring(1, arr[i].length - 1)
      for (let key in obj) {
        const noSpacesKey = key.replace(' ', '')
        if (noSpacesKey.toUpperCase().includes('adverb') && obj[key] !== '') {
          arr[i] = obj[key].toUpperCase()
          obj[key] = ''
          break
        } else if (
          noSpacesKey.toUpperCase().includes(substring) &&
          obj[key] !== ''
        ) {
          arr[i] = obj[key].toUpperCase()
          obj[key] = ''
          break
        }
      }
    }
  }
  return arr.join(' ')
}
