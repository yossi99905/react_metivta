import React from 'react'

function UserInformation({name, purchaseCode, active }) {
  return (
    <div className={`${ !active && 'hidden bg-black'}bg-tailwind-cream rounded-lg h-96 w-80 border border-spacing-2 absolute left-20 top-18 `}>
        {name}
        {purchaseCode}
    </div>
  )
}

export default UserInformation