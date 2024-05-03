import { Component, Inject, OnInit } from '@angular/core';
import { CoursesState } from 'src/app/core/store/reducers/course.reducer';
import { State, Store } from '@ngrx/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from 'src/app/shared/models/course.model';
import { selectAllCourses } from 'src/app/core/store/selectors/course.selector';
import { Observable } from 'rxjs';
import { deleteCourse, getCourses } from 'src/app/core/store/actions/course.action';

@Component({
  selector: 'app-delete-course-dialog',
  templateUrl: './delete-course-dialog.component.html',
  styleUrl: './delete-course-dialog.component.scss'
})
export class DeleteCourseDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteCourseDialogComponent>,
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

  deleteCourse(id: string): void {
    this.store.dispatch(deleteCourse({ id }));
  }
}
