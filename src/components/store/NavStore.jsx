import { faGauge, faHome, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavStore() {
    return (
        <div className='min-w-[70px] md:min-w-[250px] bg-purple-600 nuvLink'>
            <div className='bg-tailwind-cream rounded-full h-10 w-10 flex items-center justify-center m-auto mt-4'>
                <NavLink  to={'/store'}><FontAwesomeIcon className='text-black' icon={faHome} /></NavLink>
            </div>
            <ul className='text-end my-40 text-white text-opacity-70' >
                <div className='hidden md:block '>
                    <NavLink to={'/store/storeanagement'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center '>לוח מכוונים</li></NavLink>
                    <NavLink to={'/store/newItem'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center'>יצירת פריט חדש</li></NavLink>
                    <NavLink to={'/store/listItems'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center'>רשימת פריטים</li></NavLink>
                </div>
                <div className='*:text-2xl md:hidden space-y-4'>
                    <div>
                        <NavLink to={'/store/storeanagement'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center'>
                            <FontAwesomeIcon icon={faGauge} />
                        </li></NavLink>
                    </div>
                    <div>
                        <NavLink to={'/store/newItem'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center'>
                            <FontAwesomeIcon icon={faUserPlus} />
                        </li></NavLink>
                    </div>
                    <div>

                        <NavLink to={'/store/listItem'}><li className=' h-10 hover:bg-tailwind-green-bright hover:text-black items-center flex justify-center'>
                            <FontAwesomeIcon icon={faUsers} />
                        </li></NavLink>
                    </div>

                </div>


            </ul>

            {/* <CircleDesign /> */}

        </div>
    )
}

export default NavStore