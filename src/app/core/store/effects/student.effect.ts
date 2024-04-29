import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { StudentService } from '../../services/student.service';
import {
  getStudentCourses,
  getStudentCoursesSuccess,
  getStudents,
  getStudentsSuccess,
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
      exhaustMap((action) =>
        this.studentsService.getStudentCourses(action.studentId).pipe(
          map((studentCourses) =>
            getStudentCoursesSuccess({
              courses: studentCourses.data,
            })
          ),
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
