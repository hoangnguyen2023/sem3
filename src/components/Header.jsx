
import React from 'react'
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react'
import { NavLink, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Header = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [employeeNumber,setEmployeeNumber]=useState('');
    const [hashPassword,setHashpassword]=useState('');
    const navigate=useNavigate();
    const Login= async (e)=> {
        e.preventDefault();
        const requestOptions = {
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              employeeNumber:employeeNumber,
              hashPassword:hashPassword
            }),
          };
        try{
            const response=await fetch('https://localhost:7144/api/Auth/Login',requestOptions);
            const data=await response.json();
            const token=data.token;
            localStorage.setItem('token',token);
            const decodeToken=localStorage.getItem('token',token);
            const jwtdecode=jwtDecode(decodeToken);
            const decode=jwtdecode.Role;
            if(decode==='admin'||decode ==='manager'||decode==='Employee'){
                return navigate('/admintemplates');
            }
                
        }catch(error){
            console.error('');
        }
          
      };

  

    return (
        <div>

           
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">ACB Company</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse " id="collapsibleNavId">
                    <ul className="navbar-nav me-auto  mt-lg-0  ml-auto">

                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="career">Career</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="About">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="blog">Blog</NavLink>
                        </li>
                    

                    </ul>


                    <div>
                        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#myModal">
                            Login
                        </button>
                        {/* The Modal */}
                        <div className="modal" id="myModal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                        <h4 className="modal-title">Sign in</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                    </div>
                                    {/* Modal body */}
                                    <div className="modal-body">
                                        <p className='text-mute-dark'>Link your account to continue using ACB's services</p>

                                        <form onSubmit={Login}>
                                            <nav>
                                                <div>
                                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Applicants</button>
                                                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Employee</button>

                                                    </div>
                                                    <div className="tab-content" id="nav-tabContent">
                                                        <div className="tab-pane fade show active text-center mt-4" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                            <button className='btn btn-outline-secondary '><i className="fa-brands fa-google" style={{ color: "white" }}></i> Continute with Google Account</button>
                                                        </div>
                                                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                                                            <label className="blogid">Employee Number</label>
                                                            <input type="text" className='form-control'  value={employeeNumber} onChange={(e)=>setEmployeeNumber(e.target.value)} id="Employee" name='employeeNumber' placeholder='Employee Number' required />
                                                            <label className="title">PassWord</label>
                                                            <input type="passWord" className='form-control' value={hashPassword} onChange={(e)=>setHashpassword(e.target.value)} id="PassWord" name='hashPassword' placeholder='PassWord' required />
                                                            <div className='text-end mt-4'>
                                                                <button type="button" className="btn btn-danger mx-2" data-bs-dismiss="modal">Close</button>
                                                                <button type="submit" className="btn btn-danger " data-bs-dismiss="modal">Submit</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </nav>
                                        </form>
                                    </div>
                                    {/* Modal footer */}
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>


        </div>

    )
}

export default Header
