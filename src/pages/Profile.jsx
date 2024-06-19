import React from 'react'
import { Navigate } from 'react-router-dom'

const Profile = () => {
    if ( !localStorage.getItem('token')) {
        alert ("You Must Be Login ")
        return <Navigate to='/login'/>
        
    }
  return (
    <div>
      Proflie
    </div>
  )
}

export default Profile
