import React from 'react'

const Vacancies = () => {
    return (
        <div>
            <div>
                <button type="button" className="btn btn-primary m-4" data-bs-toggle="modal" data-bs-target="#myModal">
                    Create Vacancy
                </button>
                {/* The Modal */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Create Vacancy</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <form action="">
                                    <label className="VacancyId">VacancyId</label>
                                    <input type="text" className='form-control' id="VacancyId" name='VacancyId' />
                                    <label className="DeparmentId">DeparmentId</label>
                                    <input type="text" className='form-control' id="DeparmentId" name='DeparmentId' />
                                    <label className="RoEmployeeIdle">EmployeeId</label>
                                    <input type="text" className='form-control' id="Role" name='Role' />
                                    <label className="VacacyNumber">VacacyNumber</label>
                                    <input type="text" className='form-control' id="VacacyNumber" name='VacacyNumber' />
                                    <label className="createdate">Create Date</label>
                                    <input type="date" className='form-control' id="createdate" name='createdate' />
                                    <label className="Enddate">Close Date</label>
                                    <input type="date" className='form-control' id="Enddate" name='Enddate' />
                                    <label className="Title">Title</label>
                                    <input type="text" className='form-control' id="Title" name='Title' />
                                    <label className="Decriptons">Decriptons</label>
                                    <input type="text" className='form-control' id="Decriptons" name='Decriptons' />
                                    <label className="Slot">Slot</label>
                                    <input type="text" className='form-control' id="Slot" name='Slot' />

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
                        <th scope="col">VacancyId</th>
                        <th scope="col">DeparmentId</th>
                        <th scope="col">EmployeeId</th>
                        <th scope="col">VacacyNumber</th>
                        <th scope="col">Create Date</th>
                        <th scope="col">Close Date</th>
                        <th scope="col">Title</th>
                        <th scope="col">Decriptons</th>
                        <th scope="col">Slot</th>
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
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <button className='btn btn-success '>Open</button>
                            <button className='btn btn-danger'>Close</button>

                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default Vacancies
