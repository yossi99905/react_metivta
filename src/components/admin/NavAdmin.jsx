import React from 'react'
import { NavLink } from 'react-router-dom'


function NavAdmin() {
  return (
    <div className=''>
        <ul className='text-end my-32' >
            <li className='border border-black h-14 hover:bg-tailwind-green-bright items-center flex justify-center'><NavLink to={'/admin/dashboard'}>לוח מכוונים</NavLink></li>
            <li className='border border-black h-14 hover:bg-tailwind-green-bright items-center flex justify-center'><NavLink to={'/admin/newUser'}>יצירת משתמש חדש</NavLink></li>
            <li className='border border-black h-14 hover:bg-tailwind-green-bright items-center flex justify-center'><NavLink to={'/admin/listUsers'}>רשימת משתמשים</NavLink></li>
            <li className='border border-black h-14 hover:bg-tailwind-green-bright items-center flex justify-center'><NavLink to={'/admin/newCategory'}>יצירת קטגוריה חדשה</NavLink></li>
            <li className='border border-black h-14 hover:bg-tailwind-green-bright items-center flex justify-center'><NavLink to={'/admin/listCategories'}>רשימת קטגוריות</NavLink></li>
        </ul>
    </div>
  )
}

export default NavAdmin