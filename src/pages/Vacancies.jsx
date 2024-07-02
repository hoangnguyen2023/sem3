import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

const Vacancies = () => {
  const [vacacies, setvacancies] = useState([]);
  const [depart, setDepart] = useState([]);
  const [emp, setemp] = useState([]);
  const [editvacan, setEdit] = useState(null);
  const [onchange, setOnchange] = useState("");

  var token = localStorage.getItem("token");    
  var jwt = jwtDecode(token);
  const getuser = async () => {
    try {
      const res = await axios.get(
        `https://localhost:7144/api/User/getuserbyid/${jwt.EmployeeNumber}`
      );
     
     
      setemp(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVacancy = async () => {
    try {
      const res = await axios.get(
        `https://localhost:7144/api/Vacancy/GetAllVacancy`
      );
      setvacancies(res.data);
     
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDepart = async () => {
    try{
      const res = await axios.get(`https://localhost:7144/api/Department`)
     
      console.log("AAAAAAAAAA")
      console.log(res.data)
      setDepart(res.data)
      
    }
    catch(error){
      console.error(error)
    }
  }
  useEffect(() => {
    fetchVacancy();
    fetchDepart();
    getuser();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
     
      const depID = document.getElementById("DeparmentId").value;
      const local = document.getElementById("Local").value;
      const statuswork = document.getElementById("StatusWork").value;
      const closedate = document.getElementById("CloseDate").value;
      const title = document.getElementById("Title").value;
      const descript = document.getElementById("Decriptons").value;
      const slot = document.getElementById("Slot").value;

      const formdata = new FormData();
    
      formdata.append("EmployeeID", parseInt(jwt.Id));
      formdata.append("DepartmentID", depID);
      formdata.append("Local", local);
      formdata.append("StatusWork", statuswork);
      formdata.append("CloseDate", closedate);
      formdata.append("Title", title);
      formdata.append("Description", descript);
      formdata.append("Slot", slot);

      const response = await axios.post(
        "https://localhost:7144/api/Vacancy/CreateVacancy",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(formdata)
      if (response && response.data) {
       
      }
      
      fetchVacancy();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (vacancy) => {
    setEdit(vacancy);
  };

  const CloseFormEdit = async ()=>{
    setEdit(null)
  }

  const handlechangedepart = (e) => {
    setOnchange(e.target.value);
  
  };

  const handleSaveEdit= async () => {
    try{
      const status = document.getElementById("EditStatus").value;
      const closedate = document.getElementById("EditCloseDate").value;
      const slot = document.getElementById("EditSlot").value;
      const vacacyId = document.getElementById("vacacyId").value;
      const vacancyNumber = document.getElementById("vacancyNumber").value;
      const formData = new FormData();
      formData.append('VacancyID',vacacyId)
      formData.append('VacancyNumber',vacancyNumber)
      formData.append("EmployeeID",editvacan.employeeID);
      formData.append("DepartmentID",editvacan.departmentID);
      formData.append("Local" , "HN" );
      formData.append('Status',status)
      formData.append("StatusWork",'Fulltime');
      formData.append("CloseDate", closedate);
      formData.append("Title", "sssss");
      formData.append("Description","Sssss");
      formData.append("Slot", slot);

       const res = await axios.post(`https://localhost:7144/api/Vacancy/EditVacancy`,formData,{
            headers:{
                'Authorization':`Bearer ${token} `
            },
        })

        setEdit(null)
        fetchVacancy();
      
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
          Create Vacancy
        </button>
        {/* The Modal */}
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Create Vacancy</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                />
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <form action="">
                  <label className="DeparmentId">DeparmentId</label>
                  <div>
                    <select id="DeparmentId" onChange={handlechangedepart}>
                      {depart.length > 0 &&
                        depart.map((item, index) => (
                          <option key={index} value={item.departmentID}>
                            {item.departmentName}
                          </option>
                        ))}
                    </select>
                  </div>
              
                 
                  {/* <label className="createdate">Create Date</label>
                                    <input type="date" className='form-control' id="createdate" name='createdate' /> */}
                  {/* <label className="Enddate">Close Date</label>
                                    <input type="date" className='form-control' id="Local" name='Local' /> */}
                  <label className="CloseDate">Close Date</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="CloseDate"
                    name="CloseDate"
                  />
                  <select
                    id="Local"
                    class="form-select form-select-sm mb-3"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>----Local----</option>
                    <option value={"Ha Noi"}>Ha Noi</option>
                    <option value={"HCM"}>HCM</option>
                    <option value={"Da Nang"}>Da Nang</option>
                  </select>
                  <select
                    id="StatusWork"
                    class="form-select form-select-sm mb-3"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>----Status work----</option>
                    <option value={"fulltime"}>fulltime</option>
                    <option value={"Parttime"}>Parttime</option>
                    <option value={"Freelance"}>Freelance</option>
                  </select>
                  <label className="Title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Title"
                    name="Title"
                  />
                  <label className="Decriptons">Decriptons</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Decriptons"
                    name="Decriptons"
                  />
                  <label className="Slot">Slot</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Slot"
                    name="Slot"
                  />
                </form>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="submit"
                  onClick={handleCreate}
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
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
            <th scope="col">VacancyId</th>
            <th scope="col">DeparmentId</th>
            <th scope="col">EmployeeId</th>
            <th scope="col">Local</th>
            <th scope="col">Create Date</th>
            <th scope="col">Close Date</th>
            <th scope="col">Edit Date</th>
            <th scope="col">Title</th>
            <th scope="col">Decriptons</th>
            <th scope="col">Slot</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {vacacies?.map((vacacies, index) => (
            <tr key={index}>
              <th scope="row">{vacacies.vacancyID}</th>
              <td>{vacacies.departmentID}</td>
              <td>{vacacies.employeeID}</td>
              <td>{vacacies.local}</td>
              <td>{formatDate(vacacies.createDate)}</td>
              <td>{formatDate(vacacies.closeDate)}</td>
              <td>{formatDate(vacacies.editedAt)}</td>
              <td>{vacacies.title}</td>
              <td>{vacacies.decription}</td>
              <td>{vacacies.slot}</td>
              <td>{vacacies.status}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleEdit(vacacies)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editvacan && (
        <div className="modal" id="editModal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Vacancy</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={CloseFormEdit}
                />
              </div>
              <div className="modal-body">
                <form action="/submit-form" method="POST">
                  <label className="status">Status</label>
                 <div>
                  <select id="EditStatus">
                    <option value={"Close"}>Close</option>
                     <option  value={"Cancle"}>Cancle</option>
                  </select>
                 </div>
                  <label className="slot">Slot</label>
                  <input
                    type="number"
                    className="form-control"
                    id="EditSlot"
                    name="EditSlot"
                    defaultValue={editvacan.slot}
                  />
                  <label className="closedate">Close Date</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="EditCloseDate"
                    name="EditCloseDate"
                    defaultValue={editvacan.title}
                  />
                  <input
                    type="hidden"
                  
                    id="vacancyNumber"
                    name="vacancyNumber"
                    defaultValue={editvacan.vacancyNumber}
                  />
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
                  <input hidden id="vacacyId"  defaultValue={editvacan.vacancyID} />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vacancies;
