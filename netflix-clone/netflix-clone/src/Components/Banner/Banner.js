import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner container-fluid col-sm-12'>
        <div class="col-lg-6 content align-items-center justify-content-center border-primary">
            <div className="h2 title text-white ">
                Movie Title Here
            </div>
            <div className="p des text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, impedit!
            </div>
            <button  type="button" className="btn btn-outline-light btn-large mt-2">More</button>
        </div>
    </div>
  )
}

export default Banner