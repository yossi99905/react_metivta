import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import signOut from '../auth/signOut'
import ListUsers from '../components/teacher/ListUsers'
import HeaderForPage from '../components/HeaderForPage'
import useAuth from '../hook/useAuth'
import ListCayegory from '../components/teacher/ListCayegory'
import SuccesMessage from '../components/SuccesMessage'

function TeacherPage() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [bollSucces, setbollSucces] = useState(false)

  const [categoryShow, setCategoryShow] = useState(false);

  const handelSubmit = () => {
    setCategoryShow(false)
    setbollSucces(!bollSucces)
    
  }

  return (
    <div className='h-lvh'>

      <SuccesMessage name={"הנקודות נשמרו בהצלחה"} onClickBtn={()=>setbollSucces(!bollSucces)} show={bollSucces}/>

      <HeaderForPage >
        <div className='bg-tailwind-cream rounded-full h-10 w-10 '></div>
        <div className='bg-tailwind-cream rounded-full h-10 w-10 text-sm text-center' onClick={() => { signOut(navigate); setAuth({}) }}>sign out</div>
        <p className='text-white text-3xl'>{auth.name}</p>
      </HeaderForPage>
      <input type="text" placeholder='חיפוש תלמיד' className='border border-tailwind-green rounded-3xl text-right px-3 h-8 ml-28 mb-8 mt-9' />

      <div className='w-[900px] m-auto  grid grid-cols-12 space-x-8 h-full '>

        <div className='md:col-span-10 w-full'>
          <ListUsers />
        </div>
        <div className=' md:col-span-2'>
          <button onClick={() => setCategoryShow(!categoryShow)} className='rounded-3xl bg-tailwind-green text-white text-3xl w-36 h-28'>הוספת ניקוד</button>

          <div className={`${!categoryShow && 'hidden'} h-full w-36`}>
            <ListCayegory />
          </div>



        </div>
        <button onClick={handelSubmit} class='fixed bottom-28 rounded-3xl bg-tailwind-green text-white text-3xl w-36 h-28'>שליחה</button>

      </div>
      
    </div>
  )
}

export default TeacherPage