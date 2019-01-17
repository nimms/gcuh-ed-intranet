import * as React from 'react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

interface INavigationState {
  isOpen: boolean;
}

export default class Navigation extends React.Component<{}, INavigationState> {
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  public render() {
    return (
      <div>
        <Navbar color="inverse" light={true} expand="lg">
          <NavbarBrand href="/">GCH Emergency</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
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
  private toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
}
