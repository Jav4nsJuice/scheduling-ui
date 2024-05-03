import { createAction, props } from "@ngrx/store";
import { Course } from "src/app/shared/models/course.model";
import { StudentCourseResponse } from "src/app/shared/models/response.model";

export const getCourses = createAction(
  '[Course Action] Get Courses'
);

export const getCoursesSuccess = createAction(
  '[Course Action] Get Courses Success',
   props<{ courses: Course[] }>()
);

export const addStudentToCourse = createAction(
  '[Course Action] Add Student To Course',
  props<{ studentId: string; courseId: string }>()
);

export const addStudentToCourseSuccess = createAction(
  '[Course Action] Add Student To Course Success',
  props<StudentCourseResponse>()
);

export const addStudentToCourseFailure = createAction(
  '[Course Action] Add Student To Course Failure'
);

export const addCourse = createAction(
  '[Course Action] Add Course',
  props<{ course: Course }>()
);

export const addCourseFailure = createAction(
  '[Course Action] Add Course Failure'
);

export const updateCourse = createAction(
  '[Course Action] Update Course',
  props<{ id: string, updates: Partial<Course> }>()
);

export const updateCourseFailure = createAction(
  '[Course Action] Update Course Failure'
);

export const deleteCourse = createAction(
  '[Course Action] Delete Course',
  props<{ id: string }>()
);

export const deleteCourseFailure = createAction(
  '[Course Action] Delete Course Failure',
  props<{ id: string }>()
);
