import React from 'react'
import cv from '../images/cv2.jpg'
import Image from 'react-bootstrap/Image';

const FormCV = () => {
    return (
        <div className='m-5'>
            <div className='row justify-content-center'>
                <div className="card col-lg-6 col-md-3 col-sm-4" >

                    <Image src={cv} roundedCircle />
                    <div className="card-body">
                        <h5 className="card-title">Name:</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        {/* <button className='btn btn-outline-success'><NavLink to="#" style={{ textDecoration: 'none', color: 'black' }}> Create Now</NavLink></button> */}
                        <form className="row g-3 needs-validation" noValidate>
                            <div className="col-md-4">
                                <label htmlFor="validationCustom01" className="form-label">First name</label>
                                <input type="text" className="form-control" id="validationCustom01" defaultValue="Mark" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationCustom02" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="validationCustom02" defaultValue="Otto" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" className="form-control" id="Email" aria-describedby="inputGroupPrepend" required />
                                    <div className="invalid-feedback">
                                        Please Email
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="city" className="form-label">City</label>
                                <select className="form-select" id="city" required>
                                    <option selected disabled value>Ho Chi Minh</option>
                                    <option>Ho Chi Minh</option>
                                    <option>Nha Trang</option>
                                    <option>Da Nang</option>
                                    <option>Hue</option>
                                    <option>Ha noi</option>
                                    <option>Tuy Hoa</option>
                                    <option>Phu yen</option>
                                    <option>Vung Tau</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="state" className="form-label">State</label>
                                <input type="text" className="form-control" id="state" required />
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="zip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="zip" required />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">About Me</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>Work </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                                    <label className="form-check-label" htmlFor="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default FormCV
