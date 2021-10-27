import React from 'react'
import Navbar from './componts/Navbar'
import Home from './componts/Home'
import BeersDisply from './componts/BeersDisplay'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/beers' component={BeersDisply}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App


