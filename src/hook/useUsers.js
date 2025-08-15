import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchTeacherStudents } from '../api/teacherApi';
import { getUsers, createUser, updateUser, deleteUser } from '../api/usersApi';

export function useTeacherStudents(classNumber) {
  return useQuery({
    queryKey: ['teacher-students', classNumber],
    queryFn: () => fetchTeacherStudents(classNumber),
    enabled: Boolean(classNumber),
  });
}

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
}

export function useCreateUser() {

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });
}