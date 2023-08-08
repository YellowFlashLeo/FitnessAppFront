import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/userStore";

const NavBar = () => {
  const userId = useStore((s) => s.email);
  const [burger, setBurger] = useState(false);

  return (
    <>
      <header id="header-section">
        <div className="container">
          <div className="header">
            <Link to="" className="header-logo">
              <img
                src="src/icons/navLogoo.png"
                alt="Coffee Img"
                className="header-logo__img"
              />
              {userId && <span className="header-username">{userId}</span>}
            </Link>
            {burger ? (
              <>
                <svg
                  className="icon activated-nav__toggler"
                  onClick={() => setBurger(!burger)}
                >
                  <use href="/sprite.svg#menu"></use>
                </svg>
                <ul className="activated-nav-main__list ">
                  <li className="nav-main__item">
                    <Link to="/bodyParts" className="nav-main__link">
                      Save Workout
                    </Link>
                  </li>
                  <li className="nav-main__item">
                    <Link to="/nutrition" className="nav-main__link">
                      Save Meal
                    </Link>
                  </li>
                  <li className="nav-main__item">
                    <Link to="/nutrients" className="nav-main__link">
                      Meals
                    </Link>
                  </li>
                  <li className="nav-main__item">
                    <Link to="/records" className="nav-main__link">
                      Records
                    </Link>
                  </li>
                  <li className="nav-main__item">
                    <Link to="/monthSummary" className="nav-main__link">
                      Monthly Progress
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <svg
                  className="icon nav__toggler"
                  onClick={() => setBurger(!burger)}
                >
                  <use href="/sprite.svg#menu"></use>
                </svg>
                <ul className="nav-main__list">
                  <li className="nav-main__item">
                    <Link to="/bodyParts" className="nav-main__link">
                      Save Workout
                    </Link>
                  </li>
                  <li className="nav-main__item">
                    <Link to="/nutrition" className="nav-main__link">
                      Save Meal
                    </Link>
                  </li>
                  <li className="nav-main__item">
                    <Link to="/nutrients" className="nav-main__link">
                      Meals
                    </Link>
                  </li>
                  <li className="nav-main__item">
                    <Link to="/records" className="nav-main__link">
                      Records
                    </Link>
                  </li>
                  <li className="nav-main__item">
                    <Link to="/monthSummary" className="nav-main__link">
                      Monthly Progress
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
