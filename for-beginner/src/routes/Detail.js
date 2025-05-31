
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList'

const Detail = ()=>{
  const [ loading , setLoading ] = useState(true) ;
  const [ detail, setDetail ] = useState({});
  const { id } = useParams();
  

  const getDetail = async ()=>{
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    const json = await response.json();
    console.log('Detail 조회 완료');
  
    setDetail(json.data.movie);
    setLoading(false);

  }

  useEffect(()=>{
     getDetail();
  },[])

  return(
    <div>
      <h1>Detail</h1> <hr/>
      { loading ? <h3>Loading...</h3> : 
      <div>
        <MovieList 
        coverImage={detail.medium_cover_image} movieTitle={detail.title} 
        movieGenres={detail.genres} movieId={detail.id} />

        <Link to='/'><button>목록</button></Link>
      </div>
      }

    </div>
  )
}

export default Detail ;