import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpClient: HttpClient) { }

  notes: Note[] = [];

  get getNotes() {
    return this.notes;
  }

  createNote(newNote: Note): void {
    this.notes.push(newNote);
  }

  deleteNote(note: Note): void {
    let idFound = this.notes.findIndex(noteInArray => noteInArray.id == note.id);
    
    if(idFound != -1) {      
      this.notes.splice(idFound, 1);
    }
  }

}
