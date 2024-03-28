import React from 'react'

function ProductCard({img, name, price,onClickProductCard}) {
  return (
    <div className='bg-tailwind-green-bright h-60 w-44 rounded-lg flex flex-col justify-center items-center md:col-span-2 p-3 '>
        <div className='h-32 rounded-lg bg-white w-full m-2'>{img}</div>
        <h2 className='text-xl font-bold'>{name}</h2>
        <p>{price}$</p>
        <button className='rounded-lg bg-tailwind-green text-white text-center' onClick={onClickProductCard}>בחר</button>
    </div>
  )
}

export default ProductCard