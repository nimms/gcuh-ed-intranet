import React, { Component } from 'react';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';
import PropTypes from 'prop-types';

export default class DocListItem extends Component {
  static propTypes = {
    doc: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover = isActive => {
    this.setState({
      isHovered: isActive
    });
  };

  render() {
    return (
      <ListGroupItem
        onMouseEnter={() => this.handleHover(true)}
        onMouseLeave={() => this.handleHover(false)}
        className={this.state.isHovered ? 'active' : ''}
        key={this.props.doc.Id}
      >
        <ListGroupItemHeading>{this.props.doc.Title}</ListGroupItemHeading>
        <ListGroupItemText
          tag="a"
          href={this.props.doc.ServerRedirectedEmbedUri}
        >
          {this.props.doc.ServerRedirectedEmbedUri}
        </ListGroupItemText>
      </ListGroupItem>
    );
  }
}
