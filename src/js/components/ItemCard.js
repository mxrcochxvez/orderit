import React from 'react'
import { Button, Card, Image, Message } from 'semantic-ui-react'

const styles = {
  warningMessage: {
    position: 'absolute',
    top: 50,
    right: 10,
    maxWidth: '30%'
  }
}

const ItemCard = ({ state, dispatch, name, description, imageSrc }) => {

  const [added, setAdded] = React.useState(false)

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

  const hideMessage = () => {
    if(added) {
      setAdded(false)
    }
  }

  React.useEffect(() => {
    const interval = setInterval(hideMessage, 1000);
    return () => clearInterval(interval);
  })

  return (
    <Card.Group style={{ display: 'inline-block' }}>
      <Card style={{ margin: '1rem' }}>
        <Image
          src={imageSrc}
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color={added ? 'orange' : 'green'} onClick={addItem}>
              {added ? 'Added to cart!' : 'Add to cart'}
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default ItemCard