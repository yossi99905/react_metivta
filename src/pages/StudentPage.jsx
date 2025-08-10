import { useState } from 'react'
import UserInformation from '../components/UserInformation'
import UserMenu from '../components/UserMenu'
import BalanceDisplay from '../components/student/BalanceDisplay'
import LastTransactionsPanel from '../components/student/LastTransactionsPanel'
import { useAuth } from "../atoms/authAtom";
import { useGetLastTransactions } from '../hook/useTransactions'
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