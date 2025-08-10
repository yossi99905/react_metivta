import { useState } from 'react'
import UserInformation from '../components/UserInformation'
import UserMenu from '../components/UserMenu'
import BalanceDisplay from '../components/student/BalanceDisplay'
import LastTransactionsPanel from '../components/student/LastTransactionsPanel'
import { useAuth } from "../atoms/authAtom";
import { useGetLastTransactions } from '../hook/useStudents'
import HeaderForPage from '../components/HeaderForPage'

function StudentPage() {
    const { auth, setAuth } = useAuth()
    const { data: lastTransactions } = useGetLastTransactions()

    const [showUserInformation, setShowUserInformation] = useState(false)
    const [showLastTransactions, setShowLastTransactions] = useState(false)

    return (
        <div>
            <HeaderForPage>
                <UserMenu 
                    auth={auth} 
                    showUserInformation={showUserInformation} 
                    toggleUserInformation={() => setShowUserInformation(prev => !prev)} 
                    setAuth={setAuth} 
                />
            </HeaderForPage>

            <UserInformation 
                left={"24"} 
                name={`${auth.firstName} ${auth.lastName}`} 
                classRoom={auth.classRoom} 
                secretCode={auth.secretCode} 
                active={showUserInformation} 
            />

            <div className='container m-auto text-center'>
                <BalanceDisplay 
                    score={auth.score} 
                    onToggleLastTransactions={() => setShowLastTransactions(prev => !prev)} 
                />
            </div>

            <LastTransactionsPanel lastTransactions={lastTransactions} visible={showLastTransactions} />
        </div>
    )
}

export default StudentPage

// import { useEffect, useState } from 'react'
// import UserInformation from '../components/UserInformation'
// import LastTransactions from '../components/student/LastTransactions'
// import useNum from '../hook/useNum'
// import signOut from '../auth/signOut'
// import { useAuth } from "../atoms/authAtom";
// import { useNavigate } from 'react-router-dom'
// import HeaderForPage from '../components/HeaderForPage'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRightFromBracket, faUser, faHome } from '@fortawesome/free-solid-svg-icons'
// import { useGetLastTransactions } from '../hook/useStudents'
// import CountUp from 'react-countup';

// function StudentPage() {
//     const { auth, setAuth } = useAuth();
//     const navigate = useNavigate();
//     const { num, start } = useNum({ autoplay: true, score: auth.score })
//     const { data: lastTransactions } = useGetLastTransactions()

//     const [showUserInformation, setShowUserInformation] = useState(false)
//     const [showLastTransactions, setShowLastTransactions] = useState(false)

//     useEffect(() => {
//         start()
//     }, [])

//     return (
//         <div>

//             <HeaderForPage>

//                 <div className={`${showUserInformation && 'border border-black  '} bg-tailwind-cream rounded-full h-10 w-10  text-sm text-center flex justify-center items-center hover:shadow-lg transition duration-300 `} onClick={() => setShowUserInformation(perv => !perv)}>
//                     <FontAwesomeIcon icon={faUser} className={`${showUserInformation && '   '} text-tailwind-green text-xl`} />
//                 </div>
//                 <div className='bg-tailwind-cream rounded-full h-10 w-10 flex justify-center items-center hover:shadow-lg transition duration-300'>
//                     <FontAwesomeIcon icon={faHome} className='text-tailwind-green text-xl' onClick={() => navigate('/')} />
//                 </div>
//                 <div className='bg-tailwind-cream rounded-full h-10 w-10  text-sm text-center flex justify-center items-center hover:shadow-lg transition duration-300' onClick={() => { signOut(navigate); setAuth({}) }}>
//                     <FontAwesomeIcon icon={faRightFromBracket} className='text-tailwind-green text-xl' />
//                 </div>
//                 <p className='text-white text-3xl'>{auth.firstName + " " + auth.lastName}</p>

//             </HeaderForPage>

//             <UserInformation left={"24"} name={auth.firstName + " " + auth.lastName} classRoom={auth.classRoom} secretCode={auth.secretCode} active={showUserInformation} />


//             <div className='container m-auto text-center '>
//                 <div className='flex flex-col text-center m-auto space-y-3 mt-52'>
//                     <h1 className='text-tailwind-green font-bold text-[120px] mb-[-35px]'>
//                         <span className='text-6xl'>$</span>
//                         <CountUp
//                             start={auth.score > 70 ? auth.score - 70 : auth.score}
//                             end={auth.score}
//                             duration={1.5}
//                         />
//                     </h1>
//                     <div className='text-white rounded-full   text-[60px] bg-tailwind-green m-auto px-10'>יתרתך הנוכחית</div>
//                     <button onClick={() => setShowLastTransactions(perv => !perv)} className=' p-2 text-tailwind-green m-auto text-[40px]'>פעולות אחרונות</button>
//                 </div>

//             </div>
//             <div className={`${!showLastTransactions && 'hidden'} w-full flex justify-center`}>
//                 <div className='w-80 text-center'>
//                     {/* <LastTransactions lastTransactions={lastTransactions} /> */}
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default StudentPage