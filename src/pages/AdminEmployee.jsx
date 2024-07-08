import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'

const AdminEmployee = () => {
    const [fullname, setfullname] = useState('');
    const [role, setrole] = useState('Employee');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('')
    const [title, settitle] = useState('');
    const [upload, setupload] = useState('');
    const [departmentID, setDepartmentID] = useState('');
    const [employee, setemployee] = useState([]);
    const [deparment, setDepartment] = useState([]);
    const [editemp, setedit] = useState(null);
    const gettoken = localStorage.getItem('token');
    const decode = jwtDecode(gettoken)
    useEffect(() => {
        var Role = document.querySelectorAll(".role");
        console.log(Role)
        if (Role.length > 0) {
            Role.forEach(e => {
                if (e.value === editemp.role) {
                    e.checked = true
                }
            })
        }
    }, [editemp])
    const handledit = async (employee) => {


        // Role.forEach(e=>{
        //     if(e.value == employee.role){
        //         e.checked
        //     }
        // })
        setedit(employee);
    }
    const getemployee = async () => {
        try {
            const response = await axios.get('https://localhost:7144/api/Employee/GetAllEmployees/Get');
            setemployee(response.data.data);
            console.log(response.data.data)
        } catch (error) {
            console.error('not found data', error);
        }
    }
    const getEmpbyID = async (id) => {
        try {
            const res = await axios.get(`https://localhost:7144/api/Employee/${id}`)
            setedit(res.data.data)
        } catch (error) {
            console.error('not found data', error);
        }
    }
    useEffect(() => {
        // const getemployee = async () => {
        //     try {
        //         const response = await axios.get('https://localhost:7144/api/Employee/GetAllEmployees');
        //         setemployee(response.data.data);
        //     } catch (error) {
        //         console.error('not found data', error);
        //     }
        // }
        getemployee();
    }, []);
    const postEmployee = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('Fullname', fullname);
        formdata.append('Role', role);
        formdata.append('Email', email);
        formdata.append('DepartmentID', departmentID);
        formdata.append('PhoneNumber', phone)
        formdata.append('Title', title)
        // formdata.append('avatar',upload)

        try {
            const response = await axios.post('https://localhost:7144/api/Employee/CreateEmployees', formdata, {
                headers: {
                    'Authorization': `Bearer ${gettoken}`
                }
            });
            console.log(response);
            getemployee();
            if (response.status === 200) {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Create is unsuccess', error);
        }
    }
    const editEmp = async (e) => {
        e.preventDefault()
        const editname = document.getElementById("EditfullName").value
        const editphone = document.getElementById("EditPhone").value
        const edittitle = document.getElementById("Edittitle").value
        const editemail = document.getElementById("EditEmail").value
        const formdata = new FormData();
        var Rolevalue = "";
        if (decode.Roless === "Admin") {
            var Role = document.querySelectorAll(".role")
            Role.forEach(e => {
                if (e.checked === true) {
                    Rolevalue = e.value
                }
            })
            const editdepart = document.getElementById("editdepart").value
            formdata.append("DepartmentID", editdepart)
            formdata.append("Role", Rolevalue)
        }
        else {
            Rolevalue = editemp.role
            formdata.append("DepartmentID", editemp.departmentID)
            formdata.append("Role", Rolevalue)
        }


        formdata.append("EmployeeNumber", editemp.employeeNumber)
        formdata.append("FullName", editname)
        formdata.append("PhoneNumber", editphone)
        formdata.append("Title", edittitle)
        formdata.append("Email", editemail)



        try {
            const res = await axios.post("https://localhost:7144/api/Employee/EditAccount", formdata,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            setedit(null);
            getemployee();

        } catch (e) {
            console.error(e);
        }

    }
    const handleCheck = (value) => {
        setrole(value)
    }

    useEffect(() => {
        const getdepartment = async () => {
            try {
                const response = await axios.get('https://localhost:7144/api/Department/activeistrue');
                console.log(response.data)
                setDepartment(response.data.data);
            } catch (error) {
                console.error('not found data', error);
            }
        };
        getdepartment();
    }, []);
    const CloseFormEdit = () => {
        setedit(null);
    }
    const handleChangeStatus = async (value) => {
        try {
            const res = await axios.get(`https://localhost:7144/api/Employee/changeStatus/${value.id}/${value.status}`)
            console.log(res.data)
            getemployee();
        } catch (error) {
            console.error(error)
        }
    }
    // useEffect(() => {
    //     const getemployee = async () => {
    //         try {
    //             const response = await axios.get('https://localhost:7144/api/Employee/GetAllEmployees');
    //             setemployee(response.data.data);
    //         } catch (error) {
    //             console.error('not found data', error);
    //         }
    //     }
    //     getemployee();
    // }, []);

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
                                    <label className="Phone">Phone</label>
                                    <input type="text" className='form-control' id="Phone" name='Phone' value={phone} onChange={(e) => setphone(e.target.value)} />
                                    <label className="title1">Title</label>
                                    <input type="text" className='form-control' id="title1" name='title1' value={title} onChange={(e) => settitle(e.target.value)} />
                                    {/* <label className="Image">Image</label>
                                    <input type="file" className='form-control' id="Image" name='Image' value={upload} onChange={(e)=>setupload(e.target.files[0])} /> */}


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
                        <th scope="col">Fullname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Depart</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {employee?.map((employee, index) => (
                    <tbody key={index}>
                        <tr>
                            <td>{employee.employeeNumber}</td>
                            <td>{employee.role}</td>
                            <td>{employee.fullName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.departments?.departmentName}</td>
                            <td>{employee.isActive ? 'Active' : 'UnActive'}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handledit(employee)}
                                    data-bs-target="#editModal"
                                >
                                    Edit
                                </button>
                                <button onClick={() => handleChangeStatus({ status: false, id: employee.employeeID })} className='btn btn-warning'>deactive</button>
                                <button onClick={() => handleChangeStatus({ status: true, id: employee.employeeID })} className='btn btn-warning'>active</button>
                            </td>

                        </tr>

                    </tbody>
                ))}

            </table>

            {editemp && (
                <div className="modal" id="editModal" style={{ display: "block" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Vacancy</h4>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    onClick={CloseFormEdit}
                                />
                            </div>
                            <div className="modal-body">
                                <form action="/submit-form" method="POST">


                                    <label className="fullName">fullName</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="EditfullName"
                                        name="EditfullName"
                                        defaultValue={editemp.fullName}
                                    // defaultValue={editvacan.slot}
                                    />

                                    {decode.Roless == "Admin" && (
                                        <div>
                                            <label className="Role">Role</label>

                                            <div className="form-check">
                                                <input className="form-check-input role" type="radio" name="Role" id="Admin" value="Admin" onClick={() => handleCheck("Admin")} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Admin
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input role" type="radio" name="Role" id="HR" value="HR" onClick={() => handleCheck("HR")} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    HR
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input role" type="radio" name="Role" id="Employee" value="Employee" onClick={() => handleCheck("Employee")} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    Employee
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                    {decode.Roless == "Admin" && (
                                        <select className="form-select" defaultValue={editemp.departmentID} aria-label="Default select example" id="editdepart">
                                            {deparment && deparment.map((item) => (
                                                <option key={item.departmentID} value={item.departmentID}>{item.departmentName}</option>
                                            ))}
                                        </select>)}

                                    <label className="Email">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="EditEmail"
                                        name="EditEmail"
                                        defaultValue={editemp.email}
                                        readOnly
                                    // defaultValue={editvacan.slot}
                                    />
                                    <label className="Phone">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="EditPhone"
                                        name="EditPhone"
                                        defaultValue={editemp.phoneNumber}
                                    // defaultValue={editvacan.slot}
                                    />
                                    <label className="title1">title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Edittitle"
                                        name="Edittitle"
                                        defaultValue={editemp.title}
                                    // defaultValue={editvacan.slot}
                                    />

                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            data-bs-dismiss="modal"
                                            onClick={editEmp}
                                        >
                                            Save
                                        </button>
                                    </div>
                                    {/* <input hidden id="vacacyId" defaultValue={editvacan.vacancyID} /> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            )}
        </div>
    )
}

export default AdminEmployee