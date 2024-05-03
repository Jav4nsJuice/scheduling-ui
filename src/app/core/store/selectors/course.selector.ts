import { createSelector } from '@ngrx/store';
import { selectSharedAppState } from '../state/app.state';
import * as fromCourse from '../reducers/course.reducer';

export const selectCourseState = createSelector(
  selectSharedAppState,
  (selectSharedAppState) => selectSharedAppState.course
);

export const selectAllCourses = createSelector(
  selectCourseState,
  fromCourse.getAllCourses
);