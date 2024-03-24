import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import signOut from '../auth/signOut'
import ListUsers from '../components/teacher/ListUsers'
import HeaderForPage from '../components/HeaderForPage'
import useAuth from '../hook/useAuth'
import ListCayegory from '../components/teacher/ListCayegory'
import SuccesMessage from '../components/SuccesMessage'
import axios from '../api/urls'

function TeacherPage() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [bollSucces, setbollSucces] = useState(false);
  const [categoryShow, setCategoryShow] = useState(false);
  const [pointToGive, setPointToGive] = useState({});
  const [cayegoryChoosen, setCayegoryChoosen] = useState('');

  const handelSubmit = () => {
    setCategoryShow(false)
    

    console.log(pointToGive);
    console.log(cayegoryChoosen);
    sendPoint();

  }
  const sendPoint = async () => {
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
      const resp = await axios.put("/teachers/givePoints", {email:pointToGive,points:cayegoryChoosen}, {
        headers: {
          'x-api-key': token
        }
      });
      setbollSucces(!bollSucces)
      console.log(resp.data)

    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='h-lvh'>

      <SuccesMessage name={"הנקודות נשמרו בהצלחה"} onClickBtn={() => setbollSucces(!bollSucces)} show={bollSucces} />

      <HeaderForPage >
        <div className='bg-tailwind-cream rounded-full h-10 w-10 '></div>
        <div className='bg-tailwind-cream rounded-full h-10 w-10 text-sm text-center' onClick={() => { signOut(navigate); setAuth({}) }}>sign out</div>
        <p className='text-white text-3xl'>{auth.name}</p>
      </HeaderForPage>
      <input type="text" placeholder='חיפוש תלמיד' className='border border-tailwind-green rounded-3xl text-right px-3 h-8 ml-28 mb-8 mt-9' />

      <div className='w-[900px] m-auto  grid grid-cols-12 space-x-8 h-full '>

        <div className='md:col-span-10 w-full'>
          <ListUsers onData={setPointToGive} />
        </div>
        <div className=' md:col-span-2'>
          <button onClick={() => setCategoryShow(!categoryShow)} className='rounded-3xl bg-tailwind-green text-white text-3xl w-36 h-28'>הוספת ניקוד</button>

          <div className={`${!categoryShow && 'hidden'} h-full w-36`}>
            <ListCayegory onData={setCayegoryChoosen} />
          </div>



        </div>
        <button onClick={handelSubmit} className='fixed bottom-28 rounded-3xl bg-tailwind-green text-white text-3xl w-36 h-28'>שליחה</button>

      </div>

    </div>
  )
}

export default TeacherPage