import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCourses } from 'src/app/core/store/actions/course.action';
import { CoursesState } from 'src/app/core/store/reducers/course.reducer';
import { selectAllCourses } from 'src/app/core/store/selectors/course.selector';
import { Course } from 'src/app/shared/models/course.model';
import { CreateCourseDialogComponent } from '../create-course-dialog/create-course-dialog.component';
import { EditCourseDialogComponent } from '../edit-course-dialog/edit-course-dialog.component';
import { DeleteCourseDialogComponent } from '../delete-course-dialog/delete-course-dialog.component';

@Component({
  selector: 'app-courses-content',
  templateUrl: './courses-content.component.html',
  styleUrl: './courses-content.component.scss'
})
export class CoursesContentComponent {
  constructor(
    private store: Store<State<CoursesState>>,
    public dialog: MatDialog,
  ) {}

  courses$: Observable<Course[]> = this.store.select(selectAllCourses);
  dataSource = new MatTableDataSource<Course>();

  displayedColumns: string[] = ['title', 'description'];

  ngOnInit(): void {
    this.store.dispatch(getCourses());

    this.courses$.subscribe(courses => {
      this.dataSource.data = courses;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openCreateCourseDialog(): void {
    const dialogRef = this.dialog.open(CreateCourseDialogComponent, {
      data: { title: '', description: '' } 
    });
    
    dialogRef.afterClosed().subscribe(result => {
      location.reload();
    });
  }

  openEditCourseDialog(): void {
    const dialogRef = this.dialog.open(EditCourseDialogComponent, {
      data: { title: '', description: '' } 
    });
    
    dialogRef.afterClosed().subscribe(result => {
      location.reload();
    });
  }

  openDeleteCourseDialog(): void {
    const dialogRef = this.dialog.open(DeleteCourseDialogComponent, {
      data: { id: '' } 
    });
    
    dialogRef.afterClosed().subscribe(result => {
      location.reload();
    });
  }
}
