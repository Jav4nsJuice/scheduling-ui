import { createReducer, on } from '@ngrx/store';
import { Student, StudentCourse } from '../../../shared/models/student.model';
import * as StudentAction from '../actions/student.action';

export interface StudentsState {
  isLoading: boolean;
  students: Student[];
  courses: StudentCourse[];
  studentsInCourse: StudentCourse[];
}

export const initialState: StudentsState = {
  isLoading: false,
  students: [],
  courses: [],
  studentsInCourse: [],
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
  on(StudentAction.getCourseStudents, (state) => ({
    ...state,
    expanded: false,
    isLoading: true
  })),
  on(StudentAction.getCourseStudentsSuccess, (state, action) => ({
    ...state,
    studentsInCourse: action.studentsInCourse
  }))
);

export const getAllStudents = (state: StudentsState) => state.students;
export const getStudentCourses = (state: StudentsState) => state.courses;
export const getCourseStudents = (state: StudentsState) => state.studentsInCourse;