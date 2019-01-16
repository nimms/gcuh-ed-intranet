import PropTypes from 'prop-types';
import * as React from 'react';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';

interface IDocListState {
  isHovered: boolean;
}

interface IDocListProps {
  document: IDocumentType;
}
export default class DocListItem extends React.Component<
  IDocListProps,
  IDocListState
> {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  public render() {
    return (
      <ListGroupItem
        onMouseEnter={() => this.handleHover(true)}
        onMouseLeave={() => this.handleHover(false)}
        className={this.state.isHovered ? 'active' : ''}
        key={this.props.document.Id}
      >
        <ListGroupItemHeading>{this.props.document.Title}</ListGroupItemHeading>
        <ListGroupItemText
          tag="a"
          href={this.props.document.ServerRedirectedEmbedUri}
        >
          {this.props.document.ServerRedirectedEmbedUri}
        </ListGroupItemText>
      </ListGroupItem>
    );
  }

  private handleHover = isActive => {
    this.setState({
      isHovered: isActive,
    });
  };
}
