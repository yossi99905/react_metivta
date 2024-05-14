import React, { useState } from 'react'
import useAuth from '../hook/useAuth'

function UserInformation({ name, secretCode, active, classRoom, left, right }) {
  const { auth, setAuth } = useAuth();
  const [showSecretCode, setShowSecretCode] = useState(false)
  const leeterAr = ['מנהל', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י']

  return (
    <div className={`${!active && 'hidden '}  h-96 w-80  absolute left-${left} right-${right} top-18 *:text-whit text-center bg-white`}>
      <div className='bg-tailwind-green-bright h-20 rounded-t-lg'></div>
      <div className='absolute top-12 w-full flex justify-center rounded-t-lg'>
        <div className='bg-tailwind-cream rounded-full size-16 flex items-center justify-center text-3xl z-10'>{name.charAt(0)}</div>
      </div>
      <div className='space-y-12  flex flex-col pt-14 items-center bg-slate-400 z-0 h-[304px] rounded-b-lg'>
        <h2 className='text-white'>{name}, כיתה: {leeterAr[classRoom]}</h2>
        <div className='space-y-4 flex flex-col items-center'>
          <h3 className='text-white'>הקוד הסודי</h3>
          <button onClick={() => setShowSecretCode(perv => !perv)} className='text-white text-[12px]'>הקש כדי לצפות</button>
          <div className={`${!showSecretCode && "blur-[3px] "} h-5 w-9 text-white`}>
            <p onClick={() => setShowSecretCode(perv => !perv)} className={`text-white text-xl`}>{secretCode}</p>
          </div>
        </div>
      </div>



    </div>
  )
}

export default UserInformation