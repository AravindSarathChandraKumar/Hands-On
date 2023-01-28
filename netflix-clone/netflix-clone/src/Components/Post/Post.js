import React from 'react'
import Poster from '../../assets/poster.jpg'

function Post() {
  return (
    <div className='movie-row'>
        <div className="posters">
            <img className='poster-img' src={Poster} alt="Movie Poster" />
        </div>
    </div>
  )
}

export default Post
