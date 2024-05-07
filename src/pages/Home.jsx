import React from 'react'
import {NavLink} from 'react-router-dom'
import HeaderForPage from '../components/HeaderForPage'

function Home() {
  return (
    <div className=''>
    <HeaderForPage>
       <ul className='d-flex space-x-3 text-green-950'>
        <NavLink to={'/student'}>student  |</NavLink>
        <NavLink to={'/teacher'}>teacher  |</NavLink>
        <NavLink to={'/admin'}>admin |</NavLink>
        <NavLink to={'/store'}>store</NavLink>
    </ul>
    <img className='mt-[800px] mx-auto ' width={450}  src="./public/images/logo.png" alt="" />
    </HeaderForPage>
   
    </div>
  )
}

export default Home