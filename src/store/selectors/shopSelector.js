import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const getShopDataSelector = createSelector(
    [shopSelector],
    shop => shop.shopData
);