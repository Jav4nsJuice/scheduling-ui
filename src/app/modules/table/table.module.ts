import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './pages/table.component';
import { MatTableModule } from '@angular/material/table';
import { TableContentComponent } from './components/tableSection/table-content/table-content.component'
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    TableComponent,
    TableContentComponent,
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class TableModule { }
