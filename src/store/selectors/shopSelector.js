import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const getShopDataSelector = createSelector(
    [shopSelector],
    shop => shop.shopData
);

export const getShopCollectionsForPreview = createSelector(
    [getShopDataSelector],
    shopData => Object.keys(shopData).map(key => shopData[key])
);