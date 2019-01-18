import * as React from 'react';
import { Container, ListGroup } from 'reactstrap';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { filterDocumentsByName } from '../redux/actions/Actions';
import * as ActionTypes from '../redux/ActionTypes';

import { ISharepointState } from 'src/api/Types';
import DocListItem from './DocListItem';
import SearchBar from './SearchBar';

interface IPropsFromDispatch {
  getDocuments: any;
  filterDocumentsByName: typeof filterDocumentsByName;
}

type AllProps = ISharepointState & IPropsFromDispatch;

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
            {this.props.filteredDocuments.map(doc => (
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
    filteredDocuments: state.filteredDocuments,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  filterDocumentsByName: (name: string) =>
    dispatch(filterDocumentsByName(name)),
  getDocuments: () => dispatch({ type: ActionTypes.START_LOAD_DOCUMENTS }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DocumentsList);
