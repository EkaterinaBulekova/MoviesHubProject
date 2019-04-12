import React from 'react';
import {connect} from "react-redux";

const MovieDetail = (props) =>{
  return (
   <div className="movie-detail">
      <div className="movie-detail-img-box">
        <img className="movie-detail-img" src={props.movie.poster_path}></img>
      </div>
      <div className="movie-detail-info">
        <div className="movie-detail-group">
          <div className="movie-detail-title">{props.movie.title}</div>
          <div className="movie-detail-rating">{props.movie.vote_average}</div>
        </div>        
        <div className="movie-detail-group">
          <div className="movie-detail-release-date">{(new Date(props.movie.release_date)).getFullYear().toString()}</div>
          <div className="movie-detail-duration">{props.movie.runtime && props.movie.runtime + " min"}</div>
        </div>
        <div className="movie-detail-group">
          <div className="movie-detail-description">{props.movie.overview}</div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state){
  const {movie} = state;
  return {movie: movie};
}

export default connect(mapStateToProps)(MovieDetail)