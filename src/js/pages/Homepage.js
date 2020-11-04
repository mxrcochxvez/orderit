import React from 'react'
import Header from '../components/Header'
import ItemCard from '../components/ItemCard'
import OrderingMenu from '../components/OrderingMenu'

import items from '../../datasource/items.json'
import StateProvider from '../StateProvider'
import DispatchProvider from '../DispatchProvider'

function Homepage() {

  return (
    <div>
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
    </div>
  )
}

export default Homepage
