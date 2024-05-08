import React, { useEffect, useState } from 'react'
import axios from '../../api/urls'

function ListSelectUsersPay({ name , onSelectUserEmail, showSelectUserEmail}) {
  const [users, setUsers] = useState([]);
  const [showSelect, setShowSelect] = useState(false);

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const getUsers = async () => {
      try {
        const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
        const resp = await axios.get('/users', {
          headers: {
            'x-api-key': token
          },
          signal: controller.signal
        });
        console.log(resp.data);
        if (isMounted) {
          setUsers(resp.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getUsers();
    return () => {
      isMounted = false
      controller.abort()
    }

  }, [])

  useEffect(() => {
    if (showSelectUserEmail) {
      setShowSelect(true)
    }
  }, [showSelectUserEmail])

  

  const returnUsers = () => {
    return users.map((user, index) => {
      if (user.firstName.includes(name) || user.lastName.includes(name) || user.email.includes(name)){
        return (
          <div key={index} className='flex justify-between items-end border-b p-2 ' onClick={() => {onSelectUserEmail(user.email);setShowSelect(false)}}>
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
      <div className={`${!showSelect && "hidden"}`}>

        {returnUsers()}
      </div>
    </div>
  )
}

export default ListSelectUsersPay