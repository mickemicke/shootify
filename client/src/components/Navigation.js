import React from "react";
import { Link } from "react-router-dom";
import useFetch from "use-http";
import { useStore } from "../hooks/useStore";
import { logout } from "../actions";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Navigation() {
  const { dispatch } = useStore();
  const { get, response } = useFetch(`${API_BASE_URL}`, {
    credentials: "include",
  });
  const logoutFn = async () => {
    await get("/logout");
    if (response.ok) {
      dispatch(logout());
    }
  };
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <button onClick={logoutFn}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
