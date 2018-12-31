import React, { Component } from 'react';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand
} from 'reactstrap';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
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
                <NavLink href="/guidelines">GUIDELINES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/patient-info">PATIENT INFO</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/forms">FORMS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/calendar">CALENDAR</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/training+education">TRAINING/EDUCATION</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/research">RESEARCH</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
