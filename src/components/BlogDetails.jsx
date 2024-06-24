import React, { useEffect, useState } from 'react'
import laravel from '../images/laravel.jpg'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const [blogdetail, setBlogdetail] = useState(null);
  const [load, setLoad] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams()
  console.log(id)
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:7144/api/Blog/get/${id}`)
        console.log(response);
        setBlogdetail(response && response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoad(false);
      }
    };
    fetchData();
  }, [])
  if (load) return <div>Loading..</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      {blogdetail && (
        <div className="card mb-3">
          <img src={blogdetail.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{blogdetail.title}</h5>
            <p className="card-text">{blogdetail.description}</p>

          </div>
          <div className='card-footer d-flex justify-content-between'>
          <p className="card-text"><small className="text-muted">Create Day:{blogdetail.createdAt}</small></p>
          <p className="card-text"><small className="text-muted">End Day :{blogdetail.editedAt}</small></p>
          </div>
        </div>

      )}



    </div>
  )
}

export default BlogDetails
