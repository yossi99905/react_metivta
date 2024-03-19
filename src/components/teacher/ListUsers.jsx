import { useEffect, useState } from 'react'
import axios from '../../api/urls'
import StudentCard from './StudentCard'


function ListUsers() {
    const [users, setUsers] = useState([]);

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
            <div className='space-y-3'>
                {users.length ?
                    users.map((user, index) => (
                        <StudentCard key={index} name={user.name} />
                    ))
                    : <li>אין משתמשים</li>}
            </div>

        </div>
    )
}

export default ListUsers