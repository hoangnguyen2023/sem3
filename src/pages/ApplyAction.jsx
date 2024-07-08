import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import '../scss/blogdashboard.css'
import moment from 'moment';
import { NavLink } from 'react-router-dom';




const ApplyAction = () => {
    const [applyaction, setApplyaction] = useState([]);
    const [getemp, setEmp] = useState([]);
    const [loading, setloading] = useState(false)
    const [detail, setDetail] = useState(null);
    const [empID, setempID] = useState('');
    const [apID, setapID] = useState('');
    const [error, setError] = useState(null);
    const [detailemp, setdetails] = useState('')


    var token = localStorage.getItem('token');
    var jwt = jwtDecode(token);

    const handleCreate = async (e) => {
        e.preventDefault();
        try {

            const scheduleDate = document.getElementById('ScheduleDate').value;
            const endDate = document.getElementById('EndDate').value;
            const createdAt = document.getElementById('CreatedAt').value;
            const EditedAt = document.getElementById('EditedAt').value;
            // const status = document.getElementById('Status').value;
            const vacancyID = document.getElementById('VacancyID').value;
            const formdata = new FormData();
            formdata.append('ScheduleDate', scheduleDate);
            formdata.append('EndDate', endDate);

            formdata.append('EditedAt', EditedAt);
            formdata.append('Status', "waiting");
            formdata.append('VacancyID', vacancyID);
            formdata.append('Vacancy.Interview.Vacancy.Interview.employeeInterviewID', empID);
            formdata.append('Vacancy.Interview.Vacancy.Interview.applicantInterviewID', apID);
            const response = await axios.post(`https://localhost:7144/api/Interview/CreateInterview`, formdata);
            if (response && response.data) {

                console.log(response);

            }

        }
        catch (error) {
            console.error(error);

        }

    }

    const fetchapplyaction = async () => {
        try {
            const res = await axios.get(`https://localhost:7144/api/ApplyAction/GetAllApply`);
            console.log(" get apply");
            console.log(res.data);
            setApplyaction(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchapplyaction();
        // handleDetail();

    }, [loading])
    const handleDetail = async (applyActionNumber) => {

        setError(false);

        try {
            const res = await axios.get(`https://localhost:7144/api/ApplyAction/${applyActionNumber}`);
            if (res.data.status == 200 && res.data.data) {
                console.log("data dfsdgfdsfgads", res.data.data);
                setDetail(res.data.data);
            } else {
                setError(res.data.message || "Not Found Data");
            }

        }
        catch (error) {
            console.log(error);
        } finally {

        }
    }
    const handleChangeStatus = async (value) => {
        try {
            const res = await axios.get(`https://localhost:7144/api/ApplyAction/ChangeStatus/${value.id}/${value.status}`);
            console.log(res.data);
            setloading(!loading)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const fetchemp = async () => {
            try {
                const res = await axios.get('https://localhost:7144/api/Employee/GetAllEmployees');
                if (res && res.data) {
                    setEmp(res.data)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchemp();
    }, [])
    
    // const empbynumber=async ()=>{
    //     const res=await axios.get(`https://localhost:7144/api/Employee/${decode.EmpployeeNumber}`)
    //     setdetails(res.data.data);
    // }

    return (
        <div>

            <table class="table table-hover mt-5">
                <thead>
                    <tr  >
                        {/* <th scope="col">ID</th> */}
                        <th scope="col">Number</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        {/* <th scope="col">Birthday</th> */}
                        <th scope="col">Phone</th>
                        {/* <th scope="col">FileCV</th> */}
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {applyaction?.map((applyaction, index) => (
                        <tr key={index} >
                            {/* <th scope="row">{applyaction.applyID}</th> */}
                            <td>{applyaction.applyActionNumber}</td>
                            <td>{applyaction.applyName}</td>
                            <td >{applyaction.applyEmail}</td>
                            {/* <td>{applyaction.birthday}</td> */}
                            <td>{applyaction.applyPhone}</td>
                            {/* <td ><a target='blank' className='filecv' href={applyaction.fileCV}>{applyaction.fileCV}</a></td> */}
                            <td >{applyaction.status}</td>

                            <td >

                                {jwt.Roless === "HR" && (
                                    <>
                                        <button
                                            onClick={() => handleChangeStatus({ status: "Pass", id: applyaction.applyID })}
                                            className='btn btn-success'
                                        >
                                            Pass
                                        </button>
                                        <button
                                            onClick={() => handleChangeStatus({ status: "Fail", id: applyaction.applyID })}
                                            className='btn btn-danger'
                                        >
                                            Fail
                                        </button>
                                    </>
                                )}



                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#formdetail" onClick={() => handleDetail(applyaction.applyActionNumber)}>
                                    Detail
                                </button>


                            </td>
                        </tr>

                    ))}

                </tbody>
            </table>
            <div>
                <div>
                    {/* Button trigger modal */}

                    {/* Modal */}
                    <div className="modal fade" id="formdetail" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel"> VIEW SPECIFIC APPLY ACTION</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>

                                <div className="modal-body">
                                    {detail && (
                                        <form className="row g-3">

                                            <div className="col-md-6">
                                                <label htmlFor="ApplyActionNumber" className="form-label">ApplyActionNumber</label>
                                                <input type="text" className="form-control" id="ApplyActionNumber" value={detail.applyActionNumber} />
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="vacancyID" className="form-label">vacancyID</label>
                                                <input type="text" className="form-control" id="vacancyID" value={detail.vacancies.vacancyID} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="applyName" className="form-label">applyName</label>
                                                <input type="text" className="form-control" id="applyName" value={detail.applyName} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="applyEmail" className="form-label">applyEmail</label>
                                                <input type="email" className="form-control" id="applyEmail" value={detail.applyEmail} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="applyPhone" className="form-label">applyPhone</label>
                                                <input type="text" className="form-control" id="applyPhone" value={detail.applyPhone} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="Birthday" className="form-label">createdAt</label>
                                                <input type="text" className="form-control" id="applyEmail" value={moment(detail.createdAt).format("DD/MM/YYYY")} readOnly />
                                            </div>

                                            <div className="col-12">
                                                <a href={detail.fileCV} target='blank' >File cv</a>
                                            </div>

                                            <div className="col-12 text-center">
                                                <label htmlFor="inputAddress2" className="form-label text-center"> Vacancy</label>
                                            </div>
                                            <div className="col-12 ">
                                                <label htmlFor="inputAddress2" className="form-label text-center">Title Vacancy: {detail.vacancies.title}</label>
                                            </div>
                                            <div className="col-12 ">
                                                <label htmlFor="inputAddress2" className="form-label text-center">Description: {detail.vacancies.description}</label>
                                            </div>
                                            <div className="col-12 ">
                                                <label htmlFor="inputAddress2" className="form-label text-center">Close Day: {detail.vacancies.closeDate}</label>
                                            </div>
                                            <div className="col-12 ">
                                                <label htmlFor="inputAddress2" className="form-label text-center">Status: {detail.status}</label>
                                            </div>
                                            <div className="col-12 text-center">
                                                <label htmlFor="inputAddress2" className="form-label text-center">Department</label>
                                            </div>
                                            <div className="col-12 ">
                                                <label htmlFor="inputAddress2" className="form-label text-center"> DepartmentNumber: {detail.vacancies.departments.departmentNumber
                                                }</label>
                                            </div>
                                            <div className="col-12 ">
                                                <label htmlFor="inputAddress2" className="form-label text-center">departmentName: {detail.vacancies.departments.departmentName}</label>
                                            </div>
                                            <div className="col-12 ">
                                                <label htmlFor="inputAddress2" className="form-label text-center">createdAt: {detail.vacancies.departments.createdAt}</label>
                                            </div>


                                        </form>

                                    )}

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    {jwt.Roless === "HR" && (
                                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary"> <NavLink to={`/admintemplates/createinterview?id=${detail ? detail.applyActionNumber : ""}`} style={{ textDecoration: "none", color: "black" }}>Create InterView</NavLink></button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default ApplyAction
