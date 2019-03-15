import React, {PureComponent} from 'react'

class Movie extends PureComponent {
  render() {
    const movie = this.props.movie;
    return (
     <div className="movie-card" onClick = {this.props.onClick}>
        <img className="movie-img" src={movie.poster_path}></img>
        <div className="movie-info">
          <div className="movie-title">{movie.title}</div>
          <div className="movie-release-box">
            <div className="movie-release-date">{(new Date(movie.release_date)).getFullYear().toString()}</div>
          </div>
          <div className="movie-genres">{movie.genres.toString()}</div>
        </div>
      </div>
    )
  }
}

export default Movie