import React, { useState } from 'react'

function GeneralItem({ img, name, onClickProductCard }) {

    const [amount, setAmount] = useState(0);

    return (
        <div>
            <div className='bg-tailwind-green-bright h-60 w-44 rounded-lg flex flex-col justify-center items-center md:col-span-2 p-3 '>
                <div className='h-32 rounded-lg bg-white w-40 m-2'>{img}</div>
                <h2 className='text-xl font-bold'>{name}</h2>
                <div className='flex space-x-3'>
                    <button onClick={() => setAmount(perv => perv > 0 && perv - 1)}>-</button>
                    <p>${amount == 0 ? "0" : amount}</p>
                    <button onClick={() => setAmount(perv => perv + 1)}>+</button>

                </div>
                <button className='rounded-lg bg-tailwind-green text-white text-center' onClick={() => onClickProductCard({ img, name, price: amount, amount: 1 })}>בחר</button>
            </div>

        </div>
    )
}

export default GeneralItem