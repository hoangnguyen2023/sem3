import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import '../scss/blogdashboard.css'
import { Try } from '@mui/icons-material';



const ApplyAction = () => {
    const [applyaction, setApplyaction] = useState([]);
    const [getemp, setEmp] = useState([]);
    const [loading, setloading] = useState(false)
    const [detailapply, setDetail] = useState(null);
    const [empID,setempID]=useState('');
    const [apID,setapID]=useState('');

    var token = localStorage.getItem('token');
    var jwt = jwtDecode(token);

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
         
            const scheduleDate = document.getElementById('ScheduleDate').value;
            const endDate = document.getElementById('EndDate').value;
            const createdAt = document.getElementById('CreatedAt').value;
            const EditedAt = document.getElementById('EditedAt').value;
            // const status = document.getElementById('Status').value;
            const vacancyID = document.getElementById('VacancyID').value;
            const formdata = new FormData();
            formdata.append('ScheduleDate', scheduleDate);
            formdata.append('EndDate', endDate);
          
            formdata.append('EditedAt', EditedAt);
            formdata.append('Status', "waiting");
            formdata.append('VacancyID', vacancyID);
            formdata.append('Vacancy.Interview.Vacancy.Interview.employeeInterviewID',empID);
            formdata.append('Vacancy.Interview.Vacancy.Interview.applicantInterviewID',apID);
            const response = await axios.post(`https://localhost:7144/api/Interview/CreateInterview`, formdata);
            if (response && response.data) {

                console.log(response);

            }

        }
        catch (error) {
            console.error(error);

        }

    }

    const fetchapplyaction = async () => {
        try {
            const res = await axios.get(`https://localhost:7144/api/ApplyAction/GetAll`);
            console.log(res.data);
            setApplyaction(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchapplyaction();
        handleDetail();
        // getuser();  
    }, [loading])
    const handleDetail = async (id) => {

        try {
            const res = await axios.get(`https://localhost:7144/api/ApplyAction/Detail/${id}`);
            console.log(res.data);
            setDetail(res.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    const handleChangeStatus = async (value) => {
        try {
            const res = await axios.get(`https://localhost:7144/api/ApplyAction/ChangeStatus/${value.id}/${value.status}`);
            console.log(res.data);
            setloading(!loading)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        const fetchemp=async ()=>{
            try{
                const res=await axios.get('https://localhost:7144/api/Employee/GetAllEmployees');
                if(res&&res.data){
                    setEmp(res.data)
                }
            }catch(error){
                console.error(error)
            }
        }
        fetchemp();
    },[])
   
    return (
        <div>

            <table class="table table-hover mt-5">
                <thead>
                    <tr>
                        <th scope="col">ApplyID</th>
                        <th scope="col">Fullname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Birthday</th>
                        <th scope="col">Phonenumber</th>
                        <th scope="col">FileCV</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>

                    </tr>
                </thead>
                <tbody>
                    {applyaction?.map((applyaction, index) => (
                        <tr key={index}>
                            <th scope="row">{applyaction.applyID}</th>
                            <td>{applyaction.fullname}</td>
                            <td >{applyaction.email}</td>
                            <td>{applyaction.birthday}</td>
                            <td>{applyaction.phonenumber}</td>
                            <td ><a target='blank' className='filecv' href={applyaction.fileCV}>{applyaction.fileCV}</a></td>
                            <td>{applyaction.description}</td>
                            <td>{applyaction.status}</td>

                            <td>


                                <button onClick={() => handleChangeStatus({ status: "Hired", id: applyaction.applyID })} className='btn btn-danger'>Hired</button>
                                <button onClick={() => handleChangeStatus({ status: "Reject", id: applyaction.applyID })} className='btn btn-warning'>Reject Apply</button>
                                <button type="button" onClick={()=>handleDetail(applyaction.applyID)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Create Shulude
                                </button>
                            </td>
                        </tr>

                    ))}


                </tbody>
            </table>
            <div>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create Schedule InterView</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form action="">
                                    <label className="blogid" hidden>InterviewId</label>
                                    <input type="text" className='form-control' id="InterviewId" name='InterviewId' hidden />
                                    <label className="ScheduledDate" hidden>InterviewNumber</label>
                                    <input type="text" className='form-control' id="InterviewNumber" name='ScheduledDate'  hidden />
                                    <label className="StartTime">VacancyID</label>
                                    <input type="text" className='form-control' id="VacancyID" value={detailapply&&detailapply.vacancyID} name='StartTime' />
                                    <label className="EndTime">ScheduledDate</label>
                                    <input type="date" className='form-control' id="ScheduleDate" name='EndTime' />
                                    <label className="EndTime">EndDay</label>
                                    <input type="date" className='form-control' id="EndDate" name='EndTime' />
                                    <label className="EndTime">CreateDay</label>
                                    <input type="date" className='form-control' id="CreatedAt" name='EndTime' />
                                    <label className="EndTime">EditDay</label>
                                    <input type="date" className='form-control' id="EditedAt" name='EndTime' />
                                    <input type="text" value={detailapply&&detailapply.applicantID}  onChange={(e)=>setempID(e.target.value)}/>
                                    <select onChange={(e)=>setapID(e.target.value)}>
                                        {getemp&&getemp.map((item)=>{
                                            <option key={item.employeeID} value={item.employeeID}>{item.fullName}</option>
                                        })}
                                        
                                    </select>
                                </form>
                            </div> 
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" onClick={handleCreate} className="btn btn-primary">Create Interview</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ApplyAction
