import { useContext } from "react";
import { store } from "../store";

export const useStore = () => useContext(store);
