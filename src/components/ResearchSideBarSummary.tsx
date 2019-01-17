import * as React from 'react';

interface IPropTypes {
  author: string;
  title: string;
  date?: string;
}

export default class ResearchSideBarSummary extends React.Component<
  IPropTypes
> {
  public render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.children}</p>
        <h4 className="text-muted">{this.props.author}</h4>
      </div>
    );
  }
}
