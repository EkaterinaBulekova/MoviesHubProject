import React from "react";
import {AppFooter} from "../footer/footer.js"
import {MoviePage} from "../movie-page/movie-page.js";
import {SearchPage} from "../search-page/search-page.js";
import getData from "../../utils/data-provider";

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
    };
  }

  componentDidMount(){
    if (process.env.NODE_ENV =='development'){
      console.log('App is created');
    }
  }

  initState = () => {
    this.setState({
      selectedMovie: null,
    })
  }

  onMovieClick = (movie) => () =>{
    this.setState({
      selectedMovie: movie,
    })
  }

  render() {
    const selectedMovie = this.state.selectedMovie;
    const appName = this.props.name;
    return (
      <div className="App">
        {selectedMovie
          ? <MoviePage name={appName} movie={selectedMovie} getData={getData} onReturn={this.initState}/>
          : <SearchPage name={appName} getData={getData} onReturn={this.onMovieClick}/>}
        <AppFooter name={appName}/>
      </div>
    );
  }
}