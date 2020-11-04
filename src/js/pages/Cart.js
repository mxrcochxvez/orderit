import React from 'react'
import StateProvider from '../StateProvider'

export default function Cart() {
    return (
        <div>
            <StateProvider.Consumer>
                {(state) => {
                    return (
                        <ul>
                            {state.map((val, i) => (
                                <li key={i}>{val.name}</li>
                            ))}
                        </ul>
                    )
                }}
            </StateProvider.Consumer>
        </div>
    )
}
