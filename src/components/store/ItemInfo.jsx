import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'


function ItemInfo({ name, price, category, inStock, isPinned, inventoryCount, barcodeNum, onDeleteItem, onClickEditItem}) {
    return (


        <div className="grid grid-cols-6 sm:grid-cols-10 text-center place-items-center gap-4 h-14 bg-tailwind-green-bright">
            <div className='col-span-2 ml-8 sm:ml-0 space-x-3 flex justify-between'>
                <button onClick={() => onDeleteItem()} className="bg-red-500 hover:bg-red-600 size-9 rounded-full opacity-70"><FontAwesomeIcon icon={faTrashCan} /></button>
                <button onClick={() => onClickEditItem()} className="bg-blue-500 opacity-70 rounded-full hover:bg-blue-600 size-9"><FontAwesomeIcon icon={faPenToSquare} /></button>
            </div>

            <p className="col-span-2 sm:col-span-1 hidden sm:block">{barcodeNum}</p>
            <p className="col-span-1 sm:col-span-1 hidden sm:block">{inventoryCount}</p>
            <p className="col-span-1 sm:col-span-1 hidden sm:block">{isPinned}</p>
            <p className="col-span-1 sm:col-span-1 hidden sm:block">{inStock}</p>
            <p className="col-span-1 sm:col-span-1 hidden sm:block">{category}</p>

            <p className="col-span-1 sm:col-span-1 hidden sm:block text-end">{price}</p>
            <p className="col-span-4 sm:col-span-2">{name}</p>

        </div>

    )
}

export default ItemInfo