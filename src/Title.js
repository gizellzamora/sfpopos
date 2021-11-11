import React from 'react'
import logo from './logo.svg';
import './App.css';
import './Title.css';
import { NavLink } from 'react-router-dom'

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>SFPOPOS</h1>
        <div className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</div>

        <div>
          <NavLink to="/">List</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

      </header>
    </div>
  )
}


export default Title
