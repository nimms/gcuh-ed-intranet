import React, { Component } from 'react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from 'reactstrap';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="inverse" light expand="lg">
          <NavbarBrand href="/">GCH Emergency</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  tag={ReactRouterNavLink}
                  activeClassName="active"
                  to="/guidelines"
                >
                  GUIDELINES
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={ReactRouterNavLink}
                  activeClassName="active"
                  to="/patient-info"
                >
                  PATIENT INFO
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={ReactRouterNavLink}
                  activeClassName="active"
                  to="/forms"
                >
                  FORMS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={ReactRouterNavLink}
                  activeClassName="active"
                  to="/calendar"
                >
                  CALENDAR
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={ReactRouterNavLink}
                  activeClassName="active"
                  to="/training"
                >
                  TRAINING/EDUCATION
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={ReactRouterNavLink}
                  activeClassName="active"
                  to="/research"
                >
                  RESEARCH
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
