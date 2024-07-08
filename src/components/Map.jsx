import React from 'react'

const Map = () => {
    return (
        <div className='container-fluid mb-5'>
    
           
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Local area</h5>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3253163053178!2d106.66372207485696!3d10.786376989362989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23c80767d%3A0x5a981a5efee9fd7d!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1717998347411!5m2!1svi!2s" style={{ width: 700, height: 450, border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Contact Me Now</h5>
                            <div classname="card-text">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Title Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={4} defaultValue={""} />
                                </div>
                            </div>


                            <a href="" className="btn btn-outline-primary d-flex justify-content-center">Send</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Map
