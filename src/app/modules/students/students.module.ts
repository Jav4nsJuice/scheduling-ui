import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './pages/students.component';
import { StudentsContentComponent } from './components/students-content/students-content.component'


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsContentComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
