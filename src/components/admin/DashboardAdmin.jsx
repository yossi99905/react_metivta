import NavAdmin from './NavAdmin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDollarSign, faCartShopping, faWallet } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'

function DashboardAdmin() {

    return (

        <div className='flex h-lvh justify-end'>
            <div className='w-lvw '>


                <div className="mx-9 space-y-4 sm:space-y-0 sm:grid grid-cols-2 gap-4 my-32 h-[500px]">
                    <div className="border p-4 text-center flex flex-col justify-center items-center space-y-4">
                        <div className='flex justify-center items-center space-x-4'>

                            <FontAwesomeIcon className='size-20 text-tailwind-green' icon={faUser} />
                            <p className='font-bold text-tailwind-green text-[55px] lg:text-[85px] my-auto'>
                                <CountUp
                                    start={0}
                                    end={26}
                                    duration={1.5}
                                />
                            </p>
                        </div>
                        <p>מספר משתמשים קיימים</p>
                    </div>
                    <div className="border p-4 text-center flex flex-col justify-center items-center space-y-4">
                        <div className='flex justify-center items-center space-x-4'>

                            <FontAwesomeIcon className='size-16 lg:size-20 text-tailwind-green' icon={faDollarSign} />
                            <p className='font-bold text-tailwind-green text-[55px] lg:text-[85px] my-auto'>
                                <CountUp
                                    start={0}
                                    end={1256}
                                    duration={1.5}
                                />
                            </p>
                        </div>
                        <p>מספר נקודות במערכת</p>
                    </div>
                    <div className="border p-4 text-center flex flex-col justify-center items-center space-y-4">
                        <div className='flex justify-center items-center space-x-4'>

                            <FontAwesomeIcon className='size-16 lg:size-20 text-tailwind-green' icon={faCartShopping} />
                            <p className='font-bold text-tailwind-green text-[55px] lg:text-[85px] my-auto'>
                                <CountUp
                                    start={0}
                                    end={7}
                                    duration={1.5}
                                />
                            </p>
                        </div>
                        <p>מספר רכישות שבוצעו היום</p>
                    </div>
                    <div className="border p-4 text-center flex flex-col justify-center items-center space-y-4">
                        <div className='flex justify-center items-center space-x-4'>

                            <FontAwesomeIcon className='size-16 lg:size-20 text-tailwind-green' icon={faWallet} />
                            <p className='font-bold text-tailwind-green text-[55px] lg:text-[85px] my-auto'>
                                <CountUp
                                    start={0}
                                    end={122}
                                    duration={1.5}
                                />
                            </p>
                        </div>
                        <p>מספר נקודות שחולקו היום</p>
                    </div>
                </div>


            </div>

            <NavAdmin />
        </div>
    )
}

export default DashboardAdmin