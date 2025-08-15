import { useForm } from "react-hook-form"
import { useCreateCategory } from "../../hook/useCategories";


function FormNewCategory() {
    const { register, handleSubmit, reset } = useForm();
    const createCategory = useCreateCategory();


    const onSubmit = (data) => {
        createCategory.mutate(data, {
            onSuccess: () => {
                reset();
            },
        });

    }

    return (
        <div className='bg-tailwind-cream flex justify-center items-center max-w-[500px] m-auto rounded-lg shadow-md'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  space-y-8 my-10 mx-4 '>
                <input {...register("name", { required: true, minLength: 2 })} type="text" placeholder="הזן שם קטגוריה" className='rounded-2xl p-2 text-right w-full' />
                <input {...register("score", { required: true, minLength: 1 })} type="nunber" placeholder="הזן ניקוד" className='rounded-2xl p-2 text-right w-full' />
                <button type='submit' className=' rounded-2xl p-2 bg-tailwind-green text-white '>שלח</button>
            </form>
        </div>
    )
}

export default FormNewCategory