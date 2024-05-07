
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge, faUser, faUsers,faUserPlus ,  faFileCirclePlus, faFolderClosed } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { NavLink } from 'react-router-dom'
import CircleDesign from '../CircleDesign'


function NavAdmin() {
  return (
    <div className='min-w-[70px] h-lvh md:min-w-[250px] bg-tailwind-green nuvLink sticky top-0'>
      <ul className='text-end my-40 text-white text-opacity-70' >
        <div className='hidden md:block '>
          <NavLink to={'/admin/dashboard'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center '>לוח מכוונים</li></NavLink>
          <NavLink to={'/admin/newUser'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center'>יצירת משתמש חדש</li></NavLink>
          <NavLink to={'/admin/listUsers'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center'>רשימת משתמשים</li></NavLink>
          <NavLink to={'/admin/newCategory'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center'>יצירת קטגוריה חדשה</li></NavLink>
          <NavLink to={'/admin/listCategories'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center'>רשימת קטגוריות</li></NavLink>
        </div>
        <div className='*:text-2xl md:hidden space-y-4'>
          <div>

            <NavLink to={'/admin/dashboard'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center'>
              <FontAwesomeIcon icon={faGauge} />
            </li></NavLink>
          </div>
          <div>
            <NavLink to={'/admin/newUser'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center'>
              <FontAwesomeIcon icon={faUserPlus} />
            </li></NavLink>
          </div>
          <div>

            <NavLink to={'/admin/listUsers'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center'>
              <FontAwesomeIcon icon={faUsers} />
            </li></NavLink>
          </div>
          <div>

            <NavLink to={'/admin/newCategory'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center'>
              <FontAwesomeIcon icon={faFileCirclePlus} />
            </li></NavLink>
          </div>
          <div>

            <NavLink to={'/admin/listCategories'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center'>
              <FontAwesomeIcon icon={faFolderClosed} />
            </li></NavLink>
          </div>
        </div>


      </ul>

      {/* <CircleDesign /> */}

    </div>
  )
}

export default NavAdmin