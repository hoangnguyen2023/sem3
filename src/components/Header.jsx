
import React from 'react'
import { NavLink } from 'react-router-dom'






const Header = () => {
  

    return (
        <div>

           
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">ACB Company</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse " id="collapsibleNavId">
                    <ul className="navbar-nav me-auto  mt-lg-0  ml-auto">

                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="career">Career</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="About">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="admin">Admin</NavLink>
                        </li>

                    </ul>


                    <div>
                        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#myModal">
                            Login
                        </button>
                        {/* The Modal */}
                        <div className="modal" id="myModal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                        <h4 className="modal-title">Sign in</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                    </div>
                                    {/* Modal body */}
                                    <div className="modal-body">
                                        <p className='text-mute-dark'>Link your account to continue using ACB's services</p>

                                        <form action="">
                                            <nav>
                                                <div>
                                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Applicants</button>
                                                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Employee</button>

                                                    </div>
                                                    <div className="tab-content" id="nav-tabContent">
                                                        <div className="tab-pane fade show active text-center mt-4" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                            <button className='btn btn-outline-secondary '><i className="fa-brands fa-google" style={{ color: "white" }}></i> Continute with Google Account</button>
                                                        </div>
                                                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                                                            <label className="blogid">Employee Number</label>
                                                            <input type="text" className='form-control' id="Employee" name='Employee' placeholder='Employee Number' required />
                                                            <label className="title">PassWord</label>
                                                            <input type="PassWord" className='form-control' id="PassWord" name='PassWord' placeholder='PassWord' required />
                                                            <div className='text-end mt-4'>
                                                                <button type="button" className="btn btn-danger mx-2" data-bs-dismiss="modal">Close</button>
                                                                <button type="submit" className="btn btn-danger " data-bs-dismiss="modal">Submit</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </nav>
                                        </form>
                                    </div>
                                    {/* Modal footer */}
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>


        </div>

    )
}

export default Header
