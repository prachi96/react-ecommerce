import { SET_CURRENT_USER } from "./constants";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  data: user,
});

export default {};
