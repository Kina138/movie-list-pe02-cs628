import React, { Component } from 'react';
import './movie.css';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: 'All Genres',
      movies: [
        { title: 'Inception', genre: 'Science Fiction', releaseYear: 2010 },
        { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
        { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
        { title: 'Interstellar', genre: 'Science Fiction', releaseYear: 2014 },
        { title: 'Titanic', genre: 'Romance', releaseYear: 1997 },
        { title: 'Avatar', genre: 'Science Fiction', releaseYear: 2009 },
        { title: 'Gladiator', genre: 'Action', releaseYear: 2000 },
        { title: 'Forrest Gump', genre: 'Drama', releaseYear: 1994 },
        { title: 'The Notebook', genre: 'Romance', releaseYear: 2004 },
        { title: 'Avengers: Endgame', genre: 'Action', releaseYear: 2019 },
        { title: 'The Matrix', genre: 'Science Fiction', releaseYear: 1999 },
        { title: 'Pulp Fiction', genre: 'Crime', releaseYear: 1994 },
        { title: 'The Godfather', genre: 'Crime', releaseYear: 1972 },
        { title: 'La La Land', genre: 'Romance', releaseYear: 2016 },
        { title: 'Joker', genre: 'Drama', releaseYear: 2019 },
        { title: 'Mad Max: Fury Road', genre: 'Action', releaseYear: 2015 },
        { title: 'Blade Runner 2049', genre: 'Science Fiction', releaseYear: 2017 },
        { title: 'Fight Club', genre: 'Drama', releaseYear: 1999 },
        { title: 'The Wolf of Wall Street', genre: 'Crime', releaseYear: 2013 },
        { title: 'A Star Is Born', genre: 'Romance', releaseYear: 2018 }
      ]
    };
  }

  handleGenreChange = (event) => {
    this.setState({ selectedGenre: event.target.value });
  };

  handleMovieClick = (title) => {
    alert(`You clicked on "${title}"`);
  };

  render() {
    const { selectedGenre, movies } = this.state;
    const genres = ['All Genres', ...new Set(movies.map(movie => movie.genre))];

    const filteredMovies = selectedGenre === 'All Genres'
      ? movies
      : movies.filter(movie => movie.genre === selectedGenre);

    return (
      <div className="movie-container">
        <h1>Movie List</h1>

        <select
          className="genre-select"
          onChange={this.handleGenreChange}
          value={selectedGenre}
        >
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>

        <div className="movie-list">
          {filteredMovies.map((movie, index) => (
            <div
              key={index}
              className="movie-card"
              onClick={() => this.handleMovieClick(movie.title)}
            >
              <h2>{movie.title}</h2>
              <p>{movie.genre}</p>
              <p>Released: {movie.releaseYear}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
