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
    let index = this.findIndex(note);
    
    if(index != -1) {      
      this.notes.splice(index, 1);
    }
  }

  updateNote(note: Note, tittle: string, description: string) {
    let index = this.findIndex(note);
    if(index != -1) {
      this.notes[index].tittle = tittle;
      this.notes[index].description = description;
    }
  }

  findIndex(note: Note) {
    return this.notes.findIndex( noteInArray => noteInArray.id === note.id);
  }
  
  sortNotes(sortignMethod: string) {
    console.log(`Método: ${sortignMethod}`);
  }

}
