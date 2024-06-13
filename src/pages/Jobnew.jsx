import React from 'react'
import data from '../images/DataAnalytics.jpg'
import java from '../images/JavaScript.jpg'

const Jobnew = () => {
    return (
        <div className='container-fluid m-5'>
            <h4 className='text-center m-5 '>Hot Job Present </h4>
            <div className='row gap-5 '>
                <div className="card col-lg-3 col-md-2 col-sm-4" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={data} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card col-lg-3 col-md-2 col-sm-4 " >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={java} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card col-lg-3 col-md-2 col-sm-4 " >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={data} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card col-lg-3 col-md-2 col-sm-4 " >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={java} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card col-lg-3 col-md-2 col-sm-4 " >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={data} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>








        </div>
    )
}

export default Jobnew
