import { useForm } from 'react-hook-form';

function EditCategory({ onSubmit, name, score }) {
  const { register, handleSubmit } = useForm();

  return (
    <div className='w-full max-w-[500px]'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-tailwind-cream rounded-lg px-7 flex flex-col space-y-2 text-center py-6 w-full'
      >
        <label>name</label>
        <input
          defaultValue={name}
          {...register("name", { required: true, minLength: 2 })}
          type="text"
          placeholder="הזן שם קטגוריה"
          className='rounded-2xl p-2 text-right w-full'
        />

        <label>score</label>
        <input
          defaultValue={score}
          {...register("score", { required: true, min: 4 })}
          type="number"
          placeholder="הזן ניקוד"
          className='rounded-2xl p-2 text-right w-full'
        />

        <button
          type='submit'
          className='rounded-2xl p-2 bg-tailwind-green text-white'
        >
          עדכן
        </button>
      </form>
    </div>
  );
}

export default EditCategory;
