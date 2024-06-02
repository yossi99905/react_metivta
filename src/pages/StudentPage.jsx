import React, { useEffect, useState } from 'react'
import HeaderStyle from '../components/HeaderStyle'
import UserInformation from '../components/UserInformation'
import LastTransactions from '../components/student/LastTransactions'
import axios from '../api/urls'

import useNum from '../hook/useNum'
import signOut from '../auth/signOut'
import useAuth from '../hook/useAuth'
import { useNavigate } from 'react-router-dom'
import HeaderForPage from '../components/HeaderForPage'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser, faHome } from '@fortawesome/free-solid-svg-icons'

function StudentPage() {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const { num, start } = useNum({ autoplay: true, score: auth.score })

    const [showUserInformtion, setShowUserInformtion] = useState(false)
    const [lastTransactions, setLastTransactions] = useState([])
    const [showLastTransactions, setShowLastTransactions] = useState(false)

    useEffect(() => {
        start()
        getLastTransactions()
    }, [])

    const getLastTransactions = async () => {
        try {
            const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
            const resp = await axios.get(`/transactions/${auth.email}`, {
                headers: {
                    'x-api-key': token
                }
            });
            console.log(resp.data);
            setLastTransactions(resp.data)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>

            <HeaderForPage>

                <div className={`${showUserInformtion && 'border border-black  '} bg-tailwind-cream rounded-full h-10 w-10  text-sm text-center flex justify-center items-center hover:shadow-lg transition duration-300 `} onClick={() => setShowUserInformtion(perv => !perv)}>
                    <FontAwesomeIcon icon={faUser} className={`${showUserInformtion && '   '} text-tailwind-green text-xl`} />
                </div>
                <div className='bg-tailwind-cream rounded-full h-10 w-10 flex justify-center items-center hover:shadow-lg transition duration-300'>
                    <FontAwesomeIcon icon={faHome} className='text-tailwind-green text-xl' onClick={() => navigate('/')} />
                </div>
                <div className='bg-tailwind-cream rounded-full h-10 w-10  text-sm text-center flex justify-center items-center hover:shadow-lg transition duration-300' onClick={() => { signOut(navigate); setAuth({}) }}>
                    <FontAwesomeIcon icon={faRightFromBracket} className='text-tailwind-green text-xl' />
                </div>
                <p className='text-white text-3xl'>{auth.firstName + " " + auth.lastName}</p>

            </HeaderForPage>

            <UserInformation left={"24"} name={auth.firstName + " " + auth.lastName} classRoom={auth.classRoom} secretCode={auth.secretCode} active={showUserInformtion} />


            <div className='container m-auto text-center '>
                <div className='flex flex-col text-center m-auto space-y-3 mt-52'>
                    <h1 className='text-tailwind-green font-bold text-[120px] mb-[-35px]'><span className='text-6xl '>$</span>{num.toFixed(0)}</h1>
                    <div className='text-white rounded-full   text-[60px] bg-tailwind-green m-auto px-10'>יתרתך הנוכחית</div>
                    <button onClick={()=>setShowLastTransactions(perv => !perv)} className=' p-2 text-tailwind-green m-auto text-[40px]'>פעולות אחרונות</button>
                </div>

            </div>
            <div className={`${!showLastTransactions && 'hidden' } w-full flex justify-center`}>
                <div className='w-80 text-center'>
                    <LastTransactions lastTransactions={lastTransactions} />
                </div>
            </div>

        </div>
    )
}

export default StudentPage