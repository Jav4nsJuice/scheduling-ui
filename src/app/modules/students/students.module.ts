import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './pages/students.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }