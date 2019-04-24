import React from "react";
import {connect} from "react-redux";
import Header from "../header/header";
import AppFooter from "../footer/footer.js"
import Search from "../search/search";
import { ErrorBoundary } from "../error-boundary/error-boundary";
import FilmsResults from '../films-results/films-results';
import MovieList from "../movie-list/movie-list";
import Message from "../message/message";
import * as actions from "../../actions";

export class SearchPage extends React.Component{

  componentDidMount(){
    this.props.initState();
    const filter = this.props.filter;
    filter.search = this.props.search;
    this.props.search && this.props.search !== ''&& this.props.startSearch(filter)
    this.props.setSearch(this.props.search ? this.props.search : '');
  }

  shouldComponentUpdate(nextProps){
    console.log('update-'+this.props.search+'->'+nextProps.search);
    const filter = nextProps.filter;
    if (this.props.search !== nextProps.search){
      filter.search = nextProps.search;
      nextProps.search && nextProps.search !== ''
        ? this.props.startSearch(filter)
        : this.props.initState();
      this.props.setSearch(nextProps.search ? nextProps.search : '');
      return false;
    }
    const {searchBy, sortBy} = this.props.filter;
    if(filter.search !== '' && (filter.searchBy !== searchBy ||filter.sortBy !== sortBy)){
      this.props.startSearch(filter);
      return false;
    }
    return true;
  }

  render(){
    const {filter, hasMovies} = this.props;
    return (
      <div className="page">
        <Header>
          <Search search={this.props.search}/>
        </Header>
        <ErrorBoundary className="global-error">
          <FilmsResults/>
          {hasMovies
            ? <MovieList/>
            : filter.search && <Message text="No films found"/>}
        </ErrorBoundary>
        <AppFooter/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  const {filter, movies} = state;
  const {match} = ownProps;
  return {filter: filter, search: match.params.search, hasMovies: movies.length};
}

function mapDispatchToProps(dispatch){
  return {
    startSearch: (filter) => dispatch(actions.fetchFilteredMovies(filter)),
    setSearch: (search) => dispatch(actions.setSearch(search)),
    initState: () => dispatch(actions.initState()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)