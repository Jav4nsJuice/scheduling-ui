import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './pages/students.component';
import { StudentsContentComponent } from './components/students-content/students-content.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsContentComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
  ]
})
export class StudentsModule { }
