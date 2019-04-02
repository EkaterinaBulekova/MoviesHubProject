import React from 'react';
import MovieList from '../movie-list/movie-list';
import Message from '../message/message';

export class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      movies: [],
    };
  }

  componentDidMount(){
    (this.props.filter.search)
    ? this.props.getData(this.props.filter)
        .then(result => this.setState({loaded: true, movies: result.data}))
        .then(()=>this.props.onUpdate(this.state.movies.length))
    : this.setState({loaded: false, movies: []});
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.filter.search !== this.props.filter.search ||
      nextProps.filter.searchBy !== this.props.filter.searchBy ||
      nextProps.filter.sortBy !== this.props.filter.sortBy){
    (nextProps.filter.search)
      ? this.props.getData(nextProps.filter)
          .then(result => this.setState({loaded: true, movies: result.data}))
          .then(()=>this.props.onUpdate(this.state.movies.length))
      : this.setState({loaded: false, movies: []});
      return false;
   }
   return (nextState.loaded && 
            (this.state.movies.length !== nextState.movies.length ||
             nextState.movies.length && nextState.movies.filter((movie,index)=>movie.id !== this.state.movies[index].id).length))
          || !nextState.movies.length;
  }

  render() {
      let selectedMovie = this.props.filter.selectedMovie
      let movies = (selectedMovie)
        ? this.state.movies.filter(movie=>movie.id !== selectedMovie.id)
        : this.state.movies;
    return (
      movies.length
        ? <MovieList movies={movies} onClick={(movie) => this.props.onClick(movie)} />
        :this.state.loaded && <Message text="No films found"></Message>
    )
  }
}