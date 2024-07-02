import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AdminEmployee = () => {
    const [fullname, setfullname] = useState('');
    const [role, setrole] = useState('Employee');
    const [email, setemail] = useState('');

    const [upload, setupload] = useState('');
    const [departmentID, setDepartmentID] = useState('');
    const [employee, setemployee] = useState([]);
    const [deparment, setDepartment] = useState([]);
    const postEmployee = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('fullname', fullname);
        formdata.append('role', role);
        formdata.append('email', email);
        formdata.append('departmentID', departmentID);
        const requestOptions = {
            method: "POST",
            body: formdata
        }
        try {
            const response = await fetch('https://localhost:7144/api/Employee/CreateEmployees', requestOptions);
            console.log(response);
        } catch (error) {
            console.error('Create is unsuccess', error);
        }
    }
    const handleCheck = (value) => {
        setrole(value)
    }

    useEffect(() => {
        const getdepartment = async () => {
            try {
                const response = await axios.get('https://localhost:7144/api/Department');
                console.log(response.data)
                setDepartment(response.data);
            } catch (error) {
                console.error('not found data', error);
            }
        };
        getdepartment();
    }, []);
    useEffect(() => {
        const getemployee = async () => {
            try {
                const response = await axios.get('https://localhost:7144/api/Employee/GetAllEmployees');
                setemployee(response.data);
            } catch (error) {
                console.error('not found data', error);
            }
        }
        getemployee();
    }, []);

    return (
        <div>
            <div>
                <button type="button" className="btn btn-primary m-4" data-bs-toggle="modal" data-bs-target="#myModal">
                    Create Employee
                </button>
                {/* The Modal */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Create Employee</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <form onSubmit={postEmployee}>

                                    <label className="DeparmentNumber">DeparmentNumber</label>
                                    <select className="form-select" aria-label="Default select example" onChange={(e) => setDepartmentID(e.target.value)}>
                                        {deparment && deparment.map((item) => (
                                            <option key={item.departmentID} value={item.departmentID}>{item.departmentName}</option>
                                        ))}
                                    </select>

                                    <label className="Role">Role</label>
                                    {role}
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="Role" id="Admin" onClick={() => handleCheck("Admin")} />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Admin
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="Role" id="Manager" onClick={() => handleCheck("HR")} />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                HR
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="Role" id="Employee" onClick={() => handleCheck("Employee")} defaultChecked />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Employee
                                            </label>
                                        </div>
                                    </div>
                                    <label className="Fullname">Fullname</label>
                                    <input type="text" className='form-control' id="Fullname" name='Fullname' value={fullname} onChange={(e) => setfullname(e.target.value)} />
                                    <label className="Email">Email</label>
                                    <input type="email" className='form-control' id="Email" name='Email' value={email} onChange={(e) => setemail(e.target.value)} />
                                    <button type="submit" className="btn btn-danger" data-bs-dismiss="modal" >Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Employee Number</th>
                        <th scope="col">Role</th>
                        <th scope="col">Full name</th>
                        <th scope="col">Email</th>

                    </tr>
                </thead>
                {employee && employee.map((get) => (
                    <tbody key={get.employeeID}>
                        <tr>
                            <td>{get.employeeNumber}</td>
                            <td>{get.role}</td>
                            <td>{get.fullName}</td>
                            <td>{get.email}</td>

                        </tr>

                    </tbody>
                ))};

            </table>

        </div>
    )
}

export default AdminEmployee