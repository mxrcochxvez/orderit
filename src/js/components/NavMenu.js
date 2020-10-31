import React from 'react'
import { Menu } from 'semantic-ui-react'

function NavMenu() {

  const styles = {
    whiteText: {
      color: 'white'
    }
  }
  
  const [state, setState] = React.useState({})

  const handleItemClick = (e, { name }) => setState({ activeItem: name })
    
  const { activeItem } = state

  return (
    <Menu style={{ backgroundColor: '#343434' }}>
      <Menu.Item style={styles.whiteText} header>Order It</Menu.Item>
      <Menu.Item
        style={styles.whiteText}
        name='aboutUs'
        active={activeItem === 'aboutUs'}
        onClick={handleItemClick}
      />
      <Menu.Item
        style={styles.whiteText}
        name='jobs'
        active={activeItem === 'jobs'}
        onClick={handleItemClick}
      />
      <Menu.Item
        style={styles.whiteText}
        name='locations'
        active={activeItem === 'locations'}
        onClick={handleItemClick}
      />
    </Menu>
  )
}

export default NavMenu