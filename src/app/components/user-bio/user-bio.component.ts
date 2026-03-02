import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user-bio',
  imports: [NgIf],
  templateUrl: './user-bio.component.html',
  styleUrl: './user-bio.component.css'
})
export class UserBioComponent {

  @Input() bio!: string;

  @Output() bioChange = new EventEmitter<string>();

  isEditing = false;
  draftBio = '';

  startEdit() {
    this.draftBio = this.bio;
    this.isEditing = true;
  }

  save() {
    this.bioChange.emit(this.draftBio);
    this.isEditing = false;
  }

  cancel() {
    this.isEditing = false;
  }
}
