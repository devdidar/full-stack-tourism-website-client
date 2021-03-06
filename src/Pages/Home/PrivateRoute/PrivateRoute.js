import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { isLoading, user } = useAuth();
  if (isLoading) {
    return (
      <div className="border mt-36 border-indigo-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-indigo-400 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-indigo-400 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-indigo-400 rounded"></div>
              <div className="h-4 bg-indigo-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
};

export default PrivateRoute;
