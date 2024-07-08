import React, { useEffect } from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FooterDashBoard from '../components/FooterDashBoard';
import '../scss/admintemplate.css';



const AdminTemplates = () => {
    const redirect = useNavigate();
    const navigate = useNavigate();
    const [employee, setemployee] = useState('');
    const [role, setRole] = useState('');
    const [profile, setProfile] = useState([]);
    const gettoken = localStorage.getItem('token');
    const jwt = jwtDecode(gettoken);
    const [password, setPassword] = useState();
    const [showpass, setShowpass] = useState(false);
    const [showpasscurrent, setShowpasscurrent] = useState(false);
    const [showpassconfirm, setShowpassconfirm] = useState(false);




    const fetchdata = async (employeeNumber) => {
        try {
            const res = await axios.get(`https://localhost:7144/api/Employee/${employeeNumber}`);
            console.log("aaaaa");
            console.log(res.data.data);
           
            setProfile(res.data.data)
          

        } catch (error) {
            console.error('Ivaliid', error);
        }
    }
    const detailemp=async ()=>{
       const res=await axios.get(`https://localhost:7144/api/Employee/${jwt.EmployeeNumber}`) 
       const detail=res.data.data;
       if(detail.isActive===false){
        localStorage.removeItem('token');
        redirect('/')
        window.location.reload();
       }
    }
    useEffect(() => {
        detailemp();
        fetchdata();
        if (gettoken) {
            try {
                const decode = jwtDecode(gettoken);
                const Fullname = decode.name;
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
        try {
            localStorage.removeItem('token');
            localStorage.removeItem('expirationTime');
            navigate('/')

        } catch (error) {

            console.error('Logout Fails', error);

        }

    }

    const ChangePassword = async () => {
        var confirmNewPassword = document.getElementById("confirmNewPassword").value;
        var newPassword = document.getElementById("newPassword").value;
        const current = document.getElementById('Current').value;
        const empid = parseInt(jwt.ID);
        const checkFirstLetter = /^[A-Z]{1}/
        const regpassword = /^[A-Z]{1}[a-zA-Z0-9]{7,}$/

        if (!checkFirstLetter.test(newPassword)) {
            document.getElementById("checknewpassword").style.visibility = "visible"
            document.getElementById("checknewpassword").innerHTML = "*The first character must be capitalized"
            return;
        }
        document.getElementById("checknewpassword").style.visibility = "hidden"
        if (!regpassword.test(newPassword)) {
            document.getElementById("checknewpassword").style.visibility = "visible"
            document.getElementById("checknewpassword").innerHTML = "*At least 8 characters"
            return;
        }
        if (confirmNewPassword === newPassword) {
            console.log(empid)
            document.getElementById("checkconfirmpassword").style.visibility = "hidden"
            document.getElementById("checkconfirmpassword").innerHTML = ""
            try {
                const res = await axios.get(`https://localhost:7144/api/Employee/Changepassword/${empid}/${newPassword}/${current}`)
                document.getElementById("btn_closed").click()
            } catch (error) {
                console.error(error)
            }
            finally {


                return
            }

        }


        else {
            console.log(confirmNewPassword)
            document.getElementById("checkconfirmpassword").style.visibility = "visible"
            document.getElementById("checkconfirmpassword").innerHTML = "*Confirm Password fail!"
            return
        }

    }
    const editpassword = async () => {
        const empid = jwtDecode.ID;
        const newpass = document.getElementById('newPassword').value;
        const current = document.getElementById('Current').value;
        const confirm = document.getElementById('confirmNewPassword').value;

        if (confirm !== newpass) {
            alert("New password and confirm password do not match");
        }
        try {
            const res = await axios.get(`https://localhost:7144/api/Employee/Changepassword/${empid}/${current}/${newpass}`)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>

            <div className="row">

                <div id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" style={{ padding: 0 }}>
                    <div className='mt-5 ms-4'>

                        <NavLink to="/" style={{ textDecoration: "none", color: "black", padding: 0 }}><i className="fa-solid fa-house"></i> Back to Home</NavLink>

                    </div>
                    <h5 className='my-5 ms-4' style={{ color: "orange", paddingLeft: 30, fontSize: 25 }}> Dashboard</h5>

                    <div className="sidebar-sticky pt-3 ms-3">
                        <ul className='nav flex-column gap-2'  >
                            {(role === 'Admin' || role === 'HR') && (
                                <div className=' d-grid gap-2'>
                                    <li className='nav-item' style={{ listStyle: "none" }}>
                                        <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/admintemplates/vacacies">
                                            Vacancy
                                        </NavLink>
                                    </li>
                                    <li className='nav-item' style={{ listStyle: "none" }}>
                                        <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/admintemplates/adminblog">
                                            Blog
                                        </NavLink>
                                    </li>
                                </div>
                            )}
                            <li className='nav-item' style={{ listStyle: "none" }}>
                                <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/admintemplates/applicant">
                                    Applicant
                                </NavLink>

                            </li>
                            <li className='nav-item' style={{ listStyle: "none" }}>
                                <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/admintemplates/department">
                                    Department
                                </NavLink>

                            </li>


                            <li className='nav-item' style={{ listStyle: "none" }}>
                                <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/admintemplates/Employee">
                                    Employee
                                </NavLink>

                            </li>
                            <li className='nav-item' style={{ listStyle: "none" }}>
                                <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/admintemplates/ApplyAction">
                                    Apply Action
                                </NavLink>

                            </li>
                            <li className='nav-item' style={{ listStyle: "none" }}>
                                <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/admintemplates/intervew">
                                    Intervew
                                </NavLink>

                            </li>
                            <li className='nav-item' style={{ listStyle: "none" }}>
                                <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/admintemplates/interviewemp">
                                    Intervew Employee
                                </NavLink>

                            </li>
                            {/* <li className='nav-item' style={{ listStyle: "none" }}>
                                <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/admintemplates/createinterview">
                                    create inter view
                                </NavLink>

                            </li> */}

                            {(role === 'Employee') && (
                                <li className='nav-item' style={{ listStyle: "none" }}>
                                    <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/admintemplates/ApplyAction">
                                        ApplyAction
                                    </NavLink>

                                </li>


                            )}


                        </ul>

                    </div>

                </div>
                <main role='main' className="col-md-9 ml-sm-auto col-lg-10  " style={{ padding: 0 }} >
                    <div className=" d-flex justify-content-end flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom mx-5">
                        <div className="dropdown ">
                            <button className="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                {/* <img src={profile && profile.image} style={{ width: 30, height: 30, borderRadius: 30 }} /> */}
                                {employee}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">

                                <li><button className="dropdown-item" type="button"><NavLink to="/admintemplates/Information" style={{ textDecoration: "none", color: "black" }}>Informations</NavLink></button></li>
                                <li><button className="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#changepass">Change Password</button></li>
                                <li><button className="dropdown-item" type="button" onClick={handlelogout}>Logout</button></li>

                            </ul>
                        </div>

                    </div>
                    <div>
                        <Outlet />
                    </div>
                </main>

            </div>
            <div>
                {/* Button trigger modal */}

                {/* Modal */}

                <div className="modal fade" id="changepass" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Change PassWord </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <form >
                                <div className="modal-body">

                                    <div className='inputpass'>
                                        <label for="inputEmail4" class="form-label">Current</label>
                                        <input type={showpasscurrent ? "password" : "text"} className="form-control  " id="Current" placeholder="Current PassWord" value={password} onChange={(e) => setShowpasscurrent(e.target.value)} />
                                        <i className="fa-regular fa-eye pass" onClick={() => setShowpasscurrent(!showpasscurrent)}></i>
                                    </div>
                                    <div className='inputpass'>
                                        <label for="inputEmail4" class="form-label">New PassWord</label><span id="checknewpassword" style={{ color: "red", visibility: "hidden" }}></span>
                                        <input type={showpass ? "password" : "text"} value={password} onChange={(e) => setShowpass(e.target.value)} className="form-control " id="newPassword" placeholder="New PassWord" required />
                                        <i className="fa-regular fa-eye pass" onClick={() => setShowpass(!showpass)}></i>
                                    </div>
                                    <div className='inputpass'>
                                        <label for="inputEmail4" class="form-label">Confirm PassWord</label><span id="checkconfirmpassword" style={{ color: "red", visibility: "hidden" }}></span>
                                        <input type={showpassconfirm ? "password" : "text"} value={password} onChange={(e) => setShowpass(e.target.value)} className="form-control " id="confirmNewPassword" placeholder="Confirm PassWord" required />
                                        <i className="fa-regular fa-eye pass" onClick={() => setShowpassconfirm(!showpassconfirm)}></i>
                                    </div>
                                  

                                </div>
                            </form>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark" id="btn_closed" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={ChangePassword} className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <FooterDashBoard />

        </div>
    )
}

export default AdminTemplates
