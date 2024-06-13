import { useState } from 'react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';





const Header = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [employeeNumber,setemployeeNumber]=useState('');
    const [hashPassword,sethashPassword]=useState('');
    
    return (
        <div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign in </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label >Link your account to continue using ACB's services</Form.Label>
                        <Tabs
                            defaultActiveKey="profile"
                            id="justify-tab-example"
                            className="mb-3"
                            justify
                        >
                            <Tab eventKey="applicants" title="applicants">
                                <Form.Group className="mb-3 text-center" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Please Login to continue using our services</Form.Label>

                                    <Button className=''><i class="fa-brands fa-google " style={{color:"white"}}></i> Continute with Google Account</Button>


                                </Form.Group>
                               
                            </Tab>
                            <Tab eventKey="Employee" title="Employee">
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                    onSubmit={}
                                >
                                    <Form.Label>Employee Number</Form.Label>
                                    <Form.Control

                                        type='text'
                                        placeholder='VG-xxxx'

                                    />

                                    <Form.Label>PassWord</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="password"

                                    />
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Sign in
                                        </Button>
                                    </Modal.Footer>


                                </Form.Group>
                            </Tab>
                        </Tabs>


                    </Form>
                </Modal.Body>

            </Modal>
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
                    <form className="d-flex my-2 my-lg-0 px-3">

                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            <NavLink to="" onClick={handleShow} style={{ textDecoration: "none", color: "white" }}>Login</NavLink>


                        </button>
                    </form>
                </div>
            </nav>


        </div>

    )
}

export default Header
