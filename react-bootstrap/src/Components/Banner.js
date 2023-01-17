import React from 'react'
import ebook from '../assets/img/ebook-cover.png';
function Banner() {
  return (
    <div className="container-fluid">
        <div className="section bg-light text-center align-items-center justify-content-center pt-4  mb-4">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h2 className='display-3'>Lorem ipsum dolor sit amet.</h2>
                    <p className="lead text-secondary">Lorem ipsum dolor sit,
                     amet consectetur adipisicing elit.</p>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid" src={ebook} alt="Ebook" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner