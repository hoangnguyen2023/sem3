import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {jwtDecode} from 'jwt-decode'
import moment from 'moment';
const Vancancy = () => {
    const [data,setdata]=useState([]);
    var token=localStorage.getItem('token');
    var  jwt=jwtDecode(token)
    const fetchvacncies=async()=>{
        try{
            const res=await axios.get(`https://localhost:7144/api/ApplyAction/List_Apply_Action/${jwt.email}`);
            console.log(res.data.data);
            setdata(res.data.data)

        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchvacncies();

    },[])
    
    return (
        <div>
            <table class="table table-hover mt-5">
                <thead>
                    <tr>
                        <th scope="col">ApplyID</th>
                        <th scope="col">Fullname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Birthday</th>
                        <th scope="col">Phonenumber</th>
                        <th scope="col">FileCV</th>
                      
                        <th scope="col">Status</th>

                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{item.applyID}</th>
                            <td>{item.applyName}</td>
                            <td >{item.applyEmail}</td>
                            <td>{moment(item.birthday).format("DD/MM/YYYY")}</td>
                            <td>{item.applyPhone}</td>
                            <td ><a target='blank' className='filecv' href={item.fileCV}>{item.fileCV}</a></td>
                          
                            <td>{item.status}</td>

                            {/* <td>
                                <button onClick={() => handleChangeStatus({ status: "Hired", id: applyaction.applyID })} className='btn btn-danger'>Hired</button>
                                <button onClick={() => handleChangeStatus({ status: "Reject", id: applyaction.applyID })} className='btn btn-warning'>Reject Apply</button>
                                <button type="button" onClick={() => handleDetail(applyaction.applyID)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Create Shulude
                                </button>
                            </td> */}
                        </tr>

                    ))}


                </tbody>
            </table>


        </div>
    )
}

export default Vancancy
