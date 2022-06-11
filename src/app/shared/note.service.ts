import { Note } from './note-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  noteList: Note[] = new Array<Note>();
  constructor() {}

  getAll() {
    return this.noteList;
  }

  get(id: number) {
    return this.noteList[id];
  }

  getId(note: Note) {
    return this.noteList.indexOf(note);
  }

  add(note: Note) {
    let newLength = this.noteList.push(note);
    let index = newLength - 1;
    return index;
  }

  update(id: number, title: string, body: string) {
    let note = this.noteList[id];
    note.title = title;
    note.body = body;
  }

  delete(id: number) {
    this.noteList.splice(id, 1);
  }
}
