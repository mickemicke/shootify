import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  console.log("isAuthenticated", isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
