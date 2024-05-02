import { Component } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { getStudents } from 'src/app/core/store/actions/student.action';
import { selectAllStudents } from 'src/app/core/store/selectors/student.selector';
import { Student } from 'src/app/shared/models/student.model';
import { MatDialog } from '@angular/material/dialog';
import { StudentsState } from 'src/app/core/store/reducers/student.reducer';

@Component({
  selector: 'app-students-content',
  templateUrl: './students-content.component.html',
  styleUrl: './students-content.component.scss'
})
export class StudentsContentComponent {
  constructor(
    private store: Store<State<StudentsState>>,
    public dialog: MatDialog,
  ) {}

  students$: Observable<Student[]> = this.store.select(selectAllStudents);
  dataSource = new MatTableDataSource<Student>();

  displayedColumns: string[] = ['firstName', 'lastName'];

  ngOnInit(): void {
    this.store.dispatch(getStudents());

    this.students$.subscribe(students => {
      this.dataSource.data = students;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {

  }
}
