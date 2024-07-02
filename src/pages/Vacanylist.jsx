import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Vacanylist = () => {
    const { id } = useParams()
    console.log(id);
    const [vacancies,setvacancies]=useState([]);
    useEffect(()=>{
        const getvacancies=async ()=>{
            try{
                const res=await axios.get(`https://localhost:7144/api/Vacancy/GetVacaID/${id}`);
                console.log(res.data)
                if(res&&res.data){
                    setvacancies(res.data);
                }
            }catch(error){
                console.error("not found",error);
            }
        }
        getvacancies();
    },[])
    return (
        <div>
            <div className='container m-auto my-5 '>

                <div className='row row-cols-1 row-cols-lg-5 g-lg-3 m-auto gap-5' style={{ alignItems: "center" }}>
                    {vacancies&&(
                        <div key={vacancies.vacancyID} className="card text-dark bg-light mb-3 px-0 " style={{ maxWidth: '38rem' }}>
                            <div className="card-header d-flex justify-content-between"  >
 
                                <p className=''><i class="fa-solid fa-location-dot"></i> {vacancies.local}</p>
                                <p> {vacancies.statusWork}</p>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title css_title" >{vacancies.title}</h5>
                                <p className="card-text css_decription">VacancyID:{vacancies.vacancyID}</p>
                                <p className="card-text css_decription">{vacancies.description}</p>
                                <p className='card-text'>Status:{vacancies.status}</p>
                                <p className='card-text'>Slot:{vacancies.slot}</p>
                            </div>
                            <div className='card-footer text-center'>
                                <button className='btn btn-outline-primary'><NavLink to={`/jobview/${vacancies.vacancyID}`} style={{ textDecoration: "none", color: "black" }} className="" >Apply Now</NavLink></button>

                            </div>
                        </div>

                    )}

                </div>

            </div>
        </div>
    )
}

export default Vacanylist
