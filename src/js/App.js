import React from 'react'
import Header from './components/Header'
import ItemCard from './components/ItemCard'
import NavMenu from './components/NavMenu'
import OrderingMenu from './components/OrderingMenu'

import reducer from './reducer'

function App() {

  const [cart] = React.useState([]);

  const items = [
    {
      name: 'One Dozen Donuts',
      description: 'A dozen donuts guarunteed to please.',
      imageSrc: 'https://i2.wp.com/www.eatthis.com/wp-content/uploads/2019/12/how-to-make-donuts-20.jpg?resize=640%2C360&ssl=1'
    },
    {
      name: 'Donut Holes',
      description: 'A dozen donuts guarunteed to please.',
      imageSrc: 'https://media.istockphoto.com/photos/glazed-doughnut-holes-picture-id186882341?k=6&m=186882341&s=612x612&w=0&h=dFI-XeOsLO3kk2NBkb9c6FDjibegilHmtihrjL7JGvQ='
    }
  ]

  const [state, dispatch] = React.useReducer(reducer, cart)

  return (
    <>
      <NavMenu />
      <Header />
      <OrderingMenu />
      {items.map((val, i) => (
        <ItemCard key={i} state={state} dispatch={dispatch} name={val.name} description={val.description} imageSrc={val.imageSrc} />
      ))}
      <p>Here's what you've got in your cart!</p>
      <ul>
        {state.map((val, i) => (
          <li key={i}>{val.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
