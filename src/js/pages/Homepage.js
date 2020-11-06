import React from 'react'
import Header from '../components/Header'
import ItemCard from '../components/ItemCard'

import items from '../../datasource/items.json'
import StateProvider from '../StateProvider'
import DispatchProvider from '../DispatchProvider'

import { Tabs, Tab } from 'sancho'

import '../../styles/Home.css'

function Homepage() {

  const [index, setIndex] = React.useState(0)
  const [itemSwitch, switchItems] = React.useState(true)

  return (
    <div>
      <Header />
      <Tabs value={index} onChange={i => setIndex(i)} onClick={() => switchItems(!itemSwitch)} >
        <Tab id="you">Featured Items</Tab>
        <Tab id="sports">Individual Items</Tab>
      </Tabs>
      <div id="item-container">
        {itemSwitch ?
          <StateProvider.Consumer>
            {(state) => (
              <DispatchProvider.Consumer>
                {(dispatch) => {
                  return items.featuredItems.map((val, i) => (
                    <ItemCard key={i} state={state} dispatch={dispatch} name={val.name} description={val.description} imageSrc={val.imageSrc} />
                  ))
                }}
              </DispatchProvider.Consumer>
            )}
          </StateProvider.Consumer> :
          <StateProvider.Consumer>
            {(state) => (
              <DispatchProvider.Consumer>
                {(dispatch) => {
                  return items.individualItems.map((val, i) => (
                    <ItemCard key={i} state={state} dispatch={dispatch} name={val.name} description={val.description} imageSrc={val.imageSrc} />
                  ))
                }}
              </DispatchProvider.Consumer>
            )}
          </StateProvider.Consumer>
        }
      </div>
    </div>
  )
}

export default Homepage
