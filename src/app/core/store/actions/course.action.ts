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