import React from 'react'

const Applicanter = () => {
  return (
    <div>
         <div>
                <button type="button" className="btn btn-primary m-4" data-bs-toggle="modal" data-bs-target="#myModal">
                    Create Applicant
                </button>
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
                        <th scope="col">ApplicationNumber</th>
                        <th scope="col">CreationDate</th>
                        <th scope="col">ApplicantName</th>
                        <th scope="col">VacacyNumber</th>  
                        <th scope="col">ApplicantFile</th>
                        <th scope="col">ApplicantEmail</th>
                        <th scope="col">ApplicantPhone</th>
                        <th scope="col">Status</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        
                        <td>
                            <button type='' className='btn btn-success '>Edit</button>
                            <button type='' className='btn btn-danger'>Delete</button>

                        </td>
                    </tr>

                </tbody>
            </table>
      
    </div>
  )
}

export default Applicanter
