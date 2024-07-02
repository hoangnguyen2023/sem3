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
        console.log(res)
        if (res && res.data) {
            setProfile(res.data)
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
    const [newpassword, setnewpassword] = useState({
        newPassword: '',
        employeeID: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setnewpassword({ ...newpassword, [name]: value });
    }
    const editpassword = async () => {
        const { newPassword, employeeID } = newpassword;
        const formdata = new FormData();
        formdata.append('HashPassword', newPassword);
        formdata.append('EmployeeID', employeeID)
        try {
            const res = await axios.put('https://localhost:7144/api/Employee/changePassword',formdata)
            if(res.status===200){
                console.log('change password success');
            }
        } catch (error) {

        }
    }
    if (load) return <p> Loading ....</p>
    //    if(error)return <p>{error.message}</p>
    return (
        <div>
            <div className='text-center'>
                <img src={profile && profile.image && profile.image} roundedCircle style={{ width: 100, height: 100 }} className='mx-2 my-2 ' />
            </div>


            <div className="card mx-2 my-2">

                <div className="card-header">
                    Information
                </div>
                <div className="card-body">
                    <h5 className="card-title">Profile Person</h5>
                    <div className="input-group flex-nowrap my-2">
                        <span className="input-group-text " id="addon-wrapping">Full Name</span>
                        <input type="text" className="form-control" value={profile && profile.fullName && profile.fullName} readOnly aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <span className="input-group-text my-2 " id="addon-wrapping">EmployeeNumber:</span>
                    <input type="text" className="form-control my-2" value={profile && profile.employeeNumber && profile.employeeNumber} readOnly aria-label="Username" aria-describedby="addon-wrapping" />
                    <span className="input-group-text my-2 " id="addon-wrapping">Department:</span>
                    <input type="text" className="form-control my-2" value={profile && profile.departments && profile.departments} readOnly aria-label="Username" aria-describedby="addon-wrapping" />
                    <span className="input-group-text my-2 " id="addon-wrapping">Role:</span>
                    <input type="text" className="form-control my-2" value={profile && profile.role && profile.role} readOnly aria-label="Username" aria-describedby="addon-wrapping" />
                    <span className="input-group-text my-2 " id="addon-wrapping">Email:</span>
                    <input type="text" className="form-control my-2" value={profile && profile.email && profile.email} readOnly aria-label="Username" aria-describedby="addon-wrapping" />
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card mx-2 my-2">

                <div className="card-header">
                    Edit Profile
                </div>
                <div className="card-body">
                    <h5 className="card-title"> Edit Profile</h5>
                    <div className="input-group flex-nowrap my-2">
                        <span className="input-group-text " id="addon-wrapping">Full Name</span>
                        <input type="text" className="form-control" value={profile && profile.fullName && profile.fullName} readOnly aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <span className="input-group-text my-2 " id="addon-wrapping">EmployeeNumber:</span>
                    <input type="text" className="form-control my-2" value={profile && profile.employeeNumber && profile.employeeNumber} readOnly aria-label="Username" aria-describedby="addon-wrapping" />
                    <span className="input-group-text my-2 " id="addon-wrapping">Department:</span>
                    <input type="text" className="form-control my-2" value={profile && profile.departments && profile.departments} readOnly aria-label="Username" aria-describedby="addon-wrapping" />
                    <div className='text-footer text-center'>
                        <button type="button" className="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Edit
                        </button>
                        <button type='submit' className='btn btn-primary'> Subimt</button>
                    </div>

                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <form className="row g-3 needs-validation " onSubmit={editpassword} >



                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Change Password</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    {/* <label htmlFor="exampleFormControlInput1" className="form-label">PassWord</label>
                                    <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="PassWord" /> */}
                                    <div className="mb-3">
                                        <input type="text" name='employeeID' value={profile && profile.employeeID && profile.employeeID} onChange={handleChange}/>
                                        <label htmlFor="exampleFormControlInput1" className="form-label">New PassWord</label>
                                        <input type="text" className="form-control" name='newpassword' onChange={handleChange} id="exampleFormControlInput1" placeholder="rePassWord" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>


        </div>

    )
}

export default InformationDetails
