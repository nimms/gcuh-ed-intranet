import * as React from 'react';
import { Container } from 'reactstrap';
import DocumentsList from '../components/DocumentsList';
import Header from '../components/Header';

export default class Guidelines extends React.Component {
  public render() {
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
