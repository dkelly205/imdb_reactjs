import React, {Component} from 'react';

import Movie from './Movie.js';

class MovieList extends Component{
  render(){
  const movieNodes = this.props.data.map(movie => {
    return(
      <Movie title={movie.title} key={movie.id}>
        <a href="{movie.showtimes}">showtimes</a></Movie>
    );
  });

    return <div className="movieList">{movieNodes}</div>

  }

}

export default MovieList;
