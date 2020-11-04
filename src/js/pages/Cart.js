import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link to="/">Go home</Link>
        </div>
    )
}
