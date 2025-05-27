import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';

function Home(){
  const [ loading, setLoading ] = useState(true);
  const [ movies, setMovies ] = useState([])
  
  async function getMovie(){
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
    const json = await response.json()
  
    console.log( '영화 로딩 완료')
    setMovies(json.data.movies);
    setLoading(false);
  }
  

  useEffect(()=>{
    getMovie();
  },[])

  

  return(
    <div>
      {loading ? <h1>Loading.... </h1> : 
        <div>
          <h1> Movie List ({movies.length})</h1> <hr />
          {movies.map((movie)=>(
            <MovieList 
              key={movie.id} 
              coverImage={movie.medium_cover_image} 
              movieTitle={movie.title} 
             movieGenres={movie.genres} 
            />
          ))}
        </div>
      }
    </div>
  )
}

export default Home ; 