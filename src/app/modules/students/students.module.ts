import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './pages/students.component';
import { StudentsContentComponent } from './components/students-content/students-content.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { CreateStudentDialogComponent } from './components/create-student-dialog/create-student-dialog.component'
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
import { EditStudentDialogComponent } from './components/edit-student-dialog/edit-student-dialog.component';
import { DeleteStudentDialogComponent } from './components/delete-student-dialog/delete-student-dialog.component';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsContentComponent,
    CreateStudentDialogComponent,
    EditStudentDialogComponent,
    DeleteStudentDialogComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
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
export class StudentsModule { }
