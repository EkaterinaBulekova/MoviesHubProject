import React, {PureComponent} from 'react';
import styles from "./movie.css";

class Movie extends PureComponent {
  render() {
    const movie = this.props.movie;
    return (
     <div className={styles.movie_card}  onClick={this.props.onClick}>
        <img className={styles.movie_img} src={movie.poster_path}></img>
        <div className={styles.movie_info}>
          <div className={styles.movie_title}>{movie.title}</div>
          <div className={styles.movie_release_box}>
            <div className={styles.movie_release_date}>{(new Date(movie.release_date)).getFullYear().toString()}</div>
          </div>
          <div className={styles.movie_genres}>{movie.genres.toString()}</div>
        </div>
      </div>
    )
  }
}

export default Movie