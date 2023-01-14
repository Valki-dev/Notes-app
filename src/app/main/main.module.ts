import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    NotesListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ], 
  exports: [
    FormComponent
  ]
})
export class MainModule { }
