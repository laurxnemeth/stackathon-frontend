import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Routes from './routes';
import { Navbar } from './components';
// eslint-disable-next-line
import './App.css';

function App(props) {
  return (
    <div>
      <Navbar id="navbar" />
      <div className="App">
        <Routes />
      </div>
    </div>
  );
}

export default App;
