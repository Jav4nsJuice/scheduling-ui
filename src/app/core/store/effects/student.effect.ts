import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { StudentService } from '../../services/student.service';
import {
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

  constructor(
    private actions$: Actions,
    private studentsService: StudentService
  ) {}
}
