import { atom, getDefaultStore, useAtom } from "jotai";

export const authAtom = atom({
  accessToken: null,
  user: null,
  role: [],
});

export function useAuth() {
  const [auth, setAuth] = useAtom(authAtom);
  return { auth, setAuth };
}

export const getToken = () => {
  const store = getDefaultStore();
  const state = store.get(authAtom);
  return state?.accessToken || null;
};
