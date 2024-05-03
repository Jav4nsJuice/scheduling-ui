import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { StudentService } from '../../services/student.service';
import {
  addStudent,
  deleteStudent,
  getStudentCourses,
  getStudentCoursesSuccess,
  getStudents,
  getStudentsSuccess,
  updateStudent,
} from '../actions/student.action';

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
          map(() => getStudents()),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateStudent),
      exhaustMap(({ id, updates }) =>
        this.studentsService.updateStudent(id, updates).pipe(
          map(() => getStudents()), // Dispatch action to refresh the list after updating
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteStudent),
      exhaustMap(({ id }) =>
        this.studentsService.deleteStudent(id).pipe(
          map(() => getStudents()), // Dispatch action to refresh the list after deleting
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private studentsService: StudentService
  ) {}
}
