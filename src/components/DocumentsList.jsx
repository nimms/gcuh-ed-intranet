import React, { Component } from 'react';
import { Container } from 'reactstrap';
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

  render() {
    return (
      <div className="mt-5">
        <Container>
          <h3>Documents</h3>
          <SearchBar
            placeholder="Search Documents"
            searchFunc={e => this.filterDocumentsByName(e)}
          />
          <ul>
            {this.props.documents.map(doc => (
              <li key={doc.Id}>
                <a href={doc.AttachmentFiles.__deferred.uri}>{doc.Title}</a>
              </li>
            ))}
          </ul>
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
