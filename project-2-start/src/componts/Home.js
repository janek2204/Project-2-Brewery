import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='imag'>
      <section className='hero is-fullheight-with-navbar'>
        <div className="hero-body">
          <div className='container'>
            <div className='image2'></div>
            <Link to='/beers'><button className='button is-link is-fullwidth is-rounded'>Discover Brewdog!</button></Link>
          </div>
        </div>
      </section>
    </div>
    
  )
}


export default Home