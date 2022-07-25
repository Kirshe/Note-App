
type unix_timestamp = string;

export enum RecordType {
    NOTE,
    LINK,
    TAG
}

export interface Note extends PouchDB.Core.IdMeta {
    _id: unix_timestamp;
    type: RecordType.NOTE;
    updated: unix_timestamp;
    title: string;
    text: string;
}

export interface NoteTag extends PouchDB.Core.IdMeta {
    _id: unix_timestamp;
    type: RecordType.TAG;
    note_id: unix_timestamp;
    tag: string;
}

export interface NoteLink extends PouchDB.Core.IdMeta {
    _id: unix_timestamp;
    type: RecordType.LINK;
    note_1_idL: unix_timestamp;
    note_2_id: unix_timestamp;
    link_name: string; 
}
