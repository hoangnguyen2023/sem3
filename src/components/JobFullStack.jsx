import React from 'react'
import { NavLink } from 'react-router-dom'

const JobFullStack = () => {
    return (
        <div>
            <div className='text-sm-start text-md-start text-lg-start m-3'>
                <NavLink to="/home" style={{textDecoration:"none" ,fontSize:18}}><i class="fa-solid fa-arrow-left"></i> Back </NavLink>
                <h4 >Full Stack Software Engineer, Javascript, Adtima</h4>
                <button className='btn btn-outline-secondary  ' style={{ borderRadius: "10px", marginRight: "5px" }}> <i className="fa-solid fa-location-dot "></i> Ho Chi Minh</button>

                <button className='btn btn-outline-secondary ' style={{ borderRadius: "10px" }}>Full time</button>
                <div className='row '>
                    <div className="col-sm-6">
                        <div className="card " style={{border:"none"}}>
                            <div className="card-body">
                                <h5 className="card-title">What you will do</h5>
                                <p className="card-text">
                                    <ul>
                                        <li>
                                            Developing and maintaining our products or outsource as assigned by the Development Lead;
                                        </li>
                                        <li>
                                            Analyze product requirements and specifications to create, communicate, and implement;
                                        </li>
                                        <li>
                                            Develop Web App/ Backend APIs using Node JS or PHP;
                                        </li>
                                        <li>
                                            Design database using MySQL, MongoDB;
                                        </li>
                                        <li>
                                            Train/mentor developers in your team as required.
                                        </li>
                                    </ul>

                                </p>
                                <h5 className="card-title">What you will need</h5>
                                <p className="card-text">
                                    <ul>
                                        <li>
                                            Developing and maintaining our products or outsource as assigned by the Development Lead;
                                        </li>
                                        <li>
                                            Analyze product requirements and specifications to create, communicate, and implement;
                                        </li>
                                        <li>
                                            Develop Web App/ Backend APIs using Node JS or PHP;
                                        </li>
                                        <li>
                                            Design database using MySQL, MongoDB;
                                        </li>
                                        <li>
                                            Train/mentor developers in your team as required.
                                        </li>
                                    </ul>

                                </p>
                               <button className='btn btn-outline-primary'>Apply For This Position</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default JobFullStack
