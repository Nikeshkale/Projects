import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../services/joke.service';
import { error } from 'console';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss',
})
export class JokeComponent implements OnInit {

  constructor(private jokeService: JokeService) {}

  jokes: string = 'loading...';

  ngOnInit(): void {
    this.getAnotherJoke();
  }

  // getAnotherJoke() {
  //   this.jokeService.getJoke().subscribe((data: any) => {
  //     this.jokes = data.value;
  //     console.log(data);
  //   });
  // }

  // with error handling

  getAnotherJoke() {
    this.jokeService.getJoke().subscribe({
      next: (data: any) => this.jokes = data.value,
      error: (error) => console.log("Error ------>", error)
    });
  }
}
