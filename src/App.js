import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import './Search.css';
import logo from './images/react.svg';
import news from './images/news.png';

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <img className="appLogo" src="data:image/jpeg;base64,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" alt="React Logo" />

          <div className="title">
            <h1>Welcome to </h1>
            <h4>
              <a >  WiziNews 🔥{' '} </a>
            </h4>
          </div>

          <img className="scriptLogo" src={news} alt="Javascript Logo" />
        </div>
        <Search default="bbc-news" />
      </div>
    );
  }
}

export default App;