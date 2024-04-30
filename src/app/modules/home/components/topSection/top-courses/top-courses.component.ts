import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { getCourseStudents } from 'src/app/core/store/actions/student.action';
import { selectAllCourses } from 'src/app/core/store/selectors/course.selector';
import { selectMyCourseStudents } from 'src/app/core/store/selectors/student.selector';
import { Course } from 'src/app/shared/models/course.model';
import { CoursesState } from 'src/app/core/store/reducers/course.reducer';
import { getCourses } from 'src/app/core/store/actions/course.action';

@Component({
  selector: 'app-top-courses',
  templateUrl: './top-courses.component.html',
  styleUrl: './top-courses.component.scss'
})
export class TopCoursesComponent implements OnInit {
  courses$: Observable<Course[]> = this.store.select(selectAllCourses);
  CourseStudentCounts$: Observable<{ courseId: string, studentCount: number }[]>;

  constructor(private store: Store<State<CoursesState>>) {}

  ngOnInit(): void {
    this.loadCoursesAndStudents();
  }

  private loadCoursesAndStudents(): void {
    this.store.dispatch(getCourses());
  
    this.courses$.subscribe(courses => {
      courses.forEach(course => {
        this.store.dispatch(getCourseStudents({ courseId: course.id }));
      });
    });
  }

  getStudentCount(courseId: string): Observable<number> {
    return this.store.select(selectMyCourseStudents).pipe(
      map(students => students.filter(student => student.courseId === courseId).length)
    );
  }
}
