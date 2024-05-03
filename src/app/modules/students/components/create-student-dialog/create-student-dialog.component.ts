import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addStudent } from 'src/app/core/store/actions/student.action';
import { StudentsState } from 'src/app/core/store/reducers/student.reducer';
import { selectAllStudents } from 'src/app/core/store/selectors/student.selector';
import { Student } from 'src/app/shared/models/student.model';

@Component({
  selector: 'app-create-student-dialog',
  templateUrl: './create-student-dialog.component.html',
  styleUrl: './create-student-dialog.component.scss'
})
export class CreateStudentDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    private store: Store<State<StudentsState>>,
  ) {}

  @Input() control:FormControl;

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  createStudent(): void {
    console.log(this.data.id);
    console.log(this.data.firstName);
    console.log(this.data.lastName);
    this.store.dispatch(addStudent({ student: this.data }));
  }
}
