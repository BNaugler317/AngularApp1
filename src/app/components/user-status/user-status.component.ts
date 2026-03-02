import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-status',
  imports: [],
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.css'
})
export class UserStatusComponent {

  @Input() isOnline!: boolean;

  @Output() statusChange = new EventEmitter<boolean>();

  toggleStatus() {
    this.statusChange.emit(!this.isOnline);
  }
}
