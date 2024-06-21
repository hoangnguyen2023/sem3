import React from 'react'

const InterViewEmp = () => {
  return (
    <div>
        <div>
                <button type="button" className="btn btn-primary m-4" data-bs-toggle="modal" data-bs-target="#myModal">
                    Create InterView
                </button>
                {/* The Modal */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Create Interview</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <form action="">
                                    <label className="blogid">InterviewId</label>
                                    <input type="text" className='form-control' id="InterviewId" name='InterviewId' />
                                    <label className="ScheduledDate">ScheduledDate</label>
                                    <input type="text" className='form-control' id="ScheduledDate" name='ScheduledDate' />
                                    <label className="StartTime">StartTime</label>
                                    <input type="datetime" className='form-control' id="StartTime" name='StartTime' />
                                    <label className="EndTime">EndTime</label>
                                    <input type="datetime" className='form-control' id="EndTime" name='EndTime' />
                                   
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
                        <th scope="col">InterviewId</th>
                        <th scope="col">ScheduledDate</th>
                        <th scope="col">StartTime</th>
                        <th scope="col">EndTime</th>             
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>           
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

export default InterViewEmp
