
import React, { useEffect } from 'react'
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react'
import { NavLink, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';
const Header = () => {
    const [show, setShow] = useState(false);
    const [isGoogleApiReady, setIsGoogleApiReady] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [employeeNumber, setEmployeeNumber] = useState('');
    const [hashPassword, setHashpassword] = useState('');
    const [user, setUser] = useState(null);
    const [decode, setdecode] = useState('');
    const [role, setRole] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    


    const navigate = useNavigate();
    const Login = async (e) => {
        e.preventDefault();
        const RegEmployeeNumber = /^VG-\d{4}$/
        if (!RegEmployeeNumber.test(employeeNumber)) {
            document.getElementById("modal").style.display = "block"
            document.getElementById("checkemployeeNumber").style.visibility = "visible"
            return;
        }
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                employeeNumber: employeeNumber,
                hashPassword: hashPassword
            }),
        };
        try {

            document.getElementById("checkemployeeNumber").style.visibility = "hidden"
            const response = await fetch('https://localhost:7144/api/Auth/Login', requestOptions);
            const data = await response.json();
            console.log(data)
            const token = data.token;
            const expirationTime=new Date().getTime()+3*60*60*1000;

            localStorage.setItem('token', token);
            localStorage.setItem('expirationTime',expirationTime);

            const jwtdecode = jwtDecode(token);
            console.log(jwtdecode)
            document.getElementById("Btn_closed").click();
            setdecode(jwtdecode)

        } catch (error) {
            alert("Log in fail!")
            console.error('');
        }



    };
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const name = jwtDecode(token);
            setdecode(name);

        }

    }, []);
    const handleforgot=async (e)=>{
        e.preventDefault();
        const email=document.getElementById('pass').value
        const formdata=new FormData();
        formdata.append('email',email);
   
        
        try{
            const res = await axios.post(`https://localhost:7144/api/Employee/ForgotPassword`,formdata)
            message.success('success')

            navigate('/')     
          
        }catch(error){
            message.error('fail')
        }

    }
 


    const handleCredentialResponse = async (response) => {
        try {
            const res = await axios.get('https://localhost:7144/api/Applicant/google-response', {
                headers: {
                    "Authorization": `Bearer ${response.credential}`
                }
            });
            localStorage.setItem('token', response.credential);
            setdecode(res.data);
            window.location.href = '/';
        } catch (error) {
            console.error('Error getting token:', error);
        }
    };
    

    useEffect(() => {
        window.handleCredentialResponse = handleCredentialResponse;
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        document.body.appendChild(script);

        return () => {
            // Cleanup the event listener when the component unmounts
            window.handleCredentialResponse = null;
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false)
        setdecode('');
        navigate('/')
    };

  


    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand mx-4" to="/">ACB Company</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse " id="collapsibleNavId">
                    <ul className="navbar-nav me-auto  mt-lg-0  ml-auto">

                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="career">CAREER</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="About">ABOUT US</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="blog">BLOG</NavLink>
                        </li>
                        {/* {isAuthenticated ? (
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="">Profile</NavLink>
                            </li>

                        ) : (decode)} */}


                    </ul>

                    <div>
                        {decode ? (
                            <div className='d-flex align-content-start flex-wrap text-center'>
                                <div className="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="admin" data-bs-toggle="dropdown" aria-expanded="false">
                                        {decode.name}
                                    </button>
                                    {(decode.Roless == "Admin" || decode.Roless == "HR" || decode.Roless == "Employee") ? (
                                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="admin">
                                            <li><NavLink className="dropdown-item" to="/AdminTemplates">Profile {decode.Roless} </NavLink></li>


                                        </ul>
                                    ) : (<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="admin">

                                        <li><NavLink className="dropdown-item" to="/profile"> Profile </NavLink></li>

                                    </ul>)}

                                </div>

                                <button type='button' className='btn btn-outline-primary mx-2' onClick={handleLogout}>Log Out</button>

                            </div>
                        ) : (
                            <button type="button" className="btn btn-dark mx-4" data-bs-toggle="modal" data-bs-target="#myModal">
                                Log In
                            </button>
                        )}

                        {/* The Modal */}
                        <div className="modal" id="myModal">
                            <div className="modal-dialog">
                                <div className="modal-content" id='modal'  >
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                        <h4 className="modal-title">Sign In</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                    </div>
                                    {/* Modal body */}

                                    <div className="modal-body">
                                        <p className='text-mute-dark'>Link your account to continue using ACB's services</p>

                                        <form onSubmit={Login}>
                                            <nav>
                                                <div>
                                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Applicant</button>
                                                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Employee</button>
                                                    </div>
                                                    <div className="tab-content" id="nav-tabContent">
                                                        <div className="tab-pane fade show active text-center mt-4" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                            <button className='btn btn-outline-secondary '>
                                                                <>
                                                                    <div className="box_email">
                                                                        <div
                                                                            id="g_id_onload"
                                                                            data-client_id="678669696146-eavok6hpljl2uvig7vkgnai0o2n4pk7f.apps.googleusercontent.com"
                                                                            data-callback="handleCredentialResponse"
                                                                        ></div>
                                                                        <div
                                                                            className="g_id_signin custom"
                                                                            data-type="text"
                                                                            data-width="400"
                                                                            data-size="medium"
                                                                            data-theme="filled_black"
                                                                            data-text="sign_in_with"
                                                                            data-shape="rectangular"
                                                                            data-logo_alignment="center"

                                                                        ></div>
                                                                    </div>
                                                                </>
                                                            </button>
                                                        </div>
                                                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                                                            <label className="blogid">Employee Number</label> <span style={{ color: "Red", visibility: "hidden" }} id="checkemployeeNumber">*Wrong Format, required : "VG-xxxx" </span>
                                                            <input type="text" className='form-control' value={employeeNumber} onChange={(e) => setEmployeeNumber(e.target.value)} id="Employee" name='employeeNumber' placeholder='Employee Number' required />
                                                            <label className="title1">PassWord</label>
                                                            <input type="passWord" className='form-control' value={hashPassword} onChange={(e) => setHashpassword(e.target.value)} id="PassWord" name='hashPassword' placeholder='PassWord' required />

                                                            <NavLink className="my-2" data-bs-toggle="modal" data-bs-target="#forgotpass" style={{ textDecoration: "none" }} to=''>Forgot your password?</NavLink>

                                                            <div className='text-end mt-4'>
                                                                <button type="button" id="Btn_closed"  className="btn btn-danger mx-2" data-bs-dismiss="modal">Close</button>
                                                                <button type="submit" className="btn btn-danger " >Submit</button>
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
            <div>
                {/* Button trigger modal */}

                {/* Modal */}
                
                <div className="modal fade" id="forgotpass"  data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="input-group-text" id="basic-addon2">Forgot PassWord</span>
                                <button type="button" className="btn-close"  data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <p >Input Your Email</p>

                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                                    <input type="text" id='pass' className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" onClick={handleforgot} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

    
               
            </div>



        </div>

    )
}

export default Header