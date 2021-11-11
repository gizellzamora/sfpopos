import React from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './Title';
import POPOSList from './POPOSList';
import footer from './footer';
import { HashRouter as Router, Route } from 'react-router-dom'
import About from './About'

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSList} />
        <Route path="/about" component={About} />
      </div>

    </Router>
  );
}


export default App;
