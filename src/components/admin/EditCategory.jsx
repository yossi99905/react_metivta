import { useForm } from 'react-hook-form';


function EditCategory({ showEditForm = false, onClickCloseBtn, name, _id, score, onClickEditAction}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  return (
    <div className={`${showEditForm ? "block" : "hidden"} fixed top-0 left-0 z-0 w-full  h-full bg-black  bg-opacity-40`}>
      


            <div className='flex justify-center items-center max-w-[500px] m-auto rounded-lg mt-28  '>
                <form onSubmit={handleSubmit(onClickEditAction)} className='bg-tailwind-cream rounded-lg px-7 flex flex-col  space-y-2 text-center  py-6 w-full'>
                    <button className=' text-start ml-10' onClick={onClickCloseBtn}>X</button>
                    {/* <input type="text" value={_id} {...register("_id")} /> */}
                    <label htmlFor="">name</label>
                    <input defaultValue={name} {...register("name", { required: true, minLength: 2 })} type="text" placeholder="הזן שם קטגוריה" className='rounded-2xl p-2 text-right w-full' />
                    <label htmlFor="">score</label>
                    <input defaultValue={score} {...register("score", { required: true, min: 4 })} type="number" placeholder="הזן ניקוד" className='rounded-2xl p-2 text-right w-full' />
                    <button type='submit' className=' rounded-2xl p-2 bg-tailwind-green text-white '>עדכן</button>

                </form>
            </div>
        </div>
  )
}

export default EditCategory