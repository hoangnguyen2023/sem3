import React from 'react'
import team from '../images/groupteam2.jpg'


const Us = () => {
    return (
        <div className='mb-5'> 
            <div className="card bg-dark text-white ">
                <img src={team} className="card-img" alt="..." />
                <div className="card-img-overlay text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>

    )
}

export default Us
