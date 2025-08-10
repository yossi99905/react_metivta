import { useQuery } from '@tanstack/react-query';
import { fetchTeacherStudents } from '../api/teacherApi';

export function useTeacherStudents(classNumber) {
  return useQuery({
    queryKey: ['teacher-students', classNumber],
    queryFn: () => fetchTeacherStudents(classNumber),
    enabled: Boolean(classNumber),
  });
}
