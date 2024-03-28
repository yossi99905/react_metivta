import { useEffect, useState } from 'react'
import axios from '../../api/urls'
import StudentCard from './StudentCard'
import useAuth from '../../hook/useAuth'




function ListUsers({onData}) {
    const { auth } = useAuth();    

    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);

    //send selected users to parent component
    useEffect(() => {
        const data =  selectedUsers
        onData(data);
    }, [selectedUsers]);
   
    
    //handle checkbox change
    const handleCheckboxChange = (user) => (event) => {
        if (event.target.checked) {
            setSelectedUsers(prevSelectedUsers => [...prevSelectedUsers, users[user].email]);
        } else {
            setSelectedUsers(prevSelectedUsers => prevSelectedUsers.filter(selectedUser => selectedUser !== users[user].email));
        }
    };

    const clicked = () =>{
        console.log(selectedUsers);
    }

    const inputForSelectAll = (event) => {
        if (event.target.checked) {
            setSelectedUsers(users.map(user => user.email));
        } else {
            setSelectedUsers([]);
        }
    }

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getUsers = async () => {
            
            try {
                const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1]; 
                const resp = await axios.get(`teachers?classNum=${auth.classRoom}`, {
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
            <input type="checkbox" onChange={inputForSelectAll} className="appearance-none w-6 h-6 hover:bg-tailwind-green-bright   rounded-xl border border-gray-300 checked:bg-tailwind-green checked:border-transparent items-center justify-center" />
                
                {users.length ?
                    users.map((user, index) => (
                        <StudentCard key={index} name={user.name} score={user.score} onCheckboxChange={handleCheckboxChange(index)}  />
                    ))
                    : <li>אין משתמשים</li>}
            </div>
            <button onClick={clicked}>click</button>
        </div>
    )
}

export default ListUsers