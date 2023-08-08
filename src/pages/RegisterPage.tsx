import React, { ChangeEvent, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import useRegister from "../hooks/useRegister";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const [userToBeRegistered, setUserToBeRegistered] = useState({
    emailAddress: "",
    firstName: "",
    lastName: "",
    password: "",
    age: 0,
    genderId: 1,
    nationality: "",
  });
  const { mutate, error } = useRegister();

  const onRegister = () => {
    if (
      userToBeRegistered.emailAddress &&
      userToBeRegistered.firstName &&
      userToBeRegistered.lastName &&
      userToBeRegistered.password &&
      userToBeRegistered.age &&
      userToBeRegistered.genderId &&
      userToBeRegistered.nationality
    ) {
      mutate(userToBeRegistered);
    }
  };

  if (error) {
    toast.error(error?.response.data);
  }

  return (
    <>
      <div id="signIn-section">
        <div className="container">
          <h1 className="signIn-title">Create account</h1>
          <form className="signIn-form">
            <input
              onChange={(event) =>
                setUserToBeRegistered({
                  ...userToBeRegistered,
                  firstName: event.target.value,
                })
              }
              type="text"
              className="singIn-input"
              placeholder="First name"
            />
            <input
              onChange={(event) =>
                setUserToBeRegistered({
                  ...userToBeRegistered,
                  lastName: event.target.value,
                })
              }
              type="text"
              className="singIn-input"
              placeholder="Last name"
            />
            <input
              onChange={(event) =>
                setUserToBeRegistered({
                  ...userToBeRegistered,
                  emailAddress: event.target.value,
                })
              }
              type="email"
              className="singIn-input"
              placeholder="Email"
            />
            <input
              onChange={(event) =>
                setUserToBeRegistered({
                  ...userToBeRegistered,
                  password: event.target.value,
                })
              }
              type="password"
              className="singIn-input"
              placeholder="Password"
            />
            <input
              onChange={(event) =>
                setUserToBeRegistered({
                  ...userToBeRegistered,
                  age: parseInt(event.target.value),
                })
              }
              type="number"
              className="singIn-input"
              placeholder="1"
              min="10"
              max="120"
            />
            <select
              value={userToBeRegistered.nationality}
              className="singIn-input"
              onChange={(event) =>
                setUserToBeRegistered({
                  ...userToBeRegistered,
                  nationality: event.target.value,
                })
              }
            >
              <option value="">Select a nationality</option>
              <option value="russian">russian</option>
              <option value="estonian">estonian</option>
              <option value="british">british</option>
              <option value="american">american</option>
              <option value="french">french</option>
              <option value="italian">italian</option>
            </select>

            <a
              href="#"
              className="hero-btn signIn-btn"
              onClick={() => onRegister()}
            >
              Register
            </a>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default RegisterPage;
