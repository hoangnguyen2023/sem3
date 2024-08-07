import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { method } from 'lodash-es';
import { months } from 'moment';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ApplyJob = () => {
  const [formdata, setFormdata] = useState({
    Fullname: '',
    Birthday: '',
    Email: '',
    Phonenumber: '',
    FileCV: 'null'

  });
  const user = jwtDecode(localStorage.getItem("token"))
  const [file, setFile] = useState()
  const handleChangFile = (e) => {
    var files = e.target.files; // Lấy danh sách các tệp
    if (files.length > 0) {
      var file = files[0]; // Lấy tệp đầu tiên
      setFile(file)
    } else {
      console.log('No file selected');
    }
  }

  const handlechange = (e) => {

    const { name, value, file } = e.target;
    setFormdata({
      ...formdata,
      [name]: file === 'FileCV' ? file[0] : value
    });
  };


  const [applicant, setApplicant] = useState(null)

  useEffect(() => {
    fetchApplycant()
  }, [])

  const fetchApplycant = async () => {
    try {
      var res = await axios.get(`https://localhost:7144/api/Applicant/Get/${user.email}`)
      setApplicant(res.data)

    } catch (error) {
      console.log(error)
    }
  }
  const redirects = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert("No token found. Please login.");
      return;
    }


    const fullname = document.getElementById("fullname").value
    const birthday = document.getElementById('birthday').value
    const phonemumber = document.getElementById('phonenumber').value
    const email = document.getElementById('email').value
    const vacanID = document.getElementById('VacancyID').value
    const applicID = document.getElementById('ApplicantID').value
    // const filecv=document.getElementById ('filecv').file
    const formdata = new FormData();
    formdata.append('ApplyName', fullname);
    formdata.append('Birthday', birthday);
    formdata.append('ApplyPhone', phonemumber)
    formdata.append('ApplyEmail', email);
    formdata.append('uploadfile', file);
    formdata.append('VacancyID', vacanID);
    formdata.append('ApplicantID', applicID)

    console.log(...formdata.entries());

    const headers = {
      'Authorization': `Bearer ${token}`
    };

    try {

      const response = await axios.post('https://localhost:7144/api/ApplyAction/CreateApply', formdata)
      console.log(response);
      if (response.status == 200) {
        alert('You Apply Success Job');
        return redirects('/');
      }
    } catch (error) {
      console.error('Create is Not Success ', error);

    }

    // Get the token from localStorage


    if (!token) {
      alert("No token found. Please login.");
      return;
    }


  }

  const [applyjob, setApplyjob] = useState(null);
  const { id } = useParams()
  console.log(id);
  const [error, setError] = useState(null)
  const redirect = useNavigate();
  useEffect(() => {
    const fetchData = async () => {

      if (localStorage.getItem('token')) {
        try {
          const res = await axios.get(`https://localhost:7144/api/Vacancy/GetVacaID/${id}`)
          console.log(res.data)
          setApplyjob(res && res.data);

        } catch (error) {
          setError(error)

        }
      } else {
        alert("You Must Login !!")
        return redirect('/')
      }
    };
    fetchData();

  }, [])

  if (error) return <div> Error :{error.message}</div>




  return (
    <div className='d-flex justify-content-center'>

      <div className="card  col-lg-6 mx-2 my-5" style={{ border: "none" }}>
        {applyjob && (<h2 className='text-center my-5'>{applyjob.title}</h2>)}


        <div className="card-header text-center" hidden>
          <h4> Information ApplyCant</h4>
        </div>
        <form >

          <div className="card-body">
            <h5 className="card-title my-2 text-center" >AppliCants</h5>

            <input type="text" id="VacancyID" value={applyjob && applyjob.vacancyID && applyjob.vacancyID} hidden />

            <input type="text" id="ApplicantID" value={applicant && applicant.applicantID && applicant.applicantID} hidden />
            <div className="input-group flex-nowrap my-5">
              <span className="input-group-text " id="addon-wrapping">Full Name</span>
              <input type="text" className="form-control" name="Fullname" required id='fullname' />
            </div>


            <div className="input-group flex-nowrap my-5">
              <span className="input-group-text  " id="addon-wrapping">Day of Birth</span>
              <input type='date' className='form-control ms-5' id='birthday' />
            </div>
            <div className="input-group flex-nowrap my-5 ">
              <input type="text" className="form-control me-5" name='Email' id='email' required placeholder='@email' value={user.email} onChange={handlechange} />
              <input type="number" className="form-control ms-5" name='Phonenumber' id='phonenumber' required placeholder='Number Phone' value={formdata.Phonenumber} onChange={handlechange} />
            </div>
            <div className="input-group flex-nowrap my-5">
              <span className="input-group-text  me-5 " id="addon-wrapping">Upload your CV (PDF format) (*)</span>
              <input type="file" className="form-control" name='FileCV' onChange={handleChangFile} />
            </div>

            <div className="d-flex justify-content-center">
              <button type='submit' className='btn btn-outline-primary' onClick={handlesubmit} >Submit</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default ApplyJob
