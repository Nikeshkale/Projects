import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  input = '';
  two = "";
  displayInput: boolean = false;
  onClick(one: any) {
    if (one) {
      this.two = one;
      this.displayInput = true;
      this.input = '';
    } else {
      alert('abe chutiya input box diya hai to wha value kon tera baap dalega');
    }
  }
}
