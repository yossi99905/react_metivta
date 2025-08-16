import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import UserInformation from '../UserInformation'
import signOut from '../../auth/signOut'

export default function StoreHeader({ auth, setAuth, navigate, showUserInformation, setShowUserInformation }) {
  return (
    <div className="bg-tailwind-green col-span-9 grid grid-cols-9 row-span-1 h-[7lvh] relative">
      {/* Cart title */}
      <div className="col-span-2 flex justify-end items-center">
        <div className="text-white flex items-center justify-end text-3xl font-bold mr-2">
          סל קניות
        </div>
      </div>

      {/* User + actions */}
      <div className="col-span-7 flex justify-end items-center space-x-2 mr-5">
        <p className="text-white text-3xl">{auth.firstName + " " + auth.lastName}</p>

        {/* User info toggle */}
        <div
          className="bg-tailwind-cream rounded-full h-10 w-10 flex justify-center items-center hover:shadow-lg transition duration-300"
          onClick={() => setShowUserInformation(prev => !prev)}
        >
          <FontAwesomeIcon icon={faUser} className="text-tailwind-green text-xl" />
        </div>

        {/* Home */}
        <div
          className="bg-tailwind-cream rounded-full h-10 w-10 flex justify-center items-center hover:shadow-lg transition duration-300"
          onClick={() => navigate('/')}
        >
          <FontAwesomeIcon icon={faHome} className="text-tailwind-green text-xl" />
        </div>

        {/* Logout */}
        <div
          className="bg-tailwind-cream rounded-full h-10 w-10 flex justify-center items-center hover:shadow-lg transition duration-300"
          onClick={() => { signOut(navigate); setAuth({}) }}
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="text-tailwind-green text-xl" />
        </div>

        {/* Store management */}
        <div className="bg-tailwind-cream rounded-lg h-10 w-20 text-center flex justify-center items-center text-sm">
          <NavLink to={'/store/storeManagement'}>ניהול חנות</NavLink>
        </div>
      </div>

      {/* User info panel */}
      <div className="absolute left-0 w-full flex justify-end mt-20 rounded-lg">
        <UserInformation
          name={auth.firstName + " " + auth.lastName}
          classRoom={auth.classRoom}
          secretCode={auth.secretCode}
          active={showUserInformation}
          right={20}
        />
      </div>
    </div>
  )
}
