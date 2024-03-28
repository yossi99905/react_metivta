import axios from '../../api/urls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
function UserInfo({ name, email, role, points, classRoom, onClickEdit, onDeleteUser }) {


    return (


        <div className="grid grid-cols-10 text-center  h-14    px-10 bg-tailwind-green-bright *:self-center">

            <button onClick={() => onDeleteUser(email)} className=" col-span-3 bg-red-500 hover:bg-red-600 size-9 rounded-full opacity-70 sm:col-span-1 "><FontAwesomeIcon icon={faTrashCan} /></button>
            <button onClick={() => onClickEdit()} className="col-span-3 bg-blue-500 opacity-70 rounded-full hover:bg-blue-600 size-9 sm:col-span-1"><FontAwesomeIcon icon={faPenToSquare} /></button>

            <p className="sm: col-span-2 hidden sm:block">{points}</p>
            <p className="sm:col-span-2 hidden sm:block">{classRoom}</p>

            <p className="col-span-4 sm:col-span-2 ">{name}</p>

            <p className="sm:col-span-2 hidden sm:block text-end">{role}</p>

        </div>

    )
}

export default UserInfo