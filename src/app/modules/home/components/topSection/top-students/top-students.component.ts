import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  }

  private loadStudents(): void {
    this.store.dispatch(getStudents());
    this.store.dispatch(getStudentCourses());
  }

  getCourseCount(student: Student, studentCourses: StudentCourse[]): number {
    if (!studentCourses || !student) return 0;
    return studentCourses.filter(course => course.studentId === student.id).length;
  }

  getTopStudents(students: Student[], studentCourses: StudentCourse[]): Student[] {
    return students.slice(0).sort((a, b) => {
      const courseCountA = this.getCourseCount(a, studentCourses);
      const courseCountB = this.getCourseCount(b, studentCourses);
      return courseCountB - courseCountA;
    }).slice(0, 5);
  }
}
