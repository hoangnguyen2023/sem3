import React, { useEffect, useState } from 'react'
import java from '../images/JavaScript.jpg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import "../scss/blog.css"


const Job = () => {
    const [vacancies, setVacancies] = React.useState([]);
    const [error,setError]=useState(null);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://localhost:7144/api/Vacancy/Getall");
                console.log("KK")
                console.log(res);
                
                if (res && res.data) {
                    setVacancies(res.data);
                }
            }
            catch (error) {
                console.error("Error fetchData data: ", error)

            }
        }
        fetchData();
    }, [])

    

    if (error) return <div>Error: {error.message}</div>

    return (
        <div>
            <div className='container my-5'>

                <div className='row row-cols-1 row-cols-lg-6 g-lg-3 m-auto gap-5 ' style={{ alignItems: "center" }}>
                    {vacancies && vacancies.map((item) =>(

                          <div key={item.vacancyID} className="card text-dark bg-light mb-3 px-0 " style={{ maxWidth: '38rem' }}>
                          <div className="card-header d-flex justify-content-between"  >
                              <p className=''><i class="fa-solid fa-location-dot"></i> HoChiMinh</p>
                              <p>Full Time</p>  
                          </div>
                          <div className="card-body">
                              <h5 className="card-title css_title" >{item.title}</h5>
                              <p className="card-text css_decription">{item.description}</p>
                              <p className='card-text'>Status:{item.status}</p>
                              <p className='card-text'>Slot:{ item.slot}</p>
                          </div>
                          <div className='card-footer'>
                              <button className='btn btn-outline-primary'><NavLink to={`/jobview/${item.vacancyID}`} style={{ textDecoration: "none", color: "black" }}  className="" >Apply Now</NavLink></button>
  
                          </div>
                      </div>

                    ))}
                  
                </div>
            
            </div>

        </div>
    )
}

export default Job
