import React from 'react'

function teacherNuvLink() {
  return (
    <div>
         <ul className='d-flex space-x-3'>
        <NavLink to={'/student'}>student</NavLink>
        <NavLink to={'/teacher'}>teacher</NavLink>
   
    </ul>
    </div>
  )
}

export default teacherNuvLink