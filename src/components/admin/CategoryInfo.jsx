import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function CategoryInfo({ name, score, onClickEditCategory, onDeleteCategory }) {
    return (
        <div className="grid grid-cols-10 text-center  h-14    px-10 bg-tailwind-green-bright *:self-center">


            <button onClick={() => onDeleteCategory()} className=" col-span-3 bg-red-500 hover:bg-red-600 size-9 rounded-full opacity-70 sm:col-span-1 "><FontAwesomeIcon icon={faTrashCan} /></button>
            <button onClick={() => onClickEditCategory()} className="col-span-3 bg-blue-500 opacity-70 rounded-full hover:bg-blue-600 size-9 sm:col-span-1"><FontAwesomeIcon icon={faPenToSquare} /></button>


            <p className="col-span-4 sm:col-span-4 hidden sm:block">{score}</p>
            <p className="col-span-4 sm:col-span-4 text-end">{name}</p>

        </div>
    )

}

export default CategoryInfo