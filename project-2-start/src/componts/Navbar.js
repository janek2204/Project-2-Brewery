import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/Users/piotr/development/Project 2 movies/project-2-start/src/styles/giphy background .gif'

const Navbar = () => {
  return (
    <nav className='navbar is-flex-direction-row is-black'>

      <div className="navbar-item" href="">
        <figure className="image">
          <Link to='/'><img src={logo} /></Link>
        </figure>
      </div>
      <div className="navbar-item navbar-end has-dropdown is-hoverable">
        <a className="navbar-link">
          Filter by ABV%
        </a>
        <div className="navbar-item navbar-dropdown">
          <a className="navbar-item">
            4% - 6%
          </a>
          <a className="navbar-item">
            6% - 8%
          </a>
          <a className="navbar-item">
            8% - 10%
          </a>
          <a className="navbar-item">
            10% -&gt;
          </a>

        </div>
      </div>

    </nav >
  )
}

export default Navbar



