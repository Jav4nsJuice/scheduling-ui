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
  props<{ studentId: String }>()
);

export const getStudentCoursesSuccess = createAction(
  '[Student Action] Get Student Courses Success',
  props<{ courses: StudentCourse[] }>()
);

export const getCourseStudents = createAction(
  '[Student Action] Get Course Students',
  props<{ courseId: string }>()
);

export const getCourseStudentsSuccess = createAction(
  '[Student Action] Get Course Students Success',
  props<{ studentsInCourse: StudentCourse[] }>()
);