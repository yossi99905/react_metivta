import { useForm } from 'react-hook-form';
import { useCreateUser } from '../../hook/useUsers';

const fields = [
  { name: 'firstName', type: 'text', placeholder: 'הזן שם פרטי', rules: { required: true, minLength: 2 } },
  { name: 'lastName', type: 'text', placeholder: 'הזן שם משפחה', rules: { required: true, minLength: 2 } },
  { name: 'email', type: 'email', placeholder: 'הזן איימל', rules: { required: true, minLength: 4 } },
  { name: 'password', type: 'password', placeholder: 'הזן סיסמה', rules: { required: true, minLength: 3 } },
  { name: 'classRoom', type: 'text', placeholder: 'הזן כיתה', rules: { required: true, min: 0 } },
  { name: 'ID', type: 'text', placeholder: 'הזן תעודת זהות', rules: { required: true, minLength: 2 } },
  { name: 'dateOfBirth', type: 'text', placeholder: 'הזן יום הולדת', rules: { required: false } },
];

const FormNewUser = ({ onClickSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const createUserMutation = useCreateUser();

  const onSubmit = (formData) => {
    const data = {
      ...formData,
      role: [formData.role],
    };

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
            />
            {errors[name] && (
              <span className="text-center text-sm text-red-600">
                {name === 'password' && 'סיסמה חייבת להיות באורך של 3 תווים לפחות'}
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
