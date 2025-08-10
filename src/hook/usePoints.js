import { useMutation } from '@tanstack/react-query';
import { givePoints } from '../api/teacherApi';

export function useGivePoints() {
  return useMutation({
    mutationFn: ({ pointToGive, categoryChoose }) =>
      givePoints(pointToGive, categoryChoose),
  });
}