import { useEffect, useState } from 'react'
import { useUsers } from '../../hook/useUsers';

function ListSelectUsersPay({ name, onSelectUserEmail, showSelectUserEmail }) {
  const { data: users = [] } = useUsers();
  const [showSelect, setShowSelect] = useState(false);


  useEffect(() => {
    if (showSelectUserEmail) {
      setShowSelect(true)
    }
  }, [showSelectUserEmail])

  const returnUsers = () => {
    return users.map((user, index) => {
      if (user.firstName.includes(name) || user.lastName.includes(name) || user.email.includes(name)) {
        return (
          <div key={index} className='flex justify-between items-end border-b p-2 ' onClick={() => { onSelectUserEmail(user.email); setShowSelect(false) }}>
            <p>${user.score}</p>
            <div className='text-end'>
              <p>{user.firstName + " " + user.lastName}</p>
              <p>{user.email}</p>
            </div>
          </div>
        )
      }
    })
  }





  return (
    <div>
      <button onClick={() => setShowSelect(prev => !prev)}>🔼</button>
      <div className={`${!showSelect && "hidden"} h-52 overflow-auto`}>

        {returnUsers()}
      </div>
    </div>
  )
}

export default ListSelectUsersPay