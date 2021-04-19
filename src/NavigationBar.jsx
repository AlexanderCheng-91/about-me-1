import React from "react";
import { Navbar, Nav, NavItem, NavbarBrand, NavLink } from "reactstrap";

import headerIcon from "./headerIcon.png";
import githubIcon from "./githubIcon.png";
import blogIcon from "./blogIcon.png";
import linkedInIcon from "./linkedInIcon.png";

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar className="navbar navbar-dark bg-dark xs">
        <Nav className="nav1">
          <NavbarBrand href="/" className="float-left">
            <img src={headerIcon} width="50" height="50" alt="a"></img>
          </NavbarBrand>
        </Nav>
        <Nav>
          <div className="float-right rowing">
            <NavItem className="float-right">
              <NavLink
                className="navbar navbar-navLink"
                href="https://github.com/AlexanderCheng-91/Portfolio"
              >
                <img src={githubIcon} width="35" height="35" alt=""></img>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navbar navbar-navLink"
                href="https://www.linkedin.com/in/alexander-cheng-90368255/"
              >
                <img src={blogIcon} width="35" height="35" alt=""></img>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navbar navbar-navLink"
                href="https://www.linkedin.com/in/alexander-cheng-90368255/"
              >
                <img src={linkedInIcon} width="35" height="35" alt=""></img>
              </NavLink>
            </NavItem>
          </div>
        </Nav>
      </Navbar>
      /* regular navbar */
    );
  }
}

export default NavigationBar;
