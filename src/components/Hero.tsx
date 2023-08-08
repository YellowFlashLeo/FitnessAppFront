import React from "react";
import { Link } from "react-router-dom";
import useStore from "../store/userStore";

const Hero = () => {
  const userId = useStore((s) => s.email);
  const logout = useStore((s) => s.logout);

  const onLogOut = () => {
    logout();
  };

  return (
    <>
      <div id="hero-section">
        <div className="container">
          <div className="hero">
            <h1 className="hero-title">Fitness Journal</h1>
            <p className="hero-text">
              Purpose of this application is to provide user with ability to
              record a workout, observe monthly progress and take your body
              under control, by utilising smart calories calculator.
            </p>
            {!userId ? (
              <Link to="/login" className="hero-btn">
                Sign In
              </Link>
            ) : (
              <a className="hero-btn" onClick={() => onLogOut()}>
                LogOut
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
