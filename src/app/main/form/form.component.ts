import { Component } from '@angular/core';
import { NotesService } from '../service/notes.service';
import { Note } from '../interfaces/note.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private service: NotesService) { }

  tittle: string = "";
  description: string = "";


  createNote() {

    if((this.tittle.trim() != "") && (this.description.trim() != "")) {
      let newNote: Note = {
        tittle: this.tittle,
        description: this.description
      }

      this.service.createNote(newNote);
      console.log(this.service.getNotes);
    }

    this.tittle = "";
    this.description = "";
  }

}
