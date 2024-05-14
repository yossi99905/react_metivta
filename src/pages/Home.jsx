import React from 'react'
import { NavLink } from 'react-router-dom'
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


      </HeaderForPage>
      <div className='w-full flex justify-end '>
        <img className='mt-24  lg:mr-10 xl:mr-40 lg:w-[800px]' width={550} src="/images/home_img.png" alt="" />
      </div>
    </div>
  )
}

export default Home