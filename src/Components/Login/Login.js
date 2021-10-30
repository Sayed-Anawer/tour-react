import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

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
      className="d-flex justify-content-center align-items-center"
      style={{ height: "50vh", marginBottom: "400px" }}
    >
      <button className="btn btn btn-primary fs-4" onClick={handleUsingGoogle}>
        <i class="fab fa-google"></i> Login with google
      </button>
    </div>
    // <div className="center ">
    //   <div className="card1">
    //     <button
    //       className="px-3"
    //       onClick={handleUsingGoogle}
    //       style={{ border: "none", borderRadius: "20px" }}
    //     >
    //       <img
    //         src="https://i.ibb.co/y5bnkyg/png-transparent-google-logo-google-search-meng-meng-company-text-logo-removebg-preview.png"
    //         alt=""
    //         className="img-fluid "
    //         style={{ width: "50px" }}
    //       />{" "}
    //       Login with google
    //     </button>
    //   </div>
    // </div>
  );
};

export default Login;
