import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { message } from 'antd';
import axios from 'axios';
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const CreateInterView = () => {
  const query = useQuery();
  const [data, setdata] = useState({})
  const applyActionID = query.get('id');
  const redirect = useNavigate();
  console.log(applyActionID)

  useEffect(() => {
    const fectdata = async () => {
      try {
        const res = await axios.get(`https://localhost:7144/api/ApplyAction/${applyActionID}`)
        console.log(res.data.data)
        setdata(res.data.data)

      }
      catch (e) {
        message.error("Fail !1")
      }
    }
    fectdata()
  }, [])
  const [employee, setemployee] = useState(null)
  useEffect(() => {
    const fectdata = async () => {
      try {
        const res = await axios.get(`https://localhost:7144/api/Employee/GetAllEmployees/Get`)
        console.log(res.data.data)
        var employeedata = res.data.data
        console.log(employeedata)

        if (Object.values(data).length !== 0) {
         
          employeedata = employeedata.filter((e) => e.departmentID === data.vacancies.departmentID)
          setemployee(employeedata)
        }

      }
      catch (error) {
        message.error("Fail ")
      }
    }
    fectdata()
  }, [data])
  const Createinterview = async (e) => {
    e.preventDefault();
    const scheduleDate = document.getElementById('ScheduleDate').value
    const ApplicantID = document.getElementById('ApplicantID').value
    const VacancyID = document.getElementById('VacancyID').value
    const EndDate = document.getElementById('EndDate').value
    const inputState = document.getElementById('inputState').value

    const formdata = new FormData()
    formdata.append('ScheduleDate', scheduleDate)
    formdata.append('ApplicantID', ApplicantID)
    formdata.append('VacancyID', VacancyID)
    formdata.append('EndDate', EndDate)
    formdata.append('EmployeeID', inputState)

    const res = await axios.post('https://localhost:7144/api/Interview/CreateInterview', formdata)
    if (res.data.status == 200) {
      message.success(res.data.message)
      redirect('/admintemplates/intervew')
    } else {
      message.error('create fail')
    }
  }
  

  return (
    <div>
      <form className="row g-3">

        <input type="text" value={data.applicantID} className="form-control" id="ApplicantID" hidden />
        <div className="col-md-6">

          <label htmlFor="VacancyID" className="form-label">ApplicantNumber</label>
          <input type="text" value={data.applyActionNumber} className="form-control" readOnly/>
        </div>

        <div className="col-md-6">

          <label htmlFor="VacancyID" className="form-label">Vacancy Title</label>
          <input type="text" value={data.vacancyID} className="form-control" id="VacancyID" hidden/>
          <input type="text" value={data.vacancies?.title} className="form-control"  readOnly/>
        </div>
        <div className="col-md-6">
          <label htmlFor="ScheduleDate" className="form-label">Schedule Date</label>
          <input type="datetime-local" className="form-control" id="ScheduleDate" />
        </div>

        <div className="col-md-6">
          <label htmlFor="EndDate" className="form-label">End Date</label>
          <input type="datetime-local" className="form-control" id="EndDate" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">Employee</label>
          <select id="inputState" className="form-select">
            {employee?.map((item, index) => (
              <option key={index} value={item.employeeID}>{item.fullName}</option>

            ))}
          </select>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary" onClick={Createinterview}>Create</button>
        </div>
      </form>

    </div>
  )
}

export default CreateInterView
