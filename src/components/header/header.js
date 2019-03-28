import React from "react"

export class Header extends React.PureComponent{
  render() {
    return (
    <div className="app-header">
      <div className="header-name">
        {this.props.name}
      </div>
      {this.props.children}
    </div>)
  }
}