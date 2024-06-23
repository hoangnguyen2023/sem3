import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const BlogAsp = () => {

    const [data, setdata] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://localhost:7144/api/Blog/")
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

            <div className="card-group mt-5" >
                {data && data.map(item => (
                    <div className="card " key={item.blogID}>
                        <img src={item.image} className="card-img-top " data-bs-toggle="tooltip" data-bs-placement="right" title="Asp too easy now" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <button className='btn btn-success'>
                                <NavLink className={"nav-link"} to={`/BlogDetail/${item.blogID}`}>Details</NavLink>
                            </button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted" >{item.createdAt}</small>
                        </div>
                    </div>



                ))}


            </div>





        </div>
    )
}

export default BlogAsp
