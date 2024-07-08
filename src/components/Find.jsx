import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Job from '../pages/Job';
import { NavLink } from 'react-router-dom';
import '../scss/Header.css';
import { jwtDecode } from 'jwt-decode';

const Find = () => {
    const [deparment, setDepartment] = useState(null);
    useEffect(() => {
        const getdepartment = async () => {
            try {
                const res = await axios.get(`https://localhost:7144/api/Department`);
                if (res && res.data.data) {
                    setDepartment(res.data.data)
                }
            }
            catch (error) {
                console.error('Error not Found Department');
            }
        }
        getdepartment();

    }, [])
    var token = localStorage.getItem("token")
    var jwt = "";
    if (token !== null) {
        jwt = jwtDecode(token)
    }




    const [vacancies, setvacancies] = useState([])
    const [resultVacancies, setresultVacancies] = useState([])
    const FastFind = (e) => {

        var departmentName = e.target.dataset.name;
        if (departmentName === "All") {
            setresultVacancies(vacancies)

        }
        else {
            var result = []
            vacancies.forEach(e => {
                if (e.departments
                    .departmentName !== null) {
                    if (e.departments
                        .departmentName.toLowerCase() === departmentName.toLowerCase()) {
                        result.push(e)
                    }
                }

            })

            setresultVacancies(result)
        }



    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://localhost:7144/api/Vacancy/GetOpenVacancy");
                console.log("KK")
                console.log(res);

                if (res && res.data.data) {
                    setresultVacancies(res.data.data)
                    setvacancies(res.data.data);
                }
            }
            catch (error) {
                console.error("Error fetchData data: ", error)

            }
        }
        fetchData();
    }, [])


    return (
        <div className='d-flex justify-content-center'>

            <div className='m-5 '>
                <div className='row  justify-content-center'>
                    <div className='ms-5'>
                        <h3 className='text-center my-5'>JOB OPPORTINITY FOR YOU</h3>
                        <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3  stylejob'>
                            <button className='card-title btn btn-outline-success m-3' data-name="All" onClick={(e) => FastFind(e)} >
                                All
                            </button>
                            {deparment && deparment.map(item => (
                                <button className='card-title btn btn-outline-success m-3' data-name={item.departmentName} onClick={(e) => FastFind(e)} >
                                    {item.departmentName}

                                </button>

                            ))}

                        </div>

                    </div>
                    <div>
                        <div className='container m-auto my-5 '>

                            <div className='row row-cols-1 row-cols-lg-5 g-lg-3 m-auto gap-5 ms-5 stylejob ' style={{ alignItems: "center", }}>
                                {resultVacancies && resultVacancies.map((item) => (

                                    <div key={item.vacancyID} className="card text-dark bg-light mb-3 px-0 " style={{ maxWidth: '38rem' }}>
                                        <div className="card-header d-flex justify-content-between"  >

                                            <p className=''><i class="fa-solid fa-location-dot"></i> Ho Chi Minh</p>
                                            <p> {item.statusWork}</p>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title css_title" >{item.title}</h5>

                                            <p className="card-text css_decription">{item.description}</p>
                                            <p className='card-text'>Status:{item.status}</p>
                                            {/* <p className='card-text'>Slot:{item.slot}</p> */}
                                        </div>
                                        <div className='card-footer text-center'>
                                            <button disabled={item.applyActions.some(e => e.applyEmail === jwt.email)} className='btn btn-outline-primary'><NavLink to={`/jobview/${item.vacancyID}`} style={{ textDecoration: "none", color: "black" }} className="" >{item.applyActions.some(e => e.applyEmail === jwt.email) ? "Applied" : "Apply Now"} </NavLink></button>

                                        </div>
                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>


                </div>

            </div>

        </div>



    )
}

export default Find
