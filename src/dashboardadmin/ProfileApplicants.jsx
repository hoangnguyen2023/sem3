import { Try } from '@mui/icons-material';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const ProfileApplicants = () => {
  const [profile, setProfile] = useState([]);
  const user = jwtDecode(localStorage.getItem('token'));


  useEffect(() => {

    const fetchapplicant = async () => {

      if (localStorage.getItem('token')) {
        try {
          const res=await axios.get(`https://localhost:7144/api/Applicant/Get/${user.email}`);
          console.log(res.data);
          setProfile(res.data)
          
        } catch (error) {
          console.log(error);
          
        }
        
      }

    };
    fetchapplicant();


  }, [])

  return (
    <div>
      <div className="card">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">WelCome:{profile && profile.applicantName}</h5>
          <p className="card-text">name :{profile && profile.applicantName}</p>
          <p className="card-text">Email:{profile && profile.applicantEmail}</p>
          <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
        </div>
      </div>



    </div>
  )
}

export default ProfileApplicants
