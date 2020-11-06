import React from 'react'
import StateProvider from '../StateProvider'
import { Layer, Container } from 'sancho'

import '../../styles/Cart.css'

export default function Cart() {

    return (
        <Container>
            <h1>Your Cart</h1>
            <Container>
                <StateProvider.Consumer>
                    {(state) => {
                        return (
                            <ul id="content">
                                {state.map((val, i) => (
                                    <Layer elevation="sm" key={i}>
                                      <div style={{ padding: '1rem' }}>
                                        <h1>{val.name}</h1>
                                        <p>{val.description}</p>
                                      </div>
                                    </Layer>
                                ))}
                            </ul>
                        )
                    }}
                </StateProvider.Consumer>
            </Container>
        </Container>
    )
}
