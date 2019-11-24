import { createSelector } from 'reselect';

const cartSelector = state => state.cart;

export const cartVisibleSelector = createSelector(
    [cartSelector],
    cart => cart.visible
);

export const getCartItemsSelector = createSelector(
    [cartSelector],
    cart => cart.cartItems
);

export const getTotalSumSelector = createSelector(
    [getCartItemsSelector],
    cartItems => cartItems.reduce((accumulator, item) => {
        return accumulator + (item.price * item.quantity)
    }, 0)
);