import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { UserProfileComponent } from './componets/user-profile/user-profile.component';
import { Users } from '../models/user';
import { log } from 'console';
import { JokeComponent } from './componets/joke/joke.component';
import { AComponent } from './componets/a/a.component';
import { B1Component } from './componets/b1/b1.component';
import { B2Component } from './componets/b2/b2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    NgIf,
    HomeComponent,
    UserProfileComponent,
    CommonModule,
    JokeComponent,
    AComponent,
    B1Component,
    B2Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = [
    { name: 'ramesh', isSingle: true, salary: 5000 },
    // { name: 'gamesh', isSingle: false, salary: 6000 },
    // { name: 'pamesh', isSingle: true, salary: 9000 },
  ];

  receivedData(data: Users) {
    console.log(data);

    // const userIndex = this.users.findIndex((user) => {
    //   return user.name == data.name;
    // })

    // this.users[userIndex].salary = data.newSalary;

    // this.users[userIndex].salary = data.newSalary;

    const userIndex = this.users.findIndex((user) => user.name == data.name);
    console.log(userIndex);

    this.users[userIndex].salary = data.newSalary;
  }

  onClear() {
    this.users = [];
  }
}
