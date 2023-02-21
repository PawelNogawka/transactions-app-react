import React from "react";
import { Link } from "react-router-dom";

import {useAuthContext} from '../../hooks/useAuthContext'
import { useLogout } from "../../hooks/useLogout";

import Wrapper from "../Ui/Wrapper";
import Button from '../../components/Ui/Button'

import classes from "./Navbar.module.scss";

const Navbar = () => {
  const {user} = useAuthContext()
  const {logout} = useLogout()

  console.log(user)

  return (
    <header>
      <Wrapper>
        <nav className={classes.navbar}>
          <ul>
            <li>
              <Link className={classes.logo} to="/">
                budget tracker
              </Link>
            </li>
            <div className={classes.menu}>
              <li>
                <Link to="/">home</Link>
              </li>
              {!user && (<>
                <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link to="/signup">signup</Link>
              </li></>)}
              {user && (
                <>
                  <p className={classes.user}>Hello, {user.displayName}</p>
                  <Button outlined text="logout" onClick={logout} />
                </>
              )}
            </div>
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Navbar;
