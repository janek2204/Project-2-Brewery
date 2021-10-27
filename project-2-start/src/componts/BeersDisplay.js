import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BeerInfo from './BeerInfo'


const BeersDisply = () => {

  const [beers, setBeers] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://api.punkapi.com/v2/beers')
      setBeers(data)
    }
    getData()
  }, [])

  return (
    <>
      <div className='container'>
        <div className='tile is-ancestor is-flex-wrap-wrap is-flex-direction-row'>
          {beers.map(beer => {
            return (
              <div key={beer.id} className="tile is-3 is-parent ">
                <Link className="tile is-child has-background-info-dark has-text-black" to={`/beers/${beer.id}`}>
                  <div className="card-image">
                    <figure className="image is-2by3">
                      <img src={beer.image_url} alt={beer.name} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media-content">
                      <p className="title is-4 has-text-black">{beer.name}</p>
                      <br />
                      <p className="subtitle is-5 has-text-black">{beer.tagline}</p>
                    </div>
                    <div className="content subtitle is-5 has-text-black">
                      <br />
                      <time>First brewed in: {beer.first_brewed}</time>
                    </div>
                  </div>
                </Link>
              </div>


            )
          })
          }

        </div>
      </div >
    </>
  )
}

export default BeersDisply