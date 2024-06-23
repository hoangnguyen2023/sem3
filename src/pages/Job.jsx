import React, { useEffect, useState } from 'react'
import java from '../images/JavaScript.jpg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'





const Job = () => {
    const [vacancies, setvacancies] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const reponese = await axios.get("https://localhost:7144/api/Vacancy/Getall/")
                console.log(reponese);
                if (reponese && reponese.vacancies) {
                    setvacancies(reponese.vacancies)
                }
            }
            catch (error) {
                console.error("Error fetchData data: ", error)

            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <div className='container'>

                <div className='row row-cols-1 row-cols-lg-6 g-lg-3 m-auto gap-5 ' style={{ alignItems: "center" }}>
                    <div className="card text-dark bg-light mb-3 px-0 " style={{ maxWidth: '38rem' }}>
                        <div className="card-header d-flex justify-content-between"  >
                            <p className=''><i class="fa-solid fa-location-dot"></i> HoChiMinh</p>
                            <p>Full Time</p>


                        </div>
                        <div className="card-body">
                            <h5 className="card-title" >Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-outline-primary'><NavLink to="jobview" style={{ textDecoration: "none", color: "black" }}  className="" >Apply Now</NavLink></button>

                        </div>
                    </div>
                    <div className="card text-dark bg-light mb-3 px-0" style={{ maxWidth: '38rem' }}>
                        <div className="card-header d-flex justify-content-between"  >
                            <p className=''><i class="fa-solid fa-location-dot"></i> HoChiMinh</p>
                            <p>Full Time</p>


                        </div>
                        <div className="card-body">
                            <h5 className="card-title" >Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-outline-primary'><NavLink to="jobview" style={{ textDecoration: "none", color: "black" }}  className="" >Apply Now</NavLink></button>

                        </div>
                    </div>
                    <div className="card text-dark bg-light mb-3 px-0" style={{ maxWidth: '38rem' }}>
                        <div className="card-header d-flex justify-content-between"  >
                            <p className=''><i class="fa-solid fa-location-dot"></i> HoChiMinh</p>
                            <p>Full Time</p>


                        </div>
                        <div className="card-body">
                            <h5 className="card-title" >Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-outline-primary'><NavLink to="jobview" style={{ textDecoration: "none", color: "black" }}  className="" >Apply Now</NavLink></button>

                        </div>
                    </div>
                    <div className="card text-dark bg-light mb-3 px-0" style={{ maxWidth: '38rem' }}>
                        <div className="card-header d-flex justify-content-between"  >
                            <p className=''><i class="fa-solid fa-location-dot"></i> HoChiMinh</p>
                            <p>Full Time</p>


                        </div>
                        <div className="card-body">
                            <h5 className="card-title" >Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-outline-primary'><NavLink to="jobview" style={{ textDecoration: "none", color: "black" }}  className="" >Apply Now</NavLink></button>

                        </div>
                    </div>
                    <div className="card text-dark bg-light mb-3 px-0" style={{ maxWidth: '38rem' }}>
                        <div className="card-header d-flex justify-content-between"  >
                            <p className=''><i class="fa-solid fa-location-dot"></i> HoChiMinh</p>
                            <p>Full Time</p>


                        </div>
                        <div className="card-body">
                            <h5 className="card-title" >Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-outline-primary'><NavLink to="jobview" style={{ textDecoration: "none", color: "black" }}  className="" >Apply Now</NavLink></button>

                        </div>
                    </div>
                    <div className="card text-dark bg-light mb-3 px-0" style={{ maxWidth: '38rem' }}>
                        <div className="card-header d-flex justify-content-between"  >
                            <p className=''><i class="fa-solid fa-location-dot"></i> HoChiMinh</p>
                            <p>Full Time</p>


                        </div>
                        <div className="card-body">
                            <h5 className="card-title" >Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-outline-primary'><NavLink to="jobview" style={{ textDecoration: "none", color: "black" }}  className="" >Apply Now</NavLink></button>

                        </div>
                    </div>
                    <div className="card text-dark bg-light mb-3 px-0" style={{ maxWidth: '38rem' }}>
                        <div className="card-header d-flex justify-content-between"  >
                            <p className=''><i class="fa-solid fa-location-dot"></i> HoChiMinh</p>
                            <p>Full Time</p>


                        </div>
                        <div className="card-body">
                            <h5 className="card-title" >Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-outline-primary'><NavLink to="jobview" style={{ textDecoration: "none", color: "black" }} className="" >Apply Now</NavLink></button>

                        </div>
                    </div>
                    <div className="card text-dark bg-light mb-3 px-0" style={{ maxWidth: '38rem' }}>
                        <div className="card-header d-flex justify-content-between"  >
                            <p className=''><i class="fa-solid fa-location-dot"></i> HoChiMinh</p>
                            <p>Full Time</p>


                        </div>
                        <div className="card-body">
                            <h5 className="card-title" >Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-outline-primary'><NavLink to="jobview" style={{ textDecoration: "none", color: "black" }}  className="" >Apply Now</NavLink></button>

                        </div>
                    </div>
                    <div className="card text-dark bg-light mb-3 px-0" style={{ maxWidth: '38rem' }}>
                        <div className="card-header d-flex justify-content-between"  >
                            <p className=''><i class="fa-solid fa-location-dot"></i> HoChiMinh</p>
                            <p>Full Time</p>


                        </div>
                        <div className="card-body">
                            <h5 className="card-title" >Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-outline-primary'><NavLink to="jobview" style={{ textDecoration: "none", color: "black" }} className="" >Apply Now</NavLink></button>

                        </div>
                    </div>
                    <div className="card text-dark bg-light mb-3 px-0" style={{ maxWidth: '38rem' }}>
                        <div className="card-header d-flex justify-content-between"  >
                            <p className=''><i class="fa-solid fa-location-dot"></i> HoChiMinh</p>
                            <p>Full Time</p>


                        </div>
                        <div className="card-body">
                            <h5 className="card-title" >Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-outline-primary'><NavLink to="jobview" style={{ textDecoration: "none", color: "black" }} className="" >Apply Now</NavLink></button>

                        </div>
                    </div>
                    <div className="card text-dark bg-light mb-3 px-0" style={{ maxWidth: '38rem' }}>
                        <div className="card-header d-flex justify-content-between"  >
                            <p className=''><i class="fa-solid fa-location-dot"></i> HoChiMinh</p>
                            <p>Full Time</p>


                        </div>
                        <div className="card-body">
                            <h5 className="card-title" >Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-outline-primary'><NavLink to="jobview" style={{ textDecoration: "none", color: "black" }}  className="" >Apply Now</NavLink></button>

                        </div>
                    </div>
                    <div className="card text-dark bg-light mb-3 px-0" style={{ maxWidth: '38rem' }}>
                        <div className="card-header d-flex justify-content-between"  >
                            <p className=''><i class="fa-solid fa-location-dot"></i> HoChiMinh</p>
                            <p>Full Time</p>


                        </div>
                        <div className="card-body">
                            <h5 className="card-title" >Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-outline-primary'><NavLink to="/jobview" style={{ textDecoration: "none", color: "black" }} to="" className="" >Apply Now</NavLink></button>

                        </div>
                    </div>
                    <div className="card text-dark bg-light mb-3 px-0" style={{ maxWidth: '38rem' }}>
                        <div className="card-header d-flex justify-content-between"  >
                            <p className=''><i class="fa-solid fa-location-dot"></i> HoChiMinh</p>
                            <p>Full Time</p>


                        </div>
                        <div className="card-body">
                            <h5 className="card-title" >Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-outline-primary'><NavLink to="/jobview" style={{ textDecoration: "none", color: "black" }} to="" className="" >Apply Now</NavLink></button>

                        </div>
                    </div>

                </div>







            </div>

        </div>
    )
}

export default Job
