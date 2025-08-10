import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import api, { setAuthToken } from "../api/axiosInstance";
import { useState } from "react";
import { useAuth } from "../atoms/authAtom";

function FormLogin() {
  const { setAuth } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [loading, setLoading] = useState(false);
  const [incorrectErr, setIncorrectErr] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    setLoading(true);
    setIncorrectErr(false);
    apiLogin(data);
  };

  const apiLogin = async (data) => {
    try {
      const resp = await api.post("/users/login", data, { withCredentials: true });

      // אם אין accessToken או שיש שגיאה מצד השרת
      if (!resp.data?.accessToken) {
        setIncorrectErr(true);
        setLoading(false);
        return;
      }

      // שמירה ב־auth atom
      // שמירה ב־auth atom
      setAuth({
        accessToken: resp.data.accessToken,
        user: resp.data.user,
        firstName: resp.data.firstName,
        lastName: resp.data.lastName,
        role: resp.data.role || [],
        score: resp.data.score,
        classRoom: resp.data.classRoom,
      });

      setAuthToken(resp.data.accessToken);

      // ניווט ליעד האחרון או ברירת מחדל
      const lastVisited = localStorage.getItem("lastVisited") || from || "/student";
      localStorage.removeItem("lastVisited");
      navigate(lastVisited, { replace: true });

      setLoading(false);

      // ניווט ליעד המבוקש
      navigate(from || "/student", { replace: true });

    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
      if (error.response?.status === 401) {
        setIncorrectErr(true);
      }
    }
  };

  return (
    <div className="w-full px-[90px]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-full">
        <input
          {...register("email", { required: true, minLength: 2 })}
          type="text"
          placeholder="הזן שם משתמש"
          className="rounded-2xl p-2 text-right w-full"
        />
        {errors.email && <span className="text-end text-xs text-red-600 mr-4">שדה חובה</span>}

        <input
          {...register("password", { required: true, minLength: 2 })}
          type="password"
          placeholder="הזן סיסמה"
          className="rounded-2xl p-2 text-right w-full"
        />
        {errors.password && <span className="text-end text-xs text-red-600 mr-4">שדה חובה</span>}

        {incorrectErr && <span className="text-end text-xs text-red-600 mr-4">שם משתמש או סיסמה לא נכונים</span>}

        <button type="submit" disabled={loading} className="rounded-2xl p-2 bg-tailwind-green text-white">
          {loading ? "מתחבר..." : "התחבר"}
        </button>

        {loading && <img className="m-auto" src="/images/loading.gif" alt="Loading" width={40} />}
      </form>
    </div>
  );
}

export default FormLogin;