import LastTransactions from '../../components/student/LastTransactions'

export default function LastTransactionsPanel({ lastTransactions, visible }) {
    if (!visible) return null

    return (
        <div className='w-full flex justify-center'>
            <div className='w-80 text-center'>
                <LastTransactions lastTransactions={lastTransactions} />
            </div>
        </div>
    )
}
