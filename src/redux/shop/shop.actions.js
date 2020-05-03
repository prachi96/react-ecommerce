import { UPDATE_COLLECTIONS } from "./shop.constants";

export const updateCollections = (collectionsMap) => ({
  type: UPDATE_COLLECTIONS,
  data: collectionsMap,
});
