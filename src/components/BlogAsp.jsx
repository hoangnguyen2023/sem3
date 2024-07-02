import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import '../scss/blog.css'

const BlogAsp = () => {

    const [data, setdata] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://localhost:7144/api/Blog/GetAllBlog")
                console.log(response)
                if (response && response.data) {
                    setdata(response.data)
                }

            }
            catch (error) {
                console.error("Error fectching data : ", error)
            }
        }
        fetchData();
    }, [])
    return (
        <div>
            <h5 className='text-center my-5'> All Blog </h5>

            <div className="container row row-cols-1 row-cols-lg-5 g-lg-3 m-auto gap-5"  >
                {data && data.map(item => (
                    <div className="card " key={item.blogID} style={{border:"none"}}>
                        <img src={item.image} style={{maxHeight:250}} className="card-img-top " data-bs-toggle="tooltip" data-bs-placement="right" title="Asp too easy now" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title css_title">{item.title}</h5>
                            <p className="card-text css_decription">{item.description}</p>
                            <button className='btn btn-success'>
                                <NavLink className={"nav-link"} to={`/BlogDetail/${item.blogID}`}>Details</NavLink>
                            </button>
                        </div>
                        <div className="card-footer" style={{border:"none"}}>
                            <small className="text-muted" >{item.createdAt}</small>
                        </div>
                    </div>



                ))}


            </div>





        </div>
    )
}

export default BlogAsp
