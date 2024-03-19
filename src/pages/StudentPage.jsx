import React, { useEffect } from 'react'
import HeaderStyle from '../components/HeaderStyle'
import CircleDesign from '../components/CircleDesign'
import useNum from '../hook/useNum'
import signOut from '../auth/signOut'
import useAuth from '../hook/useAuth'
import { useNavigate } from 'react-router-dom'
import HeaderForPage from '../components/HeaderForPage'

function StudentPage() {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const { num, start } = useNum({ autoplay: true, score: 85 })

    useEffect(() => {
        start()
    }, [])
    return (
        <div>
           
            <HeaderForPage>
              
                    <div className='bg-tailwind-cream rounded-full h-10 w-10 '></div>
                    <div className='bg-tailwind-cream rounded-full h-10 w-10  text-sm text-center' onClick={() => { signOut(navigate); setAuth({}) }}>sign out</div>
                    <p className='text-white text-3xl'>{auth.name}</p>
              
            </HeaderForPage>
            <div className='container m-auto text-center '>
                <div className='flex flex-col text-center m-auto space-y-3 mt-52'>
                    <h1 className='text-tailwind-green font-bold text-[120px] mb-[-35px]'>{num}</h1>
                    <div className='text-white rounded-full   text-[60px] bg-tailwind-green m-auto px-10'>יתרתך הנוכחית</div>
                    <button className=' p-2 text-tailwind-green m-auto text-[40px]'>פעולות אחרונות</button>
                </div>
            </div>
            <CircleDesign />
        </div>
    )
}

export default StudentPage