import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCategories, createCategory, updateCategory, deleteCategory } from '../api/categoriesApi';

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
}

export function useCreateCategory() {

  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
    },
  });
}

export function useUpdateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
    },
  });
}

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
    },
  });
}