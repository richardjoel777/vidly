import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import Movies from './movies';
import { getMovie, getMovies, saveMovie } from './../fakeMovieService';
import { getGenres } from '../fakeGenreService';
import { BrowserRouter } from 'react-router-dom';

class MovReg extends Form {
    state = { data : { title: '', genreId : '', numberInStock : '', dailyRentalRate : '' }, genres : [], errors: {}  }
    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label('Title'), 
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().required().min(0).max(100).label('Numbers In Stock'),
        dailyRentalRate : Joi.number().required().min(1).max(10).label('Dailt Rental Rate')
    }

    componentDidMount(){
        const genres = getGenres();
        this.setState({ genres });
    
        const movieId = this.props.match.params.id;
        if (movieId === "new") return;
    
        const movie = getMovie(movieId);
        if (!movie) return this.props.history.replace("/not-found");
    
        this.setState({ data: this.mapToViewModel(movie) });

    }

    mapToViewModel(movie){
       return { 
        _id : movie._id,
        genreId : movie.genre._id,
        title : movie.title,
        numberInStock: movie.numberInStock,
        dailyRentalRate: movie.dailyRentalRate
       }
    }

    doSubmit = () =>
  {
    // calling server
    saveMovie(this.state.data);

    this.props.history.push('/movies');
  }

    render() { 
        return <div>
            <h1 className="header">Movie Registration</h1>
            <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderSelect('genreId', 'Genre', this.state.genres )}
          {this.renderInput('numberInStock', 'Number In Stock', 'number')}
          {this.renderInput('dailyRentalRate', "Daily Rental Rate",)}
          {this.renderSubmit('Save')}
            </form>
        </div>

    }
}
 
export default MovReg;