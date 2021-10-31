import React from "react";
import "./Login.css";
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
const Login = () => {
  const { handleSignInUsingGoogle } = useAuth();
  const location = useLocation();
  const uri = location.state?.from || "/";
  console.log(uri);
  const history = useHistory();
  const handleRedirect = () => {
    handleSignInUsingGoogle().then(() => {
      history.push(uri);
    });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <p>
          Log In With
          <span>
            <i
              onClick={handleRedirect}
              className="fab fa-google google text-2xl ml-2 bg-gray-400 p-5 cursor-pointer"
            ></i>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
