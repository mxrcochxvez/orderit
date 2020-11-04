function reducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            let cart = [...state]
            cart.push({
                name: action.payload.name,
                description: action.payload.description
            })
            return cart
        case "DELETE_ITEM":
            let delCart = []
            if (state.length > 0) {
                delCart.push(...state)
            } else {
                return delCart
            }
            delCart.pop()
            return delCart
        default:
            return state
    }
}

export default reducer