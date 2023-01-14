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

  createNote(newNote: Note) {
    this.notes.push(newNote);
  }

}
