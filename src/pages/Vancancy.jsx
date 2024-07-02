import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {jwtDecode} from 'jwt-decode'

const Vancancy = () => {
    const [vacanies,setVacancies]=useState([]);
    var token=localStorage.getItem('token');
    var  jwt=jwtDecode(token)
    const fetchvacncies=async()=>{
        try{
            const res=await axios.get(`https://localhost:7144/api/ApplyAction/getapplicanemail/${jwt.email}`);
            console.log(res.data);
            setVacancies(res.data)

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
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>

                    </tr>
                </thead>
                <tbody>
                    {vacanies?.map((vacanies, index) => (
                        <tr key={index}>
                            <th scope="row">{vacanies.applyID}</th>
                            <td>{vacanies.fullname}</td>
                            <td >{vacanies.email}</td>
                            <td>{vacanies.birthday}</td>
                            <td>{vacanies.phonenumber}</td>
                            <td ><a target='blank' className='filecv' href={vacanies.fileCV}>{vacanies.fileCV}</a></td>
                            <td>{vacanies.description}</td>
                            <td>{vacanies.status}</td>

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
