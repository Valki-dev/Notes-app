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
  ids: number[] = [];
  error: boolean = false;


  createNote() {
    if((this.tittle.trim() != "") && (this.description.trim() != "")) {
      let id = this.generateId();
      let newNote: Note = {
        id: id,
        tittle: this.tittle,
        description: this.description,
        completed: false
      }

      this.service.createNote(newNote);
    } else {
      this.error = true;
    }

    this.tittle = "";
    this.description = "";
  }

  generateId() {
    let repeated = true;
    let id = -1
    do {
      id = Math.floor(Math.random() * 1000000);
      if(!this.ids.some(idInArray => idInArray == id)) {
        this.ids.push(id)
        repeated = false;
      }
    } while(repeated);
    return id;
  }

}
