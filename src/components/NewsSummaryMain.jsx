import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';

export default class NewsSummaryMain extends Component {
  static propTypes = {
    author: string,
    date: string,
    title: string
  };

  render() {
    return (
      <div className="news-item-summary-main">
        <h4 className="text-muted">
          {this.props.author} &middot; {this.props.date}
        </h4>
        <h3>{this.props.title}</h3>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
