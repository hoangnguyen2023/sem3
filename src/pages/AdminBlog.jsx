import React from 'react'


const AdminBlog = () => {

    return (
        <div>
            <div>
                <button type="button" className="btn btn-primary m-4" data-bs-toggle="modal" data-bs-target="#myModal">
                    Create Blog
                </button>
                {/* The Modal */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Create Blog</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <form action="">
                                    <label className="blogid">BlogId</label>
                                    <input type="text" className='form-control' id="title" name='title' />
                                    <label className="title">Title</label>
                                    <input type="text" className='form-control' id="title" name='title' />
                                    <label className="Descriptions">Descriptions</label>
                                    <input type="text" className='form-control' id="Descriptions" name='Descriptions' />
                                    <label className="image">Image</label>
                                    <input type="text" className='form-control' id="Image" name='Image' />
                                    <label className="createdate">Create Date</label>
                                    <input type="date" className='form-control' id="createdate" name='createdate' />
                                   
                                </form>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">BlogId</th>
                        <th scope="col">Title</th>
                        <th scope="col">Decriptions</th>
                        <th scope="col">Image</th>
                        <th scope="col">Create Date</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
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

export default AdminBlog
