import React from 'react'
import StateProvider from '../StateProvider'
import DispatchProvider from '../DispatchProvider'
import reducer from '../reducer'

export default function Providerwrapper({ children }) {

    const [cart] = React.useState([])
    const [state, dispatch] = React.useReducer(reducer, cart)

    return (
        <StateProvider.Provider value={state}>
            <DispatchProvider.Provider value={dispatch}>
                {children}
            </DispatchProvider.Provider>
        </StateProvider.Provider>
    )
}
