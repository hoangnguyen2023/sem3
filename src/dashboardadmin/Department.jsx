import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Department = () => {
    const token = localStorage.getItem("token")
    const [deparment,setDepartment]=useState([]);
    const [departmentname,setDepartmentname]=useState('');

    
    const getdepartment=async ()=>{
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        try{
            const response=await axios.get('https://localhost:7144/api/Department/');
            setDepartment(response.data);
          }catch(error){
            console.error('not found data',error);
          }
    };  

    const postDepartment=async (e)=>{
   
        e.preventDefault();
        const requestOptions={
            method:"POST",
            headers:{"Content-Type": "application/json" , 'Authorization':`Bearer ${token}` },
            body: JSON.stringify({
                departmentname:departmentname
              }),
        }
        try{
            const response=await fetch('https://localhost:7144/api/Department/CreateDepartment',requestOptions);
         
                getdepartment();
               
            
        }catch(error){
            console.error('invalid Department')
        }
    }
    useEffect(()=>{
        getdepartment();

    },[]);
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
                                <h4 className="modal-title">Create Employee</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <form onSubmit={postDepartment}>                      
                                    <label className="Fullname">Departments name:</label>
                                    <input type="text" className='form-control' value={departmentname} onChange={(e)=>setDepartmentname(e.target.value)}/>
                                    <button type="submit" className="btn btn-danger" data-bs-dismiss="modal">Submit</button>
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
                    </tr>
                </thead>
                    {deparment.map((get)=>(
                    <tbody key={get.departmentID}>
                        <tr>
                            <td>{get.departmentNumber}</td>
                            <td>{get.departmentName}</td>
                            <td>
                                <button>{get.isActive?'Active':'UnActive'}</button>
                            </td>
                        </tr>
                        
                    </tbody>
                    ))};

            </table>

        </div>
    )
}

export default Department

