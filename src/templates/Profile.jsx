import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Backtotop from '../components/Backtotop'
// import Footer from '../components/Footer'

const Profile = () => {
  if (!localStorage.getItem('token')) {
    alert("You Must Be Login ")
    return <Navigate to='/' />

  }
  return (
    <div>
      {/* <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">CyberFood</a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">Sign out</a>
          </li>
        </ul>
      </nav> */}
      <Header />
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink className="nav-link active" to="">
                    <i className="fa fa-home" />
                    Dashboard <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile/profileapplicant">
                    {/* <i className="fa fa-utensils" /> */}
                    My Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile/vacancy">
                    {/* <i className="fa fa-list" /> */}
                    All VanCancy
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar" />
                  This week
                </button>
              </div>
            </div>
            {/* <canvas className="my-4 w-100" id="myChart" width={900} height={380} /> */}
            <h2>InFomations </h2>
            <div className="table-responsive">
           
              <Outlet />

            </div>
          </main>
        </div>
      </div>
      <Backtotop/>
      {/* <Footer/> */}

    </div>

  )
}

export default Profile
