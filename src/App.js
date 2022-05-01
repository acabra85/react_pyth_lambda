import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

import {API} from 'aws-amplify'

function App() {
  const [greeting, setGreeting] = useState(null)
  
  async function getData() {
    const data = await API.get('reactpythlambda', '/greetingapi', {
      headers : {
        'Content-Type': 'application/json'
      }
    });
    setGreeting(data.message)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>---[{greeting}]---</h1>
      </header>
    </div>
  );
}

export default App;
