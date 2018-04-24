import React, {Component} from 'react';
import MovieList from '../components/MovieList.js'

class MovieSection extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [{id:1, title:"Sausage Party", showtimes:["17:00", "19:00", "22:00"]},
             {id:2, title:"Cafe Society", showtimes:["17:30", "19:30", "21:00"]},
             {id:3, title:"Morgan", showtimes:["17:00", "19:00", "22:00"]},
             {id:4, title:"The 9th Life of Louis Drax",showtimes:["17:00", "19:00", "22:00"]},
             {id:5, title:"Equity", showtimes:["17:30", "19:30", "21:00"]},
             {id:6, title:"Things to Come", showtimes:["17:30", "19:30", "21:00"]}]
  }
}

render(){
  return(
    <div className="movie-section">
      <h2>UK opening this week </h2>
      <MovieList data={this.state.data}/>
      <p>See more openings this week >> </p>

      <button type="submit">Get Showtimes >></button>
    </div>
  );

}

}

export default MovieSection;
