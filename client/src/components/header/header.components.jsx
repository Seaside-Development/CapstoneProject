import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './header.styles';
    
const Header = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/accounts' activeStyle>
            Profile
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/job-description' activeStyle>
            Jobs
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Login In</NavBtnLink>
          <NavBtnLink to='/signin'>Add Listing</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}

export default Header;