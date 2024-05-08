import React, { useState } from 'react'
import useAuth from '../../hook/useAuth'
import signOut from '../../auth/signOut'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import UserInformation from '../UserInformation'

function HeaderAdmin() {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    const [showUserInformtion, setShowUserInformtion] = useState(false)

    return (
        <>
            <div className='h-14 fixed mt-2'>
                <div className='mb-1 flex items-center space-x-2 pl-28'>

                <div className='bg-tailwind-cream rounded-full h-10 w-10  text-sm text-center flex justify-center items-center hover:shadow-lg transition duration-300' onClick={() => setShowUserInformtion(perv => !perv)}>
                    <FontAwesomeIcon icon={faUser} className='text-tailwind-green text-xl' />
                </div>
                <div className='bg-tailwind-cream rounded-full h-10 w-10 flex justify-center items-center hover:shadow-lg transition duration-300'>
                    <FontAwesomeIcon icon={faHome} className='text-tailwind-green text-xl' onClick={() => navigate('/')} />
                </div>
                <div className='bg-tailwind-cream rounded-full h-10 w-10  text-sm text-center flex justify-center items-center hover:shadow-lg transition duration-300' onClick={() => { signOut(navigate); setAuth({}) }}>
                    <FontAwesomeIcon icon={faRightFromBracket} className='text-tailwind-green text-xl' />
                </div>
                <p className=' text-3xl'>{auth.firstName + " " + auth.lastName}</p>
                
                </div>
                <UserInformation left={30} name={auth.firstName + " " + auth.lastName} secretCode={auth.secretCode} classRoom={auth.classRoom} active={showUserInformtion} />
            </div>
        </>
    )
}

export default HeaderAdmin