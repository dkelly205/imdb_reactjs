import React from 'react';

const Movie = (props) =>
  <div className="movie">
    <h3 className="movieTitle">{props.title}</h3>
    <p>{props.children}</p>
  </div>

export default Movie;
