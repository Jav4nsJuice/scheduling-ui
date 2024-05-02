import { Component, Inject, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Student } from 'src/app/shared/models/student.model';
import { StudentsState } from 'src/app/core/store/reducers/student.reducer';
import { selectAllStudents } from 'src/app/core/store/selectors/student.selector';
import { getStudents } from 'src/app/core/store/actions/student.action';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-resource-dialog',
  templateUrl: './add-resource-dialog.component.html',
  styleUrl: './add-resource-dialog.component.scss'
})
export class AddResourceDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddResourceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private store: Store<State<StudentsState>>,
  ) {}

  students$: Observable<Student[]> = this.store.select(selectAllStudents);

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.store.dispatch(getStudents());
  }
}
