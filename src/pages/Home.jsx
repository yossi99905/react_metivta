import React from 'react'
import { NavLink } from 'react-router-dom'
import HeaderForPage from '../components/HeaderForPage'

function Home() {
  return (
    <div className=''>
      {/* <HeaderForPage>
        <ul className='d-flex space-x-3 text-green-950'>
          <NavLink to={'/student'}>student  |</NavLink>
          <NavLink to={'/teacher'}>teacher  |</NavLink>
          <NavLink to={'/admin'}>admin |</NavLink>
          <NavLink to={'/store'}>store</NavLink>
        </ul>


      </HeaderForPage>
      <div className='w-full flex justify-end '>
        <img className='mt-24  lg:mr-10 xl:mr-40 lg:w-[800px]' width={550} src="/images/home_img.png" alt="" />
      </div> */}
      <div className='mt-52 lg:ml-60 md:ml-52 sm:ml-32 ml-20 space-y-5  z-50 absolute'>
        <NavLink className='bg-tailwind-green w-56 h-14 flex items-center justify-center rounded-lg text-xl' to={'/student'}><div ><span>תלמיד</span></div></NavLink>
        <NavLink className='bg-tailwind-green w-56 h-14 flex items-center justify-center rounded-lg text-xl' to={'/teacher'}><div ><span>מורה</span></div></NavLink>
        
      </div>
      <img src="../images/logo.png" className='fixed bottom-24 lg:ml-60 md:ml-52 sm:ml-32 ml-20' width={250} alt="" />
      <div className='h-14 bg-tailwind-green w-lvw bottom-0 fixed'></div>
      <div className='w-lvw h-lvh flex justify-end items-center xl:items-start absolute left-0 top-0 z-20'>
        <img src="../images/bg.png" className=' max-h-lvh z-0' alt="" />
      </div>

    </div>
  )
}

export default Home