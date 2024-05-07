import React from 'react'
import NavAdmin from './NavAdmin'
import CircleDesign from '../CircleDesign'
import HeaderAdmin from './HeaderAdmin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDollarSign,faCartShopping, faWallet } from '@fortawesome/free-solid-svg-icons'

function DashboardAdmin() {
    
    return (

        <div className='flex h-lvh justify-end'>
            <div className='w-lvw '>

                {/* <HeaderAdmin /> */}
                <div className="mx-9 grid grid-cols-2 gap-4 my-32 h-[500px]">
                    <div className="border p-4 text-center flex flex-col justify-center items-center space-y-4">
                        <div className='flex justify-center items-center space-x-4'>

                            <FontAwesomeIcon className='size-32 text-tailwind-green' icon={faUser} />
                            <p className='font-bold text-tailwind-green text-[120px] my-auto'>26</p>
                        </div>
                        <p>מספר משתמשים קיימים</p>
                    </div>
                    <div className="border p-4 text-center flex flex-col justify-center items-center space-y-4">
                        <div className='flex justify-center items-center space-x-4'>

                            <FontAwesomeIcon className='size-32 text-tailwind-green' icon={faDollarSign} />
                            <p className='font-bold text-tailwind-green text-[120px] my-auto'>1256</p>
                        </div>
                        <p>מספר נקודות במערכת</p>
                    </div>
                    <div className="border p-4 text-center flex flex-col justify-center items-center space-y-4">
                        <div className='flex justify-center items-center space-x-4'>

                            <FontAwesomeIcon className='size-32 text-tailwind-green' icon={faCartShopping} />
                            <p className='font-bold text-tailwind-green text-[120px] my-auto'>7</p>
                        </div>
                        <p>מספר רכישות שבוצעו היום</p>
                    </div>
                    <div className="border p-4 text-center flex flex-col justify-center items-center space-y-4">
                        <div className='flex justify-center items-center space-x-4'>

                            <FontAwesomeIcon className='size-24 text-tailwind-green' icon={faWallet} />
                            <p className='font-bold text-tailwind-green text-[120px] my-auto'>122</p>
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