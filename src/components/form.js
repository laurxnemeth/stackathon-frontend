import useForm from './customHooks';
import { Redirect } from 'react-router';
import React, { useState, useEffect } from 'react';

function GameForm(props) {
  const [form, setForm] = useState({});

  const { inputs, handleInputChange, handleSubmit } = useForm(setForm);

  const wordTypes = props.game.data.wordTypes;
  const excerpt = props.game.data.gameExcerpt;
  const wordTypeArr = objArr(wordTypes);

  const reload = () => {
    window.location.reload(false);
  };

  if (!Object.keys(form).length) {
    return (
      <div id="form">
        <form onSubmit={handleSubmit}>
          <div id="words">
            {wordTypeArr.map((e, idx) => {
              return (
                <label key={idx} className="formField">
                  {e}
                  <input
                    placeholder="your word here!"
                    name={e + idx}
                    value={inputs.e}
                    onChange={handleInputChange}
                  />
                </label>
              );
            })}
          </div>
          <div id="buttons">
            <div>
              <button type="submit" value="submit">
                Done!
              </button>
            </div>
            <div id="spacebetweenbuttons"></div>
            <div>
              <button onClick={reload}>I want other words!</button>
            </div>
          </div>
        </form>
        <div id="invisible"></div>
      </div>
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: '/results',
          form: form,
          excerpt: excerpt,
        }}
      />
    );
  }
}

export default GameForm;

//helper
const objArr = (obj) => {
  let arr = [];
  for (let key in obj) {
    for (let i = 0; i < obj[key]; i++) {
      arr.push(key);
    }
  }
  return arr;
};
