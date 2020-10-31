function reducer(state, action) {
    switch(action.type) {
        case "ADD_ITEM":
            let cart = []
            state.length > 0 ? cart.push(...state, {
                name: action.payload.name,
                description: action.payload.description
            }) : 
            cart.push({
                name: action.payload.name,
                description: action.payload.description
            })
            return cart
        default:
            return state
    }
}

export default reducer