import React from 'react'

function adminNuvLink() {
    return (
        <div>
            <ul className='d-flex space-x-3'>
                <NavLink to={'/student'}>student</NavLink>
                <NavLink to={'/teacher'}>teacher</NavLink>
                <NavLink to={'/admin'}>admin</NavLink>
            </ul>
        </div>
    )
}

export default adminNuvLink