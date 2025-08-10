import { useEffect, useMemo, useState } from 'react'
import StudentCard from './StudentCard'

const ListUsers = ({ users, setPointToGive }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    setPointToGive(selectedUsers);
  }, [selectedUsers, setPointToGive]);

  const usersList = useMemo(() => (
    users &&
    users.map((user, index) => (
      <StudentCard
        key={index}
        name={user.firstName + " " + user.lastName}
        score={user.score}
        onCheckboxChange={() => {
          setSelectedUsers(prev => 
            prev.includes(user.email) 
              ? prev.filter(email => email !== user.email) 
              : [...prev, user.email]
          );
        }}
        isChecked={selectedUsers.includes(user.email)}
      />
    ))
  ), [users, selectedUsers]);

  return (
    <div>
      <div className='space-y-3 flex flex-col items-end justify-end h-full pb-14 sm:mb-0'>
        <div className='flex space-x-3 items-center'>
          <button onClick={() => setSelectedUsers([])} className='bg-tailwind-green text-white rounded-xl h-10 w-20'>איפוס</button>
          <label className='text-right'>בחר הכל</label>
          <input
            type="checkbox"
            onChange={e => e.target.checked ? setSelectedUsers(users.map(u => u.email)) : setSelectedUsers([])}
            className="appearance-none w-6 h-6 hover:bg-tailwind-green-bright rounded-xl border border-gray-300 checked:bg-tailwind-green checked:border-transparent"
          />
        </div>
        {usersList}
      </div>
    </div>
  );
}

export default ListUsers;
