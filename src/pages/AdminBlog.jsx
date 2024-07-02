import { Description } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import '../scss/blogdashboard.css'

const AdminBlog = () => {
  const [getblog, setBlog] = useState([]);
  const [getemp, setEmp] = useState(null);
  const [editBlog, setEditBlog] = useState(null);
  var token = localStorage.getItem("token");
  var jwtuser = jwtDecode(token);
  const getuser = async () => {
    try {
      const res = await axios.get(
        `https://localhost:7144/api/User/getuserbyid/${jwtuser.EmployeeNumber}`
      );
      console.log(res.data);
      setEmp(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBlog = async () => {
    try {
      const res = await axios.get("https://localhost:7144/api/Blog/GetAllBlog");
      setBlog(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlog();
    getuser();
  }, []);
  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const employeeID = document.getElementById("EmployeeID").value;
      const title = document.getElementById("Title").value;
      const description = document.getElementById("Descriptions").value;
      const avatarFile = document.getElementById("Avatar").files[0];

      const formData = new FormData();
      formData.append("EmployeeID", employeeID.trim());
      formData.append("Title", title.trim());
      formData.append("Description", description.trim());
      formData.append("Avatar", avatarFile);

      const response = await axios.post(
        "https://localhost:7144/api/Blog/CreateBlog",
        formData,{
          headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${token}`,
          }
        }
      );
      console.log(response);

      // Cập nhật lại danh sách blog sau khi tạo thành công
      fetchBlog();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (blog) => {
    console.log(blog)
    setEditBlog(blog);
   
  }; 

  const handleSaveEdit = async () => {
    try{
    
      const employeeID = document.getElementById("EditEmployeeID").value;
      const title = document.getElementById("EditTitle").value;
      console.log(title)
      const description = document.getElementById("EditDescriptions").value;
      console.log(description)
      const avatarFile = document.getElementById("EditAvatar").files[0];

      const formData = new FormData();
    //  formData.append("EditedAt",new Date())
      formData.append("EmployeeID", editBlog.employeeID);
      formData.append("BlogID", editBlog.blogID);
      formData.append("BlogNumber", editBlog.blogNumber);
      formData.append("Title", title);
      formData.append("Description", description);
     formData.append("Avatar", avatarFile);
      console.log(formData)

      const res = await axios.post("https://localhost:7144/api/Blog/EditBlog",formData,{
        headers:{
          "Content-Type": "multipart/form-data",
          'Authorization':`Bearer ${token}`
        },
      })
      console.log(res)
     
      fetchBlog();
      setEditBlog(null);
    }
    catch(error){
      console.log(error)
    }
  }

  const CloseFormEdit = () =>{
    setEditBlog(null)
  }
  
  const handleDelete = async (id)=>{
   
    try{
      const res = await axios.delete(`https://localhost:7144/api/Blog/DeleteBlog/${id}`,{
        headers:{
          'Authorization':`Bearer ${token}`
        },
      })
      await fetchBlog();
    }
    catch(error){
      console.error(error)
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }
  
  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-primary m-4"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Create Blog
        </button>
        {/* The Modal */}
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Create Blog</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                />
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <form action="/submit-form" method="POST">
                  <label className="employeeID">EmployeeNumber</label>
                  <input
                    type="text"
                    className="form-control"
                    id="EmployeeID"
                    name="EmployeeID"
                    value={getemp && getemp.employeeID && getemp.employeeID}
                  />
                  <label className="Title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Title"
                    name="Title"
                  />
                  <label className="descriptions">Descriptions</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Descriptions"
                  />
                  
                  <label className="image">Image</label>
                  <input type="file" className="form-control" id="Avatar" />
                </form>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={handleCreate}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">BlogId</th>
            <th scope="col">BlogNumber</th>
            <th scope="col">EmployeeID</th>
            <th scope="col">Title</th>
            <th scope="col">Decriptions</th>
            <th scope="col">Image</th>
            <th scope="col">Create Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {getblog?.map((getblog, index) => (
            <tr key={index}>
              <th scope="row">{getblog.blogID}</th>
              <td>{getblog.blogNumber}</td>
              <td>{getblog.employeeID}</td>
              <td>{getblog.title}</td>
              <td className="style">{getblog.description}</td>
              <td>{getblog.image}</td>
              <td>{formatDate(getblog.createdAt)}</td>
              <td>
                <button className="btn btn-success " onClick={() => handleDelete(getblog.blogID)}>Delete</button>
                <button className="btn btn-danger"onClick={() => handleEdit(getblog)} >Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      
      </table>

      {editBlog && (
        <div className="modal" id="editModal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Blog</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={CloseFormEdit}
                />
              </div>
              <div className="modal-body">
                <form action="/submit-form" method="POST">
                <label className="employeeID">BlogID</label>
                  <input
                    type="number"
                    className="form-control"
                    id="EditBlogID"
                    name="BlogID"
                    defaultValue={editBlog.blogID}
                  />
                  <label className="employeeID">EmployeeID</label>
                  <input
                    type="number"
                    className="form-control"
                    id="EditEmployeeID"
                    name="EmployeeID"
                    defaultValue={editBlog.employeeID}
                  />
                  <label className="Title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="EditTitle"
                    name="Title"
                    defaultValue={editBlog.title}
                  />
                  <label className="descriptions">Descriptions</label>
                  <input
                    type="text"
                    className="form-control"
                    id="EditDescriptions"
                    defaultValue={editBlog.description}
                  />
            
                  <label className="image">Image</label>
                  <input type="file" className="form-control" id="EditAvatar" />
                  <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={handleSaveEdit}
                >
                  Save
                </button>
              </div>
                </form>
              </div>
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlog;
