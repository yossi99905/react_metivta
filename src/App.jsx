import './App.css'
import 'tailwindcss/tailwind.css'
import React, { useEffect } from 'react';
import { Route, Routes, } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import AdminPage from './pages/AdminPage';
import Layout from './pages/Layout';
import Home from './pages/Home';
import MissingPage from './pages/MissingPage';
import RequireAuth from './auth/RequireAuth';
import refrshLoginAuth from './auth/refrshLoginAuth'
import NewUserPage from './components/admin/NewUserPage';
import DashboardAdmin from './components/admin/DashboardAdmin';
import ListUsersPage from './components/admin/ListUsersPage';
import NewCategoryPage from './components/admin/NewCategoryPage';
import ListCategoriesPage from './components/admin/ListCategoriesPage';
import CircleDesign from './components/CircleDesign';
import StorePage from './pages/StorePage';
import StoreManagementPage from './components/store/StoreManagementPage';
import NewItemPage from './components/store/NewItemPage';
import ListItemsPage from './components/store/ListItemsPage';
import HeaderAdmin from './components/admin/HeaderAdmin';
// import beforeunload from './auth/beforeunload';


function App() {
  const { refreshLogin } = refrshLoginAuth();
  useEffect(() => refreshLogin, [])
  // beforeunload();


  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />



          <Route element={<RequireAuth allowedRoles={["1000"]} />}>
            <Route path="/student" element={<StudentPage />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={["2000","4000"]} />}>
            <Route path="/teacher" element={<TeacherPage />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={["3000","2000"]} />}>
            <Route path="/store" element={<StorePage />} />
            <Route path="/store/storeanagement" element={<StoreManagementPage />} />
            <Route path="/store/newItem" element={<NewItemPage />} />
            <Route path="/store/ListItems" element={<ListItemsPage />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={["4000"]} />}>
            
            
            <Route path="/admin" element={<><HeaderAdmin /><DashboardAdmin /></>} />
            <Route path="/admin/dashboard" element={<><HeaderAdmin /><DashboardAdmin /></>} />
            <Route path="/admin/newUser" element={<><HeaderAdmin /><NewUserPage /></>} />
            <Route path="/admin/listUsers" element={<><HeaderAdmin /><ListUsersPage /></>} />
            <Route path="/admin/newCategory" element={<><HeaderAdmin /><NewCategoryPage /></>} />
            <Route path="/admin/listCategories" element={<><HeaderAdmin /><ListCategoriesPage /></>} />
          </Route>


<Route path="/admin/*" element={<HeaderAdmin />} />

          <Route path="/*" element={<MissingPage />} />
        </Route>
      </Routes>
      <CircleDesign />



    </>
  )
}

export default App