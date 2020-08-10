import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import useFetch from "use-http";
import { useStore } from "../../hooks/useStore";
import { login } from "../../actions";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Login() {
  const { state, dispatch } = useStore();
  const { user } = state;
  console.log("user in login", user);
  const { post, response } = useFetch(`${API_BASE_URL}`, {
    credentials: "include",
  });
  const submit = async (username, password) => {
    const loggedInUser = await post("/login", { username, password });
    if (response.ok && loggedInUser) {
      console.log("login success", response);
      return dispatch(login(loggedInUser));
    }
    console.log('login failed')
    return dispatch(login(null));
  };

  if (user) {
    return <Redirect to="/" />;
  }
  return <LoginForm submit={submit} />;
}

export default Login;
