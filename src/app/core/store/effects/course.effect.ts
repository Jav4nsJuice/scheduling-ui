import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { addStudentToCourse, addStudentToCourseFailure, addStudentToCourseSuccess, getCourses, getCoursesSuccess } from '../actions/course.action';
import { CourseService } from '../../services/course.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
            this.showSnackbar('Student added to course successfully');
            return addStudentToCourseSuccess(studentCourse);
          }),
          catchError((error) => {
            this.showSnackbar('Failed to add student to course');
            return of(addStudentToCourseFailure());
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CourseService,
    private snackBar: MatSnackBar
  ) {}

  private showSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });

    setTimeout(() => {
      location.reload();
    }, 3000);
  }
}
