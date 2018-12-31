import React, { Component } from 'react';

import {
  Form,
  Row,
  Label,
  Col,
  FormGroup,
  Button,
  Input,
  Container,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NewsSummaryMain from './NewsSummaryMain';
import ResearchSideBarSummary from './ResearchSideBarSummary';
import PropTypes from 'prop-types';
export default class Body extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <Container>
          <Row className="mb-4">
            <Col md={8}>
              <Form>
                <InputGroup>
                  <Input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for anything"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <FontAwesomeIcon icon="search" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Form>
            </Col>
            <Col md={3} />
          </Row>
          <Row className="body-text">
            <Col md={8}>
              <h2>News</h2>
              <NewsSummaryMain
                author="David Green"
                title="Changes to Admissions Acute/CDU"
                date="2 days ago"
              >
                There is currently enormous NEAT pressure, particularly
                concerning non admitted NEAT. There are a number of ways we can
                imporve this area, and with the NP roster now filled and the
                extended scope physio returning, it should impove the minors
                area.
              </NewsSummaryMain>
              <NewsSummaryMain
                author="Michelle Carter"
                title="iEMR infrastructure uplift - GCUH Emergency Department"
                date="9 October 2018"
              >
                It is envisaged that the iEMR infrastructure uplift will
                continue until the end of November 2018. Works currently being
                undertaken within the department are occurring in the ceiling
                spaces - you may at times see various workment within the
                department.
              </NewsSummaryMain>
            </Col>
            <Col md={4}>
              <h2>RESEARCH PROJECTS</h2>
              <ResearchSideBarSummary author="Shane George" title="RAPIDS">
                Children suspected of having sepsis
              </ResearchSideBarSummary>
              <ResearchSideBarSummary
                author="Gerben Kreijzers"
                title="Whiplash"
              >
                Adults with whiplash from trauma
              </ResearchSideBarSummary>
              <ResearchSideBarSummary
                author="Christa Bell"
                title="FEISTY Junior"
              >
                Investigate the use of Fibrinogen concentrate vs cryoprecipitate
              </ResearchSideBarSummary>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}