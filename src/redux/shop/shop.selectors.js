import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) =>
  shop.collections ? shop.collections : {}
);

export const selectCollectionArray = createSelector([selectShop], (shop) =>
  Object.values(shop.collections)
);

export const selectCollectionItems = (collectionURLParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionURLParam] : {}
  );
