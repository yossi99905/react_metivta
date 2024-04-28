import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

function CartProduct({ name, amount, price, editAmount, onClearOneProduct}) {
    return (
        <div className='bg-tailwind-green-bright h-20'>
            <button onClick={()=>onClearOneProduct(name)} className='absolute '>X</button>
            <div className=' flex justify-between mx-8 mt-4'>
                <div className='flex items-center'>
                    <p className='font-bold'>{price}$</p>
                </div>
                <div className=''>
                    <h3 className=''>{name}</h3>
                    <div className='flex space-x-1 items-center'>
                        <button onClick={()=>editAmount("-",name)} className='bg-yellow-300 rounded-full size-4 flex items-center justify-center'><FontAwesomeIcon className='text-sm ' icon={faMinus} /></button>
                        <button onClick={()=>editAmount("+",name)} className='bg-blue-500 rounded-full size-4 flex items-center justify-center'><FontAwesomeIcon className='text-sm ' icon={faPlus} /></button>
                        <p>{amount}</p>
                        <p className='font-bold'>:כמות</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartProduct