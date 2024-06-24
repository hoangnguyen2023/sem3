import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const JobFullStack = ({ id }) => {
    const [jobview, setJobview] = useState(null);
    const [error, setError] = useState(null);
    const [load, setLoad] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://localhost:7144/api/Vacancy/GetVacaID/${id}`)
                console.log(res);
                setJobview(res && res.data);

            } catch (error) {
                setError(error);
            } finally {
                setLoad(false)
            }
        };
        fetchData();
    }, [])
    if (load) return <div>Loading ...</div>
    if (error) return <div> Error: {error.message}</div>

    return (
        <div>
            {jobview && (
                <div className='text-sm-start text-md-start text-lg-start m-3' >
                    <NavLink to="/home" style={{ textDecoration: "none", fontSize: 18 }}><i class="fa-solid fa-arrow-left"></i> Back </NavLink>
                    <h4 className='py-4'>{jobview.title}</h4>
                    <button className='btn btn-outline-secondary  ' style={{ borderRadius: "10px", marginRight: "5px" }}> <i className="fa-solid fa-location-dot "></i> Ho Chi Minh</button>

                    <button className='btn btn-outline-secondary ' style={{ borderRadius: "10px" }}>Full time</button>
                    <div className='row '>
                        <div className="col-sm-6">
                            <div className="card " style={{ border: "none" }}>
                                <div className="card-body">
                                    <button className='btn btn-outline-primary my-2' style={{ display: "block" }}><p>Create Day: {jobview.createDate}</p></button>
                                    <button className='btn btn-outline-primary my-2'><p>Close Day:{jobview.closeDate}</p></button>

                                    <h5 className="card-title">What you will do</h5>
                                    <p className="card-text">
                                        <ul>
                                            <li style={{ listStyle: "none" }}>
                                                {jobview.description}
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
                                    <button className='btn btn-outline-primary'><NavLink style={{ textDecoration: "none", color: "black" }} to={`/applyjob/${jobview.vacancyID}`} >Apply For This Position</NavLink> </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            )}


        </div>
    )
}

export default JobFullStack
