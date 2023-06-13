import React from 'react';

import classes from './Movie.module.css';
import MovieList from './MoviesList';




const deltemovie =(m)=>{
  m.filter();

}
const Movie = (props) => {
  return (
    <>
    <button onClick={()=> deltemovie(movie.title)}>delete</button>
    <li className={classes.movie}>
    <div>{props.id}</div>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
    </>
  );
};

export default Movie;
