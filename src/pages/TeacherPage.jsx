import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import signOut from '../auth/signOut'
import ListUsers from '../components/teacher/ListUsers'
import HeaderForPage from '../components/HeaderForPage'
import useAuth from '../hook/useAuth'
import ListCayegory from '../components/teacher/ListCayegory'
import SuccesMessage from '../components/SuccesMessage'
import axios from '../api/urls'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import UserInformation from '../components/UserInformation'
import FreeScore from '../components/teacher/FreeScore'

function TeacherPage() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [bollSucces, setbollSucces] = useState(false);
  const [categoryShow, setCategoryShow] = useState(false);
  const [pointToGive, setPointToGive] = useState([]);
  const [cayegoryChoosen, setCayegoryChoosen] = useState('');
  const [updateStudentLocalPoint, setUpdateStudentLocalPoint] = useState(false);
  

  const [showUserInformtion, setShowUserInformtion] = useState(false)

  const handelSubmit = () => {
    setCategoryShow(false)


    console.log(pointToGive);
    console.log(cayegoryChoosen);
    sendPoint();



  }
  const sendPoint = async () => {
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
      const resp = await axios.put("/teachers/givePoints", { email: pointToGive, points: cayegoryChoosen }, {
        headers: {
          'x-api-key': token
        }
      });

      setbollSucces(!bollSucces)
      setUpdateStudentLocalPoint(!updateStudentLocalPoint)
      console.log(resp.data)

    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='h-lvh'>

      <SuccesMessage name={"הנקודות נשמרו בהצלחה"} onClickBtn={() => setbollSucces(false)} show={bollSucces} />

      <HeaderForPage >
        <div className='bg-tailwind-cream rounded-full h-10 w-10  text-sm text-center flex justify-center items-center hover:shadow-lg transition duration-300' onClick={() => setShowUserInformtion(perv => !perv)}>
          <FontAwesomeIcon icon={faUser} className='text-tailwind-green text-xl' />
        </div>
        <div className='bg-tailwind-cream rounded-full h-10 w-10 flex justify-center items-center hover:shadow-lg transition duration-300'>
          <FontAwesomeIcon icon={faHome} className='text-tailwind-green text-xl' onClick={() => navigate('/')} />
        </div>
        <div className='bg-tailwind-cream rounded-full h-10 w-10  text-sm text-center flex justify-center items-center hover:shadow-lg transition duration-300' onClick={() => { signOut(navigate); setAuth({}) }}>
          <FontAwesomeIcon icon={faRightFromBracket} className='text-tailwind-green text-xl' />
        </div>
        <p className='text-white text-3xl'>{auth.firstName + " " + auth.lastName}</p>
      </HeaderForPage>
      <UserInformation left={24} name={auth.firstName + " " + auth.lastName} classRoom={auth.classRoom} secretCode={auth.secretCode} active={showUserInformtion} />
      <input type="text" placeholder='חיפוש תלמיד' className='border border-tailwind-green rounded-3xl text-right px-3 h-8 ml-28 mb-8 mt-9 ' />

      <div className=' mx-auto flex sm:items-start items-center flex-col-reverse sm:flex sm:flex-row justify-center    space-x-8  '>

        <div className=' flex flex-row justify-center sm:m-0 m-7  '>
          <ListUsers onData={setPointToGive} onSendPoints={{ cayegoryChoosen, pointToGive, updateStudentLocalPoint }} />
        </div>
        <div className='w-40 flex flex-col justify-start items-center'>
          <button onClick={() => setCategoryShow(!categoryShow)} className='rounded-3xl bg-tailwind-green text-white text-3xl w-[200px] sm:w-36 sm:h-28 '>הוספת ניקוד</button>
          <div className={`${!categoryShow && 'hidden'} h-full w-36 flex flex-col items-center`}>
            <ListCayegory onData={setCayegoryChoosen} />
            
          </div>



        </div>
        

      </div>
      <div className='lg:w-[710px] md:w-[500px] sm:w-[410px] w-full bottom-4 fixed sm:bottom-28 sm:left-24'>
          <button onClick={handelSubmit} disabled={cayegoryChoosen == 0 || pointToGive.length == 0} className={`${(cayegoryChoosen == 0 || pointToGive.length) == 0 && "bg-tailwind-green-bright"}  rounded-3xl bg-tailwind-green text-white text-3xl sm:w-36 sm:h-28 w-full h-8 `}>שליחה</button>
      </div>
    </div>
  )
}

export default TeacherPage