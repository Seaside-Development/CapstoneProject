import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./header.styles";
import { logout, reset } from "../../features/auth/authSlice";
import {useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset())
  };
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/myAccount" activeStyle>
            Profile
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/job-description" activeStyle>
            Jobs
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          {/* logout button leading to home page, no functionality */}
          <NavBtnLink to="/signinpage">Login</NavBtnLink>
          <NavBtnLink to="/" onClick={onLogout}>Logout</NavBtnLink>{" "}
          <NavBtnLink to="/JobSearchPage">Add Listing</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Header;
