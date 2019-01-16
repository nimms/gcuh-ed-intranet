import React, { Component } from 'react';
import { Container, ListGroup } from 'reactstrap';

import { connect } from 'react-redux';
import { filterDocumentsByName, getDocuments } from '../redux/actions/Actions';

import DocListItem from './DocListItem';
import SearchBar from './SearchBar';

interface IDocumentsListProps {}
export class DocumentsList extends Component {
  componentDidMount() {
    this.props.getDocuments();
  }

  filterDocumentsByName(e) {
    this.props.filterDocumentsByName(e.target.value);
  }

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
              <DocListItem doc={doc} />
            ))}
          </ListGroup>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    documents: state.filteredDocuments,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDocuments: () => dispatch(getDocuments()),
    filterDocumentsByName: name => dispatch(filterDocumentsByName(name)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DocumentsList);
