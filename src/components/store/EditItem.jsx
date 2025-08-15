import { useForm } from 'react-hook-form';

function EditItem({
  name,
  price,
  category,
  inStock,
  isPinned,
  inventoryCount,
  barcodeNum,
  image,
  onSubmit
}) {
  const { register, handleSubmit } = useForm();

  return (
    <div className="w-full max-w-[500px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-tailwind-cream rounded-lg px-7 flex flex-col space-y-2 text-center py-6 w-full"
      >
        <label>שם מוצר</label>
        <input
          defaultValue={name}
          {...register("name", { required: true, minLength: 2, maxLength: 30 })}
          type="text"
          placeholder="הזן שם מוצר"
          className="rounded-2xl p-2 text-right w-full"
        />

        <label>מחיר</label>
        <input
          defaultValue={price}
          {...register("price", { required: true, min: 0, max: 1000 })}
          type="number"
          step="0.01"
          placeholder="הזן מחיר"
          className="rounded-2xl p-2 text-right w-full"
        />

        <label>קטגוריה</label>
        <input
          defaultValue={category}
          {...register("category", { required: true, minLength: 2, maxLength: 20 })}
          type="text"
          placeholder="הזן קטגוריה"
          className="rounded-2xl p-2 text-right w-full"
        />

        <label>במלאי</label>
        <input
          defaultChecked={inStock}
          {...register("inStock")}
          type="checkbox"
          className="rounded-2xl p-2 text-right w-full"
        />

        <label>מוצמד</label>
        <input
          defaultChecked={isPinned}
          {...register("isPinned")}
          type="checkbox"
          className="rounded-2xl p-2 text-right w-full"
        />

        <label>כמות</label>
        <input
          defaultValue={inventoryCount}
          {...register("inventoryCount", { required: true, min: 0, max: 1000 })}
          type="number"
          placeholder="הזן כמות"
          className="rounded-2xl p-2 text-right w-full"
        />

        <label>ברקוד</label>
        <input
          defaultValue={barcodeNum}
          {...register("barcodeNum", { required: true, minLength: 0, maxLength: 15 })}
          type="number"
          placeholder="הזן ברקוד"
          className="rounded-2xl p-2 text-right w-full"
        />

        <label>קישור תמונה</label>
        <input
          defaultValue={image}
          {...register("image", { required: false, minLength: 0, maxLength: 100 })}
          type="text"
          placeholder="הזן קישור תמונה"
          className="rounded-2xl p-2 text-right w-full"
        />

        <button
          type="submit"
          className="rounded-2xl p-2 bg-tailwind-green text-white"
        >
          עדכן
        </button>
      </form>
    </div>
  );
}

export default EditItem;
