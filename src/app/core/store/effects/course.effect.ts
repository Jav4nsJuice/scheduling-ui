import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { addCourse, addCourseFailure, addStudentToCourse, addStudentToCourseFailure, addStudentToCourseSuccess, deleteCourse, deleteCourseFailure, getCourses, getCoursesSuccess, updateCourse, updateCourseFailure } from '../actions/course.action';
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

  addCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCourse),
      exhaustMap(({ course }) =>
        this.coursesService.addCourse(course).pipe(
          map(() => {
            this.showSnackbar('Course created successfully!');
            return getCourses();
          }),
          catchError((error) => {
            this.showSnackbar('Failed to create course');
            return of(addCourseFailure());
          })
        )
      )
    )
  );

  updateCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCourse),
      exhaustMap(({ id, updates }) =>
        this.coursesService.updateCourse(id, updates).pipe(
          mergeMap(() => {
            this.showSnackbar('Course updated successfully!');
            return [getCourses()];
          }),
          catchError((error) => {
            this.showSnackbar('Failed to update course');
            return of(updateCourseFailure());
          })
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCourse),
      exhaustMap(({ id }) =>
        this.coursesService.deleteCourse(id).pipe(
          mergeMap(() => {
            this.showSnackbar('Course deleted successfully!');
            return [getCourses()];
          }),
          catchError((error) => {
            this.showSnackbar('Failed to delete course');
            return of(deleteCourseFailure({ id }));
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
