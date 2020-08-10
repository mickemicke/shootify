import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import { useStore } from "./hooks/useStore";
import useAuthCheck from "./hooks/useAuthCheck";
import Navigation from "./components/Navigation";

function App() {
  const { state } = useStore();
  const { user } = state;
  const { loading } = useAuthCheck();
  console.log('user', user);
  if(loading && !user) {
    // for now this fixes the login form blinking into view
    // replace with a beautiful spinner
    return (
      null
    )
  }
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute
          path="/"
          exact
          component={Home}
          isAuthenticated={!!user}
        />
        <PrivateRoute
          path="/profile"
          component={Profile}
          isAuthenticated={!!user}
        />
        <PrivateRoute
          path="/profile"
          component={Profile}
          isAuthenticated={!!user}
        />
      </Switch>
    </div>
  );
}

export default App;
