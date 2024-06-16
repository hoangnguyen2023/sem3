import React from 'react'
import java from '../images/JavaScript.jpg'
import { NavLink } from 'react-router-dom'
import cv from '../images/groupteam2.jpg'

const Popular = () => {
    return (
        <div className='container overflow-hidden'>
            <div className="row gx-5">
                <div className="col mt-4">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">
                                <div class="card mb-3" style={{ border: "none" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={java} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h3 className="card-title">Java Developer</h3>
                                                <p className="card-mute-text "><i class="fa-solid fa-location-dot"></i> Tầng 17, Tòa nhà IDMC Mỹ Đình, số 15 Phạm Hùng, Phường Mỹ Đình</p>

                                                <p className="card-text"><small className="text-muted"><NavLink to="/login" style={{ textDecoration: "none", color: "red", textTransform: "capitalize" }}>Đăng nhập để xem mức lương</NavLink></small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                        </li>

                    </ul>

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <h4 className='m-2'>Work responsibility</h4>
                            <h5>Develop part</h5>
                            <nav>
                                <ul>
                                    <li>
                                        Participating in software development projects for financial institutions and Korean partners. Customers are financial institutions (including banks, financial companies …)
                                    </li>
                                    <li>
                                        Join in development process for all digital products at InfoPlus such as develop new features, improvement, detect and fix bugs.
                                    </li>
                                    <li>
                                        Work with team leader, manager to synchronize about the solution and complete assigned tasks. You can suggest the other solution if it is better.
                                    </li>
                                    <li>
                                        Develop and design scalable RESTful API
                                    </li>
                                    <li>
                                        Write the clean code, easy to reuse and extends
                                    </li>
                                    <li>
                                        Troubleshoot, test and maintain the core product software and databases to ensure strong optimization and functionality
                                    </li>
                                </ul>
                            </nav>
                            <h5>Training part:</h5>
                            <ul>
                                <li>
                                    Learning new technology, create seminar
                                </li>
                            </ul>
                            <h5>Skills and Expertise</h5>
                            <nav>
                                <ul>
                                    <li>
                                        +3 years of experience as Java Developer , Spring Boot, JPA, MySQL (knowledge about MongoDB, Kafka is plus), RestfulAPI, microservice
                                    </li>
                                    <li>
                                        Strong understand about Java core, OOP / Strong understand about digital banking, firmbanking, collection & payment feature of banking
                                    </li>
                                    <li>
                                        Good logical thinking, hard-working, positive attitude, good communication skills
                                    </li>
                                    <li>
                                        Be able to use English at work
                                    </li>
                                    <li>
                                        Have experienced in Banking or Fintech is a plus.
                                    </li>

                                </ul>
                            </nav>
                            <h5>Welfare for you</h5>
                            <nav>
                                <ul>
                                    <li>
                                        Salary: Upto 40M
                                    </li>
                                    <li>
                                        Office hours: Monday- Friday, off on Saturday and Sunday.
                                    </li>
                                    <li>
                                        Annual holidays leave will be following Vietnam law and as company regulations
                                    </li>
                                    <li>
                                        Other benefits as stipulated by the company (regime for birthday, wedding, pregnancy, etc.)
                                    </li>
                                    <li>
                                        13th salary, best personal achievement bonus of the year according to company regulations
                                    </li>
                                    <li>
                                        Social insurance, health insurance and unemployment insurance will be under Labor Law.
                                    </li>
                                    <li>
                                        Workshop, Team-building activities
                                    </li>
                                    <li>
                                        Dynamic, youthful and professional working environment
                                    </li>
                                    <li>
                                        Have opportunities to study and upgrade your skills with Korean experts.
                                    </li>
                                    <li>
                                        Have experience focusing on user experience, have the opportunity to develop many products in the
                                    </li>
                                    <li>
                                        Have opportunities to join the Free Korean training course, technical training course
                                    </li>

                                </ul>
                            </nav>

                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="row m-4">
                                <div className="col-sm-4">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h5 className="card-title"><i class="fa-solid fa-building-circle-check"></i></h5>
                                            <p className="card-text">Career</p>
                                            <p className="card-text">Services IT</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h5 className="card-title"><i class="fa-solid fa-people-group"></i></h5>
                                            <p className="card-text">Company size</p>
                                            <p className="card-text">100-499</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h5 className="card-title"><i class="fa-solid fa-flag"></i></h5>
                                            <p className="card-text">National </p>
                                            <p className="card-text">VietNam,Korea </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='content'>
                                <h4>about us: </h4>
                                <p>Company Acb Top 10 leading brands in Vietnam in 2021 InfoPlus is a company specializing in API Financial software solutions, supporting automated Financial services. With the first automated financial system based on Korean technology in Vietnam, we strive to create an automatic banking service system connecting to businesses and individuals, contributing to promoting operations. economy and improve financial quality in Vietnam. Our Services: Support optimal API Finance solutions for Consumer Finance Business customers Support customized Fintech services such as ERP and BMS for e-commerce, Electronic wallet (e-wallet), and Tel corp with customer financial database.  Supports state-of-the-art Financial Services using data collected from transactions between Businesses, Customers and Financial Institutions.   Supports advanced financial services technology such as Corporate Finance, CMS and Virtual Account payments.  Specialized financial services technology (Financial Data mass storage and real-time processing) is recognized by many financial institutions in Vietnam.</p>

                            </div>
                            <div className="row m-4 ">
                                <div className="col-sm-4">
                                    <div className="card">
                                        <img src={cv} className="card-img" alt="..." />

                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card">
                                        <img src={cv} className="card-img" alt="..." />

                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card">
                                        <img src={cv} className="card-img" alt="..." />

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="col mt-4">
                    <div className="d-grid gap-2">
                        <button className="btn btn-danger p-3" type="button">Apply Now</button>
                        <button className="btn btn-danger p-3" type="button">Create CV Recruitment </button>
                    </div>
                    <div className="card border-success mt-3 " >
                        <div className="card-header bg-transparent border-success">General information</div>
                        <div className="card-body text-dark">
                            <h5 className="card-title">Website</h5>
                            <p className="card-title">http://localhost:3000/popularCompany</p>
                            <p className="card-title">Address :</p>
                            <p className="card-text"><i class="fa-solid fa-location-dot"></i> Tầng 17, Tòa nhà IDMC Mỹ Đình, số 15 Phạm Hùng, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Thành phố Hà Nội</p>
                            <p className="card-text"><i class="fa-solid fa-location-dot"></i> 163 Nguyễn Văn Trỗi, Phường 11, Quận Phú Nhuận, Thành phố Hồ Chí Minh</p>
                        </div>
                        <div className="card-footer bg-transparent border-success text-center">
                            <div className='d-plex '>
                                <button type="button" class="btn btn-outline-secondary mx-2">Java</button>
                                <button type="button" class="btn btn-outline-secondary mx-2">Node Js</button>
                                <button type="button" class="btn btn-outline-secondary mx-2">Laravel</button>
                                <button type="button" class="btn btn-outline-secondary mx-2">Asp.net</button>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Popular
