import React from 'react'
import fresher from '../images/Fresher.jpg'
import { NavLink } from 'react-router-dom'

const FresherJob = () => {
    return (
        <div>
            <div className='d-flex justify-content-between '>
                <div className="col-sm-5 col-md-6">
                    <div className="card h-100">                     
                        <div className="card-body">
                            <h3 className="card-title">Job IT Fresher </h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button className='btn btn-danger'><NavLink to="" style={{textDecoration:"none",color:"white"}}>Register Now</NavLink></button>
                        </div>
                    </div>
                </div>
                <div className='col-sm-5 col-md-6'>
                    <img src={fresher} alt="" />
                </div>


            </div>
        </div>
    )
}

export default FresherJob
