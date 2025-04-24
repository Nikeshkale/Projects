import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  // private http = inject(httpClient)
  
  getJoke() {
    return this.http.get('https://api.chucknorris.io/jokes/random?category=dev')
    // return this.http.get('https://dad-jokes.p.rapidapi.com/joke/ai/cow');
  }
}
