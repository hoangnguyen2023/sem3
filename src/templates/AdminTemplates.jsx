import React, { useEffect } from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AdminTemplates = () => {
    const redirect = useNavigate();
    const navigate = useNavigate();
    const [employee, setemployee] = useState('');
    const [role, setRole] = useState('');
    const [profile, setProfile] = useState(null)
    const fetchdata = async (employeeNumber) => {
        try {
            const res = await axios.get(`https://localhost:7144/api/Employee/${employeeNumber}`);
            console.log(res);
            if (res && res.data) {
                setProfile(res.data)
            }
        } catch (error) {
            console.error('Ivaliid', error);
        }
    }
    useEffect(() => {
        const gettoken = localStorage.getItem('token');
        fetchdata()
        if (gettoken) {
            try {
                const decode = jwtDecode(gettoken);
                const Fullname = decode.Fullname;
                const decoderole = decode.Roless;
                setemployee(Fullname);
                setRole(decoderole);
            } catch (error) {
                console.error('invalid token', error);
            }
        }
        else {
            redirect('/');
        }
    }, []);
    const handlelogout = () => {
        localStorage.removeItem('token');
        navigate('/')
    }
    return (
        <>
            <div className="d-flex">
                <div
                    className="bg-dark text-white"
                    style={{ minHeight: "100vh", width: "15rem" }}
                >

                    <h5 className='text-warning py-5 ms-4'><i className="fa-solid fa-house"></i>
                        <NavLink className={"nav-link"} to="/">
                            Dashboard
                        </NavLink>
                    </h5>
                    <ul className="mt-2  ">

                    </ul>

                    <ul className='ms-4 mt-4' >
                        {(role === 'Admin' || role === 'HR') && (
                            <li className='nav-item' style={{ listStyle: "none" }}>
                                <NavLink className={"nav-link"} to="/admintemplates/vacacies">
                                    Vacancy
                                </NavLink>
                                <NavLink className={"nav-link"} to="/admintemplates/adminblog">
                                    Blog
                                </NavLink>

                            </li>
                        )}
                        <li className='nav-item' style={{ listStyle: "none" }}>
                            <NavLink className={"nav-link"} to="/admintemplates/applicant">
                                Applicant
                            </NavLink>
                        </li>
                        <li className='nav-item' style={{ listStyle: "none" }}>
                            <NavLink className={"nav-link"} to="/admintemplates/department">
                                Department
                            </NavLink>
                        </li>

                        <li className='nav-item' style={{ listStyle: "none" }}>
                            <NavLink className={"nav-link"} to="/admintemplates/Employee">
                                Employee
                            </NavLink>
                        </li>
                        <li className='nav-item' style={{ listStyle: "none" }}>
                            <NavLink className={"nav-link"} to="/admintemplates/ApplyAction">
                                ApplyAction
                            </NavLink>
                        </li>
                        <li className='nav-item' style={{ listStyle: "none" }}>
                            <NavLink className={"nav-link"} to="/admintemplates/intervew">
                                intervew
                            </NavLink>
                        </li>
                        <li className='nav-item' style={{ listStyle: "none" }}>
                            <NavLink className={"nav-link"} to="/admintemplates/interviewemp">
                                intervew Employee
                            </NavLink>
                        </li>

                        {(role === 'Employee') && (
                            <li className='nav-item' style={{ listStyle: "none" }}>
                                <NavLink className={"nav-link"} to="/admintemplates/ApplyAction">
                                    ApplyAction
                                </NavLink>
                            </li>


                        )}


                    </ul>
                </div>
                <div className="" style={{ width: "80rem" }} >
                    <div className=" bg-dark text-white w-100 p-3 text-end me-2">
                        <div className="dropdown">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                {/* <img src={profile && profile.image} style={{ width: 30, height: 30, borderRadius: 30 }} /> */}
                                {employee}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button"><NavLink to="/admintemplates/Information" style={{ textDecoration: "none", color: "black" }}>Informations</NavLink></button></li>
                                <li><button className="dropdown-item" type="button" onClick={handlelogout}>Logout</button></li>

                            </ul>
                        </div>

                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>

            </div>


        </>
    )
}

export default AdminTemplates
