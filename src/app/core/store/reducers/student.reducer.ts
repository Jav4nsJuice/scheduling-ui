import { createReducer, on } from '@ngrx/store';
import { Student, StudentCourse } from '../../../shared/models/student.model';
import * as StudentAction from '../actions/student.action';

export interface StudentsState {
  isLoading: boolean;
  students: Student[];
  courses: StudentCourse[]
}

export const initialState: StudentsState = {
  isLoading: false,
  students: [],
  courses:[]
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
    courses: action.courses
  })),
);

export const getAllStudents = (state: StudentsState) => state.students;
export const getStudentCourses = (state: StudentsState) => state.courses;