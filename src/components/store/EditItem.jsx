import { useForm } from 'react-hook-form';


function EditItem({ showEditForm = false, onClickCloseBtn, name, price, category, inStock, isPinned, inventoryCount, barcodeNum, image, onClickEditAction}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  return (
    <div className={`${showEditForm ? "block" : "hidden"} fixed top-0 left-0 z-0 w-full  h-full bg-black  bg-opacity-40`}>
      


            <div className='flex justify-center items-center max-w-[500px] m-auto rounded-lg mt-28  '>
                <form onSubmit={handleSubmit(onClickEditAction)} className='bg-tailwind-cream rounded-lg px-7 flex flex-col  space-y-2 text-center  py-6 w-full'>
                    <button className=' text-start ml-10' onClick={onClickCloseBtn}>X</button>
                    <label htmlFor="">שם מוצר</label>
                    <input defaultValue={name} {...register("name", { required: true, minLength: 2,maxLength:30 })} type="text" placeholder="הזן שם מוצר" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">מחיר</label>
                    <input defaultValue={price} {...register("price", { required: true,min:0, max: 1000 })} type="number" step="0.01" placeholder="הזן מחיר" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">קטגוריה</label>
                    <input defaultValue={category} {...register("category", { required: true,minLength:2, maxLength: 20 })} type="text" placeholder="הזן קטגוריה" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">במלאי</label>
                    <input defaultChecked={inStock} {...register("inStock")} type="checkbox" placeholder="הזן במלאי" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">מוצמד</label>
                    <input defaultChecked={isPinned} {...register("isPinned")} type="checkbox" placeholder="הזן מוצמד" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">כמות</label>
                    <input defaultValue={inventoryCount} {...register("inventoryCount", { required: true,min:0, max: 1000 })} type="number" placeholder="הזן כמות" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">ברקוד</label>
                    <input defaultValue={barcodeNum} {...register("barcodeNum", { required: true, minLength:0,maxLength: 15 })} type="number" placeholder="הזן ברקוד" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">קישור תמונה</label>
                    <input defaultValue={image} {...register("image", { required: true,minLength:0, maxLength: 100 })} type="text" placeholder="הזן קישור תמונה" className='rounded-2xl p-2 text-right w-full' />
                    <button type='submit' className=' rounded-2xl p-2 bg-tailwind-green text-white '>עדכן</button>

                </form>
            </div>
        </div>
  )
}
export default EditItem