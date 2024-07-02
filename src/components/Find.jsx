import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Job from '../pages/Job';
import { NavLink } from 'react-router-dom';

const Find = () => {
    const [deparment, setDepartment] = useState(null);
    useEffect(() => {
        const getdepartment = async () => {
            try {
                const res = await axios.get(`https://localhost:7144/api/Department`);
                if (res && res.data) {
                    setDepartment(res.data)
                }
            }
            catch (error) {
                console.error('Error not Found Department');
            }
        }
        getdepartment();

    }, [])
    const[vacancies , setvacancies] = useState([])
    const[resultVacancies , setresultVacancies] = useState([])
const FastFind =(e)=>{
    
    var departmentName = e.target.dataset.name;
    if(departmentName ==="All"){
        setresultVacancies(vacancies)
    }
    else{
        var result = []
        vacancies.forEach(e=>{
            if(e.departments
                .departmentName!==null){
                if(e.departments
                    .departmentName.toLowerCase()===departmentName.toLowerCase()){
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
            const res = await axios.get("https://localhost:7144/api/Vacancy/GetAllVacancy");
            console.log("KK")
            console.log(res);
            
            if (res && res.data) {
                setresultVacancies(res.data)
                setvacancies(res.data);
            }
        }
        catch (error) {
            console.error("Error fetchData data: ", error)

        }
    }
    fetchData();
}, [])


    return (
        <div className='m-5'>
                <div className='row  justify-content-center'>
                    <h4 className='text-center'>Fast Search</h4>
                    <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3 '>
                        {/* {deparment && deparment.map(item => (
                           
                        ))} */}
                         <button className='card-title btn btn-outline-success m-3' data-name="All" onClick={(e)=>FastFind(e)} >
                           All
                        </button>
                        <button className='card-title btn btn-outline-success m-3' data-name="HR" onClick={(e)=>FastFind(e)} >
                            HR
                        
                        </button>
                        <button className='card-title btn btn-outline-success m-3'>
                            <NavLink to="" style={{ textDecoration: "none", color: "black" }}>Marketing</NavLink>
                        </button>
                        <button className='card-title btn btn-outline-success m-3' data-name="IT" onClick={(e)=>FastFind(e)} >
                           IT
                        </button>
                        <button className='card-title btn btn-outline-success m-3'>
                            <NavLink to="" style={{ textDecoration: "none", color: "black" }}>Accounting</NavLink>
                        </button>
                        <button className='card-title btn btn-outline-success m-3'  data-name="Sale" onClick={(e)=>FastFind(e)}>
                            Sales
                        </button>
                        <button className='card-title btn btn-outline-success m-3'>
                            <NavLink to="" style={{ textDecoration: "none", color: "black" }}>Export Department</NavLink>
                        </button>
                        <button className='card-title btn btn-outline-success m-3'>
                            <NavLink to="" style={{ textDecoration: "none", color: "black" }}>Design</NavLink>
                        </button>


                    </div>

                </div>
                <div>
            <div className='container m-auto my-5 '>

                <div className='row row-cols-1 row-cols-lg-5 g-lg-3 m-auto gap-5' style={{ alignItems: "center" }}>
                    {resultVacancies && resultVacancies.map((item) =>(

                          <div key={item.vacancyID} className="card text-dark bg-light mb-3 px-0 " style={{ maxWidth: '38rem' }}>
                          <div className="card-header d-flex justify-content-between"  >
                        
                              <p className=''><i class="fa-solid fa-location-dot"></i> {item.local}</p>
                              <p> {item.statusWork}</p>  
                          </div>
                          <div className="card-body">
                              <h5 className="card-title css_title" >{item.title}</h5>
                              {/* <p className="card-title " >VacancyID:{item.vacancyID}</p>
                              <p className='card-title '>departmentID:{item.departmentID} </p> */}
                              <p className="card-text css_decription">{item.description}</p>
                              <p className='card-text'>Status:{item.status}</p>
                              <p className='card-text'>Slot:{ item.slot}</p>
                          </div>
                          <div className='card-footer text-center'>
                              <button className='btn btn-outline-primary'><NavLink to={`/jobview/${item.vacancyID}`} style={{ textDecoration: "none", color: "black" }}  className="" >Apply Now</NavLink></button>
  
                          </div>
                      </div>

                    ))}
                  
                </div>
            
            </div>

        </div>
           
        </div>


    )
}

export default Find
