import React from 'react'
import { Button, Card, Image, Popup } from 'semantic-ui-react'

const ItemCard = ({ state, dispatch, name, description, imageSrc }) => {

  const addItem = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        name: name,
        description: description
      }
    })
  }

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
            <Popup
            content='Added to cart!'
            on='click'
            trigger={
              <Button basic color='green' onClick={addItem}>
                Add To Cart
              </Button>
            }
            />
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default ItemCard