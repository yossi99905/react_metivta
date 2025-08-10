import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../api/categoriesApi';

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
    staleTime: 1000 * 60 * 60,
  });
}