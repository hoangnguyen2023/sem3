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
                if (response && response.data.data) {
                    setdata(response.data.data)
                }

            }
            catch (error) {
                console.error("Error fectching data : ", error)
            }
        }
        fetchData();
    }, [])
    return (
        <div className='container'>
            <div className='title_blog'>
                <h2 className='text-center text_header my-5'> All Blog </h2>
            </div>


            <div className=" row row-cols-1 row-cols-lg-5 g-lg-3 m-auto gap-5"  >
                {data && data.map((item) => (
                    <div className="card " key={item.blogID} style={{ border: "none" }}>
                        <img src={item.image} style={{ maxHeight: 250 }} className="card-img-top " data-bs-toggle="tooltip" data-bs-placement="right" title="Asp too easy now" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title css_title">{item.title}</h5>
                            <p className="card-text css_decription">{item.description}</p>
                            <button className='btn btn-success'>
                                <NavLink className={"nav-link"} to={`/BlogDetail?id=${item.blogNumber}`}>Details</NavLink>
                            </button>
                        </div>
                        {/* <div className="card-footer" style={{ border: "none" }}>
                            <small className="text-muted" >{item.createdAt}</small>
                        </div> */}
                    </div>



                ))}


            </div>





        </div>
    )
}

export default BlogAsp
