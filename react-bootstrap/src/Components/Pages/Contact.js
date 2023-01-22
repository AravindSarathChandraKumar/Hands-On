import React from 'react'
import Navbar from '../Navbar';

function Contact() {
  return (
    <div>
        <Navbar/>
        <div className="container-lg align-items-center justify-content-center">

                <h2 className='text-center p-3'>Contact Us</h2>
                <form mt-3 pb-5>
                <div className="row">
                    <div className="col-2">
                    </div>
                    <div className="col-4">
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                    </div>
                <div className="col-4">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                </div>
                </div>
                <div className="row">
                <div className="col-2">
                    </div>
                    <div className="col-5 mt-3">
                    <input type="text" className="form-control" placeholder="Email" aria-label="Email"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                    </div>
                    <div className="col-5">
                        <div className="mb-3 mt-3">
                            <textarea className="form-control"  placeholder="Message..." id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                        <div className="col-5">
                            <div class="mb-5">
 
                                <input className="form-control" type="file" id="formFileMultiple" multiple/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">

                        </div>
                        <div className="col-4">
                            <button pe-4 type="button" class="btn btn-primary btn-large">Submit</button>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Contact