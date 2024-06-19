import React, { useState, useEffect } from 'react'
import cv from '../images/cv2.jpg'
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const FormCV = () => {
    const [profile, setProfile] = useState(null);
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
    if (load) return <p>Loading ....</p>
    //    if(error)return <p>{error.message}</p>
    return (
        <div className='m-5'>
            <div className='row justify-content-center'>

                <div className="card col-lg-6 col-md-3 col-sm-4" >
                    <Image src={cv} roundedCircle />
                    <div className="card-body">
                        <h5 className="card-title">Name: {profile && profile.fullName && profile.fullName}</h5>
                        <p className="card-text">Employee Number:{profile && profile.employeeNumber && profile.employeeNumber}</p>
                        <p className="card-text">Email:{profile && profile.email && profile.email}</p>
                        <p className="card-text">Department:{profile && profile.departments && profile.departments}</p>
                        <p className="card-text">Role Number:{profile && profile.role && profile.role}</p>
                        {/* <!-- Button trigger modal --> */}

                        <form className="row g-3 needs-validation" noValidate>

                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Change Password
                            </button>
                            <button type='submit' className='btn btn-primary'> Subimt</button>
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
                                                <label htmlFor="exampleFormControlInput1" className="form-label">PassWord</label>
                                                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="PassWord" />
                                                <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Confirm PassWord</label>
                                                <input type="repassword" className="form-control" id="exampleFormControlInput1" placeholder="rePassWord" />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>

        </div>

    )
}

export default FormCV
