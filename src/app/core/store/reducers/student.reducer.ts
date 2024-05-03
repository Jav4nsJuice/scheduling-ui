import { createReducer, on } from '@ngrx/store';
import { Student, StudentCourse } from '../../../shared/models/student.model';
import * as StudentAction from '../actions/student.action';

export interface StudentsState {
  isLoading: boolean;
  students: Student[];
  studentCourses: StudentCourse[];
}

export const initialState: StudentsState = {
  isLoading: false,
  students: [],
  studentCourses: [],
};

export const studentReducer = createReducer(
  initialState,
  on(StudentAction.getStudents, (state) => ({
    ...state,
    expanded: false,
    isLoading: true
  })),
  on(StudentAction.getStudentsSuccess, (state, action) => ({
    ...state,
    students: action.students
  })),
  on(StudentAction.getStudentCourses, (state, action) => ({
    ...state,
    expanded: false,
    isLoading: true
  })),
  on(StudentAction.getStudentCoursesSuccess, (state, action) => ({
    ...state,
    studentCourses: action.studentCourses
  }))
);

export const getAllStudents = (state: StudentsState) => state.students;
export const getAllStudentCourses = (state: StudentsState) => state.studentCourses;