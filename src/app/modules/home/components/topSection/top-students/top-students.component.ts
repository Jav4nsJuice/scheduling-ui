import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable, map, switchMap } from 'rxjs';
import { StudentsState } from 'src/app/core/store/reducers/student.reducer';
import { Student, StudentCourse } from 'src/app/shared/models/student.model';
import { getStudentCourses, getStudents } from '../../../../../core/store/actions/student.action';
import { selectAllStudents, selectMyStudentCourses } from '../../../../../core/store/selectors/student.selector';

@Component({
  selector: 'app-top-students',
  templateUrl: './top-students.component.html',
  styleUrl: './top-students.component.scss'
})
export class TopStudentsComponent implements OnInit {
  
  students$: Observable<Student[]> = this.store.select(selectAllStudents);
  topStudents$: Observable<Student[]>;

  constructor(private store: Store<State<StudentsState>>) {}

  ngOnInit(): void {
    this.loadStudentsAndCourses();
  }

  private loadStudentsAndCourses(): void {
    this.store.dispatch(getStudents());
  
    this.students$.subscribe(students => {
      students.forEach(student => {
        this.store.dispatch(getStudentCourses({ studentId: student.id }));
      });
    });

    this.topStudents$ = this.students$.pipe(
      map(students => this.calculateTopStudents(students))
    );
  }

  calculateTopStudents(students: Student[]): Student[] {
    return students.slice().sort((a, b) => {
      const countA = Number(this.getCourseCount(a.id));
      const countB = Number(this.getCourseCount(b.id));
      return countB - countA;
    }).slice(0, 5);
  }

  getCourseCount(studentId: string): Observable<number> {
    return this.store.select(selectMyStudentCourses).pipe(
      map(courses => courses.filter(course => course.studentId === studentId).length)
    );
  }
}
