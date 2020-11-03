import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../components/Header'
import ItemCard from '../components/ItemCard'
import NavMenu from '../components/NavMenu'
import OrderingMenu from '../components/OrderingMenu'

import items from '../../datasource/items.json'
import StateProvider from '../StateProvider'
import DispatchProvider from '../DispatchProvider'

function Homepage() {
  return (
    <Router>
      <NavMenu />
      <Header />
      <OrderingMenu />
      <StateProvider.Consumer>
        {(state) => (
          <DispatchProvider.Consumer>
            {(dispatch) => {
              return items.map((val, i) => (
                <ItemCard key={i} state={state} dispatch={dispatch} name={val.name} description={val.description} imageSrc={val.imageSrc} />
              ))
            }}
          </DispatchProvider.Consumer>
        )}
      </StateProvider.Consumer>
    </Router>
  )
}

export default Homepage
