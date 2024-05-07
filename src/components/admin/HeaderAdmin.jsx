import React from 'react'
import useAuth from '../../hook/useAuth'
import signOut from '../../auth/signOut'
import { useNavigate } from 'react-router-dom'

function HeaderAdmin() {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    return (
        <div className='h-14 flex items-center space-x-2 pl-28 fixed'>
            <div className='bg-tailwind-cream rounded-full h-10 w-10 '></div>
            <div className='bg-tailwind-cream rounded-full h-10 w-10  text-sm text-center' onClick={() => { signOut(navigate); setAuth({}) }}>sign out</div>
            <p className=' text-3xl'>{auth.name}</p>
        </div>
    )
}

export default HeaderAdmin