import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    FormComponent,
    NotesListComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ], 
  exports: [
    MainPageComponent
  ]
})
export class MainModule { }
