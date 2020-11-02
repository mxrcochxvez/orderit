import React from 'react'
import { Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

function NavMenu({ history }) {

  const styles = {
    whiteText: {
      color: 'white'
    }
  }
  
  const [state, setState] = React.useState({})

  const handleItemClick = (e, { name }) => {
    setState({ activeItem: name })
    if(name === '🛒') {
      history.push('/cart')
    }
  }
    
  const { activeItem } = state

  return (
    <Menu style={{ backgroundColor: '#343434' }}>
      <Menu.Item style={styles.whiteText} header>Best Boy Donuts</Menu.Item>
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
      <Menu.Item
        style={styles.whiteText}
        name='🛒'
        active={activeItem === '🛒'}
        onClick={handleItemClick}
      />
    </Menu>
  )
}

export default withRouter(NavMenu)