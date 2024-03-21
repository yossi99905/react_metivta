import { useEffect, useState } from 'react'
import axios from '../../api/urls'
import StudentCard from './StudentCard'



function ListUsers() {
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    

    const handleCheckboxChange = (user) => (event) => {
        if (event.target.checked) {
            setSelectedUsers(prevSelectedUsers => [...prevSelectedUsers, users[user].name]);
        } else {
            setSelectedUsers(prevSelectedUsers => prevSelectedUsers.filter(selectedUser => selectedUser !== users[user].name));
        }
    };
    const clicked = () =>{

        console.log(selectedUsers);
    }

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

    return (
        <div>
            <div className='space-y-3 flex flex-col items-end justify-end'>
                {users.length ?
                    users.map((user, index) => (
                        <StudentCard key={index} name={user.name} onCheckboxChange={handleCheckboxChange(index)}  />
                    ))
                    : <li>אין משתמשים</li>}
            </div>
            {/* <button onClick={clicked}>click</button> */}
        </div>
    )
}

export default ListUsers