import './App.css'
import 'tailwindcss/tailwind.css'
import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import AdminPage from './pages/AdminPage';
import Layout from './pages/Layout';
import Home from './pages/Home';
import MissingPage from './pages/MissingPage';
import RequireAuth from './auth/RequireAuth';

function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />



          <Route element={<RequireAuth />}>
            <Route path="/student" element={<StudentPage />} />
          </Route>

          <Route path="/teacher" element={<TeacherPage />} />

          <Route path="/admin" element={<AdminPage />} />

          <Route path="/*" element={<MissingPage />} />
        </Route>
      </Routes>



    </>
  )
}

export default App