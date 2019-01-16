import React, { Component } from 'react';
import { string } from 'prop-types';

export default class ResearchSideBarSummary extends Component {
  static propTypes = {
    author: string,
    title: string,
    date: string,
  };

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.children}</p>
        <h4 className="text-muted">{this.props.author}</h4>
      </div>
    );
  }
}
