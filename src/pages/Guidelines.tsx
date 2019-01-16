import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';
import DocumentsList from '../components/DocumentsList';

export default class Guidelines extends Component {
  render() {
    return (
      <div>
        <Container fluid={true} className="px-0">
          <Header />
          <Container>
            <h1>Guidelines</h1>
            <DocumentsList />
          </Container>
        </Container>
      </div>
    );
  }
}
