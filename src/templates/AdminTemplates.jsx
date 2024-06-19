import React, { useEffect } from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AdminTemplates = () => {
    const redirect=useNavigate();
    const navigate = useNavigate();
    const [employee, setemployee] = useState('');
    useEffect(() => {
        const gettoken = localStorage.getItem('token');
        if (gettoken) {
            try {
                const decode = jwtDecode(gettoken);
                const Fullname = decode.Fullname;
                setemployee(Fullname);
            } catch (error) {
                console.error('invalid token', error);
            }
        }
        else{
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
                    className="w-25 bg-dark text-white"
                    style={{ minHeight: "100vh" }}
                >

                    <h4 className='text-warning p-5'><i className="fa-solid fa-house"></i> Dash Board</h4>
                    <ul className="mt-2  ">
                        <li className='nav-item' style={{ listStyle: "none" }}>
                            <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/admintemplates/Employee">
                                Employee
                            </NavLink>
                        </li>

                        <li className='nav-item' style={{ listStyle: "none" }}>
                            <NavLink className={"nav-link"} to="/admintemplates/vacacies">
                                Vacacies
                            </NavLink>
                        </li>
                        <li className='nav-item' style={{ listStyle: "none" }}>
                            <NavLink className={"nav-link"} to="/admintemplates/department">
                                Department
                            </NavLink>
                        </li>
                        <li className='nav-item' style={{ listStyle: "none" }}>
                            <NavLink className={"nav-link"} to="/admintemplates/employeeinterview">
                                Employee Interview
                            </NavLink>
                        </li>

                    </ul>

                    <ul className='mt-2'>
                        <li className='nav-item' style={{ listStyle: "none" }}>
                            <NavLink className={"nav-link"} to="/admintemplates/interview">
                                InterView
                            </NavLink>
                        </li>
                        <li className='nav-item' style={{ listStyle: "none" }}>
                            <NavLink className={"nav-link"} to="/admintemplates/adminblog">
                                Blog
                            </NavLink>
                        </li>


                        <li className='nav-item' style={{ listStyle: "none" }}>
                            <NavLink className={"nav-link"} to="/admintemplates/scheduleinterview">
                                Schedule Interview
                            </NavLink>
                        </li>
                        <li className='nav-item' style={{ listStyle: "none" }}>
                            <NavLink className={"nav-link"} to="/admintemplates/department">
                                Department
                            </NavLink>
                        </li>
                        <li className='nav-item' style={{ listStyle: "none" }}>
                            <NavLink className={"nav-link"} to="/admintemplates/department">
                                Department
                            </NavLink>
                        </li>

                    </ul>



                </div>
                <div className="w-75">
                    <div className=" bg-dark text-white w-100 p-3 text-end me-2">
                        <div className="dropdown">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src='' style={{ width: 30, height: 30, borderRadius: 30 }}/>
                            {employee}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button"><NavLink  to="/admintemplates/formcv" style={{textDecoration:"none",color:"black"}}>Proflile</NavLink></button></li>
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
