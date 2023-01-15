import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../interfaces/note.interface';

@Pipe({
  name: 'sortNotes'
})
export class SortPipe implements PipeTransform {

  transform(notes: Note[], sortingMethod: string): Note[] {
    console.log(notes);
    
    switch(sortingMethod) {
      case 'alphabetical': {
        sortingMethod = "";
        return notes.sort( (note1, note2) => note1.tittle.localeCompare(note2.tittle, undefined, {sensitivity: 'base'}) );
      }
      case 'alphabeticalInverted': {
        sortingMethod = "";
        return notes.sort( (note1, note2) => note2.tittle.localeCompare(note1.tittle) );
      }
      case 'notCompleted': {
        sortingMethod = "";
        return notes.sort( note => note.completed ? 1 : -1);
      }
      default: {
        return notes;
      }
    }
  }

}
