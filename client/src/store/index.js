import React, { createContext, useReducer } from "react";
import Reducer, { initialState } from "../reducer";

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};



export { store, StateProvider };
