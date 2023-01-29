import React, { useEffect, useState } from 'react'
import './Post.css'
import axios from '../../axios';



function Post({title,url,isRowBig=false}) {

  const base_url="https://image.tmdb.org/t/p/original/";

  const[movies,setMovies] = useState([]);

  useEffect(() => {
   async function fetchData(){
    const res= await axios.get(url)
    setMovies(res.data.results);
    return res;
   }

   fetchData();
  }, [url])
console.log(movies)
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row_posters">
        {
          movies.map((movie)=>{
            return(
              ((isRowBig && movie.poster_path) || (!isRowBig && movie.backdrop_path)) && (
              <img 
              key={movie.id}
              className={`row_poster ${isRowBig && "row_posterBig"}`}
              src={`${base_url}${
                isRowBig?movie.poster_path:movie.backdrop_path
              }`} alt={movie.name} />
              )
            )
          })
        }
        </div>
    </div>
  )
}

export default Post
