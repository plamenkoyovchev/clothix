import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const getShopDataSelector = createSelector(
    [shopSelector],
    shop => shop.shopData
);

export const getShopCollectionsForPreview = createSelector(
    [getShopDataSelector],
    shopData => shopData ? Object.keys(shopData).map(key => shopData[key]) : []
);

export const getShopCollectionOverviewByCategory = (category) => createSelector(
    [getShopDataSelector],
    collections => collections ? collections[category] : null
);