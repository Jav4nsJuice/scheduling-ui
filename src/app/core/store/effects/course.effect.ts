import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { addStudentToCourse, addStudentToCourseSuccess, getCourses, getCoursesSuccess } from '../actions/course.action';
import { CourseService } from '../../services/course.service';

@Injectable()
export class CourseEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCourses),
      exhaustMap(() =>
        this.coursesService.getAll().pipe(
          map((courses) =>
            getCoursesSuccess({ courses: courses.data })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addStudentToCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addStudentToCourse),
      switchMap((action) =>
        this.coursesService.addStudentToCourse(action.studentId, action.courseId).pipe(
          map((studentCourse) => {
            return addStudentToCourseSuccess(studentCourse);
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CourseService
  ) {}
}
