import React from 'react'

const AdminEmployee = () => {
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
                                <form action="">
                                    <label className="EmployeeId">EmployeeId</label>
                                    <input type="text" className='form-control' id="EmployeeId" name='EmployeeId' />
                                    <label className="DeparmentNumber">DeparmentNumber</label>
                                    <input type="text" className='form-control' id="DeparmentNumber" name='DeparmentNumber' />
                                    <label className="Role">Role Number</label>
                                    <input type="text" className='form-control' id="Role" name='Role' />
                                    <label className="Image">Image</label>
                                    <input type="file" className='form-control' id="Image" name='Image' />
                                    <label className="createdate">Password</label>
                                    <input type="text" className='form-control' id="Password" name='Password' />
                                    <label className="Fullname">Fullname</label>
                                    <input type="text" className='form-control' id="Fullname" name='Fullname' />
                                    <label className="Email">Email</label>
                                    <input type="email" className='form-control' id="Email" name='Email' />
                                    <label className="createdate">Create Date</label>
                                    <input type="date" className='form-control' id="CreateDate" name='CreateDate' />
                                    <label className="enddate">End Date</label>
                                    <input type="date" className='form-control' id="enddate" name='enddate' />

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
                        <th scope="col">EmployeeId</th>
                        <th scope="col">DeparmentNumber</th>
                        <th scope="col">Role Number</th>
                        <th scope="col">Image</th>
                        <th scope="col">HashPassword</th>
                        <th scope="col">Fullname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Create Date</th>
                        <th scope="col">EndDate</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Admin</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>

                        <td>
                            <button className='btn btn-success '>Delete</button>
                            <button className='btn btn-danger'>Edit</button>

                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default AdminEmployee
