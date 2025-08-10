import CountUp from 'react-countup'

export default function BalanceDisplay({ score, onToggleLastTransactions }) {
    return (
        <div className='flex flex-col text-center space-y-3 mt-52'>
            <h1 className='text-tailwind-green font-bold text-[120px] mb-[-35px]'>
                <span className='text-6xl'>$</span>
                <CountUp
                    start={score > 70 ? score - 70 : score}
                    end={score}
                    duration={1.5}
                />
            </h1>
            <div className='text-white rounded-full text-[60px] bg-tailwind-green m-auto px-10'>יתרתך הנוכחית</div>
            <button onClick={onToggleLastTransactions} className='p-2 text-tailwind-green m-auto text-[40px]'>פעולות אחרונות</button>
        </div>
    )
}