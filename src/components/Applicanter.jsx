import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'

const Applicanter = () => {
    const [dataAppli, SetDataAppli] = useState([]);
    var token = localStorage.getItem('token');
    var jwt = jwtDecode(token);
    const fetchdata = async () => {
        try {
            const res = await axios.get(`https://localhost:7144/api/Applicant/GetAllUser`)
            console.log(res.data);
            SetDataAppli(res.data.data);

        } catch (error) {
            console.error(error);

        }
    };
    useEffect(() => {
        fetchdata();
    }, [])


    return (
        <div>
            <div>
              
                {/* The Modal */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Create Applicant</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <form action="">
                                    <label className="VacancyId">ApplicationNumber</label>
                                    <input type="text" className='form-control' id="VacancyId" name='ApplicationNumber' />
                                    <label className="CreationDate">CreationDate</label>
                                    <input type="datetime" className='form-control' id="CreationDate" name='CreationDate' />
                                    <label className="RoEmployeeIdle">ApplicantName </label>
                                    <input type="text" className='form-control' id="RoEmployeeIdle" name='ApplicantName' />
                                    <label className="VacacyNumber">VacacyNumber</label>
                                    <input type="text" className='form-control' id="VacacyNumber" name='VacacyNumber' />
                                    <label className="ApplicantFile ">ApplicantFile </label>
                                    <input type="file" className='form-control' id="Title" name='ApplicantFile' />
                                    <label className="ApplicantEmail ">ApplicantEmail </label>
                                    <input type="email" className='form-control' id="ApplicantEmail" name='ApplicantEmail' />
                                    <label className="Slot">ApplicantPhone </label>
                                    <input type="number" className='form-control' id="ApplicantPhone " name='ApplicantPhone ' />

                                </form>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">

                                <button type="submit" className="btn btn-danger" data-bs-dismiss="modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">applicantID</th>
                        <th scope="col">ApplicationNumber</th>
                        <th scope="col">ApplicantName</th>
                        <th scope="col">ApplicantEmail</th>
                        <th scope="col">CreationDate</th>
                    </tr>
                </thead>
                <tbody>
                    {dataAppli?.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{item.applicantID}</th>
                            <td>{item.applicantNumber}</td>
                            <td>{item.applicantName}</td>
                            <td>{item.applicantEmail}</td>
                            <td>{item.creationDate}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Applicanter
