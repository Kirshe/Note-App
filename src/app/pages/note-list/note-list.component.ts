import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  header = 'This is title';
  details =
    'dsdad dashgfdhajdasgdhja dgashjdg gdhj gas ghjdgashgddsdad dashgfdhajdasgdhja dgashjdg gdhj gas ghjdgashgddsdad dashgfdhajdasgdhja dgashjdg gdhj gas ghjdgashgd';
  constructor() {}

  ngOnInit(): void {}
}
