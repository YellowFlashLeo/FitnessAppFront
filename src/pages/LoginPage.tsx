import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import useStore from "../store/userStore";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [signingUser, setSigningUser] = useState({ email: "", password: "" });
  const { mutate, error } = useLogin();
  const addEmail = useStore((s) => s.addEmail);

  const onLogin = () => {
    if (signingUser.email && signingUser.password) {
      mutate(signingUser);
      addEmail(signingUser.email);
    }
  };

  if (error) {
    toast.error(error?.response.data);
  }

  return (
    <>
      <div id="signIn-section">
        <div className="container">
          <h1 className="signIn-title">Login</h1>
          <form className="signIn-form">
            <input
              onChange={(event) =>
                setSigningUser({ ...signingUser, email: event.target.value })
              }
              type="email"
              className="singIn-input"
              placeholder="Email"
            />
            <input
              onChange={(event) =>
                setSigningUser({ ...signingUser, password: event.target.value })
              }
              type="password"
              className="singIn-input"
              placeholder="Password"
            />
            <a
              href="#"
              className="hero-btn signIn-btn"
              onClick={() => onLogin()}
            >
              Sign in
            </a>
            <Link to="/register" className="signIn-link">
              Create account
            </Link>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
