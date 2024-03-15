import React from 'react'
import {NavLink} from 'react-router-dom'

function Home() {
  return (
    <>
    <div>Home</div>
    <ul className='d-flex space-x-3'>
        <NavLink to={'/student'}>student</NavLink>
        <NavLink to={'/teacher'}>teacher</NavLink>
        <NavLink to={'/admin'}>admin</NavLink>
    </ul>
    </>
  )
}

export default Home