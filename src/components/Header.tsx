import * as React from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';
export default class Header extends React.Component {
  public render() {
    return (
      <Container fluid={true} className="text-left align-text-bottom px-0">
        <Jumbotron className="text-white rounded-0">
          <Container>
            <Row>
              <Col>
                <blockquote id="header-news-quote">
                  <span className="display-5 mr-3">
                    We are looking for SHO's to fill in overtime shifts on Jan
                    1, 2, 3 and 4, let me know if you can help
                    <a href="/header-news" className="header-tag-link ml-1">
                      Click here
                    </a>
                  </span>
                  <cite>Louisa Saunders</cite>
                </blockquote>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Container>
    );
  }
}
