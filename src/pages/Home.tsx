import React, { Component } from 'react';

import { Container } from 'reactstrap';

import Body from '../components/Body';
import Header from '../components/Header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid={true} className="px-0">
          <Header />
          <Body />
        </Container>
      </div>
    );
  }
}
