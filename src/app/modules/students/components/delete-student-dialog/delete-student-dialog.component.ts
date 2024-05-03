import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentsState } from 'src/app/core/store/reducers/student.reducer';
import { Student } from 'src/app/shared/models/student.model';
import { State, Store } from '@ngrx/store';
import { deleteStudent, getStudents } from 'src/app/core/store/actions/student.action';
import { Observable } from 'rxjs';
import { selectAllStudents } from 'src/app/core/store/selectors/student.selector';

@Component({
  selector: 'app-delete-student-dialog',
  templateUrl: './delete-student-dialog.component.html',
  styleUrl: './delete-student-dialog.component.scss'
})
export class DeleteStudentDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    private store: Store<State<StudentsState>>,
  ) {}

  students$: Observable<Student[]> = this.store.select(selectAllStudents);

  ngOnInit(): void {
    this.store.dispatch(getStudents());
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteStudent(id: string): void {
    this.store.dispatch(deleteStudent({ id }));
  }
}
