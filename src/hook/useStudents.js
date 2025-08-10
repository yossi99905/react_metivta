import { useQuery } from "@tanstack/react-query";
import { getStudents, getLastTransactions } from "../api/studentsApi";

export function useGetStudents() {
  return useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
    select: (res) => res.data,
    staleTime: 1000 * 60,
  });
}

export function useGetLastTransactions() {
  return useQuery({
    queryKey: ["lastTransactions"],
    queryFn: getLastTransactions,
    select: (res) => res.data,
    staleTime: 1000 * 60,
  });
}
