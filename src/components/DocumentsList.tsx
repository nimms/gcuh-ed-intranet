import * as React from 'react';
import { Container, ListGroup } from 'reactstrap';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { filterDocumentsByName } from '../redux/actions/Actions';
import { getDocuments } from '../redux/actions/Sagas';

import { IDocumentType, ISharepointState } from 'src/api/Types';
import DocListItem from './DocListItem';
import SearchBar from './SearchBar';

interface IPropsFromState {
  documents: IDocumentType[];
  getDocuments(): IDocumentType[];
  filterDocumentsByName(docName: string): IDocumentType[];
}

interface IPropsFromDispatch {
  getDocuments: typeof getDocuments;
  filterDocumentsByName: typeof filterDocumentsByName;
}

type AllProps = IPropsFromState & IPropsFromDispatch;

export class DocumentsList extends React.Component<AllProps> {
  public componentDidMount() {
    this.props.getDocuments();
  }

  public render() {
    return (
      <div className="mt-5">
        <Container>
          <h3>Documents</h3>
          <SearchBar
            placeholder="Search Documents"
            searchFunc={(e: React.FormEvent<HTMLInputElement>) =>
              this.filterDocumentsByName(e)
            }
          />
          {/* results */}
          <ListGroup className="mt-5">
            {this.props.documents.map(doc => (
              <DocListItem document={doc} />
            ))}
          </ListGroup>
        </Container>
      </div>
    );
  }

  private filterDocumentsByName(e: React.FormEvent<HTMLInputElement>) {
    this.props.filterDocumentsByName(e.currentTarget.value);
  }
}

const mapStateToProps = (state: ISharepointState) => {
  return {
    documents: state.documents,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    filterDocumentsByName: (name: string) =>
      dispatch<any>(filterDocumentsByName(name)),
    getDocuments: () => dispatch<any>(getDocuments()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DocumentsList);
