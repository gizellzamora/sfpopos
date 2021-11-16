import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom'

import Title from './Title';
import POPOSList from './POPOSList';
import footer from './footer';
import { HashRouter as Router, Route } from 'react-router-dom'
import About from './About'

function App() {
  return (
      <div className="App">
        <Title />
        <Outlet />
      </div>
  );
}


export default App;
