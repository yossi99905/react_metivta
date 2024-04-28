import { useForm } from 'react-hook-form'
import axios from '../../api/urls';


function NewItemForm() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const newItem = async (data) => {
        try {
            const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
            const resp = await axios.post("/products", data, {
                headers: {
                    'x-api-key': token
                }
            });
            console.log(resp.data)

        }
        catch (err) {
            console.log(err);
        }
    }




    const onSubmit = (data) => {
      

        //remove inventoryCount if empty
        if (data.inventoryCount === "") {
            delete data.inventoryCount;
        }

        console.log(data)
        newItem(data)
        reset({ name: '', price: '', barcodeNum: '', category: '', inStock: false, isPinned: false, inventoryCount: ''});

        

    }

    return (
        <div className='bg-tailwind-cream flex justify-center items-center max-w-[500px] m-auto rounded-lg shadow-md'>



            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  space-y-8 my-10 mx-4 '>
                <input {...register("name", { required: true, minLength: 2 })} type="text" placeholder="הזן שם מוצר" className='rounded-2xl p-2 text-right w-full' />
                <input {...register("price", { required: true })} type="number" placeholder="הזן מחיר" className='rounded-2xl p-2 text-right w-full' />
                <div className='text-center'>
                    <input {...register("barcodeNum", { required: true })} type="number" placeholder="הזן ברקוד" className='rounded-2xl p-2 text-right w-full' />
                    {errors.barcodeNum && <span className='text-center text-sm text-red-600 '>ישנה שגיאה</span>}
                </div>
                <select {...register("category", { required: true })} className='rounded-2xl p-2 text-right w-full'>
                    <option value="snacks">חטיפים</option>
                    <option value="food">אוכל</option>
                    <option value="general">כללי</option>
                </select>
                <input {...register("inStock")} type="checkbox" className='rounded-2xl p-2 text-right w-full' />
                <label htmlFor="inStock">פריט במלאי</label>
                <input {...register("isPinned")} type="checkbox" className='rounded-2xl p-2 text-right w-full' />
                <label htmlFor="inStock">פריט מוצמד</label>
                <input {...register("inventoryCount", { required: false ,min:0})} type="number" placeholder="הזן כמות" className='rounded-2xl p-2 text-right w-full' />
        
                <button type='submit' className=' rounded-2xl p-2 bg-tailwind-green text-white '>שלח</button>

            </form>

        </div>
    )
}

export default NewItemForm