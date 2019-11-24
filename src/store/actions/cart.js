import * as actionTypes from './actionTypes';

export const toggleCartVisibility = () => {
    return {
        type: actionTypes.TOGGLE_CART_VISIBILITY
    };
}

export const addItem = item => {
    return {
        type: actionTypes.ADD_ITEM,
        itemToAdd: item
    };
}

export const removeCheckoutItem = id => {
    return {
        type: actionTypes.REMOVE_CHECKOUT_ITEM,
        itemToRemoveId: id
    };
}