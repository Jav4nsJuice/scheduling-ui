import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { getCourses, getCoursesSuccess } from '../actions/course.action';
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

  constructor(
    private actions$: Actions,
    private coursesService: CourseService
  ) {}
}
