import React, { useState, useEffect } from 'react'
import cv from '../images/cv2.jpg'
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const InformationDetails = () => {
    const [profile, setProfile] = useState([]);
    const [load, setLoad] = useState(null);
    const fetchdata = async (empnumber) => {
        var res = await axios.get(`https://localhost:7144/api/Employee/${empnumber}`)
        console.log("aaaaa")
        console.log(res.data)
        if (res && res.data) {
            setProfile(res.data.data)
            setLoad(false);
        }
    }
    useEffect(() => {
        var token = localStorage.getItem('token')
        var parse = jwtDecode(token)
        console.log(parse)
        //Goi Api
        fetchdata(parse.EmployeeNumber)
    }, [])
   
   
   
    if (load) return <p> Loading ....</p>
    //    if(error)return <p>{error.message}</p>
    return (
        <div>
            <div className='text-center'>
                <img src={profile && profile.image && profile.image} roundedCircle style={{ width: 100, height: 100 }} className='mx-2 my-2 ' />
            </div>


            <div className="card mx-2 my-2">

                <div className="card-header">
                <h5 className="card-title">PROFILE PERSON</h5>
                </div>
                <div className="card-body">
                   
                    <div className="input-group flex-nowrap my-2">
                        <span className="input-group-text " id="addon-wrapping">Full Name</span>
                        <input type="text" className="form-control" value={profile && profile.fullName && profile.fullName} readOnly aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <span className="input-group-text my-2 " id="addon-wrapping">EmployeeNumber</span>
                    <input type="text" className="form-control my-2" value={profile && profile.employeeNumber && profile.employeeNumber} readOnly aria-label="Username" aria-describedby="addon-wrapping" />
                    <span className="input-group-text my-2 " id="addon-wrapping">Department</span>
                    <input type="text" className="form-control my-2" value={profile.departments?.departmentName || ''} readOnly aria-label="Username" aria-describedby="addon-wrapping" />
                    <span className="input-group-text my-2 " id="addon-wrapping">Role</span>
                    <input type="text" className="form-control my-2" value={profile && profile.role && profile.role} readOnly aria-label="Username" aria-describedby="addon-wrapping" />
                    <span className="input-group-text my-2 " id="addon-wrapping">Email</span>
                    <input type="text" className="form-control my-2" value={profile && profile.email && profile.email} readOnly aria-label="Username" aria-describedby="addon-wrapping" />
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            {/* <div className="card mx-2 my-2">

                <div className="card-header">
                <h5 className="card-title"> Edit Profile</h5>
                </div>
                <div className="card-body">
                   
                    <div className="input-group flex-nowrap my-2">
                        <span className="input-group-text " id="addon-wrapping">Full Name</span>
                        <input type="text" className="form-control" value={profile && profile.fullName && profile.fullName} readOnly aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <span className="input-group-text my-2 " id="addon-wrapping">EmployeeNumber</span>
                    <input type="text" className="form-control my-2" value={profile && profile.employeeNumber && profile.employeeNumber} readOnly aria-label="Username" aria-describedby="addon-wrapping" />
                    <span className="input-group-text my-2 " id="addon-wrapping">Department</span>
                    <input type="text" className="form-control my-2" value={profile.departments?.departmentName || ''} readOnly aria-label="Username" aria-describedby="addon-wrapping" />

                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
            <form className="row g-3 needs-validation "  >



            
            </form>


        </div>

    )
}

export default InformationDetails
