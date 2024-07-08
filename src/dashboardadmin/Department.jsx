import { message } from 'antd';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Department = () => {
    const token = localStorage.getItem("token")
    const decode = jwtDecode(token);
    const [deparment, setDepartment] = useState([]);
    const [departmentname, setDepartmentname] = useState('');
    const [departmentID, setdepartmentID] = useState('')
    const [edit, setedit] = useState(null)
    const [editdepname, seteditdepname] = useState('');
    const handleEit = async (deparment) => {
        setedit(deparment);
    }


    const getdepartment = async () => {
        try {
            const response = await axios.get('https://localhost:7144/api/Department/');
            setDepartment(response.data.data);
        } catch (error) {
            console.error('not found data', error);
        }
    };

    const postDepartment = async (e) => {

        e.preventDefault();
        const departname=document.getElementById("departmentName").value
        const formdata = new FormData();
        formdata.append("DepartmentName",departname)
        try {
            const response = await axios.post('https://localhost:7144/api/Department/CreateDepartment', formdata,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                }
            );
           
            getdepartment();


        } catch (error) {
            console.error('invalid Department')
        }
    }
    const editDepart = async (e) => {
        e.preventDefault();
        const editDepartName = document.getElementById('editdepartname').value;
        const formdata = new FormData();
        // formdata.append("DepartmentID", edit.departmentID)
        formdata.append('DepartmentNumber', edit.departmentNumber)
        formdata.append("DepartmentName", editDepartName)
        try {
            const res = await axios.post('https://localhost:7144/api/Department/EditDepartment', formdata,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                }

            )
            getdepartment();
        } catch (error) {
            console.error('invalid Department')
        }
    }
    const handleChangeStatus=async (value)=>{
        try{
            const res=await axios.get(`https://localhost:7144/api/Department/changestatus/${value.id}/${value.status}`);
            console.log(res.message)
            message.success("change status success")
            getdepartment();
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        getdepartment();

    }, []);
    return (
        <div>
            <div>
                <button type="button" className="btn btn-primary m-4" data-bs-toggle="modal" data-bs-target="#myModal">
                    Create Departments
                </button>
                {/* The Modal */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Create Department</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <form onSubmit={postDepartment}>
                                    <label className="Fullname">Departments name:</label>
                                    <input type="text" className='form-control' id="departmentName" />
                                    <button type="submit" className="btn btn-danger mt-2" data-bs-dismiss="modal">Submit</button>
                                </form>
                            </div>
                            {/* Modal footer */}
                            {/* <div className="modal-footer">

                                <button type="submit" className="btn btn-danger" data-bs-dismiss="modal">Submit</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Department Number</th>
                        <th scope="col">Deparment Name</th>
                        <th scope="col">Action</th>
                        <th scope="col">Status</th>
                        

                    </tr>
                </thead>
                {deparment.map((deparment, index) => (
                    <tbody key={index}>
                        <tr>
                        <td>{deparment.departmentID}</td>
                            <td>{deparment.departmentNumber}</td>
                            <td>{deparment.departmentName}</td>
                            <td>
                                <button className='btn btn-outline-danger'>{deparment.isActive ? 'Active' : 'UnActive'}</button>
                            </td>
                            {(decode.Roless === "Admin") && (
                                <td>
                                    <button type="button" className="btn btn-outline-danger" onClick={() => handleEit(deparment)}  data-bs-toggle="modal" data-bs-target="#EditDepart">
                                        Edit
                                    </button>
                                </td>
                            )}
                            <td>
                                    <button type="button"  className='btn btn-outline-danger'>
                                    <NavLink className={"nav-link"} to={`/admintemplates/Empdepartment?id=${deparment.departmentNumber}`}>View</NavLink>
                                    </button>
                                    <button onClick={() => handleChangeStatus({ status: false, id: deparment.departmentID })} className='btn btn-danger'>Deactive</button>
                                    <button onClick={() => handleChangeStatus({ status: true, id: deparment.departmentID })} className='btn btn-success'>Active</button>
                                </td>

                        </tr>

                    </tbody>
                ))}

            </table>
            <div className="modal" id="EditDepart">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Department</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            {edit && (
                                <form onSubmit={editDepart}>
                                    <input type="text" value={edit.departmentID} id="editdepartmentID" readOnly  hidden/>
                                    <input type="text" value={edit.departmentNumber} id="editdepartmentNumber" readOnly hidden />
                                    <label className="Fullname">Departments name:</label>
                                    <input type="text" className='form-control my-2' defaultValue={edit.departmentName} id="editdepartname" />
                                    <button type="submit" className="btn btn-danger " data-bs-dismiss="modal">Submit</button>
                                </form>
                            )}
                         
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Department

