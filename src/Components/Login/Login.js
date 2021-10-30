import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { logInUsingGoogle } = useAuth();
  document.title = "Log in";
  const location = useLocation();
  const history = useHistory();

  const redirectUri = location?.state?.from || "/";

  const handleUsingGoogle = () => {
    logInUsingGoogle().then((result) => {
      history.push(redirectUri);
    });
  };
  return (
    <div
      className=" d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className="shadow-lg w-25 h-25  d-flex justify-content-center align-items-center"
        style={{ borderRadius: "10px" }}
      >
        <button
          className="px-3"
          onClick={handleUsingGoogle}
          style={{ border: "none", borderRadius: "20px" }}
        >
          <img
            src="https://i.ibb.co/y5bnkyg/png-transparent-google-logo-google-search-meng-meng-company-text-logo-removebg-preview.png"
            alt=""
            className="img-fluid "
            style={{ width: "50px" }}
          />{" "}
          Login with google
        </button>
      </div>
    </div>
  );
};

export default Login;
