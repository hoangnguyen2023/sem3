import React from 'react'


const InterView = () => {
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
                  <label className="ScheduledDate">InterviewNumber</label>
                  <input type="text" className='form-control' id="ScheduledDate" name='ScheduledDate' />
                  <label className="StartTime">VacancyID</label>
                  <input type="text" className='form-control' id="StartTime" name='StartTime' />
                  <label className="EndTime">ScheduledDate</label>
                  <input type="date" className='form-control' id="EndTime" name='EndTime' />
                  <label className="EndTime">EndDay</label>
                  <input type="date" className='form-control' id="EndTime" name='EndTime' />
                  <label className="EndTime">CreateDay</label>
                  <input type="date" className='form-control' id="EndTime" name='EndTime' />
                  <label className="EndTime">EditDay</label>
                  <input type="date" className='form-control' id="EndTime" name='EndTime' />
                  <label className="EndTime">Status</label>
                  <select className="form-select form-select-md mb-3 mt-2" aria-label=".form-select-sm example">
                    <option selected>this select menu</option>
                    <option value={1}>Waiting</option>
                    <option value={2}>Schedule</option>
                    <option value={3}>In Progress</option>
                    <option value={3}>Cancel</option>
                    <option value={3}>Completed</option>
                  </select>

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
            <th scope="col">InterviewNumber</th>
            <th scope="col">VacancyID</th>
            <th scope="col">ScheduledDate</th>
            <th scope="col">CreateDay</th>
            <th scope="col">EndDay</th>
            <th scope="col">EditDay</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Mark</td>
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

export default InterView
