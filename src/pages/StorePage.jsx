import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../components/store/ProductCard'

function StorePage() {
    return (
        <div className='grid grid-cols-9 grid-rows-12 h-lvh '>
            <div className='bg-tailwind-green col-span-9  grid grid-cols-9 row-span-1'>
                <div className="col-span-2 text-white flex items-center justify-end mr-8 text-3xl font-bold">סל קניות</div>
                <div className='col-span-7 flex justify-end items-center space-x-2 mr-5 '>
                    <p className='font-bold text-xl'>יוסף לרנר</p>
                    <FontAwesomeIcon className='text-2xl' icon={faUser} />
                    <div className='bg-tailwind-cream rounded-full h-10 w-10 flex items-center justify-center'>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </div>
                    <div className='bg-tailwind-cream rounded-full h-10 w-10  text-sm text-center'></div>
                </div>
            </div>


            <div className='border bg-rose-500 row-span-8 col-span-2 '>

            </div>

            {/* products list */}
            <div className='border bg-rose-500 col-span-7 row-span-8'>
                <div className='flex flex-row-reverse space-x-4' >
                    <ProductCard img='' name='ארוחת צהרייים' price='15' onClickProductCard={() => console.log('product card clicked')} />
                    <ProductCard img='' name='ארוחת צהרייים' price='16' onClickProductCard={() => console.log('product card clicked')} />
                    <ProductCard img='' name='ארוחת צהרייים' price='17' onClickProductCard={() => console.log('product card clicked')} />
                </div>
            </div>
        </div>
    )
}

export default StorePage