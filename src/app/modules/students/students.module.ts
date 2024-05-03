import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './pages/students.component';
import { StudentsContentComponent } from './components/students-content/students-content.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { CreateStudentDialogComponent } from './components/create-student-dialog/create-student-dialog.component'

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsContentComponent,
    CreateStudentDialogComponent,
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
