import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'





const BeersDisply = () => {

  const [beers, setBeers] = useState([])
  const [filteredBeers, setFilteredBeers] = useState([])

  const handleClick = (event) => {
    const newBeers = beers.filter((beer) => {
      return beer.abv >= parseFloat(event.target.value) && beer.abv <= (parseFloat(event.target.value) + 2)
    })
    setFilteredBeers(newBeers)
  }


  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://api.punkapi.com/v2/beers')
      setBeers(data)
    }
    getData()
  }, [])


  return (
    <>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link text">
          Filter by ABV%
        </a>
        <div className="navbar-item navbar-dropdown" id='filter-item' >
          <option className="navbar-item" value='4' onClick={handleClick}>
            4% - 6%
          </option>
          <option className="navbar-item" value='6' onClick={handleClick}>
            6% - 8%
          </option>
          <option className="navbar-item" value='8' onClick={handleClick}>
            8% - 10%
          </option>
          <option className="navbar-item" value='10' onClick={handleClick}>
            10% -&gt;
          </option>
        </div>
      </div>
      {filteredBeers.length > 0 ?
        <div className='container' id='container'>
          <div className='tile is-ancestor is-flex-wrap-wrap is-flex-direction-row'>
            {filteredBeers.map(beer => {
              return (
                <div key={beer.id} className="tile is-3 is-parent">
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
                        <br /><br />
                        <p>First brewed:<br /> <br />{beer.first_brewed}</p>
                      </div>
                    </div>
                  </Link>
                </div>


              )
            })
            }
          </div>
        </div >
        :
        <div className='container' id='container'>
          <div className='tile is-ancestor is-flex-wrap-wrap is-flex-direction-row'>
            {beers.map(beer => {
              return (
                <div key={beer.id} className="tile is-3 is-parent">
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
                        <br /><br />
                        <p>First brewed:<br /> <br />{beer.first_brewed}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
            }

          </div>
        </div >}
    </>
  )
}

export default BeersDisply