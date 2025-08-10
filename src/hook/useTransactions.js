import { useQuery } from "@tanstack/react-query";
import { getLastTransactions } from "../api/transactionsApi";

export function useGetLastTransactions() {
  return useQuery({
    queryKey: ["lastTransactions"],
    queryFn: getLastTransactions,
    select: (res) => res.data,
    staleTime: 1000 * 60,
  });
}
