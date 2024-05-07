import React from 'react'
import HeaderStyle from '../components/HeaderStyle'
import FormLogin from '../components/FormLogin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <div className='static'>
            <HeaderStyle h={"h-12"}>
                <div className='rounded-full bg-tailwind-cream size-10 flex flex-col justify-center items-center ml-32'>
                    <FontAwesomeIcon icon={faHome} className='text-xl text-tailwind-green' onClick={()=>navigate('/')}  />

                </div>
            </HeaderStyle>
            <img width={300} src="images/logo.png" className='m-auto mt-11 mb-11' alt="" />
            <div className='px-6 '>

                <div className='bg-tailwind-cream rounded-lg h-80 shadow-md flex justify-center items-center  m-auto max-w-[1020px] '>

                    <FormLogin />
                </div>
            </div>


        </div>
    )
}

export default LoginPage