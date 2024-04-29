import { createSelector } from '@ngrx/store';
import { selectSharedAppState } from '../state/app.state';
import * as fromStudent from '../reducers/student.reducer';

export const selectStudentState = createSelector(
  selectSharedAppState,
  (selectSharedAppState) => selectSharedAppState.student
);

export const selectAllStudents = createSelector(
  selectStudentState,
  fromStudent.getAllStudents
);
