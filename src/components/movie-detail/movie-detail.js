import React from 'react'

function MovieDetail({movie}) {
  return (
   <div className="movie-detail">
      <div className="movie-detail-img-box">
        <img className="movie-detail-img" src={movie.poster_path}></img>
      </div>
      <div className="movie-detail-info">
        <div className="movie-detail-title">{movie.title}</div>
        <div className="movie-detail-rating">{movie.vote_average}</div>
        <div className="movie-detail-release-date"><p>{(new Date(movie.release_date)).getFullYear().toString()}</p></div>
        <div className="movie-detail-duration">{movie.runtime}</div>
        <div className="movie-detail-description">{movie.overview}</div>
      </div>
    </div>
  )
}

export default MovieDetail