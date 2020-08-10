import { LOGIN, LOGOUT } from "../constants";

export const initialState = {
  user: null,
};

function reducer(state, action) {
  console.log("reducer payload", action.payload);
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { user: null };
    default:
      return state;
  }
}

export default reducer;
