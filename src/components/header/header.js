import React from "react"

export class AppHeader extends React.PureComponent{
    render() {
        return (
          <div className="app-header">
            <div className="header-name">
                {this.props.name}
            </div>
          </div>)
    }
}