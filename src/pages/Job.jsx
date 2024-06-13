import React from 'react'
import java from '../images/JavaScript.jpg'
import asp from '../images/Asp.jpg'
import c from '../images/C++.jpg'
import laravel from '../images/laravel.jpg'
import node from '../images/Node.jpg'
import python from '../images/python.jpg'
import { NavLink } from 'react-router-dom'



const Job = () => {
    return (
        <div className='m-5'>
            <div className='container-fluid '>

                <div className='row gap-5  '>
                   
                
                        <div className="card col-lg-2 col-md-3 col-sm-4" >
                            <img src={java} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               <NavLink to="/jobview">Supply Now</NavLink>
                            </div>
                        </div>

                        <div className="card col-lg-2 col-md-3 col-sm-4" >
                            <img src={java} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger ">Supply Now</button>
                            </div>
                        </div>
                        <div className="card col-lg-2 col-md-3 col-sm-4" >
                            <img src={java} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger ">Supply Now</button>
                            </div>
                        </div>
                        <div className="card col-lg-2 col-md-3 col-sm-4" >
                            <img src={java} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger ">Supply Now</button>
                            </div>
                        </div>
                        <div className="card col-lg-2 col-md-3 col-sm-4" >
                            <img src={java} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger ">Supply Now</button>
                            </div>
                        </div>
                        <div className="card col-lg-2 col-md-3 col-sm-4" >
                            <img src={java} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger ">Supply Now</button>
                            </div>
                        </div>
                        <div className="card col-lg-2 col-md-3 col-sm-4" >
                            <img src={java} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger ">Supply Now</button>
                            </div>
                        </div>
                        <div className="card col-lg-2 col-md-3 col-sm-4" >
                            <img src={java} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className='card-text'>Price : <span>15$</span></p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-danger ">Supply Now</button>
                            </div>
                        </div>

                </div>

            </div>

        </div>
    )
}

export default Job
