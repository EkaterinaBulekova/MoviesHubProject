import React from "react";

export class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="Page">
            <h1>{this.props.name}</h1>
      </div>
    );
  }
}
