import { MENU_SECTIONS } from "./directory.data";

const initialDirectoryState = {
  sections: MENU_SECTIONS,
};

const directoryReducer = (state = initialDirectoryState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
