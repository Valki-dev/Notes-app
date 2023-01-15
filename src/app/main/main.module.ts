import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
  declarations: [
    FormComponent,
    NotesListComponent,
    MainPageComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    MainPageComponent
  ]
})
export class MainModule { }
