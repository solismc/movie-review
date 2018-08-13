import React, { Component } from 'react';
import Movies from './movies.json' 
import Movie from './movie'

class MovieList extends Component {
    render() {
        console.log(Movies)
      return (
        <section className="MovieList">
          <ul>
            {Movies.results.map((movie, idx) => {
              return <Movie name={movie.title} poster={movie.poster_path} overview={movie.overview} key={idx} />
            })}
          </ul>
        </section>
      )
    }
  }
  
  export default MovieList