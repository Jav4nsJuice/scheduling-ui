import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from 'src/app/shared/models/course.model';
import { State, Store } from '@ngrx/store';
import { CoursesState } from 'src/app/core/store/reducers/course.reducer';
import { addCourse } from 'src/app/core/store/actions/course.action';

@Component({
  selector: 'app-create-course-dialog',
  templateUrl: './create-course-dialog.component.html',
  styleUrl: './create-course-dialog.component.scss'
})
export class CreateCourseDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course,
    private store: Store<State<CoursesState>>,
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  createCourse(): void {
    this.store.dispatch(addCourse({ course: this.data }));
  }
}
