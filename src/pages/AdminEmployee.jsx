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

                                    <label className="DeparmentNumber">DeparmentNumber</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Department</option>
                                        <option value="1">IT</option>
                                        <option value="2">HR</option>
                                        <option value="3">Marketing</option>
                                    </select>
                                    <label className="Role">Role</label>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="Role" id="Admin" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Admin
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="Role" id="Manager" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Manager
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="Role" id="Employee" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Employee
                                            </label>
                                        </div>
                                    </div>                                   
                                    <label className="Fullname">Fullname</label>
                                    <input type="text" className='form-control' id="Fullname" name='Fullname' />
                                    <label className="Email">Email</label>
                                    <input type="email" className='form-control' id="Email" name='Email' />
                                   
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
                        <th scope="col">Employee Number</th>
                        <th scope="col">Deparment Number</th>
                        <th scope="col">Role Number</th>
                        <th scope="col">Image</th>
                       
                        <th scope="col">Fullname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Create Date</th>
                        <th scope="col">Edit Date</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">VG-xxxx</th>
                        <td>Mark</td>
                        <td>Admin</td>
                        <td>@mdo</td>
                 
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>

                        <td>
                            <button className='btn btn-success ' >Active</button>
                            <button className='btn btn-danger'>Edit</button>

                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default AdminEmployee
