import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpClient: HttpClient) { 
    this.notes = JSON.parse(localStorage.getItem('storagedNotes')!) || [];
  }

  notes: Note[] = [];

  get getNotes() {
    return this.notes;
  }

  createNote(newNote: Note): void {
    this.notes.push(newNote);
    this.storageNotes();
  }

  deleteNote(note: Note): void {
    let index = this.findIndex(note);
    
    if(index != -1) {      
      this.notes.splice(index, 1);
      this.storageNotes();
    }
  }

  updateNote(note: Note, tittle: string, description: string) {
    let index = this.findIndex(note);
    if(index != -1) {
      this.notes[index].tittle = tittle;
      this.notes[index].description = description;
      this.storageNotes();
    }
  }

  findIndex(note: Note) {
    return this.notes.findIndex( noteInArray => noteInArray.id === note.id);
  }
  
  sortNotes(sortignMethod: string) {
    console.log(`Método: ${sortignMethod}`);
  }

  storageNotes() {
    localStorage.setItem('storagedNotes', JSON.stringify(this.notes));
  }

}
