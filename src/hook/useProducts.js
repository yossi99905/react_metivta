import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../api/productsApi';

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
}

export function useCreateProduct() {

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
    },
  });
}

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
  });
}