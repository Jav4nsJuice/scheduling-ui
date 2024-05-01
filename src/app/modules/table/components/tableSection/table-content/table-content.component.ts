import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCourses } from 'src/app/core/store/actions/course.action';
import { getStudentCourses, getStudents } from 'src/app/core/store/actions/student.action';
import { CoursesState } from 'src/app/core/store/reducers/course.reducer';
import { StudentsState } from 'src/app/core/store/reducers/student.reducer';
import { selectAllCourses } from 'src/app/core/store/selectors/course.selector';
import { selectAllStudentCourses, selectAllStudents } from 'src/app/core/store/selectors/student.selector';
import { Course } from 'src/app/shared/models/course.model';
import { Student, StudentCourse } from 'src/app/shared/models/student.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface TableSource { 
  firstName: string,
  lastName: string, 
  title: string, 
  description: string 
};

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrl: './table-content.component.scss'
})
export class TableContentComponent implements AfterViewInit {
  constructor(
    private store: Store<State<StudentsState>>,
    private storeCourse: Store<State<CoursesState>>
  ) {}

  studentCourses$: Observable<StudentCourse[]> = this.store.select(selectAllStudentCourses);
  students$: Observable<Student[]> = this.store.select(selectAllStudents);

  courses$: Observable<Course[]> = this.storeCourse.select(selectAllCourses);
  
  hidePageSize = true;
  pageSize = 10;
  lowValue: number = 0;
  highValue: number = 10;
  resultsLength = 0;

  searchContent: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<TableSource>();

  

  ngOnInit(): void {
    this.store.dispatch(getStudents());
    this.store.dispatch(getStudentCourses());
    this.store.dispatch(getCourses());

    this.studentCourses$.subscribe(studentCourses => {
      this.students$.subscribe(students => {
        this.courses$.subscribe(courses => {
          this.dataSource.data = studentCourses.map(studentCourse => {
            const student = students.find(student => student.id === studentCourse.studentId);
            const course = courses.find(course => course.id === studentCourse.courseId);
            return { 
              firstName: student ? student.firstName : '',
              lastName: student ? student.lastName : '',
              title: course ? course.title : '',
              description: course ? course.description : ''
            };
          });
        });
      });
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayedColumns: string[] = ['firstName', 'lastName', 'courseTitle', 'courseDescription'];
}
