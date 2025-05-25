import { useState, useEffect } from 'react';

function App(){
  const [ loading, setLoading ] = useState(true);
  const [ movies, setMovies ] = useState([]);

  useEffect(()=>{
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
     .then(response => response.json())
     .then(json =>{
      console.log(json.data.movies);
      setMovies(json.data.movies);
      setLoading(false);
    })
  },[])

  

  return(
    <div>
      {loading ? <h1>Loading.... </h1> : 
        <div>
          <h1> Movie List ({movies.length})</h1> <hr />
          {movies.map((movie)=>(
            <div>
              <img src={ movie.medium_cover_image}  alt={movie.title + '-image'}/>
              <h3 key={movie.id}>
                Title : {movie.title}
              </h3>
              <p>  {'< Genres >'} </p>
              <ul> {movie.genres.map((item)=><li key={item}>{item}</li>)}</ul>
              <hr />
            </div>
          ))}
        </div>
      }

    </div>
  )
}

export default App ; 