import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    visible: false,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART_VISIBILITY:
            return {
                ...state,
                visible: !state.visible
            };
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItem(state.cartItems, action.itemToAdd)
            };
        default:
            return state;
    }
}

const addItem = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(i => i.id === itemToAdd.id);
    if (existingItem) {
        const updatedCartItems = cartItems.map(
            item =>
                item.id === itemToAdd.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item);

        return updatedCartItems;
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export default cartReducer;