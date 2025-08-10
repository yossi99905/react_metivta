import { useEffect, useState } from 'react'
import axios from '../../api/axiosInstance'
import StudentCard from './StudentCard'
import { useAuth } from "../../atoms/authAtom";

function ListUsers({ onData, onSendPoints, setUsersForTransaction }) {
    const { auth } = useAuth();

    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);

    useEffect(() => {
        setUsersForTransaction(users);
    }, [users])


    //send selected users to parent component
    useEffect(() => {
        const data = selectedUsers
        onData(data);
    }, [selectedUsers])

    // Update users state when received from parent component
    useEffect(() => {
        console.log(onSendPoints);
        clicked();
        if (onSendPoints) {
            const { cayegoryChoosen, pointToGive } = onSendPoints;
            setUsers(prevUsers => {
                const updatedUsers = [...prevUsers];
                pointToGive.forEach(userToUpdate => {
                    const userIndex = updatedUsers.findIndex(user => user.email === userToUpdate);
                    if (userIndex !== -1) {
                        updatedUsers[userIndex] = {
                            ...updatedUsers[userIndex],
                            score: updatedUsers[userIndex].score + cayegoryChoosen
                        };
                    }
                });
                return updatedUsers;
            });
        }
    }, [onSendPoints.updateStudentLocalPoint]);


    //handle checkbox change
    const handleCheckboxChange = (user) => (event) => {
        if (event.target.checked) {
            setSelectedUsers(prevSelectedUsers => [...prevSelectedUsers, users[user].email]);
        } else {
            setSelectedUsers(prevSelectedUsers => prevSelectedUsers.filter(selectedUser => selectedUser !== users[user].email));
        }
    };

    const clicked = () => {
        setSelectedUsers([]);
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
                const accessToken = document.cookie.split('; ').find(row => row.startsWith('accessToken=')).split('=')[1];
                const resp = await axios.get(`teachers?classNum=${auth.classRoom}`, {
                    headers: {
                        'x-api-key': accessToken
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
            <div className='space-y-3 flex flex-col items-end justify-end h-full pb-14 sm:mb-0'>
                <div className='flex space-x-3 items-center'>
                    <button onClick={clicked} className='bg-tailwind-green text-white rounded-xl h-10 w-20'>איפוס</button>
                    <label className='text-right'>בחר הכל</label>
                    <input type="checkbox" onChange={inputForSelectAll} className="appearance-none w-6 h-6 hover:bg-tailwind-green-bright   rounded-xl border border-gray-300 checked:bg-tailwind-green checked:border-transparent items-center justify-center" />
                </div>


                {users.length ?
                    users.map((user, index) => (
                        <StudentCard key={index} name={user.firstName + " " + user.lastName} score={user.score} onCheckboxChange={handleCheckboxChange(index)} isChecked={selectedUsers.includes(user.email)} />
                    ))
                    : <li>אין משתמשים</li>}
            </div>


        </div>
    )
}

export default ListUsers