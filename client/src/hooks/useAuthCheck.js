import { useEffect, useState } from "react";
import { useStore } from "./useStore";
import { login, logout } from "../actions";
import { useLocation } from "react-router-dom";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function useAuthCheck() {
  const [loading, setLoading] = useState(false)
  const { dispatch } = useStore();
  let { pathname } = useLocation();
  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true)
      const response = await fetch(`${API_BASE_URL}/authcheck`, {
        credentials: "include",
      });

      if (response.ok) {
        const result = await response.json();
        console.log("auth check success", result);
        setLoading(false);
        dispatch(login(result));
      } else {
        console.log('auth check failed')
        setLoading(false);
        dispatch(logout());
      }
    };
    checkAuth();
  }, [pathname, dispatch]);
  return { loading };
}

export default useAuthCheck;
