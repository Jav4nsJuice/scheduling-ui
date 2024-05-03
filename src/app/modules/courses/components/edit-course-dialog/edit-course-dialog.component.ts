import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoursesState } from 'src/app/core/store/reducers/course.reducer';
import { Course } from 'src/app/shared/models/course.model';
import { State, Store } from '@ngrx/store';
import { selectAllCourses } from 'src/app/core/store/selectors/course.selector';
import { Observable } from 'rxjs';
import { getCourses, updateCourse } from 'src/app/core/store/actions/course.action';

@Component({
  selector: 'app-edit-course-dialog',
  templateUrl: './edit-course-dialog.component.html',
  styleUrl: './edit-course-dialog.component.scss'
})
export class EditCourseDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course,
    private store: Store<State<CoursesState>>,
  ) {}

  courses$: Observable<Course[]> = this.store.select(selectAllCourses);

  ngOnInit(): void {
    this.store.dispatch(getCourses());
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateCourse(id: string, updates: Course): void {
    this.store.dispatch(updateCourse({ id, updates }));
  }
}
