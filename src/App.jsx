import './App.css'
import 'tailwindcss/tailwind.css'
import React, { useEffect } from 'react';
import {  Route, Routes, } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import AdminPage from './pages/AdminPage';
import Layout from './pages/Layout';
import Home from './pages/Home';
import MissingPage from './pages/MissingPage';
import RequireAuth from './auth/RequireAuth';
import refrshLoginAuth  from './auth/refrshLoginAuth'
import NewUserPage from './components/admin/NewUserPage';
import DashboardAdmin from './components/admin/DashboardAdmin';
import ListUsersPage from './components/admin/ListUsersPage';
import NewCategoryPage from './components/admin/NewCategoryPage';
import ListCategoriesPage from './components/admin/ListCategoriesPage';


function App() {
  const { refreshLogin} = refrshLoginAuth();
  useEffect(() => refreshLogin, [])


  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />


    
            <Route element={<RequireAuth allowedRoles={["1000"]} />}>
              <Route path="/student" element={<StudentPage />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={["2000","3000"]} />}>
              <Route path="/teacher" element={<TeacherPage />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={["3000"]} />}>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/dashboard" element={<DashboardAdmin />} />
              <Route path="/admin/newUser" element={<NewUserPage />} />
              <Route path="/admin/listUsers" element={<ListUsersPage/>} />
              <Route path="/admin/newCategory" element={<NewCategoryPage/>} />
              <Route path="/admin/listCategories" element={<ListCategoriesPage/>} />
            </Route>
      

          <Route path="/*" element={<MissingPage />} />
        </Route>
      </Routes>



    </>
  )
}

export default App