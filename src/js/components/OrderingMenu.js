import React from 'react'
import { Menu } from 'semantic-ui-react'

function OrderingMenu() {
    const [state, setState] = React.useState({ activeItem: 'Favorites' })

    const handleItemClick = (e, { name }) => setState({ activeItem: name })
    const { activeItem } = state

    return (
        <Menu tabular>
            <Menu.Item
                style={{ marginLeft: '1rem' }}
                name='Favorites'
                active={activeItem === 'Favorites'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='Individual Items'
                active={activeItem === 'Individual Items'}
                onClick={handleItemClick}
            />
        </Menu>
    )
}

export default OrderingMenu