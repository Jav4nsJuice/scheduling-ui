import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StudentsState } from 'src/app/core/store/reducers/student.reducer';
import { Student } from 'src/app/shared/models/student.model';
import { getStudents } from '../../../../../core/store/actions/student.action';
import { selectAllStudents } from '../../../../../core/store/selectors/student.selector';

@Component({
  selector: 'app-top-students',
  templateUrl: './top-students.component.html',
  styleUrl: './top-students.component.scss'
})
export class TopStudentsComponent implements OnInit {
  
  students$: Observable<Student[]> = this.store.select(selectAllStudents);

  constructor(private store: Store<State<StudentsState>>) {}

  ngOnInit(): void {
    this.store.dispatch(getStudents());
  }
}
