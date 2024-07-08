import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Profile from './templates/Profile';
import HomeTemplates from './templates/HomeTemplates';
import AdminTemplates from './templates/AdminTemplates';
import About from './pages/About';
import Career from './pages/Career';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Vacancies from './pages/Vacancies';
import AdminBlog from './pages/AdminBlog';
import AdminEmployee from './pages/AdminEmployee';
import JobOverview from './pages/JobOverview';
import PopularCompany from './pages/PopularCompany';
import Discovery from './pages/Discovery';
import Department from './dashboardadmin/Department';
import EmployeeInterview from './dashboardadmin/EmployeeInterview';
import InterView from './dashboardadmin/InterView';
import ScheduleInterview from './dashboardadmin/ScheduleInterview';
import Information from './pages/Information';
import CV from './pages/CV';
import Applicant from './dashboardadmin/Applicant';
import ApplyJob from './pages/ApplyJob';
import Vacanylist from './pages/Vacanylist';
import ApplyAction from './pages/ApplyAction';
import InterViewEmp from './dashboardadmin/InterViewEmp';
import ProfileApplicants from './dashboardadmin/ProfileApplicants';
import Vancancy from './pages/Vancancy';
import ViewDepart from './dashboardadmin/ViewDepart';
import CreateInterView from './pages/CreateInterView';
import { jwtDecode } from 'jwt-decode';
import Member from './components/Member';

const checkAdminRole=()=>{
  const token=localStorage.getItem('token');
  const expirationTime=localStorage.getItem('expirationTime');
  if(token&&expirationTime){
    const currenttime=new Date().getTime();
    if(currenttime<expirationTime){
      const decode=jwtDecode(token);
      if(decode.Roless==="Admin"||decode.Roless==="Employee"||decode.Roless==="HR"){
        return true
      }
    }else{
      localStorage.removeItem('token');
      localStorage.removeItem('expirationTime');
      window.location.reload();
    }
  }
  return false;
}
setInterval(checkAdminRole,1000);
const AdminRoute=({children})=>{
  return checkAdminRole()?children:<Navigate to="/"/>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path='' element={<HomeTemplates />}>
        <Route index element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='*' element={<Navigate to='/' />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='career' element={<Career />}></Route>
        <Route path='blog' element={<Blog />}></Route>
        <Route path='/BlogDetail' element={<BlogDetail />}></Route>
        <Route path='/jobview/:id' element={<JobOverview />}></Route>
        <Route path='popularCompany' element={<PopularCompany />}></Route>
        <Route path='discover' element={<Discovery />}></Route>
        <Route path='/home/cv' element={<CV />}></Route>
        <Route path='/applyjob/:id' element={<ApplyJob />}></Route>
        <Route path='/VacanyList/:id' element={<Vacanylist />}></Route>
        <Route path='member'element={<Member/>}></Route>

      </Route>
      <Route path='admintemplates' element={<AdminRoute><AdminTemplates /></AdminRoute>}>
        <Route index element={< Information />}></Route>
        <Route path='vacacies' element={<Vacancies />}></Route>
        <Route path='adminblog' element={<AdminBlog />}></Route>
        <Route path='Employee' element={<AdminEmployee />}></Route>
        <Route path='department' element={<Department />}></Route>
        <Route path='employeeinterview' element={<EmployeeInterview />}></Route>
        <Route path='interview' element={<InterView />}></Route>
        <Route path='scheduleinterview' element={<ScheduleInterview />}></Route>
        <Route path='information' element={<Information />}></Route>
        <Route path='applicant' element={<Applicant />}></Route>
        <Route path='intervew' element={<InterView />}></Route>
        <Route path='applyaction' element={<ApplyAction />}></Route>
        <Route path='interviewemp' element={<InterViewEmp />}></Route>
        <Route path='Empdepartment' element={<ViewDepart/>}></Route>
        <Route path='createinterview' element={<CreateInterView />}></Route>
      </Route>
      <Route path='profile' element={<Profile />}>
      <Route index element={<ProfileApplicants/>}></Route>

        <Route path='profileapplicant' element={<ProfileApplicants />}></Route>
        <Route path='vacancy'element={<Vancancy/>}></Route>
        

      </Route>

    </Routes>

  </BrowserRouter>
);



