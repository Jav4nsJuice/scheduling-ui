import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentsState } from 'src/app/core/store/reducers/student.reducer';
import { Student } from 'src/app/shared/models/student.model';
import { State, Store } from '@ngrx/store';
import { selectAllStudents } from 'src/app/core/store/selectors/student.selector';
import { Observable } from 'rxjs';
import { getStudents, updateStudent } from 'src/app/core/store/actions/student.action';

@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrl: './edit-student-dialog.component.scss'
})
export class EditStudentDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditStudentDialogComponent>,
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

  updateStudent(id: string, updates: Student): void {
    this.store.dispatch(updateStudent({ id, updates }));
  }
}
