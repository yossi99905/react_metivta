import React, { useEffect, useState } from 'react'
import NavAdmin from './NavAdmin'
import axios from '../../api/urls'
import UserInfo from './UserInfo';
import EditUser from './EditUser';


function ListUsersPage() {
    const [users, setUsers] = useState([]);
    const [editUsers, setEditUsers] = useState();
    const [showEditFrom, setShowEditFrom] = useState(false);

    //get all users
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
                    // setEditUsers(resp.data[0]);
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

    //click edit user
    const clickEdit = (user) => {
        setEditUsers(user);
        setShowEditFrom(true);


    }

    //edit user to state and server
    const editUserOnList =async (data) => {
        console.log(data)
        try {
            const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
            const resp = await axios.put(`/users/${data.email}`, data, {
                headers: {
                    'x-api-key': token
                }
            });
            console.log(resp.data)
            // update user in users state
            setUsers(users.map(user => user.email === data.email ? data : user));
            setEditUsers(null);

        }
        catch (err) {
            console.log(err);
        }
    }

    //delete user to state and server
    const deleteUser = async (email) => {
        const confirmed = window.confirm("האם אתה בטוח שברצונך למחוק משתמש זה?");
        if (confirmed) {
            try {
                const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
                await axios.delete(`/users/${email}`, {
                    headers: {
                        'x-api-key': token
                    }
                });

                // remove user from users state
                setUsers(users.filter(user => user.email !== email));
            }
            catch (err) {
                console.log(err);
            }
        }
        


    }


    return (
        <div>
            <div className='grid grid-cols-4 h-lvh'>
                <div className="col-span-3">
                    {
                        users.length > 0 ?
                            users.map((user, index) => (

                                <UserInfo key={index} name={user.name} email={user.email} role={
                                    user.role[0] === '3000' ? 'Admin' : user.role[0] === '2000' ? 'Teacher' : 'Student'

                                }
                                    points={user.score}
                                    onClickEdit={() => clickEdit(user)}
                                    onDeleteUser={deleteUser}
                                />))
                            :
                            <div className="text-center">No users found</div>


                    }


                    {editUsers && <EditUser showEditForm={editUsers} onClickCloseBtn={() => setEditUsers(null)} name={editUsers.name} email={editUsers.email} role={editUsers.role[0] == "3000"? "3000" : editUsers.role[0] == "2000" ? "2000" : "1000"} classRoom={editUsers.classRoom} ID={editUsers.ID} dateOfBirth={editUsers.dateOfBirth} score={editUsers.score} onClickEdit={editUserOnList} />}

                </div>

                <div className='col-span-1'>

                    <NavAdmin />
                </div>

            </div>
        </div>

    )
}

export default ListUsersPage