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

  deleteNote() {
    // this.service.getNotes.
  }

}
