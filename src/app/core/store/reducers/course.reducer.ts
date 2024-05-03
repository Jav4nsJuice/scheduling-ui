import { createReducer, on } from '@ngrx/store';
import * as CourseAction from '../actions/course.action';
import { Course } from 'src/app/shared/models/course.model';

export interface CoursesState {
  isLoading: boolean;
  courses: Course[];
}

export const initialState: CoursesState = {
  isLoading: false,
  courses: [],
};

export const courseReducer = createReducer(
  initialState,
  on(CourseAction.getCourses, (state) => ({
    ...state,
    expanded: false,
    isLoading: true
  })),
  on(CourseAction.getCoursesSuccess, (state, action) => ({
    ...state,
    courses: action.courses
  }))
);

export const getAllCourses = (state: CoursesState) => state.courses;