import { Injectable } from '@angular/core';
import PouchDB from "pouchdb";
import { Note, NoteTag, RecordType } from "./note";

@Injectable({
  providedIn: 'root'
})
export class DbService {

  protected db: PouchDB.Database;

  constructor() {
    this.db = new PouchDB("database");    // Set database name based on userid
   }

   get_unix_timestamp() {
    return String(new Date().getTime());
   } 

   async get_note( id: string | number ): Promise<Note> {
    const doc: Note = await this.db.get(String(id));
    return doc;
   }

   async save_note(title: string, text: string): Promise<Boolean> {
    const timestamp = this.get_unix_timestamp();
    const response = await this.db.put({
        _id: timestamp,
        updated: timestamp,
        type: RecordType.NOTE,
        title,
        text
    });
    return response.ok;
   }

  async update_note(note: Note): Promise<Boolean> {
    const doc: Note = await this.db.get(note._id);
    doc.title = note.title;
    doc.text = note.text;
    doc.updated = this.get_unix_timestamp();
    const response = await this.db.put(doc);
    return response.ok;
  }

  async delete(note: Note | NoteTag): Promise<Boolean> {
    const doc = await this.db.get(note._id);
    const response = await this.db.remove(doc);
    return response.ok;
  }

  async add_tag(note: Note, tag: string): Promise<NoteTag | null> {
    const note_tag: NoteTag = {
        _id: this.get_unix_timestamp(),
        type: RecordType.TAG,
        note_id: note._id,
        tag: tag
    }
    const response = await this.db.put(note_tag);
    return response.ok ? note_tag : null;
  }

}
