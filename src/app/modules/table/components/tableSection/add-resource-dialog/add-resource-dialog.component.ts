import { Component, Inject, OnInit } from '@angular/core';
import { State, Store, select } from '@ngrx/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, take } from 'rxjs';
import { Student, StudentCourse } from 'src/app/shared/models/student.model';
import { StudentsState } from 'src/app/core/store/reducers/student.reducer';
import { selectAllStudents } from 'src/app/core/store/selectors/student.selector';
import { getStudents } from 'src/app/core/store/actions/student.action';
import { CoursesState } from 'src/app/core/store/reducers/course.reducer';
import { Course } from 'src/app/shared/models/course.model';
import { selectAllCourses } from 'src/app/core/store/selectors/course.selector';
import { addStudentToCourse, addStudentToCourseFailure, getCourses } from 'src/app/core/store/actions/course.action';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-resource-dialog',
  templateUrl: './add-resource-dialog.component.html',
  styleUrl: './add-resource-dialog.component.scss'
})
export class AddResourceDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddResourceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StudentCourse,
    private store: Store<State<StudentsState>>,
    private storeCourse: Store<State<CoursesState>>,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  students$: Observable<Student[]> = this.store.select(selectAllStudents);
  courses$: Observable<Course[]> = this.storeCourse.select(selectAllCourses);

  onNoClick(): void {
    this.dialogRef.close();
  }

  addStudentToCourse(studentId: string, courseId: string): void {
    this.storeCourse.dispatch(addStudentToCourse({ studentId, courseId }));
  }

  private showSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.store.dispatch(getStudents());
    this.storeCourse.dispatch(getCourses());
  }
}
