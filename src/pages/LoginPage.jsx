import React from 'react'
import HeaderStyle from '../components/HeaderStyle'
import FormLogin from '../components/FormLogin'


const LoginPage = () => {
    return (
        <div className='static'>
            <HeaderStyle h={"h-12"}></HeaderStyle>
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