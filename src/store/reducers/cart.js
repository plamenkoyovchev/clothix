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
                cartItems: [...state.cartItems, action.itemToAdd]
            };
        default:
            return state;
    }
}

export default cartReducer;