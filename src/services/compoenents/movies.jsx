import React, { Component } from "react";
import { getMovies } from "../fakeMovieService";
import { getGenres } from "../fakeGenreService";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link } from 'react-router-dom';
import MovReg from './moviereg';
import SearchBox from './searchBox';
import { Button } from 'semantic-ui-react'

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre : null,
    searchQuery : '',
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleHeart = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery : '', currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({searchQuery : query, selectedGenre : null, currentPage : 1 })
  }

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
      searchQuery
    } = this.state;
    let filtered = allMovies;
    if(searchQuery) 
    filtered = allMovies.filter( m=> m.title.toLowerCase().startsWith(searchQuery.toLocaleLowerCase()));
    else if( selectedGenre && selectedGenre._id)
        filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id)


    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, searchQuery, selectedGenre } = this.state;

    const { totalCount, movies } = this.getPageData();
    if (count === 0) return <p>There are no Movies in the database</p>;

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            onGenreSelect={this.handleGenreSelect}
            selectedGenre={this.state.selectedGenre}
            nameProperty="name"
            idProperty="_id"
          />
        </div>
        <div className="col">
          <div className="row"> <Link to='/movies/new'className="btn btn-primary mb-3" style={{marginBottom: 20 }}>New Movie</Link></div>
          <div className="row"><SearchBox value = { searchQuery } onChange = {this.handleSearch} /></div>
          <div className="row mb-3"> <p>Showing {totalCount} movies in the database.</p></div>
          <div className="row">       
          <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handleHeart}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          </div>
          <div className='row justify-content-center'>
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          ></Pagination>
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
