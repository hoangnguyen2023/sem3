import React, { useEffect, useState } from 'react'
import laravel from '../images/laravel.jpg'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Us from '../components/Us'
import moment from 'moment';
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const BlogDetails = () => {
  const query = useQuery();
  const blogid = query.get('id');
  const [blogdetail, setBlogdetail] = useState([]);
  const [load, setLoad] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams()
  console.log(id)


  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.get(`https://localhost:7144/api/Blog/${blogid}`)
        console.log(response);
        setBlogdetail(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoad(false);
      }
    };
    fetchData();
  }, []);

  if (load) return <div>Loading..</div>
  if (error) return <div>Error: {error.message}</div>
  const style = {
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'gray'

  }

  return (
    <div>
      <Us />
      {blogdetail && (

        <div className="card mb-3   " style={{ border: "none", width: 1200, margin: "auto" }}>

          <h5 className="card-title ">{blogdetail.title}</h5>
          <div className=' text-end'>
            <p className="card-text "><small className="text-muted">Create Day : {moment(blogdetail.createdAt).format('DD/MM/YYYY')}</small></p>

          </div>
          <p className="card-text my-5">{blogdetail.description}</p>
          <img src={blogdetail.image} className="card-img-top" alt="..." />
          <div className="card-body">
        
            <p className="card-text">{blogdetail.description}</p>

          </div>
          <div className='card-footer d-flex flex-row bd-highlight  ' style={style}>

            <p className="card-text mx-2"><small className="text-muted"><i class="fa-solid fa-thumbs-up"></i></small></p>
            <p className="card-text mx-2"><small className="text-muted"><i class="fa-regular fa-comment"></i></small></p>
            <p className="card-text mx-2"><small className="text-muted"><i class="fa-regular fa-eye"></i></small></p>

          </div>
        </div>

      )}

      {/* {blogdetail && (
        <div className="card mb-3" style={{ maxWidth: 1920, border: "none" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={blogdetail.image} style={{ width: 1490 }} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{blogdetail.title}</h5>
                <p className="card-text">{blogdetail.description}</p>
                <p className="card-text"><small className="text-muted">{blogdetail.createdAt}</small></p>
              </div>
            </div>
          </div>
        </div>

      )} */}





    </div>
  )
}

export default BlogDetails
