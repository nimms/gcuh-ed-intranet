import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { getDocuments } from '../redux/actions/Actions';

import SearchBar from './SearchBar';

export class DocumentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredDocs: []
    };
  }

  componentDidMount() {
    this.props.getDocuments();
  }

  filterDocumentsByName(e) {
    console.log(e.target.value);
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
    documents: state.remoteDocuments.slice(0, 10)
  };
};

export default connect(
  mapStateToProps,
  { getDocuments }
)(DocumentsList);
