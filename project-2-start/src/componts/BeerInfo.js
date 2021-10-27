import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const BeerInfo = () => {
  const [food,setFood] = useState([])
  const [beers, setBeers] = useState([])
  const [yeast,setyeast] = useState()
  const [malt,setMalt] = useState([])
  const [hops,setHops] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
      setBeers(data[0])
      setFood(data[0].food_pairing)
      setyeast(data[0].ingredients.yeast)
      setMalt(data[0].ingredients.malt)
      setHops(data[0].ingredients.hops)
    }
    getData()
  }, [id])
  
  return (
    <>
      <img src={beers.image_url}></img>
      <h1>{beers.name}</h1>
      <br />
      <h1>{beers.description}</h1>
      <br />
      <h1>{beers.abv}%</h1>
      <br />
      <h1>Brewery tips :<br />{beers.brewers_tips}</h1>
      <br></br>
      <div>
        <h1>Food paring:</h1>
        {food.map(item => {
          return (
            <p key={beers.id}>{item}</p>)
        })}
      </div>
      <br></br>
      <div>
        <h1>{yeast}</h1>
        <br/>
        <h1>Malt:</h1>
        {malt.map(item => {
          return (
            <p key={beers.id}>{item.name}</p>)
        })}
        <br/>
        <h1>Hops:</h1>
        {hops.map(item => {
          return (
            <p key={beers.id}>{item.name}</p>)
        })}
      </div>
    </>
  )
}

export default BeerInfo