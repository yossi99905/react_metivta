import React from 'react'
import HeaderStyle from '../components/HeaderStyle'
import FormLogin from '../components/FormLogin'
import CircleDesign from '../components/CircleDesign'

const LoginPage = () => {
    return (
        <div className='static'>
            <HeaderStyle h={14} ></HeaderStyle>
            <img width={300} src="images/logo.png" className='m-auto mt-11 mb-11' alt="" />
            <FormLogin />
            <CircleDesign />

        </div>
    )
}

export default LoginPage