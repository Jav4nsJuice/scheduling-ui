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

export const addStudent = createAction(
  '[Student Action] Add Student',
  props<{ student: Student }>()
);

export const addStudentFailure = createAction(
  '[Student Action] Add Student Failure'
);

export const updateStudent = createAction(
  '[Student Action] Update Student',
  props<{ id: string, updates: Partial<Student> }>()
);

export const updateStudentFailure = createAction(
  '[Student Action] Update Student Failure'
);

export const deleteStudent = createAction(
  '[Student Action] Delete Student',
  props<{ id: string }>()
);

export const deleteStudentFailure = createAction(
  '[Student Action] Delete Student Failure',
  props<{ id: string }>()
);
