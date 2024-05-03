import { createAction, props } from "@ngrx/store";
import { Course } from "src/app/shared/models/course.model";

export const getCourses = createAction(
  '[Course Action] Get Courses'
);

export const getCoursesSuccess = createAction(
  '[Course Action] Get Courses Success',
   props<{ courses: Course[] }>()
);