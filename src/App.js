import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import NewsCard from "./components/NewsCard";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Container>
          <Row>
            <Col className="text-center">
              <h2>News</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="pb-3">
              <NewsCard />
            </Col>
            <Col md={4}>
              <NewsCard />
            </Col>
            <Col md={4}>
              <NewsCard />
            </Col>
            <Col md={4}>
              <NewsCard />
            </Col>
            <Col md={4}>
              <NewsCard />
            </Col>
            <Col md={4}>
              <NewsCard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
