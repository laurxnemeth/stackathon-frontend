import React, { useState, useEffect } from 'react';
import start from '../startGame.png';
import merriamWebster from '../merriam-webster.png';

function Home(props) {
  return (
    <div id="homepage">
      <div className="home">
        <a href="/game">
          <img
            src={start}
            alt="start game"
            data-testid="startGame"
            id="startgame"
          />
        </a>
      </div>
      <div id="merriam">
        <h5>Built using</h5>
        <img src={merriamWebster} alt="merriam-webster logo" />
      </div>
    </div>
  );
}

export default Home;
