import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './pages/courses.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { CoursesContentComponent } from './components/courses-content/courses-content.component';
import { CreateCourseDialogComponent } from './components/create-course-dialog/create-course-dialog.component';
import { EditCourseDialogComponent } from './components/edit-course-dialog/edit-course-dialog.component';
import { DeleteCourseDialogComponent } from './components/delete-course-dialog/delete-course-dialog.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesContentComponent,
    CreateCourseDialogComponent,
    EditCourseDialogComponent,
    DeleteCourseDialogComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
  ]
})
export class CoursesModule { }
