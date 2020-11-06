import React from 'react'
import { Button, Layer, useTheme } from 'sancho'

import '../../styles/Card.css'

const ItemCard = ({ state, dispatch, name, description, imageSrc }) => {

  const [added, setAdded] = React.useState(false)
  const theme = useTheme()

  const addItem = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        name: name,
        description: description
      }
    })
    setAdded(true)
  }

  const buttonMessage = () => {
    if (added) {
      setAdded(false)
    }
  }

  React.useEffect(() => {
    const interval = setInterval(buttonMessage, 400);
    return () => clearInterval(interval);
  })

  return (
    <Layer elevation="md" id="item-card">
      <div>
        <img src={imageSrc} style={{ maxWidth: '100%' }} alt='Food Item' />
        <h1>{name}</h1>
        <p>{description}</p>
        <div style={{ textAlign: 'center', margin: theme.spaces.md }}>
          <Button intent={added ? 'danger' : 'primary'} style={{ marginBottom: '1rem' }} onClick={addItem}>
            {added ? 'Added to cart!' : 'Add to cart'}
          </Button>
        </div>
      </div>
    </Layer>
  )
}

export default ItemCard
