import { Component } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StudentsState } from 'src/app/core/store/reducers/student.reducer';
import { Student } from 'src/app/shared/models/student.model';

@Component({
  selector: 'app-top-students',
  templateUrl: './top-students.component.html',
  styleUrl: './top-students.component.scss'
})
export class TopStudentsComponent {
  
  students$: Observable<Student[]>;
  students: Student[] = [];

  constructor(private store: Store<State<StudentsState>>) {}
}
