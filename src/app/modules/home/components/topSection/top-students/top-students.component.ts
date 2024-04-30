import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable, map, switchMap } from 'rxjs';
import { StudentsState } from 'src/app/core/store/reducers/student.reducer';
import { Student, StudentCourse } from 'src/app/shared/models/student.model';
import { getStudentCourses, getStudents } from '../../../../../core/store/actions/student.action';
import { selectAllStudents, selectAllStudentCourses } from '../../../../../core/store/selectors/student.selector';

@Component({
  selector: 'app-top-students',
  templateUrl: './top-students.component.html',
  styleUrl: './top-students.component.scss'
})
export class TopStudentsComponent implements OnInit {
  
  students$: Observable<Student[]> = this.store.select(selectAllStudents);
  studentCourses$: Observable<StudentCourse[]> = this.store.select(selectAllStudentCourses);

  constructor(private store: Store<State<StudentsState>>) {}

  ngOnInit(): void {
    this.loadStudents();
    this.students$.subscribe(students => console.log('Students:', students));
    this.studentCourses$.subscribe(courses => console.log('Student Courses:', courses));
  }

  private loadStudents(): void {
    this.store.dispatch(getStudents());
    this.store.dispatch(getStudentCourses());
  }

  getCourseCount(student: Student, studentCourses: StudentCourse[]): number {
    console.log("Hi");
    if (!studentCourses || !student) return 0;
    return studentCourses.filter(course => course.studentId === student.id).length;
  }
}
