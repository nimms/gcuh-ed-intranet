import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Body from './components/Body';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);
class App extends Component {
  render() {
    return (
      <Container fluid={true} className="px-0">
        <Navigation />
        <Header />
        <Body />
      </Container>
    );
  }
}

export default App;
