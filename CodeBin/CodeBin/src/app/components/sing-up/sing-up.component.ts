// Template Driven form se create hua hai

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import path from 'path';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css',
})
export class SingUpComponent {

  constructor(private authService:AuthService,private router:Router){}

  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  email = new FormControl('', [
    Validators.required,
    Validators.email, Validators.pattern(this.emailPattern),
  
  ]);

  password = new FormControl('', [
    Validators.minLength(6),
    Validators.required,
  ]);

  singupForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  singup() {

    console.log('singup called');
    // this.router.navigate(["/login"])
    console.log(this.singupForm.value);
    this.authService.registerUser(this.singupForm.value.email,this.singupForm.value.password)
  }

  reset() {
    console.log('reset called');
    this.singupForm.reset();
  }
}



