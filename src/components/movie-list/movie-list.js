import React, {PureComponent} from 'react'
import Movie from '../movie/movie'

export default class MovieList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {openMovieId: null};
    }

    handleClick(openMovieId){
        console.log(openMovieId);
        this.setState({openMovieId: this.state.openMovieId === openMovieId ? null : openMovieId});
    }

    render() {
        console.log('---', 2);
        const movieElements = this.props.movies.map((movie, index) =>
            <li key = {movie.id} className="movie-list-element">
                <Movie movie = {movie} onCardClick = {this.handleClick.bind(this, movie.id)}/>
            </li>
        )
        return (
            <ul className="movie-list-container">
                {movieElements}
            </ul>
        )
    }


}