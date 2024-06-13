import React from 'react'
import c from '../images/C++.jpg'

const TopCareer = () => {
    return (
        <div className=''>
            <div className="card mb-3" style={{ maxWidth: 1450 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={c} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 " >
                        <div className="card-body " style={{width:1450}}>
                            <h5 className="card-title">Nhân viên kỹ thuật khuôn </h5>
                            <p className="card-text">Công ty TNHH Nhựa Khôi Việt.</p>
                            <p className="card-text">Lương: 8 Tr - 20 Tr VND</p>
                            <i className="fa-solid fa-location-dot" style={{ display: "block", fontSize: "10px" }}>Hcm</i>
                            <i className="fa-regular fa-clock " style={{ display: "block", fontSize: "10px" }}>Han nop</i>
                            <div className='d-flex py-2 '>
                                <i className="fa-solid fa-suitcase-medical" ><span style={{ fontSize: "10px" ,textTransform:"capitalize" }}> Bao Hiem </span> </i>
                                <i className="fa-solid fa-plane" > <span style={{ fontSize: "10px" ,textTransform:"capitalize" }}> Du lich </span> </i>
                                <i className="fa-solid fa-money-bill"> <span style={{ fontSize: "10px" ,textTransform:"capitalize" }}> Phụ Cấp </span> </i>
                            </div>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopCareer
