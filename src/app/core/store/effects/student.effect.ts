import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { StudentService } from '../../services/student.service';
import {
  addStudent,
  addStudentFailure,
  deleteStudent,
  getStudentCourses,
  getStudentCoursesSuccess,
  getStudents,
  getStudentsSuccess,
  updateStudent,
  updateStudentFailure,
} from '../actions/student.action';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class StudentEffects {
  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStudents),
      exhaustMap(() =>
        this.studentsService.getAll().pipe(
          map((students) =>
            getStudentsSuccess({ students: students.data })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadStudentCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStudentCourses),
      exhaustMap(() =>
        this.studentsService.getAllStudentCourses().pipe(
          map((studentCourses) =>
            getStudentCoursesSuccess({ studentCourses: studentCourses.data })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addStudent),
      exhaustMap(({ student }) =>
        this.studentsService.addStudent(student).pipe(
          map(() => {
            this.showSnackbar('Student created successfully!');
            return getStudents();
          }),
          catchError((error) => {
            this.showSnackbar('Failed to create student');
            return of(addStudentFailure());
          })
        )
      )
    )
  );

  updateStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateStudent),
      exhaustMap(({ id, updates }) =>
        this.studentsService.updateStudent(id, updates).pipe(
          mergeMap(() => {
            this.showSnackbar('Student updated successfully!');
            return [getStudents()];
          }),
          catchError((error) => {
            this.showSnackbar('Failed to update student');
            return of(updateStudentFailure());
          })
        )
      )
    )
  );

  deleteStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteStudent),
      exhaustMap(({ id }) =>
        this.studentsService.deleteStudent(id).pipe(
          map(() => getStudents()),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private studentsService: StudentService,
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
