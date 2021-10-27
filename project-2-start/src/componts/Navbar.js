import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/Users/piotr/development/Project 2 movies/project-2-start/src/styles/giphy background .gif'

const Navbar = () => {
  return (
    <nav className='navbar is-flex-direction-row is-black'>
      <div className='navbar-brand '>
        <div className="navbar-item" href="">
          <figure className="image">
            <Link to='/'><img src={logo}/></Link>
          </figure>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            Year
          </a>
          <div className="navbar-item navbar-dropdown">
            <a className="navbar-item">
              1920 - 1940
            </a>
            <a className="navbar-item">
              1940 - 1960
            </a>
            <a className="navbar-item">
              1960 - 1980
            </a>
            <a className="navbar-item">
              1980 - 2000
            </a>
            <a className="navbar-item">
              2000 - present
            </a>
          </div>
        </div>
        <div className='container'>
          <input className="input" type="text" placeholder="Search by title..."></input>
        </div>
      </div>
    </nav >
  )
}

export default Navbar



