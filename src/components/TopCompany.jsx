import React, { useEffect, useState } from 'react'
import '../scss/blog.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { colors } from '@mui/material'

const TopCompany = () => {
    const [blog,setBlog]=useState(null)
    const[error,setError]=useState(null)
    const[load,setLoad]=useState(null)
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const res=await axios.get(`https://localhost:7144/api/Blog/GetAllBlog`)
                console.log(res);
                setBlog(res&&res.data.data)
            }catch(error){
                setError(error)
            }finally{
                setLoad(false)
            }
        };
        fetchData();
    },[])
    
    return (
        <div className='my-5'>
            <h3 className='title'>Blog Developer IT </h3>
            <div className="container row row-cols-1 row-cols-lg-5 g-lg-3 m-auto gap-5">
               {blog && blog.map((item)=>(
                    <div className="card">
                    <img src={item.image} className="card-img-top" alt="..." style={{maxHeight:150}}/>
                    <div className="card-body">
                        <h5 className="card-title css_title">{item.title}</h5>
                        <p className="card-text css_decription">{item.description}</p>
                        {/* <p className="card-text"><small className="text-muted">{item.createdAt}</small></p> */}
                    </div>
                    <div className='card-footer text-center' style={{background:"white" ,border:"none"}}  >
                        <NavLink className="btn btn-outline-primary" style={{textDecoration:"none"}} to={`/BlogDetail?id=${item.blogNumber}`}>Read More </NavLink>
                    </div>
                </div>
               ))}
                
                

            </div>


        </div>


    )
}

export default TopCompany
