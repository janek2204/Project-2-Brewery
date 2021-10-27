import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


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
      <div className='container' id='container'>
        <div className='tile is-ancestor is-flex-wrap-wrap is-flex-direction-row'>
          {beers.map(beer => {
            return (
              <div key={beer.id} className="tile is-3 is-parent ">
                <Link className="tile is-child" id='background' to={`/beers/${beer.id}`}>
                  <div className="card-image">
                    <figure className="image is-3by5">
                      <img id='image' src={beer.image_url} alt={beer.name} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media-content">
                      <p className="title text">{beer.name}</p>
                      <br />
                      <p className="subtitle is-6 text">{beer.tagline}</p>
                    </div>
                    <div className="content subtitle is-6 text">
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