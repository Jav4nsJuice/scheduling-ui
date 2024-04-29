import { createAction, props } from "@ngrx/store";
import { Student } from '../../../shared/models/student.model';

export const getStudents = createAction(
  '[Student Action] Get Students'
);

export const getStudentsSuccess = createAction(
  '[Student Action] Get Students Success',
   props<{ students: Student[] }>()
);
