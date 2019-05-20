import React from 'react';
import {connect} from "react-redux";
import styles from "./movie-detail.css";

const MovieDetail = (props) =>{
  return props.movie ? (
       <div className={styles.movie_detail}>
      <div className={styles.movie_detail_img_box}>
        <img className={styles.movie_detail_img} src={props.movie.poster_path}></img>
      </div>
      <div className={styles.movie_detail_info}>
        <div className={styles.movie_detail_group}>
          <div className={styles.movie_detail_title}>{props.movie.title}</div>
          <div className={styles.movie_detail_rating}>{props.movie.vote_average}</div>
        </div>        
        <div className={styles.movie_detail_group}>
          <div className={styles.movie_detail_release_date}>{(new Date(props.movie.release_date)).getFullYear().toString()}</div>
          <div className={styles.movie_detail_duration}>{props.movie.runtime && props.movie.runtime + " min"}</div>
        </div>
        <div className={styles.movie_detail_group}>
          <div className={styles.movie_detail_description}>{props.movie.overview}</div>
        </div>
      </div>
    </div>
  ): null
}

function mapStateToProps(state){
  const {movie} = state;
  return {movie: movie};
}

export default connect(mapStateToProps)(MovieDetail)