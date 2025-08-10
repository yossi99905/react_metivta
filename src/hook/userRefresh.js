import { useCallback } from "react";
import axios, { setAuthToken } from "../api/axiosInstance";
import { useAtom } from "jotai";
import { authAtom } from "../atoms/authAtom";

export default function useUserRefresh() {
  const [, setAuth] = useAtom(authAtom);

  const refreshLogin = useCallback(async () => {
    try {
      // שולחים בקשת רפרש לשרת (שולח HTTP-only cookie אוטומטית)
      const response = await axios.get("/users/refresh", { withCredentials: true });

      setAuth(prev => ({
        ...prev,
        accessToken: response.data.accessToken,
        user: response.data.user || prev.user,
        firstName: response.data.firstName || prev.firstName,
        lastName: response.data.lastName || prev.lastName,
        role: response.data.role || prev.role,
        score: response.data.score || prev.score,
        classRoom: response.data.classRoom || prev.classRoom,
      }));

      setAuthToken(response.data.accessToken);

      return response.data.accessToken;
    } catch (err) {
      console.error("Failed to refresh accessToken", err);
      setAuth({ accessToken: null, user: null, role: [] });
      return null;
    }
  }, [setAuth]);

  return { refreshLogin };
}
