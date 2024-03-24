import axios from '../../api/urls';

function UserInfo({ name, email, role, points, onClickEdit, onDeleteUser}) {

   
    return (
        <div className="flex items-center justify-between border-b border-gray-200 py-4">
            <div className="flex flex-col">
                <p className="text-lg font-semibold">{name}</p>
                <p className="text-gray-500 text-sm">{email}</p>
            </div>
            <div className="flex items-center">
                <p className="text-sm text-gray-500 mr-4">{role}</p>
                <p className="text-sm text-gray-500">{points} points</p>
                <button onClick={() => onClickEdit()} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-4">עריכת משתמש</button>
                <button onClick={() => onDeleteUser(email)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4">מחיקת משתמש</button>
            </div>
        </div>
    )
}

export default UserInfo