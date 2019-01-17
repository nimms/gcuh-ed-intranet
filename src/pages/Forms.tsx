import * as React from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';

export default class Forms extends React.Component {
  public render() {
    return (
      <div>
        <Container fluid={true} className="px-0">
          <Header />
          <Container>
            <h1>Forms</h1>
          </Container>
        </Container>
      </div>
    );
  }
}
