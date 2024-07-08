import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};
const ViewDepart =  () => {
    const query = useQuery();
    const departmentID = query.get('id');
    const [emp,setemp]=useState([]);
    console.log(departmentID)
    useEffect(()=>{
        const getemp=async ()=>{
            try{
             
                const res=await axios.get(`https://localhost:7144/api/Department/List_Employee/${departmentID}`)
                setemp(res.data.data);
                console.log(res.data.data)
            }catch(e){
                console.error(e);
            }
        }
        getemp()
    },[])
   
  return (
    <div>
       <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Employee Number</th>
                        <th scope="col">Role</th>
                        <th scope="col">Full name</th>
                        <th scope="col">Email</th>

                    </tr>
                </thead>
                {emp?.map((employee, index) => (
                    <tbody key={index}>
                        <tr>
                            <td>{employee.employeeNumber}</td>
                            <td>{employee.role}</td>
                            <td>{employee.fullName}</td>
                            <td>{employee.email}</td>
                            

                        </tr>

                    </tbody>
                ))};

            </table>
    </div>
  )
}

export default ViewDepart
