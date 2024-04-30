import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { getStudentCourses } from 'src/app/core/store/actions/student.action';
import { selectAllCourses } from 'src/app/core/store/selectors/course.selector';
import { selectAllStudentCourses } from 'src/app/core/store/selectors/student.selector';
import { Course } from 'src/app/shared/models/course.model';
import { CoursesState } from 'src/app/core/store/reducers/course.reducer';
import { getCourses } from 'src/app/core/store/actions/course.action';
import { StudentCourse } from 'src/app/shared/models/student.model';
import { StudentsState } from 'src/app/core/store/reducers/student.reducer';

@Component({
  selector: 'app-top-courses',
  templateUrl: './top-courses.component.html',
  styleUrl: './top-courses.component.scss'
})
export class TopCoursesComponent implements OnInit {
  courses$: Observable<Course[]> = this.storeCourse.select(selectAllCourses);
  studentCourses$: Observable<StudentCourse[]> = this.storeStudent.select(selectAllStudentCourses);

  constructor(private storeCourse: Store<State<CoursesState>>, private storeStudent: Store<State<StudentsState>>) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  private loadCourses(): void {
    this.storeCourse.dispatch(getCourses());
    this.storeStudent.dispatch(getStudentCourses());
  }

  getStudentCount(course: Course, studentCourses: StudentCourse[]): number {
    if (!studentCourses || !course) return 0;
    return studentCourses.filter(student => student.courseId === course.id).length;
  }

  getTopCourses(courses: Course[], studentCourses: StudentCourse[]): Course[] {
    return courses.slice(0).sort((a, b) => {
      const studentCountA = this.getStudentCount(a, studentCourses);
      const studentCountB = this.getStudentCount(b, studentCourses);
      return studentCountB - studentCountA;
    }).slice(0, 5);
  }
}
