import React from 'react'
import cv from '../images/cv2.jpg'
import '../scss/blog.css'

const Member = () => {
    return (
        <div className='container my-5'>
            <div className='title__career'>

            <h2 className='text-center text_header my-5'>ABOUT US </h2>

            </div>
              
            <div className="row row-cols-1 row-cols-md-4 g-4">
         
                <div className="col">
                    <div className="card">
                        <img src={cv} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Full Name :</p>
                            <p className="card-text">Email :</p>
                            <p className="card-text">Phone :</p>
                            <p className="card-text">ID :</p>
                          
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={cv} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Full Name :</p>
                            <p className="card-text">Email :</p>
                            <p className="card-text">Phone :</p>
                            <p className="card-text">ID :</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={cv} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Full Name :</p>
                            <p className="card-text">Email :</p>
                            <p className="card-text">Phone :</p>
                            <p className="card-text">ID :</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={cv} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Full Name :</p>
                            <p className="card-text">Email :</p>
                            <p className="card-text">Phone :</p>
                            <p className="card-text">ID :</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Member
