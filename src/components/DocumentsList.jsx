import React, { Component } from 'react';
import SearchBar from './SearchBar';

import { Container } from 'reactstrap';

import Axios from 'axios';

export default class DocumentsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: [],
      unfilteredDocs: []
    };
  }

  filterDocumentsByName(e) {
    this.setState({
      documents: this.state.unfilteredDocs.filter(doc =>
        doc.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    });
  }

  componentDidMount() {
    Axios.get(
      'https://9318e5dc-583c-435e-b075-3728d2caf061.mock.pstmn.io/items?fbclid=IwAR2_mv-W_riPcCubDt1ReV4XltXnMwg4JMalXVBV-ZPTogX6kxxe4vntHD8'
    )
      .then(json => {
        console.log(json);
        return json.data.d.results.map(doc => ({
          title: doc.Title,
          attachmentUrl: doc.AttachmentFiles.__deferred.uri
        }));
      })
      .then(docs => {
        this.setState({ documents: docs, unfilteredDocs: docs });
      })
      .catch(error => console.error(error));
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
            {console.log(this.state.documents)}
            {this.state.documents.map(doc => (
              <li>
                <a href={doc.attachmentUrl}>{doc.title}</a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    );
  }
}
