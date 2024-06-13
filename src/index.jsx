import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import HomeTemplates from './templates/HomeTemplates';
import AdminTemplates from './templates/AdminTemplates';
import About from './pages/About';
import Career from './pages/Career';
import Blog from './pages/Blog';
// import BlogDetails from './components/BlogDetails';
import BlogDetail from './pages/BlogDetail';
import FormCV from './pages/FormCV';
import Vacancies from './pages/Vacancies';
import AdminBlog from './pages/AdminBlog';
import AdminEmployee from './pages/AdminEmployee';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>

    <Routes>
      <Route path='' element={<HomeTemplates />}>
        <Route index element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='*' element={<Navigate to='/' />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='career' element={<Career />}></Route>
        <Route path='blog' element={<Blog />}></Route>
        <Route path='BlogDetail' element={<BlogDetail />}></Route>
        <Route path='formcv' element={<FormCV />}></Route>



      </Route>
      <Route path='admintemplates' element={<AdminTemplates />}>
        <Route path='vacacies' element={<Vacancies />}></Route>
        <Route path='adminblog' element={<AdminBlog />}></Route>
        <Route path='Employee'element={<AdminEmployee/>}></Route>


      </Route>
    </Routes>

  </BrowserRouter>
);



