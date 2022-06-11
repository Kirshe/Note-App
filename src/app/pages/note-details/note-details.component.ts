import { NoteService } from './../../shared/note.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note-model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit {
  note: Note;
  noteId: number;
  new: boolean;
  constructor(
    private noteService: NoteService,
    private router: Router,
    private acRoute: ActivatedRoute
  ) {}
  onSubmit(form: NgForm) {
    if (this.new) {
      this.noteService.add(form.value);
    } else {
      this.noteService.update(this.noteId, form.value.title, form.value.body);
    }
    this.router.navigateByUrl('/');
  }

  onCancel() {
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.note = new Note();
    this.acRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        this.note = this.noteService.get(params['id']);
        this.new = false;
        this.noteId = params['id'];
      } else {
        this.new = true;
      }
    });
  }
}
