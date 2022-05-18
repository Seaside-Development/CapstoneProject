import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./header.styles";

const Header = () => {
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
          <NavBtnLink to="/signinpage">Login</NavBtnLink>
          <NavBtnLink to="/JobSearchPage">Add Listing</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Header;
