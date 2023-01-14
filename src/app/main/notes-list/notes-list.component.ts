import { Component } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { NotesService } from '../service/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {

  constructor(private service: NotesService) { }

  notes: Note[] = this.service.getNotes;
  modalActivated: boolean = false;
  tittle: string = "";
  description: string = "";
  selectedNote!: Note;

  deleteNote(note: Note): void {    
    this.service.deleteNote(note);
  }

  activateModal(note: Note) {
    this.selectedNote = note;
    console.log(this.selectedNote);
    this.modalActivated = true;
    ;
    this.tittle = this.selectedNote.tittle;
    this.description = this.selectedNote.description;
  }

  deactivateModal() {
    this.modalActivated = false;
  }

  updateNote() {
    if((this.tittle.trim() != "") && (this.description.trim() != "")) {      
      this.modalActivated = false;
      this.service.updateNote(this.selectedNote, this.tittle, this.description);
    }
    this.tittle = "";
    this.description = "";
  }

}
