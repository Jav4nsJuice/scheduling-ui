import { createAction, props } from "@ngrx/store";
import { Student, StudentCourse } from '../../../shared/models/student.model';

export const getStudents = createAction(
  '[Student Action] Get Students'
);

export const getStudentsSuccess = createAction(
  '[Student Action] Get Students Success',
   props<{ students: Student[] }>()
);

export const getStudentCourses = createAction(
  '[Student Action] Get Student Courses',
);

export const getStudentCoursesSuccess = createAction(
  '[Student Action] Get Student Courses Success',
  props<{ studentCourses: StudentCourse[] }>()
);