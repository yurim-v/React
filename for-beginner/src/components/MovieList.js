
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieList = ( {coverImage, movieTitle, movieGenres, movieId} )=>{

  return (
    <div>
      <img src={ coverImage}  alt={movieTitle + '-image'}/>
      <h3 >
        Title : <Link to={`/movie/${movieId}`}>{movieTitle}</Link>
      </h3>
      <p>  {'< Genres >'} </p>
      <ul> {movieGenres.map((item)=><li key={item}>{item}</li>)}</ul>
      <hr />
    </div>
  )

}

MovieList.propTypes = {
  movieId : PropTypes.number.isRequired,
  coverImage :  PropTypes.string.isRequired,
  movieTitle :  PropTypes.string.isRequired,
  movieGenres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MovieList;