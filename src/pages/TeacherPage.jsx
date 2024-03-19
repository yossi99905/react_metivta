import React from 'react'
import { useNavigate } from 'react-router-dom'
import signOut from '../auth/signOut'
import ListUsers from '../components/teacher/ListUsers'
import HeaderForPage from '../components/HeaderForPage'
import useAuth from '../hook/useAuth'

function TeacherPage() {
  const navigate = useNavigate();
  const { auth ,setAuth} =useAuth();
 
  return (
    <>
      <HeaderForPage >
        <div className='bg-tailwind-cream rounded-full h-10 w-10 '></div>
        <div className='bg-tailwind-cream rounded-full h-10 w-10 text-sm text-center' onClick={()=>{signOut(navigate);setAuth({})}}>sign out</div>
        <p className='text-white text-3xl'>{auth.name}</p>
      </HeaderForPage>
      <input type="text" placeholder='חיפוש תלמיד' className='border border-tailwind-green rounded-3xl text-right px-3 h-8 ml-28 mb-8 mt-9' />

      <div className='container m-auto  place-items-center  grid grid-cols-12 space-x-8 '>
        
        <div className='md:col-span-10 w-full'>
          <ListUsers />
        </div>
        <button className='rounded-3xl bg-tailwind-green text-white text-3xl w-36 h-28 md:col-span-2'>הוספת ניקוד</button>
      </div>
    </>
  )
}

export default TeacherPage