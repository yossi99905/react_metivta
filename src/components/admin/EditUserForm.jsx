import { useEffect } from "react";
import { useForm } from "react-hook-form";

const EditUserForm = ({ user, onSubmit }) => {
  const {
    firstName = "",
    lastName = "",
    role = "",
    email = "",
    classRoom = "",
    ID = "",
    dateOfBirth = "",
    score = 0,
  } = user || {};

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { firstName, lastName, email, role, classRoom, ID, score, dateOfBirth },
  });

  useEffect(() => {
    reset({ firstName, lastName, email, role, classRoom, ID, score, dateOfBirth });
  }, [user, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 text-center"
    >
      {/* שדה דינמי שמבוסס על מערך שדות */}
      {[
        { name: "firstName", label: "שם פרטי", type: "text", required: true },
        { name: "lastName", label: "שם משפחה", type: "text", required: true },
        { name: "email", label: "איימל", type: "text", required: true },
        {
          name: "role",
          label: "תפקיד",
          type: "select",
          options: [
            { value: "1000", label: "תלמיד" },
            { value: "2000", label: "מורה" },
            { value: "3000", label: "קיוסקאי" },
            { value: "4000", label: "מנהל" },
          ],
          required: true,
        },
        { name: "classRoom", label: "כיתה", type: "text", required: true },
        { name: "ID", label: "ת.ז", type: "text", required: true },
        { name: "score", label: "ניקוד", type: "number" },
        { name: "dateOfBirth", label: "תאריך לידה", type: "text" },
      ].map(({ name, label, type, options, required }) => (
        <div key={name}>
          <label>{label}</label>
          {type === "select" ? (
            <select {...register(name, { required })} className="rounded-2xl p-2 text-right w-full">
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              {...register(name, { required })}
              type={type}
              placeholder={`הזן ${label}`}
              className="rounded-2xl p-2 text-right w-full"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="rounded-2xl p-2 bg-tailwind-green text-white"
      >
        שלח
      </button>
    </form>
  );
};

export default EditUserForm;
