import React from 'react'
import StateProvider from '../StateProvider'
import { Container, Item } from 'semantic-ui-react'

import '../../styles/Cart.css'

export default function Cart() {
    return (
        <Container>
            <h1>Your Cart</h1>
            <div className='cart-items'>
                <StateProvider.Consumer>
                    {(state) => {
                        return (
                            <ul>
                                {state.map((val, i) => (
                                    <Item.Group>
                                        <Item>
                                            <Item.Content>
                                                <Item.Header>{val.name}</Item.Header>
                                                <Item.Description>{val.description}</Item.Description>
                                            </Item.Content>
                                        </Item>
                                    </Item.Group>
                                ))}
                            </ul>
                        )
                    }}
                </StateProvider.Consumer>
            </div>
        </Container>
    )
}
