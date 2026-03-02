import { Component } from '@angular/core';
import { User } from './models/user';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { UserBioComponent } from './components/user-bio/user-bio.component';

@Component({
  selector: 'app-root',
  imports: [UserCardComponent, UserStatusComponent, UserBioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp1';

  user: User = {
    name: 'John Doe',
    age: 30,
    photoUrl: '/placeholder.jpg',
    isOnline: true,
    bio: 'Learnin Angular is fun!'
  };
}
