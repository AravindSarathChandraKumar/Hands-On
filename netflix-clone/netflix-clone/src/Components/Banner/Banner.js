import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios';
import requests from '../../Requests';
function Banner() {
  
  const[movies,setMovies]= useState([]);
  useEffect(() => {
    async function fetchMovies(){
      const req = await axios.get(requests.netflixOriginals);
      setMovies( req.data.results[Math.floor(Math.random()* req.data.results.length-1)]);
      return req
    }
    fetchMovies();
  }, [])


  function trunDescription(string,n){
      return string?.length > n? string.substring(0,n-1)+"...": string;
  }
  return (
    <div className='banner col-sm-12' style={{ 
      backgroundSize:"cover",
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})`}}>
        <div class="col-lg-6 content align-items-center justify-content-center border-primary">
            <div className="h2 title text-white ">
                {movies?.title||movies?.name|| movies?.original}
            </div>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <div className="description text-white">
                { trunDescription(`${movies.overview}`, 150)}
            </div> 
            
        </div>
        <div className="fade_bottom"/>
    </div>
  )
}

export default Banner