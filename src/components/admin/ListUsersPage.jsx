import React, { useEffect, useState } from 'react'
import NavAdmin from './NavAdmin'
import axios from '../../api/urls'
import UserInfo from './UserInfo';
import EditUser from './EditUser';
import { set } from 'react-hook-form';



function ListUsersPage() {
    const [users, setUsers] = useState([]);
    const [editUsers, setEditUsers] = useState();
    // const [showEditFrom, setShowEditFrom] = useState(false);

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
        // setShowEditFrom(true);
        console.log(editUsers, "editUsers");


    }

    //edit user to state and server
    const editUserOnList = async (data) => {
        console.log(data)
        try {
            const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
            const resp = await axios.put(`/users/${editUsers._id}`, data, {
                headers: {
                    'x-api-key': token
                }
            });
            console.log(resp.data)
            //set role in data
            if (data.role == '3000') {
                data.role = ['3000'];
            } else if (data.role == '2000') {
                data.role = ['2000'];
            } else {
                data.role = ['1000'];
            }
            // update user in users state
            setUsers(users.map(user => user._id === editUsers._id ? { ...data, _id: editUsers._id } : user));
            setEditUsers(null);


        }
        catch (err) {
            console.log(err);
        }
    }

    //delete user to state and server
    const deleteUser = async (id) => {
        const confirmed = window.confirm("האם אתה בטוח שברצונך למחוק משתמש זה?");
        if (confirmed) {

            try {
                const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
                const resp = await axios.delete(`/users/${id}`, {
                    headers: {
                        'x-api-key': token
                    }
                });
                console.log(resp.data);
                // remove user from users state
                setUsers(users.filter(user => user._id !== id));

            }
            catch (err) {
                console.log(err);
            }
        }



    }


    return (

        <div className='flex  justify-end'>
            <div className="w-lvw mx-9 my-32 max-w-[700px]">
                <div className='space-y-2'>

                    <div className="grid grid-cols-10 text-center  h-8   px-10 font-bold *:self-center">

                        <div className='col-span-2'></div>

                        <p className="sm: col-span-2 hidden sm:block">נק׳</p>
                        <p className="sm:col-span-2 hidden sm:block">כיתה</p>

                        <p className="col-span-4 sm:col-span-2 ">שם</p>

                        <p className="sm:col-span-2 hidden sm:block text-end">תפקיד</p>

                    </div>


                    {
                        users.length > 0 ?
                            users.map((user, index) => (

                                <UserInfo key={index} name={user.lastName + " " + user.firstName} email={user.email}
                                    classRoom={user.classRoom == 1? 'א' : user.classRoom == 2? 'ב' : user.classRoom == 3? 'ג' : user.classRoom == 4? 'ד' : user.classRoom == 5? 'ה' : user.classRoom == 6? 'ו' : user.classRoom == 7? 'ז' : user.classRoom == 8? 'ח':user.classRoom == 9? 'ט' : user.classRoom == 10? 'י' : 'לא משויך'}
                                    role={
                                        user.role.length > 0 ? (user.role[0] == '4000' ? 'מנהל' : user.role[0] == '2000' ? 'מורה' : user.role[0] == "1000" ? 'תלמיד' : 'קיוסקאי'
                                        ) :
                                            user.role == '4000' ? 'מנהל' : user.role == '2000' ? 'מורה' :user.role[0] == "1000" ? 'תלמיד' : 'קיוסקאי'}
                                    points={user.score}
                                    onClickEdit={() => clickEdit(user)}
                                    onDeleteUser={() => deleteUser(user._id)}
                                />))
                            :
                            <div className="text-center">No users found</div>


                    }


                    {editUsers && <EditUser showEditForm={editUsers} onClickCloseBtn={() => setEditUsers(null)} firstName={editUsers.firstName} lastName={editUsers.lastName} email={editUsers.email} role={editUsers.role[0] == "3000" ? "3000" : editUsers.role[0] == "2000" ? "2000" : "1000"} classRoom={editUsers.classRoom} ID={editUsers.ID} dateOfBirth={editUsers.dateOfBirth} score={editUsers.score} onClickEdit={editUserOnList} />}
                </div>
            </div>



            <NavAdmin />


        </div>

    )
}

export default ListUsersPage