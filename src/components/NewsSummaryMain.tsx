import * as React from 'react';

interface IPropTypes {
  author: string;
  date: string;
  title: string;
}
export default class NewsSummaryMain extends React.Component<IPropTypes> {
  public render() {
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
