import React, { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core'

function Form(props) {
  const wordTypes = props.game.data.wordTypes

  return (
    <div>
      {console.log(wordTypes)}
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </div>
  )
}

export default Form
