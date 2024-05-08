import React, { useEffect } from 'react'
import NavAdmin from './NavAdmin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDollarSign, faCartShopping, faWallet } from '@fortawesome/free-solid-svg-icons'
import useNum from '../../hook/useNum'

function DashboardAdmin() {
    const { num: num1, start: start1 } = useNum({ autoplay: true, score: 1256 });
    const { num: num2, start: start2 } = useNum({ autoplay: true, score: 26 });
    const { num: num3, start: start3 } = useNum({ autoplay: true, score: 7 });
    const { num: num4, start: start4 } = useNum({ autoplay: true, score: 122 });
    
    useEffect(() => {
        start1()
        start2()
        start3()
        start4()
    } , [])

    return (

        <div className='flex h-lvh justify-end'>
            <div className='w-lvw '>


                <div className="mx-9 grid grid-cols-2 gap-4 my-32 h-[500px]">
                    <div className="border p-4 text-center flex flex-col justify-center items-center space-y-4">
                        <div className='flex justify-center items-center space-x-4'>

                            <FontAwesomeIcon className='size-20 text-tailwind-green' icon={faUser} />
                            <p className='font-bold text-tailwind-green text-[85px] my-auto'>{num1}</p>
                        </div>
                        <p>מספר משתמשים קיימים</p>
                    </div>
                    <div className="border p-4 text-center flex flex-col justify-center items-center space-y-4">
                        <div className='flex justify-center items-center space-x-4'>

                            <FontAwesomeIcon className='size-20 text-tailwind-green' icon={faDollarSign} />
                            <p className='font-bold text-tailwind-green text-[85px] my-auto'>{num2}</p>
                        </div>
                        <p>מספר נקודות במערכת</p>
                    </div>
                    <div className="border p-4 text-center flex flex-col justify-center items-center space-y-4">
                        <div className='flex justify-center items-center space-x-4'>

                            <FontAwesomeIcon className='size-20 text-tailwind-green' icon={faCartShopping} />
                            <p className='font-bold text-tailwind-green text-[85px] my-auto'>{num3}</p>
                        </div>
                        <p>מספר רכישות שבוצעו היום</p>
                    </div>
                    <div className="border p-4 text-center flex flex-col justify-center items-center space-y-4">
                        <div className='flex justify-center items-center space-x-4'>

                            <FontAwesomeIcon className='size-20 text-tailwind-green' icon={faWallet} />
                            <p className='font-bold text-tailwind-green text-[85px] my-auto'>{num4}</p>
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