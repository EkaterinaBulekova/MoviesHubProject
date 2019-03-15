import React from "react"

export class SubHeader extends React.PureComponent{
  render() {
    return (
    <div className="app-subheader">
      {this.props.genres && <p>Films by {this.props.genres.join(', ')} genres</p>}
      {this.props.filmCount > 0 && 
        <div>
          <div className="results-count">{this.props.filmCount} movies found</div>
          <div className="results-sort">Sort by </div>
        </div>
      }
      {this.props.innerComponent}
    </div>)
  }
}