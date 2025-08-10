import { atom, useAtom } from "jotai";

export const authAtom = atom({ accessToken: null, user: null, role: [] });

export function useAuth() {
  const [auth, setAuth] = useAtom(authAtom);
  console.log(auth);
  return { auth, setAuth };
}
