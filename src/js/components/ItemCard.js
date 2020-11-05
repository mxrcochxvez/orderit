import React from 'react'
import { Button, Card, Image, Message } from 'semantic-ui-react'

const styles = {
  warningMessage: {
    position: 'absolute',
    bottom: 0,
    left: 10
  }
}

const ItemCard = ({ state, dispatch, name, description, imageSrc }) => {

  const [open, setOpen] = React.useState(false)

  const addItem = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        name: name,
        description: description
      }
    })
    setOpen(true)
  }

  const hideMessage = () => {
    if(open) {
      setOpen(false)
    }
  }

  React.useEffect(() => {
    const interval = setInterval(hideMessage, 1000);
    return () => clearInterval(interval);
  })

  return (
    <Card.Group style={{ display: 'inline-block' }}>
      {open ? 
        <Message warning style={styles.warningMessage}>
          <Message.Header>Added to cart!</Message.Header>
        </Message> :
        <span></span>
      }
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
            <Button basic color='green' onClick={addItem}>
              Add To Cart
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default ItemCard