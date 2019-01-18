import * as React from 'react';
import styled from 'styled-components';

import SearchBar from './SearchBar';

import { Col, Container, Row } from 'reactstrap';
import NewsSummaryMain from './NewsSummaryMain';
import ResearchSideBarSummary from './ResearchSideBarSummary';

interface ISearchEvent {
  target: {
    value: string;
  };
}

const BodyContent = styled.div`
  h4 {
    font-size: 1em;
    font-weight: 500;
  }

  h3 {
    font-size: 1.2em;
    color: #f0928f;
  }
`;

export default class Body extends React.Component {
  public render() {
    return (
      <div>
        <Container>
          <Row className="mb-4">
            <Col md={8}>
              <SearchBar placeholder={''} searchFunc={this.searchFunction} />
            </Col>
            <Col md={3} />
          </Row>
          <BodyContent className="row">
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
          </BodyContent>
        </Container>
      </div>
    );
  }

  private searchFunction(event: ISearchEvent) {
    // tslint:disable-next-line:no-console
    console.log(event.target.value);
  }
}
