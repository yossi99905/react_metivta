import { useForm } from 'react-hook-form';
import { useCreateUser } from '../../hook/useUsers';
import { useEffect} from 'react';

const fields = [
  { name: 'firstName', type: 'text', placeholder: 'הזן שם פרטי', rules: { required: 'שם פרטי חובה', minLength: { value: 2, message: 'שם חייב להיות לפחות 2 תווים' } } },
  { name: 'lastName', type: 'text', placeholder: 'הזן שם משפחה', rules: { required: 'שם משפחה חובה', minLength: { value: 2, message: 'שם משפחה חייב להיות לפחות 2 תווים' } } },
  { name: 'email', type: 'email', placeholder: 'הזן אימייל', rules: { required: 'אימייל חובה', minLength: { value: 4, message: 'אימייל קצר מדי' } } },
  { name: 'password', type: 'password', placeholder: 'הזן סיסמה', rules: { required: 'סיסמה חובה', minLength: { value: 3, message: 'סיסמה קצרה מדי' } } },
  { name: 'classRoom', type: 'text', placeholder: 'הזן כיתה', rules: { required: 'כיתה חובה' } },
  { name: 'ID', type: 'text', placeholder: 'הזן תעודת זהות', rules: { required: 'תעודת זהות חובה', minLength: { value: 2, message: 'תעודת זהות קצרה מדי' } } },
  { name: 'dateOfBirth', type: 'text', placeholder: 'הזן יום הולדת', rules: {} },
  { name: 'cardNumber', type: 'password', placeholder: 'סרוק כרטיס מגנטי', rules: {} },
];


const FormNewUser = ({ onClickSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm( { 
    mode: 'onChange',
    reValidateMode: 'onChange',
  } );
  const createUserMutation = useCreateUser();

  //to check the values on changes for test
  useEffect(() => {
    console.log(watch());
  }, [watch]);

  const onSubmit = (formData) => {
    const data = {
      ...formData,
      role: [formData.role],
    };

    if (data.cardTrackData) {
      data.cardTrackData = data.cardTrackData.trim(); // מסיר רווחים, Enter, וכו'
    }

    if (!formData.dateOfBirth) {
      delete data.dateOfBirth;
    }

    createUserMutation.mutate(data, {
      onSuccess: () => {
        reset();
        onClickSubmit();
      },
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // אם מדובר בשדה הסריקה, אפשר גם להעביר את הפוקוס לאיזה שדה אחר
    }
  };

  return (
    <div className="bg-tailwind-cream flex justify-center items-center max-w-[500px] m-auto rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-8 my-10 mx-4 w-full">

        {fields.map(({ name, type, placeholder, rules }) => (
          <div key={name} className="text-center">
            <input
              {...register(name, rules)}
              type={type}
              placeholder={placeholder}
              className="rounded-2xl p-2 text-right w-full"
              onKeyDown={handleKeyDown}
              autoComplete="off"
            />
            {errors[name]?.message && (
              <span className="text-center text-sm text-red-600">
                {errors[name]?.message}
              </span>
            )}
          </div>
        ))}

        {/* Role select */}
        <select {...register("role", { required: true })} className="rounded-2xl p-2 text-right w-full">
          <option value="1000">תלמיד</option>
          <option value="2000">מורה</option>
        </select>

        {/* Submit button */}
        <button
          type="submit"
          disabled={createUserMutation.isLoading}
          className="rounded-2xl p-2 bg-tailwind-green text-white"
        >
          {createUserMutation.isLoading ? 'שולח...' : 'שלח'}
        </button>

        {/* Error message */}
        {createUserMutation.isError && (
          <p className="text-red-600 text-center">
            שגיאה: {createUserMutation.error?.message || 'משהו השתבש'}
          </p>
        )}
      </form>
    </div>
  );
};

export default FormNewUser;
