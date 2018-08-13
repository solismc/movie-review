import React, { Component } from 'react'

class Movie extends Component {
    render() {
        const posterBaseUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
        return (
        <li className="movie">
          <h2>{this.props.name}</h2>
          <img src={posterBaseUrl + this.props.poster} />
          <p>{this.props.overview}</p>
        </li>
      )
    }
  }
  
  export default Movie