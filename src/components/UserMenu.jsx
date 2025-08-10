import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import useAuthActions from '../auth/authActions';

const UserMenu = ({ auth, showUserInformation, toggleUserInformation }) => {
    const { logout, navigateTo } = useAuthActions();

    return (
        <div className="flex items-center space-x-3">
            <div className={`${showUserInformation ? 'border border-black' : ''} bg-tailwind-cream rounded-full h-10 w-10 flex justify-center items-center hover:shadow-lg transition duration-300 cursor-pointer`} onClick={toggleUserInformation}>
                <FontAwesomeIcon icon={faUser} className="text-tailwind-green text-xl" />
            </div>
            <div className='bg-tailwind-cream rounded-full h-10 w-10 flex justify-center items-center hover:shadow-lg transition duration-300 cursor-pointer' onClick={navigateTo}>
                <FontAwesomeIcon icon={faHome} className='text-tailwind-green text-xl' />
            </div>
            <div className='bg-tailwind-cream rounded-full h-10 w-10 flex justify-center items-center hover:shadow-lg transition duration-300 cursor-pointer' onClick={logout}>
                <FontAwesomeIcon icon={faRightFromBracket} className='text-tailwind-green text-xl' />
            </div>
            <p className='text-white text-3xl'>{auth.firstName} {auth.lastName}</p>
        </div>
    )
}

export default UserMenu
