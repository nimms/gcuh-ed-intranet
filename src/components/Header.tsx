import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';

const Banner = styled.div`
  background-color: #86b3da;
  min-height: 60px;
  padding: 1em 1em;
  color: white;
  border-radius: 0;
  margin-bottom: 2em;
`;

const HeaderNewsQuote = styled.div`
  font-weight: 400;
  font-size: 1.2em;

  a {
    color: white;
    text-decoration: underline;
    font-weight: 500;
    font-size: 1em;
  }
`;
export default class Header extends React.Component {
  public render() {
    return (
      <Container fluid={true} className="text-left align-text-bottom px-0">
        <Banner>
          <Container>
            <Row>
              <Col>
                <HeaderNewsQuote>
                  <span className="display-5 mr-3">
                    We are looking for SHO's to fill in overtime shifts on Jan
                    1, 2, 3 and 4, let me know if you can help
                    <a href="/header-news" className="header-tag-link ml-1">
                      Click here
                    </a>
                  </span>
                  <cite>Louisa Saunders</cite>
                </HeaderNewsQuote>
              </Col>
            </Row>
          </Container>
        </Banner>
      </Container>
    );
  }
}
