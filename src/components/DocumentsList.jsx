import React, { Component } from 'react';
import {
  Container,
  ListGroup,
  ListGroupItemText,
  ListGroupItemHeading,
  ListGroupItem
} from 'reactstrap';
import { connect } from 'react-redux';
import { getDocuments, filterDocumentsByName } from '../redux/actions/Actions';

import SearchBar from './SearchBar';

export class DocumentsList extends Component {
  componentDidMount() {
    this.props.getDocuments();
  }

  filterDocumentsByName(e) {
    this.props.filterDocumentsByName(e.target.value);
  }

  renderDocList = (doc, isActive) => {
    return (
      <ListGroupItem active>
        <ListGroupItemHeading>{doc.Title}</ListGroupItemHeading>
        <ListGroupItemText>{doc.ServerRedirectedEmbedUri}</ListGroupItemText>
      </ListGroupItem>
    );
  };

  render() {
    return (
      <div className="mt-5">
        <Container>
          <h3>Documents</h3>
          <SearchBar
            placeholder="Search Documents"
            searchFunc={e => this.filterDocumentsByName(e)}
          />
          {/* results */}
          <ListGroup className="mt-5">
            {this.props.documents.map(doc => (
              <ListGroupItem>
                <ListGroupItemHeading>{doc.Title}</ListGroupItemHeading>
                <ListGroupItemText tag="a" href={doc.ServerRedirectedEmbedUri}>
                  {doc.ServerRedirectedEmbedUri}
                </ListGroupItemText>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    documents: state.filteredDocuments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDocuments: () => dispatch(getDocuments()),
    filterDocumentsByName: name => dispatch(filterDocumentsByName(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentsList);
