import { NoteService } from './../../shared/note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note-model';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition('void => *', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),
        animate(
          '50ms',
          style({
            height: '*',
            'margin-bottom': '*',
            paddingTop: '*',
            paddingBottom: '*',
            paddingRight: '*',
            paddingLeft: '*',
          })
        ),
        animate(68),
      ]),
      transition('void => *', [
        animate(
          50,
          style({
            transform: 'scale(1.05)',
          })
        ),

        animate(
          50,
          style({
            transform: 'scale(1)',
            opacity: 0.75,
          })
        ),

        animate(
          '120ms ease-out',
          style({
            transform: 'scale(0.68)',
            opacity: 0,
          })
        ),

        animate(
          '150ms ease-out',
          style({
            opacity: 0,
            height: 0,
            'margin-bottom': 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 0,
            paddingLeft: 0,
          })
        ),
      ]),
    ]),

    trigger('listAnim', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({
              opacity: 0,
              height: 0,
            }),
            stagger(100, [animate('0.2s ease')]),
          ],
          {
            optional: true,
          }
        ),
      ]),
    ]),
  ],
})
export class NoteListComponent implements OnInit {
  noteList: Note[] = new Array<Note>();
  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteList = this.noteService.getAll();
  }
  deleteNote(id: number) {
    this.noteService.delete(id);
  }
}
