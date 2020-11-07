import React from 'react'

import StateProvider from '../StateProvider'
import DispatchProvider from '../DispatchProvider'

import ItemCard from './ItemCard'

export default function ItemsSwitch({ values }) {
    return (
        <StateProvider.Consumer>
            {(state) => (
                <DispatchProvider.Consumer>
                    {(dispatch) => {
                        return values.map((val, i) => (
                            <ItemCard key={i} state={state} dispatch={dispatch} name={val.name} description={val.description} imageSrc={val.imageSrc} />
                        ))
                    }}
                </DispatchProvider.Consumer>
            )}
        </StateProvider.Consumer>
    )
}
