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
  striked: boolean = false;
  sortingMethod: string = "";
  sortingCounter: number = 0;
  error: boolean = false;

  deleteNote(note: Note): void {
    this.service.deleteNote(note);
  }

  enableModal(note: Note) {
    this.selectedNote = note;
    this.modalActivated = true;
    this.tittle = this.selectedNote.tittle;
    this.description = this.selectedNote.description;
  }

  disableModal() {
    this.modalActivated = false;
  }

  updateNote() {
    if ((this.tittle.trim() != "") && (this.description.trim() != "")) {
      this.modalActivated = false;
      this.service.updateNote(this.selectedNote, this.tittle, this.description);
    } else {
      this.error = true;
    }
    this.tittle = "";
    this.description = "";
  }

  strikeNote(note: Note) {
    if (!this.striked) {
      this.striked = true;
      note.completed = true;
      this.service.storageNotes();
    } else {
      this.striked = false;
      note.completed = false;
      this.service.storageNotes();
    }
  }

  sortNotes(method: string) {
    this.sortingMethod = method;
    this.sortingCounter++;
  }

}
