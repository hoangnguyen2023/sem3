import React from 'react'
import asp from '../images/Asp.jpg'
import php from '../images/C++.jpg'
import laravel from '../images/laravel.jpg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const BlogAsp = () => {
    console.log("hhhhhhhhhhhhhhhhhhhhh")
    const [data , setdata] = React.useState(null);
    React.useEffect (()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get("https://localhost:7144/api/Blog")
                console.log(response)
                setdata(response.data)
            }
            catch (error){
                console.error("Error fectching data : " ,error)
            }
        }
    },[])
    return (
        <div>
            <div className="card-group mt-5">
                <div className="card ">
                    <img src={asp} className="card-img-top " data-bs-toggle="tooltip" data-bs-placement="right" title="Asp too easy now" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button className='btn btn-success'>
                            <NavLink className={"nav-link"} to="/BlogDetail">Details</NavLink>

                        </button>
                    </div>
                    <div className="card-footer">

                        <small className="text-muted" >Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src={asp} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <button className='btn btn-success'>
                            <NavLink className={"nav-link"} to="/BlogDetail">Details</NavLink>

                        </button>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src={asp} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <button className='btn btn-success'>
                            <NavLink className={"nav-link"} to="/BlogDetail">Details</NavLink>

                        </button>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <div className="card-group mt-5">
                <div className="card">
                    <img src={php} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button className='btn btn-success'>
                            <NavLink className={"nav-link"} to="/BlogDetail">Details</NavLink>

                        </button>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src={php} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <button className='btn btn-success'>
                            <NavLink className={"nav-link"} to="/BlogDetail">Details</NavLink>

                        </button>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src={php} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <button className='btn btn-success'>
                            <NavLink className={"nav-link"} to="/BlogDetail">Details</NavLink>

                        </button>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>

            </div>
            <div className="card-group mt-5">
                <div className="card">
                    <img src={laravel} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button className='btn btn-success'>
                            <NavLink className={"nav-link"} to="/BlogDetail">Details</NavLink>

                        </button>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src={laravel} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <button className='btn btn-success'>
                            <NavLink className={"nav-link"} to="/BlogDetail">Details</NavLink>

                        </button>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src={laravel} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <button className='btn btn-success'>
                            <NavLink className={"nav-link"} to="/BlogDetail">Details</NavLink>

                        </button>
                    </div>
                    <div className="card-footer">

                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BlogAsp
