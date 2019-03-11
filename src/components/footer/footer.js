import React from "react";

export class AppFooter extends React.PureComponent {
    render() {
      return (
        <footer className="app-footer">
          <div className="footer-name">
              {this.props.name}
          </div>
        </footer>)
    }
}