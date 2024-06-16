import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminTemplates = () => {
    return (
        <>
            <div className="d-flex">
                <div
                    className="w-25 bg-dark text-white"
                    style={{ minHeight: "100vh" }}
                >
                
                    <h4 className='text-warning p-5'><i className="fa-solid fa-house"></i> Dash Board</h4>
                    <ul className="mt-2">
                        <li>
                            <NavLink className={"nav-link"} to="/admintemplates/Employee">
                                Employee
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"nav-link"} to="/admintemplates/adminblog">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"nav-link"} to="/admintemplates/vacacies">
                                Vacacies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"nav-link"} to="/admintemplates/department">
                                Department
                            </NavLink>
                        </li>



                    </ul>


                </div>
                <div className="w-75">
                    <div className="bg-dark text-white w-100 p-3 text-end">
                        <i className="fa fa-user"></i>                       
                        <NavLink className="nav-link" to="#">Sign out</NavLink>
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
