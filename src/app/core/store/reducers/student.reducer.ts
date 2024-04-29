import { createReducer, on } from '@ngrx/store';
import { Student } from '../../../shared/models/student.model';
import * as StudentAction from '../actions/student.action';

export interface StudentsState {
  isLoading: boolean;
  students: Student[];
}

export const initialState: StudentsState = {
  isLoading: false,
  students: []
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
  })));

export const getAllStudents = (state: StudentsState) => state.students;