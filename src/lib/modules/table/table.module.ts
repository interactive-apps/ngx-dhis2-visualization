import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './components/table-list/table-list.component';
import { TableItemComponent } from './components/table-item/table-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableListComponent,
    TableItemComponent],
  exports: [
    TableListComponent,
    TableItemComponent],
  providers: []
})
export class TableModule { }
