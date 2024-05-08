import React from 'react'
import useAuth from '../hook/useAuth'

function UserInformation({name, secretCode, active, classRoom, left = 0, right = 0}) {
  const { auth, setAuth } = useAuth();
  return (
    <div className={`${ !active && 'hidden bg-black'}bg-tailwind-cream rounded-lg h-96 w-80 border border-spacing-2 absolute left-${left} right-${right} top-18 `}>
        {name}
        {secretCode}
        {classRoom}
    </div>
  )
}

export default UserInformation